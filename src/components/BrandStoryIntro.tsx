import React from "react";
import Image from "next/image";
import { WaterLilyDivider, LotusEmblem, SwimmingKoiSilhouette } from "./BotanicalDecorators";
import { Compass, Heart, Layers, Cpu, Trees } from "lucide-react";

export function BrandStoryIntro() {
  const pillars = [
    {
      icon: Trees,
      title: "Nature & Biodiversity",
      desc: "Authentic living flora, epiphyte mosses, and balanced aquatic microclimates that mimic pristine natural ecosystems."
    },
    {
      icon: Compass,
      title: "Architectural Integration",
      desc: "Harmonizing with interior structures, structural tolerances, lighting ambient channels, and high-end residential interiors."
    },
    {
      icon: Cpu,
      title: "Intelligent Engineering",
      desc: "Computational Fluid Dynamics (CFD), multi-loop life support systems, and automated precision telemetry."
    },
    {
      icon: Heart,
      title: "Ethical Animal Wellbeing",
      desc: "Every habitat is calibrated to the natural behaviors, sensory comfort, and long-term health of its living inhabitants."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#E8E2D5]/35 border-y border-[#E8E2D5] relative overflow-hidden">
      {/* Subtle background motif */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden xl:block">
        <SwimmingKoiSilhouette className="w-80 h-80 text-[#85866A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>The Living Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            More Than an Aquarium. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#344B38]">A Living Experience.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            BondInWater transforms ordinary spaces into immersive natural environments. We believe that bringing living nature into contemporary architecture is not merely decorative—it renews our essential human connection to the wild.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Asymmetric Photo Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Primary Large Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-[#E8E2D5]">
                <Image
                  src="/images/bondinwater/ef9742_d41c5589ef3548f1890a925f493a7b35.jpg"
                  alt="Architecture and living water integration at BondInWater"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[#F5F2E9]">
                  <p className="text-xs uppercase tracking-widest text-[#C9A781] font-semibold">Architectural Integration</p>
                  <p className="text-base font-serif font-light text-[#F5F2E9]">Seamless harmony between structural civil design and living biology.</p>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-48 sm:w-56 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-[#F5F2E9] hidden sm:block">
                <Image
                  src="/images/bondinwater/ef9742_c32b726e4ec643ffbcc5a3f5cd647b0f.jpg"
                  alt="Black Oscar fish thriving in balanced habitat"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-[#344B38]/20" />
              </div>
            </div>
          </div>

          {/* Right Content & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                Design → Build → Operate
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#292C25] font-normal leading-snug">
                Where Living Biology Coexists with Architectural Precision.
              </h3>
              <p className="text-[#292C25]/80 font-sans text-sm sm:text-base leading-relaxed font-light">
                BondInWater unites multidisciplinary disciplines under one roof: landscape architecture, biochemical water engineering, custom thermoformed acrylic fabrication, and animal ethology. Every habitat we engineer is designed to sustain itself gracefully while becoming the defining aesthetic signature of the space.
              </p>
            </div>

            {/* The 4 Harmonic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E8E2D5]">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="space-y-2 p-4 rounded-xl bg-white/40 border border-[#E8E2D5]/70 hover:bg-white/80 transition-colors duration-300">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#344B38]/10 text-[#344B38]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#292C25] font-sans">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#292C25]/75 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Company Creed Callout */}
            <div className="p-6 rounded-2xl bg-[#344B38]/5 border border-[#344B38]/15 space-y-2">
              <p className="text-sm sm:text-base font-serif italic text-[#344B38] leading-relaxed">
                “We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation.”
              </p>
              <p className="text-[11px] font-sans uppercase tracking-widest font-semibold text-[#85866A]">
                — BondInWater Company Philosophy
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
