import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Personal",
      price: 0,
      period: "Free",
      description: "Perfect for personal projects and learning",
      features: [
        "2 Free Themes",
        "Basic Plugins",
        "Community Support",
        "Basic Documentation",
        "Regular Updates"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Business",
      price: 49,
      period: "month",
      description: "Best for growing businesses and professionals",
      features: [
        "All Premium Themes",
        "All Premium Plugins",
        "Priority Support",
        "Advanced Documentation",
        "Premium Updates",
        "Developer License",
        "Custom Support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "For agencies and enterprise solutions",
      features: [
        "Everything in Business",
        "White Label License",
        "Client Management",
        "Priority Email Support",
        "Phone Support",
        "Custom Development",
        "Advanced Analytics",
        "Multi-site License"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "premium" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent 
            <span className="text-primary"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include free updates, 
            documentation, and our standard support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-card ${
                plan.popular 
                  ? 'border-primary shadow-hero scale-105' 
                  : 'border-border hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="mr-1" size={14} />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.price === 0 ? '' : `/${plan.period}`}
                  </span>
                </div>
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? 
            <Button variant="link" className="p-0 ml-1 h-auto">
              Contact our sales team
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;