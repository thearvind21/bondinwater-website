import React from 'react';

interface BotanicalProps {
  className?: string;
  variant?: 'branch' | 'leaves' | 'foliage' | 'flower';
}

export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = 'w-48 h-48 text-[#68736B]/30' }) => {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central stem */}
      <path
        d="M20 230 C 50 180, 80 130, 100 80 C 115 45, 130 20, 160 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Offshoot stems */}
      <path
        d="M60 160 C 85 145, 120 150, 150 135"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M85 110 C 60 90, 40 85, 25 70"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M110 65 C 135 55, 160 60, 185 45"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Detailed botanical leaves with fine veins */}
      {/* Leaf 1 */}
      <path
        d="M150 135 C 165 120, 175 105, 180 90 C 160 95, 145 110, 140 125 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M142 124 C 158 112, 170 100, 178 92" stroke="currentColor" strokeWidth="0.5" />
      <path d="M152 116 Q 160 112 165 115" stroke="currentColor" strokeWidth="0.4" />
      <path d="M158 110 Q 168 106 172 108" stroke="currentColor" strokeWidth="0.4" />

      {/* Leaf 2 */}
      <path
        d="M25 70 C 15 55, 10 40, 15 25 C 28 35, 35 48, 32 65 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M29 64 C 22 50, 18 38, 16 28" stroke="currentColor" strokeWidth="0.5" />
      
      {/* Leaf 3 */}
      <path
        d="M185 45 C 195 30, 195 18, 190 5 C 175 15, 168 28, 172 40 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M174 38 C 180 28, 185 18, 188 8" stroke="currentColor" strokeWidth="0.5" />

      {/* Blossom / Flower bud */}
      <g transform="translate(155, 8)">
        <path
          d="M0 0 C 10 -15, 25 -10, 20 5 C 10 10, 5 5, 0 0 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path
          d="M3 -3 C -5 -12, -15 -5, -8 5 C -2 8, 2 3, 3 -3 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="currentColor"
          fillOpacity="0.08"
        />
      </g>
    </svg>
  );
};

export const BotanicalFoliage: React.FC<{ className?: string }> = ({ className = 'w-64 h-64 text-[#8CA595]/20' }) => {
  return (
    <svg
      viewBox="0 0 260 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Palm / Monstera stylized leaf fronds */}
      <path
        d="M10 290 Q 70 200 130 110 Q 180 40 240 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Leaf blades */}
      <path
        d="M130 110 C 100 80, 70 85, 40 105 C 70 120, 100 120, 125 115 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M150 85 C 140 45, 120 30, 90 35 C 105 60, 125 75, 145 85 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M175 60 C 185 20, 180 5, 155 0 C 150 25, 160 45, 172 58 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M165 95 C 195 90, 225 105, 250 130 C 225 125, 195 115, 168 98 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M190 70 C 220 50, 245 55, 260 70 C 235 75, 215 75, 192 72 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="currentColor"
        fillOpacity="0.06"
      />
    </svg>
  );
};
