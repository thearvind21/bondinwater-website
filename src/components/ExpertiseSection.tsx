"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { COMPANY_DIVISIONS, CompanyDivision } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { ArrowUpRight, X, Check, FileText, ChevronRight } from "lucide-react";

export function ExpertiseSection() {
  const [activeDivisionId, setActiveDivisionId] = useState<string>("conceptualisation-architectural-design");
  const [modalDivision, setModalDivision] = useState<CompanyDivision | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeDivision = COMPANY_DIVISIONS.find((d) => d.id === activeDivisionId) || COMPANY_DIVISIONS[0];

  // Reset selected image when changing tabs
  useEffect(() => {
    setSelectedImage(null);
  }, [activeDivisionId]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (modalDivision) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalDivision]);

  const currentMainImage = selectedImage || activeDivision.image;

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-[#CED2D2] text-[#171A19] relative bg-editorial-grid border-b border-[#B4B9B9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="moss">
              MASTER CAPABILITIES &bull; 09 DIVISIONS
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#565E5C]">
              DOCUMENTED IN 35-PAGE COMPANY PROFILE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#171A19] leading-[0.95]">
            Nine Multidisciplinary Capability Divisions.
          </h2>

          <p className="text-base sm:text-lg text-[#323836] font-sans font-normal leading-relaxed max-w-3xl">
            BondInWater provides comprehensive architectural masterplanning, turnkey general contracting, custom thermoformed acrylic fabrication, ethological vivariums, and lifelong biologist-led stewardship.
          </p>
        </div>

        {/* Division Tab Selector (A through I) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none border-b border-[#B4B9B9]">
          <div className="flex items-center gap-2 min-w-max pb-3">
            {COMPANY_DIVISIONS.map((div) => {
              const isActive = div.id === activeDivisionId;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivisionId(div.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 flex items-center gap-2.5 whitespace-nowrap border ${
                    isActive
                      ? "bg-[#191C1B] text-[#F1F1ED] border-[#191C1B] font-bold shadow-sm"
                      : "bg-[#F1F1ED] text-[#171A19] hover:bg-white hover:border-[#171A19] border-[#B4B9B9]"
                  }`}
                >
                  <span className={`w-4 h-4 flex items-center justify-center text-[10px] font-bold ${
                    isActive ? "bg-[#A66547] text-white" : "bg-[#CED2D2] text-[#171A19]"
                  }`}>
                    {div.letter}
                  </span>
                  <span>{div.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Division Feature Spotlight: Retaining Top-Aligned 0px Delta Spacing */}
        <div className="border border-[#B4B9B9] bg-[#F1F1ED] shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            
            {/* Left Column: Visual Gallery (5 cols, stacks on mobile, top aligned) */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 bg-white border-b lg:border-b-0 lg:border-r border-[#B4B9B9]">
              
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#191C1B] text-[#F1F1ED] font-bold uppercase tracking-wider text-[10px]">
                  DIVISION {activeDivision.letter}
                </span>
                <span className="text-[#565E5C] tracking-wider font-semibold">
                  {activeDivision.profilePages}
                </span>
              </div>

              {/* Main Active Image Display */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#D8DCDA] bg-[#CED2D2]">
                <Image
                  src={currentMainImage}
                  alt={`${activeDivision.title} authentic documentation`}
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#171A19]/90 text-[#F1F1ED] px-3 py-1.5 text-[11px] font-mono border border-[#171A19] flex items-center justify-between">
                  <span>{activeDivision.title}</span>
                  <span className="text-[#949F86] uppercase text-[10px] font-bold">VERIFIED ASSET</span>
                </div>
              </div>

              {/* 3 Authentic Gallery Thumbnails (Tight 16px gap, zero empty panel) */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#565E5C] mb-2 font-semibold">
                  AUTHENTIC DRAWINGS & PHOTOGRAPHS
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {activeDivision.galleryImages.slice(0, 3).map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                        currentMainImage === imgSrc
                          ? "border-[#A66547] ring-2 ring-[#A66547]"
                          : "border-[#D8DCDA] opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${activeDivision.title} documentation ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="15vw"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Profile Quote */}
              <div className="p-3.5 bg-[#F1F1ED] border-l-2 border-[#A66547] text-xs font-sans text-[#323836] leading-relaxed italic">
                “{activeDivision.profileQuote}”
              </div>

              {/* Modal Trigger */}
              <button
                onClick={() => setModalDivision(activeDivision)}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#B4B9B9] hover:border-[#171A19] hover:bg-neutral-100 text-xs font-mono uppercase tracking-wider py-3 text-[#171A19] transition-all font-semibold"
              >
                <FileText className="w-3.5 h-3.5 text-[#A66547]" />
                <span>Inspect Full Division Specifications</span>
              </button>
            </div>

            {/* Right Column: Technical & Descriptive Content (7 cols, starts at top) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-7">
              
              {/* Division Title & Subtitle */}
              <div className="space-y-2 border-b border-[#B4B9B9] pb-5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#A66547] font-bold">
                  {activeDivision.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-[#171A19] leading-tight">
                  {activeDivision.title}
                </h3>
                <p className="text-sm font-mono text-[#565E5C]">
                  {activeDivision.subtitle}
                </p>
              </div>

              {/* Scope Summary */}
              <p className="text-sm sm:text-base text-[#323836] font-sans font-normal leading-relaxed">
                {activeDivision.scopeSummary}
              </p>

              {/* What BondInWater Provides */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#171A19] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#79836D]" />
                  <span>Documented Deliverables & Scope</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeDivision.whatWeProvide.slice(0, 6).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#171A19] font-sans bg-white p-2.5 border border-[#D8DCDA]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#79836D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Types & Key Benchmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#B4B9B9]">
                <div className="space-y-2">
                  <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#565E5C] font-semibold">
                    Application Typologies
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#323836] font-sans">
                    {activeDivision.projectTypes.slice(0, 4).map((type, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#79836D]" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#565E5C] font-semibold">
                    Technical Benchmarks
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#323836] font-sans">
                    {activeDivision.keySpecs.slice(0, 3).map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#A66547] shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-2 flex items-center justify-between border-t border-[#B4B9B9]">
                <span className="text-xs font-mono text-[#565E5C]">
                  FEASIBILITY &bull; DESIGN &bull; TURNKEY EXECUTION
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#171A19] hover:text-[#A66547] font-semibold transition-colors"
                >
                  <span>Enquire for Division {activeDivision.letter}</span>
                  <ChevronRight className="w-4 h-4 text-[#A66547]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Division Specification Modal */}
      {modalDivision && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#F1F1ED] border border-[#171A19] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#171A19] shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#B4B9B9] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A66547] font-bold">
                  DIVISION {modalDivision.letter} SPECIFICATION &bull; {modalDivision.profilePages}
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-[#171A19] mt-1 font-bold">
                  {modalDivision.title}
                </h3>
              </div>
              <button
                onClick={() => setModalDivision(null)}
                className="p-1.5 text-[#565E5C] hover:text-[#171A19] border border-[#B4B9B9] bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm font-sans text-[#323836] leading-relaxed">
              {modalDivision.scopeSummary}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#171A19] font-bold">
                Complete Scope of Deliverables
              </h4>
              <div className="space-y-2">
                {modalDivision.whatWeProvide.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#171A19] bg-white p-2.5 border border-[#D8DCDA]">
                    <Check className="w-4 h-4 text-[#79836D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#B4B9B9] flex justify-end">
              <button
                onClick={() => setModalDivision(null)}
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
