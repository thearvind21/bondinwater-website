import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "dark" | "light" | "forest";
  className?: string;
}

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const isDarkCanvas = variant === "light" || variant === "forest";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 shrink-0 transition-opacity hover:opacity-90 ${className}`}
    >
      {/* Official BondInWater Emblem from Company Profile */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
        <Image
          src="/images/bondinwater_logo_symbol.png"
          alt="BondInWater Official Logo Symbol"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Official BONDINWATER Wordmark */}
      <span
        className={`text-lg sm:text-xl font-sans font-bold tracking-tight uppercase leading-none ${
          isDarkCanvas ? "text-white" : "text-[#1F4338]"
        }`}
      >
        BONDINWATER
      </span>
    </Link>
  );
}