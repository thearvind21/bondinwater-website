"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/data/bondinwater-data";
import { Check } from "lucide-react";

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#27302B] border-b border-[#8CA477]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-3 mb-14 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-semibold">
              METHODOLOGY &bull; 8-STAGE TURNKEY
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              DOCUMENTED ON PAGE 4 OF COMPANY PROFILE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12] tracking-[-0.01em]">
            Complete 8-Stage Turnkey Project Lifecycle.
          </h2>

          <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed max-w-3xl">
            Single-source accountability from preliminary feasibility study to continuous water testing and biological operation &mdash; ensuring seamless coordination without fragmentation between separate contractors.
          </p>
        </div>

        {/* 8-Stage Horizontal Timeline Navigator */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none border-b border-[#8CA477]/30">
          <div className="flex items-center gap-3 min-w-max">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 border transition-all duration-150 rounded-md min-w-[155px] ${
                    isActive
                      ? "bg-[#1F4338] text-white border-[#1F4338] shadow-sm font-medium"
                      : "bg-[#E9EFE7] text-[#27302B] hover:bg-white border-[#8CA477]/30"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={`font-bold ${isActive ? "text-[#B47750]" : "text-[#4F8278]"}`}>
                      STAGE {step.number}
                    </span>
                    <span className="text-[10px] opacity-75">{step.profilePage}</span>
                  </div>
                  <div className="text-xs font-sans uppercase tracking-tight truncate font-medium">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Block */}
        <div className="border border-[#8CA477]/30 bg-[#E9EFE7] rounded-xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Stage Visual & Citation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#8CA477]/30 bg-white p-2 rounded-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9EFE7] rounded-md border border-[#8CA477]/25">
                  <Image
                    src={activeStep.image}
                    alt={`${activeStep.title} stage schematic`}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#1F4338]/90 text-white px-2.5 py-1 text-[10px] font-sans font-medium uppercase tracking-widest rounded-[3px] border border-white/10">
                    STAGE {activeStep.number} &bull; {activeStep.profilePage}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#8CA477]/25 text-xs font-sans text-[#27302B]/85 leading-relaxed italic border-l-2 border-l-[#B47750] rounded-r-md">
                &ldquo;{activeStep.quote}&rdquo;
              </div>
            </div>

            {/* Right: Stage Scope & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5 border-b border-[#8CA477]/25 pb-4">
                <span className="text-xs font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                  STAGE {activeStep.number} OF 08 &bull; {activeStep.profilePage}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F4338] font-normal">
                  {activeStep.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#4F8278]">
                  {activeStep.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
                {activeStep.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-sans uppercase tracking-widest text-[#1F4338] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#4F8278] rounded-full" />
                  <span>Key Lifecycle Deliverables</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#27302B] bg-white p-3 rounded-md border border-[#8CA477]/25"
                    >
                      <Check className="w-3.5 h-3.5 text-[#4F8278] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Actions */}
              <div className="pt-6 border-t border-[#8CA477]/25 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#4F8278]">
                  Single-source turnkey delivery across India and internationally.
                </div>

                <div className="flex items-center gap-3">
                  {activeStepIndex > 0 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                      className="px-4 py-2 border border-[#8CA477]/40 text-xs font-sans uppercase text-[#27302B] rounded-[4px] hover:bg-white transition-colors"
                    >
                      &larr; Stage {PROCESS_STEPS[activeStepIndex - 1].number}
                    </button>
                  )}
                  {activeStepIndex < PROCESS_STEPS.length - 1 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                      className="px-4 py-2 bg-[#1F4338] text-white text-xs font-sans uppercase font-medium rounded-[4px] hover:bg-[#142C25] transition-colors"
                    >
                      Stage {PROCESS_STEPS[activeStepIndex + 1].number} &rarr;
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}