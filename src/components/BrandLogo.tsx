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
      {/* Precision Nature-Engineered Aperture Icon */}
      <div
        className={`flex items-center justify-center w-8 h-8 border transition-transform duration-200 group-hover:scale-105 shrink-0 ${
          isLightText
            ? "border-[#3D5E4A] bg-[#294333] text-[#F3F3EC]"
            : "border-[#DADDD3] bg-[#EBEBE3] text-[#172D24]"
        }`}
      >
        <ApertureMark className={`w-4 h-4 ${isLightText ? "text-[#B4BEA5]" : "text-[#46634B]"}`} />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-bold tracking-[0.14em] uppercase font-display leading-none whitespace-nowrap ${
            isLightText ? "text-[#F3F3EC]" : "text-[#172D24]"
          }`}
        >
          Bond<span className="font-light opacity-65">In</span>Water
        </span>
        <span
          className={`text-[9px] font-mono tracking-[0.24em] uppercase mt-0.5 ${
            isLightText ? "text-[#B4BEA5]" : "text-[#667367]"
          }`}
        >
          Nature Engineered
        </span>
      </div>
    </Link>
  );
}
