import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from './Icons';
import { WorldItem } from '../types';

export const Worlds: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const worldsData: WorldItem[] = [
    {
      id: 'aquatic',
      number: '01',
      title: 'Aquatic worlds',
      headline: 'Aquatic worlds',
      description: 'Aquariums, oceanariums, natural ponds, aquatic biotopes and acrylic swimming pools.',
      image: '/assets/generated/angelfish-biotope.jpg',
      alt: 'Underwater freshwater biotope with angelfish, aquatic plants and natural sun caustics',
      badge: 'BIOTOPE & AQUASCAPE',
      services: ['Oceanariums & Public Aquariums', 'Natural Koi & Biotope Ponds', 'Acrylic Swimming Pools', 'Marine Coral Reef Systems']
    },
    {
      id: 'habitats',
      number: '02',
      title: 'Living habitats',
      headline: 'Living habitats',
      description: 'Vivariums, terrariums, paludariums, aviaries, animal enclosures and petting zoos.',
      image: '/assets/images/vivarium-interior.jpg',
      alt: 'Lush planted rainforest vivarium interior with natural moss and microclimate flora',
      badge: 'TERRESTRIAL & AVIARY',
      services: ['Custom Vivariums & Paludariums', 'Geodesic Aviary Engineering', 'Mini Petting Zoos', 'Captive Breeding Biomes']
    },
    {
      id: 'engineered',
      number: '03',
      title: 'Engineered environments',
      headline: 'Engineered environments',
      description: 'Acrylic craftsmanship, zoo/architectural planning, filtration, aquarium automation, GFRC/FRP and turnkey execution.',
      image: '/assets/images/engineering-filtration.jpg',
      alt: 'Precision aquarium filtration engineering and automated ecosystem life-support systems',
      badge: 'LIFE SUPPORT SYSTEMS',
      services: ['Thermoformed Acrylic Craftsmanship', 'Automated Filtration Systems', 'GFRC & FRP Theming Artistry', 'Zoo Masterplanning & Turnkey Execution']
    }
  ];

  const currentWorld = worldsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? worldsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === worldsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="worlds"
      className="relative py-28 lg:py-36 bg-[#0C1E14] text-white overflow-hidden"
      aria-label="Worlds We Create"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#143021]/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header Row on Mobile */}
        <div className="md:hidden mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium">
              CHAPTER 02
            </span>
            <span className="w-6 h-[1px] bg-coral/50" />
          </div>
          <h2 className="text-4xl font-serif font-light text-white">Worlds we create</h2>
        </div>

        {/* 3-Column Asymmetric Layout Matching Approved Reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading and 3 Selectable Rows */}
          <div className="md:col-span-4 flex flex-col justify-center">
            {/* Desktop Chapter Heading */}
            <div className="hidden md:block mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium">
                  CHAPTER 02
                </span>
                <span className="w-8 h-[1px] bg-coral/50" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
                Worlds we create
              </h2>
            </div>

            {/* Selectable Rows */}
            <div className="flex flex-col gap-3" role="tablist" aria-label="Worlds categories">
              {worldsData.map((world, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={world.id}
                    role="tab"
                    id={`world-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls={`world-panel-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative text-left py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#183925]/90 border-coral/60 shadow-[0_4px_24px_rgba(180,100,78,0.25)]'
                        : 'bg-[#102418]/50 border-white/5 hover:border-white/15 hover:bg-[#142C1E]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono tracking-wider transition-colors ${
                        isActive ? 'text-coral font-semibold' : 'text-white/40 group-hover:text-white/70'
                      }`}>
                        {world.number}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                      )}
                      <span className={`text-base sm:text-lg font-serif transition-colors ${
                        isActive ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {world.title}
                      </span>
                    </div>

                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-coral scale-125' : 'bg-transparent group-hover:bg-white/20'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Centre Column: Large Immersive Image with Distinctive Organic Arched Mask */}
          <div className="md:col-span-4 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4.2]">
              {/* Organic Arched Container */}
              <div className="relative w-full h-full overflow-hidden rounded-t-[180px] sm:rounded-t-[220px] rounded-b-2xl border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#07150C]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWorld.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={currentWorld.image}
                      alt={currentWorld.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    {/* Inner Arched Vignette / Caustic Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E14]/80 via-transparent to-black/20" />
                    
                    {/* Badge */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0C1E14]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#B9CFC2] uppercase">
                      {currentWorld.badge}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Subtle Halo around Arch */}
              <div className="absolute -inset-2 rounded-t-[190px] sm:rounded-t-[230px] rounded-b-3xl border border-coral/20 -z-10 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Active World Title, Description, Counter and Controls */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between h-full py-2 lg:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWorld.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
                role="tabpanel"
                id={`world-panel-${activeIndex}`}
                aria-labelledby={`world-tab-${activeIndex}`}
              >
                {/* 01 / 03 Counter */}
                <div className="text-xs font-mono tracking-[0.25em] text-[#8CA595]">
                  <span className="text-coral font-bold">{currentWorld.number}</span>
                  <span className="mx-1 text-white/30">/</span>
                  <span>03</span>
                </div>

                {/* Active World Headline */}
                <h3 className="text-3xl sm:text-4xl font-serif font-light text-white">
                  {currentWorld.headline}
                </h3>

                {/* Concise Description */}
                <p className="text-sm sm:text-base text-[#B9CFC2] leading-relaxed font-sans font-light">
                  {currentWorld.description}
                </p>

                {/* Bullet List of Key Specialties */}
                <ul className="space-y-2 pt-2 border-t border-white/10">
                  {currentWorld.services.map((item, i) => (
                    <li key={i} className="text-xs text-[#8CA595] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Link CTA */}
                <div className="pt-2">
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-coral hover:text-white transition-colors duration-300 group"
                  >
                    <span>Explore {currentWorld.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrow Controls */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handlePrev}
                aria-label="Previous world category"
                className="w-11 h-11 rounded-full border border-white/20 hover:border-coral bg-[#142C1E]/60 hover:bg-coral text-white flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next world category"
                className="w-11 h-11 rounded-full border border-white/20 hover:border-coral bg-[#142C1E]/60 hover:bg-coral text-white flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-white/40 ml-2">
                Use arrows or click categories
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
