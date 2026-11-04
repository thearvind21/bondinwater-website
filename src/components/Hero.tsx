"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { EditorialBadge } from "./EditorialComponents";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#CED2D2] text-[#171A19] overflow-hidden bg-editorial-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Studio Identification Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#B4B9B9] mb-10">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="moss">
              BONDINWATER &bull; INDIA
            </EditorialBadge>
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#565E5C]">
              AQUATIC DESIGN &bull; HABITAT ENGINEERING &bull; ARCHITECTURAL PLANNING
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-[#565E5C]">
            <span>LOCATION: MUMBAI</span>
            <span className="hidden md:inline text-[#B4B9B9]">|</span>
            <span className="hidden md:inline">LIFECYCLE: DESIGN &bull; BUILD &bull; OPERATE</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Condensed Headline & Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A66547] block font-bold">
                [ STUDIO PROFILE & CAPABILITIES ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tight text-[#171A19] leading-[0.92]">
                Natural History & Living Ecosystem Architecture.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#323836] font-sans font-normal leading-relaxed max-w-2xl">
              BondInWater is an end-to-end design, engineering, and turnkey execution studio. We engineer large-scale aquatic architectures, bio-authentic wildlife habitats, public oceanariums, and custom structural acrylic installations grounded in biological integrity and precision construction.
            </p>

            {/* Architectural Discipline Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono uppercase tracking-wider text-[#565E5C] border-t border-[#B4B9B9] pt-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#79836D]" />
                <span className="text-[#171A19] font-medium">Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#79836D]" />
                <span className="text-[#171A19] font-medium">20–300mm PMMA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#79836D]" />
                <span className="text-[#171A19] font-medium">Life Support MEP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#79836D]" />
                <span className="text-[#171A19] font-medium">Bioactive Vivariums</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#79836D]" />
                <span className="text-[#171A19] font-medium">Natural Koi Ponds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#79836D]" />
                <span className="text-[#171A19] font-medium">SOP Stewardship</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#expertise"
                className="group inline-flex items-center gap-3 bg-[#191C1B] text-[#F1F1ED] hover:bg-[#A66547] text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-[#191C1B]"
              >
                <span>Inspect 9 Divisions</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-[#F1F1ED] text-[#171A19] hover:bg-white text-xs font-mono uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-[#B4B9B9] shadow-sm"
              >
                <span>Curated Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-[#A66547]" />
              </a>
            </div>
          </div>

          {/* Right Column: Asymmetric Photographic Composition (5 cols, Light Frame, Natural Colors) */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Primary Drawing Plaque */}
            <div className="relative border border-[#B4B9B9] bg-[#F1F1ED] p-3 shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#D8DCDA]">
                <Image
                  src="/images/pdf_images/p7_img1.png"
                  alt="Architectural conceptualisation and zoo masterplanning drawing from BondInWater company profile"
                  fill
                  className="object-cover reveal-zoom"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3 bg-[#191C1B]/90 text-[#F1F1ED] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-[#191C1B]">
                  ARCHITECTURAL CONCEPTUALISATION
                </div>
              </div>

              {/* Caption */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-[#565E5C]">
                <span>PROFILE PP. 5–10</span>
                <span className="uppercase text-[#171A19] font-medium">Zoo Masterplanning & Design</span>
              </div>
            </div>

            {/* Secondary Split Preview */}
            <div className="grid grid-cols-2 gap-4">
              {/* Secondary 1: Living Paludarium */}
              <div className="border border-[#B4B9B9] bg-[#F1F1ED] p-2.5 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#D8DCDA]">
                  <Image
                    src="/images/bondinwater/ef9742_2d866d794aa640bbbf9e0705cabfc77c.jpg"
                    alt="Living bioactive paludarium installation by BondInWater"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="20vw"
                  />
                </div>
                <div className="pt-2 text-[10px] font-mono text-[#171A19] font-medium truncate">
                  BIOACTIVE PALUDARIUM
                </div>
              </div>

              {/* Secondary 2: Structural Acrylic Pool */}
              <div className="border border-[#B4B9B9] bg-[#F1F1ED] p-2.5 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#D8DCDA]">
                  <Image
                    src="/images/bondinwater/ef9742_0c82a93844c64e2fa7a9568ba75ebab2.jpg"
                    alt="Structural acrylic infinity pool wall by BondInWater"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="20vw"
                  />
                </div>
                <div className="pt-2 text-[10px] font-mono text-[#171A19] font-medium truncate">
                  STRUCTURAL ACRYLIC POOL
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
