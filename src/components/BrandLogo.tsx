import React from "react";
import Link from "next/link";
import { LotusEmblem } from "./BotanicalDecorators";

interface BrandLogoProps {
  variant?: "dark" | "light" | "auto";
  className?: string;
}

export function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90 ${className}`}>
      {/* Emblem */}
      <div className={`relative flex items-center justify-center w-9 h-9 rounded-full border transition-transform duration-300 group-hover:scale-105 shrink-0 ${
        isDark 
          ? "border-[#344B38]/25 bg-[#344B38]/5 text-[#344B38]" 
          : "border-[#B18A60]/40 bg-white/10 text-[#F5F2E9]"
      }`}>
        <LotusEmblem className={`w-4.5 h-4.5 ${isDark ? "text-[#344B38]" : "text-[#B18A60]"}`} />
        <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#B18A60] ring-1 ring-[#F5F2E9]" />
      </div>

      {/* Typography Wordmark (Preserved exactly) */}
      <span className={`text-xl font-medium tracking-[0.12em] uppercase font-serif whitespace-nowrap ${
        isDark ? "text-[#292C25]" : "text-[#F5F2E9]"
      }`}>
        Bond<span className="font-normal italic lowercase text-[#B18A60]">in</span>Water
      </span>
    </Link>
  );
}
