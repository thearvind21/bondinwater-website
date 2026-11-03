"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { COMPANY_DIVISIONS, CompanyDivision } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem } from "./BotanicalDecorators";
import { ArrowUpRight, X, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

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
    <section id="expertise" className="py-20 lg:py-28 bg-[#F5F2E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Comprehensive Business Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            The Complete <span className="italic font-light text-[#344B38]">Architectural Ecosystem.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            BondInWater provides multidisciplinary capabilities spanning masterplanning, turnkey execution, acrylic craftsmanship, bioactive vivariums, ethical animal habitats, and lifelong maintenance.
          </p>
        </div>

        {/* Division Tab Selector (A through I) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max border-b border-[#E8E2D5] pb-3">
            {COMPANY_DIVISIONS.map((div) => {
              const isActive = div.id === activeDivisionId;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivisionId(div.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? "bg-[#344B38] text-[#F5F2E9] shadow-md"
                      : "bg-white/80 text-[#292C25] hover:bg-white hover:text-[#344B38] border border-[#E8E2D5]"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? "bg-[#B18A60] text-[#F5F2E9]" : "bg-[#E8E2D5] text-[#344B38]"
                  }`}>
                    {div.letter}
                  </span>
                  <span>{div.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Division Feature Spotlight (Unified, Cohesive Layout with Zero Empty Space) */}
        <div className="rounded-3xl bg-white border border-[#E8E2D5] shadow-lg overflow-hidden transition-all duration-300 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            
            {/* Left: Imagery Gallery (5 cols on desktop, stacks naturally on mobile/tablet) */}
            <div className="lg:col-span-5 p-6 sm:p-7 lg:p-8 space-y-4 bg-[#F5F2E9]/40 border-b lg:border-b-0 lg:border-r border-[#E8E2D5]">
              
              {/* Badge & Category Header */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#344B38] text-[#F5F2E9] text-[10px] uppercase tracking-widest font-semibold">
                  <span>Division {activeDivision.letter}</span>
                </span>
                <span className="text-xs font-serif italic text-[#85866A]">
                  {activeDivision.badge}
                </span>
              </div>

              {/* Main Feature Image */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-md bg-[#292C25]">
                <Image
                  src={currentMainImage}
                  alt={activeDivision.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-[#F5F2E9]">
                  <p className="text-xs font-serif italic line-clamp-1">{activeDivision.profileQuote}</p>
                </div>
              </div>

              {/* Gallery Thumbnails: Sits directly beneath the main image */}
              {activeDivision.galleryImages && activeDivision.galleryImages.length > 0 && (
                <div className="grid grid-cols-3 gap-2.5">
                  {activeDivision.galleryImages.map((thumb, idx) => {
                    const isSelected = currentMainImage === thumb;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(thumb)}
                        className={`relative aspect-[16/11] rounded-xl overflow-hidden border transition-all duration-200 bg-[#E8E2D5] group ${
                          isSelected
                            ? "ring-2 ring-[#344B38] border-transparent"
                            : "border-[#E8E2D5] hover:opacity-90"
                        }`}
                        title="Click to view in main frame"
                      >
                        <Image
                          src={thumb}
                          alt={`${activeDivision.title} documentation ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="150px"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Verified Quote Badge: Sits snugly directly beneath the gallery without blank gaps */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8E2D5] text-xs text-[#292C25]/85 font-sans leading-relaxed shadow-sm">
                <div className="flex items-center gap-1.5 text-[#344B38] font-semibold text-[11px] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B18A60] shrink-0" />
                  <span>Documented In Company Profile</span>
                </div>
                <p className="italic text-[#85866A]">“{activeDivision.profileQuote}”</p>
              </div>

            </div>

            {/* Right: Technical Breakdown & Capabilities (7 cols on desktop, follows smoothly on mobile/tablet) */}
            <div className="lg:col-span-7 p-6 sm:p-7 lg:p-8 space-y-6 bg-white">
              
              {/* Header Title */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B18A60] mb-1">
                  <span>Division {activeDivision.letter} Overview</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#292C25] font-normal leading-snug">
                  {activeDivision.title}
                </h3>
                <p className="text-sm font-sans text-[#85866A] mt-1">
                  {activeDivision.subtitle}
                </p>
              </div>

              {/* Scope & Capability */}
              <div className="space-y-1.5">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Scope & Capability</h4>
                <p className="text-sm sm:text-base text-[#292C25]/85 font-sans font-light leading-relaxed">
                  {activeDivision.scopeSummary}
                </p>
              </div>

              {/* What BondInWater Provides */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">What BondInWater Provides</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDivision.whatWeProvide.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#292C25]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#344B38] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Engineering & Material Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDivision.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#F5F2E9]/70 border border-[#E8E2D5] text-xs text-[#292C25] flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#B18A60] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Sectors */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold mb-2">Applicable Project Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  {activeDivision.projectTypes.map((type, idx) => (
                    <span key={idx} className="text-[11px] px-3 py-1 rounded-full bg-[#F5F2E9] border border-[#E8E2D5] text-[#292C25] font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setModalDivision(activeDivision)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#344B38] hover:text-[#B18A60] transition-colors py-2"
                >
                  <span>Inspect Complete Technical Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all shadow-sm hover:shadow"
                >
                  <span>Inquire For This Capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B18A60]" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Overview of All 9 Divisions (Compact Architectural Cards) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif text-[#292C25]">Explore All 9 Specialized Divisions</h3>
            <span className="text-xs text-[#85866A] uppercase tracking-wider font-medium">Direct Profile Architecture</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DIVISIONS.map((div) => {
              const isCurrent = div.id === activeDivisionId;
              return (
                <div
                  key={div.id}
                  onClick={() => {
                    setActiveDivisionId(div.id);
                    setModalDivision(div);
                  }}
                  className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-300 p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                    isCurrent ? "border-[#344B38] ring-1 ring-[#344B38]" : "border-[#E8E2D5]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#E8E2D5]">
                      <Image
                        src={div.image}
                        alt={div.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#F5F2E9]/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#344B38] border border-[#E8E2D5]">
                        Division {div.letter}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-base font-serif font-medium text-[#292C25] group-hover:text-[#344B38] transition-colors leading-snug">
                        {div.title}
                      </h4>
                      <p className="text-xs text-[#85866A] font-sans line-clamp-2">
                        {div.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E8E2D5]/60 flex items-center justify-between text-xs font-semibold text-[#344B38]">
                    <span className="text-[11px] uppercase tracking-wider text-[#85866A] group-hover:text-[#344B38] transition-colors">
                      View Full Scope
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#F5F2E9] group-hover:bg-[#344B38] group-hover:text-[#F5F2E9] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Division Detail Modal (Snug, Zero Blank Space, Fully Responsive) */}
      {modalDivision && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="fixed inset-0 bg-[#292C25]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setModalDivision(null)}
          />

          <div className="relative max-w-3xl w-full max-h-[92vh] bg-[#F5F2E9] rounded-2xl shadow-2xl overflow-y-auto border border-[#E8E2D5] z-10 flex flex-col">
            
            {/* Modal Image Header with proportional natural height */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#292C25] shrink-0">
              <Image
                src={modalDivision.image}
                alt={modalDivision.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/90 via-[#292C25]/30 to-transparent" />
              
              {/* Close Button securely inside header */}
              <button
                onClick={() => setModalDivision(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-[#F5F2E9] hover:bg-black/80 transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-[#F5F2E9] space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#B18A60] font-semibold">
                  Division {modalDivision.letter} • {modalDivision.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F2E9] font-normal leading-tight">
                  {modalDivision.title}
                </h3>
              </div>
            </div>

            {/* Modal Body: Sits naturally without forced height or empty space */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Documented Quote */}
              <div className="p-3.5 rounded-xl bg-[#344B38]/10 border border-[#344B38]/20 flex items-center gap-3 text-xs sm:text-sm text-[#344B38]">
                <Sparkles className="w-4 h-4 text-[#B18A60] shrink-0" />
                <span className="italic">“{modalDivision.profileQuote}”</span>
              </div>

              {/* Scope & Capability */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Division Scope & Capability</h4>
                <p className="text-sm sm:text-base text-[#292C25]/85 font-sans font-light leading-relaxed">
                  {modalDivision.scopeSummary}
                </p>
              </div>

              {/* What We Provide */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Complete Turnkey Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalDivision.whatWeProvide.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#292C25]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#344B38] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Specs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Engineering & Material Benchmarks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalDivision.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-[#E8E2D5] text-xs text-[#292C25] flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#B18A60] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Sectors */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#85866A] font-semibold mb-2">Target Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  {modalDivision.projectTypes.map((type, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white border border-[#E8E2D5] text-[#292C25]">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="pt-6 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setModalDivision(null)}
                  className="px-5 py-2.5 rounded-full border border-[#E8E2D5] text-xs font-semibold uppercase tracking-wider text-[#85866A] hover:text-[#292C25]"
                >
                  Close Scope
                </button>

                <a
                  href="#contact"
                  onClick={() => setModalDivision(null)}
                  className="inline-flex items-center gap-2 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all"
                >
                  <span>Discuss Division {modalDivision.letter} Project</span>
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
