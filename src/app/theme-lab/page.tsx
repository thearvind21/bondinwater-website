"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  THEME_CONFIGS,
  Theme01ForestPorcelain,
  Theme02BlackwaterLimestone,
  Theme03TerraOlive,
  Theme04EucalyptusGraphite,
  ThemeConfig,
} from "@/components/theme-lab/ThemePreviews";
import {
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  LayoutGrid,
  Check,
  Copy,
  ArrowLeft,
  Info,
  Eye,
  Sparkles,
} from "lucide-react";

type ViewportMode = "desktop" | "tablet" | "mobile";
type DisplayMode = "all" | "theme-01" | "theme-02" | "theme-03" | "theme-04" | "matrix";

export default function ThemeLabPage() {
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [activeTab, setActiveTab] = useState<DisplayMode>("all");
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const getViewportWidthClass = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[390px] mx-auto transition-all duration-300 shadow-2xl rounded-lg border-2 border-[#333]";
      case "tablet":
        return "max-w-[768px] mx-auto transition-all duration-300 shadow-2xl rounded-lg border-2 border-[#444]";
      case "desktop":
      default:
        return "w-full transition-all duration-300";
    }
  };

  const renderThemeComponent = (themeId: string) => {
    switch (themeId) {
      case "theme-01":
        return <Theme01ForestPorcelain />;
      case "theme-02":
        return <Theme02BlackwaterLimestone />;
      case "theme-03":
        return <Theme03TerraOlive />;
      case "theme-04":
        return <Theme04EucalyptusGraphite />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#111613] text-[#F4F4EF] font-sans antialiased">
      {/* Top Fixed Control Bar */}
      <header className="sticky top-0 z-50 bg-[#161D18]/95 backdrop-blur-md border-b border-[#2B382F] px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Title & Status */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#AEBBA4] hover:text-white transition-colors bg-[#202A23] px-2.5 py-1.5 border border-[#303E34]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Live Site</span>
            </Link>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
                <h1 className="text-sm font-display uppercase tracking-widest font-bold text-white">
                  Theme Comparison Lab
                </h1>
                <span className="text-[10px] font-mono uppercase bg-[#202A23] text-[#AEBBA4] px-2 py-0.5 border border-[#303E34]">
                  Internal Studio Tool
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#8C9B86] hidden sm:block">
                Evaluating 4 distinct visual directions before final deployment
              </span>
            </div>
          </div>

          {/* Center & Right Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
            
            {/* Theme Selector Tabs */}
            <div className="flex items-center bg-[#202A23] p-1 border border-[#303E34] text-xs font-mono">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 uppercase tracking-wider transition-all ${
                  activeTab === "all"
                    ? "bg-[#304A38] text-white font-bold shadow-sm"
                    : "text-[#AEBBA4] hover:text-white"
                }`}
              >
                All 4 Themes
              </button>
              {THEME_CONFIGS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as DisplayMode)}
                  className={`px-3 py-1.5 uppercase tracking-wider transition-all ${
                    activeTab === t.id
                      ? "bg-[#304A38] text-white font-bold shadow-sm"
                      : "text-[#AEBBA4] hover:text-white"
                  }`}
                >
                  T{t.number}
                </button>
              ))}
              <button
                onClick={() => setActiveTab("matrix")}
                className={`px-2.5 py-1.5 uppercase tracking-wider transition-all hidden sm:block ${
                  activeTab === "matrix"
                    ? "bg-[#304A38] text-white font-bold shadow-sm"
                    : "text-[#AEBBA4] hover:text-white"
                }`}
                title="2x2 Overview Matrix"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Viewport Width Switcher */}
            <div className="flex items-center bg-[#202A23] p-1 border border-[#303E34] text-xs font-mono">
              <button
                onClick={() => setViewport("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 uppercase tracking-wider transition-all ${
                  viewport === "desktop"
                    ? "bg-[#304A38] text-white font-bold shadow-sm"
                    : "text-[#AEBBA4] hover:text-white"
                }`}
                title="Desktop View (1440px / Full)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setViewport("tablet")}
                className={`flex items-center gap-1.5 px-3 py-1.5 uppercase tracking-wider transition-all ${
                  viewport === "tablet"
                    ? "bg-[#304A38] text-white font-bold shadow-sm"
                    : "text-[#AEBBA4] hover:text-white"
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setViewport("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 uppercase tracking-wider transition-all ${
                  viewport === "mobile"
                    ? "bg-[#304A38] text-white font-bold shadow-sm"
                    : "text-[#AEBBA4] hover:text-white"
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Lab Introduction & Methodological Integrity Notice */}
        <div className="bg-[#19221C] border border-[#2B3A30] p-6 sm:p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B98A57] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>FAIR COMPARATIVE EVALUATION PROTOCOL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white font-bold">
                Four Distinct Visual Directions. Zero Content Bias.
              </h2>
            </div>
            <div className="hidden lg:block text-right font-mono text-xs text-[#8C9B86]">
              <span>ACTIVE VIEWPORT: </span>
              <strong className="text-white uppercase font-bold">
                {viewport === "desktop" ? "1440px (Full Width)" : viewport === "tablet" ? "768px (Tablet)" : "375px (Mobile)"}
              </strong>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#AEBBA4] font-sans leading-relaxed max-w-4xl">
            To ensure an objective evaluation, all four hero previews share the <strong>exact same BondInWater logo</strong>, <strong>identical single-line navigation</strong>, <strong>identical headline and description</strong>, <strong>identical authentic completed project photography</strong>, and <strong>identical enquiry CTAs</strong>. Only visual hierarchy, background luminescence, contrast balance, button weight, and typographic atmosphere vary.
          </p>

          {/* Quick Palette Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#2B3A30]">
            {THEME_CONFIGS.map((t) => (
              <div
                key={t.id}
                onClick={() => setActiveTab(t.id as DisplayMode)}
                className={`p-3 bg-[#131A15] border cursor-pointer transition-all ${
                  activeTab === t.id
                    ? "border-[#52B788] ring-1 ring-[#52B788]"
                    : "border-[#2B3A30] hover:border-[#415547]"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="font-bold text-white">THEME {t.number}</span>
                  <span className="text-[10px] text-[#8C9B86]">{t.title}</span>
                </div>
                {/* 5 Swatches */}
                <div className="flex items-center gap-1.5">
                  {t.colors.map((c) => (
                    <div
                      key={c.name}
                      style={{ backgroundColor: c.hex }}
                      className="h-4 flex-1 border border-white/20 rounded-xs"
                      title={`${c.name}: ${c.hex}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Viewport Simulation Warning for Mobile/Tablet */}
        {viewport !== "desktop" && (
          <div className="text-center py-2 px-4 bg-[#202A23] border border-[#303E34] text-xs font-mono text-[#AEBBA4]">
            <span>Simulating </span>
            <strong className="text-white uppercase">{viewport} ({viewport === "tablet" ? "768px" : "375px"})</strong>
            <span> viewport width. The preview below is locked to exact responsive dimensions for testing layout rhythm and button tap areas.</span>
          </div>
        )}

        {/* 2X2 MATRIX OVERVIEW MODE */}
        {activeTab === "matrix" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2B3A30] pb-3">
              <h3 className="text-lg font-display uppercase tracking-wider text-white font-bold">
                2x2 Side-by-Side Architectural Matrix
              </h3>
              <span className="text-xs font-mono text-[#8C9B86]">Desktop comparison preview</span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              {THEME_CONFIGS.map((t) => (
                <div key={t.id} className="space-y-3 bg-[#19221C] p-4 border border-[#2B3A30]">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#2B3A30]">
                    <span className="font-bold text-white uppercase tracking-wider">
                      THEME {t.number} &bull; {t.title}
                    </span>
                    <button
                      onClick={() => setActiveTab(t.id as DisplayMode)}
                      className="text-[#52B788] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect Full View</span>
                    </button>
                  </div>
                  <div className="overflow-hidden border border-[#2B3A30]">
                    {renderThemeComponent(t.id)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INDIVIDUAL OR STACKED THEME PREVIEWS */}
        {activeTab !== "matrix" && (
          <div className="space-y-16">
            {THEME_CONFIGS.filter((t) => activeTab === "all" || activeTab === t.id).map((theme) => (
              <section key={theme.id} id={theme.id} className="space-y-4">
                
                {/* Theme Header Plaque */}
                <div className="bg-[#19221C] border border-[#2B3A30] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 bg-[#304A38] text-white font-bold">
                        THEME {theme.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-white font-bold">
                        {theme.title}
                      </h3>
                      <span className="text-xs font-mono text-[#AEBBA4] hidden sm:inline">
                        — {theme.subtitle}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-[#8C9B86]">
                      {theme.tagline}
                    </p>
                  </div>

                  {/* Character Badge */}
                  <div className="shrink-0 text-left md:text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B98A57] block font-semibold">
                      CHARACTER
                    </span>
                    <span className="text-xs font-mono text-white">
                      {theme.character}
                    </span>
                  </div>
                </div>

                {/* Simulated Responsive Container */}
                <div className="bg-[#0D120F] p-2 sm:p-6 border border-[#2B3A30] overflow-x-auto">
                  <div className={getViewportWidthClass()}>
                    {renderThemeComponent(theme.id)}
                  </div>
                </div>

                {/* Color Palette Swatch Drawer */}
                <div className="bg-[#161D18] border border-[#2B382F] p-4 sm:p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2B382F] mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#AEBBA4] font-bold">
                      THEME {theme.number} CHROMATIC PALETTE &bull; CLICK ANY SWATCH TO COPY HEX
                    </span>
                    {copiedHex && (
                      <span className="text-xs font-mono text-[#52B788] flex items-center gap-1 font-bold">
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied {copiedHex}</span>
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {theme.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => copyToClipboard(color.hex)}
                        className="group p-2.5 bg-[#1C261F] border border-[#2B3A30] hover:border-[#52B788] transition-all text-left flex flex-col justify-between space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-white group-hover:text-[#52B788]">
                            {color.name}
                          </span>
                          <Copy className="w-3 h-3 text-[#8C9B86] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div
                          style={{ backgroundColor: color.hex }}
                          className="h-8 w-full border border-white/20 shadow-inner"
                        />
                        <div className="space-y-0.5">
                          <span className="text-xs font-mono font-bold text-white block">
                            {color.hex}
                          </span>
                          <span className="text-[10px] font-sans text-[#8C9B86] block leading-snug">
                            {color.role}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </section>
            ))}
          </div>
        )}

        {/* Comparative Decision Matrix */}
        <section className="bg-[#19221C] border border-[#2B3A30] p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#2B3A30] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B98A57] font-bold">
              STRATEGIC EVALUATION MATRIX
            </span>
            <h3 className="text-2xl font-display uppercase tracking-tight text-white font-bold mt-1">
              Comparative Analysis Across 4 Directions
            </h3>
            <p className="text-xs sm:text-sm text-[#AEBBA4] font-sans mt-1">
              Key design characteristics to guide client selection and brand positioning.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-[#2B3A30] text-[#8C9B86] uppercase tracking-wider">
                  <th className="py-3 px-4">Theme Option</th>
                  <th className="py-3 px-4">Dominant Tone</th>
                  <th className="py-3 px-4">Atmosphere</th>
                  <th className="py-3 px-4">Contrast Ratio</th>
                  <th className="py-3 px-4">Best Target Audience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2B3A30] text-[#D8DFD5]">
                <tr className="hover:bg-[#202B23] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">01. Forest &amp; Porcelain</td>
                  <td className="py-3.5 px-4">Light-first Porcelain (#F5F5EF)</td>
                  <td className="py-3.5 px-4 text-[#AEBBA4]">Natural History Museum elegance, bright, editorial, spacious</td>
                  <td className="py-3.5 px-4"><span className="text-[#52B788] font-bold">12.8:1</span> (High)</td>
                  <td className="py-3.5 px-4">Luxury residential clients, architectural studios, high-end developers</td>
                </tr>
                <tr className="hover:bg-[#202B23] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">02. Blackwater &amp; Limestone</td>
                  <td className="py-3.5 px-4">Deep Abyssal Blackwater (#14221D)</td>
                  <td className="py-3.5 px-4 text-[#AEBBA4]">Immersive underwater mood, dramatic, twilight biome, luxurious</td>
                  <td className="py-3.5 px-4"><span className="text-[#52B788] font-bold">13.5:1</span> (High)</td>
                  <td className="py-3.5 px-4">Public oceanariums, nightlife resorts, executive boardroom atriums</td>
                </tr>
                <tr className="hover:bg-[#202B23] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">03. Terra &amp; Olive</td>
                  <td className="py-3.5 px-4">Warm Natural Stone (#E9E3D5)</td>
                  <td className="py-3.5 px-4 text-[#AEBBA4]">Organic, tactile, ethological, terracotta energy, animal-focused</td>
                  <td className="py-3.5 px-4"><span className="text-[#52B788] font-bold">8.4:1</span> (Warm/Balanced)</td>
                  <td className="py-3.5 px-4">Zoological parks, wildlife sanctuaries, eco-tourism resorts</td>
                </tr>
                <tr className="hover:bg-[#202B23] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">04. Eucalyptus &amp; Graphite</td>
                  <td className="py-3.5 px-4">Clean White with tint (#F4F7F3)</td>
                  <td className="py-3.5 px-4 text-[#AEBBA4]">Contemporary minimalism, precision engineering, subtle eucalyptus</td>
                  <td className="py-3.5 px-4"><span className="text-[#52B788] font-bold">14.2:1</span> (Very High)</td>
                  <td className="py-3.5 px-4">Commercial developers, institutional engineers, turnkey architects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* Footer Notice */}
      <footer className="border-t border-[#2B3A30] bg-[#0E1310] py-8 text-center text-xs font-mono text-[#8C9B86]">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>
            BondInWater Theme Comparison Lab &bull; Developed strictly as a side-by-side evaluation tool.
          </p>
          <p className="text-[11px] text-[#556557]">
            Production homepage (<Link href="/" className="text-[#AEBBA4] underline hover:text-white">www.bondinwater.com</Link>) remains completely unchanged.
          </p>
        </div>
      </footer>
    </div>
  );
}