import React from "react";
import Image from "next/image";
import { Compass, PenTool, Layers, Eye, Check } from "lucide-react";

export function HabitatArchitectureStory() {
  const designPhases = [
    {
      phase: "01",
      title: "Biome Evaluation & Microclimate Analysis",
      subtitle: "Profile Page 10 // Ecological Foundation",
      description:
        "Before drawing a single line, we evaluate the biome: geography, ambient temperature, humidity cycles, and flora. Biologists analyze animal behavior, natural light requirements, and acoustic sensitivity to create micro-environments where living organisms flourish naturally.",
      image: "/images/pdf_images/p10_img1.png",
      caption: "Site biome evaluation and ecological microclimate mapping (Page 10)",
      icon: Compass,
      highlights: [
        "Species ethological needs assessment",
        "Solar path & naturalistic photoperiod planning",
        "Hydro-geological foundation evaluation",
      ],
    },
    {
      phase: "02",
      title: "Think . Sketch . Repeat Concept Ideation",
      subtitle: "Profile Pages 5–6 // Iterative Hand Sketching",
      description:
        "Conceptualisation is the cornerstone of our process. Hand-drawn architectural sketches explore spatial massing, visitor perspectives, and concealed animal retreat corridors. Iterative refinement balances public engagement with low-stress habitats.",
      image: "/images/pdf_images/p5_img1.png",
      caption: "Original conceptual design sketch for living biotope (Page 5)",
      icon: PenTool,
      highlights: [
        "Iterative hand sketches & conceptual elevations",
        "Visitor line-of-sight & barrier invisibility studies",
        "Naturalistic grotto & bio-wall placement",
      ],
    },
    {
      phase: "03",
      title: "Zoo Masterplanning & 30-Year Architectural Heritage",
      subtitle: "Profile Pages 8–9 // Architectural Blueprinting",
      description:
        "Backed by an architectural team with over three decades of experience, we draft CAD construction blueprints for zoological parks, safari reserves, and luxury private estates. Designs adhere strictly to international wildlife development standards while optimizing visitor circulation.",
      image: "/images/pdf_images/p8_img2.png",
      caption: "Masterplan blueprints and animal enclosure elevations (Page 8)",
      icon: Layers,
      highlights: [
        "Over three decades of multidisciplinary architectural expertise",
        "Keeper safety corridors & animal transfer logistics",
        "Full compliance with international wildlife guidelines",
      ],
    },
    {
      phase: "04",
      title: "3D Cinematic Walkthroughs & MEP Engineering",
      subtitle: "Profile Page 7 // Virtual Reality & MEP Coordination",
      description:
        "We elevate designs from flat drawings into photorealistic 3D walkthrough videos. Concurrently, MEP engineers calculate hydraulic turnover, pipe friction losses, bio-filtration footprints, and climate-controlled HVAC ducting directly within structural models.",
      image: "/images/pdf_images/p7_img3.png",
      caption: "3D walkthrough simulation for public zoological attraction (Page 7)",
      icon: Eye,
      highlights: [
        "High-definition 3D video previews of spatial flow",
        "Concealed MEP plumbing & Life Support pump arrays",
        "CFD water velocity simulations eliminating dead zones",
      ],
    },
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#E9EFE7] text-[#27302B] border-b border-[#8CA477]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-3 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#B47750] font-semibold">
              ARCHITECTURE &bull; DESIGN METHODOLOGY
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#4F8278]">
              FROM INITIAL CONCEPT TO ENGINEERED SANCTUARY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12] tracking-[-0.01em]">
            How We Move From An Idea To An Engineered Environment.
          </h2>

          <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed max-w-3xl">
            Our architectural methodology unifies biological welfare, aesthetic elegance, and structural precision across every phase of design development.
          </p>
        </div>

        {/* 4 Phases Case-Study Breakdown */}
        <div className="space-y-12 lg:space-y-16">
          {designPhases.map((phase, idx) => {
            const Icon = phase.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={phase.phase}
                className="bg-white border border-[#8CA477]/30 p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Visual Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-3 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="border border-[#8CA477]/25 bg-[#E9EFE7] p-2 rounded-lg">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-white border border-[#8CA477]/25">
                        <Image
                          src={phase.image}
                          alt={phase.title}
                          fill
                          className="object-cover reveal-zoom"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-2 left-2 bg-[#1F4338]/90 text-white px-2.5 py-1 text-[10px] font-sans font-medium rounded-[3px] border border-white/10">
                          PHASE {phase.phase} &bull; PROFILE ARCHIVE
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] font-sans text-[#4F8278] italic px-1">
                      {phase.caption}
                    </div>
                  </div>

                  {/* Narrative Content Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="space-y-1.5 border-b border-[#8CA477]/25 pb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                          PHASE {phase.phase} ARCHITECTURAL STAGE
                        </span>
                        <Icon className="w-5 h-5 text-[#4F8278]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#1F4338] font-normal">
                        {phase.title}
                      </h3>
                      <p className="text-xs font-mono text-[#4F8278]">
                        {phase.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#1F4338] block font-semibold">
                        KEY ETHOLOGICAL &amp; TECHNICAL HIGHLIGHTS
                      </span>
                      <div className="space-y-2">
                        {phase.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#27302B] font-sans">
                            <Check className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}