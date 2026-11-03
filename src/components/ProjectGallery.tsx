"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem } from "./BotanicalDecorators";
import { ArrowUpRight, X, MapPin, Sparkles, ShieldCheck, Ruler, Droplets } from "lucide-react";

type CategoryFilter = "all" | "aquariums" | "ponds" | "paludariums" | "habitats" | "acrylic";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "aquariums", label: "Luxury Aquariums" },
    { id: "ponds", label: "Natural Koi Ponds" },
    { id: "paludariums", label: "Waterfalls & Paludariums" },
    { id: "habitats", label: "Animal Habitats" },
    { id: "acrylic", label: "Acrylic Engineering" },
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#E8E2D5]/30 border-y border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Curated Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            Signature <span className="italic font-light text-[#344B38]">Installations.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Explore verified living habitats, custom acrylic pools, and aquatic architectures designed and built by BondInWater. Click any project to inspect complete architectural specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#344B38] text-[#F5F2E9] shadow-sm"
                  : "bg-white/70 text-[#292C25] hover:bg-white hover:text-[#344B38] border border-[#E8E2D5]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Consistent 3-Column Portfolio Grid (Zero empty blank space, natural height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Photo Frame with Consistent Aspect Ratio */}
              <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#E8E2D5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover reveal-zoom transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className="bg-[#F5F2E9]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-[#344B38] border border-[#E8E2D5] truncate">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="bg-[#344B38]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider font-medium text-[#F5F2E9] border border-[#B18A60]/40 shrink-0">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Bottom details on image */}
                <div className="absolute bottom-3.5 left-4 right-4 text-[#F5F2E9] space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-[#C9A781] font-medium">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{project.location}</span>
                    {project.waterCapacity && (
                      <>
                        <span className="text-[#A5AD92]">•</span>
                        <span className="shrink-0">{project.waterCapacity}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#F5F2E9] font-normal group-hover:text-[#C9A781] transition-colors leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#344B38]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-[#F5F2E9] text-[#344B38] text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full shadow-lg">
                    <span>Inspect Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B18A60]" />
                  </span>
                </div>
              </div>

              {/* Card description summary — Sits snug beneath photo */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-t border-[#E8E2D5]/70 bg-white">
                <p className="text-xs text-[#292C25]/80 font-sans line-clamp-2 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center shrink-0 text-[#344B38] group-hover:bg-[#344B38] group-hover:text-[#F5F2E9] transition-colors border border-[#E8E2D5]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Consistent Project Detail Modal (Natural Height, Zero Empty Space) */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#292C25]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveProject(null)}
          />

          {/* Modal Panel: Sits naturally without forced height */}
          <div className="relative max-w-4xl w-full max-h-[92vh] bg-[#F5F2E9] rounded-2xl shadow-2xl overflow-y-auto border border-[#E8E2D5] z-10 flex flex-col">
            
            {/* Header image with proportional height */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#292C25] shrink-0">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/90 via-[#292C25]/20 to-transparent" />
              
              {/* Close Button securely anchored inside top right */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-[#F5F2E9] hover:bg-black/80 transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-[#F5F2E9] space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-widest text-[#B18A60] font-semibold">
                    {activeProject.categoryLabel}
                  </span>
                  {activeProject.badge && (
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#344B38] text-[#F5F2E9] border border-[#B18A60]/30 font-medium">
                      {activeProject.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F5F2E9] font-normal leading-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body: Occupies its natural height */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Notice Banner if Concept Only */}
              {activeProject.conceptOnly && (
                <div className="p-4 rounded-xl bg-[#B18A60]/10 border border-[#B18A60]/30 flex items-start gap-3 text-xs text-[#292C25]">
                  <Sparkles className="w-4 h-4 text-[#B18A60] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#344B38]">Official CAD Model Notice: </span>
                    This graphic represents the 3D conceptual engineering model from BondInWater&apos;s acrylic engineering archives. Preserved and flagged for replacement with on-site completed installation photography upon client provision.
                  </div>
                </div>
              )}

              {/* Dynamic Technical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 rounded-xl bg-white border border-[#E8E2D5]">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#85866A]">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#292C25] mt-0.5">{activeProject.location}</p>
                </div>
                {activeProject.dimensions && (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#85866A]">Dimensions</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#292C25] mt-0.5">{activeProject.dimensions}</p>
                  </div>
                )}
                {activeProject.waterCapacity && (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#85866A]">Water Capacity</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#344B38] mt-0.5">{activeProject.waterCapacity}</p>
                  </div>
                )}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#85866A]">Life Support System</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#292C25] mt-0.5 truncate">{activeProject.filtrationType}</p>
                </div>
              </div>

              {/* Narrative Architectural Scope */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Project Architectural Scope</h4>
                <p className="text-sm sm:text-base text-[#292C25]/85 font-sans font-light leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Key Engineering & Biological Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8E2D5] text-xs text-[#292C25]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B18A60] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA & Close Actions */}
              <div className="pt-6 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-full border border-[#E8E2D5] text-xs font-semibold uppercase tracking-wider text-[#85866A] hover:text-[#292C25] transition-colors"
                >
                  Close Preview
                </button>
                
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex items-center gap-2 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B18A60]" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
