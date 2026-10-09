"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden" id="contact">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Contact Info */}
          <ScrollReveal direction="from-left" distance={70} duration={0.85} className="lg:col-span-5">
            <p className="text-[12px] tracking-[0.15em] uppercase font-semibold text-[#D87852] mb-3">Get in Touch</p>
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-serif font-normal text-[#1E2E2C] leading-[1.08]">
              Book Your Consultation
            </h2>
            <p className="mt-4 text-[17px] text-[#5A7370] leading-relaxed max-w-md">
              Fill out the form below to submit your queries. Our medical team will guide you through your hair restoration journey.
            </p>

            <div className="mt-8 space-y-5">
              <a href="tel:+919717503031" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[#0B4F4A]/8 flex items-center justify-center group-hover:bg-[#0B4F4A] transition-colors">
                  <Phone className="w-5 h-5 text-[#0B4F4A] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#1E2E2C] group-hover:text-[#0B4F4A] transition-colors">+91 9717503031</p>
                  <p className="text-[12px] text-[#8A9E9B]">Mon – Sun, 9:30 AM – 7:30 PM</p>
                </div>
              </a>

              <a href="mailto:info@alloroots.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[#0B4F4A]/8 flex items-center justify-center group-hover:bg-[#0B4F4A] transition-colors">
                  <Mail className="w-5 h-5 text-[#0B4F4A] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#1E2E2C] group-hover:text-[#0B4F4A] transition-colors">info@alloroots.com</p>
                  <p className="text-[12px] text-[#8A9E9B]">We respond within 2 hours</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0B4F4A]/8 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0B4F4A]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#1E2E2C]">4 Clinics Across India</p>
                  <p className="text-[12px] text-[#8A9E9B]">Delhi · Bhubaneswar · Chennai · Uttarakhand</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="from-right" distance={70} duration={0.85} delay={0.1} className="lg:col-span-7">
            <div className="bg-[#FAF7F1] rounded-2xl p-6 sm:p-8 border border-[#0B4F4A]/6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 className="w-14 h-14 text-[#0B4F4A] mx-auto mb-4" />
                  <p className="text-[22px] font-serif text-[#1E2E2C]">Thank You!</p>
                  <p className="text-[15px] text-[#5A7370] mt-2">Our team will contact you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[14px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[14px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[14px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors placeholder:text-[#8A9E9B]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Interested Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[14px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors appearance-none cursor-pointer"
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
                    <label className="block text-[12px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-2">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#0B4F4A]/10 text-[#1E2E2C] text-[14px] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 outline-none transition-colors resize-none placeholder:text-[#8A9E9B]"
                      placeholder="Describe your concern or ask a question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0B4F4A] text-white font-semibold text-[15px] hover:bg-[#073A37] transition-all duration-300 hover:shadow-lg hover:shadow-[#0B4F4A]/15 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Request Free Consultation
                  </button>

                  <p className="text-[11px] text-[#8A9E9B] text-center">
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
