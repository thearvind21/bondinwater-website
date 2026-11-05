"use client";

import React, { useState } from "react";
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
    <section className="py-24 lg:py-32 bg-[#E9EFE7] text-[#27302B] border-b border-[#8CA477]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#4F8278] font-bold">
              FEASIBILITY &bull; SPATIAL ESTIMATOR
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              PRELIMINARY ENGINEERING SIZING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F4338] leading-[1.1]">
            Living Habitat Spatial &amp; Engineering Estimator
          </h2>

          <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-light leading-relaxed max-w-3xl">
            Simulate spatial footprint, hydraulic requirements, Life Support System parameters, and preliminary project timelines for your upcoming architectural installation.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 lg:p-10 border border-[#8CA477]/30 rounded-lg shadow-sm">
            
            {/* Step 1: Select Spatial Environment */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#8CA477]/20 pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4338]">
                  01 // SELECT SPATIAL ENVIRONMENT
                </span>
                <span className="text-[10px] font-mono text-[#4F8278]">CIVIL SETTING</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SPACES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSpace(s.id)}
                    className={`text-left p-3 border rounded transition-all ${
                      selectedSpace === s.id
                        ? "bg-[#1F4338] text-white border-[#1F4338] shadow-sm font-bold"
                        : "bg-[#E9EFE7]/50 text-[#27302B] hover:bg-[#E9EFE7] border-[#8CA477]/25"
                    }`}
                  >
                    <div className="text-xs font-serif uppercase tracking-tight font-bold">{s.name}</div>
                    <div className="text-[11px] opacity-75 font-sans mt-0.5">{s.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Habitat Typology */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#8CA477]/20 pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4338]">
                  02 // SELECT HABITAT TYPOLOGY
                </span>
                <span className="text-[10px] font-mono text-[#4F8278]">BIOLOGICAL CLASSIFICATION</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HABITATS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHabitat(h.id)}
                    className={`text-left p-3 border rounded transition-all ${
                      selectedHabitat === h.id
                        ? "bg-[#1F4338] text-white border-[#1F4338] shadow-sm font-bold"
                        : "bg-[#E9EFE7]/50 text-[#27302B] hover:bg-[#E9EFE7] border-[#8CA477]/25"
                    }`}
                  >
                    <div className="text-xs font-serif uppercase tracking-tight font-bold">{h.name}</div>
                    <div className="text-[10px] font-mono opacity-75 mt-0.5">{h.timeline}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Spatial Dimensions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#8CA477]/20 pb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4338]">
                  03 // ESTIMATED DIMENSIONS (METERS)
                </span>
                <span className="text-[10px] font-mono text-[#4F8278]">L &bull; W &bull; H</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#4F8278]">LENGTH</span>
                    <span className="font-bold text-[#1F4338]">{lengthMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.5"
                    value={lengthMeters}
                    onChange={(e) => setLengthMeters(parseFloat(e.target.value))}
                    className="w-full accent-[#1F4338]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#4F8278]">WIDTH</span>
                    <span className="font-bold text-[#1F4338]">{widthMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.6"
                    max="6.0"
                    step="0.2"
                    value={widthMeters}
                    onChange={(e) => setWidthMeters(parseFloat(e.target.value))}
                    className="w-full accent-[#1F4338]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#4F8278]">HEIGHT</span>
                    <span className="font-bold text-[#1F4338]">{heightMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="4.0"
                    step="0.2"
                    value={heightMeters}
                    onChange={(e) => setHeightMeters(parseFloat(e.target.value))}
                    className="w-full accent-[#1F4338]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Specification Plaque (5 cols) */}
          <div className="lg:col-span-5 bg-[#1F4338] text-white p-6 sm:p-8 lg:p-10 border border-[#8CA477]/30 rounded-lg shadow-2xl space-y-6">
            <div className="border-b border-[#8CA477]/30 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block font-bold">
                ENGINEERING PROJECTION PLAQUE
              </span>
              <h3 className="text-2xl font-serif text-white mt-1 font-bold">
                {habitat.name}
              </h3>
              <p className="text-xs font-mono text-[#E9EFE7]/80 mt-0.5">
                Target: {space.name}
              </p>
            </div>

            {/* Calculated Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 py-2 border-b border-[#8CA477]/30">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block">
                  ESTIMATED VOLUME
                </span>
                <span className="text-2xl font-serif text-white font-bold">
                  {estimatedVolumeLitres.toLocaleString()} L
                </span>
                <span className="text-[10px] font-mono text-[#E9EFE7]/80 block">({estimatedVolumeM3} m³)</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block">
                  SURFACE FOOTPRINT
                </span>
                <span className="text-2xl font-serif text-white font-bold">
                  {estimatedSurfaceArea} m²
                </span>
                <span className="text-[10px] font-mono text-[#E9EFE7]/80 block">Slab Footprint</span>
              </div>
            </div>

            {/* Engineering Specifications */}
            <div className="space-y-3 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[#8CA477] text-[10px] uppercase tracking-wider block font-bold">RECOMMENDED MATERIAL SPEC</span>
                <span className="text-white block bg-[#142C25] p-2.5 border border-[#8CA477]/30 rounded">
                  {habitat.recommendedPMMA}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[#8CA477] text-[10px] uppercase tracking-wider block font-bold">LIFE SUPPORT SYSTEM (LSS) DESIGN</span>
                <span className="text-white block bg-[#142C25] p-2.5 border border-[#8CA477]/30 rounded leading-snug">
                  {habitat.lssType}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[#8CA477] text-[10px] uppercase tracking-wider">PROJECT LIFECYCLE</span>
                <span className="text-white font-bold">{habitat.timeline}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#8CA477]/30">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] text-white font-sans text-xs uppercase font-medium py-3.5 px-4 tracking-wider hover:bg-[#9F6542] transition-colors rounded shadow-sm"
              >
                <span>Request Feasibility Study</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}