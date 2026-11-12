import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isLoaded?: boolean;
  onOpenInquiry?: () => void;
  activeSection?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ isLoaded = true, onOpenInquiry, activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'PHILOSOPHY', href: '#philosophy' },
    { name: 'WORLDS', href: '#worlds' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#0C1E14]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'py-6 bg-gradient-to-b from-[#061109]/80 via-[#0C1E14]/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-md mr-6 md:mr-10 shrink-0"
            aria-label="BondInWater Home"
          >
            <img
              src="/brand/bondinwater-original-emblem.png"
              alt="BondInWater Emblem"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm sm:text-base tracking-[0.24em] font-sans font-medium text-white group-hover:text-white/90 transition-colors uppercase">
              BONDINWATER
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-11" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-[0.2em] font-sans transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-coral rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger (hidden on desktop breakpoints) */}
          <div className="flex md:hidden items-center">
            {/* Compact Sleek Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="flex flex-col gap-1.5 w-6 items-end">
                  <span className="w-6 h-[1.5px] bg-white transition-all" />
                  <span className="w-4 h-[1.5px] bg-white transition-all group-hover:w-6" />
                </div>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0C1E14]/98 backdrop-blur-xl pt-24 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#8CA595]">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-coral transition-colors flex items-baseline justify-between border-b border-white/10 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#8CA595]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4 text-sm text-[#8CA595]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-coral" />
                <a href="tel:+919833661551" className="text-white hover:underline">
                  +91 9833 661 551
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral" />
                <a href="mailto:sales@bondinwater.com" className="text-white hover:underline">
                  sales@bondinwater.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
