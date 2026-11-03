import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT, SERVICES_DATA } from "@/data/bondinwater-data";
import { LotusEmblem, SwimmingKoiSilhouette, FernFrondAccent } from "./BotanicalDecorators";
import { Phone, Mail, MapPin, ArrowUpRight, MessageSquare, Globe, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Expertise", href: "#expertise" },
    { name: "Signature Projects", href: "#projects" },
    { name: "The Atelier Story", href: "#story" },
    { name: "Turnkey Process", href: "#process" },
    { name: "Why BondInWater", href: "#why-us" },
    { name: "Project Enquiry", href: "#contact" },
  ];

  return (
    <footer className="bg-[#292C25] text-[#F5F2E9] pt-20 pb-12 relative overflow-hidden border-t border-[#344B38]/40">
      {/* Background botanical line art */}
      <div className="absolute top-8 right-8 opacity-10 pointer-events-none hidden lg:block">
        <FernFrondAccent className="w-72 h-72 text-[#A5AD92]" />
      </div>
      <div className="absolute bottom-12 left-10 opacity-10 pointer-events-none hidden md:block">
        <SwimmingKoiSilhouette className="w-64 h-64 text-[#B18A60]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Atelier Brand Banner */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-[#E8E2D5]/80 font-sans font-light leading-relaxed max-w-md pt-2">
              Custom acrylic aquariums, natural koi ponds, waterfalls, paludariums, precision engineering, and ethical animal habitats.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center lg:justify-end gap-4">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-xs font-medium text-[#F5F2E9] border border-white/15 transition-all"
            >
              <Phone className="w-4 h-4 text-[#B18A60]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B18A60] hover:bg-[#C9A781] text-xs font-semibold uppercase tracking-wider text-[#292C25] transition-all shadow-md"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* 4-Column Directory */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Disciplines */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A781]">
              Our Disciplines
            </p>
            <ul className="space-y-2.5 text-xs text-[#E8E2D5]/75 font-sans font-light">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#expertise" className="hover:text-[#F5F2E9] transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#B18A60]" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Engineering & Services */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A781]">
              Engineering & Care
            </p>
            <ul className="space-y-2.5 text-xs text-[#E8E2D5]/75 font-sans font-light">
              {SERVICES_DATA.slice(5).map((srv) => (
                <li key={srv.id}>
                  <a href="#expertise" className="hover:text-[#F5F2E9] transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#B18A60]" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#expertise" className="hover:text-[#F5F2E9] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#B18A60]" />
                  <span>Neptune Systems Apex Automation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A781]">
              Studio Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-[#E8E2D5]/75 font-sans font-light">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#F5F2E9] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Atelier Details */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A781]">
              Atelier Location
            </p>
            <div className="space-y-3 text-xs text-[#E8E2D5]/80 font-sans font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B18A60] shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B18A60] shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND_CONTACT.email}`} className="hover:text-[#F5F2E9] transition-colors">
                  {BRAND_CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#B18A60] shrink-0 mt-0.5" />
                <a href={BRAND_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2E9] transition-colors">
                  WhatsApp Concierge
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-[#A5AD92]">
                Mon - Fri: 10am - 7pm | Sat: 10am - 5pm
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethics */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8E2D5]/60 font-sans font-light">
          <div className="flex items-center gap-2">
            <LotusEmblem className="w-3.5 h-3.5 text-[#B18A60]" />
            <span>© {currentYear} BondInWater. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Privacy Policy</span>
            <span className="text-[#85866A]">•</span>
            <span>Animal Welfare Commitment</span>
            <span className="text-[#85866A]">•</span>
            <span>CFD Engineering Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
