"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[85vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#1F4338] text-white overflow-hidden"
    >
      {/* Background Image Container with Gradient Fade on Left */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Authentic BondInWater Aquatic Environment Installation Image (Source: PDF Cover Page 1) */}
          <Image
            src="/images/pdf_images/p1_img2.png"
            alt="BondInWater authentic aquatic ecosystem from Company Profile cover"
            fill
            className="object-cover object-[center_right] lg:object-[80%_center] opacity-85"
            priority
            sizes="100vw"
          />
          {/* Gradients matching the approved reference: Deep Canopy (#1F4338) fading from left and top */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4338] via-[#1F4338]/95 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338] via-transparent to-[#1F4338]/60 lg:hidden" />
          <div className="absolute inset-0 bg-[#1F4338]/15 mix-blend-multiply" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-6 sm:space-y-7">
          
          {/* Authentic Profile Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
              BONDINWATER &bull; COMPANY PROFILE
            </span>
          </div>

          {/* Headline matching approved reference: White serif + Italic Leaf Green emphasis */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal leading-[1.08] tracking-[-0.01em] text-white">
            We Create <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#8CA477]">Ecosystem&apos;s</span>
          </h1>

          {/* Authentic Company Profile Description */}
          <p className="text-base sm:text-lg text-white/90 font-sans font-light leading-relaxed max-w-lg">
            A Journey that originates from the inception of your dreams shaped by our craftsmanship and delivered to the customer&apos;s delight.
          </p>

          {/* CTAs: Earth Copper Primary Button + Secondary About Link */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3">
            {/* Primary CTA */}
            <a
              href="#approach"
              className="inline-flex items-center gap-2 bg-[#B47750] text-white hover:bg-[#9F6542] text-sm sm:text-base font-sans font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] transition-colors shadow-sm"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            {/* Secondary CTA (Replaced Watch Story video CTA with authentic company link) */}
            <a
              href="#story"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base font-sans font-medium transition-colors group py-2"
            >
              <span>About BondInWater</span>
              <ArrowUpRight className="w-4 h-4 text-[#8CA477] group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}