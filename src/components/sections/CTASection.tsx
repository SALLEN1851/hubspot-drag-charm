import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get
            <span className="block text-primary-glow">Started?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their business with our solutions.
          </p>
          
          {/* Email Subscription */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <Input 
                  placeholder="Enter your email address" 
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 h-12"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-smooth font-semibold px-8 h-12 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time. By signing up, you agree to our terms of service.
            </p>
          </div>
          
          {/* Alternative CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-smooth text-lg px-8 py-4 h-auto font-semibold shadow-glow group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth text-lg px-8 py-4 h-auto font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              ✓ 30-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;