import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  UrlField,
  BooleanField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const {
    cta_title = "Ready to Get<br><span class=\"text-accent\">Started?</span>",
    cta_subtitle = "Join thousands of satisfied customers who have transformed their business with our solutions.",
    show_email_form = true,
    email_placeholder = "Enter your email address",
    form_button_text = "Get Started",
    form_action = "#",
    form_disclaimer = "No spam, unsubscribe at any time. By signing up, you agree to our terms of service.",
    primary_button_text = "Start Free Trial",
    primary_button_url = "/signup",
    secondary_button_text = "Schedule Demo",
    secondary_button_url = "/demo",
    trust_indicators = true,
    trust_text = "✓ 30-day free trial • ✓ No credit card required • ✓ Cancel anytime"
  } = fieldValues || {};

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <h2 
          className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: cta_title }}
        />
        
        <p 
          className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: cta_subtitle }}
        />

        {/* Email Form or Buttons */}
        {show_email_form ? (
          <div className="mb-8">
            <form 
              action={form_action}
              method="POST"
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4"
            >
              <input
                type="email"
                name="email"
                placeholder={email_placeholder}
                required
                className="flex-1 px-4 py-3 text-gray-900 bg-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {form_button_text}
              </button>
            </form>
            
            <p 
              className="text-sm opacity-70 max-w-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: form_disclaimer }}
            />
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {primary_button_text && (
              <a
                href={primary_button_url}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {primary_button_text}
              </a>
            )}
            {secondary_button_text && (
              <a
                href={secondary_button_url}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {secondary_button_text}
              </a>
            )}
          </div>
        )}

        {/* Trust Indicators */}
        {trust_indicators && trust_text && (
          <div className="text-sm opacity-70 font-medium">
            {trust_text}
          </div>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <RichTextField 
      name="cta_title" 
      label="CTA Title" 
      default="Ready to Get<br><span class=\"text-accent\">Started?</span>"
    />
    <RichTextField 
      name="cta_subtitle" 
      label="CTA Subtitle" 
      default="Join thousands of satisfied customers who have transformed their business with our solutions."
    />
    <BooleanField 
      name="show_email_form" 
      label="Show Email Signup Form" 
      default={true}
    />
    <TextField 
      name="email_placeholder" 
      label="Email Input Placeholder" 
      default="Enter your email address"
    />
    <TextField 
      name="form_button_text" 
      label="Form Submit Button Text" 
      default="Get Started"
    />
    <UrlField 
      name="form_action" 
      label="Form Action URL" 
      default="#"
      helpText="The URL where the form should submit to"
    />
    <RichTextField 
      name="form_disclaimer" 
      label="Form Disclaimer Text" 
      default="No spam, unsubscribe at any time. By signing up, you agree to our terms of service."
    />
    <TextField 
      name="primary_button_text" 
      label="Primary Button Text" 
      default="Start Free Trial"
    />
    <UrlField 
      name="primary_button_url" 
      label="Primary Button URL" 
      default="/signup"
    />
    <TextField 
      name="secondary_button_text" 
      label="Secondary Button Text" 
      default="Schedule Demo"
    />
    <UrlField 
      name="secondary_button_url" 
      label="Secondary Button URL" 
      default="/demo"
    />
    <BooleanField 
      name="trust_indicators" 
      label="Show Trust Indicators" 
      default={true}
    />
    <TextField 
      name="trust_text" 
      label="Trust Indicators Text" 
      default="✓ 30-day free trial • ✓ No credit card required • ✓ Cancel anytime"
    />
  </ModuleFields>
);

export const meta = {
  label: "CTA Section"
};