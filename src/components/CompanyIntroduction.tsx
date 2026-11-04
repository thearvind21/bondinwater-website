import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
import { ArrowUpRight, Compass, ShieldCheck, Cpu, Trees, Waves, Hammer, Activity } from "lucide-react";

export function CompanyIntroduction() {
  const capabilities = [
    {
      id: "conceptualisation",
      number: "01",
      title: "Conceptualisation",
      subtitle: "Think . Sketch . Repeat",
      desc: "Feasibility audits, biome suitability evaluations, and iterative hand-drawn conceptual development.",
      image: "/images/pdf_images/p5_img1.png",
      source: "Profile Page 5",
      icon: Compass,
    },
    {
      id: "architectural-planning",
      number: "02",
      title: "Architectural Planning",
      subtitle: "Over 30 Years Experience",
      desc: "CAD construction blueprints, zoo masterplanning, MEP hydraulic calculations, and 3D walkthrough videos.",
      image: "/images/pdf_images/p7_img1.png",
      source: "Profile Page 7–8",
      icon: Trees,
    },
    {
      id: "aquarium-design",
      number: "03",
      title: "Aquarium Design",
      subtitle: "Freshwater, Marine & Oceanariums",
      desc: "Bespoke residential reefs, public oceanarium displays, and natural koi ponds with self-sustaining bog filtration.",
      image: "/images/bondinwater/ef9742_00d0a8d52ba24f73a1cc51b4e2821b92.jpg",
      source: "Profile Page 19–24",
      icon: Waves,
    },
    {
      id: "habitat-engineering",
      number: "04",
      title: "Animal Habitat Engineering",
      subtitle: "Ethological Animal Welfare",
      desc: "Bioactive vivariums, high-tensile stainless aviary flight canopies, and resort mini petting zoos.",
      image: "/images/pdf_images/p26_img2.png",
      source: "Profile Page 26–28",
      icon: ShieldCheck,
    },
    {
      id: "acrylic-craftsmanship",
      number: "05",
      title: "Acrylic Craftsmanship",
      subtitle: "20mm to 300mm PMMA Sheets",
      desc: "Precision thermoforming, crystal-clear swimming pool walls, and molecular chemical bonding with 20-year UV warranties.",
      image: "/images/pdf_images/p17_img1.png",
      source: "Profile Page 14–17",
      icon: Hammer,
    },
    {
      id: "turnkey-execution",
      number: "06",
      title: "Turnkey Execution",
      subtitle: "Single-Source Contracting",
      desc: "General contracting managing all 8 lifecycle stages from procurement and heavy transport to commissioning.",
      image: "/images/pdf_images/p11_img1.png",
      source: "Profile Page 11",
      icon: Cpu,
    },
    {
      id: "operation-maintenance",
      number: "07",
      title: "Operation & Maintenance",
      subtitle: "Trained Biologists & SOP Care",
      desc: "Routine laboratory-grade water testing, biological nitrogen cycle balancing, and preventative maintenance.",
      image: "/images/pdf_images/p12_img1.png",
      source: "Profile Page 12–13",
      icon: Activity,
    },
  ];

  return (
    <section id="introduction" className="py-24 lg:py-32 bg-[#F4F4EF] text-[#202723] border-b border-[#E2E4DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              PRACTICE &bull; BESPOKE CAPABILITIES
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#647368]">
              END-TO-END NATURE ARCHITECTURE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.95]">
            Where Nature, Design and Engineering Come Together.
          </h2>

          <p className="text-base sm:text-lg text-[#3A473E] font-sans font-normal leading-relaxed max-w-3xl">
            BondInWater bridges the gap between biological conservation and precision construction. We take singular accountability for the entire journey—from early conceptual sketch to decades of biological operation.
          </p>
        </div>

        {/* 7 Capabilities Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              className={`p-6 bg-white border border-[#E2E4DA] flex flex-col justify-between hover:border-[#1D382B] transition-all duration-200 shadow-sm ${
                idx === 2 ? "md:col-span-2 lg:col-span-1 xl:col-span-2" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E2E4DA] border border-[#E2E4DA]">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#1D382B]/90 text-[#F4F4EF] px-2 py-0.5 text-[9px] font-mono border border-[#2D4C3C]">
                    {cap.source}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#A87952] font-bold">[{cap.number}] SCOPE</span>
                    <span className="text-[#647368] text-[10px]">{cap.subtitle}</span>
                  </div>

                  <h3 className="text-xl font-display uppercase tracking-tight text-[#1D382B] font-bold">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-[#3A473E] font-sans font-normal leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E4DA] flex items-center justify-between text-xs font-mono text-[#1D382B] font-bold">
                <a href="#expertise" className="hover:text-[#60775B] inline-flex items-center gap-1.5 transition-colors">
                  <span>Explore Division</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A87952]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
