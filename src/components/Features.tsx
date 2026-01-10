import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="learn" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What You'll Learn</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Forget theoretical fluff. This ebook provides a practical, step-by-step roadmap to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.title} 
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-black hover:shadow-xl transition-all group"
            >
              <div className="mb-6 p-3 bg-white w-fit rounded-xl shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
