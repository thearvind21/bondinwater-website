import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICE_FAMILIES, getFamilyServices } from "@/data/service-families";
import { COMPANY_DIVISIONS } from "@/data/bondinwater-data";

export const metadata = {
  title: "Capability Services — BondInWater",
  description: "Explore the twelve official capability categories of BondInWater across five distinct service families: from visionary design to turnkey habitat engineering.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#1F4338] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
                BONDINWATER &bull; CAPABILITY DIRECTORY
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] mb-6">
              Twelve Documented <br />
              <span className="italic font-normal text-[#8CA477]">Engineering Disciplines</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              Organized into five service families from our verified 35-page company profile. Every discipline unites biological conservation, architectural planning, and turnkey structural engineering.
            </p>
          </div>

          {/* Quick jump pills */}
          <div className="flex flex-wrap gap-2 pt-8 mt-4 border-t border-white/10">
            {SERVICE_FAMILIES.map((fam) => (
              <a
                key={fam.id}
                href={`#${fam.id}`}
                className="text-xs font-sans px-3.5 py-1.5 rounded-[4px] bg-white/10 hover:bg-[#8CA477] hover:text-[#1F4338] text-white/90 transition-colors"
              >
                {fam.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Organized by 5 Families */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {SERVICE_FAMILIES.map((family, idx) => {
          const services = getFamilyServices(family);
          return (
            <div
              key={family.id}
              id={family.id}
              className="scroll-mt-28 bg-white rounded-lg border border-[#1F4338]/10 overflow-hidden shadow-sm"
            >
              {/* Family Header Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#1F4338]/10">
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#4F8278] bg-[#E9EFE7] px-2.5 py-1 rounded">
                        {family.code}
                      </span>
                      <span className="text-xs font-sans text-[#27302B]/60">
                        {services.length} {services.length === 1 ? "Discipline" : "Disciplines"}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F4338] mb-3">
                      {family.name}
                    </h2>
                    <p className="text-sm sm:text-base font-sans text-[#B47750] font-medium mb-4">
                      {family.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-[#27302B]/80 font-sans font-light leading-relaxed">
                      {family.summary}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full bg-[#1F4338]">
                  <Image
                    src={family.image}
                    alt={family.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338]/60 via-transparent to-transparent lg:hidden" />
                </div>
              </div>

              {/* Family Services Cards */}
              <div className="p-6 sm:p-8 lg:p-10 bg-[#E9EFE7]/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((svc) => (
                    <div
                      key={svc.id}
                      className="bg-white rounded-md border border-[#1F4338]/10 p-6 flex flex-col justify-between hover:border-[#4F8278] transition-all hover:shadow-md group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="text-xs font-mono font-bold text-[#4F8278] bg-[#E9EFE7] px-2 py-0.5 rounded">
                            {svc.letter}
                          </span>
                          <span className="text-[11px] font-sans text-[#27302B]/50 font-medium">
                            {svc.profilePages}
                          </span>
                        </div>

                        <div className="relative h-44 w-full mb-4 rounded overflow-hidden bg-[#1F4338]">
                          <Image
                            src={svc.image}
                            alt={svc.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 30vw"
                          />
                        </div>

                        <h3 className="text-lg sm:text-xl font-serif text-[#1F4338] mb-2 leading-snug group-hover:text-[#4F8278] transition-colors">
                          {svc.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#27302B]/75 font-sans font-light leading-relaxed line-clamp-3 mb-6">
                          {svc.scopeSummary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#1F4338]/10 flex items-center justify-between">
                        <Link
                          href={`/services/${svc.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#B47750] group-hover:text-[#1F4338] transition-colors"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <span className="text-[11px] font-sans text-[#27302B]/40">
                          {svc.keySpecs.length} Specs
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Turnkey Consultation CTA Banner */}
      <section className="bg-[#1F4338] text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-sans font-semibold tracking-[0.24em] uppercase text-[#8CA477] mb-3 block">
            NEED A CUSTOM AQUATIC OR HABITAT SOLUTION?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal mb-6">
            Consult With Our Architectural & Life Support Team
          </h2>
          <p className="text-base text-white/80 font-sans font-light max-w-2xl mx-auto mb-8">
            Every project starts with a comprehensive biological, spatial, and structural feasibility audit. Reach out to schedule a consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white px-7 py-3.5 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-sm"
            >
              <span>Enquire For Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-[4px] font-sans text-sm font-medium transition-colors"
            >
              <span>View Portfolio Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
