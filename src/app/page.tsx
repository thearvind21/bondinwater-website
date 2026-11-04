import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStoryIntro } from "@/components/BrandStoryIntro";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FounderStory } from "@/components/FounderStory";
import { SmartAquariumSection } from "@/components/SmartAquariumSection";
import { WhyBondInWater } from "@/components/WhyBondInWater";
import { ClientTrustSection } from "@/components/ClientTrustSection";
import { InteractiveHabitatEstimator } from "@/components/InteractiveHabitatEstimator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0D0E11] text-neutral-100 selection:bg-[#3D4B3E] selection:text-white">
      {/* 00: Navigation Bar */}
      <Navbar />

      {/* 01: Hero Entrance (Dark Exhibition) */}
      <Hero />

      {/* 02: Studio Identity & Biome Ethos (Cool Light Grey) */}
      <BrandStoryIntro />

      {/* 03: Master Capabilities — The 9 Divisions A through I (Dark Carbon Exhibition) */}
      <ExpertiseSection />

      {/* 04: The 8-Stage Turnkey Methodology (Cool Light Grey / White) */}
      <ProcessSection />

      {/* 05: Curated Field Installations & Living Environments (Dark Charcoal Gallery) */}
      <ProjectGallery />

      {/* 06: Company Story & Documented Strengths (Cool Light Grey) */}
      <FounderStory />

      {/* 07: Specialised Technical Solutions & Apex Automation (Dark Engineering Vault) */}
      <SmartAquariumSection />

      {/* 08: Why Choose BondInWater Differentiators (Cool Light Grey) */}
      <WhyBondInWater />

      {/* 09: Verified Client Collaborations & Institutional Trust (Dark Charcoal) */}
      <ClientTrustSection />

      {/* 10: Interactive Living Habitat Feasibility Calculator (Cool Light Grey) */}
      <InteractiveHabitatEstimator />

      {/* 11: Project Feasibility & Design Consultation Desk (Dark Carbon Split) */}
      <ContactSection />

      {/* 12: Museum Exhibition Directory Footer (Pitch Black) */}
      <Footer />
    </main>
  );
}
