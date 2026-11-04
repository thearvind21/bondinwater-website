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
    { name: "Home", href: "#hero" },
    { name: "Our Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#story" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F3F3EC]/95 backdrop-blur-md py-3.5 shadow-sm border-b border-[#DADDD3]"
            : "bg-[#F3F3EC]/90 backdrop-blur-sm py-4 border-b border-[#DADDD3]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo */}
            <BrandLogo variant="dark" />

            {/* Center: Clean Horizontal Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-wider text-[#202820] hover:text-[#46634B] transition-colors py-1 whitespace-nowrap font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Phone & Start Your Project CTA (Strictly Single-Line) */}
            <div className="hidden sm:flex items-center gap-3.5 xl:gap-5 shrink-0">
              {/* Direct Telephone Line */}
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-mono text-[#202820] hover:text-[#46634B] transition-colors whitespace-nowrap px-1 py-1"
                title="Direct Studio Desk"
              >
                <Phone className="w-3.5 h-3.5 text-[#46634B] shrink-0" />
                <span className="tabular-nums tracking-wide font-medium whitespace-nowrap">
                  {BRAND_CONTACT.phone}
                </span>
              </a>

              {/* Action CTA: Start Your Project */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#172D24] text-[#F3F3EC] hover:bg-[#294333] text-xs font-mono uppercase font-bold tracking-wider px-4 py-2.5 transition-all duration-200 shrink-0 border border-[#172D24] whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#172D24] hover:text-[#46634B] border border-[#DADDD3] bg-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F3F3EC]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between border-b border-[#DADDD3]">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#667367] border-b border-[#DADDD3] pb-2">
              BondInWater Navigation
            </div>
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-display uppercase tracking-wider text-[#172D24] hover:text-[#46634B] py-2.5 border-b border-[#DADDD3]/50"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B4BEA5]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#DADDD3]">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2 p-3 bg-white border border-[#DADDD3] text-xs font-mono text-[#172D24] font-medium"
            >
              <Phone className="w-4 h-4 text-[#46634B]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 p-3.5 bg-[#172D24] text-[#F3F3EC] text-xs font-mono uppercase font-bold tracking-wider"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
