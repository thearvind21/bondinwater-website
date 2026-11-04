import React from "react";
import { WHY_CHOOSE_US } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { CheckCircle2 } from "lucide-react";

export function WhyBondInWater() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#F4F4EF] text-[#202723] border-b border-[#E2E4DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              DIFFERENTIATORS &bull; VALUE PROPOSITION
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#60775B]">
              DOCUMENTED STUDIO STANDARDS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.95]">
            Why Architects &amp; Institutions Choose BondInWater.
          </h2>

          <p className="text-base sm:text-lg text-[#202723]/80 font-sans font-light leading-relaxed max-w-3xl">
            We unite zoological biome empathy with certified structural engineering, delivering singular accountability from concept sketches through decades of biological operation.
          </p>
        </div>

        {/* 6 Core Differentiator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-white border border-[#E2E4DA] shadow-sm flex flex-col justify-between hover:border-[#1D382B] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E4DA] pb-3">
                  <span className="text-xs font-mono font-bold text-[#1D382B]">
                    [{String(idx + 1).padStart(2, "0")}] PILLAR
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#60775B]">
                    VERIFIED CAPABILITY
                  </span>
                </div>

                <h3 className="text-xl font-display uppercase tracking-tight text-[#1D382B] font-bold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#202723]/80 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E2E4DA] flex items-center gap-2 text-[11px] font-mono text-[#60775B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#304A38] shrink-0" />
                <span>STUDIO BENCHMARK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}