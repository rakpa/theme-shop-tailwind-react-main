import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Eye, Heart } from "lucide-react";
import businessProImg from '@/assets/themes/avada.jpg';

const ThemeShowcase = () => {
  const themes = [
    {
      id: 1,
      name: "Business Pro",
      category: "Business",
      price: 49,
      rating: 4.9,
      downloads: "12K+",
      image: businessProImg,
      features: ["Responsive", "SEO Ready", "WooCommerce"],
      isPopular: true
    },
    {
      id: 2,
      name: "Portfolio Elite",
      category: "Portfolio",
      price: 39,
      rating: 4.8,
      downloads: "8K+",
      image: businessProImg,
      features: ["Creative", "Fast Loading", "Mobile First"]
    },
    {
      id: 3,
      name: "E-Commerce Plus",
      category: "E-Commerce",
      price: 59,
      rating: 4.9,
      downloads: "15K+",
      image: businessProImg,
      features: ["WooCommerce", "Multi-vendor", "Payment Ready"]
    },
    {
      id: 4,
      name: "Blog Master",
      category: "Blog",
      price: 29,
      rating: 4.7,
      downloads: "6K+",
      image: businessProImg,
      features: ["Content Focus", "Social Ready", "Ad Optimized"]
    },
    {
      id: 5,
      name: "Restaurant Deluxe",
      category: "Restaurant",
      price: 45,
      rating: 4.8,
      downloads: "9K+",
      image: businessProImg,
      features: ["Menu Builder", "Reservation", "Gallery"]
    },
    {
      id: 6,
      name: "Agency Pro",
      category: "Agency",
      price: 55,
      rating: 4.9,
      downloads: "11K+",
      image: businessProImg,
      features: ["Team Showcase", "Project Gallery", "Contact Forms"]
    }
  ];

  return (
    <section id="themes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Premium WordPress 
            <span className="text-primary"> Themes Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked collection of premium WordPress themes designed 
            for modern businesses and creative professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <Card key={theme.id} className="group hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={theme.image} 
                  alt={theme.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {theme.isPopular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" className="bg-background/80 backdrop-blur-sm hover:bg-background">
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {theme.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="fill-accent text-accent mr-1" size={14} />
                    {theme.rating}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {theme.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-4">
                  {theme.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Download size={14} className="mr-1" />
                    {theme.downloads} downloads
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    ${theme.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Buy Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Themes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThemeShowcase;