"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Phone, Droplets, Waves, Trees, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface ThemeConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  character: string;
  colors: {
    name: string;
    hex: string;
    role: string;
  }[];
}

export const THEME_CONFIGS: ThemeConfig[] = [
  {
    id: "theme-01",
    number: "01",
    title: "Forest & Porcelain",
    subtitle: "Light-first, premium, nature-inspired",
    tagline: "High editorial contrast between delicate porcelain grounds and deep evergreen forest accents.",
    character: "Light-first • Natural History Studio • Refined Editorial",
    colors: [
      { name: "Porcelain", hex: "#F5F5EF", role: "Primary Canvas / Main Background" },
      { name: "Forest", hex: "#193A2D", role: "Primary Brand / Display Headlines / Dark Accents" },
      { name: "Fern", hex: "#748A6C", role: "Secondary Muted Green / Dividers & Badges" },
      { name: "Copper", hex: "#B97952", role: "Warm Earth Accent / Metallic Details" },
      { name: "Charcoal", hex: "#252B26", role: "Deep Body Typography / High Legibility" },
    ],
  },
  {
    id: "theme-02",
    number: "02",
    title: "Blackwater & Limestone",
    subtitle: "Immersive dark-green hero with lighter content presentation",
    tagline: "Evoking deep Amazonian riverbeds and twilight biospheres, anchored by luminous limestone typography.",
    character: "Immersive Dark • Twilight Biosphere • Luminous Limestone",
    colors: [
      { name: "Blackwater", hex: "#14221D", role: "Deep Abyssal Canvas / Hero Background" },
      { name: "Limestone", hex: "#F1EFE6", role: "Luminous Typography & Clean Surfaces" },
      { name: "Moss", hex: "#708879", role: "Atmospheric Muted Green / Badges & Lines" },
      { name: "Bronze", hex: "#B98A57", role: "Refined Metallic CTA & Highlight Details" },
      { name: "Graphite", hex: "#29312C", role: "Subtle Card Panels & Structural Outlines" },
    ],
  },
  {
    id: "theme-03",
    number: "03",
    title: "Terra & Olive",
    subtitle: "Earthy, natural, expressive and animal-habitat focused",
    tagline: "Tactile natural stone surfaces enriched by rich bark tones, warm terracotta, and botanical olive.",
    character: "Earthy & Tactile • Ethological Focus • Terracotta Accents",
    colors: [
      { name: "Natural Stone", hex: "#E9E3D5", role: "Warm Textured Canvas / Ground" },
      { name: "Bark", hex: "#303A2B", role: "Deep Organic Timber / Primary Headlines" },
      { name: "Olive", hex: "#73774F", role: "Rich Botanical Foliage / Badges & Borders" },
      { name: "Terracotta", hex: "#B45D40", role: "Bold Clay Accent / Primary Action CTA" },
      { name: "Sandstone", hex: "#D5B98A", role: "Warm Substrate Highlights & Plaques" },
    ],
  },
  {
    id: "theme-04",
    number: "04",
    title: "Eucalyptus & Graphite",
    subtitle: "Clean, contemporary, architectural and engineering-led",
    tagline: "High architectural precision, minimalist geometry, graphite structure, and cool eucalyptus accents.",
    character: "Architectural Precision • Minimalist Grid • Engineering-Led",
    colors: [
      { name: "Clean White", hex: "#F4F7F3", role: "Crisp Architectural Canvas (Subtle Tint)" },
      { name: "Graphite", hex: "#252B28", role: "Precision Structural Typography & Headers" },
      { name: "Botanical", hex: "#27352D", role: "Deep Architectural Green / Containers" },
      { name: "Eucalyptus", hex: "#7B9687", role: "Silvery Cool Muted Green / Accents & Badges" },
      { name: "Copper", hex: "#A96A4C", role: "Precision Metallic Engineering Indicator" },
    ],
  },
];

// SHARED CONSTANTS
const SHARED_CONTENT = {
  headline: "Extraordinary Environments. Engineered Around Nature.",
  description:
    "From bespoke aquariums and natural habitats to architectural water features and precision engineering, BondInWater designs, builds and maintains extraordinary environments inspired by nature.",
  primaryCTA: "Explore Our Projects",
  secondaryCTA: "Discuss Your Project",
  phone: "+91 9833 661 551",
  phoneRaw: "+919833661551",
  image: "/images/bondinwater/ef9742_00d0a8d52ba24f73a1cc51b4e2821b92.jpg",
  imageCaption: "Bespoke Coral Reef Architecture • Private Architectural Residence",
  imageSpec: "PMMA Cast Acrylic (20mm–300mm) • Downflow Sump • Apex Automation",
};

const NAV_LINKS = [
  "Home",
  "Our Expertise",
  "Projects",
  "Architecture & Design",
  "About",
  "Process",
  "Why Us",
  "Contact",
];

// =========================================================================
// THEME 01 — FOREST & PORCELAIN
// Porcelain: #F5F5EF, Forest: #193A2D, Fern: #748A6C, Copper: #B97952, Charcoal: #252B26
// =========================================================================
export function Theme01ForestPorcelain() {
  return (
    <div className="w-full bg-[#F5F5EF] text-[#252B26] font-sans antialiased selection:bg-[#193A2D] selection:text-[#F5F5EF] border border-[#748A6C]/30 shadow-lg overflow-hidden">
      {/* 01. Navigation Bar */}
      <div className="w-full bg-[#F5F5EF]/95 border-b border-[#748A6C]/25 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 border border-[#748A6C]/40 bg-[#193A2D] text-[#F5F5EF] flex items-center justify-center font-display font-bold text-sm tracking-wider">
            BW
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold font-display uppercase tracking-[0.12em] text-[#193A2D] leading-none">
              Bond<span className="font-light opacity-65">In</span>Water
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#748A6C] mt-0.5 font-medium">
              Nature Engineered
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((link, idx) => (
            <span
              key={link}
              className={`text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                idx === 0
                  ? "text-[#193A2D] font-bold border-b border-[#193A2D] pb-0.5"
                  : "text-[#252B26]/80 hover:text-[#193A2D]"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Right Phone & CTA */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#252B26] font-medium whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-[#748A6C]" />
            <span>{SHARED_CONTENT.phone}</span>
          </div>
          <button className="bg-[#193A2D] text-[#F5F5EF] hover:bg-[#254C3C] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 border border-[#193A2D] transition-colors whitespace-nowrap shadow-sm">
            {SHARED_CONTENT.secondaryCTA}
          </button>
        </div>
      </div>

      {/* 02. Studio Identification Strip */}
      <div className="border-b border-[#748A6C]/20 bg-[#F5F5EF] px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#748A6C]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#B97952]" />
          <span className="text-[#193A2D] font-bold">THEME 01 // FOREST &amp; PORCELAIN</span>
          <span className="hidden sm:inline">&bull; LIGHT-FIRST NATURAL HISTORY</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>MUMBAI &bull; NATIONWIDE</span>
          <span>|</span>
          <span>DESIGN &bull; BUILD &bull; OPERATE</span>
        </div>
      </div>

      {/* 03. Hero Section Body */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#748A6C]/30 text-[10px] font-mono uppercase tracking-wider text-[#B97952] font-bold shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#B97952] rounded-full" />
              <span>HABITAT ARCHITECTURE &bull; BIOME DESIGN</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-[#193A2D] leading-[0.95] font-bold">
              {SHARED_CONTENT.headline}
            </h1>

            <p className="text-sm sm:text-base text-[#252B26]/85 font-sans leading-relaxed max-w-xl">
              {SHARED_CONTENT.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button className="bg-[#193A2D] text-[#F5F5EF] hover:bg-[#254C3C] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#193A2D] shadow-sm flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.primaryCTA}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#B97952]" />
              </button>

              <button className="bg-white text-[#193A2D] hover:bg-[#EBECE4] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#748A6C]/40 flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.secondaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#748A6C]" />
              </button>
            </div>

            {/* Capability Indicators */}
            <div className="pt-4 border-t border-[#748A6C]/25 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#748A6C]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#193A2D]" />
                <span className="text-[#252B26] font-medium">30+ Yrs Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#193A2D]" />
                <span className="text-[#252B26] font-medium">20mm–300mm Optical PMMA</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame Column (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border border-[#748A6C]/30 bg-white p-2.5 shadow-md">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EAE8DE] border border-[#748A6C]/20">
                <Image
                  src={SHARED_CONTENT.image}
                  alt="Authentic BondInWater living architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-2.5 left-2.5 bg-[#193A2D]/95 text-[#F5F5EF] px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-[#748A6C]/40">
                  GENUINE PROFILE INSTALLATION
                </div>
              </div>

              {/* Plaque Metadata */}
              <div className="p-3 bg-[#F5F5EF] border-t border-[#748A6C]/20 mt-2 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#193A2D] font-bold">{SHARED_CONTENT.imageCaption}</span>
                  <span className="text-[#B97952] font-semibold">VERIFIED</span>
                </div>
                <p className="text-[10px] font-mono text-[#748A6C]">
                  {SHARED_CONTENT.imageSpec}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// =========================================================================
// THEME 02 — BLACKWATER & LIMESTONE
// Blackwater: #14221D, Limestone: #F1EFE6, Moss: #708879, Bronze: #B98A57, Graphite: #29312C
// =========================================================================
export function Theme02BlackwaterLimestone() {
  return (
    <div className="w-full bg-[#14221D] text-[#F1EFE6] font-sans antialiased selection:bg-[#B98A57] selection:text-[#14221D] border border-[#708879]/30 shadow-2xl overflow-hidden">
      {/* 01. Navigation Bar */}
      <div className="w-full bg-[#14221D]/95 border-b border-[#29312C] px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 border border-[#B98A57]/60 bg-[#29312C] text-[#F1EFE6] flex items-center justify-center font-display font-bold text-sm tracking-wider">
            BW
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold font-display uppercase tracking-[0.12em] text-[#F1EFE6] leading-none">
              Bond<span className="font-light text-[#B98A57]">In</span>Water
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#708879] mt-0.5 font-medium">
              Nature Engineered
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((link, idx) => (
            <span
              key={link}
              className={`text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                idx === 0
                  ? "text-[#B98A57] font-bold border-b border-[#B98A57] pb-0.5"
                  : "text-[#F1EFE6]/70 hover:text-[#F1EFE6]"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Right Phone & CTA */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#F1EFE6]/80 font-medium whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-[#B98A57]" />
            <span>{SHARED_CONTENT.phone}</span>
          </div>
          <button className="bg-[#B98A57] text-[#14221D] hover:bg-[#C99A67] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 border border-[#B98A57] transition-colors whitespace-nowrap shadow-sm">
            {SHARED_CONTENT.secondaryCTA}
          </button>
        </div>
      </div>

      {/* 02. Studio Identification Strip */}
      <div className="border-b border-[#29312C] bg-[#14221D] px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#708879]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#B98A57]" />
          <span className="text-[#F1EFE6] font-bold">THEME 02 // BLACKWATER &amp; LIMESTONE</span>
          <span className="hidden sm:inline">&bull; IMMERSIVE TWILIGHT DEEP-GREEN</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>MUMBAI &bull; NATIONWIDE</span>
          <span>|</span>
          <span>DESIGN &bull; BUILD &bull; OPERATE</span>
        </div>
      </div>

      {/* 03. Hero Section Body */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#29312C] border border-[#708879]/40 text-[10px] font-mono uppercase tracking-wider text-[#B98A57] font-bold shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#B98A57] rounded-full" />
              <span>HABITAT ARCHITECTURE &bull; BIOME DESIGN</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-[#F1EFE6] leading-[0.95] font-bold">
              {SHARED_CONTENT.headline}
            </h1>

            <p className="text-sm sm:text-base text-[#F1EFE6]/80 font-sans leading-relaxed max-w-xl font-light">
              {SHARED_CONTENT.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button className="bg-[#B98A57] text-[#14221D] hover:bg-[#C99A67] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#B98A57] shadow-sm flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.primaryCTA}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#14221D]" />
              </button>

              <button className="bg-[#29312C] text-[#F1EFE6] hover:bg-[#343E38] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#708879]/50 flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.secondaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B98A57]" />
              </button>
            </div>

            {/* Capability Indicators */}
            <div className="pt-4 border-t border-[#29312C] grid grid-cols-2 gap-2 text-[11px] font-mono text-[#708879]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B98A57]" />
                <span className="text-[#F1EFE6] font-medium">30+ Yrs Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B98A57]" />
                <span className="text-[#F1EFE6] font-medium">20mm–300mm Optical PMMA</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame Column (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border border-[#29312C] bg-[#1a2b25] p-2.5 shadow-xl">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#101915] border border-[#29312C]">
                <Image
                  src={SHARED_CONTENT.image}
                  alt="Authentic BondInWater living architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-2.5 left-2.5 bg-[#14221D]/95 text-[#B98A57] px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-[#B98A57]/40">
                  GENUINE PROFILE INSTALLATION
                </div>
              </div>

              {/* Plaque Metadata */}
              <div className="p-3 bg-[#14221D] border-t border-[#29312C] mt-2 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#F1EFE6] font-bold">{SHARED_CONTENT.imageCaption}</span>
                  <span className="text-[#B98A57] font-semibold">VERIFIED</span>
                </div>
                <p className="text-[10px] font-mono text-[#708879]">
                  {SHARED_CONTENT.imageSpec}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// =========================================================================
// THEME 03 — TERRA & OLIVE
// Natural stone: #E9E3D5, Bark: #303A2B, Olive: #73774F, Terracotta: #B45D40, Sandstone: #D5B98A
// =========================================================================
export function Theme03TerraOlive() {
  return (
    <div className="w-full bg-[#E9E3D5] text-[#303A2B] font-sans antialiased selection:bg-[#B45D40] selection:text-[#E9E3D5] border border-[#73774F]/40 shadow-lg overflow-hidden">
      {/* 01. Navigation Bar */}
      <div className="w-full bg-[#E9E3D5]/95 border-b border-[#73774F]/30 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 border border-[#73774F] bg-[#303A2B] text-[#E9E3D5] flex items-center justify-center font-display font-bold text-sm tracking-wider">
            BW
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold font-display uppercase tracking-[0.12em] text-[#303A2B] leading-none">
              Bond<span className="font-light text-[#B45D40]">In</span>Water
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#73774F] mt-0.5 font-medium">
              Nature Engineered
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((link, idx) => (
            <span
              key={link}
              className={`text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                idx === 0
                  ? "text-[#B45D40] font-bold border-b border-[#B45D40] pb-0.5"
                  : "text-[#303A2B]/80 hover:text-[#B45D40]"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Right Phone & CTA */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#303A2B] font-medium whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-[#73774F]" />
            <span>{SHARED_CONTENT.phone}</span>
          </div>
          <button className="bg-[#B45D40] text-[#E9E3D5] hover:bg-[#9E4D34] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 border border-[#B45D40] transition-colors whitespace-nowrap shadow-sm">
            {SHARED_CONTENT.secondaryCTA}
          </button>
        </div>
      </div>

      {/* 02. Studio Identification Strip */}
      <div className="border-b border-[#73774F]/25 bg-[#E9E3D5] px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#73774F]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#B45D40]" />
          <span className="text-[#303A2B] font-bold">THEME 03 // TERRA &amp; OLIVE</span>
          <span className="hidden sm:inline">&bull; EARTHY HABITAT &amp; ETHOLOGY FOCUS</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>MUMBAI &bull; NATIONWIDE</span>
          <span>|</span>
          <span>DESIGN &bull; BUILD &bull; OPERATE</span>
        </div>
      </div>

      {/* 03. Hero Section Body */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D5B98A]/35 border border-[#73774F]/40 text-[10px] font-mono uppercase tracking-wider text-[#B45D40] font-bold shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#B45D40] rounded-full" />
              <span>HABITAT ARCHITECTURE &bull; BIOME DESIGN</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-[#303A2B] leading-[0.95] font-bold">
              {SHARED_CONTENT.headline}
            </h1>

            <p className="text-sm sm:text-base text-[#303A2B]/85 font-sans leading-relaxed max-w-xl font-normal">
              {SHARED_CONTENT.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button className="bg-[#B45D40] text-[#E9E3D5] hover:bg-[#9E4D34] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#B45D40] shadow-sm flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.primaryCTA}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#E9E3D5]" />
              </button>

              <button className="bg-[#D5B98A]/40 text-[#303A2B] hover:bg-[#D5B98A]/70 text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#73774F]/50 flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.secondaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#73774F]" />
              </button>
            </div>

            {/* Capability Indicators */}
            <div className="pt-4 border-t border-[#73774F]/30 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#73774F]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B45D40]" />
                <span className="text-[#303A2B] font-medium">30+ Yrs Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B45D40]" />
                <span className="text-[#303A2B] font-medium">20mm–300mm Optical PMMA</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame Column (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border border-[#73774F]/40 bg-[#DFD9CA] p-2.5 shadow-md">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#D3CCBC] border border-[#73774F]/30">
                <Image
                  src={SHARED_CONTENT.image}
                  alt="Authentic BondInWater living architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-2.5 left-2.5 bg-[#303A2B]/95 text-[#E9E3D5] px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-[#B45D40]/50">
                  GENUINE PROFILE INSTALLATION
                </div>
              </div>

              {/* Plaque Metadata */}
              <div className="p-3 bg-[#E9E3D5] border-t border-[#73774F]/30 mt-2 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#303A2B] font-bold">{SHARED_CONTENT.imageCaption}</span>
                  <span className="text-[#B45D40] font-semibold">VERIFIED</span>
                </div>
                <p className="text-[10px] font-mono text-[#73774F]">
                  {SHARED_CONTENT.imageSpec}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// =========================================================================
// THEME 04 — EUCALYPTUS & GRAPHITE
// Clean white: #F4F7F3, Graphite: #252B28, Botanical: #27352D, Eucalyptus: #7B9687, Copper: #A96A4C
// =========================================================================
export function Theme04EucalyptusGraphite() {
  return (
    <div className="w-full bg-[#F4F7F3] text-[#252B28] font-sans antialiased selection:bg-[#252B28] selection:text-[#F4F7F3] border border-[#7B9687]/30 shadow-lg overflow-hidden">
      {/* 01. Navigation Bar */}
      <div className="w-full bg-[#F4F7F3]/95 border-b border-[#7B9687]/25 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 border border-[#7B9687]/50 bg-[#252B28] text-[#F4F7F3] flex items-center justify-center font-display font-bold text-sm tracking-wider">
            BW
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold font-display uppercase tracking-[0.12em] text-[#252B28] leading-none">
              Bond<span className="font-light text-[#7B9687]">In</span>Water
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#7B9687] mt-0.5 font-medium">
              Nature Engineered
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((link, idx) => (
            <span
              key={link}
              className={`text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                idx === 0
                  ? "text-[#252B28] font-bold border-b border-[#252B28] pb-0.5"
                  : "text-[#252B28]/75 hover:text-[#252B28]"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Right Phone & CTA */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#252B28] font-medium whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-[#7B9687]" />
            <span>{SHARED_CONTENT.phone}</span>
          </div>
          <button className="bg-[#252B28] text-[#F4F7F3] hover:bg-[#27352D] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 border border-[#252B28] transition-colors whitespace-nowrap shadow-sm">
            {SHARED_CONTENT.secondaryCTA}
          </button>
        </div>
      </div>

      {/* 02. Studio Identification Strip */}
      <div className="border-b border-[#7B9687]/20 bg-[#F4F7F3] px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#7B9687]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#A96A4C]" />
          <span className="text-[#252B28] font-bold">THEME 04 // EUCALYPTUS &amp; GRAPHITE</span>
          <span className="hidden sm:inline">&bull; CONTEMPORARY ENGINEERING-LED</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>MUMBAI &bull; NATIONWIDE</span>
          <span>|</span>
          <span>DESIGN &bull; BUILD &bull; OPERATE</span>
        </div>
      </div>

      {/* 03. Hero Section Body */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#7B9687]/35 text-[10px] font-mono uppercase tracking-wider text-[#A96A4C] font-bold shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#A96A4C] rounded-full" />
              <span>HABITAT ARCHITECTURE &bull; BIOME DESIGN</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-[#252B28] leading-[0.95] font-bold">
              {SHARED_CONTENT.headline}
            </h1>

            <p className="text-sm sm:text-base text-[#252B28]/85 font-sans leading-relaxed max-w-xl font-normal">
              {SHARED_CONTENT.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button className="bg-[#252B28] text-[#F4F7F3] hover:bg-[#27352D] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#252B28] shadow-sm flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.primaryCTA}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#7B9687]" />
              </button>

              <button className="bg-white text-[#252B28] hover:bg-[#EAEFE9] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 border border-[#7B9687]/45 flex items-center gap-2 transition-all">
                <span>{SHARED_CONTENT.secondaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A96A4C]" />
              </button>
            </div>

            {/* Capability Indicators */}
            <div className="pt-4 border-t border-[#7B9687]/25 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#7B9687]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#252B28]" />
                <span className="text-[#252B28] font-medium">30+ Yrs Zoo Masterplanning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#252B28]" />
                <span className="text-[#252B28] font-medium">20mm–300mm Optical PMMA</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame Column (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="border border-[#7B9687]/30 bg-white p-2.5 shadow-md">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E7EDE6] border border-[#7B9687]/25">
                <Image
                  src={SHARED_CONTENT.image}
                  alt="Authentic BondInWater living architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-2.5 left-2.5 bg-[#252B28]/95 text-[#F4F7F3] px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-[#7B9687]/40">
                  GENUINE PROFILE INSTALLATION
                </div>
              </div>

              {/* Plaque Metadata */}
              <div className="p-3 bg-[#F4F7F3] border-t border-[#7B9687]/25 mt-2 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#252B28] font-bold">{SHARED_CONTENT.imageCaption}</span>
                  <span className="text-[#A96A4C] font-semibold">VERIFIED</span>
                </div>
                <p className="text-[10px] font-mono text-[#7B9687]">
                  {SHARED_CONTENT.imageSpec}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}