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
    <section className="relative py-24 md:py-36 bg-[#FBF8F3] overflow-hidden" id="results">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0B4F4A]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#0B4F4A]/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
              Transform Your Look with Allôroots
            </span>
            <h2 className="text-[38px] sm:text-[50px] lg:text-[56px] font-serif font-normal text-[#202A28] leading-[1.08]">
              Premier Destination for Best Hair Transplant in India
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#566965] max-w-md font-normal leading-relaxed">
            Discover the remarkable journey of individuals who have undergone life-changing hair restoration under the skilled hands of Dr. Alok Kumar Sahoo. Our Before and After section showcases the tangible results and renewed confidence that our patients have experienced.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {resultsData.slice(0, 6).map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIdx(idx);
                setSliderPosition(50);
              }}
              data-cursor="cta"
              className={`px-4 sm:px-5 py-2.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCaseIdx === idx
                  ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/20"
                  : "bg-white text-[#202A28] hover:bg-white/80 border border-[#0B4F4A]/10"
              }`}
            >
              Case 0{idx + 1}: {c.patientName}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Draggable Slider Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              data-cursor="compare"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[28px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(11,79,74,0.18)] border border-[#C6A15B]/30 select-none bg-[#202A28] cursor-ew-resize"
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
                <div className="absolute bottom-5 right-5 z-10 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#073A37] text-[11px] font-semibold tracking-wider uppercase shadow-sm">
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
                <div className="absolute bottom-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-[#073A37]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                  BEFORE PROCEDURE
                </div>
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center text-[#0B4F4A] border-2 border-[#C6A15B]">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Top Banner Guide */}
              <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-[10.5px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
                Drag to Compare Hairline
              </div>
            </div>
          </div>

          {/* Right Column: Verified Medical Case Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C96F4F]/10 text-[#C96F4F] text-[11px] font-medium uppercase tracking-wider">
                  {activeCase.norwoodStage}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-[11px] font-medium uppercase tracking-wider">
                  {activeCase.location}
                </span>
              </div>
              <h3 className="text-[28px] sm:text-[34px] font-serif font-normal text-[#202A28]">
                {activeCase.patientName}
              </h3>
              <p className="text-[15.5px] text-[#566965] font-normal leading-relaxed">
                {activeCase.reviewText}
              </p>
            </div>

            {/* Medical Metrics Cards */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm">
                <span className="text-[10.5px] uppercase tracking-wider text-[#566965] font-medium block">
                  Follicles Implanted
                </span>
                <span className="text-[20px] font-serif text-[#0B4F4A] font-normal mt-0.5 block">
                  {activeCase.grafts}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm">
                <span className="text-[10.5px] uppercase tracking-wider text-[#566965] font-medium block">
                  Result Timeline
                </span>
                <span className="text-[20px] font-serif text-[#C96F4F] font-normal mt-0.5 block">
                  {activeCase.duration}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm col-span-2">
                <span className="text-[10.5px] uppercase tracking-wider text-[#566965] font-medium block">
                  Surgical Protocol
                </span>
                <span className="text-[16px] font-serif text-[#202A28] font-normal mt-0.5 block">
                  {activeCase.technique}
                </span>
              </div>
            </div>

            {/* Doctor Note */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F3EEE6] border border-[#0B4F4A]/10 text-[13px] text-[#202A28]">
              <ShieldCheck className="w-5 h-5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
              <span>
                Single-hair follicular feathering applied at 45° angle to create a soft, age-appropriate, undetectable frontal edge.
              </span>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                data-cursor="cta"
                className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#0B4F4A] text-white text-[14px] font-medium tracking-wide hover:bg-[#073A37] transition-all shadow-md shadow-[#0B4F4A]/20 cursor-pointer group"
              >
                <span>Request Case Evaluation for Similar Hairline</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
