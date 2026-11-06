import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICE_FAMILIES, getFamilyServices } from "@/data/service-families";
import { COMPANY_DIVISIONS } from "@/data/bondinwater-data";

export const metadata = {
  title: "Our Services — BondInWater",
  description: "Explore the twelve official capability categories of BondInWater across five distinct service families: from visionary design to turnkey habitat engineering.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Part 5A: Compact Balanced Two-Column Introduction */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#1F4338] text-white relative overflow-hidden border-b border-[#8CA477]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Section Label, Heading, Description & Quick Nav (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold block">
                BONDINWATER &bull; CAPABILITY DIRECTORY
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] text-white">
                Our Services
              </h1>

              <p className="text-sm sm:text-base text-white/85 font-sans font-light leading-relaxed max-w-xl">
                Organized into five service families from our verified 35-page company profile. Every discipline unites biological conservation, architectural planning, and turnkey structural engineering.
              </p>

              {/* Quick Jump Category Pills */}
              <div className="pt-3 flex flex-wrap gap-2">
                {SERVICE_FAMILIES.map((fam) => (
                  <a
                    key={fam.id}
                    href={`#${fam.id}`}
                    className="text-xs font-sans px-3 py-1.5 rounded-[4px] bg-white/10 hover:bg-[#8CA477] hover:text-[#1F4338] text-white/90 transition-colors"
                  >
                    {fam.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Genuine BondInWater Service Photo Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#142C25] shadow-lg border border-white/15">
                <Image
                  src="/images/pdf_images/p7_img1.png"
                  alt="Architectural drafting and habitat design at BondInWater"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338]/85 via-transparent to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8CA477] font-bold">
                    DOCUMENTED ARCHITECTURAL PROCESS
                  </span>
                  <span className="text-xs text-white/90 font-sans italic">
                    Think &bull; Sketch &bull; Repeat &bull; Construct
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Part 5B: Five Service-Family Showcases */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[#1F4338]/15 pb-4">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block mb-1">
            STRUCTURED ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
            Five Disciplinary Service Families
          </h2>
        </div>

        <div className="space-y-12">
          {SERVICE_FAMILIES.map((family) => {
            const memberServices = getFamilyServices(family);
            return (
              <div
                key={family.id}
                id={family.id}
                className="scroll-mt-28 bg-white rounded-lg border border-[#1F4338]/10 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Family Visual Banner (4 cols) */}
                <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full bg-[#1F4338]">
                  <Image
                    src={family.image}
                    alt={family.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#1F4338]/90 text-[#8CA477] text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-xs">
                    {family.code}
                  </div>
                </div>

                {/* Family Details & Included Services (8 cols) */}
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1F4338] mb-1">
                      {family.name}
                    </h3>
                    <p className="text-xs font-sans text-[#B47750] font-medium mb-3">
                      {family.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#27302B]/80 font-sans font-light leading-relaxed mb-4">
                      {family.summary}
                    </p>

                    <div className="pt-3 border-t border-[#1F4338]/10">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#4F8278] block mb-2">
                        Member Disciplines:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {memberServices.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/services/${svc.id}`}
                            className="p-2.5 rounded bg-[#E9EFE7]/40 hover:bg-[#1F4338] hover:text-white transition-colors group flex items-center justify-between text-xs font-sans"
                          >
                            <span className="flex items-center gap-2 truncate">
                              <span className="font-mono font-bold text-[#4F8278] group-hover:text-[#8CA477]">
                                [{svc.letter}]
                              </span>
                              <span className="truncate">{svc.title}</span>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#B47750] group-hover:text-white shrink-0 ml-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-right">
                    <a
                      href="#all-twelve"
                      className="text-[11px] font-sans font-semibold text-[#4F8278] hover:text-[#1F4338]"
                    >
                      View in full 12-category list &darr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Part 5C: All Twelve Original Service Categories in Exact Order */}
      <section id="all-twelve" className="py-16 bg-white border-y border-[#1F4338]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1F4338]/10 pb-4">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block mb-1">
                COMPLETE 12 CATEGORIES &bull; COMPANY PROFILE ORDER
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
                All Twelve Documented Capabilities
              </h2>
            </div>
            <span className="text-xs font-sans text-[#27302B]/60">
              Preserving original profile order 01 through 12
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMPANY_DIVISIONS.map((svc) => (
              <div
                key={svc.id}
                className="bg-[#E9EFE7]/30 rounded-lg border border-[#1F4338]/10 p-5 flex flex-col justify-between hover:border-[#4F8278] transition-all hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-white bg-[#1F4338] px-2 py-0.5 rounded">
                      {svc.letter}
                    </span>
                    <span className="text-[11px] font-sans text-[#27302B]/50 font-medium">
                      {svc.profilePages}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full mb-3 rounded overflow-hidden bg-[#1F4338]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  <h3 className="text-base font-serif text-[#1F4338] mb-1.5 leading-snug group-hover:text-[#4F8278] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-[#27302B]/75 font-sans font-light leading-relaxed line-clamp-2 mb-4">
                    {svc.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1F4338]/10 flex items-center justify-between">
                  <Link
                    href={`/services/${svc.id}`}
                    className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-[#B47750] group-hover:text-[#1F4338] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#27302B]/40">
                    CAT-{svc.letter}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Turnkey Consultation CTA */}
      <section className="bg-[#1F4338] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#8CA477] block">
            CUSTOM CAPABILITY CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif">
            Discuss Your Specific Habitat Requirements
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans font-light max-w-xl mx-auto">
            Our architectural team reviews structural parameters, plumbing routes, and species requirements to design a turn-key solution.
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
