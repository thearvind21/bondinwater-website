"use client";

import React, { useState } from "react";
import Image from "next/image";
import { APEX_AUTOMATION_DETAILS } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem } from "./BotanicalDecorators";
import { Cpu, Bell, CheckCircle2, Wifi, Activity, Sparkles, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export function SmartAquariumSection() {
  const [activeTab, setActiveTab] = useState<"automation" | "filtration" | "coral" | "prosthetics">("automation");

  const telemetryMetrics = [
    { label: "Water pH", val: "8.24", status: "Optimal", unit: "pH" },
    { label: "Water Temp", val: "25.6", status: "PID Regulated", unit: "°C" },
    { label: "ORP (Redox)", val: "395", status: "High Purity", unit: "mV" },
    { label: "Salinity", val: "35.1", status: "Reef Balanced", unit: "ppt" },
    { label: "Dissolved O₂", val: "7.4", status: "Saturated", unit: "mg/L" },
    { label: "TDS Level", val: "142", status: "Calibrated", unit: "ppm" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#2D3F30] text-[#F5F2E9] relative overflow-hidden">
      {/* Decorative background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#A5AD92_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B18A60]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Verified Capability Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B18A60]/20 border border-[#B18A60]/40 text-[#C9A781] text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B18A60]" />
            <span>Specialised Technical Solutions & Automation</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F2E9] font-normal tracking-tight">
            Intelligent Automation & <br className="hidden sm:inline" />
            <span className="italic font-light text-[#C9A781]">Specialised Engineering.</span>
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto text-[#B18A60]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B18A60]/60" />
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B18A60]/60" />
          </div>

          <p className="text-base sm:text-lg text-[#E8E2D5]/85 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            As documented in the company profile, BondInWater provides comprehensive packages for Neptune Systems Apex aquarium automation—including supply, installation, and expert programming—alongside specialized species habitats, coral restoration structures, and 3D-printed animal prosthetics.
          </p>
        </div>

        {/* 4 Specialized Solutions Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("automation")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "automation"
                ? "bg-[#C9A781] text-[#292C25] shadow-lg"
                : "bg-white/10 hover:bg-white/15 text-[#E8E2D5] border border-white/10"
            }`}
          >
            Neptune Systems Apex Automation
          </button>
          <button
            onClick={() => setActiveTab("filtration")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "filtration"
                ? "bg-[#C9A781] text-[#292C25] shadow-lg"
                : "bg-white/10 hover:bg-white/15 text-[#E8E2D5] border border-white/10"
            }`}
          >
            Specialised Fauna Habitats (Otters & Penguins)
          </button>
          <button
            onClick={() => setActiveTab("coral")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "coral"
                ? "bg-[#C9A781] text-[#292C25] shadow-lg"
                : "bg-white/10 hover:bg-white/15 text-[#E8E2D5] border border-white/10"
            }`}
          >
            Coral Restoration Structures
          </button>
          <button
            onClick={() => setActiveTab("prosthetics")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "prosthetics"
                ? "bg-[#C9A781] text-[#292C25] shadow-lg"
                : "bg-white/10 hover:bg-white/15 text-[#E8E2D5] border border-white/10"
            }`}
          >
            3D-Printed Prosthetics & Taxidermy
          </button>
        </div>

        {/* Tab 1: Neptune Systems Apex Automation */}
        {activeTab === "automation" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Telemetry Dashboard */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl bg-[#1E2B21] border border-[#A5AD92]/30 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-[#A5AD92]/20">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#B18A60]" />
                    <div>
                      <p className="text-xs font-semibold text-[#F5F2E9]">Neptune Systems Apex Telemetry</p>
                      <p className="text-[10px] text-[#A5AD92]">Supply • Installation • Expert Programming</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#B18A60]/20 text-[#C9A781] border border-[#B18A60]/30">
                    Live Telemetry
                  </span>
                </div>

                {/* 6 Real-time Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {telemetryMetrics.map((m) => (
                    <div key={m.label} className="p-3.5 rounded-xl bg-[#152017] border border-[#A5AD92]/15 space-y-1">
                      <span className="text-[10px] uppercase text-[#A5AD92] tracking-wider block">{m.label}</span>
                      <p className="text-xl font-mono text-[#F5F2E9] font-medium">
                        {m.val} <span className="text-[11px] text-[#85866A]">{m.unit}</span>
                      </p>
                      <span className="text-[9px] text-emerald-400 flex items-center gap-1 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {m.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#A5AD92]/20 flex items-center justify-between text-xs text-[#A5AD92]">
                  <span className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Apex Fusion Cloud Connected</span>
                  </span>
                  <span className="text-[11px] text-[#C9A781] font-mono">24/7 Automated Monitoring</span>
                </div>
              </div>
            </div>

            {/* Right: Verified Scope from Company Profile */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                  Documented In Company Profile (Page 33)
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F2E9] font-normal leading-snug">
                  Complete Neptune Systems Apex Package.
                </h3>
                <p className="text-sm sm:text-base text-[#E8E2D5]/85 font-sans font-light leading-relaxed">
                  Neptune Systems has been helping aquarists monitor their marine ecosystems for over 25 years. BondInWater provides a complete turnkey package, including supply, installation, and expert programming of the Apex system.
                </p>
              </div>

              <div className="space-y-2.5">
                {APEX_AUTOMATION_DETAILS.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E8E2D5]">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A781] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#C9A781] text-[#292C25] hover:bg-[#B18A60] hover:text-[#F5F2E9] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all"
                >
                  <span>Request Apex Installation & Programming</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Specialised Fauna Habitats */}
        {activeTab === "filtration" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#A5AD92]/30 shadow-2xl">
                <Image
                  src="/images/pdf_images/p32_img3.png"
                  alt="Specialised filtration engineering for sensitive species"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                  Company Profile Page 32
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F2E9] font-normal leading-snug">
                  Habitats for Sensitive & Exotic Species.
                </h3>
                <p className="text-sm sm:text-base text-[#E8E2D5]/85 font-sans font-light leading-relaxed">
                  Our deep understanding of ecosystem dynamics allows us to tailor environments to meet client requirements without disrupting ecological balance. This expertise enables us to engineer specialized habitats for sensitive species such as otters, penguins, and salamanders.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E8E2D5]">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-semibold text-[#C9A781]">Otter Life Support</p>
                  <p className="text-[11px] text-[#A5AD92]">High biological load processing with rapid turnover and dry haul-out bio-drains.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-semibold text-[#C9A781]">Penguin Habitats</p>
                  <p className="text-[11px] text-[#A5AD92]">Chilled saltwater loops with air filtration preventing fungal respiratory hazards.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-semibold text-[#C9A781]">Salamander Microclimates</p>
                  <p className="text-[11px] text-[#A5AD92]">Stable low-temperature aquatic zones with pure unchlorinated groundwater chemistry.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-semibold text-[#C9A781]">CFD Flow Validation</p>
                  <p className="text-[11px] text-[#A5AD92]">Zero dead-zone velocity modeling tested prior to physical fabrication.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Coral Restoration */}
        {activeTab === "coral" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#A5AD92]/30 shadow-2xl">
                <Image
                  src="/images/pdf_images/p19_img1.png"
                  alt="Coral restoration structures"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                  Conservation & Ecosystem Restoration
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F2E9] font-normal leading-snug">
                  Engineered Substrates for Coral Restoration.
                </h3>
                <p className="text-sm sm:text-base text-[#E8E2D5]/85 font-sans font-light leading-relaxed">
                  As part of our commitment to marine conservation, BondInWater designs and fabricates specialized artificial reef structures and settlement substrates for coral restoration programs. These structures promote larval recruitment, rapid frag attachment, and long-term calcification.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#E8E2D5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A781]" />
                  <span>Inert, ocean-grade calcium carbonate and ceramic matrix blends</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A781]" />
                  <span>Micro-cavity topographies designed to shield juvenile coral polyps from grazing pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A781]" />
                  <span>Collaborative conservation frameworks supporting biodiversity rehabilitation</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: 3D Prosthetics & Taxidermy */}
        {activeTab === "prosthetics" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-[#A5AD92]/30">
                  <Image
                    src="/images/pdf_images/p34_img4.png"
                    alt="3D printed animal prosthetics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-[#A5AD92]/30">
                  <Image
                    src="/images/pdf_images/p34_img2.png"
                    alt="Artisanal taxidermy tribute"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                  Company Profile Page 34
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F2E9] font-normal leading-snug">
                  Compassionate Technology: 3D Prosthetics & Taxidermy.
                </h3>
                <p className="text-sm sm:text-base text-[#E8E2D5]/85 font-sans font-light leading-relaxed">
                  We leverage advanced 3D printing technology to create custom prosthetics tailored to each animal&apos;s specific needs, helping pets and rescued wildlife regain mobility and thrive. Additionally, our artisanal taxidermy services offer a respectful, lifelike tribute to honor cherished companion animals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E8E2D5]">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-semibold text-[#C9A781]">3D-Printed Prosthetics</p>
                  <p className="text-[11px] text-[#A5AD92]">Custom anatomical modeling for birds, reptiles, and mammals recovering from trauma.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-semibold text-[#C9A781]">Artisanal Taxidermy</p>
                  <p className="text-[11px] text-[#A5AD92]">Meticulous, respectful representations preserving the memories of companion animals.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
