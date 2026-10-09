"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Star, ArrowRight, Play, X, CheckCircle2, Award, Shield, ChevronLeft, ChevronRight,
} from "lucide-react";
import { siteImages } from "@/data/siteImages";

interface HeroProps {
  onOpenConsultation?: () => void;
}

const trustStats = [
  { value: "3,000+", label: "Successful Surgeries" },
  { value: "99.4%", label: "Graft Survival Rate" },
  { value: "10+", label: "Years of Experience" },
  { value: "4", label: "Clinics Across India" },
];

// Slides using only clean images (no baked text)
const slides = [
  {
    id: "doctor",
    type: "doctor",
    src: siteImages.doctors.drAlok,
    alt: "Dr. Alok Kumar Sahoo — Chief Surgeon, AIIMS New Delhi",
    bg: "linear-gradient(155deg, #0B4F4A 0%, #073A37 60%, #042926 100%)",
  },
  {
    id: "case14",
    type: "result",
    src: siteImages.results.case14,
    alt: "Complete scalp transformation — Before & After",
    bg: "#EAF3F2",
  },
  {
    id: "case16",
    type: "result",
    src: siteImages.results.case16,
    alt: "Celebrity hairline design — Before & After",
    bg: "#EAF3F2",
  },
  {
    id: "case11",
    type: "result",
    src: siteImages.results.case11,
    alt: "High density hair transplant — Before & After",
    bg: "#EAF3F2",
  },
];

const variants: Variants = {
  enter: { y: 40, opacity: 0, scale: 0.98 },
  center: {
    y: 0, opacity: 1, scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
  exit: {
    y: -40, opacity: 0, scale: 0.98,
    transition: { duration: 0.45, ease: "easeIn" },
  },
};

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4800);
  };

  useEffect(() => {
    startAuto();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => { setCurrent(i); startAuto(); };
  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="hero-section relative w-full bg-[#F5F0E8] overflow-x-hidden pt-[104px] lg:pt-[112px]">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#0B4F4A]/6 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D87852]/6 blur-[130px]" />
        </div>
        <style>{`
          .hero-section {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 1024px) {
            .hero-section {
              min-height: 100svh;
            }
          }
        `}</style>

        {/* ─ Stack on mobile, side-by-side on desktop ─ */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">

          {/* ════ RIGHT PANEL: Slider (top on mobile) ════ */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[65vw] sm:h-[50vw] lg:min-h-[580px] lg:h-auto lg:flex-1 order-1 lg:order-2 overflow-hidden bg-[#073A37]"
          >
            <div className="absolute inset-0" style={{ perspective: "1400px" }}>
              <AnimatePresence mode="wait">
                {slide.type === "doctor" ? (
                  /* Doctor themed slide */
                  <motion.div
                    key="doctor"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-end justify-center overflow-hidden"
                    style={{ background: slide.bg, transformOrigin: "bottom center" }}
                  >
                    {/* Decorative rings */}
                    <div className="absolute top-8 left-8 w-44 h-44 rounded-full border border-[#C6A15B]/20 pointer-events-none" />
                    <div className="absolute top-16 left-16 w-24 h-24 rounded-full border border-[#C6A15B]/15 pointer-events-none" />
                    <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-[#D87852]/12 blur-3xl pointer-events-none" />

                    {/* Doctor portrait - elevated and prominent */}
                    <div className="relative w-[85%] sm:w-[80%] lg:w-[84%] xl:w-[78%] h-[95%]">
                      <Image
                        src={siteImages.doctors.drAlok}
                        alt="Dr. Alok Kumar Sahoo — Chief Surgeon AIIMS New Delhi"
                        fill
                        priority
                        sizes="(max-width: 1024px) 80vw, 42vw"
                        className="object-contain object-bottom drop-shadow-2xl"
                      />
                    </div>

                    {/* Top Doctor Credential Tag */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/12 backdrop-blur-md rounded-2xl px-3.5 py-2 border border-white/20 flex items-center gap-2 z-20 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                      <span className="text-[12px] font-semibold text-white tracking-wide">
                        Dr. Alok • AIIMS New Delhi
                      </span>
                    </div>

                    {/* Floating badge top right */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/12 backdrop-blur-md rounded-2xl px-3.5 py-2.5 border border-[#C6A15B]/30 flex items-center gap-2.5 z-20 shadow-lg">
                      <div className="w-7 h-7 rounded-xl bg-[#C6A15B]/25 flex items-center justify-center">
                        <Shield className="w-3.5 h-3.5 text-[#C6A15B]" />
                      </div>
                      <div>
                        <p className="text-[14px] font-serif text-[#C6A15B] leading-tight">99.4%</p>
                        <p className="text-[8.5px] text-white/75 uppercase tracking-wider">Graft Survival</p>
                      </div>
                    </div>

                    {/* Floating badge bottom left */}
                    <div className="absolute bottom-6 left-4 sm:left-6 bg-white/12 backdrop-blur-md rounded-2xl px-3.5 py-2.5 border border-white/15 flex items-center gap-2.5 z-20 shadow-lg">
                      <div className="w-7 h-7 rounded-xl bg-[#D87852]/25 flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-[#D87852]" />
                      </div>
                      <div>
                        <p className="text-[14px] font-serif text-white leading-tight">3,000+</p>
                        <p className="text-[8.5px] text-white/70 uppercase tracking-wider">Surgeries Done</p>
                      </div>
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#042926]/70 to-transparent pointer-events-none" />
                  </motion.div>
                ) : (
                  /* Result before/after slide — contain so no cutting */
                  <motion.div
                    key={slide.id}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8"
                    style={{ background: slide.bg, transformOrigin: "bottom center" }}
                  >
                    {/* Subtle brand gradient behind image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B4F4A]/5 via-transparent to-[#D87852]/5 pointer-events-none" />

                    {/* Top badge */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md rounded-full px-3.5 py-1.5 border border-[#0B4F4A]/15 shadow-sm flex items-center gap-2 z-20">
                      <span className="w-2 h-2 rounded-full bg-[#0B4F4A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F4A]">
                        Verified Patient Result
                      </span>
                    </div>

                    <div className="relative w-full h-full max-h-[580px]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain drop-shadow-md rounded-xl"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Left/Right arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot nav */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      i === current
                        ? "w-7 h-2 bg-[#D87852] shadow-sm"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Play button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                aria-label="Watch AlloRoots Video"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-white/15 animate-ping opacity-40" />
                  <div className="w-[58px] h-[58px] rounded-full bg-white/25 backdrop-blur-md border-2 border-white/70 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* ════ LEFT PANEL: Text (bottom on mobile) ════ */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:flex-1 flex flex-col justify-center py-8 lg:py-12 xl:py-14 px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10 order-2 lg:order-1"
          >

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-3 sm:mb-4 self-start px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0B4F4A]/12 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#D87852] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#073A37]">
                India&apos;s #1 Hair Restoration Experts
              </span>
            </motion.div>

            <div className="mb-3 sm:mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-[32px] sm:text-[42px] lg:text-[44px] xl:text-[52px] font-serif font-normal text-[#1A2422] leading-[1.08] tracking-[-0.02em]"
              >
                Proven Regrowth Of
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="text-[32px] sm:text-[42px] lg:text-[44px] xl:text-[52px] font-serif font-normal text-[#D87852] leading-[1.08] tracking-[-0.02em]"
              >
                Hairline With Transplant.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="text-[14px] sm:text-[15px] xl:text-[16px] text-[#4A6360] leading-relaxed max-w-[480px] mb-4 sm:mb-5"
            >
              Panel of M.D Dermatologists, and Hair Transplant Surgeons from AIIMS, New Delhi with 10+ years
              of experience. Utilising latest techniques to restore your hairline and revitalise your self-esteem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {["100% Doctor-Led Implantation", "99.4% Graft Survival", "0% EMI Available", "Natural & Undetectable"].map((feat) => (
                <span key={feat} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#0B4F4A]/12 text-[11.5px] sm:text-[12px] font-medium text-[#1A2422] shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                  {feat}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5"
            >
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#1A2422] text-white text-[13.5px] sm:text-[14px] font-semibold shadow-lg hover:bg-[#0B4F4A] transition-all duration-300 cursor-pointer"
              >
                Book In-Clinic Consultation
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white border border-[#0B4F4A]/12 text-[#1A2422] text-[13.5px] sm:text-[14px] font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className="w-6 h-6 rounded-full bg-[#D87852] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </span>
                Watch Patient Video
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#0B4F4A]/10"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#F9A825] text-[#F9A825]" />
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#1A2422] leading-tight">5.0 / 5.0</p>
                  <p className="text-[11px] text-[#6B8280]">160+ Verified Google Reviews</p>
                </div>
              </div>

              <div className="h-6 w-px bg-[#0B4F4A]/10 hidden sm:block lg:hidden" />

              {/* Mini stats on mobile/tablet only (desktop has full stats bar below) */}
              <div className="flex gap-4 sm:gap-6 lg:hidden">
                {trustStats.slice(0, 2).map((s) => (
                  <div key={s.label}>
                    <p className="text-[14px] font-bold text-[#0B4F4A] leading-tight">{s.value}</p>
                    <p className="text-[11px] text-[#6B8280]">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="hidden lg:block w-full bg-[#0B4F4A] flex-shrink-0"
        >
          <div className="max-w-[1380px] mx-auto grid grid-cols-4 divide-x divide-white/10 py-3.5 px-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-0.5">
                <span className="text-[20px] font-serif text-[#C6A15B] leading-tight">{stat.value}</span>
                <span className="text-[10.5px] uppercase tracking-wider text-white/70 font-medium mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════ VIDEO MODAL ════ */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/_uxQwrsRhDA?autoplay=1&rel=0"
              title="AlloRoots Hair Transplant Results"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
