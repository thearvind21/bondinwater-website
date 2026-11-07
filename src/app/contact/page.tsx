"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BRAND_CONTACT, COMPANY_DIVISIONS } from "@/data/bondinwater-data";
import { Phone, Mail, Globe, MessageSquare, Check, Send, Copy, ArrowUpRight } from "lucide-react";

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

  const [isPrepared, setIsPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

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

  // All twelve original company categories for the dropdown
  const requirementOptions = COMPANY_DIVISIONS.map(
    (d) => `${d.letter}. ${d.title}`
  );

  const emailSubject = encodeURIComponent(
    `Project Feasibility Consultation - ${formData.fullName || "New Client"}`
  );

  const rawEmailBody = 
    `Project Feasibility Consultation Enquiry\n` +
    `----------------------------------------\n` +
    `Client Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone || "Not provided"}\n` +
    `Project Location: ${formData.location || "Not provided"}\n` +
    `Discipline of Interest: ${formData.requirementType}\n\n` +
    `Project Scope & Notes:\n${formData.projectDetails || "Looking for preliminary feasibility assessment."}\n`;

  const mailtoUrl = `mailto:${BRAND_CONTACT.email}?subject=${emailSubject}&body=${encodeURIComponent(rawEmailBody)}`;

  const whatsappUrl = `https://wa.me/919833661551?text=${encodeURIComponent(
    `Hello BondInWater team, my name is ${formData.fullName}. I would like to inquire about: ${formData.requirementType}. Location: ${formData.location || "India"}. Details: ${formData.projectDetails || "Looking for consultation."}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsPrepared(true);
      // Automatically trigger email client
      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }
    }
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(rawEmailBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      
      {/* Left Column: Official Contact Channels (Page 35) (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="border border-[#1F4338]/10 bg-white rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-[#1F4338]/10 pb-4">
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#4F8278] block font-bold">
              OFFICIAL CONTACT CHANNELS
            </span>
            <h3 className="text-xl font-serif text-[#1F4338] mt-1">
              Direct Technical Desk
            </h3>
          </div>

          <div className="space-y-3.5 text-xs font-sans">
            <a
              href={`tel:${BRAND_CONTACT.phoneRaw}`}
              className="flex items-center gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded hover:border-[#1F4338] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#4F8278] shrink-0" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Telephone</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${BRAND_CONTACT.email}`}
              className="flex items-center gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded hover:border-[#1F4338] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#4F8278] shrink-0" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Email Transmissions</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.email}</span>
              </div>
            </a>

            <a
              href={`https://${BRAND_CONTACT.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 bg-[#E9EFE7]/40 border border-[#1F4338]/10 rounded hover:border-[#1F4338] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#4F8278] shrink-0" />
              <div>
                <span className="text-[#27302B]/60 block text-[10px] uppercase font-bold">Official Web Portal</span>
                <span className="text-sm font-medium text-[#1F4338]">{BRAND_CONTACT.website}</span>
              </div>
            </a>
          </div>

          <div className="pt-2 text-xs font-sans text-[#27302B]/70 leading-relaxed border-t border-[#1F4338]/10">
            Official contact details from Page 35 of the BondInWater Company Profile. All structural drawings, architectural floor plans, and site surveys are reviewed under strict engineering confidentiality.
          </div>
        </div>
      </div>

      {/* Right Column: Project Enquiry Form (7 cols) */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-[#1F4338]/10 rounded-lg p-6 sm:p-8 shadow-xs">
          {isPrepared ? (
            <div className="py-8 space-y-6">
              <div className="flex items-center gap-3 text-[#1F4338]">
                <div className="w-10 h-10 bg-[#8CA477]/20 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-[#1F4338]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif">
                    Enquiry Prepared for Dispatch
                  </h3>
                  <p className="text-xs text-[#27302B]/70 font-sans">
                    Choose your preferred communication channel to send your enquiry:
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 bg-[#1F4338] hover:bg-[#142C25] text-white p-3.5 rounded text-xs font-sans font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8CA477]" />
                  <span>Open in Email Application</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 rounded text-xs font-sans font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Desk</span>
                </a>
              </div>

              {/* Copy Message Preview Box */}
              <div className="p-4 rounded bg-[#E9EFE7]/50 border border-[#1F4338]/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#4F8278] font-bold">
                    Message Transcript:
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-[#B47750] hover:text-[#1F4338]"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Copied!" : "Copy Text"}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-[#27302B]/80 whitespace-pre-wrap leading-relaxed">
                  {rawEmailBody}
                </pre>
              </div>

              <button
                onClick={() => setIsPrepared(false)}
                className="text-xs font-sans text-[#27302B]/60 hover:text-[#1F4338] underline"
              >
                &larr; Edit form fields
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="e.g. Arvind Padyachi"
                    className="w-full text-xs sm:text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
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
                    className="w-full text-xs sm:text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98336 61551"
                    className="w-full text-xs sm:text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                    Project Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Mumbai, Bengaluru, Dubai"
                    className="w-full text-xs sm:text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-medium text-[#27302B] mb-1">
                  Primary Service of Interest
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
                  Project Description
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Outline dimensions, species, architectural context, or specific challenges..."
                  className="w-full text-xs sm:text-sm font-sans px-3.5 py-2.5 rounded border border-[#1F4338]/20 focus:outline-none focus:border-[#1F4338] bg-[#E9EFE7]/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] hover:bg-[#9F6542] text-white py-3.5 px-6 rounded-[4px] font-sans text-sm font-medium transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Feasibility Enquiry</span>
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

      {/* Shared Approved Page Hero - Compact 250-300px with Full-Width Aquatic Master */}
      <PageHero
        eyebrow="BONDINWATER • CONSULTATION DESK"
        title={
          <>
            Let&apos;s Create Something <span className="italic font-normal text-[#8CA477]">Extraordinary.</span>
          </>
        }
        description="Discuss your aquatic, architectural or habitat project with BondInWater."
        imageSrc="/images/hero_masters/contact_aquarium_installation_hero.jpg"
        imageAlt="BondInWater authentic full-width custom aquatic installation and consultation desk"
        imagePosition="object-[80%_center] lg:object-[85%_center]"
        ctaText="Start Your Enquiry"
        ctaHref="#enquiry-form"
        ctaIcon="arrow-down"
      />

      {/* Main Form Section - Immediately visible below compact hero */}
      <section id="enquiry-form" className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-12 text-sm font-sans">Loading enquiry desk...</div>}>
          <ContactForm />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
