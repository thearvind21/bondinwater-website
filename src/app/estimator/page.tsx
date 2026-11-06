import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveHabitatEstimator } from "@/components/InteractiveHabitatEstimator";

export const metadata = {
  title: "Project Feasibility & Planning Estimator — BondInWater",
  description: "Preliminary spatial and material feasibility calculator for living habitat and aquatic engineering projects.",
};

export default function EstimatorPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-[#1F4338] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold mb-2 block">
              BONDINWATER &bull; PLANNING TOOL
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif mb-4">
              Habitat Feasibility &amp; Preliminary Estimator
            </h1>
            <p className="text-sm sm:text-base text-white/80 font-sans font-light leading-relaxed">
              Use this interactive planning guide to explore volume dimensions, acrylic wall thicknesses, filtration sizing, and initial investment ranges. All specifications are preliminary and confirmed during Stage 01 Feasibility Study.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <InteractiveHabitatEstimator />
      </section>

      <Footer />
    </main>
  );
}
