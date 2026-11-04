"use client";

import React, { useState } from "react";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { EditorialBadge } from "./EditorialComponents";
import { Phone, Mail, MapPin, Clock, MessageSquare, Check, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    requirementType: "A. Conceptualisation & Architectural Design",
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
    <section id="contact" className="py-24 lg:py-32 bg-[#F4F4EF] text-[#202723] border-b border-[#E2E4DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <EditorialBadge variant="natural">
              STUDIO DESK &bull; PROJECT ENQUIRY
            </EditorialBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-[#60775B]">
              DIRECT TRANSMISSION TO SALES@BONDINWATER.COM
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#1D382B] leading-[0.95]">
            Initiate Project Feasibility &amp; Design Consultation.
          </h2>

          <p className="text-base sm:text-lg text-[#202723]/80 font-sans font-light leading-relaxed max-w-3xl">
            From preliminary concept viability to long-term water parameter testing and habitat maintenance, BondInWater provides single-source accountability. Connect directly with our engineering desk.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels vs Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Studio Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#E2E4DA] bg-white p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-[#E2E4DA] pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#304A38] block font-bold">
                  COMMUNICATION DESK
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-[#1D382B] mt-1 font-bold">
                  BondInWater Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={`tel:${BRAND_CONTACT.phoneRaw}`}
                  className="flex items-start gap-3 p-3 bg-[#F4F4EF] border border-[#E2E4DA] hover:border-[#1D382B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#304A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#60775B] block text-[10px] font-bold">DIRECT TELEPHONE DESK</span>
                    <span className="text-[#1D382B] text-sm tracking-wide font-bold">{BRAND_CONTACT.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_CONTACT.email}`}
                  className="flex items-start gap-3 p-3 bg-[#F4F4EF] border border-[#E2E4DA] hover:border-[#1D382B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#304A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#60775B] block text-[10px] font-bold">ELECTRONIC CORRESPONDENCE</span>
                    <span className="text-[#1D382B] text-sm font-semibold">{BRAND_CONTACT.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 bg-[#F4F4EF] border border-[#E2E4DA]">
                  <MapPin className="w-4 h-4 text-[#304A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#60775B] block text-[10px] font-bold">OPERATIONAL HEADQUARTERS</span>
                    <span className="text-[#1D382B] font-semibold">{BRAND_CONTACT.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F4F4EF] border border-[#E2E4DA]">
                  <Clock className="w-4 h-4 text-[#304A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#60775B] block text-[10px] font-bold">STUDIO CONSULTATION HOURS</span>
                    <span className="text-[#1D382B] block">{BRAND_CONTACT.hours.weekdays}</span>
                    <span className="text-[#60775B] text-[10px] block mt-0.5">{BRAND_CONTACT.hours.saturday}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Link */}
              <div className="pt-2">
                <a
                  href={BRAND_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1D382B] text-[#F4F4EF] hover:bg-[#304A38] border border-[#1D382B] text-xs font-mono uppercase font-bold py-3.5 px-4 tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#AEBBA4]" />
                  <span>Connect on Official WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 border border-[#E2E4DA] bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#F4F4EF] border border-[#304A38] mx-auto flex items-center justify-center text-[#304A38]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-tight text-[#1D382B] font-bold">
                  Consultation Request Ready for Transmission
                </h3>
                <p className="text-xs sm:text-sm text-[#202723]/80 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1D382B]">{formData.fullName}</strong>. Select your preferred transmission channel below:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#304A38] text-white hover:bg-[#1D382B] text-xs font-mono uppercase font-bold tracking-wider py-3.5 px-6 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#AEBBA4]" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 bg-[#1D382B] text-[#F4F4EF] hover:bg-[#304A38] text-xs font-mono uppercase font-bold tracking-wider py-3.5 px-6"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-[#60775B] hover:text-[#1D382B] uppercase tracking-widest pt-4 block mx-auto underline"
                >
                  Edit Submission Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#E2E4DA] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#304A38] block font-bold">
                    PROJECT INTAKE SPECIFICATION
                  </span>
                  <h3 className="text-xl font-display uppercase tracking-tight text-[#1D382B] mt-0.5 font-bold">
                    Consultation Brief
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#60775B] block font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Architect Rajesh Mehta"
                      className="w-full bg-[#F4F4EF] border border-[#E2E4DA] text-[#202723] px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#1D382B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#60775B] block font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@studio.com"
                      className="w-full bg-[#F4F4EF] border border-[#E2E4DA] text-[#202723] px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#1D382B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#60775B] block font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#F4F4EF] border border-[#E2E4DA] text-[#202723] px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#1D382B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#60775B] block font-bold">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Mumbai, Pune, Goa"
                      className="w-full bg-[#F4F4EF] border border-[#E2E4DA] text-[#202723] px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#1D382B]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#60775B] block font-bold">
                    Capability Division of Interest *
                  </label>
                  <select
                    value={formData.requirementType}
                    onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                    className="w-full bg-[#F4F4EF] border border-[#E2E4DA] text-[#202723] px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#1D382B]"
                  >
                    {requirementOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-white text-[#202723]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#60775B] block font-bold">
                    Project Scope, Dimensions &amp; Site Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe spatial footprint, indoor/outdoor civil conditions, target species, or architectural timelines..."
                    className="w-full bg-[#F4F4EF] border border-[#E2E4DA] text-[#202723] p-3.5 text-xs font-sans focus:outline-none focus:border-[#1D382B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1D382B] text-[#F4F4EF] font-mono text-xs uppercase font-bold py-3.5 px-6 tracking-wider hover:bg-[#304A38] transition-colors border border-[#1D382B]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Consultation Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}