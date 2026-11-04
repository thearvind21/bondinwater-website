import React from "react";
import Image from "next/image";
import { EditorialBadge } from "./EditorialComponents";
import { ShieldCheck, Bird, Sparkles, HeartHandshake } from "lucide-react";

export function AnimalNatureStorytelling() {
  const animalDisciplines = [
    {
      id: "reptiles",
      title: "Reptile Habitats & Interactions",
      profileSource: "Profile Page 27",
      description:
        "Designing tailored microclimates with multi-stage PID thermal basking, calibrated UVB arrays, and bioactive substrate recycling for gentle reptiles, tortoises, and friendly snakes.",
      image: "/images/pdf_images/p27_img2.png",
      tag: "Ethological Welfare",
    },
    {
      id: "aviaries",
      title: "Aviary Engineering & Mesh Canopies",
      profileSource: "Profile Page 28",
      description:
        "Architectural aviary engineering utilizing high-tensile stainless steel aviary mesh, vast free-flight canopies, predator barriers, and species-specific native canopy foliage.",
      image: "/images/pdf_images/p28_img2.png",
      tag: "Avian Architecture",
    },
    {
      id: "petting-zoos",
      title: "Mini Petting Zoos for Resorts & Public Spaces",
      profileSource: "Profile Page 26",
      description:
        "Curating engaging, safe interactive animal habitats for resorts, luxury hotels, and public attractions—designed for low animal stress, biosecurity, and positive educational contact.",
      image: "/images/pdf_images/p26_img2.png",
      tag: "Public Interaction",
    },
    {
      id: "breeding",
      title: "Captive Breeding & Conservation Biomes",
      profileSource: "Profile Page 29",
      description:
        "Creating specialized biotope breeding habitats with strict biological filtration, photoperiod simulation, and humidity gradients to support rare and exotic species.",
      image: "/images/pdf_images/p29_img3.png",
      tag: "Conservation Science",
    },
  ];

  return (
    <section id="nature-story" className="py-24 lg:py-32 bg-[#304A38] text-[#F4F4EF] relative border-b border-[#43644E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-14 lg:mb-16">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="sage">
              ETHOLOGY &bull; ANIMAL APPRECIATION
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#AEBBA4]">
              SPECIES WELFARE &bull; CONSERVATION CREED
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#F4F4EF] leading-[0.95]">
            Engineering Living Habitats with Deep Zoological Empathy.
          </h2>

          <p className="text-base sm:text-lg text-[#E2E4DA] font-sans font-light leading-relaxed max-w-3xl">
            At BondInWater, animal wellbeing is never an afterthought—it is the foundational starting point for every architectural line we draw and every life support system we plumb.
          </p>
        </div>

        {/* Highlight Callout: Documented Company Statement from Page 2 */}
        <div className="mb-16 p-8 sm:p-10 bg-[#1D382B] border-l-4 border-l-[#A87952] border border-[#43644E] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#AEBBA4] font-bold block">
                DOCUMENTED COMPANY CREED &bull; PAGE 2
              </span>
              <p className="text-xl sm:text-2xl font-display uppercase tracking-tight text-[#F4F4EF] leading-snug">
                &ldquo;We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation.&rdquo;
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right border-t lg:border-t-0 lg:border-l border-[#43644E] pt-4 lg:pt-0 lg:pl-6 text-xs font-mono text-[#E2E4DA] space-y-1">
              <div className="font-bold text-[#F4F4EF]">BondInWater Ethos</div>
              <div className="text-[#AEBBA4]">Biologists &bull; Architects &bull; Engineers</div>
              <div>Single-source biological accountability</div>
            </div>
          </div>
        </div>

        {/* 4 Animal & Habitat Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animalDisciplines.map((item) => (
            <div
              key={item.id}
              className="bg-[#1D382B] border border-[#43644E] flex flex-col justify-between hover:border-[#AEBBA4] transition-all duration-200"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#202723] border-b border-[#43644E]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#304A38]/90 text-[#F4F4EF] px-2 py-0.5 text-[9px] font-mono border border-[#43644E]">
                    {item.profileSource}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#AEBBA4] font-bold">
                    {item.tag}
                  </div>

                  <h3 className="text-base font-display uppercase tracking-tight text-[#F4F4EF] font-bold">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#E2E4DA] font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="#expertise"
                  className="text-xs font-mono text-[#AEBBA4] hover:text-[#F4F4EF] inline-flex items-center gap-1.5 transition-colors pt-3 border-t border-[#43644E] w-full"
                >
                  <span>Explore Division Details &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
