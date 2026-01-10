import React from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img
            src="/ceecee300x120.png" /* replace with your file name in public/, e.g. /logo.svg */
            alt={`${BRAND_NAME} logo`}
            className="h-8 md:h-10 w-auto object-contain"
          />
          <span className="text-lg font-bold text-slate-900">{BRAND_NAME}</span>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Built for creators.
        </p>

        <div className="flex items-center space-x-6">
          <a href="https://x.com/ccthekreator" className="text-slate-400 hover:text-black transition-colors"><Twitter size={20} /></a>
          <a href="https://www.instagram.com/ccthekreator" className="text-slate-400 hover:text-black transition-colors"><Instagram size={20} /></a>
          <a href="mailto:ccthekreator@gmail.com" className="text-sm font-semibold text-slate-600 hover:text-black">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;