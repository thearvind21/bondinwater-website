import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { BRAND_CONTACT } from "@/data/bondinwater-data";

export function EnquiryCTA() {
  return (
    <section id="contact-cta" className="py-20 lg:py-28 bg-[#1F4338] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold block">
                PROJECT CONSULTATION &bull; STAGE 01 FEASIBILITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal leading-[1.12] text-white">
                Bring Extraordinary Aquatic &amp; <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#8CA477]">Habitat Environments to Life</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              Whether designing a public commercial oceanarium, a transparent residential acrylic pool, a living rainforest vivarium, or an ethical zoological aviary, our multidisciplinary team provides turnkey architectural and biological accountability.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white text-sm sm:text-base font-sans font-medium px-7 py-3.5 rounded-[4px] transition-colors shadow-sm"
              >
                <span>Request Feasibility Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base font-sans font-medium transition-colors py-2"
              >
                <span>Explore All 12 Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-[#8CA477]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Direct Communication Plaque (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 space-y-5 backdrop-blur-xs">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#8CA477] font-bold block">
              DIRECT DESK TRANSMISSION
            </span>
            <h3 className="text-xl font-serif text-white">
              BondInWater Technical Desk
            </h3>

            <div className="space-y-3.5 text-xs font-sans">
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="flex items-center gap-3 p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8CA477] shrink-0" />
                <span className="text-sm font-medium text-white">{BRAND_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND_CONTACT.email}`}
                className="flex items-center gap-3 p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8CA477] shrink-0" />
                <span className="text-sm font-medium text-white">{BRAND_CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#8CA477] shrink-0 mt-0.5" />
                <span className="text-xs text-white/80">{BRAND_CONTACT.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#8CA477]" />
              <span>Full confidentiality for architectural drawings &amp; floorplans.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
