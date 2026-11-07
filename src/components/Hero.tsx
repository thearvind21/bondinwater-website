"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (e.clientY > rect.bottom) return;

      // Subtle normalized mouse parallax (-8px to +8px max)
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const targetX = ((e.clientX - centerX) / (rect.width / 2)) * -8;
      const targetY = ((e.clientY - centerY) / (rect.height / 2)) * -6;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMouseOffset({ x: targetX, y: targetY });
      });
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 1200) {
        setScrollY(currentScroll * 0.12); // Subtle 12% scroll depth
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[85vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#1F4338] text-white overflow-hidden"
      style={{ minHeight: "var(--site-hero-height)" }}
    >
      {/* Background Image Container with Cinematic Composition & Subtle Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="relative w-full h-full will-change-transform transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y + scrollY}px, 0) scale(1.04)`,
            transformOrigin: "70% center",
          }}
        >
          {/* Authentic BondInWater Clownfish & Sea Anemone (Company Profile Cover Master) */}
          <Image
            src="/images/hero_clownfish_cinematic.png"
            alt="BondInWater authentic clownfish and sea anemone aquatic ecosystem from Company Profile cover"
            fill
            className="object-cover object-[70%_center] sm:object-[75%_center] lg:object-[80%_center]"
            priority
            sizes="100vw"
            quality={95}
          />

          {/* Left Gradient Overlay: Preserves Deep Canopy #1F4338 for perfect text legibility while keeping right side vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4338] via-[#1F4338]/90 via-35% lg:via-45% to-transparent lg:w-[70%]" />
          
          {/* Mobile bottom-to-top gradient for small screen vertical readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338] via-[#1F4338]/60 to-transparent lg:hidden" />
          
          {/* Subtle natural underwater vignette at top and bottom edges */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1F4338]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1F4338]/60 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-6 sm:space-y-7">
          
          {/* Authentic Profile Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
              BONDINWATER &bull; COMPANY PROFILE
            </span>
          </div>

          {/* Headline matching approved reference: White serif + Italic Leaf Green emphasis */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal leading-[1.08] tracking-[-0.01em] text-white">
            We Create <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#8CA477]">Ecosystem&apos;s</span>
          </h1>

          {/* Authentic Company Profile Description */}
          <p className="text-base sm:text-lg text-white/90 font-sans font-light leading-relaxed max-w-lg">
            A Journey that originates from the inception of your dreams shaped by our craftsmanship and delivered to the customer&apos;s delight.
          </p>

          {/* CTAs: Earth Copper Primary Button + Secondary About Link */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3">
            {/* Primary CTA */}
            <a
              href="#approach"
              className="inline-flex items-center gap-2 bg-[#B47750] text-white hover:bg-[#9F6542] text-sm sm:text-base font-sans font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] transition-colors shadow-sm"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#story"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base font-sans font-medium transition-colors group py-2"
            >
              <span>About BondInWater</span>
              <ArrowUpRight className="w-4 h-4 text-[#8CA477] group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
