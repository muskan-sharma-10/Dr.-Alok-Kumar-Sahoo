"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ArrowRight,
  Play,
  X,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { siteImages } from "@/data/siteImages";

interface HeroProps {
  onOpenConsultation?: () => void;
}

interface SlideData {
  id: string;
  tabLabel: string;
  pillBadge: string;
  pillIcon: typeof Award;
  titleLight: string;
  titleAccent: string;
  description: string;
  highlights: string[];
  primaryCta: {
    label: string;
    action: "consult" | "calculator" | "clinics";
  };
  secondaryCta: {
    label: string;
    action: "video" | "services" | "results" | "consult";
  };
  visualType: "doctor" | "transformation" | "clinic";
  imageSrc: string;
  imageAlt: string;
  floatingBadges: {
    top?: { icon: typeof Award; label: string; sub?: string };
    bottom?: { icon: typeof ShieldCheck; label: string; sub?: string };
  };
}

const heroSlides: SlideData[] = [
  {
    id: "doctor",
    tabLabel: "Dr. Alok Sahoo",
    pillBadge: "India's Premier AIIMS Doctor-Led Hair Clinic",
    pillIcon: Award,
    titleLight: "Natural Hairlines Crafted with",
    titleAccent: "AIIMS Surgical Precision.",
    description:
      "Post-graduate from AIIMS New Delhi with 10+ years of dedicated surgical mastery. At AlloRoots, 100% of micro-slit angulation, hairline feathering, and root implantation is personally executed by medical doctors.",
    highlights: ["100% Doctor-Led Implantation", "99.4% Root Survival Guarantee", "0% EMI Available"],
    primaryCta: {
      label: "Book Free Consultation",
      action: "consult",
    },
    secondaryCta: {
      label: "Watch Surgery Film",
      action: "video",
    },
    visualType: "doctor",
    imageSrc: siteImages.doctors.drAlok,
    imageAlt: "Dr. Alok Sahoo — Chief Hair Restoration Surgeon, AIIMS New Delhi Alumnus",
    floatingBadges: {
      top: {
        icon: Award,
        label: "AIIMS New Delhi",
        sub: "MD Alumnus & Ex-Senior Resident",
      },
      bottom: {
        icon: ShieldCheck,
        label: "99.4% Graft Survival",
        sub: "Realtime Bio-Enhanced FUE",
      },
    },
  },
  {
    id: "bio-fue",
    tabLabel: "Bio-Enhanced FUE",
    pillBadge: "Proprietary ATP Bio-Preservation Protocol",
    pillIcon: Sparkles,
    titleLight: "Realtime Bio-Enhanced FUE:",
    titleAccent: "Freedom From Baldness.",
    description:
      "Unlike conventional clinics using plain saline, our extracted follicles are stored in active ATP nutrient and growth factor baths—preventing hypoxia and ensuring lifelong, permanent hair density.",
    highlights: ["Zero Root Hypoxia", "Sapphire Micro-Slits", "Natural Growth Direction"],
    primaryCta: {
      label: "Calculate Graft Cost",
      action: "calculator",
    },
    secondaryCta: {
      label: "Explore All Treatments",
      action: "services",
    },
    visualType: "transformation",
    imageSrc: siteImages.hero.orangeBanner,
    imageAlt: "Freedom From Baldness — Realtime Bio-Enhanced FUE Hair Restoration",
    floatingBadges: {
      top: {
        icon: Sparkles,
        label: "Documented 12-Month Result",
        sub: "3,200 Follicular Grafts",
      },
      bottom: {
        icon: ShieldCheck,
        label: "Natural Feathered Hairline",
        sub: "Undetectable Single Grafts",
      },
    },
  },
  {
    id: "clinics",
    tabLabel: "4 Flagship Centers",
    pillBadge: "Delhi • Bhubaneswar • Chennai • Uttarakhand",
    pillIcon: MapPin,
    titleLight: "World-Class Surgical Standards,",
    titleAccent: "At 4 Centers Across India.",
    description:
      "Ultra-modern NABH-standard surgical suites with painless local ring-block anesthesia, state-of-the-art Sapphire tools, and 12 months of structured doctor post-op care across India.",
    highlights: ["Painless Ring-Block Anesthesia", "VIP Private Recovery", "NABH-Grade Sterility"],
    primaryCta: {
      label: "Explore Our Clinics",
      action: "clinics",
    },
    secondaryCta: {
      label: "Book Free Consultation",
      action: "consult",
    },
    visualType: "clinic",
    imageSrc: siteImages.hero.aboutHero,
    imageAlt: "AlloRoots Modern Clinical Facility & Surgical Suites",
    floatingBadges: {
      top: {
        icon: MapPin,
        label: "4 Cities Across India",
        sub: "Delhi • BBSR • Chennai • UK",
      },
      bottom: {
        icon: Award,
        label: "NABH-Standard Surgical Suites",
        sub: "Advanced Sapphire Micro-OTs",
      },
    },
  },
];

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-slide every 5.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, current]);

  const slide = heroSlides[current];

  const handlePrimaryClick = () => {
    if (slide.primaryCta.action === "consult") {
      onOpenConsultation?.();
    } else if (slide.primaryCta.action === "calculator") {
      document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
    } else if (slide.primaryCta.action === "clinics") {
      document.getElementById("clinics")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryClick = () => {
    if (slide.secondaryCta.action === "video") {
      setIsVideoOpen(true);
    } else if (slide.secondaryCta.action === "services") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else if (slide.secondaryCta.action === "consult") {
      onOpenConsultation?.();
    }
  };

  return (
    <>
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full overflow-hidden bg-[#FAF8F5] pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-18 lg:pb-24 border-b border-[#0B4F4A]/8"
      >
        {/* Soft Luxury Ambient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle warm champagne and teal glows */}
          <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-[#C6A15B]/7 blur-[140px]" />
          <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] rounded-full bg-[#0B4F4A]/5 blur-[160px]" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#D87852]/5 blur-[140px]" />
          
          {/* Very faint delicate pattern grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(#0B4F4A 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 2-Column Banner Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

            {/* ════ LEFT COLUMN: Clean Editorial Copy ════ */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Category Pill Tag */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#0B4F4A]/12 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#D87852] animate-pulse" />
                    <span className="text-[11.5px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#073A37]">
                      {slide.pillBadge}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <div className="space-y-1">
                    <h1 className="text-[34px] sm:text-[44px] md:text-[50px] xl:text-[56px] font-serif font-normal text-[#1A2422] leading-[1.12] tracking-[-0.02em]">
                      {slide.titleLight}
                    </h1>
                    <h2 className="text-[34px] sm:text-[44px] md:text-[50px] xl:text-[56px] font-serif font-normal text-[#0B4F4A] leading-[1.12] tracking-[-0.02em]">
                      {slide.titleAccent}
                    </h2>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-[15.5px] sm:text-[16.5px] text-[#4A6360] leading-relaxed max-w-[580px] font-light">
                    {slide.description}
                  </p>

                  {/* Key Highlights Pill Row */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    {slide.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0B4F4A]/10 text-[12.5px] font-medium text-[#1E2E2C] shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  {/* CTA Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <button
                      onClick={handlePrimaryClick}
                      className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#073A37] hover:bg-[#0B4F4A] text-white text-[14.5px] sm:text-[15px] font-semibold transition-all duration-300 shadow-lg shadow-[#073A37]/20 hover:shadow-xl hover:scale-[1.01] cursor-pointer"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={handleSecondaryClick}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#FAF7F1] border border-[#0B4F4A]/15 text-[#1A2422] text-[14px] sm:text-[14.5px] font-semibold transition-all duration-300 shadow-sm hover:shadow cursor-pointer group"
                    >
                      {slide.secondaryCta.action === "video" ? (
                        <span className="w-6 h-6 rounded-full bg-[#D87852] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                          <Play className="w-3 h-3 fill-white ml-0.5" />
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
                      )}
                      <span>{slide.secondaryCta.label}</span>
                    </button>
                  </div>

                  {/* Social Proof Strip */}
                  <div className="pt-3 flex items-center gap-4 text-[#4A6360]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F9A825] text-[#F9A825]" />
                        ))}
                      </div>
                      <span className="text-[13.5px] font-bold text-[#1A2422]">5.0</span>
                    </div>
                    <span className="text-white/20 text-xs">•</span>
                    <span className="text-[13px] text-[#5A7370]">
                      160+ Verified Google Reviews
                    </span>
                    <span className="text-white/20 text-xs hidden sm:inline">•</span>
                    <span className="text-[13px] text-[#0B4F4A] font-semibold hidden sm:inline">
                      100% Doctor Performed
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* ════ RIGHT COLUMN: Large Premium Visual Card ════ */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              <div className="relative w-full max-w-[500px] lg:max-w-none">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 0.96, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    
                    {/* Visual Card Frame */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0B4F4A]/15 bg-gradient-to-b from-[#0B4F4A] via-[#073A37] to-[#03211E] p-2">
                      
                      {/* Inner Card Container */}
                      <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-b from-[#0B4F4A] via-[#073A37] to-[#042421] h-[400px] sm:h-[460px] lg:h-[500px] w-full">
                        
                        {/* Background radial spotlight */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#C6A15B]/20 blur-[100px]" />
                          <div className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-full bg-[#D87852]/20 blur-[90px]" />
                        </div>

                        {/* Prestige Studio Arch Frame for Doctor */}
                        {slide.visualType === "doctor" && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[88%] rounded-t-full bg-white/[0.04] border-t border-x border-[#C6A15B]/25 pointer-events-none" />
                        )}

                        {/* Image presentation based on slide */}
                        {slide.visualType === "doctor" ? (
                          <>
                            <div className="relative w-full h-full">
                              <Image
                                src={slide.imageSrc}
                                alt={slide.imageAlt}
                                fill
                                priority
                                unoptimized
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                className="object-contain object-bottom drop-shadow-2xl z-10"
                              />
                            </div>

                            {/* Torso bottom smooth gradient blend */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#042421] via-[#042421]/70 to-transparent z-15 pointer-events-none" />

                            {/* Doctor identity caption bar at bottom */}
                            <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 text-center">
                              <p className="text-[14px] font-serif font-bold text-white tracking-wide">
                                Dr. Alok Sahoo
                              </p>
                              <p className="text-[11px] text-[#C6A15B] tracking-wider uppercase font-medium">
                                Chief Hair Transplant Surgeon • AIIMS MD Alumnus
                              </p>
                            </div>
                          </>
                        ) : (
                          <div className="relative w-full h-full overflow-hidden">
                            <Image
                              src={slide.imageSrc}
                              alt={slide.imageAlt}
                              fill
                              priority
                              unoptimized
                              sizes="(max-width: 1024px) 90vw, 45vw"
                              className="object-cover object-center z-10"
                            />
                            {/* Subtle dark gradient overlay on non-doctor images */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#042421]/90 via-black/20 to-black/30 z-15 pointer-events-none" />
                          </div>
                        )}

                        {/* Center Play Button for video trigger */}
                        <button
                          onClick={() => setIsVideoOpen(true)}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 group cursor-pointer"
                          aria-label="Play clinic surgical video"
                        >
                          <div className="relative flex items-center justify-center">
                            <div className="absolute w-16 h-16 rounded-full bg-white/15 animate-ping opacity-35" />
                            <div className="w-[52px] h-[52px] rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#D87852] transition-all duration-300">
                              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        </button>

                      </div>

                    </div>

                    {/* Top Floating Badge */}
                    {slide.floatingBadges.top && (
                      <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="absolute -top-3.5 -left-3 sm:-left-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#0B4F4A]/12 shadow-xl flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#0B4F4A]/10 flex items-center justify-center text-[#0B4F4A]">
                          <Award className="w-4 h-4 text-[#C6A15B]" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[#1A2422] leading-tight">
                            {slide.floatingBadges.top.label}
                          </p>
                          {slide.floatingBadges.top.sub && (
                            <p className="text-[10px] text-[#5A7370] leading-tight mt-0.5">
                              {slide.floatingBadges.top.sub}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Bottom Floating Badge */}
                    {slide.floatingBadges.bottom && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="absolute -bottom-3.5 -right-3 sm:-right-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#0B4F4A]/12 shadow-xl flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#D87852]/10 flex items-center justify-center text-[#D87852]">
                          <ShieldCheck className="w-4 h-4 text-[#D87852]" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[#1A2422] leading-tight">
                            {slide.floatingBadges.bottom.label}
                          </p>
                          {slide.floatingBadges.bottom.sub && (
                            <p className="text-[10px] text-[#5A7370] leading-tight mt-0.5">
                              {slide.floatingBadges.bottom.sub}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

          </div>

          {/* ════ BOTTOM INTERACTIVE SLIDE SELECTOR (Tabs with progress) ════ */}
          <div className="mt-12 sm:mt-14 pt-8 border-t border-[#0B4F4A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Slide Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
              {heroSlides.map((s, idx) => {
                const isActive = idx === current;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(idx)}
                    className={`relative px-4 sm:px-5 py-2.5 rounded-full text-[12.5px] sm:text-[13px] font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-[#073A37] text-white shadow-md border border-[#073A37]"
                        : "bg-white text-[#1E2E2C] hover:bg-[#F3EFE6] border border-[#0B4F4A]/15 shadow-sm"
                    }`}
                  >
                    <span className={`text-[10px] font-bold tracking-wider ${isActive ? "text-[#C6A15B]" : "text-[#8A9E9B]"}`}>
                      0{idx + 1}
                    </span>
                    <span>{s.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Auto-Slide Progress & Indicator */}
            <div className="flex items-center gap-3 text-[12px] text-[#8A9E9B]">
              <span>Auto-advancing</span>
              <div className="flex gap-1.5 items-center">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                      i === current ? "w-6 bg-[#C6A15B]" : "w-1.5 bg-[#0B4F4A]/15 hover:bg-[#0B4F4A]/30"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════ VIDEO THEATRE MODAL ════ */}
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
              title="AlloRoots Hair Restoration Surgery Demonstration"
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
