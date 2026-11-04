import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT, COMPANY_DIVISIONS } from "@/data/bondinwater-data";
import { Phone, Mail, MapPin, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react";

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
    <footer className="bg-[#08090B] text-neutral-300 pt-20 pb-12 relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Studio Brand Banner */}
        <div className="pb-14 border-b border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <BrandLogo variant="dark" />
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed max-w-xl">
              Turnkey aquatic architecture, zoo masterplanning, custom optical PMMA acrylic engineering (20mm to 300mm), bio-authentic vivariums, and lifelong biologist-led stewardship.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3 text-xs font-mono">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold uppercase tracking-wider transition-colors border border-white"
            >
              <span>Consult Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Column Museum Directory Grid */}
        <div className="py-14 border-b border-neutral-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Studio Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 block font-bold">
              STUDIO IDENTIFICATION // MUMBAI
            </span>
            <div className="space-y-2 text-neutral-400 font-sans leading-relaxed">
              <p>
                BondInWater operates across India and international markets, delivering biological integrity and structural excellence for public oceanariums, luxury estates, and zoological parks.
              </p>
              <p className="text-neutral-500 font-mono text-[11px] pt-1">
                DESIGN &bull; BUILD &bull; OPERATE &bull; MAINTAIN
              </p>
            </div>
          </div>

          {/* Column 2: 9 Capability Divisions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
              09 CAPABILITY DIVISIONS
            </span>
            <div className="grid grid-cols-1 gap-1.5 text-xs font-mono text-neutral-400">
              {COMPANY_DIVISIONS.map((div) => (
                <a
                  key={div.id}
                  href="#expertise"
                  className="hover:text-white transition-colors truncate flex items-center gap-2"
                >
                  <span className="text-neutral-600 text-[10px]">[{div.letter}]</span>
                  <span>{div.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Index (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
              DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Disclosures (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-bold">
              HEADQUARTERS
            </span>
            <div className="space-y-2 text-neutral-400">
              <p className="text-white font-bold">{BRAND_CONTACT.location}</p>
              <p className="text-neutral-500 text-[11px] leading-snug">
                {BRAND_CONTACT.hours.weekdays}
              </p>
              <a
                href={`mailto:${BRAND_CONTACT.email}`}
                className="text-emerald-400 hover:underline block pt-1 break-all"
              >
                {BRAND_CONTACT.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclosures Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            &copy; {currentYear} BondInWater. All Rights Reserved. Turnkey Aquatic Architecture & Habitat Engineering.
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>COMPANY PROFILE COMPLIANT</span>
            <span>&bull;</span>
            <span>VERIFIED FACTUAL ARCHIVE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
