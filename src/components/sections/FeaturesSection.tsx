import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Rocket, Users, BarChart, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that delivers results at the speed of business.",
    badge: "Performance"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols to protect your most valuable assets.",
    badge: "Security"
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Get up and running in minutes, not months, with our streamlined process.",
    badge: "Efficiency"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools that bring your team together.",
    badge: "Teamwork"
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Data-driven insights to make informed decisions and drive growth.",
    badge: "Analytics"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge technology that keeps you ahead of the competition.",
    badge: "Innovation"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features for
            <span className="text-primary block">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your business operations and achieve sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth bg-card border-border hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
                        {feature.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;