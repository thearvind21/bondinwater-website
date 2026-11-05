"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { COMPANY_DIVISIONS, CompanyDivision } from "@/data/bondinwater-data";
import { Check, ChevronRight, FileText, X } from "lucide-react";

export function ExpertiseSection() {
  const [activeDivisionId, setActiveDivisionId] = useState<string>("01-conceptualisation");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalDivision, setModalDivision] = useState<CompanyDivision | null>(null);

  const activeDivision = COMPANY_DIVISIONS.find((d) => d.id === activeDivisionId) || COMPANY_DIVISIONS[0];

  // Reset selected thumbnail when active division changes
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
    <section id="expertise" className="py-20 lg:py-28 bg-[#E9EFE7] text-[#27302B] relative border-b border-[#8CA477]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-3 mb-12 lg:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-semibold">
              CAPABILITIES &bull; TWELVE ORIGINAL SERVICES
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              35-PAGE COMPANY PROFILE TABLE OF CONTENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12] tracking-[-0.01em]">
            Twelve Documented Capability Services
          </h2>

          <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed max-w-3xl">
            From initial conceptualisation, zoo masterplanning and 300mm cast acrylic craftsmanship to ethical captive breeding, aviary engineering, and lifelong biologist-led stewardship.
          </p>
        </div>

        {/* Division Tab Selector (01 through 12) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none border-b border-[#8CA477]/30">
          <div className="flex items-center gap-2 min-w-max pb-3">
            {COMPANY_DIVISIONS.map((div) => {
              const isActive = div.id === activeDivisionId;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivisionId(div.id)}
                  className={`px-4 py-2.5 text-xs font-sans tracking-wide uppercase transition-all duration-150 flex items-center gap-2.5 whitespace-nowrap rounded-[4px] border ${
                    isActive
                      ? "bg-[#1F4338] text-white border-[#1F4338] font-medium shadow-sm"
                      : "bg-white text-[#27302B] hover:bg-[#E9EFE7] hover:border-[#1F4338] border-[#8CA477]/30"
                  }`}
                >
                  <span className={`w-4 h-4 flex items-center justify-center text-[10px] font-bold rounded-[2px] ${
                    isActive ? "bg-[#B47750] text-white" : "bg-[#8CA477]/30 text-[#27302B]"
                  }`}>
                    {div.letter}
                  </span>
                  <span>{div.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Division Feature Spotlight: Preserving Strict 0px Top-Aligned Spacing */}
        <div className="border border-[#8CA477]/30 bg-white rounded-lg shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            
            {/* Left Column: Visual Gallery (5 cols, stacks on mobile, top aligned) */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 bg-[#F8FAF7] border-b lg:border-b-0 lg:border-r border-[#8CA477]/30">
              
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1F4338] text-white font-medium uppercase tracking-wider text-[10px] rounded-[3px]">
                  SERVICE {activeDivision.letter}
                </span>
                <span className="text-[#4F8278] tracking-wider font-semibold">
                  {activeDivision.profilePages}
                </span>
              </div>

              {/* Main Active Image Display */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-[#8CA477]/30 bg-[#E9EFE7]">
                <Image
                  src={currentMainImage}
                  alt={`${activeDivision.title} authentic documentation`}
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#1F4338]/90 text-white px-3 py-1.5 text-[11px] font-sans rounded-[3px] border border-white/10 flex items-center justify-between">
                  <span className="font-medium">{activeDivision.title}</span>
                  <span className="text-[#8CA477] uppercase text-[10px] font-bold">VERIFIED ASSET</span>
                </div>
              </div>

              {/* 3 Authentic Gallery Thumbnails (Tight 8px gap, zero empty panel) */}
              <div>
                <p className="text-[10px] font-sans uppercase tracking-widest text-[#4F8278] mb-2 font-semibold">
                  AUTHENTIC DRAWINGS &amp; PHOTOGRAPHS
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {activeDivision.galleryImages.slice(0, 3).map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-[3px] border transition-all ${
                        currentMainImage === imgSrc
                          ? "border-[#B47750] ring-2 ring-[#B47750]"
                          : "border-[#8CA477]/30 opacity-75 hover:opacity-100"
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
              <div className="p-3.5 bg-[#E9EFE7] border-l-2 border-[#B47750] text-xs font-sans text-[#27302B]/85 leading-relaxed italic rounded-r-[3px]">
                &ldquo;{activeDivision.profileQuote}&rdquo;
              </div>

              {/* Modal Trigger */}
              <button
                onClick={() => setModalDivision(activeDivision)}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#8CA477]/40 hover:border-[#1F4338] hover:bg-[#E9EFE7] text-xs font-sans uppercase tracking-wider py-3 text-[#27302B] rounded-[4px] transition-all font-medium"
              >
                <FileText className="w-3.5 h-3.5 text-[#B47750]" />
                <span>Inspect Full Division Specifications</span>
              </button>
            </div>

            {/* Right Column: Technical & Descriptive Content (7 cols, starts at top) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              {/* Division Title & Subtitle */}
              <div className="space-y-2 border-b border-[#8CA477]/25 pb-4">
                <div className="text-[11px] font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                  {activeDivision.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F4338] leading-tight font-normal">
                  {activeDivision.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#4F8278]">
                  {activeDivision.subtitle}
                </p>
              </div>

              {/* Scope Summary */}
              <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
                {activeDivision.scopeSummary}
              </p>

              {/* What BondInWater Provides */}
              <div className="space-y-3">
                <h4 className="text-xs font-sans uppercase tracking-widest text-[#1F4338] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#4F8278] rounded-full" />
                  <span>Documented Deliverables &amp; Scope</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeDivision.whatWeProvide.slice(0, 6).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#27302B] font-sans bg-[#F8FAF7] p-2.5 rounded-[4px] border border-[#8CA477]/25"
                    >
                      <Check className="w-3.5 h-3.5 text-[#4F8278] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Types & Key Benchmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#8CA477]/25">
                <div className="space-y-2">
                  <h5 className="text-[11px] font-sans uppercase tracking-widest text-[#4F8278] font-semibold">
                    Application Typologies
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#27302B]/80 font-sans">
                    {activeDivision.projectTypes.slice(0, 4).map((type, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#4F8278] rounded-full" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="text-[11px] font-sans uppercase tracking-widest text-[#4F8278] font-semibold">
                    Technical Benchmarks
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#27302B]/80 font-sans">
                    {activeDivision.keySpecs.slice(0, 3).map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#B47750] shrink-0 mt-1.5 rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-2 flex items-center justify-between border-t border-[#8CA477]/25">
                <span className="text-xs font-mono text-[#4F8278]">
                  FEASIBILITY &bull; DESIGN &bull; TURNKEY EXECUTION
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#1F4338] hover:text-[#4F8278] font-medium transition-colors"
                >
                  <span>Enquire for Division {activeDivision.letter}</span>
                  <ChevronRight className="w-4 h-4 text-[#B47750]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Division Specification Modal */}
      {modalDivision && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#E9EFE7] border border-[#1F4338] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#27302B] shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#8CA477]/30 pb-4">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#B47750] font-semibold">
                  DIVISION {modalDivision.letter} SPECIFICATION &bull; {modalDivision.profilePages}
                </span>
                <h3 className="text-2xl font-serif text-[#1F4338] mt-1 font-normal">
                  {modalDivision.title}
                </h3>
              </div>
              <button
                onClick={() => setModalDivision(null)}
                className="p-1.5 text-[#4F8278] hover:text-[#1F4338] border border-[#8CA477]/30 bg-white rounded-[3px] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm font-sans text-[#27302B]/85 leading-relaxed font-light">
              {modalDivision.scopeSummary}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-widest text-[#1F4338] font-semibold">
                Complete Scope of Deliverables
              </h4>
              <div className="space-y-2">
                {modalDivision.whatWeProvide.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#27302B] bg-white p-2.5 rounded-[3px] border border-[#8CA477]/30">
                    <Check className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#8CA477]/30 flex justify-end">
              <button
                onClick={() => setModalDivision(null)}
                className="px-6 py-2.5 bg-[#1F4338] text-white text-xs font-sans uppercase font-medium tracking-wider rounded-[4px] hover:bg-[#142C25] transition-colors"
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