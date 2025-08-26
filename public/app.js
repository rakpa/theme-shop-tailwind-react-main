const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('file');
const pickBtn = document.getElementById('pick');
const progressEl = document.getElementById('progress');
const barEl = document.getElementById('bar');
const resultEl = document.getElementById('result');

function setProgress(p) {
	progressEl.style.display = 'block';
	barEl.style.width = `${p}%`;
}

function resetUI() {
	setProgress(0);
	resultEl.innerHTML = '';
}

pickBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
	if (fileInput.files && fileInput.files[0]) {
		uploadFile(fileInput.files[0]);
	}
});

function preventDefaults(e) {
	e.preventDefault();
	e.stopPropagation();
}

['dragenter','dragover','dragleave','drop'].forEach(ev => {
	dropzone.addEventListener(ev, preventDefaults, false);
});

['dragenter','dragover'].forEach(ev => {
	dropzone.addEventListener(ev, () => dropzone.classList.add('drag'));
});
['dragleave','drop'].forEach(ev => {
	dropzone.addEventListener(ev, () => dropzone.classList.remove('drag'));
});

dropzone.addEventListener('drop', (e) => {
	const dt = e.dataTransfer;
	const files = dt.files;
	if (files && files[0]) uploadFile(files[0]);
});

async function uploadFile(file) {
	resetUI();
	const form = new FormData();
	form.append('video', file);

	const res = await fetch('/api/upload', {
		method: 'POST',
		body: form,
	});
	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		resultEl.textContent = err.error || 'Upload failed';
		return;
	}
	const { jobId } = await res.json();
	setProgress(1);
	poll(jobId);
}

async function poll(jobId) {
	let done = false;
	while (!done) {
		await new Promise(r => setTimeout(r, 1200));
		const res = await fetch(`/api/status/${jobId}`);
		if (!res.ok) break;
		const data = await res.json();
		if (typeof data.progress === 'number') setProgress(data.progress);
		if (data.status === 'completed' && data.downloadUrl) {
			done = true;
			setProgress(100);
			resultEl.innerHTML = `<a class="btn" href="${data.downloadUrl}">Download MP4</a>`;
		} else if (data.status === 'error') {
			done = true;
			resultEl.textContent = data.error || 'Processing error';
		}
	}
}