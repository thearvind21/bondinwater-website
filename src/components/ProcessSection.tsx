"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS, ProcessStep } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { Check, ArrowRight, Layers, FileCheck, Shield, ChevronRight } from "lucide-react";

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white text-neutral-900 border-b border-neutral-300 relative bg-museum-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="light">
              METHODOLOGY // 8-STAGE TURNKEY
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              DOCUMENTED ON PAGE 4 OF COMPANY PROFILE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-neutral-950 leading-[0.95]">
            Complete 8-Stage Turnkey Project Lifecycle.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 font-sans font-light leading-relaxed max-w-3xl">
            Single-source accountability from preliminary feasibility study to continuous water testing and biological operation—ensuring seamless coordination without fragmentation between separate contractors.
          </p>
        </div>

        {/* 8-Stage Horizontal Timeline Navigator */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none border-b border-neutral-200">
          <div className="flex items-center gap-3 min-w-max">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 border transition-all duration-150 min-w-[150px] ${
                    isActive
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                      : "bg-[#F8F9FA] text-neutral-700 hover:bg-neutral-200 border-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={`font-bold ${isActive ? "text-emerald-400" : "text-neutral-500"}`}>
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

        {/* Active Stage Detailed Exhibition Block */}
        <div className="border border-neutral-300 bg-[#F8F9FA] p-6 sm:p-10 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Stage Visual & Citation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-neutral-300 bg-white p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={activeStep.image}
                    alt={`${activeStep.title} stage schematic`}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-2 left-2 bg-neutral-950/80 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-neutral-700">
                    STAGE {activeStep.number} &bull; {activeStep.profilePage}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-neutral-300 text-xs font-sans text-neutral-700 leading-relaxed italic border-l-2 border-l-neutral-950">
                “{activeStep.quote}”
              </div>
            </div>

            {/* Right: Stage Scope & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5 border-b border-neutral-300 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">
                  STAGE {activeStep.number} OF 08 // {activeStep.profilePage}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-neutral-950">
                  {activeStep.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-600">
                  {activeStep.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 font-sans font-light leading-relaxed">
                {activeStep.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-950 font-bold">
                  Phase Deliverables & Verification
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-neutral-800 font-sans bg-white p-3 border border-neutral-200"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 border-t border-neutral-300 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  {activeStepIndex + 1} / {PROCESS_STEPS.length} PHASES
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 border border-neutral-300 bg-white text-xs font-mono uppercase text-neutral-700 disabled:opacity-40 hover:bg-neutral-100"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                    className="px-4 py-2 bg-neutral-950 text-white text-xs font-mono uppercase font-bold tracking-wider disabled:opacity-40 hover:bg-neutral-800"
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
