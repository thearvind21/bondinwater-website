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
    { name: "Overview", href: "#hero", code: "00" },
    { name: "Capabilities", href: "#expertise", code: "01" },
    { name: "Portfolio", href: "#projects", code: "02" },
    { name: "Studio Ethos", href: "#story", code: "03" },
    { name: "Methodology", href: "#process", code: "04" },
    { name: "Engineering", href: "#automation", code: "05" },
    { name: "Contact", href: "#contact", code: "06" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0E11]/95 backdrop-blur-md py-3 shadow-2xl border-b border-neutral-800"
            : "bg-[#0D0E11]/90 backdrop-blur-sm py-4 border-b border-neutral-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo (Left-aligned, architectural mark) */}
            <BrandLogo variant="dark" />

            {/* Center: Desktop Navigation Links (Single line, museum catalog styling) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors py-1 whitespace-nowrap"
                >
                  <span className="text-[10px] text-neutral-500 group-hover:text-emerald-400 font-mono transition-colors">
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
                className="flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white transition-colors whitespace-nowrap px-2 py-1"
                title="Direct Studio Desk"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="tabular-nums tracking-wide">{BRAND_CONTACT.phone}</span>
              </a>

              {/* Action Button: Start Project */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-mono uppercase font-bold tracking-wider px-4 py-2.5 transition-all duration-200 shrink-0 border border-white"
              >
                <span>Consult Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-950" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white border border-neutral-800 bg-[#16181C]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0E11]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between border-b border-neutral-800">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 border-b border-neutral-800 pb-2">
              Exhibition Navigation Index
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-display uppercase tracking-wider text-neutral-200 hover:text-white py-2 border-b border-neutral-900"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-neutral-500">{link.code}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-neutral-800">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="flex items-center gap-3 text-xs font-mono text-neutral-300 py-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-white text-neutral-950 text-xs font-mono uppercase font-bold tracking-wider py-3 border border-white"
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
