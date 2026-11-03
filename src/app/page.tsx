import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStoryIntro } from "@/components/BrandStoryIntro";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FounderStory } from "@/components/FounderStory";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyBondInWater } from "@/components/WhyBondInWater";
import { SmartAquariumSection } from "@/components/SmartAquariumSection";
import { ClientTrustSection } from "@/components/ClientTrustSection";
import { InteractiveHabitatEstimator } from "@/components/InteractiveHabitatEstimator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F2E9] text-[#292C25] selection:bg-[#344B38] selection:text-[#F5F2E9]">
      {/* Section 1: Navigation */}
      <Navbar />

      {/* Section 2: Cinematic Hero */}
      <Hero />

      {/* Section 3: Brand Introduction & Philosophy */}
      <BrandStoryIntro />

      {/* Section 4: Master Capabilities (9 Official Divisions A through I) */}
      <ExpertiseSection />

      {/* Section 5: Signature Projects & Portfolio Gallery */}
      <ProjectGallery />

      {/* Section 6: Company Story & Philosophy (From Hobbyists to Creators) */}
      <FounderStory />

      {/* Section 7: Our Turnkey Architectural Process (8-Stage Lifecycle) */}
      <ProcessSection />

      {/* Section 8: Why Choose BondInWater? */}
      <WhyBondInWater />

      {/* Section 9: Specialised Technical Solutions & Neptune Systems Apex Automation */}
      <SmartAquariumSection />

      {/* Section 10: Client Trust & Verified Collaborators */}
      <ClientTrustSection />

      {/* Bonus Interactive Feature: Living Habitat Spatial Estimator */}
      <InteractiveHabitatEstimator />

      {/* Section 11: Contact & Project Consultation Enquiry */}
      <ContactSection />

      {/* Section 12: Premium Footer */}
      <Footer />
    </main>
  );
}
