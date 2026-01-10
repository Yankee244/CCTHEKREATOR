import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AUDIENCES } from '../constants';

const TargetAudience: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            This Book Is For You If
          </h2>
          
          
          <div className="space-y-6 sm:space-y-8">
            {AUDIENCES.map((audience) => (
              <div key={audience.title} className="flex space-x-4">
                <div className="flex-shrink-0 mt-1 p-1 h-fit bg-slate-200 text-slate-900 rounded-full">
                  <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">{audience.title}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-snug">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0 px-4 sm:px-0">
          <div className="aspect-square bg-slate-950 rounded-[2rem] sm:rounded-[3rem] lg:rotate-3 shadow-2xl shadow-slate-200 overflow-hidden relative group max-w-md mx-auto">
             <img 
               src="https://picsum.photos/seed/ebook/800/800" 
               alt="Ebook Preview" 
               className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
             />
         <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
               <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] shadow-2xl max-w-[240px] sm:max-w-sm w-full overflow-hidden">
                  <div className="w-10 sm:w-12 h-1 bg-slate-950 mb-4 rounded-full"></div>
                  <img src="/CeeCee160x160.PNG" alt="Logo" className="mx-auto w-28 sm:w-36 object-contain" />
               </div>
             </div>
          </div>
          {/* Background decor */}
          <div className="hidden sm:block absolute -top-8 -right-8 w-24 h-24 lg:w-40 lg:h-40 border-4 border-slate-200 rounded-full animate-pulse -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;