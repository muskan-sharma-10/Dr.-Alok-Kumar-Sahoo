"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowRight, GraduationCap, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { doctorsData } from "@/data/doctors";

interface ExpertTeamProps {
  onOpenConsultation?: () => void;
}

export default function ExpertTeamSection({ onOpenConsultation }: ExpertTeamProps) {
  const [activeDoctorIdx, setActiveDoctorIdx] = useState(0);
  const activeDoc = doctorsData[activeDoctorIdx];

  const nextDoctor = () => {
    setActiveDoctorIdx((prev) => (prev + 1) % doctorsData.length);
  };

  const prevDoctor = () => {
    setActiveDoctorIdx((prev) => (prev - 1 + doctorsData.length) % doctorsData.length);
  };

  return (
    <section className="relative py-28 md:py-40 bg-[#F3EEE6] overflow-hidden" id="doctors">
      <div id="team" className="absolute -top-28 pointer-events-none" />
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0B4F4A]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#0B4F4A]/10">
          <div>
            <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
              Panel of M.D Dermatologists &amp; Surgeons
            </span>
            <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-serif font-normal text-[#202A28] leading-[1.08]">
              Meet Our Expert Team of Doctors
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] text-[#566965] max-w-md font-light leading-relaxed">
            Alumni and Ex-Senior Residents from All India Institute of Medical Sciences (AIIMS), New Delhi with dedicated fellowship training in hair restoration.
          </p>
        </div>

        {/* Dynamic Interactive Team Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Large Featured Active Doctor Showcase (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDoc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[36px] p-7 sm:p-11 shadow-[0_24px_55px_-12px_rgba(11,79,74,0.13)] border border-[#0B4F4A]/8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-7 sm:gap-9 items-center">
                  
                  {/* Doctor Portrait */}
                  <div
                    className="sm:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF7F1] border border-[#0B4F4A]/10 shadow-md"
                    data-cursor="view"
                  >
                    <Image
                      src={activeDoc.image}
                      alt={activeDoc.name}
                      fill
                      sizes="350px"
                      className="object-contain object-bottom filter contrast-[1.02]"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[11px] uppercase tracking-wider text-center font-medium">
                      {activeDoc.experience}
                    </div>
                  </div>

                  {/* Doctor Credentials & Bio */}
                  <div className="sm:col-span-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[12px] uppercase tracking-wider font-semibold text-[#C96F4F] block">
                        {activeDoc.role}
                      </span>
                      <h3 className="text-[28px] sm:text-[32px] font-serif font-normal text-[#202A28]">
                        {activeDoc.name}
                      </h3>
                      <p className="text-[14px] text-[#0B4F4A] font-semibold">
                        {activeDoc.qualifications}
                      </p>
                      <p className="text-[13px] text-[#566965]">
                        {activeDoc.institution}
                      </p>
                    </div>

                    <p className="text-[15px] sm:text-[15.5px] text-[#566965] font-light leading-relaxed">
                      {activeDoc.bio}
                    </p>

                    {/* Specializations */}
                    <div className="pt-2 border-t border-[#0B4F4A]/8 space-y-2">
                      <span className="text-[11.5px] uppercase tracking-wider text-[#202A28] font-bold block">
                        Focus Areas
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeDoc.specializations.slice(0, 3).map((spec, i) => (
                          <span
                            key={i}
                            className="text-[12px] px-3 py-1.2 rounded-full bg-[#F3EEE6] text-[#202A28] font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      data-cursor="cta"
                      className="inline-flex items-center gap-2.5 mt-3 px-7 py-3 rounded-full bg-[#0B4F4A] text-white text-[14px] font-medium hover:bg-[#073A37] transition-all cursor-pointer group hover:scale-[1.02]"
                    >
                      <span>Book with {activeDoc.name.split(" ")[1]}</span>
                      <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Interactive Doctor Selector Carousel (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12.5px] uppercase tracking-[0.14em] font-bold text-[#0B4F4A]">
                Select Surgeon (0{activeDoctorIdx + 1} / 0{doctorsData.length})
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevDoctor}
                  data-cursor="cta"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#0B4F4A] hover:text-white text-[#202A28] border border-[#0B4F4A]/10 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous doctor"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={nextDoctor}
                  data-cursor="cta"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#0B4F4A] hover:text-white text-[#202A28] border border-[#0B4F4A]/10 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next doctor"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* List of Other Doctors */}
            <div className="space-y-3">
              {doctorsData.map((doc, idx) => {
                const isActive = activeDoctorIdx === idx;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setActiveDoctorIdx(idx)}
                    data-cursor="cta"
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center gap-4.5 cursor-pointer border ${
                      isActive
                        ? "bg-white border-[#C6A15B]/60 shadow-lg translate-x-2"
                        : "bg-white/50 border-transparent hover:bg-white/80"
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#E8DED2] flex-shrink-0">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="56px"
                        className="object-contain object-bottom"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-[16px] sm:text-[17px] font-serif font-normal truncate ${
                          isActive ? "text-[#0B4F4A]" : "text-[#202A28]"
                        }`}>
                          {doc.name}
                        </h4>
                        <span className="text-[11px] uppercase tracking-wider text-[#C96F4F] font-semibold flex-shrink-0">
                          {doc.experience}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#566965] truncate mt-0.5 font-light">
                        {doc.qualifications}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
