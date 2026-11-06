import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COMPANY_PHILOSOPHY_DATA, WHY_CHOOSE_US, TRUST_COLLABORATORS } from "@/data/bondinwater-data";
import { ArrowUpRight, ArrowRight, HeartHandshake, Award, ShieldCheck, Users2, Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us & Heritage — BondInWater",
  description: "Learn about BondInWater's 30-year architectural heritage, ethical conservation commitment, and multidisciplinary approach to habitat engineering.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#1F4338] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
                ABOUT BONDINWATER &bull; HERITAGE &amp; ETHOS
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] mb-6">
              Where Nature, Animals and <br />
              <span className="italic font-normal text-[#8CA477]">Engineering Meet</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              Backed by over three decades of architectural experience, we combine biological understanding, structural ingenuity, and master craftsmanship to create self-sustaining ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Company Philosophy & Conservation Creed */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold">
                OUR CORE CREED
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1F4338] leading-tight">
              &ldquo;We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation.&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-light leading-relaxed">
              {COMPANY_PHILOSOPHY_DATA.evolutionNarrative}
            </p>
            <p className="text-sm sm:text-base text-[#27302B]/80 font-sans font-light leading-relaxed">
              At BondInWater, animal wellbeing is never secondary to aesthetics. Every habitat begins by studying the biome—climate, geography, flora, and fauna—ensuring that physical geometry, water flow dynamics, filtration biology, and lighting spectrums cater to the specific species.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1F4338] shadow-md border border-[#1F4338]/10">
            <Image
              src="/images/pdf_images/p12_img1.png"
              alt="Care for animals and nature conservation at BondInWater"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 30-Year Architectural Heritage */}
      <section className="py-16 bg-white border-y border-[#1F4338]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-square rounded-lg overflow-hidden bg-[#1F4338] order-2 lg:order-1">
              <Image
                src="/images/pdf_images/p7_img1.png"
                alt="Architect hand drafting CAD schematics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                THREE DECADES OF MASTERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1F4338]">
                Architectural Leadership &amp; Engineering Precision
              </h2>
              <p className="text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
                {COMPANY_PHILOSOPHY_DATA.architecturalHeritage}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-[#E9EFE7]/50 border border-[#1F4338]/10">
                  <span className="text-2xl font-serif font-bold text-[#1F4338] block mb-1">30+ Years</span>
                  <span className="text-xs font-sans text-[#27302B]/70">Documented architectural and engineering heritage</span>
                </div>
                <div className="p-4 rounded-lg bg-[#E9EFE7]/50 border border-[#1F4338]/10">
                  <span className="text-2xl font-serif font-bold text-[#1F4338] block mb-1">100% Turnkey</span>
                  <span className="text-xs font-sans text-[#27302B]/70">End-to-end design, civil rigging, and maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Team Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block mb-3">
            COLLABORATIVE EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F4338] mb-4">
            Our Multidisciplinary Team
          </h2>
          <p className="text-base text-[#27302B]/85 font-sans font-light leading-relaxed">
            {COMPANY_PHILOSOPHY_DATA.multidisciplinaryTeam}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-[#1F4338]/10 shadow-xs space-y-4">
            <Users2 className="w-8 h-8 text-[#4F8278]" />
            <h3 className="text-xl font-serif text-[#1F4338]">Biologists &amp; Aquarists</h3>
            <p className="text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
              Specialists in aquatic biology, disease prevention, species compatibility, and ethical captive breeding protocols with zero impact on wild populations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#1F4338]/10 shadow-xs space-y-4">
            <Compass className="w-8 h-8 text-[#4F8278]" />
            <h3 className="text-xl font-serif text-[#1F4338]">Architects &amp; Engineers</h3>
            <p className="text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
              Seasoned architectural planners translating concepts into construction CAD, Computational Fluid Dynamics (CFD) water modeling, and MEP layouts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#1F4338]/10 shadow-xs space-y-4">
            <Sparkles className="w-8 h-8 text-[#4F8278]" />
            <h3 className="text-xl font-serif text-[#1F4338]">Master Acrylic Fabricators</h3>
            <p className="text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
              Artisans skilled in thermoforming optical cast PMMA acrylic, monolithic bonding, and sculpting hyper-realistic GFRC rockwork and FRP theming.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose BondInWater Differentiators */}
      <section className="py-16 bg-[#1F4338] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8CA477] font-semibold block mb-3">
              THE BONDINWATER DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal">
              Why Architectural Studios &amp; Institutions Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-lg space-y-3">
                <span className="text-xs font-mono font-bold text-[#8CA477] block">0{idx + 1}</span>
                <h3 className="text-lg font-serif text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm font-sans font-light text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigational Links to Process and Services */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-[#1F4338]/10 shadow-xs flex flex-col justify-between">
            <div className="space-y-3 mb-6">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                DELIVERY METHODOLOGY
              </span>
              <h3 className="text-2xl font-serif text-[#1F4338]">
                The 8-Stage Turnkey Process
              </h3>
              <p className="text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
                Explore how we guide projects from initial Feasibility and CAD Planning through Crane Rigging, Commissioning, and Ongoing Operation.
              </p>
            </div>
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-[#B47750] hover:text-[#1F4338] transition-colors"
            >
              <span>Explore The 8 Stages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#1F4338]/10 shadow-xs flex flex-col justify-between">
            <div className="space-y-3 mb-6">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                ENGINEERING CAPABILITIES
              </span>
              <h3 className="text-2xl font-serif text-[#1F4338]">
                Twelve Documented Disciplines
              </h3>
              <p className="text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
                Review our complete directory of services spanning conceptual sketches, acrylic pools, zoo masterplanning, and automated telemetry.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-[#B47750] hover:text-[#1F4338] transition-colors"
            >
              <span>View All 12 Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
