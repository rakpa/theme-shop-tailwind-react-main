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

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 1900,
            product_data: {
              name: "One-time Payment - $19",
              description: "Premium 200+ WordPress themes and 400+ Plugins package",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?success=1`,
      cancel_url: `${origin}/?canceled=1`,
      metadata: {
        package: "wp-bundle",
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe session error", error);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}