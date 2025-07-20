import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Zap, ShoppingCart, Mail, Users, BarChart, Palette } from "lucide-react";
import React from "react"; // Added missing import

const PluginShowcase = () => {
  const plugins = [
    {
      name: "Ultimate Addons",
      description: "Powerful addon pack for WordPress.",
      price: 15,
      image: "/images/Ultimate Addons.jpg"
    },
    {
      name: "Total Cache",
      description: "Speed up your site with advanced caching.",
      price: 15,
      image: "/images/Total Cache.jpg"
    },
    {
      name: "Ultimate Addons for Elementor",
      description: "Enhance Elementor with premium widgets.",
      price: 15,
      image: "/images/Ultimate Addons for Elementor.jpg"
    },
    {
      name: "WP Rocket",
      description: "Premium caching plugin for WordPress.",
      price: 15,
      image: "/images/WP Rocket.jpg"
    },
    {
      name: "Membership PRO",
      description: "Advanced membership management.",
      price: 15,
      image: "/images/Membership PRO.jpg"
    },
    {
      name: "Woocommerece Notification",
      description: "Show real-time sales notifications.",
      price: 15,
      image: "/images/Woocommerece Notification.jpg"
    },
    {
      name: "Woocommerece Order Tracker",
      description: "Track WooCommerce orders easily.",
      price: 15,
      image: "/images/Woocommerece Order Tracker.jpg"
    },
    {
      name: "Social Login for WordPress",
      description: "Enable social login on your site.",
      price: 15,
      image: "/images/Social Login for WordPress.jpg"
    },
    {
      name: "Ultimate addons for Beaver Builder",
      description: "Premium addons for Beaver Builder.",
      price: 15,
      image: "/images/Ultimate addons for Beaver Builder.jpg"
    },
    {
      name: "SNIP Structured Data",
      description: "Add rich snippets to your site.",
      price: 15,
      image: "/images/SNIP Structured Data.jpg"
    },
    {
      name: "SEOPress",
      description: "Comprehensive SEO plugin.",
      price: 15,
      image: "/images/SEOPress.jpg"
    },
    {
      name: "SCHEMA PRO",
      description: "Advanced schema markup plugin.",
      price: 15,
      image: "/images/SCHEMA PRO.jpg"
    },
    {
      name: "Premium SEO Pack",
      description: "All-in-one SEO solution.",
      price: 15,
      image: "/images/Premium SEO Pack.jpg"
    },
    {
      name: "RANKIE",
      description: "Track your keyword rankings.",
      price: 15,
      image: "/images/RANKIE.jpg"
    },
    {
      name: "Permalink Manager Pro",
      description: "Manage permalinks with ease.",
      price: 15,
      image: "/images/Permalink Manager Pro.jpg"
    },
    {
      name: "All in one SEO PRO",
      description: "Complete SEO toolkit.",
      price: 15,
      image: "/images/All in one SEO PRO.jpg"
    },
    {
      name: "SmartCrawl",
      description: "SEO and site optimization.",
      price: 15,
      image: "/images/SmartCrawl.jpg"
    },
    {
      name: "W3 Total Cache",
      description: "Improve site performance.",
      price: 15,
      image: "/images/W3 Total Cache.jpg"
    },
    {
      name: "WP Fastest cache Premium",
      description: "Fast and easy caching.",
      price: 15,
      image: "/images/WP Fastest cache Premium.jpg"
    },
    {
      name: "WP AMP",
      description: "Accelerated Mobile Pages for WP.",
      price: 15,
      image: "/images/WP AMP.jpg"
    },
    {
      name: "Meet Smush Pro",
      description: "Image optimization plugin.",
      price: 15,
      image: "/images/Meet Smush Pro.jpg"
    },
    {
      name: "Swift Performance",
      description: "Speed up your WordPress site.",
      price: 15,
      image: "/images/Swift Performance.jpg"
    },
    {
      name: "PixelYourSite",
      description: "Manage tracking pixels easily.",
      price: 15,
      image: "/images/PixelYourSite.jpg"
    },
    {
      name: "Woocommerece Google Analytics Pro",
      description: "Advanced Google Analytics for WooCommerce.",
      price: 15,
      image: "/images/Woocommerece Google Analytics Pro.jpg"
    },
    {
      name: "Woocommerce Reporting",
      description: "Detailed WooCommerce reports.",
      price: 15,
      image: "/images/Woocommerce Reporting.jpg"
    },
    {
      name: "Google Analytics+",
      description: "Enhanced Google Analytics integration.",
      price: 15,
      image: "/images/Google Analytics+.jpg"
    },
    {
      name: "Beehive Pro",
      description: "Google Analytics dashboard plugin.",
      price: 15,
      image: "/images/Beehive Pro.jpg"
    },
    {
      name: "Layer Slider",
      description: "Premium slider plugin.",
      price: 15,
      image: "/images/Layer Slider.jpg"
    },
    {
      name: "iThemes Security Pro",
      description: "Advanced WordPress security.",
      price: 15,
      image: "/images/iThemes Security Pro.jpg"
    },
    {
      name: "Backup Buddy",
      description: "Backup and restore plugin.",
      price: 15,
      image: "/images/Backup Buddy.jpg"
    },
    {
      name: "Content Locker",
      description: "Lock content for subscribers.",
      price: 15,
      image: "/images/Content Locker.jpg"
    },
  ];

  // Remove duplicate entries from the plugins array based on image filename
  const uniquePlugins = [];
  const seenPluginImages = new Set();
  for (const plugin of plugins) {
    const img = (plugin.image || '').toLowerCase();
    if (!seenPluginImages.has(img)) {
      uniquePlugins.push(plugin);
      seenPluginImages.add(img);
    }
  }

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
          {uniquePlugins.map((plugin) => {
            // Generate possible image file names from plugin name
            const baseName = plugin.name.toLowerCase().replace(/\s+/g, '-');
            const imageFiles = [
              `/images/${baseName}.jpg`,
              `/images/${baseName}.jpeg`,
              `/images/${baseName}.png`,
            ];
            // State to track which image to show
            const [imgSrc, setImgSrc] = React.useState(imageFiles[0]);
            // Handler to try next extension if image fails
            const handleImgError = () => {
              const currentIdx = imageFiles.indexOf(imgSrc);
              if (currentIdx < imageFiles.length - 1) {
                setImgSrc(imageFiles[currentIdx + 1]);
              } else {
                setImgSrc(""); // No image found, fallback to icon
              }
            };
            return (
              <Card key={plugin.name} className="group hover:shadow-card transition-all duration-300 hover:border-primary/20">
                <div className="relative overflow-hidden bg-white" style={{ aspectRatio: '16/9' }}>
                  {plugin.image ? (
                    <img src={plugin.image} alt={plugin.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <Mail className="text-primary" size={32} />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    {/* Removed icon below image */}
                    <div />
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="fill-accent text-accent mr-1" size={14} />
                      4.9
                    </div>
                  </div>
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs mb-2">
                      Plugin
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plugin.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {plugin.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Download size={14} className="mr-1" />
                      25K+ downloads
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      ${plugin.price}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">Buy Plugin</Button>
                    <Button variant="outline" size="sm">Demo</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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