
// Import React to access React.ReactNode type
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Audience {
  title: string;
  description: string;
  icon: React.ReactNode;
}
