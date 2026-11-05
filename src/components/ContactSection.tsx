"use client";

import React, { useState } from "react";
import { BRAND_CONTACT } from "@/data/bondinwater-data";
import { Phone, Mail, MapPin, Clock, MessageSquare, Check, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    requirementType: "01. Conceptualisation Services",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const requirementOptions = [
    "01. Conceptualisation Services (Visionary Architecture, 3D Walkthroughs)",
    "02. Designing Services (Zoo Masterplanning, Animal Enclosures, MEP & HVAC)",
    "03. Execution & Management Services (Advanced Engineering & Timelines)",
    "04. Operation & Maintenance (Biologists, Water Testing & SOP Husbandry)",
    "05. Acrylic Craftsmanship (20mm to 300mm Cast PMMA Sheets)",
    "06. Vivarium, Terrarium, Ponds & Aquatic Environments (Reefs, Biotopes)",
    "07. Mini Petting Zoo (Docile Animal Interaction for Resorts & Hotels)",
    "08. Aviary Engineering (Multispecies Walkthroughs & Aviary Mesh)",
    "09. Captive Breeding of Exotic Species (Freshwater Stingrays)",
    "10. Acrylic Swimming Pools (Crystal Clear Transparent Walls)",
    "11. GFRC & FRP Theming Works (Artificial Rock Formations & Caves)",
    "12. Customised Solutions (Filtration, Apex Automation, Taxidermy & Prosthetics)"
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
    <section id="contact" className="py-24 lg:py-32 bg-white text-[#27302B] border-b border-[#8CA477]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#4F8278] font-bold">
              STUDIO DESK &bull; PROJECT ENQUIRY
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8CA477]">
              DIRECT TRANSMISSION TO SALES@BONDINWATER.COM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F4338] leading-[1.1]">
            Initiate Project Feasibility &amp; Design Consultation
          </h2>

          <p className="text-base sm:text-lg text-[#27302B]/85 font-sans font-light leading-relaxed max-w-3xl">
            From preliminary concept viability to long-term water parameter testing and habitat maintenance, BondInWater provides single-source accountability. Connect directly with our engineering desk.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels vs Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Studio Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#8CA477]/30 bg-[#E9EFE7]/40 rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-[#8CA477]/20 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F8278] block font-bold">
                  COMMUNICATION DESK
                </span>
                <h3 className="text-xl font-serif text-[#1F4338] mt-1 font-bold">
                  BondInWater Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={`tel:${BRAND_CONTACT.phoneRaw}`}
                  className="flex items-start gap-3 p-3 bg-white border border-[#8CA477]/25 rounded hover:border-[#1F4338] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1F4338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#4F8278] block text-[10px] font-bold">DIRECT TELEPHONE DESK</span>
                    <span className="text-[#1F4338] text-sm tracking-wide font-bold">{BRAND_CONTACT.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_CONTACT.email}`}
                  className="flex items-start gap-3 p-3 bg-white border border-[#8CA477]/25 rounded hover:border-[#1F4338] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1F4338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#4F8278] block text-[10px] font-bold">ELECTRONIC CORRESPONDENCE</span>
                    <span className="text-[#1F4338] text-sm font-semibold">{BRAND_CONTACT.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 bg-white border border-[#8CA477]/25 rounded">
                  <MapPin className="w-4 h-4 text-[#1F4338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#4F8278] block text-[10px] font-bold">OPERATIONAL HEADQUARTERS</span>
                    <span className="text-[#1F4338] font-semibold">{BRAND_CONTACT.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white border border-[#8CA477]/25 rounded">
                  <Clock className="w-4 h-4 text-[#1F4338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#4F8278] block text-[10px] font-bold">STUDIO CONSULTATION HOURS</span>
                    <span className="text-[#1F4338] block">{BRAND_CONTACT.hours.weekdays}</span>
                    <span className="text-[#4F8278] text-[10px] block mt-0.5">{BRAND_CONTACT.hours.saturday}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Link */}
              <div className="pt-2">
                <a
                  href={BRAND_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1F4338] text-white hover:bg-[#142C25] border border-[#1F4338] text-xs font-sans uppercase font-medium py-3.5 px-4 tracking-wider transition-colors rounded shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#8CA477]" />
                  <span>Connect on Official WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 border border-[#8CA477]/30 bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#E9EFE7] border border-[#1F4338] mx-auto flex items-center justify-center text-[#1F4338] rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#1F4338] font-bold">
                  Consultation Request Ready for Transmission
                </h3>
                <p className="text-xs sm:text-sm text-[#27302B]/85 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1F4338]">{formData.fullName}</strong>. Select your preferred transmission channel below:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1F4338] text-white hover:bg-[#142C25] text-xs font-sans uppercase font-medium tracking-wider py-3.5 px-6 rounded shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#8CA477]" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 bg-[#B47750] text-white hover:bg-[#9F6542] text-xs font-sans uppercase font-medium tracking-wider py-3.5 px-6 rounded shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-[#4F8278] hover:text-[#1F4338] uppercase tracking-widest pt-4 block mx-auto underline"
                >
                  Edit Submission Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#8CA477]/20 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F8278] block font-bold">
                    PROJECT INTAKE SPECIFICATION
                  </span>
                  <h3 className="text-xl font-serif text-[#1F4338] mt-0.5 font-bold">
                    Consultation Brief
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F8278] block font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Architect Rajesh Mehta"
                      className="w-full bg-[#E9EFE7]/40 border border-[#8CA477]/30 text-[#27302B] px-3.5 py-2.5 text-xs font-sans rounded focus:outline-none focus:border-[#1F4338]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F8278] block font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@studio.com"
                      className="w-full bg-[#E9EFE7]/40 border border-[#8CA477]/30 text-[#27302B] px-3.5 py-2.5 text-xs font-sans rounded focus:outline-none focus:border-[#1F4338]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F8278] block font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#E9EFE7]/40 border border-[#8CA477]/30 text-[#27302B] px-3.5 py-2.5 text-xs font-sans rounded focus:outline-none focus:border-[#1F4338]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F8278] block font-bold">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Mumbai, Pune, Goa"
                      className="w-full bg-[#E9EFE7]/40 border border-[#8CA477]/30 text-[#27302B] px-3.5 py-2.5 text-xs font-sans rounded focus:outline-none focus:border-[#1F4338]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F8278] block font-bold">
                    Capability Division of Interest *
                  </label>
                  <select
                    value={formData.requirementType}
                    onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                    className="w-full bg-[#E9EFE7]/40 border border-[#8CA477]/30 text-[#27302B] px-3.5 py-2.5 text-xs font-sans rounded focus:outline-none focus:border-[#1F4338]"
                  >
                    {requirementOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-white text-[#27302B]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F8278] block font-bold">
                    Project Scope, Dimensions &amp; Site Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe spatial footprint, indoor/outdoor civil conditions, target species, or architectural timelines..."
                    className="w-full bg-[#E9EFE7]/40 border border-[#8CA477]/30 text-[#27302B] p-3.5 text-xs font-sans rounded focus:outline-none focus:border-[#1F4338]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B47750] text-white font-sans text-xs uppercase font-medium py-3.5 px-6 tracking-wider hover:bg-[#9F6542] transition-colors rounded shadow-sm"
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