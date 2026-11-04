import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
import { COMPANY_PHILOSOPHY_DATA } from "@/data/bondinwater-data";

export function FounderStory() {
  const documentedStrengths = [
    { title: "Conceptualisation & Masterplanning", desc: "Feasibility audits, spatial masterplanning for zoos and tourism, and 3D architectural walkthroughs." },
    { title: "Architectural & Civil Expertise", desc: "Over three decades of multidisciplinary experience across luxury interiors and public attractions." },
    { title: "Zoo Masterplanning & Enclosures", desc: "Ethological animal enclosure planning prioritizing welfare, environmental enrichment, and visitor flow." },
    { title: "Turnkey Project Execution", desc: "Single-source general contracting across the 8 verified lifecycle stages from procurement to commissioning." },
    { title: "Precision Acrylic Craftsmanship", desc: "Cast PMMA sheets from 20mm to 300mm thick with molecular chemical bonding and 20-year UV warranties." },
    { title: "Aquatic Environments & Ponds", desc: "Freshwater biotopes, marine reef tanks, public oceanariums, and self-filtering natural koi ponds." },
    { title: "Natural Habitats & Vivariums", desc: "Bioactive paludariums, epiphyte moss bio-walls, and microclimate rainforest vivariums." },
    { title: "Operation & Biological Maintenance", desc: "Trained biologists and skilled engineers conducting regular laboratory water testing under strict SOPs." },
    { title: "Specialised Technical Automation", desc: "Neptune Systems Apex programming, 3D-printed animal rehabilitation prosthetics, and coral restoration." },
  ];

  return (
    <section id="story" className="py-24 lg:py-32 bg-[#191C1B] text-[#F1F1ED] border-b border-[#2A2E2C] relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="moss">
              STUDIO PHILOSOPHY &bull; CORE CAPABILITIES
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9AA39E]">
              VERIFIED BUSINESS STRENGTHS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#F1F1ED] leading-[0.95]">
            From Biological Empathy to Turnkey Engineering.
          </h2>

          <p className="text-base sm:text-lg text-[#CED2D2] font-sans font-light leading-relaxed max-w-3xl">
            {COMPANY_PHILOSOPHY_DATA.evolutionNarrative}
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Authentic Photography & Biome Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#2D3230] bg-[#212524] p-3 shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141615]">
                <Image
                  src="/images/bondinwater/ef9742_d41c5589ef3548f1890a925f493a7b35.jpg"
                  alt="BondInWater living architecture"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#191C1B]/90 text-[#F1F1ED] p-3.5 border border-[#353B39]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#79836D] block font-bold">
                    BIOLOGICAL CONSERVATION FOCUS
                  </span>
                  <p className="text-xs font-sans text-[#CED2D2] mt-1 leading-snug">
                    Recreating natural micro-environments where living organisms flourish through scientific life support.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#212524] border border-[#2D3230] text-xs font-mono text-[#CED2D2] leading-relaxed border-l-2 border-l-[#A66547]">
              &ldquo;{COMPANY_PHILOSOPHY_DATA.architecturalHeritage}&rdquo;
            </div>
          </div>

          {/* Right Column: 9 Documented Strengths Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#2D3230] pb-4">
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#F1F1ED]">
                Documented Studio Strengths & Scope
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#9AA39E] mt-1">
                Verified against the 35-page company profile
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {documentedStrengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#212524] border border-[#2D3230] shadow-sm flex flex-col justify-between hover:border-[#79836D] transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#79836D] font-bold">
                      [{String(idx + 1).padStart(2, "0")}] STRENGTH
                    </div>
                    <h4 className="text-sm font-display uppercase tracking-tight text-[#F1F1ED] font-bold">
                      {strength.title}
                    </h4>
                    <p className="text-xs text-[#9AA39E] font-sans leading-relaxed">
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
