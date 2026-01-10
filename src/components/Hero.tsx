import React from 'react';
import { TrendingUp, BookOpen, Star, DollarSign } from 'lucide-react';
import { EBOOK_TITLE, EBOOK_SUBTITLE, EBOOK_IMAGE, SELAR_LINK } from '../constants';
import FloatingCard from './FloatingCard';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-dots">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold uppercase tracking-wider">
          <span className="mr-2"><Star size={12} /></span>
          The #1 Positioning for Profit
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl leading-[1.1]">
          {EBOOK_TITLE}
        </h1>

        {/* Subheading (The Story) */}
        <div className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mb-12 leading-relaxed px-4 text-center md:text-left md:max-w-4xl">
          <p className="whitespace-pre-line text-slate-700 bg-white/40 p-6 sm:p-10 rounded-[2.5rem] border border-white shadow-xl shadow-slate-100/50 backdrop-blur-sm">
            {EBOOK_SUBTITLE}
          </p>
        </div> 

        {/* Ebook Mockup Image */}
        <div className="mb-12 relative group perspective-1000">
          <div className="relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img 
              src={EBOOK_IMAGE} 
              alt="Positioning for Foreign Clients Book Cover" 
              className="w-full max-w-[320px] sm:max-w-[400px] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white mb-6"/>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
              <a 
                href={SELAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-neutral-900 transition-all shadow-xl active:scale-95"
              >
                Get the book now
              </a>
            </div>

            {/* Floating Cards - Visuals */}
            <div className="relative w-full max-w-5xl h-[300px] hidden md:block">
              {/* Card 1: Benefit */}
              <FloatingCard className="absolute -top-10 left-0 w-64" delay={0}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-black/5 rounded-lg text-black">
                    <TrendingUp size={18} />
                  </div>
                  <span className="font-bold text-slate-800">Growth Mastery</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">Learn the exact metrics used by industry leaders to track success.</p>
              </FloatingCard>

              {/* Card 2: Chapter Preview */}
              <FloatingCard className="absolute top-20 right-0 w-72" delay={1.5}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-black/5 rounded-lg text-black">
                    <BookOpen size={18} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Chapter 4: Scaling</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                </div>
              </FloatingCard>

              {/* Card 3: Icon Box */}
              <FloatingCard className="absolute -bottom-10 left-1/4 w-52" delay={3}>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Revenue</div>
                    <div className="text-xl font-black text-slate-900">+240%</div>
                  </div>
                </div>
              </FloatingCard>
              
              {/* Central Logo Visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-slate-50 overflow-hidden group">
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                  <BookOpen size={40} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-black/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;