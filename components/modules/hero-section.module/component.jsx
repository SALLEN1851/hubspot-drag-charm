import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
  UrlField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues, moduleData }) {
  const {
    hero_title = "Transform Your<br><span class=\"text-accent\">Business Vision</span><br>Into Reality",
    hero_subtitle = "Unlock growth potential with our innovative solutions designed to elevate your business to new heights.",
    hero_background,
    primary_button_text = "Get Started Today",
    primary_button_url = "#",
    secondary_button_text = "Learn More", 
    secondary_button_url = "#"
  } = fieldValues || {};

  const heroBg = hero_background?.src || require('../../assets/hero-bg.jpg');

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('${heroBg}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-8 max-w-6xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in"
          dangerouslySetInnerHTML={{ __html: hero_title }}
        />
        
        <p 
          className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in"
          style={{animationDelay: '0.2s'}}
          dangerouslySetInnerHTML={{ __html: hero_subtitle }}
        />
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {primary_button_text && (
            <a 
              href={primary_button_url}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
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
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <RichTextField 
      name="hero_title" 
      label="Hero Title" 
      default="Transform Your<br><span class=\"text-accent\">Business Vision</span><br>Into Reality" 
    />
    <RichTextField 
      name="hero_subtitle" 
      label="Hero Subtitle" 
      default="Unlock growth potential with our innovative solutions designed to elevate your business to new heights."
    />
    <ImageField 
      name="hero_background" 
      label="Hero Background Image"
      resizable={true}
    />
    <TextField 
      name="primary_button_text" 
      label="Primary Button Text" 
      default="Get Started Today"
    />
    <UrlField 
      name="primary_button_url" 
      label="Primary Button URL" 
      default="#"
    />
    <TextField 
      name="secondary_button_text" 
      label="Secondary Button Text" 
      default="Learn More"
    />
    <UrlField 
      name="secondary_button_url" 
      label="Secondary Button URL" 
      default="#"
    />
  </ModuleFields>
);

export const meta = {
  label: "Hero Section"
};