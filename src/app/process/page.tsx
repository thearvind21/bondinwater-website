import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROCESS_STEPS } from "@/data/bondinwater-data";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Turnkey Methodology (8 Stages) — BondInWater",
  description: "Explore BondInWater's complete eight-stage turnkey project methodology from initial feasibility and architectural CAD to commissioning and ongoing biologist care.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#1F4338] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
                BONDINWATER &bull; TURNKEY LIFECYCLE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] mb-6">
              The Eight-Stage <br />
              <span className="italic font-normal text-[#8CA477]">Turnkey Methodology</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              From our documented 35-page company profile (Page 4). A meticulous, end-to-end framework governing feasibility assessment, architectural precision, certified fabrication, and ongoing biological maintenance.
            </p>
          </div>

          {/* Quick Step Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-8 mt-6 border-t border-white/10">
            {PROCESS_STEPS.map((step) => (
              <a
                key={step.number}
                href={`#stage-${step.number}`}
                className="p-2.5 rounded bg-white/5 hover:bg-[#8CA477] hover:text-[#1F4338] transition-colors text-center group"
              >
                <span className="text-xs font-mono font-bold block text-[#8CA477] group-hover:text-[#1F4338]">
                  {step.number}
                </span>
                <span className="text-[11px] font-sans truncate block text-white/80 group-hover:text-[#1F4338]">
                  {step.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All 8 Stages in Full Detail */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.number}
            id={`stage-${step.number}`}
            className="scroll-mt-28 bg-white rounded-lg border border-[#1F4338]/10 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Step Left Details (7 cols) */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-white bg-[#1F4338] px-2.5 py-1 rounded">
                    STAGE {step.number}
                  </span>
                  <span className="text-xs font-sans text-[#27302B]/60 font-medium">
                    {step.profilePage}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338] mb-2">
                  {step.title}
                </h2>
                <p className="text-sm font-sans font-medium text-[#B47750] mb-4">
                  {step.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#1F4338]/10">
                  <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                    STAGE DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm font-sans text-[#27302B]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {step.quote && (
                <div className="p-4 rounded bg-[#E9EFE7]/50 border-l-2 border-[#4F8278] text-xs sm:text-sm italic font-serif text-[#1F4338]">
                  &ldquo;{step.quote}&rdquo;
                </div>
              )}
            </div>

            {/* Step Right Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#1F4338]">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338]/60 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        ))}
      </section>

      {/* Turnkey Consultation CTA */}
      <section className="bg-[#1F4338] text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-sans font-semibold tracking-[0.24em] uppercase text-[#8CA477] block">
            STAGE 01: BEGIN WITH FEASIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif">
            Initiate Your Project Feasibility Audit
          </h2>
          <p className="text-base text-white/80 font-sans font-light max-w-xl mx-auto">
            Our engineers assess slab deflection tolerances, water chemistry, microclimate requirements, and lifecycle energy demands.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-8 py-3.5 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-sm"
            >
              <span>Schedule Feasibility Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
