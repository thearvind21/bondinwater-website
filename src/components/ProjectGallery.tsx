"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { ArrowUpRight, X, MapPin, Layers, ShieldCheck, Check } from "lucide-react";

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
    <section id="projects" className="py-24 lg:py-32 bg-[#0D0E11] text-neutral-100 border-b border-neutral-800 relative bg-museum-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="moss">
              CURATED WORKS // FIELD INSTALLATIONS
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              AUTHENTIC VERIFIED ARCHIVES
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.95]">
            Curated Field Installations & Living Environments.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
            Explore authentic completed habitats, custom structural acrylic barriers, and engineering plant installations designed and built by BondInWater. Click any specimen to inspect technical specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 border ${
                activeCategory === cat.id
                  ? "bg-white text-neutral-950 border-white font-bold"
                  : "bg-[#141518] text-neutral-400 hover:text-white hover:bg-neutral-800 border-neutral-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer border border-neutral-800 bg-[#141518] hover:border-neutral-500 transition-all duration-200 flex flex-col shadow-lg"
            >
              {/* Photo Frame */}
              <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border ${
                    project.conceptOnly
                      ? "bg-amber-950/90 text-amber-300 border-amber-700"
                      : "bg-[#0D0E11]/90 text-neutral-200 border-neutral-700"
                  }`}>
                    {project.classification}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 bg-neutral-950/80 text-neutral-400 text-[10px] font-mono px-2 py-0.5 border border-neutral-800">
                  FIG. {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Plaque Metadata Content */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    {project.categoryLabel}
                  </div>

                  <h3 className="text-xl font-display uppercase tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-sans font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 space-y-1.5 text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">CONTEXT:</span>
                    <span className="text-neutral-300 truncate max-w-[180px]">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">LSS / FILTER:</span>
                    <span className="text-neutral-300 truncate max-w-[180px]">{project.filtrationType}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>INSPECT SPECIFICATION</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#141518] border border-neutral-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-neutral-100">
            
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  {activeProject.badge} &bull; {activeProject.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-neutral-400 hover:text-white border border-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-800 bg-neutral-950">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <p className="text-sm font-sans text-neutral-300 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-neutral-900 p-4 border border-neutral-800">
              <div>
                <span className="text-neutral-500 block">PROVENANCE / LOCATION</span>
                <span className="text-neutral-200">{activeProject.location}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">CLASSIFICATION</span>
                <span className="text-neutral-200">{activeProject.classification}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-neutral-500 block">MATERIALS & SUBSTRATES</span>
                <span className="text-neutral-200">{activeProject.materials}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-neutral-500 block">LIFE SUPPORT SYSTEM (LSS)</span>
                <span className="text-neutral-200">{activeProject.filtrationType}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Documented Engineering Highlights
              </h4>
              <div className="space-y-2">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 bg-neutral-900/60 p-2.5 border border-neutral-800">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 hover:text-white"
              >
                <span>Enquire about similar execution</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 bg-white text-neutral-950 text-xs font-mono uppercase font-bold tracking-wider"
              >
                Close Specimen
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
