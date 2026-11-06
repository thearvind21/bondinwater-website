"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PROJECTS_DATA, ProjectItem, ProjectCategory } from "@/data/bondinwater-data";
import { ArrowUpRight, X, Check, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
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

  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Shared Approved Page Hero */}
      <PageHero
        eyebrow="BONDINWATER • PORTFOLIO ARCHIVE"
        title={
          <>
            Work Inspired by <span className="italic font-normal text-[#8CA477]">Nature.</span>
          </>
        }
        description="Explore BondInWater's documented aquatic environments, natural habitats, acrylic applications and specialist installations."
        imageSrc="/images/pdf_images/p17_img1.png"
        imageAlt="BondInWater authentic acrylic oceanarium installation and underwater viewing architecture from Company Profile"
        imagePosition="object-[75%_center] lg:object-[80%_center]"
        ctaText="Explore Projects"
        ctaHref="#portfolio-gallery"
        ctaIcon="arrow-down"
        heightClass="min-h-[410px] lg:min-h-[450px]"
      />

      {/* Category Filter Bar */}
      <section id="portfolio-gallery" className="py-8 bg-white border-b border-[#1F4338]/10 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-sans whitespace-nowrap rounded-[4px] border transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-[#1F4338] text-white border-[#1F4338] font-medium shadow-xs"
                    : "bg-[#E9EFE7] text-[#27302B] hover:bg-white border-[#1F4338]/10"
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="bg-white rounded-lg border border-[#1F4338]/10 overflow-hidden shadow-xs hover:border-[#4F8278] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#1F4338] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#1F4338]/90 text-white text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-xs">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono font-medium text-[#4F8278] uppercase block mb-1">
                    {project.classification}
                  </span>
                  <h3 className="text-xl font-serif text-[#1F4338] mb-3 leading-snug group-hover:text-[#4F8278] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#27302B]/75 font-sans font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#1F4338]/5 flex items-center justify-between text-xs font-sans">
                <span className="text-[#B47750] font-semibold inline-flex items-center gap-1 group-hover:text-[#1F4338]">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#27302B]/40 font-mono text-[11px]">
                  {project.location ? "Documented Site" : "Studio Render"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-[#1F4338]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8CA477] font-semibold block mb-1">
                  {activeProject.categoryLabel} &bull; {activeProject.classification}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white">
                  {activeProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Details Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold mb-2">
                  OVERVIEW
                </h4>
                <p className="text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Technical Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-lg bg-[#E9EFE7]/50 border border-[#1F4338]/10 text-xs sm:text-sm font-sans">
                {activeProject.location && (
                  <div>
                    <span className="text-[#27302B]/50 block uppercase text-[10px] font-bold">Deployment Setting</span>
                    <span className="font-medium text-[#1F4338]">{activeProject.location}</span>
                  </div>
                )}
                {activeProject.materials && (
                  <div>
                    <span className="text-[#27302B]/50 block uppercase text-[10px] font-bold">Materials & Substrates</span>
                    <span className="font-medium text-[#1F4338]">{activeProject.materials}</span>
                  </div>
                )}
                {activeProject.filtrationType && (
                  <div className="sm:col-span-2">
                    <span className="text-[#27302B]/50 block uppercase text-[10px] font-bold">Life Support System & Filtration</span>
                    <span className="font-medium text-[#1F4338]">{activeProject.filtrationType}</span>
                  </div>
                )}
              </div>

              {/* Key Features */}
              {activeProject.keyFeatures && (
                <div>
                  <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold mb-3">
                    DOCUMENTED SPECIFICATIONS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#27302B]/85">
                        <Check className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1F4338]/10 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href={`/contact?project=${encodeURIComponent(activeProject.title)}`}
                  className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-6 py-3 rounded-[4px] font-sans text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Enquire For Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-xs font-sans text-[#27302B]/60 hover:text-[#1F4338] font-medium"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#1F4338] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Have a Specific Habitat or Exhibition Concept?
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans font-light max-w-xl mx-auto mb-8">
            Our architectural team reviews structural parameters, plumbing routes, and species requirements to design a turn-key solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-7 py-3.5 rounded-[4px] font-sans text-sm font-medium transition-colors"
          >
            <span>Request Project Feasibility Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
