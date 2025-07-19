import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Shield, 
  Headphones, 
  Globe,
  Code,
  Layers,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Premium Design",
      description: "Professionally crafted designs with modern aesthetics and attention to detail."
    },
    {
      icon: Smartphone,
      title: "100% Responsive",
      description: "Perfect display on all devices - desktop, tablet, and mobile optimized."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with clean code and best practices implementation."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security in mind and regularly updated for WordPress compatibility."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support team ready to help you with any questions or issues."
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Search engine friendly code structure to help your site rank higher."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-documented, organized code that's easy to customize and maintain."
    },
    {
      icon: Layers,
      title: "Multi-Purpose",
      description: "Versatile templates suitable for any business, portfolio, or blog."
    },
    {
      icon: Settings,
      title: "Easy Customization",
      description: "User-friendly customization options with theme options panel."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Our 
            <span className="text-primary"> WordPress Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need to create stunning WordPress websites with 
            professional themes and powerful plugins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;