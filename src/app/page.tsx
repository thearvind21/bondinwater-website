import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CapabilityStrip } from "@/components/CapabilityStrip";
import { NatureApproachSection } from "@/components/NatureApproachSection";
import { FeaturedProjectSection } from "@/components/FeaturedProjectSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { HabitatArchitectureStory } from "@/components/HabitatArchitectureStory";
import { ProcessSection } from "@/components/ProcessSection";
import { FounderStory } from "@/components/FounderStory";
import { SmartAquariumSection } from "@/components/SmartAquariumSection";
import { WhyBondInWater } from "@/components/WhyBondInWater";
import { ClientTrustSection } from "@/components/ClientTrustSection";
import { InteractiveHabitatEstimator } from "@/components/InteractiveHabitatEstimator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      {/* 00: Navigation Bar (Deep Canopy #1F4338) */}
      <Navbar />

      {/* 01: Hero Entrance — Extraordinary Environments for Life (Approved Reference) */}
      <Hero />

      {/* 02: Four-Capability Strip (Soft Mist #E9EFE7 — Approved Reference) */}
      <CapabilityStrip />

      {/* 03: Nature & Approach Section — Where Nature, Animals and Engineering Meet (White #FFFFFF — Approved Reference) */}
      <NatureApproachSection />

      {/* 04: Featured Project Section — The Oceanarium (Deep Canopy #1F4338 — Approved Reference) */}
      <FeaturedProjectSection />

      {/* 05: Master Capabilities — The 9 Divisions A through I (Soft Mist #E9EFE7) */}
      <ExpertiseSection />

      {/* 06: Curated Real Works Portfolio (White #FFFFFF) */}
      <ProjectGallery />

      {/* 07: Habitat Architecture Case Study Story (Soft Mist #E9EFE7) */}
      <HabitatArchitectureStory />

      {/* 08: The 8-Stage Turnkey Methodology (White #FFFFFF) */}
      <ProcessSection />

      {/* 09: Company Story & 30-Year Architectural Heritage (Deep Canopy #1F4338) */}
      <FounderStory />

      {/* 10: Specialised Technical Solutions & Apex Automation (Soft Mist #E9EFE7) */}
      <SmartAquariumSection />

      {/* 11: Why Choose BondInWater Differentiators (White #FFFFFF) */}
      <WhyBondInWater />

      {/* 12: Verified Client Collaborations & Trust (Soft Mist #E9EFE7) */}
      <ClientTrustSection />

      {/* 13: Interactive Living Habitat Feasibility Calculator (Soft Mist #E9EFE7) */}
      <InteractiveHabitatEstimator />

      {/* 14: Project Feasibility & Design Consultation Desk (White #FFFFFF) */}
      <ContactSection />

      {/* 15: Studio Directory Footer (Deep Canopy #1F4338) */}
      <Footer />
    </main>
  );
}