"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import { locationsData } from "@/data/locations";

interface ClinicsSectionProps {
  onOpenConsultation?: () => void;
}

export default function ClinicsSection({ onOpenConsultation }: ClinicsSectionProps) {
  const [activeCityIdx, setActiveCityIdx] = useState(0);
  const clinic = locationsData[activeCityIdx];

  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden border-b border-[#0B4F4A]/8" id="clinics">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#0B4F4A]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#0B4F4A]/10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
              Pan-India Surgical Centers
            </span>
            <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-serif font-normal text-[#202A28] leading-[1.08]">
              Visit AlloRoots Near You
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[16px] text-[#566965] max-w-md font-light leading-relaxed"
          >
            Four state-of-the-art clinics across India — each operating under strict AIIMS sterilization and surgical protocols.
          </motion.p>
        </div>

        {/* City Selector Tabs with Moving Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar"
        >
          {locationsData.map((loc, idx) => {
            const isActive = activeCityIdx === idx;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveCityIdx(idx)}
                data-cursor="cta"
                className={`relative px-7 py-3.5 rounded-full text-[14px] sm:text-[14.5px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#0B4F4A] text-white shadow-xl shadow-[#0B4F4A]/20"
                    : "bg-[#FBF8F3] text-[#202A28] hover:bg-[#F3EEE6] border border-[#0B4F4A]/10"
                }`}
              >
                <MapPin className={`w-4 h-4 ${isActive ? "text-[#C6A15B]" : "text-[#566965]"}`} />
                <span>{loc.city}</span>
                <span className={`text-[10.5px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                  isActive ? "bg-white/15 text-white/90" : "text-[#8A9E9B]"
                }`}>
                  {loc.state}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Clinic Editorial Master Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={clinic.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* Left Column: Large Authentic Clinic Photography (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
            >
              <div
                className="relative h-[380px] sm:h-[460px] w-full rounded-[32px] overflow-hidden bg-[#202A28] shadow-[0_20px_50px_-12px_rgba(11,79,74,0.14)] border border-[#0B4F4A]/10 group"
                data-cursor="view"
              >
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Clinic Name */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-wider mb-2 text-[#C6A15B]">
                    <span>Flagship Center</span>
                  </div>
                  <h3 className="text-[24px] sm:text-[30px] font-serif font-normal text-white">
                    {clinic.name}
                  </h3>
                  <p className="text-[13px] text-white/80 font-light mt-1">
                    {clinic.landmark}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Address, Phone, Amenities, CTA (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 bg-[#FBF8F3] rounded-[32px] p-7 sm:p-9 border border-[#0B4F4A]/8 shadow-sm flex flex-col justify-between space-y-6"
            >
              
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#C96F4F] font-semibold block mb-1">
                    Location &amp; Facility
                  </span>
                  <h4 className="text-[22px] font-serif font-normal text-[#202A28]">
                    AlloRoots {clinic.city}
                  </h4>
                </div>

                {/* Address block */}
                <div className="space-y-3 text-[14px] text-[#566965]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0B4F4A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-[#202A28] leading-snug">{clinic.address}</p>
                      <p className="text-[12px] text-[#8A9E9B] mt-0.5">PIN: {clinic.pincode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0B4F4A] flex-shrink-0" />
                    <a
                      href={`tel:${clinic.phone}`}
                      className="font-medium text-[#0B4F4A] hover:underline"
                    >
                      {clinic.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#0B4F4A] flex-shrink-0" />
                    <span>{clinic.hours}</span>
                  </div>
                </div>

                {/* Clinic Features */}
                <div className="pt-4 border-t border-[#0B4F4A]/8 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#202A28] font-semibold block">
                    Facility Highlights
                  </span>
                  {clinic.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12.5px] text-[#202A28]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#0B4F4A]/8 space-y-3">
                <button
                  onClick={onOpenConsultation}
                  data-cursor="cta"
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3.5 rounded-full bg-[#0B4F4A] text-white font-medium text-[12.5px] sm:text-[14px] hover:bg-[#073A37] transition-colors cursor-pointer group"
                >
                  <span>Book Consultation at {clinic.city}</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={clinic.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="cta"
                  className="w-full flex items-center justify-center gap-2 py-2 sm:py-3 rounded-full bg-white border border-[#0B4F4A]/12 text-[#202A28] text-[12px] sm:text-[13px] font-medium hover:bg-white/80 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0B4F4A]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
