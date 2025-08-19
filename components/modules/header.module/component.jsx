import React, { useState } from 'react';
import {
  ModuleFields,
  TextField,
  UrlField,
  RepeaterField
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const {
    navigation_items = [],
    cta_button_text = "Get Started",
    cta_button_url = "/contact"
  } = fieldValues || {};

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultNavigation = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" }
  ];

  const navigation = navigation_items.length > 0 ? navigation_items : defaultNavigation;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">Business Pro</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.url}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.text}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown_items && item.dropdown_items.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.dropdown_items.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.url}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        >
                          {dropdownItem.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            {cta_button_text && (
              <a
                href={cta_button_url}
                className="hidden sm:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-primary-foreground bg-primary border border-primary rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {cta_button_text}
              </a>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navigation.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.url}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                  
                  {/* Mobile Dropdown Items */}
                  {item.dropdown_items && item.dropdown_items.length > 0 && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown_items.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.url}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors duration-200"
                        >
                          {dropdownItem.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              {cta_button_text && (
                <div className="pt-4">
                  <a
                    href={cta_button_url}
                    className="block w-full text-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary border border-primary rounded-lg transition-all duration-300 hover:bg-primary/90"
                  >
                    {cta_button_text}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export const fields = (
  <ModuleFields>
    <RepeaterField name="navigation_items" label="Navigation Items" min={1} max={8}>
      <TextField name="text" label="Link Text" />
      <UrlField name="url" label="Link URL" />
      <RepeaterField name="dropdown_items" label="Dropdown Items (optional)" min={0} max={5}>
        <TextField name="text" label="Dropdown Link Text" />
        <UrlField name="url" label="Dropdown Link URL" />
      </RepeaterField>
    </RepeaterField>
    <TextField 
      name="cta_button_text" 
      label="CTA Button Text" 
      default="Get Started"
    />
    <UrlField 
      name="cta_button_url" 
      label="CTA Button URL" 
      default="/contact"
    />
  </ModuleFields>
);

export const meta = {
  label: "Header"
};