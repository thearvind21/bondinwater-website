"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { COMPANY_DIVISIONS, CompanyDivision } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { ArrowUpRight, X, Check, ShieldCheck, FileText, ChevronRight } from "lucide-react";

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
    <section id="expertise" className="py-24 lg:py-32 bg-[#121316] text-neutral-100 relative bg-museum-grid border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="moss">
              MASTER CAPABILITIES // 09 DIVISIONS
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              DOCUMENTED IN 35-PAGE COMPANY PROFILE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.95]">
            Nine Multidisciplinary Capability Divisions.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
            BondInWater provides comprehensive architectural masterplanning, turnkey general contracting, custom thermoformed acrylic fabrication, ethological vivariums, and lifelong biologist-led stewardship.
          </p>
        </div>

        {/* Division Tab Selector (A through I) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-800">
          <div className="flex items-center gap-2 min-w-max pb-3">
            {COMPANY_DIVISIONS.map((div) => {
              const isActive = div.id === activeDivisionId;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivisionId(div.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 flex items-center gap-2.5 whitespace-nowrap border ${
                    isActive
                      ? "bg-white text-neutral-950 border-white font-bold"
                      : "bg-[#181A1F] text-neutral-400 hover:text-white hover:bg-neutral-800 border-neutral-800"
                  }`}
                >
                  <span className={`w-4 h-4 flex items-center justify-center text-[10px] font-bold ${
                    isActive ? "bg-neutral-950 text-white" : "bg-neutral-800 text-neutral-300"
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
        <div className="border border-neutral-800 bg-[#16181C] shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            
            {/* Left Column: Visual Gallery (5 cols, stacks on mobile, top aligned) */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 bg-[#121316] border-b lg:border-b-0 lg:border-r border-neutral-800">
              
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-neutral-950 font-bold uppercase tracking-wider text-[10px]">
                  DIVISION {activeDivision.letter}
                </span>
                <span className="text-neutral-400 tracking-wider">
                  {activeDivision.profilePages}
                </span>
              </div>

              {/* Main Active Image Display */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-800 bg-neutral-950">
                <Image
                  src={currentMainImage}
                  alt={`${activeDivision.title} authentic documentation`}
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-neutral-950/85 text-neutral-300 px-3 py-1.5 text-[11px] font-mono border border-neutral-800 flex items-center justify-between">
                  <span>{activeDivision.museumCode}</span>
                  <span className="text-emerald-400 uppercase text-[10px]">VERIFIED ASSET</span>
                </div>
              </div>

              {/* 3 Authentic Gallery Thumbnails (Tight 16px gap, zero empty ivory panel) */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  ARCHIVE PHOTOGRAPHS & SCHEMATICS
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {activeDivision.galleryImages.slice(0, 3).map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                        currentMainImage === imgSrc
                          ? "border-emerald-400 ring-1 ring-emerald-400"
                          : "border-neutral-800 opacity-70 hover:opacity-100"
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
              <div className="p-3.5 bg-neutral-900 border-l-2 border-emerald-400 text-xs font-sans text-neutral-300 leading-relaxed italic">
                “{activeDivision.profileQuote}”
              </div>

              {/* Modal Trigger */}
              <button
                onClick={() => setModalDivision(activeDivision)}
                className="w-full inline-flex items-center justify-center gap-2 border border-neutral-700 hover:border-neutral-400 hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider py-3 text-neutral-200 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>Inspect Full Division Specifications</span>
              </button>
            </div>

            {/* Right Column: Technical & Descriptive Content (7 cols, starts at top) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-7">
              
              {/* Division Title & Subtitle */}
              <div className="space-y-2 border-b border-neutral-800 pb-5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                  {activeDivision.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white leading-tight">
                  {activeDivision.title}
                </h3>
                <p className="text-sm font-mono text-neutral-400">
                  {activeDivision.subtitle}
                </p>
              </div>

              {/* Scope Summary */}
              <p className="text-sm sm:text-base text-neutral-300 font-sans font-light leading-relaxed">
                {activeDivision.scopeSummary}
              </p>

              {/* What BondInWater Provides */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400" />
                  <span>Documented Deliverables & Scope</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeDivision.whatWeProvide.slice(0, 6).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans bg-neutral-900/50 p-2.5 border border-neutral-800"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Types & Key Benchmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-800">
                <div className="space-y-2">
                  <h5 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    Application Typologies
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                    {activeDivision.projectTypes.slice(0, 4).map((type, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-neutral-600" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    Technical Benchmarks
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                    {activeDivision.keySpecs.slice(0, 3).map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-emerald-400 shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
                <span className="text-xs font-mono text-neutral-400">
                  CONSULTATION &bull; FEASIBILITY &bull; EXECUTION
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors"
                >
                  <span>Enquire for Division {activeDivision.letter}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Division Specification Modal */}
      {modalDivision && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#141518] border border-neutral-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-neutral-100">
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  DIVISION {modalDivision.letter} SPECIFICATION &bull; {modalDivision.profilePages}
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-white mt-1">
                  {modalDivision.title}
                </h3>
              </div>
              <button
                onClick={() => setModalDivision(null)}
                className="p-1.5 text-neutral-400 hover:text-white border border-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm font-sans text-neutral-300 leading-relaxed">
              {modalDivision.scopeSummary}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Complete Scope of Deliverables
              </h4>
              <div className="space-y-2">
                {modalDivision.whatWeProvide.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 bg-neutral-900 p-2.5 border border-neutral-800">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setModalDivision(null)}
                className="px-6 py-2.5 bg-white text-neutral-950 text-xs font-mono uppercase font-bold tracking-wider"
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
