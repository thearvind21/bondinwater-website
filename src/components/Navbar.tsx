"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Primary Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 bg-[#1F4338] border-b border-[#8CA477]/20 flex items-center transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            
            {/* Left: Official Brand Logo */}
            <BrandLogo variant="forest" />

            {/* Center / Right: Desktop Navigation Links (Single Line Guaranteed) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-sans transition-colors relative py-1 ${
                      active
                        ? "text-white font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8CA477]"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Action Button: Enquire Now ↗ */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-[#B47750] text-white hover:bg-[#9F6542] text-sm font-sans font-medium px-5 py-2.5 rounded-[4px] transition-colors whitespace-nowrap shadow-sm ml-2"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 bg-[#B47750] text-white text-xs font-sans font-medium px-3.5 py-2 rounded-[4px]"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
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
        <div className="fixed inset-0 top-20 z-40 bg-[#1F4338] border-t border-[#8CA477]/25 lg:hidden flex flex-col p-6 space-y-5 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-serif py-2 border-b border-white/10 ${
                    active ? "text-[#8CA477] font-semibold" : "text-white hover:text-[#8CA477]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/15">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] text-white py-3 rounded-[4px] font-sans text-sm font-medium"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
