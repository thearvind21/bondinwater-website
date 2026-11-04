import React from "react";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT, COMPANY_DIVISIONS } from "@/data/bondinwater-data";
import { Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#story" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#172D24] text-[#F3F3EC] pt-20 pb-12 relative overflow-hidden border-t border-[#2E4739]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Studio Brand Banner */}
        <div className="pb-14 border-b border-[#2E4739] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <BrandLogo variant="forest" />
            <p className="text-xs sm:text-sm text-[#B4BEA5] font-sans font-light leading-relaxed max-w-xl">
              Turnkey aquatic architecture, zoo masterplanning, custom optical PMMA acrylic engineering (20mm to 300mm), bio-authentic vivariums, and lifelong biologist-led stewardship.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3 text-xs font-mono">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#294333] hover:bg-[#3D5E4A] text-[#F3F3EC] border border-[#2E4739] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B4BEA5]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F3F3EC] hover:bg-white text-[#172D24] font-bold uppercase tracking-wider transition-colors border border-[#F3F3EC]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="py-14 border-b border-[#2E4739] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Studio Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-[#B4BEA5] block font-bold">
              STUDIO IDENTIFICATION &bull; MUMBAI
            </span>
            <div className="space-y-2 text-[#DADDD3] font-sans leading-relaxed">
              <p>
                BondInWater operates across India and international markets, delivering biological integrity and structural excellence for public oceanariums, luxury estates, and zoological parks.
              </p>
              <p className="text-[#B4BEA5] font-mono text-[11px] pt-1">
                DESIGN &bull; BUILD &bull; OPERATE &bull; MAINTAIN
              </p>
            </div>
          </div>

          {/* Column 2: 9 Capability Divisions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F3F3EC] block font-bold">
              09 CAPABILITY DIVISIONS
            </span>
            <div className="grid grid-cols-1 gap-1.5 text-xs font-mono text-[#DADDD3]">
              {COMPANY_DIVISIONS.map((div) => (
                <a
                  key={div.id}
                  href="#expertise"
                  className="hover:text-[#B4BEA5] transition-colors truncate flex items-center gap-2"
                >
                  <span className="text-[#B4BEA5] text-[10px]">[{div.letter}]</span>
                  <span>{div.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Index (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F3F3EC] block font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#DADDD3]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#B4BEA5] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-[#F3F3EC] block font-bold">
              HEADQUARTERS
            </span>
            <div className="space-y-2 text-[#DADDD3]">
              <p className="text-[#F3F3EC] font-bold">{BRAND_CONTACT.location}</p>
              <p className="text-[#B4BEA5] text-[11px] leading-snug">
                {BRAND_CONTACT.hours.weekdays}
              </p>
              <a
                href={`mailto:${BRAND_CONTACT.email}`}
                className="text-[#B4BEA5] hover:underline block pt-1 break-all"
              >
                {BRAND_CONTACT.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclosures Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#B4BEA5]">
          <div>
            &copy; {currentYear} BondInWater. All Rights Reserved. Nature Engineered &bull; Aquatic Architecture &amp; Habitat Engineering.
          </div>
          <div className="flex items-center gap-4 text-[#B4BEA5]">
            <span>COMPANY PROFILE COMPLIANT</span>
            <span>&bull;</span>
            <span>NATURE &bull; DESIGN &bull; ENGINEERING</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
