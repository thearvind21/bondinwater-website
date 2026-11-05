import React from "react";
import Image from "next/image";
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
    <section id="story" className="py-20 lg:py-28 bg-[#1F4338] text-white border-b border-[#8CA477]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-3 mb-14 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
              COMPANY STORY &bull; PHILOSOPHY &amp; HERITAGE
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#4F8278]">
              OVER THREE DECADES OF EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-white leading-[1.12] tracking-[-0.01em]">
            From Biological Empathy to Turnkey Engineering.
          </h2>

          <p className="text-sm sm:text-base text-white/85 font-sans font-light leading-relaxed max-w-3xl">
            {COMPANY_PHILOSOPHY_DATA.evolutionNarrative}
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Authentic Photography & Biome Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#8CA477]/30 bg-[#16332A] p-2.5 rounded-xl shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#11241E]">
                <Image
                  src="/images/bondinwater/ef9742_d41c5589ef3548f1890a925f493a7b35.jpg"
                  alt="BondInWater on-site living architecture"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#1F4338]/95 text-white p-3.5 rounded-md border border-[#8CA477]/30">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#8CA477] block font-semibold">
                    BIOLOGICAL CONSERVATION FOCUS
                  </span>
                  <p className="text-xs font-sans text-white/90 mt-1 leading-snug font-light">
                    Recreating natural micro-environments where living organisms flourish through scientific life support.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#16332A] border border-[#8CA477]/25 text-xs font-sans text-white/90 leading-relaxed border-l-2 border-l-[#B47750] rounded-r-md italic">
              &ldquo;{COMPANY_PHILOSOPHY_DATA.architecturalHeritage}&rdquo;
            </div>
          </div>

          {/* Right Column: 9 Documented Strengths Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#8CA477]/25 pb-3">
              <h3 className="text-2xl font-serif text-white font-normal">
                Documented Studio Strengths &amp; Scope
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#8CA477] mt-1">
                Verified against the 35-page company profile
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {documentedStrengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#16332A] border border-[#8CA477]/25 rounded-lg shadow-sm flex flex-col justify-between hover:border-[#8CA477] transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] font-semibold">
                      [{String(idx + 1).padStart(2, "0")}] STRENGTH
                    </div>
                    <h4 className="text-sm font-serif text-white font-normal">
                      {strength.title}
                    </h4>
                    <p className="text-xs text-white/80 font-sans font-light leading-relaxed">
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