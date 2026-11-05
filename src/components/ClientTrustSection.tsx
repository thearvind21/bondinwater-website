import React from "react";
import Image from "next/image";
import { TRUST_COLLABORATORS } from "@/data/bondinwater-data";
import { Building2, CheckCircle2 } from "lucide-react";

export function ClientTrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#E9EFE7] text-[#27302B] border-b border-[#8CA477]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#4F8278] font-bold">
              COLLABORATION RECORD &bull; VERIFIED INSTITUTIONS
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              DIRECT &amp; COLLABORATIVE CLIENT EFFORTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F4338] leading-[1.1]">
            Trusted by Commercial, Institutional &amp; Private Clients
          </h2>

          <p className="text-sm sm:text-base text-[#27302B]/85 font-sans font-light leading-relaxed max-w-2xl">
            Over the years, BondInWater has contributed to projects for renowned organizations and private estates through direct contracts and engineering partnerships.
          </p>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_COLLABORATORS.map((collab, idx) => (
            <div
              key={idx}
              className="p-6 border border-[#8CA477]/30 bg-white rounded-lg flex flex-col justify-between space-y-4 shadow-sm hover:border-[#1F4338] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#8CA477]/20 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F4338] font-bold">
                    RECORD [{String(idx + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#4F8278]">
                    {collab.type}
                  </span>
                </div>

                {collab.logo ? (
                  <div className="relative h-12 w-36 overflow-hidden bg-[#E9EFE7]/60 border border-[#8CA477]/25 rounded p-1.5 flex items-center justify-center">
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      fill
                      className="object-contain p-1 filter contrast-125"
                      sizes="150px"
                    />
                  </div>
                ) : (
                  <div className="h-12 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1F4338]">
                    <Building2 className="w-5 h-5 text-[#1F4338]" />
                    <span>Private Architectural Estates</span>
                  </div>
                )}

                <h3 className="text-base font-serif text-[#1F4338] font-bold">
                  {collab.name}
                </h3>

                <p className="text-xs text-[#27302B]/85 font-sans leading-relaxed">
                  {collab.context}
                </p>
              </div>

              <div className="pt-3 border-t border-[#8CA477]/20 flex items-center gap-2 text-[10px] font-mono text-[#4F8278]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4338] shrink-0" />
                <span>VERIFIED ENGAGEMENT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}