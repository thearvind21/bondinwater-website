"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem, ProjectCategory } from "@/data/bondinwater-data";
import { ArrowUpRight, X, Check } from "lucide-react";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
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

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: "all", label: "All Works", count: PROJECTS_DATA.length },
    { id: "aquariums", label: "Aquariums & Oceanariums", count: PROJECTS_DATA.filter((p) => p.category === "aquariums").length },
    { id: "ponds", label: "Natural Ponds & Waterfalls", count: PROJECTS_DATA.filter((p) => p.category === "ponds").length },
    { id: "paludariums", label: "Vivariums & Paludariums", count: PROJECTS_DATA.filter((p) => p.category === "paludariums").length },
    { id: "enclosures", label: "Animal Enclosures", count: PROJECTS_DATA.filter((p) => p.category === "enclosures").length },
    { id: "aviaries", label: "Aviaries & Flight Mesh", count: PROJECTS_DATA.filter((p) => p.category === "aviaries").length },
    { id: "acrylic", label: "Acrylic Engineering", count: PROJECTS_DATA.filter((p) => p.category === "acrylic").length },
    { id: "pools", label: "Acrylic Swimming Pools", count: PROJECTS_DATA.filter((p) => p.category === "pools").length },
    { id: "filtration", label: "Filtration & Technical Systems", count: PROJECTS_DATA.filter((p) => p.category === "filtration").length },
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const spotlightProject = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#27302B] border-b border-[#8CA477]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-3 mb-12 lg:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-semibold">
              PROJECT PORTFOLIO &bull; REAL WORKS
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              VERIFIED FIELD INSTALLATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12] tracking-[-0.01em]">
            Curated Living Habitats &amp; Structural Installations
          </h2>

          <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed max-w-3xl">
            Explore authentic documented habitats, transparent acrylic swimming pools, zoological enclosures, and specialised life support systems executed by BondInWater.
          </p>
        </div>

        {/* Filter Tabs (8 Okeanos Categories + All) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#8CA477]/30">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-sans tracking-wide uppercase transition-all duration-150 rounded-[4px] border flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-[#1F4338] text-white border-[#1F4338] font-medium shadow-sm"
                  : "bg-[#E9EFE7] text-[#27302B] hover:bg-[#FFFFFF] border-[#8CA477]/30"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.id ? "bg-[#B47750] text-white" : "bg-white text-[#4F8278]"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Spotlight Featured Card */}
        {spotlightProject && (
          <div
            onClick={() => setActiveProject(spotlightProject)}
            className="group cursor-pointer mb-10 rounded-xl border border-[#8CA477]/30 bg-[#E9EFE7] hover:border-[#1F4338] transition-all duration-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image (7 cols) */}
            <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] bg-[#E9EFE7] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#8CA477]/30">
              <Image
                src={spotlightProject.image}
                alt={spotlightProject.title}
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 bg-[#1F4338] text-white font-semibold rounded-[3px]">
                  FEATURED WORK
                </span>
                <span className="text-[10px] font-sans uppercase tracking-widest px-2 py-0.5 bg-white/95 text-[#27302B] font-medium rounded-[3px] border border-[#8CA477]/30">
                  {spotlightProject.classification}
                </span>
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#E9EFE7]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                    {spotlightProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-[#4F8278]">
                    01 // SPOTLIGHT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F4338] group-hover:text-[#4F8278] transition-colors font-normal leading-tight">
                  {spotlightProject.title}
                </h3>

                <p className="text-sm text-[#27302B]/80 font-sans font-light leading-relaxed">
                  {spotlightProject.description}
                </p>

                <div className="pt-4 border-t border-[#8CA477]/25 space-y-2 text-xs font-mono">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#4F8278] uppercase text-[11px] shrink-0">LOCATION:</span>
                    <span className="text-[#27302B] font-medium text-right">{spotlightProject.location}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#4F8278] uppercase text-[11px] shrink-0">MATERIALS:</span>
                    <span className="text-[#27302B] font-medium text-right line-clamp-1">{spotlightProject.materials}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#4F8278] uppercase text-[11px] shrink-0">LSS SYSTEM:</span>
                    <span className="text-[#27302B] font-medium text-right line-clamp-1">{spotlightProject.filtrationType}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#8CA477]/25 mt-6 flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#1F4338] font-semibold group-hover:text-[#4F8278]">
                <span>VIEW ARCHITECTURAL SPECIFICATIONS</span>
                <ArrowUpRight className="w-4 h-4 text-[#B47750] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Asymmetrical Editorial Grid for Remaining Projects */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {gridProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-xl border border-[#8CA477]/30 bg-[#E9EFE7] hover:border-[#1F4338] transition-all duration-200 flex flex-col shadow-sm overflow-hidden"
              >
                {/* Photo Frame */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#E9EFE7] border-b border-[#8CA477]/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-sans uppercase tracking-widest px-2 py-0.5 rounded-[3px] border shadow-sm font-medium ${
                      project.conceptOnly
                        ? "bg-[#E9EFE7] text-[#B47750] border-[#B47750]"
                        : "bg-[#1F4338] text-white border-[#1F4338]"
                    }`}>
                      {project.classification}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 bg-white/95 text-[#1F4338] text-[10px] font-mono font-bold px-2 py-0.5 rounded-[2px] border border-[#8CA477]/30">
                    0{idx + 2}
                  </div>
                </div>

                {/* Plaque Metadata Content */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between bg-[#E9EFE7]">
                  <div className="space-y-2">
                    <div className="text-[10px] font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                      {project.categoryLabel}
                    </div>

                    <h3 className="text-xl font-serif text-[#1F4338] group-hover:text-[#4F8278] transition-colors font-normal line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#27302B]/75 font-sans font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#8CA477]/25 space-y-1.5 text-[11px] font-mono text-[#4F8278]">
                    <div className="flex items-center justify-between">
                      <span>LOCATION:</span>
                      <span className="text-[#27302B] font-medium truncate max-w-[180px]">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>LSS DESIGN:</span>
                      <span className="text-[#27302B] font-medium truncate max-w-[180px]">{project.filtrationType}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#8CA477]/25 flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#1F4338] font-semibold group-hover:text-[#4F8278] transition-colors">
                    <span>INSPECT SPECIFICATIONS</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B47750] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#E9EFE7] border border-[#1F4338] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#27302B] shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-[#8CA477]/30 pb-4">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                  {activeProject.badge} &bull; {activeProject.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F4338] mt-1 font-normal">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-[#4F8278] hover:text-[#1F4338] border border-[#8CA477]/30 bg-white rounded-[3px] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-[#8CA477]/30 bg-[#E9EFE7]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <p className="text-sm font-sans text-[#27302B]/85 leading-relaxed font-light">
              {activeProject.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-white p-4 rounded-md border border-[#8CA477]/30">
              <div>
                <span className="text-[#4F8278] block text-[10px] uppercase font-bold">PROVENANCE / LOCATION</span>
                <span className="text-[#27302B] font-medium">{activeProject.location}</span>
              </div>
              <div>
                <span className="text-[#4F8278] block text-[10px] uppercase font-bold">CLASSIFICATION</span>
                <span className="text-[#27302B] font-medium">{activeProject.classification}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#4F8278] block text-[10px] uppercase font-bold">MATERIALS &amp; SUBSTRATES</span>
                <span className="text-[#27302B] font-medium">{activeProject.materials}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#4F8278] block text-[10px] uppercase font-bold">LIFE SUPPORT SYSTEM (LSS)</span>
                <span className="text-[#27302B] font-medium">{activeProject.filtrationType}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-sans uppercase tracking-widest text-[#1F4338] font-semibold">
                Documented Engineering Benchmarks
              </h4>
              <div className="space-y-2">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#27302B] bg-white p-2.5 rounded-[3px] border border-[#8CA477]/30">
                    <Check className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#8CA477]/30 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#1F4338] hover:text-[#4F8278] font-medium"
              >
                <span>Enquire About Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B47750]" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 bg-[#1F4338] text-white text-xs font-sans uppercase font-medium tracking-wider rounded-[4px] hover:bg-[#142C25] transition-colors"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}