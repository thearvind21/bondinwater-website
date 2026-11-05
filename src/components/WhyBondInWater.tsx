import React from "react";
import { WHY_CHOOSE_US } from "@/data/bondinwater-data";
import { CheckCircle2 } from "lucide-react";

export function WhyBondInWater() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white text-[#27302B] border-b border-[#8CA477]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#4F8278] font-bold">
              DIFFERENTIATORS &bull; VALUE PROPOSITION
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              DOCUMENTED STUDIO STANDARDS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F4338] leading-[1.1]">
            Why Architects &amp; Institutions Choose BondInWater
          </h2>

          <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-normal leading-relaxed max-w-3xl">
            We unite zoological biome empathy with certified structural engineering, delivering singular accountability from concept sketches through decades of biological operation.
          </p>
        </div>

        {/* 6 Core Differentiator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#E9EFE7]/40 border border-[#8CA477]/30 rounded-lg shadow-sm flex flex-col justify-between hover:border-[#1F4338] hover:bg-white transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#8CA477]/20 pb-3">
                  <span className="text-xs font-mono font-bold text-[#1F4338]">
                    [{String(idx + 1).padStart(2, "0")}] PILLAR
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#4F8278]">
                    VERIFIED CAPABILITY
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#1F4338] font-bold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#27302B]/85 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#8CA477]/20 flex items-center gap-2 text-[11px] font-mono text-[#4F8278]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4338] shrink-0" />
                <span>STUDIO BENCHMARK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}