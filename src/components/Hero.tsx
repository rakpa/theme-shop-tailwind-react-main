import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <section className="bg-hero-gradient py-32 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="lg:w-full text-center">
            <Badge className="mb-10 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              🎉 New Premium Collection Available
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-10 leading-relaxed">
 The Best Selling Multi-Purpose & Bootstrap&nbsp;
              <span className="block text-accent">WordPress Templates</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
              Premium WordPress themes and plugins with professional design, 
              multi-page layouts, and one-page templates. Perfect for any business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Button variant="hero" size="xl" className="group" onClick={handleCheckout}>
                One-time Payment - $19
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
