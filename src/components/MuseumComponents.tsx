import React from "react";

export function MuseumBadge({
  children,
  variant = "dark",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "moss";
  className?: string;
}) {
  const styles = {
    dark: "bg-[#16181C] text-neutral-300 border-neutral-800",
    light: "bg-white text-neutral-800 border-neutral-300",
    moss: "bg-[#2A352B] text-emerald-200/90 border-[#3D4B3E]",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono tracking-widest uppercase border ${styles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-none bg-current opacity-80" />
      {children}
    </span>
  );
}

export function HairlineDivider({
  className = "",
  dark = true,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`w-full h-[1px] ${
        dark ? "bg-neutral-800" : "bg-neutral-200"
      } ${className}`}
    />
  );
}

export function MuseumAperture({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
