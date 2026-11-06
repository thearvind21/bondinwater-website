"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND_CONTACT, COMPANY_DIVISIONS } from "@/data/bondinwater-data";
import { Phone, Mail, MapPin, Clock, MessageSquare, Check, Send, ShieldCheck } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service");
  const initialProject = searchParams.get("project");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    requirementType: "01. Conceptualisation Services",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      const match = COMPANY_DIVISIONS.find((d) => d.id === initialService);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          requirementType: `${match.letter}. ${match.title}`,
        }));
      }
    } else if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: `Inquiring about project reference: ${initialProject}`,
      }));
    }
  }, [initialService, initialProject]);

  const requirementOptions = COMPANY_DIVISIONS.map(
    (d) => `${d.letter}. ${d.title} (${d.subtitle})`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
    }
  };

  const encodedEmailBody = encodeURIComponent(
    `Project Enquiry for BondInWater\n\n` +
    `Client Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone || "Not specified"}\n` +
    `Project Location: ${formData.location || "Not specified"}\n` +
    `Requirement Category: ${formData.requirementType}\n\n` +
    `Project Scope & Details:\n${formData.projectDetails || "Looking for initial feasibility consultation."}\n`
  );

  const mailtoUrl = `mailto:${BRAND_CONTACT.email}?subject=Project%20Enquiry%20-%20${encodeURIComponent(formData.fullName || "New Client")}&body=${encodedEmailBody}`;
  
  const whatsappUrl = `https://wa.me/919833661551?text=${encodeURIComponent(
    `Hello BondInWater team, my name is ${formData.fullName}. I would like to inquire regarding: ${formData.requirementType}. Location: ${formData.location || "India"}. Details: ${formData.projectDetails || "Looking for consultation."}`
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left Column: Direct Studio Channels */}
      <div className="lg:col-span-5 space-y-6">
        <div className="border border-[#1F4338]/10 bg-white rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-[#1F4338]/10 pb-4">
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#4F8278] block font-bold">
              COMMUNICATION DESK
            </span>
            <h3 className="text-xl font-serif text-[#1F4338] mt-1">
              BondInWater Headquarters
            </h3>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="flex items-start gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded hover:border-[#1F4338] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Direct Phone</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${BRAND_CONTACT.email}`}
              className="flex items-start gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded hover:border-[#1F4338] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Email Transmissions</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.email}</span>
              </div>
            </a>

            <div className="flex items-start gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded">
              <MapPin className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Studio Location</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded">
              <Clock className="w-4 h-4 text-[#4F8278] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Hours of Operation</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.hours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-[#1F4338] text-white space-y-3">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8CA477] font-semibold block">
            CONFIDENTIALITY &amp; FEASIBILITY
          </span>
          <p className="text-xs font-sans font-light text-white/80 leading-relaxed">
            All structural drawings, architectural floor plans, and site surveys are handled under strict engineering confidentiality. Initial feasibility consultations include civil slab load assessment and biological compatibility audits.
          </p>
        </div>
      </div>

      {/* Right Column: Enquiry Form */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-[#1F4338]/10 rounded-lg p-6 sm:p-10 shadow-sm">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 bg-[#8CA477]/20 text-[#1F4338] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-[#1F4338]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1F4338]">
                Enquiry Transmitted Successfully
              </h3>
              <p className="text-sm text-[#27302B]/80 max-w-md mx-auto font-sans font-light">
                Thank you, <span className="font-semibold text-[#1F4338]">{formData.fullName}</span>. Our engineering desk has recorded your consultation request and will reach out within 24 business hours.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-2 bg-[#1F4338] text-white px-5 py-2.5 rounded text-xs font-sans font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email Copy</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded text-xs font-sans font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@studio.com"
                    className="w-full text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98336 61551"
                    className="w-full text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                    Project Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Mumbai, Bengaluru, Dubai"
                    className="w-full text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                  Primary Discipline of Interest
                </label>
                <select
                  value={formData.requirementType}
                  onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                  className="w-full text-xs sm:text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                >
                  {requirementOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                  Project Scope, Biome or Structural Notes
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Outline dimensions, species, architectural context, or specific challenges..."
                  className="w-full text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white py-3.5 px-6 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Feasibility Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#E9EFE7] text-[#27302B] selection:bg-[#1F4338] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#1F4338] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#8CA477] font-semibold">
                BONDINWATER &bull; CONSULTATION DESK
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] mb-6">
              Initiate Project Feasibility &amp; <br />
              <span className="italic font-normal text-[#8CA477]">Design Consultation</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-sans font-light leading-relaxed max-w-2xl">
              From preliminary concept viability to long-term water parameter testing and habitat maintenance, BondInWater provides single-source accountability. Connect directly with our engineering desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-12 text-sm font-sans">Loading enquiry desk...</div>}>
          <ContactForm />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
