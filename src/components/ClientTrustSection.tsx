import React from "react";
import Image from "next/image";
import { TRUST_COLLABORATORS } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { Building2, CheckCircle2 } from "lucide-react";

export function ClientTrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F3F3EC] text-[#202820] border-b border-[#DADDD3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              COLLABORATION RECORD &bull; VERIFIED INSTITUTIONS
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#667367]">
              DIRECT &amp; COLLABORATIVE CLIENT EFFORTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-[#172D24] leading-[0.95]">
            Trusted by Commercial, Institutional &amp; Private Clients.
          </h2>

          <p className="text-sm sm:text-base text-[#3E4A3F] font-sans font-light leading-relaxed max-w-2xl">
            Over the years, BondInWater has contributed to projects for renowned organizations and private estates through direct contracts and engineering partnerships.
          </p>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_COLLABORATORS.map((collab, idx) => (
            <div
              key={idx}
              className="p-6 border border-[#DADDD3] bg-white flex flex-col justify-between space-y-4 shadow-sm hover:border-[#172D24] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#DADDD3] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#46634B] font-bold">
                    RECORD [{String(idx + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#667367]">
                    {collab.type}
                  </span>
                </div>

                {collab.logo ? (
                  <div className="relative h-12 w-36 overflow-hidden bg-[#F3F3EC] border border-[#DADDD3] p-1.5 flex items-center justify-center">
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      fill
                      className="object-contain p-1 filter contrast-125"
                      sizes="150px"
                    />
                  </div>
                ) : (
                  <div className="h-12 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#172D24]">
                    <Building2 className="w-5 h-5 text-[#46634B]" />
                    <span>Private Architectural Estates</span>
                  </div>
                )}

                <h3 className="text-base font-display uppercase tracking-tight text-[#172D24] font-bold">
                  {collab.name}
                </h3>

                <p className="text-xs text-[#3E4A3F] font-sans leading-relaxed">
                  {collab.context}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DADDD3] flex items-center gap-2 text-[10px] font-mono text-[#667367]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#46634B] shrink-0" />
                <span>VERIFIED ENGAGEMENT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
