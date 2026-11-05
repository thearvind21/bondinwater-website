import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "dark" | "light" | "forest";
  className?: string;
}

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const isDarkCanvas = variant === "light" || variant === "forest";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      {/* Elegant Serif Wordmark matching approved reference */}
      <div className="flex items-baseline">
        <span
          className={`text-xl sm:text-2xl font-serif font-normal tracking-[0.03em] leading-none ${
            isDarkCanvas ? "text-white" : "text-[#1F4338]"
          }`}
        >
          BondInWater
        </span>
        <span
          className={`text-[10px] font-serif font-normal ml-0.5 relative -top-1.5 ${
            isDarkCanvas ? "text-white/80" : "text-[#1F4338]/80"
          }`}
        >
          ®
        </span>
      </div>

      {/* Small uppercase descriptor beneath */}
      <span
        className={`text-[8.5px] font-sans tracking-[0.22em] uppercase font-medium mt-1 ${
          isDarkCanvas ? "text-[#8CA477]" : "text-[#4F8278]"
        }`}
      >
        AQUATIC &middot; HABITAT &middot; ARCHITECTURE
      </span>
    </Link>
  );
}