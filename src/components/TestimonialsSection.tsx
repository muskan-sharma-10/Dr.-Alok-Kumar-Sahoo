"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { testimonialsData, googleRatingSummary } from "@/data/testimonials";
import { siteImages } from "@/data/siteImages";

// Patient avatars from authentic results/clinics
const patientAvatars = [
  siteImages.results.case1,
  siteImages.results.case2,
  siteImages.results.case4,
  siteImages.results.case7,
  siteImages.results.case3,
  siteImages.results.case5,
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonialsData.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + total) % total);
  };

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentIdx, isPaused]);

  const current = testimonialsData[currentIdx];
  const avatarImage = patientAvatars[currentIdx % patientAvatars.length];

  return (
    <section
      className="relative py-24 md:py-36 bg-[#F8EDE7] overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C96F4F]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Editorial Heading & Google Rating Badge (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
                Patient Voices &amp; Verified Journeys
              </span>
              <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-serif font-normal text-[#202A28] leading-[1.08]">
                Witness the Transformation Through Their Eyes
              </h2>
            </div>

            <p className="text-[16px] text-[#566965] font-normal leading-relaxed">
              Every review is independently verified on Google. Read authentic accounts of painless anesthesia, doctor-led precision, and lifelong confidence restored.
            </p>

            {/* Google Rating Verified Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#C96F4F]/15 shadow-[0_12px_32px_-8px_rgba(201,111,79,0.08)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0B4F4A] flex items-center justify-center text-white text-[13px] font-serif">
                    G
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#202A28] leading-tight">Google Verified Reviews</p>
                    <p className="text-[11px] text-[#566965]">AlloRoots Hair Transplant Clinic</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-[11px] font-semibold">
                  100% Genuine
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#0B4F4A]/6">
                <span className="text-[28px] font-serif font-normal text-[#0B4F4A] leading-none">5.0</span>
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]" />
                  ))}
                </div>
                <span className="text-[12.5px] text-[#566965] font-light">Based on 163+ patient reviews</span>
              </div>
            </div>

            {/* Progress Bar & Counter */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-[12px] text-[#566965]">
                <span>Story 0{currentIdx + 1} of 0{total}</span>
                <span>{Math.round(((currentIdx + 1) / total) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white overflow-hidden">
                <motion.div
                  className="h-full bg-[#0B4F4A] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + 1) / total) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Sliding Testimonial Card with Overlapping Image (7 cols) */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_24px_64px_-16px_rgba(201,111,79,0.14)] border border-[#C96F4F]/15 space-y-6"
              >
                {/* Large Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8EDE7] flex items-center justify-center text-[#C96F4F]">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]" />
                    ))}
                  </div>
                </div>

                {/* Primary Patient Quote in Light Serif Typography */}
                <p className="text-[20px] sm:text-[24px] lg:text-[26px] font-serif font-normal text-[#202A28] leading-[1.35]">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Extended Narrative */}
                <p className="text-[15px] sm:text-[16px] text-[#566965] font-light leading-relaxed">
                  {current.fullReview}
                </p>

                {/* Patient Metadata & Overlapping Avatar */}
                <div className="pt-6 border-t border-[#0B4F4A]/8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C6A15B] bg-[#073A37] flex-shrink-0 shadow-md">
                      <Image
                        src={avatarImage}
                        alt={current.patientName}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-serif font-normal text-[#202A28]">
                        {current.patientName}
                      </h4>
                      <p className="text-[12.5px] text-[#566965]">
                        {current.procedure} • {current.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11.5px] text-[#8A9E9B] font-medium">
                    {current.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 justify-end mt-6">
              <button
                onClick={prevSlide}
                data-cursor="cta"
                className="w-12 h-12 rounded-full bg-white hover:bg-[#0B4F4A] hover:text-white text-[#202A28] border border-[#C96F4F]/20 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                data-cursor="cta"
                className="w-12 h-12 rounded-full bg-white hover:bg-[#0B4F4A] hover:text-white text-[#202A28] border border-[#C96F4F]/20 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
