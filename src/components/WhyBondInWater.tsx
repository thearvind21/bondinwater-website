import React from "react";
import { WHY_CHOOSE_US } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { ShieldCheck, Compass, CheckCircle2 } from "lucide-react";

export function WhyBondInWater() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#F8F9FA] text-neutral-900 border-b border-neutral-300 relative bg-museum-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="light">
              DIFFERENTIATORS // VALUE PROPOSITION
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              DOCUMENTED STUDIO STANDARDS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-neutral-950 leading-[0.95]">
            Why Architects & Institutions Choose BondInWater.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 font-sans font-light leading-relaxed max-w-3xl">
            We unite zoological biome empathy with certified structural engineering, delivering singular accountability from concept sketches through decades of biological operation.
          </p>
        </div>

        {/* 6 Core Differentiator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-white border border-neutral-300 shadow-sm flex flex-col justify-between hover:border-neutral-900 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="text-xs font-mono font-bold text-neutral-950">
                    [{String(idx + 1).padStart(2, "0")}] PILLAR
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    VERIFIED CAPABILITY
                  </span>
                </div>

                <h3 className="text-xl font-display uppercase tracking-tight text-neutral-950 font-bold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>STUDIO BENCHMARK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
