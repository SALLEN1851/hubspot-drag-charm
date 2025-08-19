import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Award, Target } from "lucide-react";

const stats = [
  { number: "10K+", label: "Happy Clients", icon: CheckCircle },
  { number: "99%", label: "Success Rate", icon: TrendingUp },
  { number: "50+", label: "Industry Awards", icon: Award },
  { number: "24/7", label: "Support Available", icon: Target }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              About Our Company
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Building the Future of
              <span className="text-primary block">Digital Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over a decade, we've been at the forefront of digital transformation, 
              helping businesses navigate the complex landscape of modern technology. 
              Our commitment to excellence and innovation has made us a trusted partner 
              for companies worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Proven track record of success</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Expert team of professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Cutting-edge technology solutions</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-primary border-0 text-primary-foreground hover:opacity-90 transition-smooth">
              Learn More About Us
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-smooth group"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-bounce" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;