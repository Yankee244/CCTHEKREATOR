import React from 'react';
import { BookOpen, TrendingUp, DollarSign, Zap, Users, Star, Sparkles, Layout, Target, Puzzle, Magnet, ArrowRightCircle, Orbit, GitBranch, Layers, ClipboardCheck  } from 'lucide-react';
import type { NavItem, Feature, Testimonial, Audience } from './types';

export const SELAR_LINK = "https://selar.com/13u931ra61"; // Placeholder
export const BRAND_NAME = "";
export const BRAND_LOGO = "/ceecee400x150.png"; 
export const EBOOK_TITLE = `I Made Over 20,000 USD Working With Foreign Clients in 2025
(Over ₦30,000,000)`;
export const EBOOK_SUBTITLE = `I did this as a graphic designer based in Nigeria without Upwork or Fiverr.
I landed foreign clients using just X (formerly Twitter) and Instagram by positioning myself intentionally and showing up consistently. No chasing, no cold emails, just clarity, strategy, and patience.
I broke down my personal journey in this book. The mistakes, the mindset shifts, and the exact changes I made that helped me attract foreign clients who valued my work and paid fairly.`;
export const EBOOK_IMAGE = "/cover-picture.jpeg"; 


export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Learn', href: '#learn' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];



export const FEATURES: Feature[] = [
  {
    title: "Why skill alone is not enough",
    description: "Skill gets attention, positioning, leverage, and clarity creates income.",
    icon: <Puzzle className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "How positioning changes how clients treat you",
    description: "Positioning shifts perception, pricing power, respect, and client behavior.",
    icon: <Target className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "How to stop chasing and start attracting",
    description: "Attraction begins when clarity replaces desperation and noise.",
    icon: <Magnet className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "How to price with confidence",
    description: "Confident pricing signals competence, authority, and trust.",
    icon: <DollarSign className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
   {
    title: "How to transition from local work to global opportunities",
    description: "Move from local gigs to global clients intentionally.",
    icon: <Orbit className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "How to turn one good client into many",
    description: "One satisfied client can unlock endless opportunities.",
    icon: <Users className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "How consistency compounds over time",
    description: "Small daily actions create massive long-term results.",
    icon: <Layers className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "A clear, step-by-step action plan you can follow",
    description: "Simple steps you can apply immediately without overwhelm.",
    icon: <ClipboardCheck  className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
];


export const AUDIENCES: Audience[] = [
  {
    title: "You are talented but feel stuck charging what your work is actually worth",
    description: "",
    icon: <Sparkles className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "You are tired of being busy yet financially drained",
    description: "",
    icon: <Target className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "You believe young people can earn ethically without compromising their values",
    description: "",
    icon: <Users className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "You want foreign clients, but you don’t want to beg, chase, or underprice yourself",
    description: "",
    icon: <Users className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
  {
    title: "You feel like you are doing everything right, but something still isn’t clicking",
    description: "",
    icon: <Users className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors duration-150" />,
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Chinedu Okafor",
    role: "Product Designer",
    text: "Boss I just finished going through your book and this was just what I needed to get my year started, I’ve seen what I need to do differently this year and I’ve already started taking actions I’ll give you an update before the year ends 🙏 Thank you for writing this book, it’s packed with lots of wisdom.",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    name: "Blessing O",
    role: "Digital Marketer",
    text: "This book came at the right time for me. I’ve been busy but not profitable, and your explanation made me realize why. I’ve already adjusted my approach and conversations with clients. God bless you for sharing this knowledge.",
    avatar: "https://picsum.photos/seed/marcus/100/100",
  },
  {
    name: "Tunde Adebayo",
    role: "Freelance Designer",
    text: "I finished the book in one sitting. It answered questions I’ve had for years but couldn’t put into words. I now see why some people earn more with the same skills.This book is worth far more than the price.",
    avatar: "https://picsum.photos/seed/lena/100/100",
  },
];