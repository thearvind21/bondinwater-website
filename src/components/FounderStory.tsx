"use client";

import React from "react";
import Image from "next/image";
import { COMPANY_PHILOSOPHY_DATA } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem, FernFrondAccent, BotanicalCornerDecor } from "./BotanicalDecorators";
import { Heart, Compass, Shield, Award, Sparkles, Trees, Eye, Cpu } from "lucide-react";

export function FounderStory() {
  const pillars = [
    {
      icon: Heart,
      title: "Animal Welfare First",
      desc: "Love for animals fuels our commitment. Every habitat is designed around the biological, psychological, and behavioral needs of its inhabitants."
    },
    {
      icon: Trees,
      title: "Biome & Conservation",
      desc: "Studying the biome—climate, geography, flora, and fauna—informs designs that integrate naturally and aid species conservation."
    },
    {
      icon: Compass,
      title: "30+ Years Architectural Heritage",
      desc: "Our architectural team brings over three decades of experience developing intricate master plans for zoological parks, safari parks, and tourism."
    },
    {
      icon: Cpu,
      title: "Advanced Engineering",
      desc: "From CFD fluid simulations to structural cast acrylic up to 300mm thick and GFRC theming, we balance innovation with technical precision."
    }
  ];

  return (
    <section id="story" className="py-24 lg:py-32 bg-[#F5F2E9] relative overflow-hidden">
      {/* Decorative botanical accents */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-20">
        <BotanicalCornerDecor className="w-48 h-48 text-[#344B38]" />
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none opacity-20 hidden lg:block">
        <FernFrondAccent className="w-56 h-56 text-[#A5AD92]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Company Story & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            Excellence in Recreating <br className="hidden sm:inline" />
            <span className="italic font-light text-[#344B38]">Ecosystems for All Creatures.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            “We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation.” — BondInWater
          </p>
        </div>

        {/* Editorial Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Primary Architectural Craftsmanship Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#E8E2D5] border border-[#E8E2D5]">
                <Image
                  src="/images/pdf_images/p10_img1.png"
                  alt="Understanding the biome at BondInWater"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-[#F5F2E9] space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#B18A60] font-semibold">
                    The Biome & Right Knowledge
                  </span>
                  <p className="text-xl sm:text-2xl font-serif font-normal text-[#F5F2E9]">
                    From Hobbyists to Creators
                  </p>
                  <p className="text-xs text-[#E8E2D5]/80 font-sans font-light">
                    Transforming passion for animal welfare into industry innovation
                  </p>
                </div>
              </div>

              {/* Overlapping Inset: On-site Engineering */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F2E9] hidden sm:block bg-[#344B38]">
                <Image
                  src="/images/bondinwater/edc791_88d5f0cbb867422c872661b780de5bbd.jpg"
                  alt="On-site rigorous engineering and fabrication"
                  fill
                  className="object-cover reveal-zoom"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-[#344B38]/30" />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#F5F2E9] bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    On-Site Craftsmanship
                  </span>
                </div>
              </div>
            </div>

            {/* Core Creed Banner */}
            <div className="p-5 rounded-2xl bg-white/80 border border-[#E8E2D5] flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#344B38]/10 text-[#344B38] flex items-center justify-center shrink-0 mt-0.5">
                <Heart className="w-5 h-5 text-[#B18A60]" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-[#85866A] font-semibold">Core Philosophy</p>
                <p className="text-xs text-[#292C25]/85 font-sans italic leading-relaxed">
                  “{COMPANY_PHILOSOPHY_DATA.coreCreed}”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Brand Storytelling (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                Authentic Brand Evolution
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#292C25] font-normal leading-snug">
                From Hobbyists and Learners into Industry Creators.
              </h3>
            </div>

            {/* Narrative Paragraphs grounded in Company Profile Pages 8 & 10 */}
            <div className="space-y-4 text-[#292C25]/85 font-sans font-light text-sm sm:text-base leading-relaxed">
              <p>
                {COMPANY_PHILOSOPHY_DATA.evolutionNarrative}
              </p>

              <p>
                {COMPANY_PHILOSOPHY_DATA.biomeSignificance}
              </p>

              <p>
                {COMPANY_PHILOSOPHY_DATA.architecturalHeritage}
              </p>
            </div>

            {/* The 4 Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E2D5]">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-xl bg-white/60 border border-[#E8E2D5] space-y-1.5 hover:bg-white transition-colors">
                    <div className="flex items-center gap-2 text-[#344B38]">
                      <Icon className="w-4 h-4 text-[#B18A60]" />
                      <h4 className="text-xs font-semibold uppercase tracking-wider font-sans text-[#292C25]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#85866A] font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Multidisciplinary Team Callout */}
            <div className="p-4 rounded-xl bg-[#344B38]/5 border border-[#344B38]/15 text-xs text-[#292C25]/80 font-sans leading-relaxed">
              <span className="font-semibold text-[#344B38]">Multidisciplinary Team Integration: </span>
              {COMPANY_PHILOSOPHY_DATA.multidisciplinaryTeam}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
