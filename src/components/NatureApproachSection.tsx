import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function NatureApproachSection() {
  const categoryCards = [
    {
      id: "aquariums",
      title: "Aquariums",
      image: "/images/pdf_images/p19_img2.png",
      pageRef: "PDF Page 19",
      href: "#expertise",
    },
    {
      id: "vivariums",
      title: "Vivariums & Natural Habitats",
      image: "/images/pdf_images/p18_img3.png",
      pageRef: "PDF Page 18",
      href: "#expertise",
    },
    {
      id: "petting-zoo",
      title: "Petting Zoo & Animal Experiences",
      image: "/images/pdf_images/p26_img1.png",
      pageRef: "PDF Page 26",
      href: "#expertise",
    },
    {
      id: "ponds",
      title: "Nature Ponds",
      image: "/images/pdf_images/p24_img1.png",
      pageRef: "PDF Page 24",
      href: "#expertise",
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#27302B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Copy & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-semibold block">
                OUR PHILOSOPHY &bull; CONSERVATION CREED
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-[1.12] text-[#1F4338] tracking-[-0.01em]">
                Where Nature, <br />
                Animals and <br className="hidden sm:inline" />
                Engineering Meet
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed max-w-md">
              We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation. A journey that originates from the inception of your dreams shaped by our craftsmanship and delivered to the customer&apos;s delight.
            </p>

            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-2 bg-[#B47750] text-white hover:bg-[#9F6542] text-sm sm:text-base font-sans font-medium px-6 py-3.5 rounded-[4px] transition-colors shadow-sm"
              >
                <span>About BondInWater</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Four Photographic Service Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {categoryCards.map((card) => (
                <a
                  key={card.id}
                  href={card.href}
                  className="group relative aspect-[3/5] sm:aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-[#E9EFE7] flex flex-col justify-end p-3.5 sm:p-4"
                >
                  {/* Photo Frame */}
                  <Image
                    src={card.image}
                    alt={`${card.title} - BondInWater Company Profile ${card.pageRef}`}
                    fill
                    className="object-cover reveal-zoom"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />

                  {/* Gradient Overlay for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:from-black/95" />

                  {/* Card Title & Arrow */}
                  <div className="relative z-10 flex items-end justify-between gap-1 w-full text-white">
                    <span className="text-xs sm:text-sm font-sans font-medium leading-snug line-clamp-2">
                      {card.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}