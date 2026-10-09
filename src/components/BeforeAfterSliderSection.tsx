"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { resultsData, ResultCase } from "@/data/results";

interface BeforeAfterSliderSectionProps {
  onOpenConsultation?: () => void;
}

export default function BeforeAfterSliderSection({ onOpenConsultation }: BeforeAfterSliderSectionProps) {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = resultsData[selectedCaseIdx] || resultsData[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="relative py-28 md:py-40 bg-[#FBF8F3] overflow-hidden" id="results">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0B4F4A]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#0B4F4A]/10">
          <div>
            <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
              Transform Your Look with Allôroots
            </span>
            <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-serif font-normal text-[#202A28] leading-[1.08]">
              Premier Destination for Best Hair Transplant in India
            </h2>
          </div>
          <div className="max-w-xl space-y-2">
            <p className="text-[16px] text-[#566965] font-light leading-relaxed">
              Discover the remarkable journey of individuals who have undergone life-changing hair restoration under the skilled hands of Dr. Alok Sahoo.
            </p>
            <p className="text-[14px] text-[#8A9E9B] font-light leading-relaxed hidden sm:block">
              Alloroots stands at the forefront of hair restoration in India, offering cutting-edge hair transplant solutions tailored to meet individual needs across Bhubaneswar, Chennai, Uttarakhand &amp; Delhi, where your satisfaction is our top priority.
            </p>
          </div>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {resultsData.slice(0, 6).map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIdx(idx);
                setSliderPosition(50);
              }}
              data-cursor="cta"
              className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCaseIdx === idx
                  ? "bg-[#0B4F4A] text-white shadow-md sm:shadow-lg shadow-[#0B4F4A]/25"
                  : "bg-white text-[#202A28] hover:bg-white/80 border border-[#0B4F4A]/10"
              }`}
            >
              Case 0{idx + 1}: {c.patientName}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Draggable Slider Canvas (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div
              ref={containerRef}
              data-cursor="compare"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[32px] overflow-hidden shadow-[0_24px_55px_-12px_rgba(11,79,74,0.18)] border border-[#C6A15B]/30 select-none bg-[#202A28] cursor-ew-resize"
            >
              {/* Layer 1: AFTER Image (Base Layer - Right Side Framed) */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="relative w-[200%] h-full -left-[100%]">
                  <Image
                    src={activeCase.image}
                    alt={`${activeCase.patientName} — After Result`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-right"
                    priority
                  />
                </div>
                {/* After Label */}
                <div className="absolute bottom-5 right-5 z-10 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#073A37] text-[12px] font-bold tracking-wider uppercase shadow-sm">
                  AFTER ({activeCase.duration})
                </div>
              </div>

              {/* Layer 2: BEFORE Image (Top Clipped Layer - Left Side Framed) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="relative w-[200%] h-full left-0">
                  <Image
                    src={activeCase.image}
                    alt={`${activeCase.patientName} — Before Hair Restoration`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-left"
                    priority
                  />
                </div>
                {/* Before Label */}
                <div className="absolute bottom-5 left-5 z-10 px-4 py-2 rounded-full bg-[#073A37]/90 backdrop-blur-md text-white text-[12px] font-bold tracking-wider uppercase shadow-sm">
                  BEFORE PROCEDURE
                </div>
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#0B4F4A] border-2 border-[#C6A15B]">
                  <SlidersHorizontal className="w-5.5 h-5.5" />
                </div>
              </div>

              {/* Top Banner Guide */}
              <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-white/90 text-[11px] uppercase tracking-wider font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
                Drag to Compare Hairline
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Medical Case Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="px-3.5 py-1.2 rounded-full bg-[#C96F4F]/10 text-[#C96F4F] text-[11.5px] font-semibold uppercase tracking-wider">
                  {activeCase.norwoodStage}
                </span>
                <span className="px-3.5 py-1.2 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-[11.5px] font-semibold uppercase tracking-wider">
                  {activeCase.location}
                </span>
              </div>
              <h3 className="text-[30px] sm:text-[36px] font-serif font-normal text-[#202A28]">
                {activeCase.patientName}
              </h3>
              <p className="text-[16px] text-[#566965] font-light leading-relaxed">
                {activeCase.reviewText}
              </p>
            </div>

            {/* Medical Metrics Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm">
                <span className="text-[11px] uppercase tracking-wider text-[#566965] font-bold block">
                  Follicles Implanted
                </span>
                <span className="text-[22px] font-serif text-[#0B4F4A] font-normal mt-0.5 block">
                  {activeCase.grafts}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm">
                <span className="text-[11px] uppercase tracking-wider text-[#566965] font-bold block">
                  Result Timeline
                </span>
                <span className="text-[22px] font-serif text-[#C96F4F] font-normal mt-0.5 block">
                  {activeCase.duration}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm col-span-2">
                <span className="text-[11px] uppercase tracking-wider text-[#566965] font-bold block">
                  Surgical Protocol
                </span>
                <span className="text-[17px] font-serif text-[#202A28] font-normal mt-0.5 block">
                  {activeCase.technique}
                </span>
              </div>
            </div>

            {/* Doctor Note */}
            <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#F3EEE6] border border-[#0B4F4A]/10 text-[14px] text-[#202A28] leading-relaxed">
              <ShieldCheck className="w-5.5 h-5.5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
              <span>
                Single-hair follicular feathering applied at 45° angle to create a soft, age-appropriate, undetectable frontal edge.
              </span>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                data-cursor="cta"
                className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4.5 rounded-full bg-[#0B4F4A] text-white text-[12.5px] sm:text-[15px] font-medium tracking-wide hover:bg-[#073A37] transition-all shadow-lg sm:shadow-xl shadow-[#0B4F4A]/20 cursor-pointer group hover:scale-[1.01]"
              >
                <span>Request Case Evaluation for Similar Hairline</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
