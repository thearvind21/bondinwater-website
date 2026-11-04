"use client";

import React, { useState } from "react";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { MuseumBadge } from "./MuseumComponents";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Check, Send } from "lucide-react";

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
    <section id="contact" className="py-24 lg:py-32 bg-[#0D0E11] text-neutral-100 border-b border-neutral-800 relative bg-museum-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <MuseumBadge variant="moss">
              STUDIO DESK // PROJECT ENQUIRY
            </MuseumBadge>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              DIRECT TRANSMISSION TO SALES@BONDINWATER.COM
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.95]">
            Initiate Project Feasibility & Design Consultation.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
            From preliminary concept viability to long-term water parameter testing and habitat maintenance, BondInWater provides single-source accountability. Connect directly with our engineering desk.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels vs Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Studio Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-neutral-800 bg-[#141518] p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                  COMMUNICATION DESK
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-white mt-1">
                  BondInWater Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={`tel:${BRAND_CONTACT.phoneRaw}`}
                  className="flex items-start gap-3 p-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">DIRECT TELEPHONE DESK</span>
                    <span className="text-neutral-200 text-sm tracking-wide font-bold">{BRAND_CONTACT.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_CONTACT.email}`}
                  className="flex items-start gap-3 p-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">ELECTRONIC CORRESPONDENCE</span>
                    <span className="text-neutral-200 text-sm">{BRAND_CONTACT.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 bg-neutral-900 border border-neutral-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">OPERATIONAL HEADQUARTERS</span>
                    <span className="text-neutral-200">{BRAND_CONTACT.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-900 border border-neutral-800">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">STUDIO CONSULTATION HOURS</span>
                    <span className="text-neutral-200 block">{BRAND_CONTACT.hours.weekdays}</span>
                    <span className="text-neutral-400 text-[10px] block mt-0.5">{BRAND_CONTACT.hours.saturday}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Link */}
              <div className="pt-2">
                <a
                  href={BRAND_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1E2922] text-emerald-300 hover:bg-[#253728] border border-emerald-700/50 text-xs font-mono uppercase font-bold py-3.5 px-4 tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Connect on Official WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 border border-neutral-800 bg-[#16181C] p-6 sm:p-8 lg:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-950 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-tight text-white">
                  Consultation Request Ready for Transmission
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Select your preferred transmission channel below:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white hover:bg-emerald-600 text-xs font-mono uppercase font-bold tracking-wider py-3.5 px-6"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-mono uppercase font-bold tracking-wider py-3.5 px-6"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-300 uppercase tracking-widest pt-4 block mx-auto underline"
                >
                  Edit Submission Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-neutral-800 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                    PROJECT INTAKE SPECIFICATION
                  </span>
                  <h3 className="text-xl font-display uppercase tracking-tight text-white mt-0.5">
                    Consultation Brief
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Architect Rajesh Mehta"
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-neutral-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@studio.com"
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-neutral-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Mumbai, Pune, Goa"
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Capability Division of Interest *
                  </label>
                  <select
                    value={formData.requirementType}
                    onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-neutral-500"
                  >
                    {requirementOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-neutral-950 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Project Scope, Dimensions & Site Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe spatial footprint, indoor/outdoor civil conditions, target species, or architectural timelines..."
                    className="w-full bg-neutral-900 border border-neutral-800 text-white p-3.5 text-xs font-sans focus:outline-none focus:border-neutral-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-neutral-950 font-mono text-xs uppercase font-bold py-3.5 px-6 tracking-wider hover:bg-neutral-200 transition-colors border border-white"
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
