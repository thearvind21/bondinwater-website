import React from "react";
import Image from "next/image";
import { MuseumBadge, HairlineDivider } from "./MuseumComponents";
import { Compass, Eye, ShieldCheck, Activity, Cpu, Trees } from "lucide-react";
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
    <section className="py-24 lg:py-32 bg-[#F3F4F6] text-neutral-900 border-b border-neutral-300 relative bg-museum-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="light">
              STUDIO PHILOSOPHY // ETHOS
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              DOCUMENTED PROFILE STANDARDS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-neutral-950 leading-[0.95]">
            Precision Engineering Rooted in Biome Science.
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 font-sans font-light leading-relaxed max-w-3xl pt-2">
            “{COMPANY_PHILOSOPHY_DATA.coreCreed}” — BondInWater
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Photography Exhibition (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-neutral-300 bg-white p-3 shadow-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/images/pdf_images/p10_img1.png"
                  alt="Understanding the biome and architectural integration from BondInWater profile"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-neutral-950/85 text-white p-3 border border-neutral-700">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                    BIOME STUDY // PROFILE PAGE 10
                  </span>
                  <p className="text-xs font-sans text-neutral-200 mt-1 leading-snug">
                    Studying microclimate, water currents, and ethological behavior before spatial fabrication.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-neutral-300 bg-white p-3 flex items-center justify-between text-xs font-mono text-neutral-600">
              <span>MULTIDISCIPLINARY COHESION</span>
              <span className="uppercase text-neutral-500">Biologists &bull; Architects &bull; Engineers</span>
            </div>
          </div>

          {/* Right Column: 4 Museum Pillar Blocks (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.code}
                  className="border border-neutral-300 bg-white p-6 flex flex-col justify-between hover:border-neutral-900 transition-colors shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                      <span className="text-xs font-mono font-bold text-neutral-950">
                        [{pillar.code}]
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-display uppercase tracking-tight text-neutral-950 font-bold">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                    <Icon className="w-3.5 h-3.5 text-neutral-700" />
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
