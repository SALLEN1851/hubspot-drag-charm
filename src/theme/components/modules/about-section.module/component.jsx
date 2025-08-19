import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  UrlField,
  RepeaterField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const {
    section_badge = "About Our Company",
    section_title = "Building the Future of<br><span class=\"text-primary\">Digital Innovation</span>",
    section_description = "For over a decade, we've been at the forefront of digital transformation, helping businesses navigate the complex landscape of modern technology. Our commitment to excellence and innovation has made us a trusted partner for companies worldwide.",
    feature_list = [],
    cta_button_text = "Learn More About Us",
    cta_button_url = "/about",
    stats = []
  } = fieldValues || {};

  const defaultFeatureList = [
    { text: "Proven track record of success" },
    { text: "Expert team of professionals" },
    { text: "Cutting-edge technology solutions" }
  ];

  const defaultStats = [
    { number: "10K+", label: "Happy Clients", icon: "fas fa-check-circle" },
    { number: "99%", label: "Success Rate", icon: "fas fa-chart-line" },
    { number: "50+", label: "Industry Awards", icon: "fas fa-trophy" },
    { number: "24/7", label: "Support Available", icon: "fas fa-headset" }
  ];

  const features = feature_list.length > 0 ? feature_list : defaultFeatureList;
  const statistics = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-6">
              {section_badge}
            </span>
            
            <h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
              dangerouslySetInnerHTML={{ __html: section_title }}
            />
            
            <p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section_description }}
            />

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            {cta_button_text && (
              <a
                href={cta_button_url}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary border border-primary rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {cta_button_text}
              </a>
            )}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-primary-foreground text-2xl`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
}

export const fields = (
  <ModuleFields>
    <TextField 
      name="section_badge" 
      label="Section Badge" 
      default="About Our Company"
    />
    <RichTextField 
      name="section_title" 
      label="Section Title" 
      default="Building the Future of<br><span class=\"text-primary\">Digital Innovation</span>"
    />
    <RichTextField 
      name="section_description" 
      label="Section Description" 
      default="For over a decade, we've been at the forefront of digital transformation, helping businesses navigate the complex landscape of modern technology. Our commitment to excellence and innovation has made us a trusted partner for companies worldwide."
    />
    <RepeaterField name="feature_list" label="Feature List" min={1} max={5}>
      <TextField name="text" label="Feature Text" />
    </RepeaterField>
    <TextField 
      name="cta_button_text" 
      label="CTA Button Text" 
      default="Learn More About Us"
    />
    <UrlField 
      name="cta_button_url" 
      label="CTA Button URL" 
      default="/about"
    />
    <RepeaterField name="stats" label="Statistics" min={2} max={4}>
      <TextField name="number" label="Statistic Number" />
      <TextField name="label" label="Statistic Label" />
      <TextField 
        name="icon" 
        label="Statistic Icon (FontAwesome class)"
        helpText="Enter FontAwesome icon class (e.g., 'fas fa-chart-line')"
      />
    </RepeaterField>
  </ModuleFields>
);

export const meta = {
  label: "About Section"
};