import React from "react";
import Link from "next/link";
import { ApertureMark } from "./EditorialComponents";

interface BrandLogoProps {
  variant?: "dark" | "light" | "forest";
  className?: string;
}

export function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  const isLightText = variant === "light" || variant === "forest";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      {/* Nature Engineered Geometric Aperture */}
      <div
        className={`flex items-center justify-center w-8 h-8 border transition-transform duration-200 group-hover:scale-105 shrink-0 ${
          isLightText
            ? "border-[#43644E] bg-[#304A38] text-[#F4F4EF]"
            : "border-[#E2E4DA] bg-[#EBECE4] text-[#1D382B]"
        }`}
      >
        <ApertureMark className={`w-4 h-4 ${isLightText ? "text-[#AEBBA4]" : "text-[#60775B]"}`} />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-bold tracking-[0.12em] uppercase font-display leading-none whitespace-nowrap ${
            isLightText ? "text-[#F4F4EF]" : "text-[#1D382B]"
          }`}
        >
          Bond<span className="font-light opacity-65">In</span>Water
        </span>
        <span
          className={`text-[9px] font-mono tracking-[0.24em] uppercase mt-0.5 ${
            isLightText ? "text-[#AEBBA4]" : "text-[#647368]"
          }`}
        >
          Nature Engineered
        </span>
      </div>
    </Link>
  );
}
