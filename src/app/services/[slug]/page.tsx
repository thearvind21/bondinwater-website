import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero, BreadcrumbItem } from "@/components/PageHero";
import { COMPANY_DIVISIONS, CompanyDivision } from "@/data/bondinwater-data";
import { SERVICE_FAMILIES } from "@/data/service-families";

export function generateStaticParams() {
  return COMPANY_DIVISIONS.map((div) => ({
    slug: div.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = COMPANY_DIVISIONS.find((d) => d.id === slug);
  if (!division) return { title: "Service Not Found — BondInWater" };
  return {
    title: `${division.title} — BondInWater`,
    description: division.scopeSummary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = COMPANY_DIVISIONS.find((d) => d.id === slug);
  if (!division) notFound();

  // Find parent family
  const parentFamily = SERVICE_FAMILIES.find((f) => f.divisionIds.includes(division.id));

  // Find related services (sibling services in family or adjacent)
  const currentIndex = COMPANY_DIVISIONS.findIndex((d) => d.id === slug);
  const prevDivision = currentIndex > 0 ? COMPANY_DIVISIONS[currentIndex - 1] : null;
  const nextDivision = currentIndex < COMPANY_DIVISIONS.length - 1 ? COMPANY_DIVISIONS[currentIndex + 1] : null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ];
  if (parentFamily) {
    breadcrumbs.push({
      label: parentFamily.name,
      href: `/services#${parentFamily.id}`,
    });
  }

  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Shared Approved Page Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        currentBreadcrumb={division.title}
        eyebrow={
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8CA477] bg-white/10 px-2.5 py-1 rounded">
              CATEGORY {division.letter} // {division.museumCode}
            </span>
            <span className="text-xs font-sans text-white/70">
              Company Profile: {division.profilePages}
            </span>
          </div>
        }
        title={division.title}
        description={division.subtitle}
        imageSrc={division.image}
        imageAlt={`${division.title} — BondInWater Company Profile`}
        imagePosition="object-[75%_center] lg:object-[80%_center]"
        ctaText="Enquire For This Discipline"
        ctaHref={`/contact?service=${division.id}#enquiry-form`}
        ctaIcon="arrow-up-right"
        secondaryCtaText="All 12 Services"
        secondaryCtaHref="/services"
        heightClass="min-h-[380px] lg:min-h-[420px]"
      />

      {/* Main Content Body */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Main Column: Scope, What We Provide, Technical Specs, Gallery */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* Primary Featured Image */}
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#1F4338] shadow-md border border-[#1F4338]/10">
              <Image
                src={division.image}
                alt={division.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1F4338]/90 via-[#1F4338]/40 to-transparent p-6 text-white">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#8CA477] block mb-1">
                  AUTHENTIC COMPANY PROFILE ASSET
                </span>
                <p className="text-xs sm:text-sm font-sans text-white/80 italic">
                  &ldquo;{division.profileQuote}&rdquo;
                </p>
              </div>
            </div>

            {/* Documented Scope Summary */}
            <div className="bg-white rounded-lg p-8 sm:p-10 border border-[#1F4338]/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold">
                  OVERVIEW & SCOPE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
                Discipline Overview
              </h2>
              <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-light leading-relaxed">
                {division.scopeSummary}
              </p>
            </div>

            {/* What BondInWater Provides */}
            <div className="bg-white rounded-lg p-8 sm:p-10 border border-[#1F4338]/10 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold">
                  DOCUMENTED DELIVERABLES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
                What BondInWater Provides
              </h2>
              <div className="grid grid-cols-1 gap-4 pt-2">
                {division.whatWeProvide.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded bg-[#E9EFE7]/40 border border-[#1F4338]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#4F8278] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-sans text-[#27302B] font-normal leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights & Specifications */}
            <div className="bg-[#1F4338] text-white rounded-lg p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8CA477] font-semibold">
                  ENGINEERING BENCHMARKS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Technical Highlights & Standards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {division.keySpecs.map((spec, idx) => (
                  <div key={idx} className="p-4 rounded bg-white/5 border border-white/10 flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#8CA477] mt-0.5">0{idx + 1}</span>
                    <span className="text-sm font-sans text-white/90 leading-snug">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Photographic Gallery */}
            {division.galleryImages && division.galleryImages.length > 0 && (
              <div className="bg-white rounded-lg p-8 sm:p-10 border border-[#1F4338]/10 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold">
                    FIELD & ARCHIVE PHOTOGRAPHY
                  </span>
                  <span className="text-xs font-sans text-[#27302B]/50">
                    {division.galleryImages.length} Documented Assets
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1F4338]">
                  Visual Evidence from Company Profile
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {division.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded overflow-hidden bg-[#1F4338] border border-[#1F4338]/10 group">
                      <Image
                        src={img}
                        alt={`${division.title} documentation ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suitable Project Applications */}
            <div className="bg-white rounded-lg p-8 sm:p-10 border border-[#1F4338]/10 shadow-sm space-y-4">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                TYPICAL DEPLOYMENTS
              </span>
              <h2 className="text-2xl font-serif text-[#1F4338]">
                Suitable Environments & Project Types
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {division.projectTypes.map((pt, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans font-medium px-3.5 py-1.5 rounded-full bg-[#E9EFE7] text-[#1F4338] border border-[#1F4338]/10"
                  >
                    {pt}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Enquiry Box, Sibling Navigation, Metadata */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Enquiry Plaque */}
            <div className="bg-[#1F4338] text-white rounded-lg p-8 border border-white/10 shadow-lg sticky top-28">
              <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#8CA477] mb-2 block">
                PROJECT CONSULTATION
              </span>
              <h3 className="text-xl sm:text-2xl font-serif mb-4 leading-tight">
                Plan a {division.title} Installation
              </h3>
              <p className="text-sm font-sans font-light text-white/80 leading-relaxed mb-6">
                Connect directly with our multidisciplinary design team. We perform feasibility analysis, slab tolerance audits, and custom Life Support System design.
              </p>

              <div className="space-y-3 mb-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-sans text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#8CA477]" />
                  <span>Turnkey Project Execution</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#8CA477]" />
                  <span>30+ Years Architectural Heritage</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#8CA477]" />
                  <span>Biologist-Led Animal Welfare</span>
                </div>
              </div>

              <Link
                href={`/contact?service=${division.id}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white py-3.5 px-6 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-sm"
              >
                <span>Enquire For This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Turnkey Process Connection */}
            <div className="bg-white rounded-lg p-6 border border-[#1F4338]/10 shadow-sm space-y-3">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                DELIVERY METHODOLOGY
              </span>
              <h4 className="text-lg font-serif text-[#1F4338]">
                Delivered via 8-Stage Turnkey Process
              </h4>
              <p className="text-xs sm:text-sm font-sans font-light text-[#27302B]/80 leading-relaxed">
                From initial Feasibility Study to Commissioning and Operation &amp; Maintenance, all works follow our strict lifecycle stages.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#B47750] hover:text-[#1F4338] transition-colors pt-2"
              >
                <span>View Full 8-Stage Lifecycle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sibling Category Navigation */}
            <div className="bg-white rounded-lg p-6 border border-[#1F4338]/10 shadow-sm space-y-4">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4F8278] font-bold block">
                ALL 12 DISCIPLINES
              </span>
              <div className="space-y-2">
                {COMPANY_DIVISIONS.map((d) => (
                  <Link
                    key={d.id}
                    href={`/services/${d.id}`}
                    className={`block p-2.5 rounded text-xs font-sans transition-colors ${
                      d.id === division.id
                        ? "bg-[#1F4338] text-white font-medium"
                        : "text-[#27302B]/80 hover:bg-[#E9EFE7] hover:text-[#1F4338]"
                    }`}
                  >
                    <span className="font-mono font-bold mr-2">{d.letter}</span>
                    <span>{d.title}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Pagination Links */}
        <div className="mt-16 pt-8 border-t border-[#1F4338]/15 flex items-center justify-between flex-wrap gap-4">
          {prevDivision ? (
            <Link
              href={`/services/${prevDivision.id}`}
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#1F4338] hover:text-[#4F8278] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevDivision.title}</span>
            </Link>
          ) : <div />}

          <Link
            href="/services"
            className="text-xs font-sans uppercase tracking-[0.2em] text-[#B47750] font-semibold hover:underline"
          >
            Back to All 12 Services
          </Link>

          {nextDivision ? (
            <Link
              href={`/services/${nextDivision.id}`}
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#1F4338] hover:text-[#4F8278] transition-colors"
            >
              <span>Next: {nextDivision.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </main>
  );
}
