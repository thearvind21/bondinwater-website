import React from "react";
import Image from "next/image";
import { TRUST_COLLABORATORS } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem } from "./BotanicalDecorators";
import { Building2, ShieldCheck, HeartHandshake } from "lucide-react";

export function ClientTrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F2E9] border-b border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Collaborations & Client Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            Built on Trust. <span className="italic font-light text-[#344B38]">Inspired by Nature.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            "Over the years, we've contributed to projects for renowned names through direct and collaborative efforts."
          </p>
        </div>

        {/* Verified Collaborator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Sanjeevani multi-speciality Hospital */}
          <div className="p-7 rounded-2xl bg-white/80 border border-[#E8E2D5] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="h-16 w-full relative flex items-center justify-start">
                <div className="relative h-14 w-32">
                  <Image
                    src="/images/bondinwater/ef9742_28b182b701ff4380a278b1c4327ad4b7.jpg"
                    alt="Sanjeevani Multi-Speciality Hospital Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#85866A]">Healthcare Infrastructure</span>
                <h3 className="text-base font-serif font-medium text-[#292C25]">Sanjeevani Multi-Speciality Hospital</h3>
              </div>
              <p className="text-xs text-[#292C25]/75 font-sans leading-relaxed font-light">
                Therapeutic indoor aquatic installation designed to induce psychological calm and restorative ambiance for clinical spaces.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E8E2D5] flex items-center gap-1.5 text-[11px] text-[#344B38] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Client Engagement</span>
            </div>
          </div>

          {/* APCPL Logo */}
          <div className="p-7 rounded-2xl bg-white/80 border border-[#E8E2D5] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="h-16 w-full relative flex items-center justify-start">
                <div className="relative h-14 w-36">
                  <Image
                    src="/images/bondinwater/ef9742_e3195093496d449f97f56bcc1fe02e7e.png"
                    alt="APCPL Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#85866A]">Corporate & Energy Sector</span>
                <h3 className="text-base font-serif font-medium text-[#292C25]">APCPL (Aravalli Power Company)</h3>
              </div>
              <p className="text-xs text-[#292C25]/75 font-sans leading-relaxed font-light">
                Large-scale water management and collaborative environmental aquatic display systems engineering.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E8E2D5] flex items-center gap-1.5 text-[11px] text-[#344B38] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Collaborative Corporate Project</span>
            </div>
          </div>

          {/* Luxury Residential & Private Estates */}
          <div className="p-7 rounded-2xl bg-white/80 border border-[#E8E2D5] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="h-16 w-full flex items-center">
                <div className="w-12 h-12 rounded-xl bg-[#344B38]/10 text-[#344B38] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#B18A60]" />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#85866A]">Private Estates & Villas</span>
                <h3 className="text-base font-serif font-medium text-[#292C25]">High-End Residential Architecture</h3>
              </div>
              <p className="text-xs text-[#292C25]/75 font-sans leading-relaxed font-light">
                Custom infinity acrylic pools, Japanese Nishikigoi ponds, and architectural paludariums for prestigious residences across Mumbai, Alibaug, and Pune.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E8E2D5] flex items-center gap-1.5 text-[11px] text-[#344B38] font-medium">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Private Bespoke Commisionings</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
