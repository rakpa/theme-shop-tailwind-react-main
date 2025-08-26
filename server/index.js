import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeInstaller from '@ffprobe-installer/ffprobe';
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime-types';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const UPLOAD_DIR = path.resolve('/workspace/data/uploads');
const OUTPUT_DIR = path.resolve('/workspace/data/outputs');
const LOG_DIR = path.resolve('/workspace/data/passlogs');

for (const dir of [UPLOAD_DIR, OUTPUT_DIR, LOG_DIR]) {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const MAX_FILE_SIZE_BYTES = 1 * 1024 * 1024 * 1024; // 1 GB
const TARGET_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB cap
const ACCEPTED_MIME = new Set([
	'video/mp4',
	'video/quicktime', // mov
	'video/x-msvideo', // avi
	'video/x-matroska', // mkv
]);

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
	filename: (_req, file, cb) => {
		const ext = mime.extension(file.mimetype) || 'mp4';
		cb(null, `${Date.now()}-${uuidv4()}.${ext}`);
	},
});

const upload = multer({
	storage,
	limits: { fileSize: MAX_FILE_SIZE_BYTES },
	fileFilter: (_req, file, cb) => {
		if (ACCEPTED_MIME.has(file.mimetype)) return cb(null, true);
		return cb(new Error('Unsupported file type'));
	},
});

// In-memory processing state per jobId
const jobs = new Map();

app.use(express.static(path.resolve('/workspace/public')));

app.post('/api/upload', upload.single('video'), async (req, res) => {
	try {
		if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
		const jobId = uuidv4();
		const inputPath = req.file.path;
		const outputFilename = `${jobId}.mp4`;
		const outputPath = path.join(OUTPUT_DIR, outputFilename);

		jobs.set(jobId, {
			status: 'queued',
			progress: 0,
			inputPath,
			outputPath,
			outputFilename,
			error: null,
		});

		process.nextTick(() => startTranscode(jobId));

		return res.json({ jobId });
	} catch (err) {
		return res.status(500).json({ error: String(err) });
	}
});

app.get('/api/status/:jobId', (req, res) => {
	const job = jobs.get(req.params.jobId);
	if (!job) return res.status(404).json({ error: 'Job not found' });
	return res.json({
		status: job.status,
		progress: job.progress,
		downloadUrl: job.status === 'completed' ? `/api/download/${req.params.jobId}` : null,
		error: job.error,
	});
});

app.get('/api/download/:jobId', (req, res) => {
	const job = jobs.get(req.params.jobId);
	if (!job) return res.status(404).json({ error: 'Job not found' });
	if (job.status !== 'completed') return res.status(400).json({ error: 'Job not completed' });
	const filename = job.outputFilename || `${req.params.jobId}.mp4`;
	res.download(job.outputPath, filename);
});

function estimateBitrateForTargetSize(targetBytes, durationSeconds, audioBitrateKbps) {
	// target total bitrate = (targetBytes * 8 bits) / duration
	const totalKbps = (targetBytes * 8) / 1000 / Math.max(1, durationSeconds);
	// reserve audio
	const videoKbps = Math.max(100, totalKbps - audioBitrateKbps);
	return {
		totalKbps: Math.max(120, Math.floor(totalKbps)),
		videoKbps: Math.max(100, Math.floor(videoKbps)),
	};
}

async function probeDuration(filePath) {
	return new Promise((resolve, reject) => {
		ffmpeg.ffprobe(filePath, (err, data) => {
			if (err) return reject(err);
			const sec = data?.format?.duration ? Number(data.format.duration) : 0;
			resolve(Number.isFinite(sec) ? sec : 0);
		});
	});
}

function transcodeOnce({ inputPath, outputPath, videoKbps, audioKbps, heightMax }, onProgress) {
	return new Promise((resolve, reject) => {
		const scale = `scale=w=-2:h=${heightMax}:force_original_aspect_ratio=decrease`;
		ffmpeg(inputPath)
			.outputOptions([
				'-c:v libx264',
				'-preset veryslow',
				`-b:v ${videoKbps}k`,
				'-maxrate ' + Math.round(videoKbps * 1.5) + 'k',
				'-bufsize ' + Math.round(videoKbps * 3) + 'k',
				`-vf ${scale}`,
				'-movflags +faststart',
				'-r 30',
				'-pix_fmt yuv420p',
				'-profile:v high',
				'-level 4.1',
				'-c:a aac',
				`-b:a ${audioKbps}k`,
				'-ac 1',
			])
			.on('progress', (p) => onProgress?.(p))
			.on('error', reject)
			.on('end', resolve)
			.save(outputPath);
	});
}

async function startTranscode(jobId) {
	const job = jobs.get(jobId);
	if (!job) return;
	job.status = 'probing';

	try {
		const durationSeconds = await probeDuration(job.inputPath);
		const audioBitrateKbps = 64; // aac 64k mono
		const { videoKbps } = estimateBitrateForTargetSize(TARGET_FILE_SIZE_BYTES, durationSeconds, audioBitrateKbps);

		job.status = 'processing';
		job.progress = 1;

		// Iterative adaptation: try multiple passes reducing bitrate and resolution ladder
		const ladders = [720, 540, 480, 360, 240];
		let currentKbps = videoKbps;
		let success = false;
		let tempOut = job.outputPath;

		for (let i = 0; i < ladders.length; i++) {
			const height = ladders[i];
			// write to temp file for intermediate passes
			tempOut = job.outputPath.replace(/\.mp4$/, `.h${height}.mp4`);
			await transcodeOnce({
				inputPath: job.inputPath,
				outputPath: tempOut,
				videoKbps: Math.max(100, Math.floor(currentKbps)),
				audioKbps: audioBitrateKbps,
				heightMax: height,
			}, (p) => {
				if (p && typeof p.percent === 'number') {
					job.progress = Math.min(99, Math.max(job.progress, Math.floor(p.percent)));
				}
			});

			const stats = fs.statSync(tempOut);
			if (stats.size <= TARGET_FILE_SIZE_BYTES) {
				fs.renameSync(tempOut, job.outputPath);
				success = true;
				break;
			}

			// adjust bitrate for next pass based on overshoot ratio
			const overshootRatio = stats.size / TARGET_FILE_SIZE_BYTES;
			currentKbps = Math.max(80, Math.floor(currentKbps / overshootRatio * 0.95));
		}

		if (!success) {
			throw new Error('Unable to compress under 10 MB with acceptable settings');
		}

		job.status = 'completed';
		job.progress = 100;
		if (fs.existsSync(job.inputPath)) fs.unlink(job.inputPath, () => {});
	} catch (err) {
		job.status = 'error';
		job.error = String(err);
		cleanupFiles(job);
	}
}

function cleanupFiles(job) {
	try {
		if (job?.inputPath && fs.existsSync(job.inputPath)) fs.unlinkSync(job.inputPath);
		if (job?.outputPath && fs.existsSync(job.outputPath)) fs.unlinkSync(job.outputPath);
		// remove any intermediate files
		const base = job?.outputPath?.replace(/\.mp4$/, '') || '';
		for (const h of [720, 540, 480, 360, 240]) {
			const p = `${base}.h${h}.mp4`;
			if (fs.existsSync(p)) try { fs.unlinkSync(p); } catch {}
		}
	} catch {}
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});