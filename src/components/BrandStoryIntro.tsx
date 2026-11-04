import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
import { Compass, ShieldCheck, Cpu, Trees } from "lucide-react";
import { COMPANY_PHILOSOPHY_DATA } from "@/data/bondinwater-data";

export function BrandStoryIntro() {
  const pillars = [
    {
      code: "01",
      title: "Biome Evaluation & Science",
      desc: "Understanding the biome—climate, geography, flora, and fauna—is foundational. Designers gain valuable insights into the dynamics of the ecosystem to create habitats that cater specifically to the needs of its inhabitants.",
      tag: "Ethological Science",
      icon: Trees,
    },
    {
      code: "02",
      title: "30+ Years Architectural Heritage",
      desc: "With over three decades of experience, our architectural team excels from luxury interior installations to large-scale tourism developments, balancing creative innovation with strict wildlife development guidelines.",
      tag: "Masterplanning",
      icon: Compass,
    },
    {
      code: "03",
      title: "Turnkey Engineering & MEP",
      desc: "Complete mechanical, electrical, plumbing, and HVAC calculations. Computational Fluid Dynamics (CFD) water modeling, bio-filtration arrays, and automation systems engineered for long-term structural integrity.",
      tag: "Life Support Systems",
      icon: Cpu,
    },
    {
      code: "04",
      title: "Multidisciplinary Collaboration",
      desc: "Biologists, animal experts, and skilled engineers collaborate at every stage. Biologists inform species selection, feeding protocols, and disease prevention, while engineers guarantee hydraulic reliability.",
      tag: "Biological Oversight",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F1F1ED] text-[#171A19] border-b border-[#B4B9B9] relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="light">
              COMPANY PHILOSOPHY &bull; ETHOS
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#565E5C]">
              DOCUMENTED PROFILE STANDARDS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#171A19] leading-[0.95]">
            Precision Engineering Rooted in Biome Science.
          </h2>

          <p className="text-base sm:text-lg text-[#323836] font-sans font-normal leading-relaxed max-w-3xl pt-2">
            “{COMPANY_PHILOSOPHY_DATA.coreCreed}” — BondInWater
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Photography Exhibition (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#B4B9B9] bg-white p-3 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#CED2D2] border border-[#D8DCDA]">
                <Image
                  src="/images/pdf_images/p10_img1.png"
                  alt="Understanding the biome and architectural integration from BondInWater profile"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#171A19]/90 text-white p-3 border border-[#171A19]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#949F86] block font-bold">
                    BIOME STUDY &bull; PROFILE PAGE 10
                  </span>
                  <p className="text-xs font-sans text-[#F1F1ED] mt-1 leading-snug">
                    Studying microclimate, water currents, and ethological behavior before spatial fabrication.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#B4B9B9] bg-white p-3 flex items-center justify-between text-xs font-mono text-[#565E5C]">
              <span className="text-[#171A19] font-medium">MULTIDISCIPLINARY COHESION</span>
              <span className="uppercase text-[#565E5C]">Biologists &bull; Architects &bull; Engineers</span>
            </div>
          </div>

          {/* Right Column: 4 Pillar Blocks (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.code}
                  className="border border-[#B4B9B9] bg-white p-6 flex flex-col justify-between hover:border-[#171A19] transition-colors shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#D8DCDA] pb-3">
                      <span className="text-xs font-mono font-bold text-[#A66547]">
                        [{pillar.code}]
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#565E5C]">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-display uppercase tracking-tight text-[#171A19] font-bold">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#323836] font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D8DCDA] flex items-center gap-2 text-[11px] font-mono text-[#565E5C]">
                    <Icon className="w-3.5 h-3.5 text-[#79836D]" />
                    <span>VERIFIED STANDARD</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
