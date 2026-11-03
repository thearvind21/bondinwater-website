"use client";

import React, { useState } from "react";
import { LotusEmblem, WaterLilyDivider } from "./BotanicalDecorators";
import { Compass, Waves, Layers, Clock, ArrowDown, Sparkles, Check } from "lucide-react";

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
}

const SPACES: SpaceType[] = [
  { id: "penthouse", name: "Penthouse / Luxury Residence", subtitle: "Indoor architectural feature" },
  { id: "villa", name: "Villa Garden / Courtyard", subtitle: "Outdoor natural retreat" },
  { id: "corporate", name: "Corporate Headquarters", subtitle: "Executive lobby or atrium" },
  { id: "hospitality", name: "Luxury Hotel / Resort", subtitle: "High-impact guest experience" },
  { id: "sanctuary", name: "Zoo / Zoological Sanctuary", subtitle: "Public ethological enclosure" },
];

const HABITATS: HabitatType[] = [
  {
    id: "aquarium",
    name: "Custom Acrylic Aquarium",
    defaultCapacity: "1,500 – 6,000 Litres",
    turnoverRate: "4x to 6x tank volume/hour",
    lssType: "CFD-optimized downflow sump, UV, fluidized media",
    timeline: "6 – 10 Weeks"
  },
  {
    id: "koi-pond",
    name: "Natural Koi Pond & Waterfall",
    defaultCapacity: "15,000 – 45,000 Litres",
    turnoverRate: "1x total pond volume/hour",
    lssType: "Aerated bottom drain, vortex mechanical & bog wetland",
    timeline: "8 – 14 Weeks"
  },
  {
    id: "paludarium",
    name: "Waterfall & Tropical Paludarium",
    defaultCapacity: "800 – 2,500 Litres",
    turnoverRate: "8x aquatic volume/hour + ultrasonic misting",
    lssType: "Bioactive plenum, moss drip irrigation & RO top-off",
    timeline: "5 – 8 Weeks"
  },
  {
    id: "enclosure",
    name: "Custom Animal Enclosure / Aviary",
    defaultCapacity: "Species calibrated volume",
    turnoverRate: "12 air exchanges/hour (climate controlled)",
    lssType: "Substrate bioactive recycling, PID thermal & UVB array",
    timeline: "7 – 12 Weeks"
  },
  {
    id: "acrylic-pool",
    name: "Structural Acrylic Swimming Pool",
    defaultCapacity: "50,000 – 120,000 Litres",
    turnoverRate: "Turnover per IS / FINA luxury standards",
    lssType: "Cast PMMA structural rebate, commercial sand & salt ozone",
    timeline: "10 – 16 Weeks"
  }
];

interface Props {
  onSelectConfig?: (configText: string) => void;
}

export function InteractiveHabitatEstimator({ onSelectConfig }: Props) {
  const [selectedSpace, setSelectedSpace] = useState<string>("penthouse");
  const [selectedHabitat, setSelectedHabitat] = useState<string>("aquarium");
  const [copied, setCopied] = useState(false);

  const currentHabitat = HABITATS.find((h) => h.id === selectedHabitat) || HABITATS[0];
  const currentSpace = SPACES.find((s) => s.id === selectedSpace) || SPACES[0];

  const handleApplyToEnquiry = () => {
    const summary = `Space: ${currentSpace.name} | Habitat: ${currentHabitat.name} (Estimated Capacity: ${currentHabitat.defaultCapacity}, Filtration: ${currentHabitat.lssType})`;
    if (onSelectConfig) {
      onSelectConfig(summary);
    }
    
    // Also set value directly on textarea in contact section if present
    const textarea = document.getElementById("projectDescription") as HTMLTextAreaElement;
    if (textarea) {
      textarea.value = `I am interested in exploring a ${currentHabitat.name} for our ${currentSpace.name}.\n\nEstimated Requirements:\n- Target Capacity: ${currentHabitat.defaultCapacity}\n- Desired Timeline: ${currentHabitat.timeline}\n- Please provide initial spatial feasibility and concept direction.`;
    }

    const typeSelect = document.getElementById("projectType") as HTMLSelectElement;
    if (typeSelect) {
      typeSelect.value = currentHabitat.name;
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Scroll to contact form
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#E8E2D5]/35 border-b border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Interactive Spatial Planner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            Configure Your <span className="italic font-light text-[#344B38]">Living Habitat.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base text-[#292C25]/80 font-sans font-light leading-relaxed max-w-xl mx-auto pt-2">
            Select your architectural environment and preferred living style to view tailored engineering recommendations.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-[#E8E2D5] shadow-xl p-6 sm:p-10 space-y-10">
          
          {/* Step 1: Space Setting */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#85866A]">
                Step 1: Select Space Environment
              </span>
              <span className="text-xs text-[#344B38] font-medium font-serif italic">
                {currentSpace.name}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {SPACES.map((space) => {
                const isSelected = selectedSpace === space.id;
                return (
                  <button
                    key={space.id}
                    onClick={() => setSelectedSpace(space.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#344B38] text-[#F5F2E9] border-[#344B38] shadow-sm"
                        : "bg-[#F5F2E9]/60 hover:bg-[#F5F2E9] text-[#292C25] border-[#E8E2D5]"
                    }`}
                  >
                    <p className={`text-xs font-semibold ${isSelected ? "text-[#F5F2E9]" : "text-[#292C25]"}`}>
                      {space.name}
                    </p>
                    <p className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? "text-[#C9A781]" : "text-[#85866A]"}`}>
                      {space.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Habitat Discipline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#85866A]">
                Step 2: Choose Living Habitat Discipline
              </span>
              <span className="text-xs text-[#B18A60] font-medium font-serif italic">
                {currentHabitat.name}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {HABITATS.map((hab) => {
                const isSelected = selectedHabitat === hab.id;
                return (
                  <button
                    key={hab.id}
                    onClick={() => setSelectedHabitat(hab.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#344B38] text-[#F5F2E9] border-[#344B38] shadow-sm"
                        : "bg-[#F5F2E9]/60 hover:bg-[#F5F2E9] text-[#292C25] border-[#E8E2D5]"
                    }`}
                  >
                    <p className={`text-xs font-semibold ${isSelected ? "text-[#F5F2E9]" : "text-[#292C25]"}`}>
                      {hab.name}
                    </p>
                    <p className={`text-[10px] mt-1 ${isSelected ? "text-[#C9A781]" : "text-[#85866A]"}`}>
                      Est. {hab.timeline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technical Output Spec Matrix */}
          <div className="p-6 rounded-xl bg-[#F5F2E9] border border-[#E8E2D5] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#344B38]">
                <Sparkles className="w-4 h-4 text-[#B18A60]" />
                <span>Recommended Engineering Specifications</span>
              </div>
              <span className="text-[10px] uppercase font-mono text-[#85866A]">
                BondInWater Benchmark
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] uppercase text-[#85866A] font-semibold">Typical Water Volume</p>
                <p className="text-sm font-semibold text-[#292C25]">{currentHabitat.defaultCapacity}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] uppercase text-[#85866A] font-semibold">Hydraulic Turnover</p>
                <p className="text-sm font-semibold text-[#344B38]">{currentHabitat.turnoverRate}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] uppercase text-[#85866A] font-semibold">Estimated Turnkey Timeline</p>
                <p className="text-sm font-semibold text-[#B18A60]">{currentHabitat.timeline}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] uppercase text-[#85866A] font-semibold">Life Support Standard</p>
                <p className="text-xs font-medium text-[#292C25] line-clamp-2">{currentHabitat.lssType}</p>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-3 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#85866A]">
                Ready to review floor loading and architectural CAD with our engineering team?
              </p>
              <button
                onClick={handleApplyToEnquiry}
                className="inline-flex items-center gap-2 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Applied to Form</span>
                  </>
                ) : (
                  <>
                    <span>Transfer to Project Enquiry</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#B18A60]" />
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
