import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CapabilityStrip } from "@/components/CapabilityStrip";
import { SelectedProjects } from "@/components/SelectedProjects";
import { ServicesOverview } from "@/components/ServicesOverview";
import { AboutPreview } from "@/components/AboutPreview";
import { ProcessPreview } from "@/components/ProcessPreview";
import { EnquiryCTA } from "@/components/EnquiryCTA";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "BondInWater — Aquatic Design, Habitat Engineering & Turnkey Architecture",
  description: "BondInWater designs, engineers, and executes turnkey aquatic environments, transparent acrylic pools, zoological enclosures, and living habitats backed by 30+ years of architectural heritage.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      {/* 01: Navigation Bar */}
      <Navbar />

      {/* 02: Approved Cinematic Hero Entrance */}
      <Hero />

      {/* 03: Four Core Capability Strip */}
      <CapabilityStrip />

      {/* 04: Selected Projects (3-4 Verified Photographic Examples) */}
      <SelectedProjects />

      {/* 05: Services Overview (5 Service Families A through E) */}
      <ServicesOverview />

      {/* 06: About BondInWater (Philosophy, Conservation & Architectural Heritage) */}
      <AboutPreview />

      {/* 07: Our Process Preview (4 Concise Operational Phases) */}
      <ProcessPreview />

      {/* 08: Project Enquiry CTA & Consultation Desk */}
      <EnquiryCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
