import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  UrlField,
  BooleanField,
  RepeaterField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const {
    company_description = "Transforming businesses with innovative solutions and cutting-edge technology. Your success is our mission.",
    company_address = "San Francisco, CA",
    quick_links = [],
    support_links = [],
    show_newsletter = true,
    newsletter_text = "Subscribe to our newsletter",
    privacy_policy_url = "/privacy",
    cookie_policy_url = "/cookies"
  } = fieldValues || {};

  const defaultQuickLinks = [
    { text: "About Us", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Products", url: "/products" },
    { text: "Case Studies", url: "/case-studies" },
    { text: "Blog", url: "/blog" },
    { text: "Careers", url: "/careers" }
  ];

  const defaultSupportLinks = [
    { text: "Help Center", url: "/help" },
    { text: "Documentation", url: "/docs" },
    { text: "Contact Support", url: "/support" },
    { text: "Community", url: "/community" },
    { text: "Status Page", url: "/status" },
    { text: "Terms of Service", url: "/terms" }
  ];

  const quickLinksData = quick_links.length > 0 ? quick_links : defaultQuickLinks;
  const supportLinksData = support_links.length > 0 ? support_links : defaultSupportLinks;

  const socialLinks = [
    { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-facebook", url: "#", label: "Facebook" },
    { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" },
    { icon: "fab fa-github", url: "#", label: "GitHub" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold">Business Pro</span>
              </div>
              
              <p 
                className="text-white/80 mb-6 leading-relaxed max-w-md"
                dangerouslySetInnerHTML={{ __html: company_description }}
              />
              
              <div className="mb-6">
                <div className="flex items-center text-white/80">
                  <i className="fas fa-map-marker-alt text-primary mr-3 w-5"></i>
                  <span>{company_address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:-translate-y-1"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinksData.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {supportLinksData.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          {show_newsletter && (
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">{newsletter_text}</h3>
                <form className="flex gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 text-gray-900 bg-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Business Pro. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href={privacy_policy_url}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href={cookie_policy_url}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-foreground"
                aria-label="Back to top"
              >
                <i className="fas fa-arrow-up text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <RichTextField 
      name="company_description" 
      label="Company Description" 
      default="Transforming businesses with innovative solutions and cutting-edge technology. Your success is our mission."
    />
    <TextField 
      name="company_address" 
      label="Company Address" 
      default="San Francisco, CA"
    />
    <RepeaterField name="quick_links" label="Quick Links" min={1} max={10}>
      <TextField name="text" label="Link Text" />
      <UrlField name="url" label="Link URL" />
    </RepeaterField>
    <RepeaterField name="support_links" label="Support Links" min={1} max={10}>
      <TextField name="text" label="Link Text" />
      <UrlField name="url" label="Link URL" />
    </RepeaterField>
    <BooleanField 
      name="show_newsletter" 
      label="Show Newsletter Signup" 
      default={true}
    />
    <TextField 
      name="newsletter_text" 
      label="Newsletter Text" 
      default="Subscribe to our newsletter"
    />
    <UrlField 
      name="privacy_policy_url" 
      label="Privacy Policy URL" 
      default="/privacy"
    />
    <UrlField 
      name="cookie_policy_url" 
      label="Cookie Policy URL" 
      default="/cookies"
    />
  </ModuleFields>
);

export const meta = {
  label: "Footer"
};