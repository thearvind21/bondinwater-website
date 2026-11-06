import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT, COMPANY_DIVISIONS } from "@/data/bondinwater-data";
import { SERVICE_FAMILIES } from "@/data/service-families";
import { Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "8-Stage Process", href: "/process" },
    { name: "Contact & Feasibility", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1F4338] text-[#E9EFE7] pt-20 pb-12 relative overflow-hidden border-t border-[#8CA477]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Studio Brand Banner */}
        <div className="pb-14 border-b border-[#8CA477]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <BrandLogo variant="forest" />
            <p className="text-xs sm:text-sm text-[#E9EFE7]/80 font-sans font-light leading-relaxed max-w-xl">
              Turnkey aquatic architecture, zoo masterplanning, custom optical PMMA acrylic engineering (20mm to 300mm), bio-authentic vivariums, and lifelong biologist-led stewardship.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3 text-xs font-mono">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#142C25] hover:bg-[#142C25]/80 text-[#E9EFE7] border border-[#8CA477]/40 transition-colors whitespace-nowrap rounded"
            >
              <Phone className="w-3.5 h-3.5 text-[#8CA477]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B47750] hover:bg-[#9F6542] text-white font-sans text-xs uppercase font-medium tracking-wider transition-colors border border-[#B47750] whitespace-nowrap rounded shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="py-14 border-b border-[#8CA477]/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Studio Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-[#8CA477] block font-bold">
              STUDIO IDENTIFICATION &bull; MUMBAI
            </span>
            <div className="space-y-2 text-[#E9EFE7]/80 font-sans leading-relaxed">
              <p>
                BondInWater operates across India and international markets, delivering biological integrity and structural excellence for public oceanariums, luxury estates, and zoological parks.
              </p>
              <p className="text-[#8CA477] font-mono text-[11px] pt-1">
                DESIGN &bull; BUILD &bull; OPERATE &bull; MAINTAIN
              </p>
            </div>
          </div>

          {/* Column 2: 5 Service Families & 12 Disciplines (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9EFE7] block font-bold">
              5 SERVICE FAMILIES &bull; 12 CAPABILITY CATEGORIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#E9EFE7]/85">
              {SERVICE_FAMILIES.map((fam) => (
                <Link
                  key={fam.id}
                  href={`/services#${fam.id}`}
                  className="hover:text-[#8CA477] transition-colors p-2 rounded bg-white/5 border border-white/5 block"
                >
                  <span className="text-[10px] font-mono text-[#8CA477] block">{fam.code}</span>
                  <span className="font-medium text-xs text-white block truncate">{fam.name}</span>
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/services"
                className="text-xs font-sans text-[#B47750] hover:text-white inline-flex items-center gap-1 font-semibold"
              >
                <span>Explore All 12 Documented Disciplines</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Navigation Index (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9EFE7] block font-bold">
              NAVIGATION DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs font-sans text-[#E9EFE7]/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#8CA477] transition-colors flex items-center justify-between">
                    <span>{link.name}</span>
                    <span className="text-white/20">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E9EFE7]/60">
          <div>
            &copy; {currentYear} BondInWater. All rights reserved. Registered Marine Architectural &amp; Habitat Engineering Studio.
          </div>
          <div className="flex items-center gap-6">
            <span>Official Profile Assets (35 Pages)</span>
            <span>&bull;</span>
            <Link href="/services" className="hover:text-[#8CA477]">12 Services</Link>
            <span>&bull;</span>
            <Link href="/process" className="hover:text-[#8CA477]">8 Stages</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
