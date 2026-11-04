import React from "react";
import Link from "next/link";
import { MuseumAperture } from "./MuseumComponents";

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
            ? "border-neutral-800 bg-[#141518] text-white"
            : "border-neutral-300 bg-white text-neutral-900"
        }`}
      >
        <MuseumAperture className="w-4 h-4 text-emerald-400" />
      </div>

      {/* Typography Wordmark (Clear, architectural, uppercase) */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-bold tracking-[0.14em] uppercase font-display leading-none whitespace-nowrap ${
            isDark ? "text-white" : "text-neutral-900"
          }`}
        >
          Bond<span className="font-light text-neutral-400">In</span>Water
        </span>
        <span
          className={`text-[9px] font-mono tracking-[0.24em] uppercase mt-0.5 ${
            isDark ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          Habitat Engineering
        </span>
      </div>
    </Link>
  );
}
