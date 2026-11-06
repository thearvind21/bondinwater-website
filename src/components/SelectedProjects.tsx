import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function SelectedProjects() {
  const selectedItems = [
    {
      id: "oceanarium-tunnel-display",
      title: "Walkthrough Oceanarium Viewing Display",
      category: "Aquariums & Oceanariums",
      image: "/images/pdf_images/p20_img1.png",
      description: "Large-scale curved optical acrylic marine exhibit featuring panoramic 180-degree underwater walkthrough viewing and multi-species life support systems.",
    },
    {
      id: "public-aquarium-viewing-hall",
      title: "Public Oceanarium Viewing Hall & Masterplan",
      category: "Architectural Planning & Design",
      image: "/images/pdf_images/p8_img1.png",
      description: "Architectural visitor circulation and viewing geometry design for public aquatic exhibitions, integrating structural acrylic and atmospheric lighting.",
    },
    {
      id: "rainforest-vivarium-canopy",
      title: "Self-Sustaining Living Rainforest Vivarium",
      category: "Vivariums & Natural Habitats",
      image: "/images/pdf_images/p18_img3.png",
      description: "Bioactive terrestrial biotope with automated ultrasonic misting, microclimate regulation, and live flora supporting delicate amphibians.",
    },
    {
      id: "multispecies-walkthrough-aviary",
      title: "Multispecies Walkthrough Aviary & Flight Enclosure",
      category: "Aviaries & Flight Mesh",
      image: "/images/pdf_images/p28_img2.png",
      description: "Spacious environmental flight enclosure engineered with high-tensile stainless mesh to provide physical freedom and mental enrichment.",
    },
  ];

  return (
    <section id="selected-projects" className="py-20 lg:py-28 bg-white text-[#27302B] border-b border-[#1F4338]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-bold block">
              PORTFOLIO HIGHLIGHTS &bull; AUTHENTIC WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12]">
              Selected Living Habitats &amp; Aquatic Installations
            </h2>
            <p className="text-sm sm:text-base text-[#27302B]/80 font-sans font-light leading-relaxed">
              A curated selection of verified public oceanariums, bio-authentic vivariums, and zoological habitats designed and engineered by BondInWater.
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-6 py-3 rounded-[4px] font-sans text-xs sm:text-sm font-medium transition-colors shadow-xs"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Selected Projects Grid (2x2 Layout with Asymmetric Editorial Balance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {selectedItems.map((item, idx) => (
            <div
              key={item.id}
              className="group bg-[#E9EFE7]/30 rounded-lg border border-[#1F4338]/10 overflow-hidden flex flex-col justify-between hover:border-[#4F8278] transition-all hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#1F4338] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#1F4338]/90 text-white text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1F4338] leading-snug group-hover:text-[#4F8278] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#27302B]/75 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-[#1F4338]/10 flex items-center justify-between">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#B47750] group-hover:text-[#1F4338] transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-[#27302B]/40">
                  REF-0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#B47750] text-white px-6 py-3 rounded-[4px] font-sans text-xs font-medium w-full justify-center"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
