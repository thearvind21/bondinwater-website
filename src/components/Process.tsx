import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessStep } from '../types';
import { ChevronRight } from './Icons';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Conceptualisation',
      description: 'Initial hand sketches, ideas and site vision.',
      helper: 'Understand the vision.',
      caption: 'CONCEPT & IDEATION',
      image: '/images/chapter-04/01-conceptualisation.jpg',
      alt: 'Conceptualisation — Initial hand sketches, ideas and site vision',
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Architectural planning, site layouts and 3D design.',
      helper: 'Shape the environment.',
      caption: 'ARCHITECTURE & SPATIAL DESIGN',
      image: '/images/chapter-04/02-planning-design.jpg',
      alt: 'Planning and Design — Architectural planning, site layouts and 3D design',
    },
    {
      step: '03',
      title: 'Engineering & Execution',
      description: 'Structural framework, acrylic fabrication and construction.',
      helper: 'Construct with precision.',
      caption: 'ENGINEERING & CONSTRUCTION',
      image: '/images/chapter-04/03-engineering-execution.jpg',
      alt: 'Engineering and Execution — Structural framework, acrylic fabrication and construction',
    },
    {
      step: '04',
      title: 'Installation & Commissioning',
      description: 'Habitat installation, water systems and testing.',
      helper: 'Bring the ecosystem to life.',
      caption: 'INSTALLATION & SYSTEM TESTING',
      image: '/images/chapter-04/04-installation-commissioning.jpg',
      alt: 'Installation and Commissioning — Habitat installation, water systems and testing',
    },
    {
      step: '05',
      title: 'Operation & Maintenance',
      description: 'Monitoring, care and maintaining the living ecosystem.',
      helper: 'Care for the environment.',
      caption: 'LONG-TERM ECOSYSTEM CARE',
      image: '/images/chapter-04/05-operation-maintenance.jpg',
      alt: 'Operation and Maintenance — Monitoring, care and maintaining the living ecosystem',
    },
  ];

  // Preload all five Chapter 04 images on mount
  useEffect(() => {
    steps.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  const current = steps[activeStep];

  // Keyboard navigation for timeline steps (ArrowLeft, ArrowRight)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % steps.length;
      setActiveStep(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + steps.length) % steps.length;
      setActiveStep(prevIndex);
    }
  };

  return (
    <section
      id="process"
      className="relative py-28 lg:py-36 bg-[#FAF7F0] text-[#1A211D] overflow-hidden border-t border-[#1A211D]/5"
      aria-label="From Imagination to Reality Process"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Split: Left Content + Right Dynamic Featured Image Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Heading, Description, and Active Phase Information Card */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium">
                CHAPTER 04
              </span>
              <span className="w-8 h-[1px] bg-coral/50" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1A211D] leading-[1.08] tracking-tight mb-6">
              From imagination
              <br />
              <span className="italic font-normal">to reality</span>
            </h2>

            <p className="text-base sm:text-lg text-[#68736B] font-sans font-light leading-relaxed mb-6">
              An end-to-end journey that transforms your vision into a thriving,
              sustainable ecosystem.
            </p>

            {/* Active Phase Information Card (updates in sync with selected timeline step) */}
            <div className="p-5 rounded-xl bg-white/85 border border-[#1A211D]/10 shadow-sm relative overflow-hidden min-h-[96px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-coral font-semibold block mb-1">
                    ACTIVE PHASE: {current.step} — {current.title}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed font-sans">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: One Stable Featured Image Panel with Restrained Transition */}
          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-[#EBE5D8] border border-[#1A211D]/10 aspect-[16/9] w-full">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.image}
                  className="absolute inset-0 w-full h-full"
                  initial={
                    reducedMotion
                      ? { opacity: 0 }
                      : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.025, opacity: 0.8 }
                  }
                  animate={{
                    clipPath: 'inset(0% 0% 0% 0%)',
                    scale: 1.0,
                    opacity: 1,
                  }}
                  exit={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }
                  }
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <img
                    src={current.image}
                    alt={current.alt}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle dark gradient overlay at bottom for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Badges and Caption Bar over Featured Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono tracking-wider z-20 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.caption}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 uppercase"
                  >
                    {current.caption}
                  </motion.span>
                </AnimatePresence>

                <span className="flex items-center gap-1.5 text-coral bg-white/95 px-3.5 py-1.5 rounded-full font-sans font-medium text-xs shadow-sm">
                  <span>Phase {current.step} / 05</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Five-Stage Horizontal Timeline */}
        <div className="pt-8 border-t border-[#1A211D]/15">
          
          {/* Desktop & Tablet Timeline Grid */}
          <div
            ref={timelineRef}
            role="tablist"
            aria-label="Process stages"
            className="hidden md:grid md:grid-cols-5 gap-6 relative"
          >
            {/* Connecting Horizontal Line across markers */}
            <div className="absolute top-5 left-6 right-6 h-[2px] bg-[#1A211D]/15 -z-0" />

            {steps.map((st, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={st.step}
                  role="tab"
                  id={`process-tab-${st.step}`}
                  aria-selected={isActive}
                  aria-controls={`process-panel-${st.step}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="relative z-10 text-left group flex flex-col pt-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-lg p-1 transition-all"
                >
                  {/* Step Marker Circle */}
                  <div className="mb-4 flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-coral text-white shadow-[0_4px_16px_rgba(180,100,78,0.35)] scale-110'
                          : 'bg-white border-2 border-[#1A211D]/20 text-[#68736B] group-hover:border-coral group-hover:text-[#1A211D]'
                      }`}
                    >
                      {st.step}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h4
                    className={`text-base font-serif font-medium leading-snug transition-colors ${
                      isActive ? 'text-coral' : 'text-[#1A211D] group-hover:text-coral'
                    }`}
                  >
                    {st.title}
                  </h4>

                  {/* Timeline Helper Copy */}
                  <p className="text-xs text-[#68736B] mt-1 font-sans leading-relaxed">
                    {st.helper}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Mobile Scrollable / Stepper Timeline with Adequate Touch Targets */}
          <div
            role="tablist"
            aria-label="Process stages"
            className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory focus:outline-none no-scrollbar"
          >
            {steps.map((st, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={st.step}
                  role="tab"
                  id={`process-tab-mobile-${st.step}`}
                  aria-selected={isActive}
                  aria-controls={`process-panel-${st.step}`}
                  onClick={() => setActiveStep(index)}
                  className={`min-w-[220px] p-4 rounded-xl border snap-start text-left transition-all ${
                    isActive
                      ? 'bg-white border-coral shadow-md'
                      : 'bg-white/60 border-[#1A211D]/10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                        isActive ? 'bg-coral text-white' : 'bg-[#1A211D]/10 text-[#1A211D]'
                      }`}
                    >
                      {st.step}
                    </span>
                    <h4 className="text-base font-serif font-medium text-[#1A211D] leading-tight">
                      {st.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#68736B] pl-11">
                    {st.helper}
                  </p>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
