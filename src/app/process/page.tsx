import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PROCESS_STEPS } from "@/data/bondinwater-data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Turnkey Project Lifecycle (8 Stages) — BondInWater",
  description: "Explore BondInWater's documented eight-stage turnkey project methodology from initial feasibility study to ongoing biologist operation and maintenance.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Shared Approved Page Hero with Authentic Architectural Planning Master */}
      <PageHero
        eyebrow="BONDINWATER • TURNKEY METHODOLOGY"
        title={
          <>
            From Vision to <span className="italic font-normal text-[#8CA477]">Reality.</span>
          </>
        }
        description="Explore how BondInWater develops ideas into designed, engineered and completed environments."
        imageSrc="/images/hero_masters/process_architectural_blueprint_hero.jpg"
        imageAlt="BondInWater authentic architectural planning, engineering schematics and turnkey blueprint development"
        imagePosition="object-[80%_center] lg:object-[85%_center]"
        ctaText="Explore Our Process"
        ctaHref="#lifecycle"
        ctaIcon="arrow-down"
        heightClass="min-h-[360px] lg:min-h-[400px]"
        paddingClass="pt-24 pb-8 lg:pt-28 lg:pb-10"
        headingClass="text-3xl sm:text-4xl lg:text-[42px]"
      />

      {/* Clean Timeline Composition of All 8 Stages */}
      <section id="lifecycle" className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Quick Jump Bar */}
        <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#1F4338]/10 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#4F8278]">
              LIFECYCLE STAGES:
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {PROCESS_STEPS.map((s) => (
              <a
                key={s.number}
                href={`#stage-${s.number}`}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#E9EFE7] hover:bg-[#1F4338] hover:text-white text-[#1F4338] font-medium transition-colors border border-[#1F4338]/10"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
        <div className="border-b border-[#1F4338]/15 pb-4">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block mb-1">
            SEQUENTIAL EXECUTION FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
            Documented Lifecycle Stages
          </h2>
        </div>

        <div className="space-y-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`stage-${step.number}`}
              className="scroll-mt-28 bg-white rounded-lg border border-[#1F4338]/10 overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 hover:border-[#4F8278] transition-colors"
            >
              {/* Step Visual Column (4 cols) */}
              <div className="md:col-span-4 relative min-h-[200px] md:min-h-full bg-[#1F4338]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
                <div className="absolute top-3 left-3 bg-[#1F4338]/90 text-white text-xs font-mono font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                  STAGE {step.number}
                </div>
              </div>

              {/* Step Details Column (8 cols) */}
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-sans font-medium text-[#B47750]">
                      {step.subtitle}
                    </span>
                    <span className="text-[11px] font-mono text-[#27302B]/50">
                      {step.profilePage}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#1F4338] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#27302B]/80 font-sans font-light leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-[#1F4338]/10">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#4F8278] block mb-2">
                      Documented Deliverables &amp; Activities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs font-sans text-[#27302B]/75">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8278] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {step.quote && (
                  <div className="p-3 rounded bg-[#E9EFE7]/40 border-l-2 border-[#4F8278] text-xs italic font-serif text-[#1F4338]">
                    &ldquo;{step.quote}&rdquo;
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnkey Consultation CTA */}
      <section className="bg-[#1F4338] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#8CA477] block">
            STAGE 01: BEGIN WITH FEASIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif">
            Initiate Your Project Feasibility Audit
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans font-light max-w-xl mx-auto">
            Our engineers assess slab deflection tolerances, water chemistry, microclimate requirements, and lifecycle energy demands.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-7 py-3.5 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-xs"
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
