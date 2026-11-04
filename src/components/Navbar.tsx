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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero", code: "01" },
    { name: "Capabilities", href: "#expertise", code: "02" },
    { name: "Turnkey Process", href: "#process", code: "03" },
    { name: "Portfolio", href: "#projects", code: "04" },
    { name: "Studio Ethos", href: "#story", code: "05" },
    { name: "Automation", href: "#automation", code: "06" },
    { name: "Contact", href: "#contact", code: "07" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#CED2D2]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#B4B9B9]"
            : "bg-[#CED2D2]/90 backdrop-blur-sm py-4 border-b border-[#B4B9B9]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo (Aligned left, dark variant on light canvas) */}
            <BrandLogo variant="dark" />

            {/* Center: Desktop Navigation Links (Single line, balanced spacing) */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#171A19] hover:text-[#A66547] transition-colors py-1 whitespace-nowrap"
                >
                  <span className="text-[10px] text-[#565E5C] group-hover:text-[#A66547] font-mono transition-colors">
                    {link.code}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Right: Actions & CTAs (Single-line, non-wrapping) */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              {/* Direct Phone Line */}
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-mono text-[#171A19] hover:text-[#A66547] transition-colors whitespace-nowrap px-2 py-1"
                title="Direct Studio Desk"
              >
                <Phone className="w-3.5 h-3.5 text-[#79836D] shrink-0" />
                <span className="tabular-nums tracking-wide font-medium">{BRAND_CONTACT.phone}</span>
              </a>

              {/* Action Button: Consult Studio */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#191C1B] text-[#F1F1ED] hover:bg-[#A66547] text-xs font-mono uppercase font-bold tracking-wider px-4 py-2.5 transition-all duration-200 shrink-0 border border-[#191C1B]"
              >
                <span>Consult Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171A19] hover:text-[#A66547] border border-[#B4B9B9] bg-[#F1F1ED]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer (Light editorial canvas) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#CED2D2]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between border-b border-[#B4B9B9]">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#565E5C] border-b border-[#B4B9B9] pb-2">
              Capabilities & Studio Index
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-display uppercase tracking-wider text-[#171A19] hover:text-[#A66547] py-2 border-b border-[#B4B9B9]/50"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-[#565E5C]">{link.code}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#B4B9B9]">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="flex items-center gap-3 text-xs font-mono text-[#171A19] py-2"
            >
              <Phone className="w-4 h-4 text-[#79836D]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#191C1B] text-[#F1F1ED] text-xs font-mono uppercase font-bold tracking-wider py-3 border border-[#191C1B]"
            >
              <span>Consult Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
