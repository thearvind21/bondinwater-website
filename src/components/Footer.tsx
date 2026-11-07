import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { SERVICE_FAMILIES } from "@/data/service-families";
import { Phone, Mail, Globe } from "lucide-react";

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
    <footer className="bg-[#1F4338] text-[#E9EFE7] pt-12 pb-10 relative overflow-hidden border-t border-[#8CA477]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Three Clear Areas: Left (Brand), Centre (Navigation & Services), Right (Contact) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#8CA477]/20">
          
          {/* LEFT AREA: Logo & Short Description (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 space-y-4">
            <BrandLogo variant="forest" />
            <p className="text-xs sm:text-sm text-[#E9EFE7]/80 font-sans font-light leading-relaxed max-w-sm">
              Aquatic Design, Habitat Engineering, Architectural Planning and Turnkey Project Solutions.
            </p>
          </div>

          {/* CENTRE AREA: Main Navigation & Five Service-Family Links (5 cols) */}
          <div className="md:col-span-7 lg:col-span-5 grid grid-cols-2 gap-6 text-xs font-sans">
            {/* Main Navigation */}
            <div className="space-y-3">
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

            {/* Five Service Families */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block font-bold">
                SERVICE FAMILIES
              </span>
              <ul className="space-y-2 text-[#E9EFE7]/80">
                {SERVICE_FAMILIES.map((fam) => (
                  <li key={fam.id}>
                    <Link
                      href={`/services#${fam.id}`}
                      className="hover:text-white transition-colors block leading-snug"
                    >
                      <span className="text-[#8CA477] font-mono text-[10px] mr-1">
                        {fam.code.replace("FAMILY ", "")}.
                      </span>
                      <span>{fam.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT AREA: Contact Details (Each displayed only once) (3 cols) */}
          <div className="md:col-span-5 lg:col-span-3 space-y-3 text-xs font-sans">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CA477] block font-bold">
              CONTACT
            </span>
            <div className="space-y-2.5 text-[#E9EFE7]/85">
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#8CA477] group-hover:text-white transition-colors shrink-0" />
                <span className="truncate">{BRAND_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND_CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#8CA477] group-hover:text-white transition-colors shrink-0" />
                <span className="truncate">{BRAND_CONTACT.email}</span>
              </a>

              <a
                href={`https://${BRAND_CONTACT.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Globe className="w-3.5 h-3.5 text-[#8CA477] group-hover:text-white transition-colors shrink-0" />
                <span className="truncate">{BRAND_CONTACT.website}</span>
              </a>
            </div>

            <p className="text-[11px] text-[#E9EFE7]/60 leading-relaxed pt-2">
              Verified against the 35-page BondInWater Company Profile. Turnkey aquatic environments and living habitats.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Discipline Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E9EFE7]/60">
          <div>
            &copy; {currentYear} BondInWater. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/services" className="hover:text-[#8CA477] transition-colors">12 Disciplines</Link>
            <span>&bull;</span>
            <Link href="/process" className="hover:text-[#8CA477] transition-colors">8 Lifecycle Stages</Link>
            <span>&bull;</span>
            <Link href="/projects" className="hover:text-[#8CA477] transition-colors">Project Archive</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
