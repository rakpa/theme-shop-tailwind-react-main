import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Users } from "lucide-react";

const Hero = () => {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error("Checkout error", e);
    }
  };

  return (
    <section className="bg-hero-gradient py-20 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <Badge className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              🎉 New Premium Collection Available
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              The Best Selling Multi-Purpose & Bootstrap 
              <span className="block text-accent">WordPress Templates</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Premium WordPress themes and plugins with professional design, 
              multi-page layouts, and one-page templates. Perfect for any business.
            </p>

            <p className="text-lg font-semibold text-accent-foreground mb-3">
              Premium 200+ WordPress themes and 400+ Plugins package
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="group" onClick={handleCheckout}>
                One-time Payment -$19
              </Button>
              <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
                View Demos
              </Button>
            </div>

            <div className="flex items-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Star className="fill-accent text-accent" size={20} />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download size={20} />
                <span className="font-semibold">50K+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span className="font-semibold">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <Card className="bg-background/95 backdrop-blur-sm shadow-hero p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-muted-foreground">Dashboard</div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-background rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Visitors Active</span>
                      <span className="text-2xl font-bold text-primary">89%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-primary h-2 rounded-full w-[89%]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Revenue</div>
                      <div className="text-lg font-bold">$12,458</div>
                    </div>
                    <div className="bg-background rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Orders</div>
                      <div className="text-lg font-bold">1,425</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;