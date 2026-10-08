"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, User, Phone, MapPin, Stethoscope, Award, Calendar } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Delhi",
    service: "Realtime Bio-Enhanced FUE",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", phone: "", location: "Delhi", service: "Realtime Bio-Enhanced FUE" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleReset}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F1] flex items-center justify-center text-[#1E2E2C] hover:bg-[#0B4F4A] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#0B4F4A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#C9A45C]" />
                </div>
                <h3 className="text-[22px] font-serif text-[#1E2E2C]">Consultation Requested!</h3>
                <p className="text-[14px] text-[#5A7370] leading-relaxed max-w-xs mx-auto">
                  Thank you, <strong className="text-[#1E2E2C]">{formData.name}</strong>. Our team will contact you at <strong className="text-[#1E2E2C]">{formData.phone}</strong> to confirm your {formData.location} clinic appointment.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 rounded-xl bg-[#0B4F4A] text-white font-semibold text-[14px] hover:bg-[#073A37] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B4F4A]/5 text-[11px] font-bold uppercase tracking-wider text-[#0B4F4A] mb-3">
                    <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
                    AIIMS Doctor Consultation
                  </div>
                  <h3 className="text-[22px] font-serif text-[#1E2E2C]">Book Your Consultation</h3>
                  <p className="text-[13px] text-[#8A9E9B] mt-1">100% doctor-led assessment & microscopic scalp analysis.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E2E2C] uppercase tracking-wider mb-1.5">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E2E2C] uppercase tracking-wider mb-1.5">Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E2E2C] uppercase tracking-wider mb-1.5">Preferred Clinic</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3" />
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#C9A45C] outline-none appearance-none cursor-pointer"
                      >
                        <option value="Delhi">Delhi Clinic (Safdarjung Enclave)</option>
                        <option value="Bhubaneswar">Bhubaneswar Clinic (Khandagiri)</option>
                        <option value="Chennai">Chennai Clinic (K.K. Nagar)</option>
                        <option value="Uttarakhand">Uttarakhand Clinic (Dineshpur)</option>
                      </select>
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E2E2C] uppercase tracking-wider mb-1.5">Service</label>
                    <div className="relative">
                      <Stethoscope className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3" />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#C9A45C] outline-none appearance-none cursor-pointer"
                      >
                        <option value="Realtime Bio-Enhanced FUE">Realtime Bio-Enhanced FUE</option>
                        <option value="Natural Hairline Reconstruction">Natural Hairline Reconstruction</option>
                        <option value="Female Hairline Restoration">Female Hairline Restoration</option>
                        <option value="Beard & Moustache Transplant">Beard & Moustache Transplant</option>
                        <option value="Failed Transplant Repair">Failed Transplant Repair</option>
                        <option value="GFC & PRF Therapy">GFC & PRF Therapy</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0B4F4A] text-white font-semibold text-[14px] hover:bg-[#073A37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#C9A45C]" />
                    Confirm Appointment
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
