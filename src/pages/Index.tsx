import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThemeShowcase from "@/components/ThemeShowcase";
import PluginShowcase from "@/components/PluginShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
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
