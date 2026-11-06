import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Compass, PencilRuler, Hammer, HeartHandshake } from "lucide-react";

export function ProcessPreview() {
  const phases = [
    {
      number: "01",
      title: "Discover & Plan",
      subtitle: "Site Feasibility & Biome Audit",
      description: "Rigorous assessment of structural slab load tolerances, water chemistry, ambient microclimates, and biological suitability before drafting commences.",
      icon: Compass,
      stages: "Stages 01 & 03",
    },
    {
      number: "02",
      title: "Design & Engineer",
      subtitle: "Architectural CAD & 3D Walkthroughs",
      description: "Translating concepts into construction blueprints, MEP & HVAC schematics, Computational Fluid Dynamics (CFD) water modeling, and 3D walkthrough videos.",
      icon: PencilRuler,
      stages: "Stage 02",
    },
    {
      number: "03",
      title: "Build & Commission",
      subtitle: "Cast Acrylic, Rigging & Biochemical Balancing",
      description: "Precision acrylic bonding, custom crating, heavy crane logistics, GFRC theming, biochemical water cycling, and fail-safe automation testing.",
      icon: Hammer,
      stages: "Stages 04, 05, 06 & 07",
    },
    {
      number: "04",
      title: "Operate & Maintain",
      subtitle: "Biologist Stewardship & Ongoing SOPs",
      description: "Routine laboratory water testing, preventative filtration servicing, nutritional care, and 24/7 technical support to ensure perpetual habitat health.",
      icon: HeartHandshake,
      stages: "Stage 08",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#E9EFE7] text-[#27302B] border-b border-[#1F4338]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 lg:mb-18 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-bold block">
              TURNKEY METHODOLOGY &bull; END-TO-END DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12]">
              A Structured Four-Phase <br className="hidden sm:inline" />
              Turnkey Execution Framework
            </h2>
            <p className="text-sm sm:text-base text-[#27302B]/80 font-sans font-light leading-relaxed">
              Every project follows our documented eight-stage lifecycle (Page 4 of Company Profile), structured into four concise operational phases.
            </p>
          </div>

          <div>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 bg-[#1F4338] hover:bg-[#142C25] text-white px-6 py-3 rounded-[4px] font-sans text-xs sm:text-sm font-medium transition-colors shadow-xs"
            >
              <span>Explore Complete 8 Stages</span>
              <ArrowUpRight className="w-4 h-4 text-[#8CA477]" />
            </Link>
          </div>
        </div>

        {/* 4 Phases Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.number}
                className="bg-white rounded-lg border border-[#1F4338]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#4F8278] transition-all hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[#4F8278] group-hover:text-[#1F4338] transition-colors">
                      {phase.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#E9EFE7] text-[#1F4338] flex items-center justify-center group-hover:bg-[#1F4338] group-hover:text-[#8CA477] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-[#1F4338] mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-xs font-sans text-[#B47750] font-medium mb-3">
                    {phase.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#27302B]/75 font-sans font-light leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1F4338]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#4F8278] font-semibold">
                    {phase.stages}
                  </span>
                  <Link
                    href={`/process#stage-${phase.number === "01" ? "01" : phase.number === "02" ? "02" : phase.number === "03" ? "04" : "08"}`}
                    className="text-xs font-sans font-semibold text-[#B47750] group-hover:text-[#1F4338] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Turnkey Note */}
        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-[#1F4338] hover:text-[#4F8278] transition-colors"
          >
            <span>Review Full 8-Stage Turnkey Deliverables &amp; Inspection Protocols</span>
            <ArrowRight className="w-4 h-4 text-[#B47750]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
