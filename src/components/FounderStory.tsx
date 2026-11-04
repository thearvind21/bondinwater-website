import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
import { COMPANY_PHILOSOPHY_DATA } from "@/data/bondinwater-data";

export function FounderStory() {
  const documentedStrengths = [
    { title: "Conceptualisation & Masterplanning", desc: "Feasibility audits, spatial masterplanning for zoos and tourism destinations, and 3D architectural walkthroughs." },
    { title: "30+ Years Architectural Heritage", desc: "Over three decades of multidisciplinary experience across luxury interiors and public zoological attractions." },
    { title: "Zoo Masterplanning & Enclosures", desc: "Ethological animal enclosure planning prioritizing species welfare, environmental enrichment, and visitor flow." },
    { title: "Turnkey Project Execution", desc: "Single-source general contracting across the 8 verified lifecycle stages from procurement to commissioning." },
    { title: "Precision Acrylic Craftsmanship", desc: "Cast PMMA sheets from 20mm to 300mm thick with molecular chemical bonding and 20-year UV warranties." },
    { title: "Aquatic Environments & Ponds", desc: "Freshwater biotopes, marine reef tanks, public oceanariums, and self-filtering natural koi ponds." },
    { title: "Natural Habitats & Vivariums", desc: "Bioactive paludariums, epiphyte moss bio-walls, and microclimate rainforest vivariums." },
    { title: "Operation & Biological Maintenance", desc: "Trained biologists and skilled engineers conducting regular laboratory water testing under strict SOPs." },
    { title: "Specialised Technical Automation", desc: "Neptune Systems Apex programming, 3D-printed animal rehabilitation prosthetics, and coral restoration." },
  ];

  return (
    <section id="story" className="py-24 lg:py-32 bg-[#202723] text-[#F4F4EF] border-b border-[#304A38]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="sage">
              COMPANY STORY &bull; PHILOSOPHY &amp; HERITAGE
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#AEBBA4]">
              OVER THREE DECADES OF EXPERTISE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#F4F4EF] leading-[0.95]">
            From Biological Empathy to Turnkey Engineering.
          </h2>

          <p className="text-base sm:text-lg text-[#E2E4DA] font-sans font-light leading-relaxed max-w-3xl">
            {COMPANY_PHILOSOPHY_DATA.evolutionNarrative}
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Authentic Photography & Biome Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#304A38] bg-[#1D382B] p-3 shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#202723]">
                <Image
                  src="/images/bondinwater/ef9742_d41c5589ef3548f1890a925f493a7b35.jpg"
                  alt="BondInWater on-site living architecture"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#1D382B]/90 text-[#F4F4EF] p-3.5 border border-[#304A38]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#AEBBA4] block font-bold">
                    BIOLOGICAL CONSERVATION FOCUS
                  </span>
                  <p className="text-xs font-sans text-[#E2E4DA] mt-1 leading-snug">
                    Recreating natural micro-environments where living organisms flourish through scientific life support.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1D382B] border border-[#304A38] text-xs font-mono text-[#E2E4DA] leading-relaxed border-l-2 border-l-[#A87952]">
              &ldquo;{COMPANY_PHILOSOPHY_DATA.architecturalHeritage}&rdquo;
            </div>
          </div>

          {/* Right Column: 9 Documented Strengths Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#304A38] pb-4">
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#F4F4EF] font-bold">
                Documented Studio Strengths &amp; Scope
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#AEBBA4] mt-1">
                Verified against the 35-page company profile
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {documentedStrengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#1D382B] border border-[#304A38] shadow-sm flex flex-col justify-between hover:border-[#AEBBA4] transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#AEBBA4] font-bold">
                      [{String(idx + 1).padStart(2, "0")}] STRENGTH
                    </div>
                    <h4 className="text-sm font-display uppercase tracking-tight text-[#F4F4EF] font-bold">
                      {strength.title}
                    </h4>
                    <p className="text-xs text-[#E2E4DA] font-sans font-light leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}