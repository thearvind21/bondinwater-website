"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem, ProjectCategory } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { ArrowUpRight, X, Check, Droplets, Layers, ShieldCheck, Compass, Sliders } from "lucide-react";

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
    <section id="projects" className="py-24 lg:py-32 bg-[#F4F4EF] text-[#202723] border-b border-[#E2E4DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              PROJECT PORTFOLIO &bull; REAL WORKS
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#60775B]">
              OKEANOS-STRUCTURED FIELD INSTALLATIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.95]">
            Curated Living Habitats &amp; Structural Installations.
          </h2>

          <p className="text-base sm:text-lg text-[#202723]/80 font-sans font-normal leading-relaxed max-w-3xl">
            Explore authentic completed habitats, cantilevered acrylic swimming pools, zoo-grade enclosures, and Computational Fluid Dynamics plant rooms built by BondInWater across India and internationally.
          </p>
        </div>

        {/* Filter Tabs (8 Okeanos Categories + All) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2E4DA]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 border flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-[#1D382B] text-[#F4F4EF] border-[#1D382B] font-bold shadow-sm"
                  : "bg-white text-[#202723] hover:bg-[#E2E4DA] border-[#E2E4DA]"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.id ? "bg-[#304A38] text-white" : "bg-[#F4F4EF] text-[#60775B]"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Spotlight Featured Card (Okeanos Style Hero Plaque) */}
        {spotlightProject && (
          <div
            onClick={() => setActiveProject(spotlightProject)}
            className="group cursor-pointer mb-10 border border-[#E2E4DA] bg-white hover:border-[#1D382B] transition-all duration-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image (7 cols) */}
            <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] bg-[#E2E4DA] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E2E4DA]">
              <Image
                src={spotlightProject.image}
                alt={spotlightProject.title}
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-[#1D382B] text-[#F4F4EF] font-bold border border-[#1D382B]">
                  FEATURED WORK
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-white/95 text-[#202723] font-semibold border border-[#E2E4DA]">
                  {spotlightProject.classification}
                </span>
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A87952] font-bold">
                    {spotlightProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-[#60775B]">
                    01 // SPOTLIGHT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#1D382B] group-hover:text-[#304A38] transition-colors font-bold leading-tight">
                  {spotlightProject.title}
                </h3>

                <p className="text-sm text-[#202723]/80 font-sans leading-relaxed">
                  {spotlightProject.description}
                </p>

                <div className="pt-4 border-t border-[#E2E4DA] space-y-2 text-xs font-mono">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#60775B] uppercase text-[11px] shrink-0">LOCATION:</span>
                    <span className="text-[#202723] font-medium text-right">{spotlightProject.location}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#60775B] uppercase text-[11px] shrink-0">MATERIALS:</span>
                    <span className="text-[#202723] font-medium text-right line-clamp-1">{spotlightProject.materials}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#60775B] uppercase text-[11px] shrink-0">LSS SYSTEM:</span>
                    <span className="text-[#202723] font-medium text-right line-clamp-1">{spotlightProject.filtrationType}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E4DA] mt-6 flex items-center justify-between text-xs font-mono text-[#1D382B] font-bold group-hover:text-[#304A38]">
                <span>VIEW FULL ARCHITECTURAL SPECIFICATIONS</span>
                <ArrowUpRight className="w-4 h-4 text-[#A87952] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Varied Asymmetrical Editorial Grid for Remaining Projects */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {gridProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer border border-[#E2E4DA] bg-white hover:border-[#1D382B] transition-all duration-200 flex flex-col shadow-sm"
              >
                {/* Photo Frame (Natural Colors, True Fidelity) */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#E2E4DA] border-b border-[#E2E4DA]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border shadow-sm font-semibold ${
                      project.conceptOnly
                        ? "bg-[#F4F4EF] text-[#A87952] border-[#A87952]"
                        : "bg-[#1D382B] text-[#F4F4EF] border-[#1D382B]"
                    }`}>
                      {project.classification}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 bg-white/95 text-[#1D382B] text-[10px] font-mono font-bold px-2 py-0.5 border border-[#E2E4DA]">
                    0{idx + 2}
                  </div>
                </div>

                {/* Plaque Metadata Content */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#A87952] font-bold">
                      {project.categoryLabel}
                    </div>

                    <h3 className="text-xl font-display uppercase tracking-tight text-[#1D382B] group-hover:text-[#304A38] transition-colors font-bold line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#202723]/75 font-sans font-normal leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E4DA] space-y-1.5 text-[11px] font-mono text-[#60775B]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#60775B]">LOCATION:</span>
                      <span className="text-[#202723] font-medium truncate max-w-[180px]">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#60775B]">LSS DESIGN:</span>
                      <span className="text-[#202723] font-medium truncate max-w-[180px]">{project.filtrationType}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E2E4DA] flex items-center justify-between text-xs font-mono text-[#1D382B] font-bold group-hover:text-[#304A38] transition-colors">
                    <span>INSPECT SPECIFICATIONS</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A87952] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#F4F4EF] border border-[#1D382B] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#202723] shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-[#E2E4DA] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A87952] font-bold">
                  {activeProject.badge} &bull; {activeProject.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#1D382B] mt-1 font-bold">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-[#60775B] hover:text-[#1D382B] border border-[#E2E4DA] bg-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E2E4DA] bg-[#E2E4DA]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <p className="text-sm font-sans text-[#202723]/80 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-white p-4 border border-[#E2E4DA]">
              <div>
                <span className="text-[#60775B] block text-[10px] uppercase font-bold">PROVENANCE / LOCATION</span>
                <span className="text-[#202723] font-medium">{activeProject.location}</span>
              </div>
              <div>
                <span className="text-[#60775B] block text-[10px] uppercase font-bold">CLASSIFICATION</span>
                <span className="text-[#202723] font-medium">{activeProject.classification}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#60775B] block text-[10px] uppercase font-bold">MATERIALS &amp; SUBSTRATES</span>
                <span className="text-[#202723] font-medium">{activeProject.materials}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#60775B] block text-[10px] uppercase font-bold">LIFE SUPPORT SYSTEM (LSS)</span>
                <span className="text-[#202723] font-medium">{activeProject.filtrationType}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#1D382B] font-bold">
                Documented Engineering Benchmarks
              </h4>
              <div className="space-y-2">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#202723] bg-white p-2.5 border border-[#E2E4DA]">
                    <Check className="w-4 h-4 text-[#304A38] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E4DA] flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1D382B] hover:text-[#304A38] font-bold"
              >
                <span>Enquire About Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A87952]" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 bg-[#1D382B] text-white text-xs font-mono uppercase font-bold tracking-wider hover:bg-[#304A38] transition-colors"
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