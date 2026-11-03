"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem } from "./BotanicalDecorators";
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#E8E2D5]/40 border-y border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Turnkey Project Execution Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            From Vision to <span className="italic font-light text-[#344B38]">Vibrant Reality.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            The complete 8-stage turnkey project lifecycle documented in the BondInWater Company Profile—delivering seamless single-source accountability from initial feasibility to lifelong operation.
          </p>
        </div>

        {/* 8-Stage Horizontal Pipeline Navigation */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 min-w-[720px] lg:min-w-0">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between space-y-2 ${
                    isActive
                      ? "bg-[#344B38] text-[#F5F2E9] border-[#344B38] shadow-md -translate-y-0.5"
                      : "bg-white/70 hover:bg-white text-[#292C25] border-[#E8E2D5]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold tracking-wider ${isActive ? "text-[#C9A781]" : "text-[#85866A]"}`}>
                      STAGE {step.number}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#B18A60]" : "bg-[#E8E2D5]"}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-serif font-medium leading-tight line-clamp-2 ${isActive ? "text-[#F5F2E9]" : "text-[#292C25]"}`}>
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Blueprint Presentation Card */}
        <div className="rounded-3xl bg-white border border-[#E8E2D5] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          
          {/* Left: Stage Details & Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-serif font-medium text-[#B18A60]">
                  {current.number}
                </span>
                <div className="h-6 w-[1px] bg-[#E8E2D5]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#292C25] font-normal leading-snug">
                {current.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#292C25]/85 font-sans font-light leading-relaxed">
              {current.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold flex items-center gap-2">
                <span>Verified Deliverables & Milestones</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F5F2E9] border border-[#E8E2D5] text-xs text-[#292C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#344B38] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Quote Callout */}
            <div className="p-4 rounded-xl bg-[#344B38]/5 border-l-4 border-[#344B38] text-xs sm:text-sm font-serif italic text-[#344B38]">
              “{current.quote}”
            </div>

            {/* Navigation Controls */}
            <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D5]">
              <div className="text-xs text-[#85866A]">
                Stage {activeStep + 1} of {PROCESS_STEPS.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#E8E2D5] text-xs font-medium text-[#292C25] hover:bg-[#F5F2E9] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#344B38] text-[#F5F2E9] text-xs font-semibold hover:bg-[#253728] transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right: Authentic Profile Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#292C25] shadow-lg border border-[#E8E2D5]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#F5F2E9]">
                <span className="text-[10px] uppercase tracking-wider text-[#C9A781] font-semibold">
                  Stage {current.number} Documentation
                </span>
                <p className="text-sm font-serif font-light text-[#F5F2E9] mt-0.5">
                  {current.title}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
