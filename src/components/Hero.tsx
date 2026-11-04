"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, ShieldCheck, Activity, Layers, ArrowDown } from "lucide-react";
import { MuseumBadge } from "./MuseumComponents";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#0D0E11] text-neutral-100 overflow-hidden bg-museum-grid"
    >
      {/* Top Hairline Indicator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-neutral-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Museum Exhibition Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800/80 mb-10">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="moss">
              STUDIO ARCHIVE // 2026
            </MuseumBadge>
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-neutral-400">
              AQUATIC DESIGN &bull; HABITAT ENGINEERING &bull; ZOO MASTERPLANNING
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
            <span>LOCATION: MUMBAI, INDIA</span>
            <span className="hidden md:inline text-neutral-600">|</span>
            <span className="hidden md:inline">LIFECYCLE: DESIGN &bull; BUILD &bull; OPERATE</span>
          </div>
        </div>

        {/* Asymmetrical Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Condensed Headline & Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 block font-semibold">
                [ STUDIO IDENTITY & CAPABILITIES ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tight text-white leading-[0.92]">
                Natural History & Living Ecosystem Architecture.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed max-w-2xl">
              BondInWater is an end-to-end design, engineering, and turnkey execution studio. We engineer large-scale aquatic architectures, ethological wildlife habitats, public oceanariums, and custom structural acrylic installations grounded in biological integrity and precision construction.
            </p>

            {/* Architectural Discipline Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono uppercase tracking-wider text-neutral-400 border-t border-neutral-800/80 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400" />
                <span>Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400" />
                <span>20–300mm PMMA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400" />
                <span>Life Support MEP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400" />
                <span>Bioactive Vivariums</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400" />
                <span>Natural Koi Ponds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400" />
                <span>SOP Stewardship</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#expertise"
                className="group inline-flex items-center gap-3 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-white"
              >
                <span>Inspect 9 Divisions</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-transparent text-neutral-200 hover:text-white hover:border-neutral-500 text-xs font-mono uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-neutral-700"
              >
                <span>Curated Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Asymmetric Museum Photographic Composition (5 cols) */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Primary Exhibition Plaque */}
            <div className="relative border border-neutral-800 bg-[#141518] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src="/images/pdf_images/p7_img1.png"
                  alt="Architectural conceptualisation and zoo masterplanning drawing from BondInWater company profile"
                  fill
                  className="object-cover reveal-zoom"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3 bg-[#0D0E11]/90 border border-neutral-700 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                  FIG. 01 // ARCHITECTURAL SCHEMATIC
                </div>
              </div>

              {/* Plaque Metadata Caption */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>PROFILE PP. 5–10</span>
                <span className="uppercase text-neutral-500">Conceptualisation & Zoo Masterplanning</span>
              </div>
            </div>

            {/* Secondary Asymmetric Split Preview */}
            <div className="grid grid-cols-2 gap-4">
              {/* Secondary 1: Living Paludarium */}
              <div className="border border-neutral-800 bg-[#141518] p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="/images/bondinwater/ef9742_2d866d794aa640bbbf9e0705cabfc77c.jpg"
                    alt="Living bioactive paludarium installation by BondInWater"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="20vw"
                  />
                </div>
                <div className="pt-2 text-[10px] font-mono text-neutral-400 truncate">
                  BIOACTIVE PALUDARIUM
                </div>
              </div>

              {/* Secondary 2: Structural Acrylic Pool */}
              <div className="border border-neutral-800 bg-[#141518] p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="/images/bondinwater/ef9742_0c82a93844c64e2fa7a9568ba75ebab2.jpg"
                    alt="Structural acrylic infinity pool wall by BondInWater"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="20vw"
                  />
                </div>
                <div className="pt-2 text-[10px] font-mono text-neutral-400 truncate">
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
