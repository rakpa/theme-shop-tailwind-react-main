import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThemeShowcase from "@/components/ThemeShowcase";
import PluginShowcase from "@/components/PluginShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const success = searchParams.get("success") === "1";
  const canceled = searchParams.get("canceled") === "1";

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (success || canceled) {
      const timeout = setTimeout(() => {
        const params = new URLSearchParams(location.search);
        params.delete("success");
        params.delete("canceled");
        navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [success, canceled, location.pathname, location.search, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {(success || canceled) && (
        <div className={`px-4 py-3 text-center ${success ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {success ? 'Payment successful! Check your email for details.' : 'Payment canceled. You can try again anytime.'}
        </div>
      )}
      <Hero />
      <Features />
      <ThemeShowcase />
      <PluginShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
