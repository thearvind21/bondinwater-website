import React from "react";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT, COMPANY_DIVISIONS } from "@/data/bondinwater-data";
import { Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Capabilities (9 Divisions)", href: "#expertise" },
    { name: "Field Installations", href: "#projects" },
    { name: "Studio Ethos & Heritage", href: "#story" },
    { name: "8-Stage Methodology", href: "#process" },
    { name: "Apex Automation & LSS", href: "#automation" },
    { name: "Why BondInWater", href: "#why-us" },
    { name: "Project Consultation", href: "#contact" },
  ];

  return (
    <footer className="bg-[#191C1B] text-[#CED2D2] pt-20 pb-12 relative overflow-hidden border-t border-[#2D3230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Studio Brand Banner */}
        <div className="pb-14 border-b border-[#2D3230] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <BrandLogo variant="dark" />
            <p className="text-xs sm:text-sm text-[#9AA39E] font-sans font-light leading-relaxed max-w-xl">
              Turnkey aquatic architecture, zoo masterplanning, custom optical PMMA acrylic engineering (20mm to 300mm), bio-authentic vivariums, and lifelong biologist-led stewardship.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3 text-xs font-mono">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#212524] hover:bg-[#2A2E2C] text-[#F1F1ED] border border-[#2D3230] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#79836D]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F1F1ED] hover:bg-white text-[#171A19] font-bold uppercase tracking-wider transition-colors border border-[#F1F1ED]"
            >
              <span>Consult Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="py-14 border-b border-[#2D3230] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Studio Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-[#79836D] block font-bold">
              STUDIO IDENTIFICATION &bull; MUMBAI
            </span>
            <div className="space-y-2 text-[#9AA39E] font-sans leading-relaxed">
              <p>
                BondInWater operates across India and international markets, delivering biological integrity and structural excellence for public oceanariums, luxury estates, and zoological parks.
              </p>
              <p className="text-[#6D7772] font-mono text-[11px] pt-1">
                DESIGN &bull; BUILD &bull; OPERATE &bull; MAINTAIN
              </p>
            </div>
          </div>

          {/* Column 2: 9 Capability Divisions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#CED2D2] block font-bold">
              09 CAPABILITY DIVISIONS
            </span>
            <div className="grid grid-cols-1 gap-1.5 text-xs font-mono text-[#9AA39E]">
              {COMPANY_DIVISIONS.map((div) => (
                <a
                  key={div.id}
                  href="#expertise"
                  className="hover:text-white transition-colors truncate flex items-center gap-2"
                >
                  <span className="text-[#6D7772] text-[10px]">[{div.letter}]</span>
                  <span>{div.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Index (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#CED2D2] block font-bold">
              DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#9AA39E]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-[#CED2D2] block font-bold">
              HEADQUARTERS
            </span>
            <div className="space-y-2 text-[#9AA39E]">
              <p className="text-[#F1F1ED] font-bold">{BRAND_CONTACT.location}</p>
              <p className="text-[#6D7772] text-[11px] leading-snug">
                {BRAND_CONTACT.hours.weekdays}
              </p>
              <a
                href={`mailto:${BRAND_CONTACT.email}`}
                className="text-[#79836D] hover:underline block pt-1 break-all"
              >
                {BRAND_CONTACT.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclosures Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6D7772]">
          <div>
            &copy; {currentYear} BondInWater. All Rights Reserved. Turnkey Aquatic Architecture &amp; Habitat Engineering.
          </div>
          <div className="flex items-center gap-4 text-[#6D7772]">
            <span>COMPANY PROFILE COMPLIANT</span>
            <span>&bull;</span>
            <span>AQUATIC ARCHITECTURE &bull; HABITAT ENGINEERING</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
