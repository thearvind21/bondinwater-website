import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICE_FAMILIES, getFamilyServices } from "@/data/service-families";

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#E9EFE7] text-[#27302B] border-b border-[#1F4338]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 lg:mb-18 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#4F8278] font-bold block">
              EXPERTISE OVERVIEW &bull; 12 DISCIPLINARY CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1F4338] leading-[1.12]">
              Five Service Families. <br className="hidden sm:inline" />
              Twelve Engineering Capabilities.
            </h2>
            <p className="text-sm sm:text-base text-[#27302B]/80 font-sans font-light leading-relaxed">
              Every discipline is anchored in our verified 35-page company profile, merging architectural precision with lifelong biological care.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#1F4338] hover:bg-[#142C25] text-white px-6 py-3 rounded-[4px] font-sans text-xs sm:text-sm font-medium transition-colors shadow-xs"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#8CA477]" />
            </Link>
          </div>
        </div>

        {/* 5 Families Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_FAMILIES.map((family, idx) => {
            const memberServices = getFamilyServices(family);
            const isLarge = idx === 0 || idx === 1;

            return (
              <div
                key={family.id}
                className={`bg-white rounded-lg border border-[#1F4338]/10 overflow-hidden shadow-xs hover:border-[#4F8278] transition-all hover:shadow-md flex flex-col justify-between group ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Card Visual Header */}
                  <div className={`relative w-full bg-[#1F4338] overflow-hidden ${
                    idx === 0 ? "aspect-[21/9] min-h-[220px]" : "aspect-[16/10]"
                  }`}>
                    <Image
                      src={family.image}
                      alt={family.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#1F4338]/90 text-[#8CA477] text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-xs">
                      {family.code}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#1F4338] mb-1 group-hover:text-[#4F8278] transition-colors">
                        {family.name}
                      </h3>
                      <p className="text-xs font-sans text-[#B47750] font-medium">
                        {family.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#27302B]/75 font-sans font-light leading-relaxed">
                      {family.summary}
                    </p>

                    {/* Member Disciplines Preview */}
                    <div className="pt-3 border-t border-[#1F4338]/10 space-y-1.5">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#4F8278] block">
                        Included Disciplines:
                      </span>
                      <ul className="space-y-1">
                        {memberServices.map((svc) => (
                          <li key={svc.id}>
                            <Link
                              href={`/services/${svc.id}`}
                              className="text-xs font-sans text-[#27302B]/85 hover:text-[#1F4338] hover:underline flex items-center gap-1.5 py-0.5"
                            >
                              <span className="text-[10px] font-mono font-bold text-[#8CA477]">
                                [{svc.letter}]
                              </span>
                              <span className="truncate">{svc.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#1F4338]/10 flex items-center justify-between">
                  <Link
                    href={`/services#${family.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#B47750] group-hover:text-[#1F4338] transition-colors"
                  >
                    <span>View Family Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#27302B]/40">
                    {memberServices.length} {memberServices.length === 1 ? "Discipline" : "Disciplines"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-white border border-[#1F4338]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-serif text-[#1F4338]">
              Looking for a specific engineering capability?
            </h4>
            <p className="text-xs sm:text-sm text-[#27302B]/70 font-sans font-light">
              All twelve categories include full technical specifications, deliverables, and authentic archive imagery.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-[#B47750] hover:text-[#1F4338] whitespace-nowrap transition-colors"
          >
            <span>Explore All 12 Categories in Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
