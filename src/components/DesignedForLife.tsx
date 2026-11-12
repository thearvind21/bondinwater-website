import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalBranch } from './BotanicalArtwork';
import { HeartHandshake, ShieldCheck, Sparkles } from './Icons';

export const DesignedForLife: React.FC = () => {
  return (
    <section
      id="life"
      className="relative py-28 lg:py-36 bg-[#FAF7F0] text-[#1A211D] overflow-hidden border-t border-[#1A211D]/5"
      aria-label="Designed for the Beauty of Life"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Delicate Botanical Accent */}
      <div className="absolute -bottom-10 left-1/3 pointer-events-none opacity-30 select-none">
        <BotanicalBranch className="w-56 h-72 text-[#68736B]/40 transform -rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Chapter Header, Headline, and Biome Welfare Philosophy */}
          <div className="md:col-span-6 flex flex-col justify-center">
            {/* Chapter Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium">
                CHAPTER 05
              </span>
              <span className="w-8 h-[1px] bg-coral/50" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#68736B]">
                ANIMAL WELFARE &amp; BIOME
              </span>
            </motion.div>

            {/* Large Serif Headline Matching Approved Layout */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1A211D] leading-[1.08] tracking-tight mb-8"
            >
              Designed for
              <br />
              the <span className="italic font-normal text-coral">beauty</span>
              <br />
              of life.
            </motion.h2>

            {/* Concise Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg text-[#4A554E] font-sans font-normal leading-relaxed mb-8 max-w-xl"
            >
              Environments that prioritise animal welfare, celebrate natural habitats
              and bring together flora, fauna and biome expertise in perfect balance.
            </motion.p>

            {/* 3 Core Principles from Company Profile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1A211D]/10"
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-coral font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ETHICAL CARE</span>
                </div>
                <p className="text-xs text-[#68736B] leading-relaxed">
                  Tailored habitats designed around species-specific instincts and needs.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-coral font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BIOME BALANCE</span>
                </div>
                <p className="text-xs text-[#68736B] leading-relaxed">
                  Microclimate humidity, UVB lighting cycles, and symbiotic botanical planting.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-coral font-semibold">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>CONSERVATION</span>
                </div>
                <p className="text-xs text-[#68736B] leading-relaxed">
                  Supporting captive breeding of exotic species and global biodiversity education.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: High-Detail Panther Chameleon with Pink Hibiscus Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#EBE5D8] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/assets/generated/chameleon-hibiscus.jpg"
                alt="Vivid panther chameleon on mossy branch beside vibrant pink hibiscus blossoms"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono tracking-wider">
                <span>PANTHER CHAMELEON (FURCIFER PARDALIS)</span>
                <span className="text-coral">HERPETOLOGICAL EXCELLENCE</span>
              </div>
            </div>

            {/* Subtle decorative architectural offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-coral/30 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
