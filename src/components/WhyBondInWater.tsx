import React from "react";
import { WHY_CHOOSE_US } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { CheckCircle2 } from "lucide-react";

export function WhyBondInWater() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#CED2D2] text-[#171A19] border-b border-[#B4B9B9] relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="earth">
              DIFFERENTIATORS &bull; VALUE PROPOSITION
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#5A625E]">
              DOCUMENTED STUDIO STANDARDS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#171A19] leading-[0.95]">
            Why Architects &amp; Institutions Choose BondInWater.
          </h2>

          <p className="text-base sm:text-lg text-[#4B5350] font-sans font-light leading-relaxed max-w-3xl">
            We unite zoological biome empathy with certified structural engineering, delivering singular accountability from concept sketches through decades of biological operation.
          </p>
        </div>

        {/* 6 Core Differentiator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#F1F1ED] border border-[#B4B9B9] shadow-sm flex flex-col justify-between hover:border-[#171A19] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8DDD8] pb-3">
                  <span className="text-xs font-mono font-bold text-[#171A19]">
                    [{String(idx + 1).padStart(2, "0")}] PILLAR
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A625E]">
                    VERIFIED CAPABILITY
                  </span>
                </div>

                <h3 className="text-xl font-display uppercase tracking-tight text-[#171A19] font-bold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5350] font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#D8DDD8] flex items-center gap-2 text-[11px] font-mono text-[#5A625E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#79836D] shrink-0" />
                <span>STUDIO BENCHMARK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
