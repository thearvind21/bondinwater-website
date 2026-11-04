import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
import { Trees, Compass, Cpu, Check, ArrowUpRight } from "lucide-react";

export function ThreeBrandPillars() {
  const pillars = [
    {
      id: "nature",
      number: "01",
      name: "Nature",
      tagline: "Animal Wellbeing & Biome Conservation",
      description:
        "Recreating authentic micro-environments where living organisms flourish through scientific life support. From natural aquatic biotopes and epiphyte-laden paludariums to ethological animal enclosures, nature provides our inspiration and benchmark.",
      image: "/images/bondinwater/ef9742_c52f71c90fbc49869aef43dc677de953.jpg",
      imageCaption: "Living Marine Coral Biotope & Species Habitat",
      capabilities: [
        "Ethological animal welfare & behavioral enrichment",
        "Bioactive vivariums, paludariums & mist walls",
        "Natural self-filtering koi ponds & wetlands",
        "Captive breeding biotope conditions & water chemistry",
      ],
      icon: Trees,
    },
    {
      id: "design",
      number: "02",
      name: "Design",
      tagline: "Architectural Planning & Zoo Masterplanning",
      description:
        "Backed by an architectural team with over three decades of experience across luxury interiors and public attractions. We elevate conceptual design from initial sketches to photorealistic renderings, 3D walkthrough videos, and comprehensive MEP blueprints.",
      image: "/images/pdf_images/p7_img1.png",
      imageCaption: "Architectural 3D Walkthrough & Masterplanning (Profile Page 7)",
      capabilities: [
        "Zoo, safari & tourism masterplanning",
        "Tailored animal enclosure architectural design",
        "Think . Sketch . Repeat iterative concept development",
        "Integrated MEP engineering & climate HVAC conduits",
      ],
      icon: Compass,
    },
    {
      id: "engineering",
      number: "03",
      name: "Engineering",
      tagline: "Precision Acrylic & Advanced Life Support",
      description:
        "Uncompromising craftsmanship utilizing certified cast PMMA acrylic sheets from 20mm to 300mm thick with molecular chemical bonding. Complete turnkey delivery, specialized filtration engineering, and official Neptune Systems Apex automation.",
      image: "/images/pdf_images/p17_img1.png",
      imageCaption: "PMMA Acrylic Engineering & Installation (Profile Page 17)",
      capabilities: [
        "Custom optical PMMA acrylic walls & pool barriers",
        "Computational Fluid Dynamics (CFD) filtration sumps",
        "Neptune Systems Apex programming & telemetry",
        "Turnkey execution across all 8 verified lifecycle stages",
      ],
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#1D382B] text-[#F4F4EF] relative border-b border-[#2D4C3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="sage">
              NATURE ENGINEERED &bull; CORE PILLARS
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#AEBBA4]">
              THE THREE CONNECTING DIMENSIONS OF OUR PRACTICE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#F4F4EF] leading-[0.95]">
            Nature. Design. Engineering.
          </h2>

          <p className="text-base sm:text-lg text-[#E2E4DA] font-sans font-light leading-relaxed max-w-3xl">
            A unified multidisciplinary practice where zoological empathy drives the design, architectural expertise shapes the space, and precision engineering guarantees lifelong biological stability.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-[#304A38] border border-[#43644E] flex flex-col justify-between shadow-xl hover:border-[#AEBBA4] transition-all duration-300"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D382B] border-b border-[#43644E]">
                    <Image
                      src={pillar.image}
                      alt={pillar.name}
                      fill
                      className="object-cover reveal-zoom"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#1D382B]/90 backdrop-blur-sm text-[#F4F4EF] px-2.5 py-1 text-[10px] font-mono border border-[#43644E]">
                      PILLAR {pillar.number}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-[#1D382B]/85 text-[#AEBBA4] px-2.5 py-1 text-[10px] font-mono truncate">
                      {pillar.imageCaption}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#AEBBA4] font-bold">
                          DIMENSION {pillar.number}
                        </span>
                        <Icon className="w-5 h-5 text-[#AEBBA4]" />
                      </div>
                      <h3 className="text-2xl font-display uppercase tracking-tight text-[#F4F4EF] font-bold">
                        {pillar.name}
                      </h3>
                      <p className="text-xs font-mono text-[#E2E4DA] font-medium">
                        {pillar.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#E2E4DA] font-sans font-light leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#43644E]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#AEBBA4] block font-bold">
                        VERIFIED CAPABILITIES
                      </span>
                      <ul className="space-y-2">
                        {pillar.capabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#F4F4EF]">
                            <Check className="w-3.5 h-3.5 text-[#AEBBA4] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer link to section */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href="#expertise"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1D382B] hover:bg-[#43644E] text-[#F4F4EF] text-xs font-mono uppercase tracking-wider py-3 border border-[#43644E] transition-colors font-bold"
                  >
                    <span>Inspect {pillar.name} Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
