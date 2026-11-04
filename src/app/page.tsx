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
    <main className="min-h-screen bg-[#CED2D2] text-[#171A19] selection:bg-[#171A19] selection:text-[#F1F1ED]">
      {/* 00: Navigation Bar */}
      <Navbar />

      {/* 01: Hero Entrance (Light Editorial Canvas) */}
      <Hero />

      {/* 02: Studio Identity & Biome Ethos (Secondary Light Canvas #F1F1ED) */}
      <BrandStoryIntro />

      {/* 03: Master Capabilities — The 9 Divisions A through I (Light Editorial Canvas #CED2D2) */}
      <ExpertiseSection />

      {/* 04: The 8-Stage Turnkey Methodology (Secondary Light Canvas #F1F1ED) */}
      <ProcessSection />

      {/* 05: Curated Field Installations & Living Environments (Light Editorial Canvas #CED2D2) */}
      <ProjectGallery />

      {/* 06: Selective Charcoal Feature: Storytelling & Biome Heritage (#191C1B) */}
      <FounderStory />

      {/* 07: Specialised Technical Solutions & Apex Automation (Secondary Light Canvas #F1F1ED) */}
      <SmartAquariumSection />

      {/* 08: Why Choose BondInWater Differentiators (Light Editorial Canvas #CED2D2) */}
      <WhyBondInWater />

      {/* 09: Verified Client Collaborations & Institutional Trust (Secondary Light Canvas #F1F1ED) */}
      <ClientTrustSection />

      {/* 10: Interactive Living Habitat Feasibility Calculator (Light Editorial Canvas #CED2D2) */}
      <InteractiveHabitatEstimator />

      {/* 11: Project Feasibility & Design Consultation Desk (Secondary Light Canvas #F1F1ED) */}
      <ContactSection />

      {/* 12: Selective Charcoal Feature: Studio Directory Footer (#191C1B) */}
      <Footer />
    </main>
  );
}
