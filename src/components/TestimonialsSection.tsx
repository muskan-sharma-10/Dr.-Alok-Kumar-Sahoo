"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ShieldCheck, MapPin, Calendar, Sparkles } from "lucide-react";
import { testimonialsData, googleRatingSummary, Testimonial } from "@/data/testimonials";
import { siteImages } from "@/data/siteImages";

// Patient avatars from authentic results/clinics
const patientAvatars = [
  siteImages.results.case1,
  siteImages.results.case2,
  siteImages.results.case4,
  siteImages.results.case7,
  siteImages.results.case3,
  siteImages.results.case5,
  siteImages.results.case6,
  siteImages.results.case8,
  siteImages.results.case9,
  siteImages.results.case11,
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured");
  const [clinicFilter, setClinicFilter] = useState("All");

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
    if (isPaused || activeTab !== "featured") return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentIdx, isPaused, activeTab]);

  const current = testimonialsData[currentIdx];
  const avatarImage = patientAvatars[currentIdx % patientAvatars.length];

  const clinics = useMemo(() => {
    const list = ["All", "Bhubaneswar Clinic", "AlloRoots Clinic", "Odisha Clinic"];
    return list;
  }, []);

  const filteredReviews = useMemo(() => {
    if (clinicFilter === "All") return testimonialsData;
    return testimonialsData.filter((r) => r.location.toLowerCase().includes(clinicFilter.toLowerCase().split(" ")[0]));
  }, [clinicFilter]);

  return (
    <section
      className="relative py-28 md:py-40 bg-[#F8EDE7] overflow-hidden"
      id="reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div id="testimonials" className="absolute -top-28 pointer-events-none" />
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C96F4F]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header & Tab Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#0B4F4A]/10">
          <div>
            <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
              Patient Voices &amp; Verified Journeys
            </span>
            <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-serif font-normal text-[#202A28] leading-[1.08]">
              Witness the Transformation Through Their Eyes
            </h2>
            <p className="mt-3 text-[16px] text-[#566965] max-w-xl font-light leading-relaxed">
              Every review is independently verified on Google. Read authentic accounts of painless anesthesia, 100% doctor-led precision, and lifelong confidence restored.
            </p>
          </div>

          {/* Toggle Buttons: Spotlight vs All Reviews */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#0B4F4A]/10 self-start lg:self-end">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "featured"
                  ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/20"
                  : "text-[#202A28] hover:text-[#0B4F4A]"
              }`}
            >
              Featured Story
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                activeTab === "all"
                  ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/20"
                  : "text-[#202A28] hover:text-[#0B4F4A]"
              }`}
            >
              <span>All Google Reviews</span>
              <span className="text-[9.5px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-[#C6A15B] text-[#073A37] font-bold">
                163+
              </span>
            </button>
          </div>
        </div>

        {/* VIEW 1: FEATURED STORY SLIDER */}
        {activeTab === "featured" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Google Rating Verified Card & Counter (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Google Rating Verified Card */}
              <div className="p-7 rounded-[28px] bg-white border border-[#C96F4F]/15 shadow-[0_12px_32px_-8px_rgba(201,111,79,0.08)] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B4F4A] flex items-center justify-center text-white text-[16px] font-serif shadow-sm">
                      G
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#202A28] leading-tight">Google Verified Reviews</p>
                      <p className="text-[12px] text-[#566965]">AlloRoots Hair Transplant Clinic</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-[11px] font-bold uppercase tracking-wider">
                    5.0 ★ Top Rated
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-[#0B4F4A]/6">
                  <span className="text-[34px] font-serif font-normal text-[#0B4F4A] leading-none">5.0</span>
                  <div>
                    <div className="flex -space-x-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]" />
                      ))}
                    </div>
                    <p className="text-[12px] text-[#566965] font-light mt-1">Based on 163+ authentic reviews across India</p>
                  </div>
                </div>

                <div className="pt-2 text-[12.5px] text-[#202A28]/80 leading-relaxed bg-[#FBF8F3] p-3.5 rounded-xl border border-[#0B4F4A]/5">
                  <span className="font-semibold text-[#0B4F4A]">AIIMS Surgical Guarantee:</span> Every hair follicle extraction, hairline drawing, and micro-slit implantation is 100% doctor-performed.
                </div>
              </div>

              {/* Progress Bar & Counter */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-[12px] text-[#566965]">
                  <span>Verified Review 0{currentIdx + 1} of 0{total}</span>
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

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {testimonialsData.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setDirection(i > currentIdx ? 1 : -1);
                      setCurrentIdx(i);
                    }}
                    className={`text-[11.5px] px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                      currentIdx === i
                        ? "bg-[#0B4F4A] text-white font-semibold shadow-sm"
                        : "bg-white/70 text-[#202A28] hover:bg-white"
                    }`}
                  >
                    {t.patientName.split(" ")[0]}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Editorial Sliding Testimonial Card (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
            >
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
                  {/* Large Quote Mark & Stars */}
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
                        <h4 className="text-[17px] font-serif font-normal text-[#202A28] flex items-center gap-1.5">
                          <span>{current.patientName}</span>
                          <CheckCircle2 className="w-4 h-4 text-[#0B4F4A] inline" />
                        </h4>
                        <p className="text-[12.5px] text-[#566965]">
                          {current.procedure} • {current.location}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11.5px] text-[#8A9E9B] font-medium block">
                        {current.date}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#0B4F4A] tracking-wider block">
                        Google Verified
                      </span>
                    </div>
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
            </motion.div>

          </div>
        )}

        {/* VIEW 2: ALL GOOGLE REVIEWS WALL */}
        {activeTab === "all" && (
          <div className="space-y-8">
            {/* Filter chips */}
            <div className="flex flex-wrap items-center gap-2">
              {clinics.map((c) => (
                <button
                  key={c}
                  onClick={() => setClinicFilter(c)}
                  className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
                    clinicFilter === c
                      ? "bg-[#0B4F4A] text-white shadow-sm"
                      : "bg-white text-[#202A28] hover:bg-white/80 border border-[#0B4F4A]/10"
                  }`}
                >
                  {c}
                </button>
              ))}
              <span className="text-[12px] text-[#566965] ml-auto">
                Showing {filteredReviews.length} Verified Google Patient Reviews
              </span>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="bg-white rounded-[24px] p-6 border border-[#0B4F4A]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Header: Stars & Google Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-[#0B4F4A] bg-[#0B4F4A]/6 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#0B4F4A]" />
                        Verified
                      </span>
                    </div>

                    {/* Headline quote */}
                    <p className="text-[15px] font-serif font-normal text-[#1A2422] leading-snug">
                      &ldquo;{review.quote}&rdquo;
                    </p>

                    {/* Full review excerpt */}
                    <p className="text-[13px] text-[#566965] font-light leading-relaxed line-clamp-4">
                      {review.fullReview}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="pt-4 mt-4 border-t border-[#0B4F4A]/6 flex items-center justify-between text-[12px]">
                    <div>
                      <p className="font-semibold text-[#1A2422]">{review.patientName}</p>
                      <p className="text-[11px] text-[#8A9E9B]">{review.location}</p>
                    </div>
                    <span className="text-[11px] text-[#8A9E9B]">{review.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Google CTA Strip */}
            <div className="p-6 rounded-[24px] bg-white border border-[#C6A15B]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0B4F4A] text-white flex items-center justify-center font-serif text-xl">
                  G
                </div>
                <div>
                  <h4 className="text-[16px] font-serif text-[#1A2422]">
                    5.0 Star Rating Across 163+ Google Reviews
                  </h4>
                  <p className="text-[12px] text-[#566965]">
                    Delhi NCR • Bhubaneswar • Chennai • Uttarakhand
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Alloroots+Hair+Transplant+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4.5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0B4F4A] text-white text-[12px] sm:text-[13px] font-semibold hover:bg-[#073A37] transition-colors cursor-pointer text-center"
              >
                Review Us on Google
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
