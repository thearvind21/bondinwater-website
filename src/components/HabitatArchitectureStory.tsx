import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
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
    <section id="architecture" className="py-24 lg:py-32 bg-[#E2E4DA] text-[#202723] border-b border-[#CBD0C3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="earth">
              ARCHITECTURE &bull; DESIGN METHODOLOGY
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#647368]">
              FROM INITIAL CONCEPT TO ENGINEERED SANCTUARY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.95]">
            How We Move From An Idea To An Engineered Environment.
          </h2>

          <p className="text-base sm:text-lg text-[#3A473E] font-sans font-normal leading-relaxed max-w-3xl">
            Inspired by world-class habitat case studies, our architectural methodology unifies biological welfare, aesthetic elegance, and structural precision across every phase of design development.
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
                className="bg-white border border-[#CBD0C3] p-6 sm:p-8 lg:p-10 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Visual Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-3 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="border border-[#E2E4DA] bg-[#F4F4EF] p-2">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white border border-[#E2E4DA]">
                        <Image
                          src={phase.image}
                          alt={phase.title}
                          fill
                          className="object-cover reveal-zoom"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-2 left-2 bg-[#1D382B]/90 text-[#F4F4EF] px-2.5 py-1 text-[10px] font-mono border border-[#2D4C3C]">
                          PHASE {phase.phase} &bull; PROFILE ARCHIVE
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-[#647368] italic px-1">
                      {phase.caption}
                    </div>
                  </div>

                  {/* Narrative Content Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="space-y-1.5 border-b border-[#E2E4DA] pb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#A87952] font-bold">
                          PHASE {phase.phase} ARCHITECTURAL STAGE
                        </span>
                        <Icon className="w-5 h-5 text-[#60775B]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#1D382B] font-bold">
                        {phase.title}
                      </h3>
                      <p className="text-xs font-mono text-[#647368]">
                        {phase.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#3A473E] font-sans font-normal leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D382B] block font-bold">
                        Documented Design Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#202723] bg-[#F4F4EF] p-2.5 border border-[#E2E4DA]">
                            <Check className="w-3.5 h-3.5 text-[#60775B] shrink-0 mt-0.5" />
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
