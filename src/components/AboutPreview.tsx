import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Heart, Compass, Award } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-[#27302B] border-b border-[#1F4338]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Credential (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#1F4338] shadow-md border border-[#1F4338]/10">
              <Image
                src="/images/pdf_images/p12_img1.png"
                alt="BondInWater animal care and wildlife conservation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338]/90 via-[#1F4338]/20 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8CA477] font-bold block mb-1">
                  ETHICAL STEWARDSHIP
                </span>
                <p className="text-xs sm:text-sm font-sans italic text-white/90">
                  &ldquo;We respect and value the bond every organism shares on this planet. Sustainability and conservation reside at the heart of our every process.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-5 sm:bottom-6 sm:-right-6 bg-[#1F4338] text-white p-5 rounded-lg border border-[#8CA477]/30 shadow-xl hidden sm:block">
              <span className="text-3xl font-serif font-bold text-[#8CA477] block leading-none">30+</span>
              <span className="text-[11px] font-sans text-white/80 uppercase tracking-wider block mt-1">
                Years Architectural Heritage
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Multidisciplinary Capabilities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-bold block">
                ABOUT BONDINWATER &bull; NATURE ENGINEERED
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12]">
                Where Nature, Animals and <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#4F8278]">Engineering Meet</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-light leading-relaxed">
              BondInWater is an international aquatic design, habitat engineering, and architectural planning studio. Backed by three decades of documented experience, we bridge the gap between creative visual architecture and living biological health.
            </p>

            <p className="text-sm sm:text-base text-[#27302B]/75 font-sans font-light leading-relaxed">
              Our multidisciplinary team unites biologists, animal care specialists, and skilled civil and mechanical engineers. Biologists inform microclimate selection, water chemistry, and species compatibility, while engineers ensure structural load tolerance, optical cast acrylic bonding, and fail-safe automation.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="flex items-start gap-3 p-3.5 rounded bg-[#E9EFE7]/40 border border-[#1F4338]/5">
                <ShieldCheck className="w-5 h-5 text-[#4F8278] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#1F4338]">30+ Years Experience</h4>
                  <p className="text-xs font-sans text-[#27302B]/70">Turnkey architectural leadership and construction CAD.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-[#E9EFE7]/40 border border-[#1F4338]/5">
                <Heart className="w-5 h-5 text-[#4F8278] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#1F4338]">Animal Welfare First</h4>
                  <p className="text-xs font-sans text-[#27302B]/70">Ethical captive breeding with zero wild population impact.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-[#E9EFE7]/40 border border-[#1F4338]/5">
                <Compass className="w-5 h-5 text-[#4F8278] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#1F4338]">Multidisciplinary Team</h4>
                  <p className="text-xs font-sans text-[#27302B]/70">Biologists, engineers, and master acrylic craftsmen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-[#E9EFE7]/40 border border-[#1F4338]/5">
                <Award className="w-5 h-5 text-[#4F8278] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#1F4338]">Single-Source Delivery</h4>
                  <p className="text-xs font-sans text-[#27302B]/70">End-to-end feasibility, rigging, and ongoing maintenance.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-7 py-3.5 rounded-[4px] font-sans text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>About BondInWater</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
