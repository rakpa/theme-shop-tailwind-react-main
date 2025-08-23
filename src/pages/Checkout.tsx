import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-payment-intent", { method: "POST" });
      const data = await res.json();
      if (!data?.clientSecret) throw new Error("Unable to initialize payment");

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: { name, email }
        },
        receipt_email: email
      });

      if (result.error) {
        setError(result.error.message || "Payment failed");
      } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err?.message || "Payment error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-card p-6 rounded-md border">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border rounded px-3 py-2 bg-background" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border rounded px-3 py-2 bg-background" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm mb-1">Card Details</label>
        <div className="border rounded px-3 py-2 bg-background">
          <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
        </div>
      </div>
      {error && <div className="text-destructive text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Payment successful! Check your email for the receipt.</div>}
      <Button type="submit" variant="hero" disabled={!stripe || loading}>
        {loading ? 'Processing…' : 'Pay $19'}
      </Button>
    </form>
  );
};

const Checkout = () => {
  const [publishableKey, setPublishableKey] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/stripe-publishable-key");
        const data = await res.json();
        if (!data?.publishableKey) throw new Error("No publishable key");
        setPublishableKey(data.publishableKey);
      } catch (e: any) {
        setErr(e?.message || "Failed to load publishable key");
      }
    })();
  }, []);

  if (err) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-destructive">{err}</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        {!publishableKey ? (
          <div>Loading…</div>
        ) : (
          <Elements stripe={loadStripe(publishableKey)}>
            <CheckoutForm />
          </Elements>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;