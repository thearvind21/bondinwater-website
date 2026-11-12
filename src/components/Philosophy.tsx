import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BotanicalBranch } from './BotanicalArtwork';
import { ArrowUpRight } from './Icons';

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    if (mq.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '80px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety fallback: reveal after scroll or timeout so content is never hidden
    const safetyTimer = setTimeout(() => {
      setIsInView(true);
    }, 1800);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-28 lg:py-36 bg-[#FAF7F0] text-[#1A211D] overflow-hidden"
      aria-label="Our Approach and Philosophy"
    >
      {/* Background Subtle Line Grid / Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Delicate Botanical Line Art Accent on Far Edge — Fades in with light opacity reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.35, ease: 'easeOut' }}
        className="absolute top-12 right-0 lg:right-6 pointer-events-none select-none"
      >
        <BotanicalBranch className="w-64 h-80 text-[#68736B]/40 transform rotate-12" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large Macaw Photograph in Natural Setting with Side-to-Side Mask Wipe and Scale Settle */}
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.025, opacity: 0.6 }
            }
            animate={
              isInView
                ? {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    scale: 1.0,
                    opacity: 1,
                  }
                : reducedMotion
                ? { opacity: 1 }
                : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.025, opacity: 0.6 }
            }
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#EBE5D8] aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto md:max-w-none">
              <img
                src="/assets/generated/macaw-portrait.jpg"
                alt="Vibrant Scarlet Macaw on a lush tropical rainforest branch with pink flowers"
                className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono tracking-wider">
                <span>HABITAT BIODIVERSITY</span>
                <span>SPECIES RESPECT</span>
              </div>
            </div>

            {/* Subtle decorative architectural offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-coral/30 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Side: Editorial Headline and Vision Copy */}
          <div className="md:col-span-7 flex flex-col justify-center md:pl-4 lg:pl-6">
            
            {/* Chapter Header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-coral font-medium">
                CHAPTER 01
              </span>
              <span className="w-4 h-[1px] bg-coral/50" />
              <span className="text-xs font-sans uppercase tracking-[0.22em] text-[#68736B]">
                BEYOND THE ORDINARY
              </span>
            </motion.div>

            {/* Large Editorial Headline — Revealed Line by Line */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A211D] leading-[1.08] tracking-tight mb-8">
              <div className="overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
                  animate={isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Nature is not a decoration.
                </motion.span>
              </div>
              <div className="overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
                  animate={isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-light">It is the </span>
                  <span className="font-normal italic text-coral">foundation.</span>
                </motion.span>
              </div>
            </h2>

            {/* Editorial Supporting Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.7, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-xl text-[#4A554E] font-sans text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                Every ecosystem tells a story. At BondInWater, we bring together creative vision,
                specialist biological knowledge and master engineering to create environments
                that respect the life within them.
              </p>
              <p className="text-sm sm:text-base text-[#68736B]">
                From delicate vivariums and natural koi ponds to monumental oceanariums and
                aviary pavilions, each living installation is planned with meticulous attention
                to animal welfare, biome balance, water chemistry, and architectural elegance.
              </p>
            </motion.div>

            {/* Micro Call to Action / Chapter Link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 pt-8 border-t border-[#1A211D]/10 flex items-center justify-between"
            >
              <a
                href="#worlds"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1A211D] hover:text-coral transition-colors duration-300 group"
              >
                <span>Discover our living worlds</span>
                <ArrowUpRight className="w-4 h-4 text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="text-xs font-mono text-[#68736B]">
                01 / 06
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
