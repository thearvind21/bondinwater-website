import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { InteractiveHabitatEstimator } from "@/components/InteractiveHabitatEstimator";

export const metadata = {
  title: "Project Feasibility & Planning Estimator — BondInWater",
  description: "Preliminary spatial and material feasibility calculator for living habitat and aquatic engineering projects.",
};

export default function EstimatorPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Shared Approved Page Hero */}
      <PageHero
        eyebrow="BONDINWATER • PLANNING & FEASIBILITY TOOL"
        title={
          <>
            Habitat Feasibility &amp; <span className="italic font-normal text-[#8CA477]">Preliminary Estimator</span>
          </>
        }
        description="Explore volume dimensions, acrylic wall thicknesses, filtration sizing, and initial investment ranges. All specifications are preliminary and confirmed during Stage 01 Feasibility Study."
        imageSrc="/images/pdf_images/p10_img1.png"
        imageAlt="BondInWater spatial and technical feasibility planning from Company Profile"
        imagePosition="object-[75%_center] lg:object-[80%_center]"
        ctaText="Calculate Feasibility"
        ctaHref="#estimator-tool"
        ctaIcon="arrow-down"
      />

      <section id="estimator-tool" className="py-12 lg:py-16">
        <InteractiveHabitatEstimator />
      </section>

      <Footer />
    </main>
  );
}
