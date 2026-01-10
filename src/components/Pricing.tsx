import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { SELAR_LINK } from '../constants';

const Pricing: React.FC = () => {
  const perks = [
    "Escape draining work that looks good on the surface but costs you growth",
    "Reposition yourself to attract clients who value your work",
    "Restructure your online presence to reflect clarity and intention",
    "Communicate professionally and confidently across borders",
     "Price your services without fear or apology",
    "Build trust and long-term relationships without ever meeting clients"
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-slate-800/20 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-700/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">What This Book Is Really About</h2>
        <p className="text-base sm:text-lg text-slate-400 mb-12 sm:mb-16">This book is not about hacks. It is about positioning.</p>
        
        <div className="glass bg-white/5 border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 shadow-2xl backdrop-blur-md max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch justify-between text-left gap-12 lg:gap-16">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 tracking-tight">It breaks down how to:</h3>
              <ul className="space-y-4 sm:space-y-5 mb-8">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start text-slate-300 group">
                    <div className="flex-shrink-0 p-1 bg-slate-700 text-white rounded-full mr-4 group-hover:bg-slate-600 transition-colors mt-1">
                      <Check size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-sm sm:text-base">{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-slate-400 text-xs sm:text-sm pt-4 border-t border-white/10">
                <ShieldCheck size={18} className="mr-2 text-green-400" />
                <span>30-Day Happiness Guarantee</span>
              </div>
            </div>
            
            <div className="w-full lg:w-80 p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-white text-slate-900 text-center shadow-2xl relative">
              
              <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4">One-time payment</div>
              <div className="flex items-center justify-center mb-8">
                <span className="text-2xl font-bold self-start mt-2 mr-1 text-slate-400">₦</span>
                <span className="text-6xl sm:text-7xl font-black tracking-tighter text-slate-900">9</span>
                <span className="text-2xl font-bold self-end mb-2 text-slate-400">,999</span>
              </div>
              <a 
                href={SELAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 sm:py-5 px-8 bg-slate-950 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-slate-200 hover:shadow-slate-300 active:scale-95"
              >
                Get Access Now
              </a>
              <p className="mt-6 text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed">
               This Is Not a Get-Rich-Quick Book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;