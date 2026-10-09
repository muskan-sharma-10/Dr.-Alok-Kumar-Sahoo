"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  User,
  Phone,
  MapPin,
  Stethoscope,
  Award,
  Calendar,
  Clock,
} from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  { id: "morning", label: "Morning", time: "10:00 AM – 01:00 PM" },
  { id: "afternoon", label: "Afternoon", time: "01:00 PM – 04:00 PM" },
  { id: "evening", label: "Evening", time: "04:00 PM – 07:30 PM" },
];

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Delhi",
    service: "Realtime Bio-Enhanced FUE",
    date: new Date().toISOString().split("T")[0],
    slot: "Morning (10:00 AM – 01:00 PM)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      location: "Delhi",
      service: "Realtime Bio-Enhanced FUE",
      date: new Date().toISOString().split("T")[0],
      slot: "Morning (10:00 AM – 01:00 PM)",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={handleReset}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F1] flex items-center justify-center text-[#1E2E2C] hover:bg-[#073A37] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF3F1] flex items-center justify-center mx-auto text-[#073A37]">
                  <CheckCircle2 className="w-9 h-9 text-[#073A37]" />
                </div>
                <h3 className="text-[24px] font-serif font-normal text-[#1E2E2C]">Consultation Booked!</h3>
                <p className="text-[15px] text-[#5A7370] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-[#1E2E2C] font-semibold">{formData.name}</strong>. Your consultation slot for <strong className="text-[#073A37] font-semibold">{formData.date} ({formData.slot})</strong> at our <strong className="text-[#1E2E2C] font-semibold">{formData.location} Clinic</strong> has been reserved. Our coordinator will call you at <strong className="text-[#1E2E2C] font-semibold">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 rounded-full bg-[#073A37] text-white font-semibold text-[14.5px] hover:bg-[#0B4F4A] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#073A37]/8 text-[11px] font-semibold uppercase tracking-wider text-[#073A37] mb-2.5">
                    <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>AIIMS Specialist Consultation</span>
                  </div>
                  <h3 className="text-[24px] font-serif font-normal text-[#1E2E2C]">
                    Book Your Appointment Slot
                  </h3>
                  <p className="text-[14px] text-[#7B8F8C] mt-1 font-light">
                    Doctor-led follicular assessment & microscopic scalp mapping.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1E2E2C] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B4F4A]/10 text-[14.5px] text-[#1E2E2C] focus:border-[#073A37] focus:ring-1 focus:ring-[#073A37]/20 outline-none transition-colors placeholder:text-[#8A9E9B]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1E2E2C] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B4F4A]/10 text-[14.5px] text-[#1E2E2C] focus:border-[#073A37] focus:ring-1 focus:ring-[#073A37]/20 outline-none transition-colors placeholder:text-[#8A9E9B]"
                      />
                    </div>
                  </div>

                  {/* Preferred Date & Clinic Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-semibold text-[#1E2E2C] uppercase tracking-wider mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#073A37] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#1E2E2C] uppercase tracking-wider mb-1.5">
                        Preferred Clinic
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3.5" />
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#073A37] outline-none appearance-none cursor-pointer"
                        >
                          <option value="Delhi">Delhi (GK-1)</option>
                          <option value="Bhubaneswar">Bhubaneswar (Patia)</option>
                          <option value="Chennai">Chennai (K.K. Nagar)</option>
                          <option value="Uttarakhand">Uttarakhand (Dineshpur)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Time Slot Selection */}
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1E2E2C] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Preferred Time Slot *</span>
                      <span className="text-[11px] font-normal text-[#6A827F] lowercase">30-min doctor slot</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => {
                        const fullSlot = `${slot.label} (${slot.time})`;
                        const isSelected = formData.slot === fullSlot;
                        return (
                          <button
                            type="button"
                            key={slot.id}
                            onClick={() => setFormData({ ...formData, slot: fullSlot })}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#073A37] text-white border-[#073A37] shadow-sm"
                                : "bg-[#FAF8F5] text-[#202A28] border-[#0B4F4A]/10 hover:border-[#073A37]/30"
                            }`}
                          >
                            <span className="block text-[12.5px] font-semibold leading-tight">{slot.label}</span>
                            <span className={`block text-[10px] mt-0.5 leading-tight ${isSelected ? "text-white/80" : "text-[#7B8F8C]"}`}>
                              {slot.time}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1E2E2C] uppercase tracking-wider mb-1.5">
                      Interested Treatment
                    </label>
                    <div className="relative">
                      <Stethoscope className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-3.5" />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#0B4F4A]/10 text-[14px] text-[#1E2E2C] focus:border-[#073A37] outline-none appearance-none cursor-pointer"
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
                    className="w-full py-2.5 sm:py-3.5 rounded-full bg-[#073A37] hover:bg-[#0B4F4A] text-white font-semibold text-[13.5px] sm:text-[15px] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer mt-2"
                  >
                    <Calendar className="w-4 h-4 text-[#C6A15B]" />
                    <span>Confirm Doctor Appointment</span>
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
