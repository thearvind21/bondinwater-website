import React from "react";
import Image from "next/image";
import { TRUST_COLLABORATORS } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ClientTrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D0E11] text-neutral-100 border-b border-neutral-800 relative bg-museum-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="moss">
              COLLABORATION RECORD // VERIFIED INSTITUTIONS
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              DIRECT & COLLABORATIVE CLIENT EFFORTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.95]">
            Trusted by Commercial, Institutional & Private Clients.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-sans font-light leading-relaxed max-w-2xl">
            Over the years, BondInWater has contributed to projects for renowned organizations and private estates through direct contracts and engineering partnerships.
          </p>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_COLLABORATORS.map((collab, idx) => (
            <div
              key={idx}
              className="p-6 border border-neutral-800 bg-[#141518] flex flex-col justify-between space-y-4 shadow-lg hover:border-neutral-600 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    RECORD [{String(idx + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    {collab.type}
                  </span>
                </div>

                {collab.logo ? (
                  <div className="relative h-12 w-32 overflow-hidden bg-neutral-900 border border-neutral-800 p-1 flex items-center justify-center">
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      fill
                      className="object-contain p-1 filter grayscale contrast-125"
                      sizes="150px"
                    />
                  </div>
                ) : (
                  <div className="h-12 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <span>Private Architectural Estates</span>
                  </div>
                )}

                <h3 className="text-base font-display uppercase tracking-tight text-white font-bold">
                  {collab.name}
                </h3>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {collab.context}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>VERIFIED ENGAGEMENT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
