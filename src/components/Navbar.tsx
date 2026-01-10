import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, BRAND_LOGO, NAV_ITEMS, SELAR_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock with scrollbar compensation
  useEffect(() => {
    const lock = () => {
      // store focused element so we can restore focus when closing
      lastFocusedRef.current = document.activeElement as HTMLElement | null;

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
    };
    const unlock = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      // restore focus
      lastFocusedRef.current?.focus();
    };

    if (isMobileMenuOpen) lock();
    else unlock();

    return () => unlock();
  }, [isMobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3 z-50">
            <img
              src={BRAND_LOGO}
              alt={`${BRAND_NAME} logo`}
              className="h-8 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              {BRAND_NAME}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SELAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:bg-black/90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Get the book now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 z-50 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        aria-hidden={!isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } z-40`}
      />

      {/* Sliding Panel */}
      <aside
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs md:hidden bg-white shadow-xl transform transition-transform duration-300 z-50
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center space-x-3">
            <img src={BRAND_LOGO} alt={`${BRAND_NAME} logo`} className="h-8 w-auto object-contain" />
            <span className="text-lg font-bold">{BRAND_NAME}</span>
          </div>
          <button
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 px-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href={SELAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-black text-white rounded-2xl text-center font-bold text-lg shadow-xl shadow-black/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get the book now
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;