"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, ShieldCheck, Waves, Sparkles, ChevronRight } from "lucide-react";
import { LotusEmblem, SwimmingKoiSilhouette, FernFrondAccent } from "./BotanicalDecorators";

interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  metric: string;
  metricLabel: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "paludarium",
    tag: "Bio-Active Architecture",
    title: "Where Living Nature Meets Intelligent Design.",
    subtitle: "Creating extraordinary aquatic environments, natural habitats, and architectural water experiences through thoughtful design, expert engineering, and a passion for life.",
    image: "/images/bondinwater/ef9742_2d866d794aa640bbbf9e0705cabfc77c.jpg",
    metric: "93%",
    metricLabel: "Optical Clarity Acrylic & CFD Flow Validated"
  },
  {
    id: "koi-pond",
    tag: "Ecosystem Stewardship",
    title: "Serene Sanctuaries of Water, Stone & Life.",
    subtitle: "Custom-designed Japanese Nishikigoi ponds, cascading rock waterfalls, and biological filtration wetlands engineered to flourish for generations.",
    image: "/images/bondinwater/ef9742_1017dd86486342cdb1677aa71a6e9028.jpg",
    metric: "100%",
    metricLabel: "Natural Biological Filtration & Living Stone"
  },
  {
    id: "acrylic-pool",
    tag: "Structural Engineering",
    title: "Boundary-Defying Clarity in Motion.",
    subtitle: "Bespoke structural acrylic pool walls, infinite underwater viewports, and marine-grade cantilevered transparent architecture.",
    image: "/images/bondinwater/ef9742_0c82a93844c64e2fa7a9568ba75ebab2.jpg",
    metric: "17x",
    metricLabel: "Impact Strength Over Traditional Glass"
  }
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#F5F2E9]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-12 right-6 pointer-events-none opacity-30 hidden lg:block">
        <FernFrondAccent className="w-48 h-48 text-[#A5AD92]" />
      </div>
      <div className="absolute bottom-10 left-8 pointer-events-none opacity-20 hidden md:block">
        <SwimmingKoiSilhouette className="w-36 h-36 text-[#B18A60]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8E2D5]/80 border border-[#A5AD92]/30 text-[#344B38]">
              <LotusEmblem className="w-3.5 h-3.5 text-[#B18A60]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#344B38]">
                {slide.tag} • BondInWater
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] font-serif text-[#292C25] font-normal tracking-[-0.02em]">
              Where <span className="italic font-light text-[#344B38]">Living Nature</span> Meets <span className="underline decoration-[#B18A60]/40 underline-offset-8">Intelligent Design.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#292C25]/85 font-sans leading-relaxed max-w-2xl font-light">
              Creating extraordinary aquatic environments, natural habitats, and architectural water experiences through thoughtful design, expert engineering, and a genuine passion for life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#expertise"
                className="group inline-flex items-center gap-2.5 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold tracking-[0.14em] uppercase px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Our Expertise</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B18A60]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase px-6 py-4 rounded-full border border-[#85866A]/40 text-[#292C25] hover:border-[#344B38] hover:bg-white/40 transition-all duration-300"
              >
                <span>Let’s Create Something Unique</span>
                <ChevronRight className="w-4 h-4 text-[#85866A]" />
              </a>
            </div>

            {/* Editorial Triple Trust Points */}
            <div className="pt-8 border-t border-[#E8E2D5] grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-medium text-[#344B38]">Design</p>
                <p className="text-[11px] uppercase tracking-wider text-[#85866A] mt-0.5">CFD & Spatial Architecture</p>
              </div>
              <div className="border-l border-[#E8E2D5] pl-4">
                <p className="text-2xl sm:text-3xl font-serif font-medium text-[#B18A60]">Build</p>
                <p className="text-[11px] uppercase tracking-wider text-[#85866A] mt-0.5">Precision Cast Acrylic</p>
              </div>
              <div className="border-l border-[#E8E2D5] pl-4">
                <p className="text-2xl sm:text-3xl font-serif font-medium text-[#344B38]">Operate</p>
                <p className="text-[11px] uppercase tracking-wider text-[#85866A] mt-0.5">Lifelong Stewardship</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Architectural Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#A5AD92]/40 -rotate-1 pointer-events-none" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#E8E2D5] aspect-[4/5] group">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover reveal-zoom transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Subtle vignette for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/80 via-transparent to-transparent opacity-80" />

                {/* Botanical Accent on photo */}
                <div className="absolute top-4 right-4 bg-[#F5F2E9]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold text-[#344B38] flex items-center gap-1.5 border border-[#E8E2D5]">
                  <Sparkles className="w-3 h-3 text-[#B18A60]" />
                  <span>Verified Project</span>
                </div>

                {/* Bottom Information Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-[#F5F2E9] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A781] font-medium">
                      0{activeSlide + 1} / 0{HERO_SLIDES.length}
                    </span>
                    <span className="text-xs text-[#E8E2D5]/90 font-light">BondInWater Portfolio</span>
                  </div>
                  <p className="text-lg font-serif text-[#F5F2E9] leading-snug">
                    {slide.title}
                  </p>
                  <p className="text-xs text-[#E8E2D5]/80 font-sans line-clamp-2">
                    {slide.metricLabel}
                  </p>
                </div>
              </div>

              {/* Floating Trust Pill */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#F5F2E9] border border-[#E8E2D5] rounded-xl p-4 shadow-xl max-w-[240px] z-20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#344B38]/10 text-[#344B38] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#292C25]">Life Support Systems</p>
                    <p className="text-[10px] text-[#85866A] leading-tight mt-0.5">
                      CFD Fluid Dynamics simulation validates flow before construction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider indicators */}
              <div className="flex items-center justify-center gap-2 mt-9">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? "w-8 bg-[#344B38]" : "w-2 bg-[#A5AD92]/50 hover:bg-[#A5AD92]"
                    }`}
                    aria-label={`View slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
