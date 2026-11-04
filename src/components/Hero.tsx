"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Waves, Trees, Droplets } from "lucide-react";
import { EditorialBadge } from "./EditorialComponents";

export function Hero() {
  const heroWorks = [
    {
      id: "aquarium",
      title: "Bespoke Marine Reef Architecture",
      type: "Custom Acrylic Aquarium",
      image: "/images/bondinwater/ef9742_00d0a8d52ba24f73a1cc51b4e2821b92.jpg",
      caption: "Precision PMMA optical clarity with automated Life Support Systems",
      icon: Waves,
    },
    {
      id: "pond",
      title: "Natural Koi Pond & Waterfalls",
      type: "Outdoor Living Biotope",
      image: "/images/bondinwater/22553ed11ea647cdaa83b3af08f66f04.jpg",
      caption: "Self-sustaining biological filtration, natural rockwork & aquatic plants",
      icon: Droplets,
    },
    {
      id: "paludarium",
      title: "Rainforest Mist Paludarium",
      type: "Bioactive Terrestrial Ecosystem",
      image: "/images/bondinwater/ef9742_24a9faa7a4974bbb808192e4c1258982.jpg",
      caption: "Automated ultrasonic humidity, living epiphyte bio-wall & cascades",
      icon: Trees,
    },
  ];

  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const activeWork = heroWorks[activeWorkIndex];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#F3F3EC] text-[#202820] overflow-hidden border-b border-[#DADDD3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Identification Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DADDD3] mb-10">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="sage">
              BONDINWATER &bull; NATURE ENGINEERED
            </EditorialBadge>
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#667367]">
              AQUATIC DESIGN &bull; HABITAT ENGINEERING &bull; ARCHITECTURAL PLANNING
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-[#667367]">
            <span>MUMBAI &bull; NATIONWIDE</span>
            <span className="hidden md:inline text-[#DADDD3]">|</span>
            <span className="hidden md:inline">DESIGN &bull; BUILD &bull; OPERATE &bull; MAINTAIN</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Headline & Vision (6 cols) */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A87952] block font-bold">
                [ HABITAT ARCHITECTURE &amp; BIOME DESIGN ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-[#172D24] leading-[0.93]">
                Where Nature Meets Extraordinary Design.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#3E4A3F] font-sans font-normal leading-relaxed max-w-xl">
              From bespoke aquatic environments and natural habitats to architectural planning and precision engineering, BondInWater designs, builds and maintains extraordinary environments inspired by nature.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#expertise"
                className="group inline-flex items-center gap-3 bg-[#172D24] text-[#F3F3EC] hover:bg-[#294333] text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-[#172D24]"
              >
                <span>Explore Our Expertise</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-white text-[#172D24] hover:bg-[#EBEBE3] text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-[#DADDD3]"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#46634B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#DADDD3] text-xs font-mono text-[#46634B]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#46634B]" />
                <span className="text-[#202820] font-medium">Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#46634B]" />
                <span className="text-[#202820] font-medium">Custom Cast PMMA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#46634B]" />
                <span className="text-[#202820] font-medium">Life Support Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#46634B]" />
                <span className="text-[#202820] font-medium">Biologist-Led Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase — Real Completed Installations (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-[#DADDD3] bg-white p-3 sm:p-4 shadow-md">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#DADDD3]">
                <Image
                  src={activeWork.image}
                  alt={activeWork.title}
                  fill
                  priority
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Natural Image Tag Overlay */}
                <div className="absolute top-3 left-3 bg-[#172D24]/90 backdrop-blur-sm text-[#F3F3EC] px-3 py-1.5 text-[11px] font-mono border border-[#2E4739] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B4BEA5]" />
                  <span className="uppercase tracking-wider font-semibold">{activeWork.type}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#172D24]/90 backdrop-blur-sm text-[#F3F3EC] p-3.5 border border-[#2E4739]">
                  <h3 className="text-sm font-display uppercase tracking-tight text-[#F3F3EC] font-bold">
                    {activeWork.title}
                  </h3>
                  <p className="text-xs font-sans text-[#B4BEA5] mt-1 leading-snug">
                    {activeWork.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Typology Switcher Tabs */}
            <div className="grid grid-cols-3 gap-2.5">
              {heroWorks.map((work, idx) => {
                const isCurrent = idx === activeWorkIndex;
                const Icon = work.icon;
                return (
                  <button
                    key={work.id}
                    onClick={() => setActiveWorkIndex(idx)}
                    className={`p-3 text-left border transition-all duration-150 ${
                      isCurrent
                        ? "bg-[#172D24] text-[#F3F3EC] border-[#172D24] shadow-sm"
                        : "bg-white text-[#202820] hover:bg-[#EBEBE3] border-[#DADDD3]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={`text-[10px] uppercase tracking-wider ${isCurrent ? "text-[#B4BEA5]" : "text-[#667367]"}`}>
                        0{idx + 1}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-[#B4BEA5]" : "text-[#46634B]"}`} />
                    </div>
                    <div className="text-xs font-display uppercase tracking-tight font-bold truncate">
                      {work.type.split(" ")[0]} {work.type.split(" ")[1]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
