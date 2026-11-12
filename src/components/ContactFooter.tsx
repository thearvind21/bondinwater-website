import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, ArrowRight } from './Icons';
import { BotanicalFoliage } from './BotanicalArtwork';

interface ContactFooterProps {
  onOpenInquiry?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer
      id="contact"
      className="relative bg-[#0C1E14] text-white pt-28 lg:pt-36 pb-12 overflow-hidden border-t border-white/10"
      aria-label="Contact and Footer"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-[#163824]/40 via-transparent to-transparent pointer-events-none" />

      {/* Foliage Silhouette on the Far Right */}
      <div className="absolute top-8 right-0 lg:-right-10 pointer-events-none opacity-20 select-none">
        <BotanicalFoliage className="w-80 h-96 text-[#8CA595]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Main CTA & Contact Box Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center pb-20 border-b border-white/10">
          
          {/* Left / Middle: Chapter Eyebrow, Headline, and Start Conversation CTA */}
          <div className="md:col-span-7 flex flex-col justify-center">
            {/* Chapter Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium">
                CHAPTER 06
              </span>
              <span className="w-8 h-[1px] bg-coral/50" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#8CA595]">
                START A CONVERSATION
              </span>
            </motion.div>

            {/* Large Serif Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.08] tracking-tight mb-6"
            >
              Every great
              <br />
              ecosystem starts
              <br />
              with an <span className="italic font-normal text-coral">idea.</span>
            </motion.h2>

            {/* Supporting Invitation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg text-[#B9CFC2] font-sans font-light leading-relaxed mb-8 max-w-xl"
            >
              Have a vision for an extraordinary living environment?
              Let&apos;s explore what we can create together.
            </motion.p>

            {/* Prominent CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-coral hover:bg-coral-hover text-white text-xs sm:text-sm tracking-[0.16em] uppercase font-sans font-medium transition-all duration-300 shadow-xl hover:shadow-coral/30 hover:scale-[1.02] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="mailto:sales@bondinwater.com?subject=Inquiry%20regarding%20Living%20Ecosystem"
                className="text-xs uppercase tracking-[0.16em] text-white/60 hover:text-white py-3 px-4 transition-colors"
              >
                Direct Email →
              </a>
            </motion.div>
          </div>

          {/* Right Column: Contact Details with Fine Vertical Divider */}
          <div className="md:col-span-5 md:pl-8 lg:pl-10 md:border-l md:border-white/10 flex flex-col justify-center space-y-6">
            <h3 className="text-sm uppercase font-mono tracking-[0.25em] text-[#8CA595]">
              GET IN TOUCH
            </h3>

            <div className="space-y-5">
              {/* Phone Link */}
              <a
                href="tel:+919833661551"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#142C1E]/60 border border-white/5 hover:border-coral/40 hover:bg-[#183625] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-coral/15 flex items-center justify-center text-coral group-hover:bg-coral group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8CA595] tracking-wider block">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-base sm:text-lg font-mono text-white group-hover:text-coral transition-colors">
                    +91 9833 661 551
                  </span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href="mailto:sales@bondinwater.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#142C1E]/60 border border-white/5 hover:border-coral/40 hover:bg-[#183625] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-coral/15 flex items-center justify-center text-coral group-hover:bg-coral group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8CA595] tracking-wider block">
                    Sales &amp; Consultations
                  </span>
                  <span className="text-base sm:text-lg font-mono text-white group-hover:text-coral transition-colors">
                    sales@bondinwater.com
                  </span>
                </div>
              </a>

              {/* Website Link */}
              <a
                href="https://www.bondinwater.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#142C1E]/60 border border-white/5 hover:border-coral/40 hover:bg-[#183625] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-coral/15 flex items-center justify-center text-coral group-hover:bg-coral group-hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8CA595] tracking-wider block">
                    Official Website
                  </span>
                  <span className="text-base sm:text-lg font-mono text-white group-hover:text-coral transition-colors">
                    www.bondinwater.com
                  </span>
                </div>
              </a>
            </div>

            <p className="text-xs text-[#8CA595]/80 font-sans leading-relaxed pt-2">
              From initial conceptualisation and architectural masterplanning to turnkey execution,
              filtration automation and long-term ecosystem maintenance.
            </p>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#8CA595]">
          {/* Left: Emblem + Live Wordmark */}
          <div className="flex items-center gap-3">
            <img
              src="/brand/bondinwater-original-emblem.png"
              alt="BondInWater Emblem"
              className="w-7 h-7 object-contain"
            />
            <span className="text-sm font-sans tracking-[0.22em] text-white font-medium uppercase">
              BONDINWATER
            </span>
          </div>

          {/* Navigation Anchors */}
          <div className="flex items-center gap-6 sm:gap-8 font-sans tracking-wider text-[11px] uppercase">
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#worlds" className="hover:text-white transition-colors">Worlds</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-[11px] text-[#8CA595]/70">
            &copy; BondInWater. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
