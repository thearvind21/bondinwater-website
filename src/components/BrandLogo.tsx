import React from "react";
import Link from "next/link";
import { ApertureMark } from "./EditorialComponents";

interface BrandLogoProps {
  variant?: "dark" | "light" | "auto";
  className?: string;
}

export function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      {/* Precision Engineering Aperture Icon */}
      <div
        className={`flex items-center justify-center w-8 h-8 border transition-transform duration-200 group-hover:scale-105 shrink-0 ${
          isDark
            ? "border-[#B4B9B9] bg-[#F1F1ED] text-[#171A19]"
            : "border-[#2D3331] bg-[#191C1B] text-[#F1F1ED]"
        }`}
      >
        <ApertureMark className={`w-4 h-4 ${isDark ? "text-[#79836D]" : "text-[#949F86]"}`} />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-bold tracking-[0.14em] uppercase font-display leading-none whitespace-nowrap ${
            isDark ? "text-[#171A19]" : "text-[#F1F1ED]"
          }`}
        >
          Bond<span className="font-light opacity-60">In</span>Water
        </span>
        <span
          className={`text-[9px] font-mono tracking-[0.24em] uppercase mt-0.5 ${
            isDark ? "text-[#565E5C]" : "text-[#A1A8A6]"
          }`}
        >
          Habitat Engineering
        </span>
      </div>
    </Link>
  );
}
