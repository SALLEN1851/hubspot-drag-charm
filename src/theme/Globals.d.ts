/**
 * Global Type Definitions for Business Pro Theme
 * HubSpot CMS React Theme
 */

// HubSpot CMS Global Types
declare global {
  // HubSpot Template Context
  interface HubSpotTemplateContext {
    content: {
      absolute_url: string;
      archived: boolean;
      author_name: string;
      author_username: string;
      blog_author: any;
      campaign: string;
      campaign_name: string;
      created: string;
      meta_description: string;
      name: string;
      post_body: string;
      post_list_content: string;
      post_list_summary_featured_image: string;
      post_summary: string;
      publish_date: string;
      publish_date_localized: string;
      slug: string;
      tag_list: any[];
      topic_list: any[];
      updated: string;
      url: string;
    };
    
    request: {
      url: string;
      path: string;
      query: string;
      full_url: string;
    };
    
    site_settings: {
      company_name: string;
      company_domain: string;
    };
    
    page_meta: {
      name: string;
      meta_description: string;
      html_lang: string;
    };
  }

  // Theme Settings Interface
  interface ThemeSettings {
    primary_color?: string;
    secondary_color?: string;
    company_name?: string;
    company_logo?: {
      src: string;
      alt: string;
    };
    contact_email?: string;
    contact_phone?: string;
    social_facebook?: string;
    social_twitter?: string;
    social_linkedin?: string;
    social_instagram?: string;
  }

  // Module Field Types
  interface NavigationItem {
    text: string;
    url: string;
    dropdown_items?: {
      text: string;
      url: string;
    }[];
  }

  interface Feature {
    title: string;
    description: string;
    icon: string;
    badge?: string;
  }

  interface Testimonial {
    name: string;
    role: string;
    company?: string;
    content: string;
    rating: number;
    avatar_image?: {
      src: string;
      alt: string;
    };
  }

  interface Statistic {
    number: string;
    label: string;
    icon: string;
  }

  interface FooterLink {
    text: string;
    url: string;
  }

  // HubSpot CMS Functions
  function get_asset_url(path: string): string;
  function require_css(url: string): string;
  function require_js(url: string): string;
  
  // Template Variables
  const theme_settings: ThemeSettings;
  const current_year: number;
  const standard_header_includes: string;
  const standard_footer_includes: string;
  const builtin_body_classes: string;

  // Utility Functions
  interface ThemeUtils {
    showMessage(message: string, type?: 'success' | 'error' | 'info' | 'warning'): void;
  }
  
  interface Window {
    ThemeUtils: ThemeUtils;
  }
}

export {};