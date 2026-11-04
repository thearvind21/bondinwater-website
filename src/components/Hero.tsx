"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Waves, Trees, Droplets } from "lucide-react";
import { EditorialBadge } from "./EditorialComponents";

export function Hero() {
  const heroWorks = [
    {
      id: "aquarium",
      title: "Bespoke Coral Reef Architecture",
      type: "Custom Acrylic Aquarium",
      image: "/images/bondinwater/ef9742_00d0a8d52ba24f73a1cc51b4e2821b92.jpg",
      caption: "Precision PMMA optical clarity with automated Life Support Systems",
      icon: Waves,
    },
    {
      id: "pond",
      title: "Natural Koi Pond & Riparian Waterfalls",
      type: "Outdoor Living Biotope",
      image: "/images/bondinwater/22553ed11ea647cdaa83b3af08f66f04.jpg",
      caption: "Self-sustaining biological wetland filtration & volcanic rockwork",
      icon: Droplets,
    },
    {
      id: "paludarium",
      title: "Rainforest Mist Cascade Paludarium",
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
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#F4F4EF] text-[#202723] overflow-hidden border-b border-[#E2E4DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Studio Identification Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2E4DA] mb-10">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="sage">
              BONDINWATER &bull; NATURE ENGINEERED
            </EditorialBadge>
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#647368]">
              AQUATIC ARCHITECTURE &bull; HABITAT ENGINEERING &bull; ZOO MASTERPLANNING
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-[#647368]">
            <span>MUMBAI &bull; NATIONWIDE</span>
            <span className="hidden md:inline text-[#E2E4DA]">|</span>
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.93]">
                Extraordinary Environments. Engineered Around Nature.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#3A473E] font-sans font-normal leading-relaxed max-w-xl">
              From bespoke aquariums and natural habitats to architectural water features and precision engineering, BondInWater designs, builds and maintains environments shaped by nature.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-[#1D382B] text-[#F4F4EF] hover:bg-[#304A38] text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-[#1D382B]"
              >
                <span>Explore Our Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-white text-[#1D382B] hover:bg-[#EBECE4] text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 transition-all duration-200 border border-[#E2E4DA]"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#60775B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E2E4DA] text-xs font-mono text-[#60775B]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#60775B]" />
                <span className="text-[#202723] font-medium">Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#60775B]" />
                <span className="text-[#202820] font-medium">Custom Cast PMMA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#60775B]" />
                <span className="text-[#202820] font-medium">Life Support Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#60775B]" />
                <span className="text-[#202820] font-medium">Biologist-Led Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase — Real Completed Installations (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-[#E2E4DA] bg-white p-3 sm:p-4 shadow-md">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E2E4DA]">
                <Image
                  src={activeWork.image}
                  alt={activeWork.title}
                  fill
                  priority
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Natural Image Tag Overlay */}
                <div className="absolute top-3 left-3 bg-[#1D382B]/90 backdrop-blur-sm text-[#F4F4EF] px-3 py-1.5 text-[11px] font-mono border border-[#2D4C3C] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#AEBBA4]" />
                  <span className="uppercase tracking-wider font-semibold">{activeWork.type}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#1D382B]/90 backdrop-blur-sm text-[#F4F4EF] p-3.5 border border-[#2D4C3C]">
                  <h3 className="text-sm font-display uppercase tracking-tight text-[#F4F4EF] font-bold">
                    {activeWork.title}
                  </h3>
                  <p className="text-xs font-sans text-[#AEBBA4] mt-1 leading-snug">
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
                        ? "bg-[#1D382B] text-[#F4F4EF] border-[#1D382B] shadow-sm"
                        : "bg-white text-[#202723] hover:bg-[#EBECE4] border-[#E2E4DA]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={`text-[10px] uppercase tracking-wider ${isCurrent ? "text-[#AEBBA4]" : "text-[#647368]"}`}>
                        0{idx + 1}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-[#AEBBA4]" : "text-[#60775B]"}`} />
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
