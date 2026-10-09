"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
    date: new Date().toISOString().split("T")[0],
    slot: "Morning (10:00 AM – 01:00 PM)",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden" id="contact">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Contact Info */}
          <ScrollReveal direction="from-left" distance={70} duration={0.85} className="lg:col-span-5">
            <p className="text-[12px] tracking-[0.18em] uppercase font-bold text-[#D87852] mb-3">Get in Touch</p>
            <h2 className="text-[38px] sm:text-[46px] lg:text-[52px] font-serif font-normal text-[#1E2E2C] leading-[1.08]">
              Book Your Consultation
            </h2>
            <p className="mt-4 text-[16px] sm:text-[17px] text-[#5A7370] leading-relaxed max-w-md font-light">
              Fill out the form below to submit your queries. Our medical team will guide you through your hair restoration journey.
            </p>

            <div className="mt-8 space-y-6">
              <a href="tel:+919717503031" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0B4F4A]/8 flex items-center justify-center group-hover:bg-[#0B4F4A] transition-colors">
                  <Phone className="w-5 h-5 text-[#0B4F4A] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1E2E2C] group-hover:text-[#0B4F4A] transition-colors">+91 9717503031</p>
                  <p className="text-[12.5px] text-[#8A9E9B]">Mon – Sun, 9:30 AM – 7:30 PM</p>
                </div>
              </a>

              <a href="mailto:info@alloroots.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0B4F4A]/8 flex items-center justify-center group-hover:bg-[#0B4F4A] transition-colors">
                  <Mail className="w-5 h-5 text-[#0B4F4A] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1E2E2C] group-hover:text-[#0B4F4A] transition-colors">info@alloroots.com</p>
                  <p className="text-[12.5px] text-[#8A9E9B]">We respond within 2 hours</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B4F4A]/8 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0B4F4A]" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1E2E2C]">4 Clinics Across India</p>
                  <p className="text-[12.5px] text-[#8A9E9B]">Delhi · Bhubaneswar · Chennai · Uttarakhand</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="from-right" distance={70} duration={0.85} delay={0.1} className="lg:col-span-7">
            <div className="bg-[#FAF7F1] rounded-3xl p-7 sm:p-9 border border-[#0B4F4A]/8 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 className="w-14 h-14 text-[#0B4F4A] mx-auto mb-4" />
                  <p className="text-[24px] font-serif text-[#1E2E2C]">Thank You!</p>
                  <p className="text-[16px] text-[#5A7370] mt-2">Our team will contact you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-bold mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[15px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-bold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[15px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[15px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4.5 py-3.5 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[15px] focus:border-[#C9A45C] outline-none"
                      />
                    </div>
                  </div>

                  {/* Consultation Slot Selection */}
                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Preferred Appointment Slot *</label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Morning", time: "10:00 AM – 01:00 PM" },
                        { label: "Afternoon", time: "01:00 PM – 04:00 PM" },
                        { label: "Evening", time: "04:00 PM – 07:30 PM" },
                      ].map((s) => {
                        const full = `${s.label} (${s.time})`;
                        const isSelected = formData.slot === full;
                        return (
                          <button
                            type="button"
                            key={s.label}
                            onClick={() => setFormData({ ...formData, slot: full })}
                            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#073A37] text-white border-[#073A37] shadow-sm"
                                : "bg-white text-[#202A28] border-[#0B4F4A]/10 hover:border-[#073A37]/30"
                            }`}
                          >
                            <span className="block text-[13px] font-semibold">{s.label}</span>
                            <span className={`block text-[10.5px] mt-0.5 ${isSelected ? "text-white/80" : "text-[#7B8F8C]"}`}>{s.time}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Interested Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[15px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="fue">FUE Hair Transplant</option>
                      <option value="hairline">Hairline Reconstruction</option>
                      <option value="beard">Beard Transplant</option>
                      <option value="female">Female Hair Transplant</option>
                      <option value="repair">Failed HT Repair</option>
                      <option value="gfc">GFC / PRP Therapy</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-bold mb-2">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[15px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors resize-none placeholder:text-[#8A9E9B]"
                      placeholder="Describe your concern or ask a question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0B4F4A] text-white font-semibold text-[15px] hover:bg-[#073A37] transition-all duration-300 hover:shadow-xl hover:shadow-[#0B4F4A]/20 cursor-pointer hover:scale-[1.01]"
                  >
                    <Send className="w-4.5 h-4.5" />
                    Request Free Consultation
                  </button>

                  <p className="text-[12px] text-[#8A9E9B] text-center font-light">
                    By submitting, you agree to receive a callback from our medical team.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
