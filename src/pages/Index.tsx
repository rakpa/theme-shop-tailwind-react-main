import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThemeShowcase from "@/components/ThemeShowcase";
import PluginShowcase from "@/components/PluginShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
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
