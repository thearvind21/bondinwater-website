"use client";

import React from "react";
import Image from "next/image";
import { APEX_AUTOMATION_DETAILS } from "@/data/bondinwater-data";
import { Cpu, Check, Layers, Waves } from "lucide-react";

export function SmartAquariumSection() {
  const documentedParameters = [
    { label: "pH & Alkalinity", desc: "Automated probe sensing & buffer dosing (PDF Page 33)" },
    { label: "Temperature & Thermal Loops", desc: "Continuous PID digital monitoring & chiller/heater control" },
    { label: "Salinity & Water Levels", desc: "Conductivity monitoring & automated RO top-off systems" },
    { label: "ORP, DO & Leak Detection", desc: "Redox oxidation tracking, dissolved oxygen & floor leak alerts" },
  ];

  return (
    <section id="automation" className="py-24 lg:py-32 bg-[#E9EFE7] text-[#27302B] border-b border-[#8CA477]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#4F8278] font-bold">
              CATEGORY 12 &bull; CUSTOMISED SOLUTIONS (PDF PAGES 32–34)
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              COMPACT TO EXTENSIVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F4338] leading-[1.1]">
            Customised Technical Solutions &amp; Automation
          </h2>

          <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-normal leading-relaxed max-w-3xl">
            Our deep understanding of ecosystem components allows us to tailor environments to meet our clients&apos; specific requirements, accommodating specialized species such as otters, penguins, and salamanders without disrupting ecological interactions.
          </p>
        </div>

        {/* 2-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left: Neptune Systems Apex Technical Card (6 cols) */}
          <div className="lg:col-span-6 border border-[#8CA477]/30 bg-white p-6 sm:p-8 space-y-6 shadow-sm rounded-lg">
            <div className="flex items-center justify-between border-b border-[#8CA477]/20 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F8278] font-bold">
                  DOCUMENTED PARTNER PACKAGE &bull; PROFILE PAGE 33
                </span>
                <h3 className="text-2xl font-serif text-[#1F4338] mt-1 font-bold">
                  Neptune Systems Apex Automation
                </h3>
              </div>
              <Cpu className="w-6 h-6 text-[#1F4338] shrink-0" />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#8CA477]/20 bg-[#E9EFE7] rounded">
              <Image
                src="/images/pdf_images/p33_img2.png"
                alt="Neptune Systems Apex automation hardware and programming from BondInWater profile"
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#1F4338]/95 text-white px-3 py-1.5 text-[11px] font-mono border border-[#8CA477]/40 flex items-center justify-between rounded">
                <span>NEPTUNE SYSTEMS APEX</span>
                <span className="text-[#8CA477] text-[10px]">SUPPLY &bull; INSTALL &bull; PROGRAM</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#27302B]/85 font-sans leading-relaxed">
              Neptune Systems has been helping aquarists monitor their marine ecosystems for +25 years. We offer comprehensive services: supply, installation, and expert programming of the Apex system to ensure optimal conditions for marine life.
            </p>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#1F4338] font-bold">
                Documented Automation Services (Profile Page 33)
              </h4>
              {[
                "Complete package: system supply, physical sensory plumbing & installation",
                "Expert programming tailored to each environment's specific needs",
                "Automated water parameter monitoring (pH, Salinity, Temp, Leaks, ORP)",
                "Integrated lighting control, photoperiod simulation & feeding schedules",
                "Mobile push-alert failsafes and cloud monitoring dashboard"
              ].map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#27302B] bg-[#E9EFE7]/60 p-2.5 border border-[#8CA477]/25 rounded">
                  <Check className="w-3.5 h-3.5 text-[#1F4338] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialized Custom Solutions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Documented Parameters Matrix */}
            <div className="border border-[#8CA477]/30 bg-white p-6 space-y-4 shadow-sm rounded-lg">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#4F8278] border-b border-[#8CA477]/20 pb-2 font-bold">
                Documented Monitoring Parameters (Profile Page 33)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documentedParameters.map((feat, idx) => (
                  <div key={idx} className="bg-[#E9EFE7]/60 p-3.5 border border-[#8CA477]/25 space-y-1 rounded">
                    <span className="text-xs font-mono font-bold text-[#1F4338] block">{feat.label}</span>
                    <p className="text-[11px] text-[#27302B]/85 font-sans leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Specialized Works: Prosthetics & Taxidermy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Solution 1: Animal Prosthetics */}
              <div className="border border-[#8CA477]/30 bg-white p-4 space-y-3 shadow-sm rounded-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9EFE7] border border-[#8CA477]/20 rounded">
                  <Image
                    src="/images/pdf_images/p34_img2.png"
                    alt="3D printed animal prosthetics and rehabilitation from BondInWater profile"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="25vw"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B47750] block font-bold">
                    PAGE 34 &bull; 3D PRINTED PROSTHETICS
                  </span>
                  <h4 className="text-sm font-serif text-[#1F4338] font-bold mt-0.5">
                    Animal Mobility Support
                  </h4>
                  <p className="text-xs text-[#4F8278] font-sans mt-1 leading-snug">
                    Custom 3D printed prosthetics tailored to help pets and wildlife regain mobility.
                  </p>
                </div>
              </div>

              {/* Solution 2: Taxidermy */}
              <div className="border border-[#8CA477]/30 bg-white p-4 space-y-3 shadow-sm rounded-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9EFE7] border border-[#8CA477]/20 rounded">
                  <Image
                    src="/images/pdf_images/p34_img4.png"
                    alt="Taxidermy preservation from BondInWater profile"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="25vw"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F4338] block font-bold">
                    PAGE 34 &bull; MEMORIAL TAXIDERMY
                  </span>
                  <h4 className="text-sm font-serif text-[#1F4338] font-bold mt-0.5">
                    Preserving Pet Memories
                  </h4>
                  <p className="text-xs text-[#4F8278] font-sans mt-1 leading-snug">
                    Artisans meticulously recreate lifelike representations honoring beloved companions.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Filtration Block */}
            <div className="border border-[#8CA477]/30 bg-white p-4 flex items-center gap-4 shadow-sm rounded-lg">
              <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-[#E9EFE7] border border-[#8CA477]/20 rounded">
                <Image
                  src="/images/pdf_images/p32_img3.png"
                  alt="Custom filtration equipment from BondInWater profile"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div className="text-xs font-mono text-[#27302B]">
                <span className="text-[#4F8278] block text-[10px] font-bold">PAGE 32 &bull; FILTRATION SYSTEMS</span>
                <span className="text-[11px] leading-tight block text-[#27302B]/90 mt-0.5">
                  Tailored water filtration design for aquariums, ponds, and swimming pools, prioritizing optimal water quality.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}