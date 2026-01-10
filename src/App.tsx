
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    const handleScroll = (e: Event, anchor: Element) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => handleScroll(e, anchor));
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', (e) => handleScroll(e, anchor));
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TargetAudience />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
