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
    { name: "Architecture & Design", href: "#architecture" },
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
            ? "bg-[#F4F4EF]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#E2E4DA]"
            : "bg-[#F4F4EF]/90 backdrop-blur-sm py-4 border-b border-[#E2E4DA]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo */}
            <BrandLogo variant="dark" />

            {/* Center: Clean Horizontal Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-wider text-[#202723] hover:text-[#60775B] transition-colors py-1 whitespace-nowrap font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Phone & Discuss Your Project CTA (Strictly Single-Line) */}
            <div className="hidden sm:flex items-center gap-3.5 xl:gap-4 shrink-0">
              {/* Direct Telephone Line */}
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-mono text-[#202723] hover:text-[#60775B] transition-colors whitespace-nowrap px-1 py-1"
                title="Direct Studio Desk"
              >
                <Phone className="w-3.5 h-3.5 text-[#60775B] shrink-0" />
                <span className="tabular-nums tracking-wide font-medium whitespace-nowrap">
                  {BRAND_CONTACT.phone}
                </span>
              </a>

              {/* Action CTA: Discuss Your Project */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1D382B] text-[#F4F4EF] hover:bg-[#304A38] text-xs font-mono uppercase font-bold tracking-wider px-4 py-2.5 transition-all duration-200 shrink-0 border border-[#1D382B] whitespace-nowrap"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#1D382B] hover:text-[#60775B] border border-[#E2E4DA] bg-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F4EF]/98 backdrop-blur-xl xl:hidden pt-24 px-6 pb-10 flex flex-col justify-between border-b border-[#E2E4DA]">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#647368] border-b border-[#E2E4DA] pb-2">
              BondInWater Navigation
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-display uppercase tracking-wider text-[#1D382B] hover:text-[#60775B] py-2 border-b border-[#E2E4DA]/50"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#AEBBA4]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E2E4DA]">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2 p-3 bg-white border border-[#E2E4DA] text-xs font-mono text-[#1D382B] font-medium"
            >
              <Phone className="w-4 h-4 text-[#60775B]" />
              <span>{BRAND_CONTACT.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 p-3.5 bg-[#1D382B] text-[#F4F4EF] text-xs font-mono uppercase font-bold tracking-wider"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
