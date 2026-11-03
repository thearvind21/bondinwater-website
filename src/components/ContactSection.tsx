"use client";

import React, { useState } from "react";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { WaterLilyDivider, LotusEmblem, SwimmingKoiSilhouette } from "./BotanicalDecorators";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    requirementType: "Conceptualisation & Architectural Design",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const requirementOptions = [
    "A. Conceptualisation & Architectural Design (Zoo Masterplanning, 3D Walkthroughs)",
    "B. Turnkey Project Execution & Management (Complete 8-Stage Lifecycle)",
    "C. Aquariums & Aquatic Environments (Freshwater, Marine Reefs, Oceanariums, Ponds)",
    "D. Vivariums & Natural Habitats (Paludariums, Terrariums, Biome Retreats)",
    "E. Animal Experiences & Habitat Engineering (Enclosures, Petting Zoos, Aviaries)",
    "F. Acrylic Craftsmanship & Engineering (Pool Walls, 20mm-300mm Cast Sheets)",
    "G. GFRC & FRP Theming Works (Artificial Rockwork, Caves & Themed Habitats)",
    "H. Specialised Technical Solutions (Neptune Systems Apex Automation, Coral)",
    "I. Operation & Maintenance (Biologists, Water Testing, SOP Husbandry)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
    }
  };

  // Generate mailto and whatsapp links from form fields
  const encodedEmailBody = encodeURIComponent(
    `Project Enquiry for BondInWater\n\n` +
    `Client Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone || "Not specified"}\n` +
    `Project Location: ${formData.location || "Not specified"}\n` +
    `Requirement Category: ${formData.requirementType}\n\n` +
    `Project Scope & Details:\n${formData.projectDetails || "No additional notes provided."}\n`
  );

  const mailtoUrl = `mailto:${BRAND_CONTACT.email}?subject=Project%20Enquiry%20-%20${encodeURIComponent(formData.fullName || "New Client")}&body=${encodedEmailBody}`;
  
  const whatsappUrl = `https://wa.me/919833661551?text=${encodeURIComponent(
    `Hello BondInWater team, my name is ${formData.fullName}. I would like to inquire about: ${formData.requirementType}. Location: ${formData.location || "India"}. Details: ${formData.projectDetails || "Looking for consultation."}`
  )}`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F5F2E9] relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute top-1/3 -right-16 opacity-10 pointer-events-none hidden lg:block">
        <SwimmingKoiSilhouette className="w-96 h-96 text-[#344B38]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#344B38]">
            <LotusEmblem className="w-4 h-4 text-[#B18A60]" />
            <span>Direct Project Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292C25] font-normal tracking-tight">
            Initiate Your <br className="hidden sm:inline" />
            <span className="italic font-light text-[#344B38]">Architectural Commission.</span>
          </h2>

          <WaterLilyDivider className="w-40 mx-auto" />

          <p className="text-base sm:text-lg text-[#292C25]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Whether you are planning a residential paludarium, a turnkey oceanarium, a zoo masterplan, or an acrylic swimming pool, our engineering and biological teams are ready to assist.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Verified Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18A60]">
                Verified Contact Channels
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#292C25] font-normal">
                Connect Directly with Our Specialists.
              </h3>
              <p className="text-sm text-[#292C25]/80 font-sans font-light leading-relaxed">
                We work directly with property owners, architects, hospitality developers, and zoological institutions across India and internationally.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone */}
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                className="group p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#344B38]/40 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#344B38]/10 text-[#344B38] group-hover:bg-[#344B38] group-hover:text-[#F5F2E9] transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-[#B18A60] group-hover:text-[#F5F2E9]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#85866A] font-semibold">Direct Telephone</span>
                  <p className="text-base font-semibold text-[#292C25] group-hover:text-[#344B38] transition-colors whitespace-nowrap">
                    {BRAND_CONTACT.phone}
                  </p>
                  <p className="text-xs text-[#85866A]">Official contact listed in company profile</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BRAND_CONTACT.email}?subject=Project%20Enquiry%20-%20BondInWater`}
                className="group p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#344B38]/40 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#344B38]/10 text-[#344B38] group-hover:bg-[#344B38] group-hover:text-[#F5F2E9] transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-[#B18A60] group-hover:text-[#F5F2E9]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#85866A] font-semibold">Official Email</span>
                  <p className="text-base font-semibold text-[#292C25] group-hover:text-[#344B38] transition-colors">
                    {BRAND_CONTACT.email}
                  </p>
                  <p className="text-xs text-[#85866A]">Direct inbox for architectural tenders & inquiries</p>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D5] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#344B38]/10 text-[#344B38] shrink-0">
                  <MapPin className="w-5 h-5 text-[#B18A60]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#85866A] font-semibold">Headquarters</span>
                  <p className="text-base font-semibold text-[#292C25]">
                    {BRAND_CONTACT.location}
                  </p>
                  <p className="text-xs text-[#85866A]">Projects executed pan-India and globally</p>
                </div>
              </div>

              {/* Website link */}
              <a
                href="https://www.bondinwater.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#344B38]/40 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#344B38]/10 text-[#344B38] group-hover:bg-[#344B38] group-hover:text-[#F5F2E9] transition-colors shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-[#B18A60] group-hover:text-[#F5F2E9]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#85866A] font-semibold">Official Portal</span>
                  <p className="text-base font-semibold text-[#292C25] group-hover:text-[#344B38] transition-colors">
                    {BRAND_CONTACT.website}
                  </p>
                  <p className="text-xs text-[#85866A]">Verified company domain</p>
                </div>
              </a>

            </div>

            {/* Turnkey Assurance */}
            <div className="p-4 rounded-2xl bg-[#344B38]/5 border border-[#344B38]/15 text-xs text-[#292C25]/80 font-sans leading-relaxed">
              <span className="font-semibold text-[#344B38]">Design → Build → Operate: </span>
              From preliminary concept feasibility to long-term water parameter testing and habitat maintenance, BondInWater provides complete single-source delivery.
            </div>

          </div>

          {/* Right Column: Functional Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-10 shadow-lg">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#E8E2D5] pb-4 mb-2">
                    <h4 className="text-xl font-serif text-[#292C25]">Project Enquiry Brief</h4>
                    <p className="text-xs text-[#85866A] mt-0.5">
                      Please provide your project specifications to prepare a preliminary feasibility assessment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#292C25] block">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#F5F2E9]/40 text-sm focus:outline-none focus:border-[#344B38] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#292C25] block">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#F5F2E9]/40 text-sm focus:outline-none focus:border-[#344B38] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#292C25] block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#F5F2E9]/40 text-sm focus:outline-none focus:border-[#344B38] transition-colors"
                      />
                    </div>

                    {/* Project Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#292C25] block">
                        Project Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Mumbai, Goa, Alibaug, Delhi"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#F5F2E9]/40 text-sm focus:outline-none focus:border-[#344B38] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Type of Requirement */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#292C25] block">
                      Type of Requirement <span className="text-rose-600">*</span>
                    </label>
                    <select
                      value={formData.requirementType}
                      onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#F5F2E9]/40 text-xs sm:text-sm focus:outline-none focus:border-[#344B38] transition-colors"
                    >
                      {requirementOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#292C25] block">
                      Project Details & Scope Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Describe dimensions, species envisioned, indoor/outdoor context, or architectural timelines..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D5] bg-[#F5F2E9]/40 text-sm focus:outline-none focus:border-[#344B38] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#344B38] text-[#F5F2E9] hover:bg-[#253728] text-xs font-semibold tracking-wider uppercase py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
                    >
                      <span>Review & Transmit Enquiry</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B18A60]" />
                    </button>
                    <p className="text-[11px] text-[#85866A] text-center mt-2">
                      Direct transmission to sales@bondinwater.com & official WhatsApp desk.
                    </p>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation with Direct Action Links */
                <div className="space-y-6 py-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#344B38]/10 text-[#344B38] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#344B38]" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif text-[#292C25]">Enquiry Brief Prepared</h4>
                    <p className="text-xs sm:text-sm text-[#85866A] max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#292C25]">{formData.fullName}</span>. Your project brief has been compiled. Choose your preferred direct communication channel to deliver it immediately to our lead engineering desk:
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-[#F5F2E9] border border-[#E8E2D5] text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <p><span className="text-[#85866A]">Category:</span> {formData.requirementType}</p>
                    <p><span className="text-[#85866A]">Location:</span> {formData.location || "Not specified"}</p>
                    <p><span className="text-[#85866A]">Email:</span> {formData.email}</p>
                    {formData.phone && <p><span className="text-[#85866A]">Phone:</span> {formData.phone}</p>}
                  </div>

                  {/* Direct Transmission Options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider shadow hover:opacity-95 transition-opacity"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 9833 661 551)</span>
                    </a>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#344B38] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider hover:bg-[#253728] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#B18A60]" />
                      <span>Send to sales@bondinwater.com</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        location: "",
                        requirementType: "Conceptualisation & Architectural Design",
                        projectDetails: "",
                      });
                    }}
                    className="text-xs text-[#85866A] hover:text-[#292C25] underline pt-2 block mx-auto"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
