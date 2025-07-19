import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Zap, ShoppingCart, Mail, Users, BarChart, Palette } from "lucide-react";

const PluginShowcase = () => {
  const plugins = [
    {
      id: 1,
      name: "WP Form Builder Pro",
      category: "Forms",
      price: 29,
      rating: 4.9,
      downloads: "25K+",
      icon: Mail,
      description: "Advanced form builder with drag & drop interface and conditional logic.",
      features: ["Drag & Drop", "Conditional Logic", "Payment Integration"]
    },
    {
      id: 2,
      name: "Analytics Dashboard",
      category: "Analytics",
      price: 39,
      rating: 4.8,
      downloads: "18K+",
      icon: BarChart,
      description: "Complete analytics solution with beautiful charts and reports.",
      features: ["Real-time Data", "Custom Reports", "Export Options"]
    },
    {
      id: 3,
      name: "Speed Optimizer Pro",
      category: "Performance",
      price: 25,
      rating: 4.9,
      downloads: "32K+",
      icon: Zap,
      description: "Boost your website speed with advanced optimization techniques.",
      features: ["Image Compression", "Cache Management", "CDN Integration"]
    },
    {
      id: 4,
      name: "E-Commerce Booster",
      category: "E-Commerce",
      price: 49,
      rating: 4.7,
      downloads: "15K+",
      icon: ShoppingCart,
      description: "Enhance your WooCommerce store with advanced features.",
      features: ["Product Variants", "Bulk Discounts", "Advanced Search"]
    },
    {
      id: 5,
      name: "Membership Manager",
      category: "Membership",
      price: 59,
      rating: 4.8,
      downloads: "12K+",
      icon: Users,
      description: "Complete membership solution with subscription management.",
      features: ["User Levels", "Content Protection", "Payment Gateways"]
    },
    {
      id: 6,
      name: "Design Tools Pro",
      category: "Design",
      price: 35,
      rating: 4.9,
      downloads: "20K+",
      icon: Palette,
      description: "Advanced design tools for creating stunning page layouts.",
      features: ["Visual Builder", "Custom Elements", "Template Library"]
    }
  ];

  return (
    <section id="plugins" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful WordPress 
            <span className="text-primary"> Plugins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extend your WordPress functionality with our premium plugins designed 
            to enhance performance, user experience, and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin) => (
            <Card key={plugin.id} className="group hover:shadow-card transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 rounded-lg w-14 h-14 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <plugin.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="fill-accent text-accent mr-1" size={14} />
                    {plugin.rating}
                  </div>
                </div>

                <div className="mb-3">
                  <Badge variant="secondary" className="text-xs mb-2">
                    {plugin.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plugin.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {plugin.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {plugin.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Download size={14} className="mr-1" />
                    {plugin.downloads} downloads
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    ${plugin.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Buy Plugin
                  </Button>
                  <Button variant="outline" size="sm">
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Plugins
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PluginShowcase;