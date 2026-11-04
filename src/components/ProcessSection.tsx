"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS, ProcessStep } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F3F3EC] text-[#202820] border-b border-[#DADDD3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              METHODOLOGY &bull; 8-STAGE TURNKEY
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#667367]">
              DOCUMENTED ON PAGE 4 OF COMPANY PROFILE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#172D24] leading-[0.95]">
            Complete 8-Stage Turnkey Project Lifecycle.
          </h2>

          <p className="text-base sm:text-lg text-[#3E4A3F] font-sans font-normal leading-relaxed max-w-3xl">
            Single-source accountability from preliminary feasibility study to continuous water testing and biological operation—ensuring seamless coordination without fragmentation between separate contractors.
          </p>
        </div>

        {/* 8-Stage Horizontal Timeline Navigator */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none border-b border-[#DADDD3]">
          <div className="flex items-center gap-3 min-w-max">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 border transition-all duration-150 min-w-[155px] ${
                    isActive
                      ? "bg-[#172D24] text-[#F3F3EC] border-[#172D24] shadow-sm"
                      : "bg-white text-[#202820] hover:bg-[#EBEBE3] border-[#DADDD3]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={`font-bold ${isActive ? "text-[#A87952]" : "text-[#667367]"}`}>
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
        <div className="border border-[#DADDD3] bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Stage Visual & Citation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[#DADDD3] bg-[#EBEBE3] p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#DADDD3]">
                  <Image
                    src={activeStep.image}
                    alt={`${activeStep.title} stage schematic`}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#172D24]/90 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-[#172D24]">
                    STAGE {activeStep.number} &bull; {activeStep.profilePage}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F3F3EC] border border-[#DADDD3] text-xs font-sans text-[#3E4A3F] leading-relaxed italic border-l-2 border-l-[#A87952]">
                &ldquo;{activeStep.quote}&rdquo;
              </div>
            </div>

            {/* Right: Stage Scope & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5 border-b border-[#DADDD3] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A87952] font-bold">
                  STAGE {activeStep.number} OF 08 &bull; {activeStep.profilePage}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-[#172D24] font-bold">
                  {activeStep.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#667367]">
                  {activeStep.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#3E4A3F] font-sans leading-relaxed">
                {activeStep.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#172D24] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#46634B]" />
                  <span>Key Lifecycle Deliverables</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#202820] bg-[#FDFCFA] p-3 border border-[#E5E7DF]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#46634B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Actions */}
              <div className="pt-6 border-t border-[#DADDD3] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#667367]">
                  Single-source turnkey delivery across India and internationally.
                </div>

                <div className="flex items-center gap-3">
                  {activeStepIndex > 0 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                      className="px-4 py-2 border border-[#DADDD3] text-xs font-mono uppercase text-[#202820] hover:bg-[#EBEBE3]"
                    >
                      &larr; Stage {PROCESS_STEPS[activeStepIndex - 1].number}
                    </button>
                  )}
                  {activeStepIndex < PROCESS_STEPS.length - 1 && (
                    <button
                      onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                      className="px-4 py-2 bg-[#172D24] text-white text-xs font-mono uppercase font-bold hover:bg-[#294333] transition-colors"
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
