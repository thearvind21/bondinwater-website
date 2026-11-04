"use client";

import React, { useState } from "react";
import { EditorialBadge } from "./EditorialComponents";
import { ArrowRight } from "lucide-react";

interface SpaceType {
  id: string;
  name: string;
  subtitle: string;
}

interface HabitatType {
  id: string;
  name: string;
  defaultCapacity: string;
  turnoverRate: string;
  lssType: string;
  timeline: string;
  recommendedPMMA: string;
}

const SPACES: SpaceType[] = [
  { id: "penthouse", name: "Penthouse / Luxury Residence", subtitle: "Indoor architectural feature" },
  { id: "villa", name: "Villa Estate / Landscape Courtyard", subtitle: "Outdoor natural biotope" },
  { id: "corporate", name: "Corporate Headquarters", subtitle: "Executive lobby or atrium" },
  { id: "hospitality", name: "Luxury Hotel / Resort", subtitle: "High-impact visitor attraction" },
  { id: "sanctuary", name: "Zoo / Zoological Sanctuary", subtitle: "Public ethological enclosure" },
];

const HABITATS: HabitatType[] = [
  {
    id: "aquarium",
    name: "Custom Acrylic Aquarium",
    defaultCapacity: "1,500 – 6,000 Litres",
    turnoverRate: "4x to 6x tank volume/hour",
    lssType: "CFD-modeled downflow sump, UV sterilization, fluidized media",
    timeline: "6 – 10 Weeks",
    recommendedPMMA: "40mm – 80mm Optical Cast Acrylic",
  },
  {
    id: "koi-pond",
    name: "Natural Koi Pond & Waterfall",
    defaultCapacity: "15,000 – 45,000 Litres",
    turnoverRate: "1x total pond volume/hour",
    lssType: "Aerated bottom drain, vortex mechanical separation & wetland bog",
    timeline: "8 – 14 Weeks",
    recommendedPMMA: "Volcanic Granite & EPDM / GFRC Rockwork",
  },
  {
    id: "paludarium",
    name: "Waterfall & Tropical Paludarium",
    defaultCapacity: "800 – 2,500 Litres",
    turnoverRate: "8x aquatic volume/hour + ultrasonic misting",
    lssType: "Bioactive drainage plenum, epiphyte drip-wall & RO top-off",
    timeline: "5 – 8 Weeks",
    recommendedPMMA: "15mm – 25mm Low-Iron Float Glass / PMMA",
  },
  {
    id: "enclosure",
    name: "Custom Animal Enclosure / Aviary",
    defaultCapacity: "Calibrated species spatial volume",
    turnoverRate: "12 air exchanges/hour (climate controlled HVAC)",
    lssType: "Substrate bioactive recycling, PID thermostatic basking & UVB array",
    timeline: "8 – 16 Weeks",
    recommendedPMMA: "Stainless Steel Mesh & Laminated Impact Barriers",
  },
  {
    id: "pool",
    name: "Acrylic Swimming Pool Barrier",
    defaultCapacity: "Hydrostatic load engineered",
    turnoverRate: "Continuous high-rate sand filtration & salt chlorination",
    lssType: "Rebated concrete compression gasket & UV-stabilized polymer",
    timeline: "10 – 16 Weeks",
    recommendedPMMA: "80mm – 120mm+ Cast PMMA Structural Wall",
  },
];

export function InteractiveHabitatEstimator() {
  const [selectedSpace, setSelectedSpace] = useState<string>("penthouse");
  const [selectedHabitat, setSelectedHabitat] = useState<string>("aquarium");
  const [lengthMeters, setLengthMeters] = useState<number>(3.5);
  const [widthMeters, setWidthMeters] = useState<number>(1.2);
  const [heightMeters, setHeightMeters] = useState<number>(1.8);

  const habitat = HABITATS.find((h) => h.id === selectedHabitat) || HABITATS[0];
  const space = SPACES.find((s) => s.id === selectedSpace) || SPACES[0];

  const estimatedSurfaceArea = (lengthMeters * widthMeters).toFixed(1);
  const estimatedVolumeM3 = (lengthMeters * widthMeters * heightMeters).toFixed(1);
  const estimatedVolumeLitres = Math.round(lengthMeters * widthMeters * heightMeters * 1000);

  return (
    <section className="py-24 lg:py-32 bg-[#CED2D2] text-[#171A19] border-b border-[#B4B9B9] relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="moss">
              INTERACTIVE TOOL &bull; FEASIBILITY CALCULATOR
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#5A625E]">
              PRELIMINARY SPATIAL ESTIMATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#171A19] leading-[0.95]">
            Living Habitat Spatial &amp; Engineering Estimator.
          </h2>

          <p className="text-base sm:text-lg text-[#4B5350] font-sans font-light leading-relaxed max-w-3xl">
            Simulate spatial footprint, hydraulic requirements, Life Support System parameters, and preliminary project timelines for your upcoming architectural installation.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 lg:p-10 border border-[#B4B9B9] shadow-sm">
            
            {/* Step 1: Select Spatial Environment */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D8DDD8] pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#171A19]">
                  01 // SELECT SPATIAL ENVIRONMENT
                </span>
                <span className="text-[10px] font-mono text-[#5A625E]">CIVIL SETTING</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SPACES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSpace(s.id)}
                    className={`text-left p-3 border transition-all ${
                      selectedSpace === s.id
                        ? "bg-[#171A19] text-[#F1F1ED] border-[#171A19] shadow-sm"
                        : "bg-[#F7F8F6] text-[#171A19] hover:bg-[#EAECE9] border-[#CED2D2]"
                    }`}
                  >
                    <div className="text-xs font-display uppercase tracking-tight font-bold">{s.name}</div>
                    <div className="text-[11px] opacity-75 font-sans mt-0.5">{s.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Habitat Typology */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D8DDD8] pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#171A19]">
                  02 // SELECT HABITAT TYPOLOGY
                </span>
                <span className="text-[10px] font-mono text-[#5A625E]">BIOLOGICAL CLASSIFICATION</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HABITATS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHabitat(h.id)}
                    className={`text-left p-3 border transition-all ${
                      selectedHabitat === h.id
                        ? "bg-[#171A19] text-[#F1F1ED] border-[#171A19] shadow-sm"
                        : "bg-[#F7F8F6] text-[#171A19] hover:bg-[#EAECE9] border-[#CED2D2]"
                    }`}
                  >
                    <div className="text-xs font-display uppercase tracking-tight font-bold">{h.name}</div>
                    <div className="text-[10px] font-mono opacity-75 mt-0.5">{h.timeline}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Spatial Dimensions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D8DDD8] pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#171A19]">
                  03 // ESTIMATED DIMENSIONS (METERS)
                </span>
                <span className="text-[10px] font-mono text-[#5A625E]">L &bull; W &bull; H</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#5A625E]">LENGTH</span>
                    <span className="font-bold text-[#171A19]">{lengthMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.5"
                    value={lengthMeters}
                    onChange={(e) => setLengthMeters(parseFloat(e.target.value))}
                    className="w-full accent-[#171A19]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#5A625E]">WIDTH / DEPTH</span>
                    <span className="font-bold text-[#171A19]">{widthMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.6"
                    max="6.0"
                    step="0.2"
                    value={widthMeters}
                    onChange={(e) => setWidthMeters(parseFloat(e.target.value))}
                    className="w-full accent-[#171A19]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#5A625E]">HEIGHT</span>
                    <span className="font-bold text-[#171A19]">{heightMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="4.0"
                    step="0.2"
                    value={heightMeters}
                    onChange={(e) => setHeightMeters(parseFloat(e.target.value))}
                    className="w-full accent-[#171A19]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Specification Plaque (5 cols) */}
          <div className="lg:col-span-5 bg-[#191C1B] text-[#F1F1ED] p-6 sm:p-8 lg:p-10 border border-[#2D3230] shadow-2xl space-y-6">
            <div className="border-b border-[#2D3230] pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#79836D] block font-bold">
                ENGINEERING PROJECTION PLAQUE
              </span>
              <h3 className="text-2xl font-display uppercase tracking-tight text-[#F1F1ED] mt-1 font-bold">
                {habitat.name}
              </h3>
              <p className="text-xs font-mono text-[#9AA39E] mt-0.5">
                Target: {space.name}
              </p>
            </div>

            {/* Calculated Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 py-2 border-b border-[#2D3230]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9AA39E] block">
                  ESTIMATED VOLUME
                </span>
                <span className="text-2xl font-display uppercase tracking-tight text-[#F1F1ED] font-bold">
                  {estimatedVolumeLitres.toLocaleString()} L
                </span>
                <span className="text-[10px] font-mono text-[#9AA39E] block">({estimatedVolumeM3} m³)</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9AA39E] block">
                  SURFACE FOOTPRINT
                </span>
                <span className="text-2xl font-display uppercase tracking-tight text-[#F1F1ED] font-bold">
                  {estimatedSurfaceArea} m²
                </span>
                <span className="text-[10px] font-mono text-[#9AA39E] block">Slab Footprint</span>
              </div>
            </div>

            {/* Engineering Specifications */}
            <div className="space-y-3 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[#9AA39E] text-[10px] uppercase tracking-wider block">RECOMMENDED MATERIAL SPEC</span>
                <span className="text-[#F1F1ED] block bg-[#212524] p-2.5 border border-[#2D3230]">
                  {habitat.recommendedPMMA}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[#9AA39E] text-[10px] uppercase tracking-wider block">LIFE SUPPORT SYSTEM (LSS) DESIGN</span>
                <span className="text-[#F1F1ED] block bg-[#212524] p-2.5 border border-[#2D3230] leading-snug">
                  {habitat.lssType}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[#9AA39E] text-[10px] uppercase tracking-wider">PROJECT LIFECYCLE</span>
                <span className="text-[#79836D] font-bold">{habitat.timeline}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#2D3230]">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F1F1ED] text-[#171A19] font-mono text-xs uppercase font-bold py-3.5 px-4 tracking-wider hover:bg-white transition-colors border border-[#F1F1ED]"
              >
                <span>Request Feasibility Study</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
