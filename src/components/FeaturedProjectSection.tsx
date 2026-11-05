import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjectSection() {
  return (
    <section id="featured-project" className="bg-[#1F4338] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Large Image with Elegant Arched / Rounded Edge (6.5 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-r-3xl sm:rounded-r-[48px] rounded-l-lg shadow-2xl bg-[#142C25] border-y border-l border-white/10">
              <Image
                src="/images/pdf_images/p20_img1.png"
                alt="Walkthrough Oceanarium Tunnel from BondInWater Company Profile"
                fill
                className="object-cover reveal-zoom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 bg-[#1F4338]/90 text-white text-[10px] font-sans font-medium px-2.5 py-1 rounded-[3px] border border-[#8CA477]/30">
                PROFILE PAGE 20 &bull; THE GIGANTIC HABITATS
              </div>
            </div>
          </div>

          {/* Right Column: Information Panel & Outlined CTA (5.5 cols) */}
          <div className="lg:col-span-5 space-y-6 relative">
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold block">
                FEATURED PROJECT
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-[1.12] text-white tracking-[-0.01em]">
                The Oceanarium
              </h3>
            </div>

            <p className="text-sm sm:text-base text-white/85 font-sans font-light leading-relaxed max-w-md">
              A large-scale, immersive aquatic environment combining animal welfare, architectural design and advanced life-support systems.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white/10 hover:border-white text-sm sm:text-base font-sans font-medium px-6 py-3 rounded-[4px] transition-colors"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Subtle Contour Lines in the Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-[420px] h-[260px] pointer-events-none opacity-20">
        <svg
          viewBox="0 0 400 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 40 240 C 140 180, 260 220, 400 120"
            stroke="#8CA477"
            strokeWidth="1.2"
          />
          <path
            d="M 0 210 C 120 150, 240 190, 400 90"
            stroke="#8CA477"
            strokeWidth="1.2"
          />
          <path
            d="M 60 240 C 160 140, 280 170, 400 60"
            stroke="#4F8278"
            strokeWidth="1"
          />
          <path
            d="M 120 240 C 200 120, 310 150, 400 30"
            stroke="#8CA477"
            strokeWidth="0.8"
          />
          <path
            d="M 180 240 C 240 110, 340 130, 400 10"
            stroke="#4F8278"
            strokeWidth="0.8"
          />
        </svg>
      </div>
    </section>
  );
}