"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { Check } from "lucide-react";

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F1F1ED] text-[#171A19] border-b border-[#B4B9B9] relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="light">
              METHODOLOGY &bull; 8-STAGE TURNKEY
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#565E5C]">
              DOCUMENTED ON PAGE 4 OF COMPANY PROFILE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#171A19] leading-[0.95]">
            Complete 8-Stage Turnkey Project Lifecycle.
          </h2>

          <p className="text-base sm:text-lg text-[#323836] font-sans font-normal leading-relaxed max-w-3xl">
            Single-source accountability from preliminary feasibility study to continuous water testing and biological operation—ensuring seamless coordination without fragmentation between separate contractors.
          </p>
        </div>

        {/* 8-Stage Horizontal Timeline Navigator */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none border-b border-[#B4B9B9]">
          <div className="flex items-center gap-3 min-w-max">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 border transition-all duration-150 min-w-[150px] ${
                    isActive
                      ? "bg-[#191C1B] text-[#F1F1ED] border-[#191C1B] shadow-sm"
                      : "bg-white text-[#171A19] hover:bg-neutral-100 border-[#B4B9B9]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={`font-bold ${isActive ? "text-[#A66547]" : "text-[#565E5C]"}`}>
                      STAGE {step.number}
                    </span>
                    <span className="text-[10px] opacity-75">{step.profilePage}</span>
                  </div>
                  <div className="text-xs font-display uppercase tracking-tight font-bold truncate">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Block */}
        <div className="border border-[#B4B9B9] bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Stage Visual & Citation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#D8DCDA] bg-[#CED2D2] p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#D8DCDA]">
                  <Image
                    src={activeStep.image}
                    alt={`${activeStep.title} stage schematic`}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#171A19]/90 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-[#171A19]">
                    STAGE {activeStep.number} &bull; {activeStep.profilePage}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F1F1ED] border border-[#B4B9B9] text-xs font-sans text-[#323836] leading-relaxed italic border-l-2 border-l-[#A66547]">
                “{activeStep.quote}”
              </div>
            </div>

            {/* Right: Stage Scope & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5 border-b border-[#B4B9B9] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A66547] font-bold">
                  STAGE {activeStep.number} OF 08 &bull; {activeStep.profilePage}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-[#171A19] font-bold">
                  {activeStep.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#565E5C]">
                  {activeStep.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#323836] font-sans font-normal leading-relaxed">
                {activeStep.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#171A19] font-bold">
                  Phase Deliverables & Verification
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#171A19] font-sans bg-[#F1F1ED] p-3 border border-[#D8DCDA]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#79836D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 border-t border-[#B4B9B9] flex items-center justify-between">
                <span className="text-xs font-mono text-[#565E5C]">
                  {activeStepIndex + 1} / {PROCESS_STEPS.length} PHASES
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 border border-[#B4B9B9] bg-[#F1F1ED] text-xs font-mono uppercase text-[#171A19] disabled:opacity-40 hover:bg-neutral-200"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                    className="px-4 py-2 bg-[#191C1B] text-white text-xs font-mono uppercase font-bold tracking-wider disabled:opacity-40 hover:bg-[#A66547] transition-colors"
                  >
                    Next Phase
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
