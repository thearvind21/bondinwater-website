"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[85vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#1F4338] text-white overflow-hidden"
    >
      {/* Background Image Container with Gradient Fade on Left */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Authentic BondInWater Aquatic Environment Installation Image */}
          <Image
            src="/images/bondinwater/ef9742_00d0a8d52ba24f73a1cc51b4e2821b92.jpg"
            alt="BondInWater authentic aquatic environment installation"
            fill
            className="object-cover object-[center_right] lg:object-[75%_center] opacity-80"
            priority
            sizes="100vw"
          />
          {/* Gradients to match the approved reference exactly: Deep Canopy (#1F4338) fading from left and top */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4338] via-[#1F4338]/90 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338] via-transparent to-[#1F4338]/50 lg:hidden" />
          <div className="absolute inset-0 bg-[#1F4338]/20 mix-blend-multiply" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-6 sm:space-y-7">
          
          {/* Small Eyebrow Tagline */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-medium">
              NATURE, ENGINEERED &bull; WE CREATE ECOSYSTEMS
            </span>
          </div>

          {/* Headline matching approved reference: White serif + Italic Leaf Green "for Life" */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal leading-[1.08] tracking-[-0.01em] text-white">
            Extraordinary Environments <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#8CA477]">for Life</span>
          </h1>

          {/* Supporting Copy from Verified Company Statements */}
          <p className="text-base sm:text-lg text-white/90 font-sans font-light leading-relaxed max-w-lg">
            Aquatic environments, animal habitats and architectural solutions &mdash; designed, built and cared for by BondInWater.
          </p>

          {/* CTAs: Earth Copper Primary Button + Secondary Action Link */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3">
            {/* Primary CTA */}
            <a
              href="#approach"
              className="inline-flex items-center gap-2 bg-[#B47750] text-white hover:bg-[#9F6542] text-sm sm:text-base font-sans font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] transition-colors shadow-sm"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#story"
              className="inline-flex items-center gap-2.5 text-white/90 hover:text-white text-sm sm:text-base font-sans font-medium transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors bg-white/10">
                <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}