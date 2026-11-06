import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { SERVICE_FAMILIES } from "@/data/service-families";
import { Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1F4338] text-[#E9EFE7] pt-16 pb-12 relative overflow-hidden border-t border-[#8CA477]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand Identity & Quick Direct Contact */}
        <div className="pb-12 border-b border-[#8CA477]/25 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <BrandLogo variant="forest" />
            <p className="text-xs sm:text-sm text-[#E9EFE7]/80 font-sans font-light leading-relaxed">
              BondInWater &mdash; Aquatic Design, Habitat Engineering, Architectural Planning and Turnkey Project Solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#8CA477]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href={`mailto:${BRAND_CONTACT.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#8CA477]" />
              <span>{BRAND_CONTACT.email}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#B47750] hover:bg-[#9F6542] text-white font-medium rounded transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Middle Section: 3-Column Navigation Grid */}
        <div className="py-12 border-b border-[#8CA477]/25 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 text-xs font-sans">
          
          {/* Column 1: Main Navigation (4 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#E9EFE7]/80">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Five Service Families (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block font-bold">
              FIVE SERVICE FAMILIES (12 DISCIPLINES)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#E9EFE7]/80">
              {SERVICE_FAMILIES.map((fam) => (
                <Link
                  key={fam.id}
                  href={`/services#${fam.id}`}
                  className="hover:text-white transition-colors p-2 rounded bg-white/5 border border-white/5 block"
                >
                  <span className="text-[9px] font-mono text-[#8CA477] block">{fam.code}</span>
                  <span className="font-medium text-xs text-white block truncate">{fam.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Official Verification (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block font-bold">
              OFFICIAL CHANNELS
            </span>
            <div className="space-y-2 text-[#E9EFE7]/80">
              <a
                href={`https://${BRAND_CONTACT.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#8CA477]" />
                <span>{BRAND_CONTACT.website}</span>
              </a>
              <p className="text-[11px] text-[#E9EFE7]/60 leading-relaxed pt-1">
                Verified against the 35-page BondInWater Company Profile. Turnkey aquatic architecture, habitat engineering, and Life Support Systems.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E9EFE7]/60">
          <div>
            &copy; {currentYear} BondInWater. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/services" className="hover:text-[#8CA477]">12 Services</Link>
            <span>&bull;</span>
            <Link href="/process" className="hover:text-[#8CA477]">8 Lifecycle Stages</Link>
            <span>&bull;</span>
            <Link href="/projects" className="hover:text-[#8CA477]">Curated Portfolio</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
