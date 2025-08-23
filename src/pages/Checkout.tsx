import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Lock } from "lucide-react";

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
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Complete Your Purchase</h2>
          <p className="text-sm text-muted-foreground mt-1">One-time Payment – $19 for the full bundle</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">Card Details</label>
            <div className="border rounded-md px-3 py-3 bg-background focus-within:ring-2 focus-within:ring-primary">
              <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
            </div>
          </div>
          {error && <div className="text-destructive text-sm bg-destructive/10 border border-destructive rounded-md px-3 py-2">{error}</div>}
          {success && <div className="text-green-700 text-sm bg-green-100 border border-green-300 rounded-md px-3 py-2">Payment successful! Check your email for the receipt.</div>}
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={!stripe || loading}>
            {loading ? 'Processing…' : 'Pay $19 Securely'}
          </Button>
        </form>
        <div className="px-6 pb-6">
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock size={16} />
              <span>Stripe secure payment</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['visa','mastercard','amex','applepay','googlepay'].map((brand) => (
                <span key={brand} className="px-2 py-1 text-xs rounded border bg-background">
                  {brand === 'visa' && 'Visa'}
                  {brand === 'mastercard' && 'Mastercard'}
                  {brand === 'amex' && 'American Express'}
                  {brand === 'applepay' && 'Apple Pay'}
                  {brand === 'googlepay' && 'Google Pay'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
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