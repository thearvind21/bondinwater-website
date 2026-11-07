import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function EnquiryCTA() {
  return (
    <section id="contact-cta" className="py-12 lg:py-16 bg-[#1F4338] text-white relative overflow-hidden border-t border-[#8CA477]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          
          {/* Consultation Message */}
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold block">
              PROJECT CONSULTATION &bull; STAGE 01 FEASIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-normal leading-[1.14] text-white">
              Bring Extraordinary Aquatic &amp;{" "}
              <span className="italic font-normal text-[#8CA477]">Habitat Environments to Life</span>
            </h2>
            <p className="text-sm sm:text-base text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              Whether designing a public commercial oceanarium, a transparent residential acrylic pool, a living rainforest vivarium, or an ethical zoological aviary, our multidisciplinary team provides turnkey architectural and biological accountability.
            </p>
          </div>

          {/* Primary Action Button (Single Prominent Copper CTA) */}
          <div className="shrink-0 pt-1 lg:pt-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white text-sm sm:text-base font-sans font-medium px-8 py-4 rounded-[4px] transition-colors shadow-sm whitespace-nowrap"
            >
              <span>Request Feasibility Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
