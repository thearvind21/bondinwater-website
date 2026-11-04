import React from "react";

export function EditorialBadge({
  children,
  variant = "natural",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "forest" | "secondary" | "natural" | "sage" | "earth" | "stone" | "light" | "white" | "dark" | "moss";
  className?: string;
}) {
  const styles: Record<string, string> = {
    forest: "bg-[#172D24] text-[#F3F3EC] border-[#2E4739]",
    secondary: "bg-[#294333] text-[#F3F3EC] border-[#3D5E4A]",
    natural: "bg-[#46634B]/15 text-[#2B4430] border-[#46634B]/40 font-semibold",
    sage: "bg-[#B4BEA5]/30 text-[#172D24] border-[#B4BEA5]/70 font-semibold",
    earth: "bg-[#A87952]/15 text-[#7A4B29] border-[#A87952]/40 font-semibold",
    stone: "bg-[#DADDD3] text-[#202820] border-[#C7CBC0] font-semibold",
    light: "bg-[#F3F3EC] text-[#202820] border-[#DADDD3]",
    white: "bg-white text-[#202820] border-[#DADDD3]",
    // Compatibility fallbacks
    dark: "bg-[#172D24] text-[#F3F3EC] border-[#2E4739]",
    moss: "bg-[#46634B]/15 text-[#2B4430] border-[#46634B]/40 font-semibold",
  };

  const selectedStyle = styles[variant] || styles.natural;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono tracking-wider uppercase border ${selectedStyle} ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-current opacity-80" />
      {children}
    </span>
  );
}

// Alias for compatibility
export const MuseumBadge = EditorialBadge;

export function HairlineDivider({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`w-full h-[1px] ${
        dark ? "bg-[#2E4739]" : "bg-[#DADDD3]"
      } ${className}`}
    />
  );
}

export function ApertureMark({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

export const MuseumAperture = ApertureMark;
