import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, CheckCircle2 } from './Icons';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Aquatic Worlds (Oceanarium / Pond / Pool)',
    message: '',
  });
  const [isPrepared, setIsPrepared] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPrepared(true);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEcosystem Type: ${formData.interest}\n\nProject Vision:\n${formData.message}`
    );
    return `mailto:sales@bondinwater.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Start a conversation with BondInWater"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full rounded-2xl overflow-hidden bg-[#0C1E14] border border-white/15 shadow-2xl p-6 sm:p-8 text-white"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!isPrepared ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium block mb-1">
                    START A CONVERSATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                    Tell us about your vision
                  </h3>
                  <p className="text-xs text-[#8CA595] mt-1">
                    Direct consultation with our architectural &amp; biological ecosystem team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9CFC2] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#142C1E] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-coral transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9CFC2] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#142C1E] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-coral transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9CFC2] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#142C1E] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-coral transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9CFC2] mb-1">
                      Ecosystem Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#142C1E] border border-white/10 text-white text-sm focus:outline-none focus:border-coral transition-colors"
                    >
                      <option value="Aquatic Worlds (Oceanarium / Pond / Pool)">
                        01 Aquatic Worlds (Oceanarium / Pond / Pool)
                      </option>
                      <option value="Living Habitats (Vivarium / Terrarium / Aviary)">
                        02 Living Habitats (Vivarium / Terrarium / Aviary)
                      </option>
                      <option value="Engineered Environments (Filtration / Acrylic Craftsmanship)">
                        03 Engineered Environments (Filtration / Acrylic Craftsmanship)
                      </option>
                      <option value="Masterplanning & Zoo Consultancy">
                        04 Masterplanning &amp; Zoo Consultancy
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9CFC2] mb-1">
                      Project Vision &amp; Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Location, approximate dimensions, timeline, or special biological requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#142C1E] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-coral transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-coral hover:bg-coral-hover text-white text-xs uppercase font-sans tracking-[0.2em] font-medium transition-all shadow-lg hover:shadow-coral/25 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Proceed to Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-4 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-coral/20 text-coral mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">
                    Inquiry Details Ready
                  </h3>
                  <p className="text-xs text-[#B9CFC2] leading-relaxed max-w-sm mx-auto">
                    This client-facing demo prepares your message directly for BondInWater&apos;s team at{' '}
                    <strong className="text-white">sales@bondinwater.com</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#142C1E] text-left text-xs space-y-2 border border-white/10 font-mono text-[#C9D9CF]">
                  <div><span className="text-[#8CA595]">To:</span> sales@bondinwater.com</div>
                  <div><span className="text-[#8CA595]">From:</span> {formData.name} ({formData.email})</div>
                  <div><span className="text-[#8CA595]">Ecosystem:</span> {formData.interest}</div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={getMailtoUrl()}
                    className="w-full py-3.5 rounded-full bg-coral hover:bg-coral-hover text-white text-xs uppercase font-sans tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client &amp; Send</span>
                  </a>

                  <a
                    href="tel:+919833661551"
                    className="w-full py-3 rounded-full border border-white/20 hover:border-coral text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-coral" />
                    <span>Call Directly: +91 9833 661 551</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsPrepared(false)}
                  className="text-xs text-[#8CA595] hover:text-white underline tracking-wider font-mono pt-2"
                >
                  Edit details
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
