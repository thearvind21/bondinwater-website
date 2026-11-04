import React from "react";

export function EditorialBadge({
  children,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "moss" | "earth";
  className?: string;
}) {
  const styles = {
    light: "bg-[#F1F1ED] text-[#171A19] border-[#B4B9B9]",
    dark: "bg-[#191C1B] text-[#F1F1ED] border-[#2D3331]",
    moss: "bg-[#79836D]/15 text-[#58614E] border-[#79836D]/40 font-semibold",
    earth: "bg-[#A66547]/15 text-[#8A4F34] border-[#A66547]/40 font-semibold",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono tracking-wider uppercase border ${styles[variant]} ${className}`}
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
        dark ? "bg-[#2D3331]" : "bg-[#B4B9B9]"
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
