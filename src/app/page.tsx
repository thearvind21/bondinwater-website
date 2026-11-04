import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThreeBrandPillars } from "@/components/ThreeBrandPillars";
import { ExpertiseSection } from "@/components/ExpertiseSection";
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
    <main className="min-h-screen bg-[#F3F3EC] text-[#202820] selection:bg-[#172D24] selection:text-[#F3F3EC]">
      {/* 00: Navigation Bar */}
      <Navbar />

      {/* 01: Hero Entrance — Where Nature Meets Extraordinary Design */}
      <Hero />

      {/* 02: Three Brand Pillars — Nature • Design • Engineering (Deep Forest #172D24) */}
      <ThreeBrandPillars />

      {/* 03: Master Capabilities — The 9 Divisions A through I (Natural White #F3F3EC) */}
      <ExpertiseSection />

      {/* 04: Animal & Nature Storytelling — Conservation Creed (Secondary Forest #294333) */}
      <AnimalNatureStorytelling />

      {/* 05: Curated Real Works Portfolio (Natural White #F3F3EC) */}
      <ProjectGallery />

      {/* 06: The 8-Stage Turnkey Methodology (Natural Stone #DADDD3 / #F3F3EC) */}
      <ProcessSection />

      {/* 07: Company Story & 30-Year Architectural Heritage (Charcoal #202522) */}
      <FounderStory />

      {/* 08: Specialised Technical Solutions & Apex Automation (Natural White #F3F3EC) */}
      <SmartAquariumSection />

      {/* 09: Why Choose BondInWater Differentiators (Natural White #F3F3EC) */}
      <WhyBondInWater />

      {/* 10: Verified Client Collaborations & Trust (Natural White #F3F3EC) */}
      <ClientTrustSection />

      {/* 11: Interactive Living Habitat Feasibility Calculator (Natural White #F3F3EC) */}
      <InteractiveHabitatEstimator />

      {/* 12: Project Feasibility & Design Consultation Desk (Natural White #F3F3EC) */}
      <ContactSection />

      {/* 13: Studio Directory Footer (Deep Forest #172D24) */}
      <Footer />
    </main>
  );
}
