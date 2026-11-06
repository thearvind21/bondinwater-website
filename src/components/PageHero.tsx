"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageHeroProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaIcon?: "arrow-down" | "arrow-up-right";
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  heightClass?: string;
  paddingClass?: string;
  headingClass?: string;
  contentSpacingClass?: string;
  breadcrumbs?: BreadcrumbItem[];
  currentBreadcrumb?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "object-[75%_center] lg:object-[80%_center]",
  ctaText,
  ctaHref,
  ctaIcon = "arrow-down",
  secondaryCtaText,
  secondaryCtaHref,
  heightClass = "min-h-[400px] lg:min-h-[450px]",
  paddingClass = "pt-28 pb-12 lg:pt-32 lg:pb-16",
  headingClass = "text-3xl sm:text-4xl lg:text-[46px]",
  contentSpacingClass = "space-y-4 sm:space-y-5",
  breadcrumbs,
  currentBreadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative ${heightClass} ${paddingClass} flex items-center bg-[#1F4338] text-white overflow-hidden`}
    >
      {/* Background Image Container with Cinematic Forest-Green Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-cover ${imagePosition}`}
            priority
            sizes="100vw"
            quality={92}
          />

          {/* Left Gradient Overlay: Deep Canopy #1F4338 for crisp text legibility, fading out to reveal authentic photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4338] via-[#1F4338]/90 via-35% lg:via-48% to-transparent lg:w-[72%]" />

          {/* Mobile bottom-to-top gradient for vertical readability on narrow screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4338] via-[#1F4338]/65 to-transparent lg:hidden" />

          {/* Top and bottom subtle vignettes for soft edge transitions */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1F4338]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1F4338]/60 to-transparent" />
        </div>
      </div>

      {/* Hero Content Container aligned with main site grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={`max-w-2xl lg:max-w-xl ${contentSpacingClass}`}>
          {/* Optional Breadcrumb Trail */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 text-xs font-sans text-white/60 mb-2 flex-wrap">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.href + idx}>
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                </React.Fragment>
              ))}
              {currentBreadcrumb && (
                <span className="text-[#8CA477] font-medium truncate max-w-[240px]">
                  {currentBreadcrumb}
                </span>
              )}
            </div>
          )}

          {/* Eyebrow Treatment */}
          {eyebrow && (
            <div className="flex items-center gap-2">
              {typeof eyebrow === "string" ? (
                <span className="text-[11px] sm:text-xs font-sans tracking-[0.22em] uppercase text-[#8CA477] font-semibold">
                  {eyebrow}
                </span>
              ) : (
                eyebrow
              )}
            </div>
          )}

          {/* White Serif Headline with Living Leaf Italic Emphasis */}
          <h1 className={`${headingClass} font-serif font-normal leading-[1.12] tracking-[-0.01em] text-white`}>
            {title}
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-white/90 font-sans font-light leading-relaxed max-w-lg">
            {description}
          </p>

          {/* CTAs: Earth Copper Primary + Optional Secondary Link */}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              {ctaText && ctaHref && (
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 bg-[#B47750] text-white hover:bg-[#9F6542] text-xs sm:text-sm font-sans font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-[4px] transition-colors shadow-sm"
                >
                  <span>{ctaText}</span>
                  {ctaIcon === "arrow-down" ? (
                    <ArrowDown className="w-4 h-4 text-white" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  )}
                </a>
              )}

              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs sm:text-sm font-sans font-medium transition-colors group py-2"
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8CA477] group-hover:text-white transition-colors" />
                </a>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
