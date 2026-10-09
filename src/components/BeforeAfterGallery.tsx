"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, X, CheckCircle2, ShieldCheck } from "lucide-react";
import { resultsData, ResultCase } from "@/data/results";

interface BeforeAfterGalleryProps {
  onOpenConsultation?: () => void;
}

const categories = [
  { key: "all", label: "All Cases" },
  { key: "hairline", label: "Hairline Reconstruction" },
  { key: "crown", label: "Crown Density" },
  { key: "beard", label: "Beard & Moustache" },
  { key: "female", label: "Female Restoration" },
  { key: "repair", label: "Corrective Repair" },
];

export default function BeforeAfterGallery({ onOpenConsultation }: BeforeAfterGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState<ResultCase | null>(null);

  const filteredResults = activeFilter === "all"
    ? resultsData
    : resultsData.filter((r) => r.category === activeFilter);

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden border-t border-[#0B4F4A]/6" id="gallery">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#0B4F4A]/8">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
              Results Speak Louder Than Words
            </span>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-serif font-normal text-[#202A28] leading-[1.08]">
              Before &amp; After Transformations
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-[16px] text-[#566965] max-w-md font-normal leading-relaxed"
          >
            Witness the emotional and physical transformations experienced by individuals who chose Dr. Alok Kumar Sahoo for their hair restoration journey.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              data-cursor="cta"
              className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === cat.key
                  ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/20"
                  : "bg-[#FBF8F3] text-[#202A28] hover:bg-[#F3EEE6] border border-[#0B4F4A]/8"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Staggered / Masonry Layout (varied heights and spans) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResults.slice(0, 9).map((result, index) => {
              // Staggered height styling for editorial magazine feel
              const isLarge = index % 3 === 0;

              return (
                <motion.div
                  key={result.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-[24px] overflow-hidden bg-[#FBF8F3] border border-[#0B4F4A]/8 shadow-sm hover:shadow-2xl hover:shadow-[#0B4F4A]/12 transition-all duration-500 cursor-pointer ${
                    isLarge ? "sm:row-span-1" : ""
                  }`}
                  data-cursor="view"
                  onClick={() => setSelectedCase(result)}
                >
                  {/* Image Container with micro-zoom */}
                  <div className={`relative w-full overflow-hidden ${isLarge ? "aspect-[4/3] sm:aspect-[16/11]" : "aspect-[4/3]"}`}>
                    <Image
                      src={result.image}
                      alt={result.patientName}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042926]/90 via-[#042926]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#0B4F4A] shadow-sm">
                        {result.norwoodStage}
                      </span>
                      <span className="text-[10.5px] uppercase tracking-wider font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                        {result.duration}
                      </span>
                    </div>

                    {/* Overlaid Editorial Content (reveals smoothly on hover) */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[11px] uppercase tracking-widest text-[#C6A15B] font-medium mb-0.5">
                        {result.grafts} • {result.location}
                      </p>
                      <h4 className="text-[18px] sm:text-[20px] font-serif font-normal text-white leading-snug">
                        {result.patientName}
                      </h4>
                      <p className="text-[12.5px] text-white/80 font-light mt-1 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {result.reviewText}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            data-cursor="cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B4F4A] text-white text-[14px] font-medium tracking-wide hover:bg-[#073A37] transition-all shadow-md shadow-[#0B4F4A]/20 cursor-pointer group"
          >
            <span>Discuss Your Potential Results with Chief Surgeon</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* ── Modal for Detailed Result Inspection ── */}
      <AnimatePresence>
        {selectedCase && (
          <div
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Frame */}
              <div className="relative aspect-[16/10] w-full bg-[#042926]">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.patientName}
                  fill
                  sizes="800px"
                  className="object-contain"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-[11px] font-semibold uppercase tracking-wider">
                    {selectedCase.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#C96F4F]/10 text-[#C96F4F] text-[11px] font-semibold uppercase tracking-wider">
                    {selectedCase.norwoodStage}
                  </span>
                </div>

                <h3 className="text-[26px] font-serif font-normal text-[#202A28]">
                  {selectedCase.patientName}
                </h3>
                <p className="text-[15px] text-[#566965] font-light leading-relaxed">
                  {selectedCase.reviewText}
                </p>

                {/* Details Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#0B4F4A]/8">
                  <div>
                    <span className="text-[10.5px] uppercase tracking-wider text-[#8A9E9B] font-medium block">Grafts</span>
                    <span className="text-[15px] font-medium text-[#202A28] mt-0.5 block">{selectedCase.grafts}</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] uppercase tracking-wider text-[#8A9E9B] font-medium block">Duration</span>
                    <span className="text-[15px] font-medium text-[#202A28] mt-0.5 block">{selectedCase.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] uppercase tracking-wider text-[#8A9E9B] font-medium block">Technique</span>
                    <span className="text-[14px] font-medium text-[#202A28] mt-0.5 block line-clamp-1">{selectedCase.technique}</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] uppercase tracking-wider text-[#8A9E9B] font-medium block">Clinic</span>
                    <span className="text-[14px] font-medium text-[#202A28] mt-0.5 block">{selectedCase.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => { setSelectedCase(null); onOpenConsultation?.(); }}
                  data-cursor="cta"
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0B4F4A] text-white font-medium text-[14px] hover:bg-[#073A37] transition-colors cursor-pointer"
                >
                  <span>Consult AIIMS Doctors for Similar Case</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
