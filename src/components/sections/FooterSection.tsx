import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp 
} from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold">Business Pro</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming businesses with innovative solutions and cutting-edge technology. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Products', 'Case Studies', 'Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 p-0 h-auto font-normal justify-start">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Documentation', 'Contact Support', 'Community', 'Status Page', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 p-0 h-auto font-normal justify-start">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/80">hello@businesspro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/80">San Francisco, CA</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <p className="text-white/80 mb-4">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary"
                />
                <Button className="bg-gradient-primary border-0 text-primary-foreground hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="bg-white/20" />
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Business Pro. All rights reserved. Built with ❤️ for modern businesses.
          </p>
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/60 hover:text-white hover:bg-white/10 text-sm"
            >
              Privacy Policy
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/60 hover:text-white hover:bg-white/10 text-sm"
            >
              Cookie Policy
            </Button>
            <Button 
              onClick={scrollToTop}
              size="sm" 
              className="bg-white/10 text-white hover:bg-white/20 transition-smooth group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;