import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  RepeaterField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const {
    section_badge = "Why Choose Us",
    section_title = "Powerful Features for<br><span class=\"text-primary\">Modern Businesses</span>",
    section_subtitle = "Everything you need to transform your business operations and achieve sustainable growth.",
    features = []
  } = fieldValues || {};

  const defaultFeatures = [
    {
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at the speed of business.",
      icon: "fas fa-bolt",
      badge: "Performance"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your most valuable assets.",
      icon: "fas fa-shield-alt",
      badge: "Security"
    },
    {
      title: "Rapid Deployment", 
      description: "Get up and running in minutes, not months, with our streamlined process.",
      icon: "fas fa-rocket",
      badge: "Efficiency"
    },
    {
      title: "Team Collaboration",
      description: "Seamless collaboration tools that bring your team together.",
      icon: "fas fa-users",
      badge: "Teamwork"
    },
    {
      title: "Advanced Analytics",
      description: "Data-driven insights to make informed decisions and drive growth.",
      icon: "fas fa-chart-bar",
      badge: "Analytics"
    },
    {
      title: "Innovation First",
      description: "Cutting-edge technology that keeps you ahead of the competition.",
      icon: "fas fa-lightbulb",
      badge: "Innovation"
    }
  ];

  const featureList = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
            {section_badge}
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
            dangerouslySetInnerHTML={{ __html: section_title }}
          />
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section_subtitle }}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant hover:border-primary/20 group"
            >
              {/* Feature Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <i className={`${feature.icon} text-primary-foreground text-xl`}></i>
                </div>
                {feature.badge && (
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium border border-border">
                    {feature.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>
              
              <p 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField 
      name="section_badge" 
      label="Section Badge" 
      default="Why Choose Us"
    />
    <RichTextField 
      name="section_title" 
      label="Section Title" 
      default="Powerful Features for<br><span class=\"text-primary\">Modern Businesses</span>"
    />
    <RichTextField 
      name="section_subtitle" 
      label="Section Subtitle" 
      default="Everything you need to transform your business operations and achieve sustainable growth."
    />
    <RepeaterField name="features" label="Features" min={1} max={6}>
      <TextField name="title" label="Feature Title" />
      <RichTextField name="description" label="Feature Description" />
      <TextField 
        name="icon" 
        label="Feature Icon (FontAwesome class)" 
        helpText="Enter FontAwesome icon class (e.g., 'fas fa-bolt')"
      />
      <TextField name="badge" label="Feature Badge" />
    </RepeaterField>
  </ModuleFields>
);

export const meta = {
  label: "Features Section"
};