import React from "react";
import { WHY_CHOOSE_US } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem, SwimmingKoiSilhouette } from "./BotanicalDecorators";
import { ShieldCheck, Sparkles, CheckCircle2, Award, Heart, Cpu } from "lucide-react";

export function WhyBondInWater() {
  const metrics = [
    {
      value: "100%",
      label: "Custom Tailored",
      detail: "Bespoke spatial integration for luxury villas, penthouses & public exhibits."
    },
    {
      value: "Zero",
      label: "Dead-Zone Guarantee",
      detail: "Validated with 3D Computational Fluid Dynamics (CFD) simulation."
    },
    {
      value: "93%",
      label: "Optical Clarity",
      detail: "Museum-grade cast acrylic with superior light transmission over glass."
    },
    {
      value: "Lifelong",
      label: "Maintenance Care",
      detail: "Ongoing water parameter testing, biosecurity & technical support."
    }
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#F5F2E9] relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute left-6 bottom-10 opacity-15 pointer-events-none hidden lg:block">
        <SwimmingKoiSilhouette className="w-56 h-56 text-[#344B38]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Pillars of Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            Why Choose <span className="italic font-light text-[#344B38]">BondInWater?</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            We redefine aquatic design and animal enclosures through a rare union of biological empathy, architectural finesse, and precision engineering.
          </p>
        </div>

        {/* 4 Impact Metric Banners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-2xl bg-white/70 border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow text-center space-y-1"
            >
              <p className="text-3xl sm:text-4xl font-serif font-medium text-[#344B38]">
                {m.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#292C25]">
                {m.label}
              </p>
              <p className="text-[11px] text-[#85866A] font-sans font-light leading-snug pt-1">
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white/90 border border-[#E8E2D5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B18A60]">
                    0{index + 1}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#A5AD92]" />
                </div>
                
                <h3 className="text-xl font-serif text-[#292C25] font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#292C25]/80 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E2D5]/70 flex items-center gap-2 text-[11px] font-medium text-[#344B38]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#344B38]" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
