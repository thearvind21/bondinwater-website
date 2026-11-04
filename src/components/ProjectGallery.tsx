"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { ArrowUpRight, X, Check } from "lucide-react";

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
    { id: "all", label: "All Works" },
    { id: "aquariums", label: "Aquariums & Oceanariums" },
    { id: "ponds", label: "Koi Ponds & Landscaping" },
    { id: "paludariums", label: "Paludariums & Cascades" },
    { id: "habitats", label: "Animal Enclosures" },
    { id: "acrylic", label: "Acrylic Engineering & Pools" },
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#CED2D2] text-[#171A19] border-b border-[#B4B9B9] relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="moss">
              PORTFOLIO &bull; FIELD INSTALLATIONS
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#565E5C]">
              AUTHENTIC VERIFIED ARCHIVES
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#171A19] leading-[0.95]">
            Curated Field Installations & Living Environments.
          </h2>

          <p className="text-base sm:text-lg text-[#323836] font-sans font-normal leading-relaxed max-w-3xl">
            Explore authentic completed habitats, custom structural acrylic barriers, and engineering plant installations designed and built by BondInWater. Click any work to inspect technical specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#B4B9B9]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 border ${
                activeCategory === cat.id
                  ? "bg-[#191C1B] text-[#F1F1ED] border-[#191C1B] font-bold shadow-sm"
                  : "bg-[#F1F1ED] text-[#171A19] hover:bg-white border-[#B4B9B9]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer border border-[#B4B9B9] bg-white hover:border-[#171A19] transition-all duration-200 flex flex-col shadow-sm"
            >
              {/* Photo Frame (Natural Colors, No Dark Overlays) */}
              <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#CED2D2] border-b border-[#D8DCDA]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border shadow-sm font-semibold ${
                    project.conceptOnly
                      ? "bg-[#F1F1ED] text-[#8A4F34] border-[#A66547]"
                      : "bg-[#191C1B] text-[#F1F1ED] border-[#191C1B]"
                  }`}>
                    {project.classification}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 bg-white/90 text-[#171A19] text-[10px] font-mono font-bold px-2 py-0.5 border border-[#B4B9B9]">
                  0{idx + 1}
                </div>
              </div>

              {/* Plaque Metadata Content */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A66547] font-bold">
                    {project.categoryLabel}
                  </div>

                  <h3 className="text-xl font-display uppercase tracking-tight text-[#171A19] group-hover:text-[#A66547] transition-colors font-bold">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#323836] font-sans font-normal leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8DCDA] space-y-1.5 text-[11px] font-mono text-[#565E5C]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#565E5C]">PROVENANCE:</span>
                    <span className="text-[#171A19] font-medium truncate max-w-[180px]">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#565E5C]">LSS DESIGN:</span>
                    <span className="text-[#171A19] font-medium truncate max-w-[180px]">{project.filtrationType}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8DCDA] flex items-center justify-between text-xs font-mono text-[#171A19] font-bold group-hover:text-[#A66547] transition-colors">
                  <span>INSPECT SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A66547] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#F1F1ED] border border-[#171A19] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#171A19] shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-[#B4B9B9] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A66547] font-bold">
                  {activeProject.badge} &bull; {activeProject.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#171A19] mt-1 font-bold">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-[#565E5C] hover:text-[#171A19] border border-[#B4B9B9] bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#B4B9B9] bg-[#CED2D2]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <p className="text-sm font-sans text-[#323836] leading-relaxed">
              {activeProject.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-white p-4 border border-[#D8DCDA]">
              <div>
                <span className="text-[#565E5C] block text-[10px] uppercase">PROVENANCE / LOCATION</span>
                <span className="text-[#171A19] font-medium">{activeProject.location}</span>
              </div>
              <div>
                <span className="text-[#565E5C] block text-[10px] uppercase">CLASSIFICATION</span>
                <span className="text-[#171A19] font-medium">{activeProject.classification}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#565E5C] block text-[10px] uppercase">MATERIALS & SUBSTRATES</span>
                <span className="text-[#171A19] font-medium">{activeProject.materials}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#565E5C] block text-[10px] uppercase">LIFE SUPPORT SYSTEM (LSS)</span>
                <span className="text-[#171A19] font-medium">{activeProject.filtrationType}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#171A19] font-bold">
                Documented Engineering Highlights
              </h4>
              <div className="space-y-2">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#171A19] bg-white p-2.5 border border-[#D8DCDA]">
                    <Check className="w-3.5 h-3.5 text-[#79836D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#B4B9B9] flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#A66547] hover:underline font-bold"
              >
                <span>Enquire about similar execution</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 bg-[#191C1B] text-white text-xs font-mono uppercase font-bold tracking-wider hover:bg-[#A66547] transition-colors"
              >
                Close Specification
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
