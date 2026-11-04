"use client";

import React from "react";
import Image from "next/image";
import { APEX_AUTOMATION_DETAILS } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { Cpu, Check, Layers, Waves } from "lucide-react";

export function SmartAquariumSection() {
  const telemetryFeatures = [
    { label: "pH Regulation", metric: "8.1 – 8.4", desc: "Continuous probe logging with automated kalkwasser & buffer dosing." },
    { label: "Redox / ORP", metric: "380 – 420 mV", desc: "Oxidation-reduction potential regulation via controlled ozone reactors." },
    { label: "Thermal Control", metric: "±0.2°C PID", desc: "Multi-stage digital chilling and heating with automatic failsafe bypass loops." },
    { label: "Salinity / TDS", metric: "35 ppt / 1.026", desc: "Optical conductivity salinity sensors with automated RO top-offs." },
  ];

  return (
    <section id="automation" className="py-24 lg:py-32 bg-[#F4F4EF] text-[#202723] border-b border-[#E2E4DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              SPECIALISED ENGINEERING &bull; PAGES 31–34
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#60775B]">
              NEPTUNE SYSTEMS APEX AUTOMATION &amp; LSS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.95]">
            Customised Technical Solutions &amp; Smart Automation.
          </h2>

          <p className="text-base sm:text-lg text-[#202723]/80 font-sans font-normal leading-relaxed max-w-3xl">
            From specialized Life Support Systems tailored for delicate species to smart telemetry, BondInWater provides complete packages for Neptune Systems Apex aquarium automation—including supply, installation, and expert programming.
          </p>
        </div>

        {/* 2-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left: Neptune Systems Apex Technical Card (6 cols) */}
          <div className="lg:col-span-6 border border-[#E2E4DA] bg-white p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E2E4DA] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#304A38] font-bold">
                  OFFICIAL PARTNER PACKAGE &bull; PROFILE PAGE 32
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-[#1D382B] mt-1 font-bold">
                  Neptune Systems Apex Integration
                </h3>
              </div>
              <Cpu className="w-6 h-6 text-[#304A38] shrink-0" />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E2E4DA] bg-[#E2E4DA]">
              <Image
                src="/images/pdf_images/p32_img3.png"
                alt="Neptune Systems Apex automation hardware and programming from BondInWater profile"
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#1D382B]/90 text-[#F4F4EF] px-3 py-1.5 text-[11px] font-mono border border-[#304A38] flex items-center justify-between">
                <span>APEX PRO TELEMETRY ARRAY</span>
                <span className="text-[#AEBBA4] text-[10px]">SUPPLY &bull; INSTALL &bull; PROGRAM</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#202723]/80 font-sans leading-relaxed">
              Neptune Systems has been helping aquarists monitor their aquatic environments for over 25 years. BondInWater delivers end-to-end integration: component supply, physical sensory plumbing, cloud dashboard configuration, and mobile push-alert parameter calibration.
            </p>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#1D382B] font-bold">
                Automation Capabilities (Profile Page 32)
              </h4>
              {APEX_AUTOMATION_DETAILS.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#202723] bg-[#F4F4EF] p-2.5 border border-[#E2E4DA]">
                  <Check className="w-3.5 h-3.5 text-[#304A38] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialized Custom Solutions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Telemetry Matrix */}
            <div className="border border-[#E2E4DA] bg-white p-6 space-y-4 shadow-sm">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#60775B] border-b border-[#E2E4DA] pb-2 font-bold">
                Real-Time Monitored Parameters
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {telemetryFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-[#F4F4EF] p-3.5 border border-[#E2E4DA] space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#60775B]">{feat.label}</span>
                      <span className="text-[#1D382B] font-bold">{feat.metric}</span>
                    </div>
                    <p className="text-[11px] text-[#202723]/80 font-sans leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Specialized Works: Prosthetics & Coral Restoration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Solution 1: Animal Prosthetics */}
              <div className="border border-[#E2E4DA] bg-white p-4 space-y-3 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E2E4DA] border border-[#E2E4DA]">
                  <Image
                    src="/images/pdf_images/p33_img2.png"
                    alt="3D printed animal prosthetics and rehabilitation from BondInWater profile"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="25vw"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A87952] block font-bold">
                    PAGE 33 &bull; REHABILITATION
                  </span>
                  <h4 className="text-sm font-display uppercase tracking-tight text-[#1D382B] font-bold mt-0.5">
                    3D-Printed Prosthetics &amp; Taxidermy
                  </h4>
                  <p className="text-xs text-[#60775B] font-sans mt-1 leading-snug">
                    Custom mobility aids for injured wildlife and artisanal memorial taxidermy.
                  </p>
                </div>
              </div>

              {/* Solution 2: Coral Restoration */}
              <div className="border border-[#E2E4DA] bg-white p-4 space-y-3 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E2E4DA] border border-[#E2E4DA]">
                  <Image
                    src="/images/pdf_images/p34_img4.png"
                    alt="Coral restoration structures from BondInWater profile"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="25vw"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#304A38] block font-bold">
                    PAGE 34 &bull; CONSERVATION
                  </span>
                  <h4 className="text-sm font-display uppercase tracking-tight text-[#1D382B] font-bold mt-0.5">
                    Coral Restoration Substrates
                  </h4>
                  <p className="text-xs text-[#60775B] font-sans mt-1 leading-snug">
                    Specialized artificial reef structures and settlement matrices for coral propagation.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Filtration & GFRC Theming Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#E2E4DA] bg-white p-3.5 flex items-center gap-3 shadow-sm">
                <div className="relative w-16 h-14 shrink-0 overflow-hidden bg-[#E2E4DA] border border-[#E2E4DA]">
                  <Image
                    src="/images/pdf_images/p34_img2.png"
                    alt="Custom filtration equipment from BondInWater profile"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="text-xs font-mono text-[#202723]">
                  <span className="text-[#60775B] block text-[9px] font-bold">PAGE 34 &bull; FILTRATION</span>
                  <span className="text-[11px] leading-tight block">Custom filtration for aquariums &amp; ponds</span>
                </div>
              </div>

              <div className="border border-[#E2E4DA] bg-white p-3.5 flex items-center gap-3 shadow-sm">
                <div className="relative w-16 h-14 shrink-0 overflow-hidden bg-[#E2E4DA] border border-[#E2E4DA]">
                  <Image
                    src="/images/pdf_images/p31_img1.png"
                    alt="GFRC rockwork from BondInWater profile"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="text-xs font-mono text-[#202723]">
                  <span className="text-[#A87952] block text-[9px] font-bold">PAGE 31 &bull; THEMING</span>
                  <span className="text-[11px] leading-tight block">GFRC rockwork, caves &amp; grottos</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}