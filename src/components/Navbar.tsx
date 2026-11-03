"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "The Story", href: "#story" },
    { name: "Our Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F2E9]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#E8E2D5]"
            : "bg-[#F5F2E9]/90 backdrop-blur-sm py-4 border-b border-[#E8E2D5]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo (Always left-aligned, no tagline) */}
            <BrandLogo variant="dark" />

            {/* Center: Desktop Navigation Links (Single line, balanced spacing) */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-[13px] tracking-[0.06em] font-medium text-[#292C25] hover:text-[#344B38] transition-colors py-1 whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#344B38] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Actions & CTAs (Strictly non-wrapping) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              
              {/* Phone number (Ensured strictly single line) */}
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-medium text-[#85866A] hover:text-[#344B38] transition-colors px-3 py-1.5 rounded-full border border-[#E8E2D5] bg-white/40 whitespace-nowrap shrink-0"
                title="Direct Phone Inquiry"
              >
                <Phone className="w-3.5 h-3.5 text-[#B18A60] shrink-0" />
                <span className="whitespace-nowrap">{BRAND_CONTACT.phone}</span>
              </a>

              {/* Primary CTA (Ensured strictly single line, no wrapping) */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold tracking-[0.08em] uppercase px-4.5 xl:px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B18A60] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 bg-[#344B38] text-[#F5F2E9] rounded-full whitespace-nowrap sm:hidden"
              >
                Enquire
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#292C25] hover:text-[#344B38] hover:bg-[#E8E2D5]/50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#292C25]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#F5F2E9] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E8E2D5]">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D5]">
                <BrandLogo variant="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#E8E2D5] text-[#292C25]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif tracking-wide text-[#292C25] hover:text-[#344B38] py-1.5 border-b border-[#E8E2D5]/40 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Contact inside Drawer */}
            <div className="pt-6 border-t border-[#E8E2D5] space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wider text-[#85866A] font-medium">Direct Telephone</p>
                <a
                  href={`tel:${BRAND_CONTACT.phoneRaw}`}
                  className="text-sm font-semibold text-[#292C25] block hover:text-[#344B38] whitespace-nowrap"
                >
                  {BRAND_CONTACT.phone}
                </a>
                <p className="text-xs text-[#85866A]">Mumbai, Maharashtra</p>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#344B38] text-[#F5F2E9] text-xs font-semibold tracking-wider uppercase py-3 rounded-full hover:bg-[#253728] transition-colors whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B18A60]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
