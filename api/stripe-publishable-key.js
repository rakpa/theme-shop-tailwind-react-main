export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const key = process.env.STRIPE_PUBLISHABLE_KEY;
  if (!key) {
    return res.status(500).json({ error: "Publishable key not configured" });
  }
  return res.status(200).json({ publishableKey: key });
}