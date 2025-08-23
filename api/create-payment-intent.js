import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Stripe secret key not configured" });
  }

  try {
    const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1900,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: { package: "wp-bundle" }
    });

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Create PaymentIntent error", error);
    return res.status(500).json({ error: "Failed to create PaymentIntent" });
  }
}