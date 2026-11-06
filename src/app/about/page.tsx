import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COMPANY_PHILOSOPHY_DATA } from "@/data/bondinwater-data";
import { ArrowUpRight, ArrowRight, ShieldCheck, Heart, Compass, Users2 } from "lucide-react";

export const metadata = {
  title: "About Us & Heritage — BondInWater",
  description: "Learn about BondInWater's architectural heritage, ethical conservation commitment, biome understanding, and multidisciplinary approach to habitat engineering.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Hero Header with Strong Opening Image Composition */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#1F4338] text-white relative overflow-hidden border-b border-[#8CA477]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold block">
                ABOUT BONDINWATER &bull; ETHOS &amp; HERITAGE
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] text-white">
                Where Nature, Animals and <br />
                <span className="italic font-normal text-[#8CA477]">Engineering Meet</span>
              </h1>

              <p className="text-sm sm:text-base text-white/85 font-sans font-light leading-relaxed max-w-xl">
                We bridge the gap between creative visual architecture and living biological health, recreating ecosystems for all creatures on our planet.
              </p>
            </div>

            {/* Right: Strong Opening Image (p12_img1.png — Animal Care & Conservation) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#142C25] shadow-lg border border-white/15">
                <Image
                  src="/images/pdf_images/p12_img1.png"
                  alt="BondInWater ethical stewardship and animal welfare"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338]/90 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8CA477] font-bold">
                    ETHICAL CONSERVATION CREED
                  </span>
                  <p className="text-xs text-white/90 font-sans italic mt-1">
                    &ldquo;{COMPANY_PHILOSOPHY_DATA.coreCreed}&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1: Evolution Narrative — From Hobbyists and Learners to Creators */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
              OUR ORIGIN &amp; GROWTH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F4338]">
              From Hobbyists and Learners to Creators
            </h2>
            <p className="text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
              {COMPANY_PHILOSOPHY_DATA.evolutionNarrative}
            </p>
            <p className="text-sm text-[#27302B]/75 font-sans font-light leading-relaxed">
              Every enclosure, public aquarium, and living biotope we design is rooted in this authentic affection for the natural world. Animal wellbeing is never an afterthought&mdash;it governs our spatial geometry, filtration flow rates, and lighting spectra.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] rounded-lg overflow-hidden bg-[#1F4338] shadow-xs border border-[#1F4338]/10">
            <Image
              src="/images/pdf_images/p18_img3.png"
              alt="Living rainforest vivarium ecosystem"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Biome Understanding & Architectural Team Experience */}
      <section className="py-16 bg-white border-y border-[#1F4338]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[16/10] rounded-lg overflow-hidden bg-[#1F4338]">
              <Image
                src="/images/pdf_images/p7_img1.png"
                alt="Architectural team drafting CAD schematics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                ARCHITECTURAL TEAM MASTERY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F4338]">
                Three Decades of Architectural Team Experience
              </h2>
              <p className="text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
                {COMPANY_PHILOSOPHY_DATA.architecturalHeritage}
              </p>
              <div className="p-4 rounded-lg bg-[#E9EFE7]/50 border border-[#1F4338]/10 text-xs sm:text-sm font-sans text-[#1F4338]">
                <strong>Biome Understanding:</strong> {COMPANY_PHILOSOPHY_DATA.biomeSignificance}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Multidisciplinary Capabilities */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
            COLLABORATIVE SCIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
            Multidisciplinary Team Structure
          </h2>
          <p className="text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
            {COMPANY_PHILOSOPHY_DATA.multidisciplinaryTeam}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#1F4338]/10 shadow-xs space-y-3">
            <Heart className="w-6 h-6 text-[#4F8278]" />
            <h3 className="text-lg font-serif text-[#1F4338]">Biologists &amp; Aquarists</h3>
            <p className="text-xs sm:text-sm font-sans font-light text-[#27302B]/75 leading-relaxed">
              Specialized knowledge of aquatic and terrestrial ecosystems, informing species selection, water quality parameters, and disease prevention.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#1F4338]/10 shadow-xs space-y-3">
            <Compass className="w-6 h-6 text-[#4F8278]" />
            <h3 className="text-lg font-serif text-[#1F4338]">Architects &amp; Masterplanners</h3>
            <p className="text-xs sm:text-sm font-sans font-light text-[#27302B]/75 leading-relaxed">
              Decades of experience in spatial layouts, construction CAD, Computational Fluid Dynamics (CFD), and MEP/HVAC life support engineering.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#1F4338]/10 shadow-xs space-y-3">
            <Users2 className="w-6 h-6 text-[#4F8278]" />
            <h3 className="text-lg font-serif text-[#1F4338]">Master Acrylic Fabricators</h3>
            <p className="text-xs sm:text-sm font-sans font-light text-[#27302B]/75 leading-relaxed">
              Artisans skilled in thermoforming cast PMMA acrylic (20mm to 300mm), monolithic chemical bonding, and hyper-realistic GFRC geological sculpting.
            </p>
          </div>
        </div>

        {/* Quick Nav Row */}
        <div className="pt-6 border-t border-[#1F4338]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/services"
            className="text-xs sm:text-sm font-sans font-semibold text-[#1F4338] hover:text-[#4F8278] inline-flex items-center gap-1.5"
          >
            <span>Explore The 12 Documented Capabilities</span>
            <ArrowRight className="w-4 h-4 text-[#B47750]" />
          </Link>
          <Link
            href="/process"
            className="text-xs sm:text-sm font-sans font-semibold text-[#1F4338] hover:text-[#4F8278] inline-flex items-center gap-1.5"
          >
            <span>Review The 8-Stage Turnkey Process</span>
            <ArrowRight className="w-4 h-4 text-[#B47750]" />
          </Link>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="bg-[#1F4338] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl font-serif">
            Partner With Our Architectural &amp; Biological Team
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans font-light max-w-xl mx-auto">
            From preliminary concept viability to long-term water parameter testing and habitat maintenance, BondInWater provides single-source accountability.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-7 py-3.5 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-xs"
            >
              <span>Initiate Feasibility Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
