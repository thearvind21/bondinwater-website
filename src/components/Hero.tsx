import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from './Icons';

interface HeroProps {
  isLoaded?: boolean;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded = true, onExploreClick }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect touch or reduced motion
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    if (touch || mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle restrained parallax movement (max +/- 10px)
      const x = ((e.clientX / window.innerWidth) - 0.5) * 16;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 12;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#0C1E14]"
      aria-label="The Art of Living Worlds"
    >
      {/* 1. Hero Photograph with Smooth Clip-Path Mask Reveal and Ambient Parallax */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={reducedMotion ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.03 }}
        animate={
          isLoaded
            ? { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.0, opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="/assets/generated/hero-koi-pond.jpg"
          alt="Tranquil architectural koi pond with water lilies and lush botanical conservatory"
          className="w-full h-full object-cover object-center transform-gpu will-change-transform scale-105"
          style={
            !isTouchDevice && !reducedMotion
              ? { x: mouseOffset.x, y: mouseOffset.y }
              : undefined
          }
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Ambient subtle caustic / water reflection shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#25ACDA]/[0.025] to-transparent pointer-events-none mix-blend-overlay animate-shimmer" />

        {/* Subtle Dark Forest Gradient Overlays for Guaranteed Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07150C]/90 via-[#0C1E14]/65 to-[#07150C]/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E14] via-transparent to-[#07150C]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#061109]/40 pointer-events-none" />
      </motion.div>

      {/* Main Hero Content - Left Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 pb-24">
        <div className="max-w-3xl">
          
          {/* 3. Eyebrow / Overline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-coral/80" />
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.25em] text-[#C9D9CF] uppercase font-medium">
              THE ART OF LIVING WORLDS
            </span>
          </motion.div>

          {/* 4. Headline Reveals Line by Line using Clipped Upward Reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-light text-white leading-[1.02] tracking-tight mb-8">
            <div className="overflow-hidden pb-1">
              <motion.span
                className="inline-block"
                initial={reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
                animate={isLoaded ? { y: '0%', opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.65, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              >
                A world of life.
              </motion.span>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.span
                className="inline-block font-normal italic"
                initial={reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
                animate={isLoaded ? { y: '0%', opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.65, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Without boundaries.
              </motion.span>
            </div>
          </h1>

          {/* 5. Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.65, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#B9CFC2] font-sans font-light leading-relaxed max-w-2xl mb-10"
          >
            We imagine, design and create extraordinary ecosystems where nature,
            architecture and craftsmanship become one.
          </motion.p>

          {/* 6. Primary CTA Appears Last */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#worlds"
              onClick={onExploreClick}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-coral hover:bg-coral-hover text-white text-xs sm:text-sm tracking-[0.16em] uppercase font-sans font-medium transition-all duration-300 shadow-lg hover:shadow-coral/25 hover:translate-x-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore the world</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.16em] uppercase text-white/70 hover:text-white transition-colors duration-300 py-2 px-3"
            >
              Our Philosophy
            </a>
          </motion.div>

        </div>
      </div>

      {/* 7. Small Scroll Cue with subtle opacity/position animation */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 right-8 sm:right-12 z-20 flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer select-none"
      >
        <a href="#philosophy" className="flex items-center gap-2.5">
          <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-coral rounded-full"
            />
          </div>
          <span className="text-[11px] tracking-[0.2em] uppercase font-sans text-white/70">
            Scroll
          </span>
        </a>
      </motion.div>
    </section>
  );
};
