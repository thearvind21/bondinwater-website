"use client";

import React from "react";
import Image from "next/image";
import { APEX_AUTOMATION_DETAILS } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { Cpu, Activity, ShieldCheck, Waves, Check, ArrowUpRight, Zap, RefreshCw } from "lucide-react";

export function SmartAquariumSection() {
  const telemetryFeatures = [
    { label: "pH Regulation", metric: "8.1 – 8.4", desc: "Automated continuous probe logging with automated kalkwasser & buffer dosing." },
    { label: "Redox / ORP", metric: "380 – 420 mV", desc: "Real-time oxidation-reduction potential regulation via controlled ozone reactors." },
    { label: "Thermal Control", metric: "±0.2°C PID", desc: "Multi-stage digital chilling and heating with automatic failsafe bypass loops." },
    { label: "Salinity / TDS", metric: "35 ppt / 1.026", desc: "Continuous optical salinity conductivity sensors and automated pure RO top-offs." },
  ];

  return (
    <section id="automation" className="py-24 lg:py-32 bg-[#121316] text-neutral-100 border-b border-neutral-800 relative bg-museum-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="moss">
              SPECIALISED ENGINEERING // PAGES 32–34
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              NEPTUNE SYSTEMS APEX AUTOMATION & LSS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.95]">
            Customised Technical Solutions & Smart Automation.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
            From specialized Life Support Systems tailored for delicate species to smart telemetry, BondInWater provides complete packages for Neptune Systems Apex aquarium automation—including supply, installation, and expert programming.
          </p>
        </div>

        {/* 2-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left: Neptune Systems Apex Technical Card (6 cols) */}
          <div className="lg:col-span-6 border border-neutral-800 bg-[#16181C] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  OFFICIAL PARTNER PACKAGE // PROFILE PAGE 32
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-white mt-1">
                  Neptune Systems Apex Integration
                </h3>
              </div>
              <Cpu className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-800 bg-neutral-950">
              <Image
                src="/images/pdf_images/p32_img3.png"
                alt="Neptune Systems Apex automation hardware and programming from BondInWater profile"
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-neutral-950/85 text-neutral-300 px-3 py-1.5 text-[11px] font-mono border border-neutral-800 flex items-center justify-between">
                <span>APEX PRO TELEMETRY ARRAY</span>
                <span className="text-emerald-400 text-[10px]">SUPPLY &bull; INSTALL &bull; PROGRAM</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              Neptune Systems has been helping aquarists monitor their aquatic environments for over 25 years. BondInWater delivers end-to-end integration: component supply, physical sensory plumbing, cloud dashboard configuration, and mobile push-alert parameter calibration.
            </p>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Automation Capabilities (Profile Page 32)
              </h4>
              {APEX_AUTOMATION_DETAILS.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 bg-neutral-900/60 p-2.5 border border-neutral-800">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialized Custom Solutions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Telemetry Matrix */}
            <div className="border border-neutral-800 bg-[#16181C] p-6 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-2">
                Real-Time Monitored Parameters
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {telemetryFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-neutral-900 p-3.5 border border-neutral-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-neutral-400">{feat.label}</span>
                      <span className="text-emerald-400 font-bold">{feat.metric}</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 font-sans leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Specialized Works: Prosthetics & Coral Restoration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Solution 1: Animal Prosthetics */}
              <div className="border border-neutral-800 bg-[#16181C] p-4 space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 border border-neutral-800">
                  <Image
                    src="/images/pdf_images/p33_img2.png"
                    alt="3D printed animal prosthetics and rehabilitation from BondInWater profile"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="25vw"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                    PAGE 33 // REHABILITATION
                  </span>
                  <h4 className="text-sm font-display uppercase tracking-tight text-white font-bold mt-0.5">
                    3D-Printed Prosthetics & Taxidermy
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans mt-1 leading-snug">
                    Custom mobility aids for injured wildlife and artisanal memorial taxidermy.
                  </p>
                </div>
              </div>

              {/* Solution 2: Coral Restoration */}
              <div className="border border-neutral-800 bg-[#16181C] p-4 space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 border border-neutral-800">
                  <Image
                    src="/images/pdf_images/p34_img4.png"
                    alt="Coral restoration structures from BondInWater profile"
                    fill
                    className="object-cover reveal-zoom"
                    sizes="25vw"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                    PAGE 34 // CONSERVATION
                  </span>
                  <h4 className="text-sm font-display uppercase tracking-tight text-white font-bold mt-0.5">
                    Coral Restoration Substrates
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans mt-1 leading-snug">
                    Specialized artificial reef structures and settlement matrices for coral propagation.
                  </p>
                </div>
              </div>
            </div>

            {/* Filtration Plant Image */}
            <div className="border border-neutral-800 bg-[#16181C] p-3 flex items-center gap-4">
              <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-neutral-950 border border-neutral-800">
                <Image
                  src="/images/pdf_images/p34_img2.png"
                  alt="Custom filtration equipment from BondInWater profile"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div className="text-xs font-mono text-neutral-300">
                <span className="text-neutral-500 block text-[10px]">PROFILE PAGE 34</span>
                <span>Custom filtration design for aquariums, natural ponds, and swimming pools.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
