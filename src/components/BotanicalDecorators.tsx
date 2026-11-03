import React from "react";

export function LotusEmblem({ className = "w-6 h-6 text-[#B18A60]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Central petal */}
      <path d="M24 6 C21 16, 21 28, 24 38 C27 28, 27 16, 24 6 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Left petal */}
      <path d="M24 16 C16 19, 10 27, 12 36 C17 38, 21 37, 24 38" />
      {/* Right petal */}
      <path d="M24 16 C32 19, 38 27, 36 36 C31 38, 27 37, 24 38" />
      {/* Outermost left petal */}
      <path d="M22 24 C13 25, 6 32, 8 40 C14 42, 19 39, 23 39" />
      {/* Outermost right petal */}
      <path d="M26 24 C35 25, 42 32, 40 40 C34 42, 29 39, 25 39" />
      {/* Water base ripple */}
      <path d="M14 44 C19 43, 29 43, 34 44" strokeWidth="1.2" strokeOpacity="0.7" />
    </svg>
  );
}

export function WaterLilyDivider({ className = "w-48 text-[#B18A60]" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B18A60]/50" />
      <LotusEmblem className="w-5 h-5 text-[#B18A60] shrink-0" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B18A60]/50" />
    </div>
  );
}

export function FernFrondAccent({ className = "w-12 h-12 text-[#A5AD92]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 56 C24 48, 42 36, 52 12" strokeWidth="1.5" />
      <path d="M24 49 C28 44, 34 45, 36 47" />
      <path d="M22 47 C16 44, 14 40, 16 38" />
      <path d="M30 43 C36 38, 42 39, 44 42" />
      <path d="M28 40 C22 36, 20 32, 23 29" />
      <path d="M37 34 C44 29, 49 31, 51 34" />
      <path d="M35 32 C29 27, 28 22, 31 19" />
      <path d="M44 25 C50 21, 54 22, 56 25" />
      <path d="M42 22 C37 17, 37 12, 40 10" />
    </svg>
  );
}

export function MonsteraLeafLine({ className = "w-24 h-24 text-[#344B38]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Central leaf vein */}
      <path d="M40 74 C40 50, 40 30, 40 8" strokeWidth="1.4" />
      {/* Left lobe contour with fenestrations */}
      <path d="M40 8 C28 14, 18 26, 14 42 C12 52, 18 64, 40 74" />
      {/* Right lobe contour */}
      <path d="M40 8 C52 14, 62 26, 66 42 C68 52, 62 64, 40 74" />
      {/* Leaf cuts / slits */}
      <path d="M39 26 C30 24, 23 28, 20 32" />
      <path d="M41 26 C50 24, 57 28, 60 32" />
      <path d="M39 40 C26 38, 18 45, 16 50" />
      <path d="M41 40 C54 38, 62 45, 64 50" />
      <path d="M39 54 C28 54, 22 59, 22 64" />
      <path d="M41 54 C52 54, 58 59, 58 64" />
    </svg>
  );
}

export function SwimmingKoiSilhouette({ className = "w-16 h-16 text-[#B18A60]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Flowing body */}
      <path d="M14 46 C16 38, 24 26, 36 20 C46 15, 52 18, 50 26 C48 34, 38 42, 28 44 C20 46, 16 48, 14 46 Z" fill="currentColor" fillOpacity="0.06" />
      {/* Tail fin waves */}
      <path d="M14 46 C10 49, 6 52, 8 58 C12 56, 16 52, 18 46" />
      <path d="M14 46 C11 44, 7 42, 6 36 C10 39, 14 42, 16 45" />
      {/* Pectoral fins */}
      <path d="M38 20 C42 14, 48 10, 52 12 C48 16, 44 19, 41 21" />
      <path d="M28 44 C26 50, 24 54, 21 56 C23 51, 26 47, 28 44" />
      {/* Dorsal curve */}
      <path d="M32 24 C36 22, 42 22, 45 25" strokeWidth="0.9" />
    </svg>
  );
}

export function BotanicalCornerDecor({ className = "w-28 h-28 text-[#344B38]/20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M0 0 L40 0 C40 22, 22 40, 0 40 Z" fill="currentColor" fillOpacity="0.04" />
      <path d="M5 5 C25 5, 45 25, 45 45" strokeDasharray="3 3" />
      <path d="M10 2 C28 15, 35 28, 48 48" />
      <path d="M2 10 C15 28, 28 35, 48 48" />
      <circle cx="28" cy="28" r="3" fill="currentColor" fillOpacity="0.3" stroke="none" />
    </svg>
  );
}
