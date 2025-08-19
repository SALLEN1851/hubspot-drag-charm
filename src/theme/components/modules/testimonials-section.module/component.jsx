import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  RepeaterField,
  NumberField,
  ImageField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const {
    section_badge = "Client Success Stories",
    section_title = "What Our Clients<br><span class=\"text-primary\">Are Saying</span>",
    section_subtitle = "Don't just take our word for it. Here's what our clients have to say about their experience.",
    testimonials = []
  } = fieldValues || {};

  const defaultTestimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content: "This platform has completely transformed how we operate. The results speak for themselves - we've seen a 300% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      company: "Global Solutions",
      content: "The team's expertise and dedication to our success has been outstanding. They delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      content: "Working with them was a game-changer. Our campaigns now perform 250% better than before. Highly recommended!",
      rating: 5
    }
  ];

  const testimonialList = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const StarRating = ({ rating }) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i}
            className={`fas fa-star text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialList.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant hover:border-primary/20"
            >
              <StarRating rating={testimonial.rating} />
              
              <blockquote 
                className="text-card-foreground mb-6 leading-relaxed italic"
                dangerouslySetInnerHTML={{ __html: `"${testimonial.content}"` }}
              />
              
              <div className="flex items-center">
                {testimonial.avatar_image?.src ? (
                  <img 
                    src={testimonial.avatar_image.src}
                    alt={testimonial.avatar_image.alt || testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
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
      default="Client Success Stories"
    />
    <RichTextField 
      name="section_title" 
      label="Section Title" 
      default="What Our Clients<br><span class=\"text-primary\">Are Saying</span>"
    />
    <RichTextField 
      name="section_subtitle" 
      label="Section Subtitle" 
      default="Don't just take our word for it. Here's what our clients have to say about their experience."
    />
    <RepeaterField name="testimonials" label="Testimonials" min={1} max={6}>
      <TextField name="name" label="Client Name" />
      <TextField name="role" label="Client Role/Title" />
      <TextField name="company" label="Company Name" />
      <RichTextField name="content" label="Testimonial Content" />
      <NumberField 
        name="rating" 
        label="Star Rating (1-5)" 
        min={1} 
        max={5} 
        default={5}
      />
      <ImageField 
        name="avatar_image" 
        label="Client Photo (optional)"
        resizable={true}
      />
    </RepeaterField>
  </ModuleFields>
);

export const meta = {
  label: "Testimonials Section"
};