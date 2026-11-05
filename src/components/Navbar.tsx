"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    { name: "Home", href: "#hero", active: true },
    { name: "Services", href: "#expertise" },
    { name: "Our Work", href: "#approach" },
    { name: "About", href: "#story" },
    { name: "Our Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1F4338] ${
          isScrolled ? "py-3 shadow-md" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Left: Brand Logo */}
            <BrandLogo variant="forest" />

            {/* Center / Right: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-sans transition-colors relative py-1 ${
                    link.active
                      ? "text-white font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8CA477]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Action Button: Enquire Now ↗ */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-[#B47750] text-white hover:bg-[#9F6542] text-sm font-sans font-medium px-5 py-2.5 rounded-[4px] transition-colors whitespace-nowrap shadow-sm ml-2"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-1 bg-[#B47750] text-white text-xs font-sans font-medium px-3.5 py-2 rounded-[4px]"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#8CA477] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-[#1F4338] border-t border-[#8CA477]/25 lg:hidden flex flex-col p-6 space-y-5 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-white hover:text-[#8CA477] py-1 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] text-white font-sans font-medium py-3 px-6 rounded-[4px] shadow-sm text-sm"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}