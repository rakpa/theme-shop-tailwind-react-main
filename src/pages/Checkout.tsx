import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const redirectToStripeCheckout = async () => {
      try {
        const res = await fetch("/api/create-checkout-session", {
          method: "POST",
        });
        const data = await res.json();
        if (!data?.url) {
          throw new Error("Failed to create Stripe checkout session");
        }
        window.location.href = data.url;
      } catch (e: any) {
        setError(e?.message || "Failed to redirect to Stripe checkout.");
        setLoading(false);
      }
    };

    redirectToStripeCheckout();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Redirecting to Checkout...</h1>
        {loading && (
          <p className="text-muted-foreground">
            Please wait while we redirect you to the secure Stripe checkout page.
          </p>
        )}
        {error && (
          <div className="max-w-xl mx-auto mt-8 text-destructive bg-destructive/10 border border-destructive rounded-md px-3 py-2">
            {error}
            <div className="mt-4">
              <Button onClick={() => window.location.href = "/"}>Return to Home</Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
