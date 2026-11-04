import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CompanyIntroduction } from "@/components/CompanyIntroduction";
import { ThreeBrandPillars } from "@/components/ThreeBrandPillars";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HabitatArchitectureStory } from "@/components/HabitatArchitectureStory";
import { AnimalNatureStorytelling } from "@/components/AnimalNatureStorytelling";
import { ProjectGallery } from "@/components/ProjectGallery";
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
    <main className="min-h-screen bg-[#F4F4EF] text-[#202723] selection:bg-[#1D382B] selection:text-[#F4F4EF]">
      {/* 00: Navigation Bar */}
      <Navbar />

      {/* 01: Hero Entrance — Extraordinary Environments. Engineered Around Nature. */}
      <Hero />

      {/* 02: Company Introduction — Where Nature, Design and Engineering Come Together */}
      <CompanyIntroduction />

      {/* 03: Three Brand Pillars — Nature • Projects • Engineering (Deep Forest #1D382B) */}
      <ThreeBrandPillars />

      {/* 04: Master Capabilities — The 9 Divisions A through I (Natural White #F4F4EF) */}
      <ExpertiseSection />

      {/* 05: Habitat Architecture Case Study Story (Warm Stone #E2E4DA — Epsten Group Style) */}
      <HabitatArchitectureStory />

      {/* 06: Animal & Nature Storytelling — Conservation Creed (Secondary Forest #304A38) */}
      <AnimalNatureStorytelling />

      {/* 07: Curated Real Works Portfolio (Okeanos Group 8-Category Layout — Natural White #F4F4EF) */}
      <ProjectGallery />

      {/* 08: The 8-Stage Turnkey Methodology (Natural White #F4F4EF / Warm Stone #E2E4DA) */}
      <ProcessSection />

      {/* 09: Company Story & 30-Year Architectural Heritage (Charcoal #202723) */}
      <FounderStory />

      {/* 10: Specialised Technical Solutions & Apex Automation (Natural White #F4F4EF) */}
      <SmartAquariumSection />

      {/* 11: Why Choose BondInWater Differentiators (Natural White #F4F4EF) */}
      <WhyBondInWater />

      {/* 12: Verified Client Collaborations & Trust (Natural White #F4F4EF) */}
      <ClientTrustSection />

      {/* 13: Interactive Living Habitat Feasibility Calculator (Natural White #F4F4EF) */}
      <InteractiveHabitatEstimator />

      {/* 14: Project Feasibility & Design Consultation Desk (Natural White #F4F4EF) */}
      <ContactSection />

      {/* 15: Studio Directory Footer (Deep Forest #1D382B) */}
      <Footer />
    </main>
  );
}