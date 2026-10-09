"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
} from "lucide-react";
import { siteImages } from "@/data/siteImages";

interface JourneyStep {
  step: string;
  phase: string;
  title: string;
  desc: string;
  image: string;
  milestone: string;
  badge: string;
  shortName: string;
}

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    shortName: "Scalp Mapping",
    phase: "Consultation & Diagnosis",
    title: "Microscopic Scalp Mapping",
    desc: "AIIMS dermatologists analyze donor follicular density, miniaturization percentage, and scalp elasticity under digital dermatoscopy to calculate exact graft requirements.",
    image: siteImages.hero.clinicThumb,
    milestone: "Day 0 • Digital Assessment",
    badge: "AIIMS Protocol Verified",
  },
  {
    step: "02",
    shortName: "Hairline Design",
    phase: "Artistic Architecture",
    title: "Natural Hairline Planning",
    desc: "Surgeon sketches custom frontal hairline matching unique facial bone structure, temple angles, and lifetime aesthetic age-progression. No artificial straight lines.",
    image: siteImages.results.case1,
    milestone: "Day 0 • Hairline Marking",
    badge: "Artistic Symmetry",
  },
  {
    step: "03",
    shortName: "Sapphire Micro-FUE",
    phase: "Safe Extraction",
    title: "Painless Sapphire Micro-FUE",
    desc: "Ultra-fine Sapphire punches (0.75mm–0.9mm) extract single and multi-hair follicular units under precision localized anesthesia with zero linear scarring.",
    image: siteImages.results.case4,
    milestone: "Surgery Morning • Micro-Punch",
    badge: "Zero Linear Scarring",
  },
  {
    step: "04",
    shortName: "Root Viability",
    phase: "Root Viability",
    title: "ATP Bio-Solution Preservation",
    desc: "Follicles are immediately placed in active ATP nutrient and growth factor baths during sorting, maintaining 99.4% cellular viability and preventing dehydration.",
    image: siteImages.hero.aboutExcellence,
    milestone: "Realtime • 99.4% Viability",
    badge: "99.4% Viability Maintained",
  },
  {
    step: "05",
    shortName: "Doctor-Led Implantation",
    phase: "Implantation",
    title: "100% Doctor-Led Micro-Slits",
    desc: "AIIMS surgeons personally create micro-slits at acute 40–45° angles matching natural hair whorls and feather single-graft follicles along the frontal perimeter.",
    image: siteImages.doctors.drAlok,
    milestone: "Surgery Afternoon • Doctor-Led",
    badge: "Natural Whorl Direction",
  },
  {
    step: "06",
    shortName: "Rapid Recovery",
    phase: "Healing & Shedding",
    title: "Rapid 5–7 Day Recovery",
    desc: "Micro-scabs resolve within a week. Native follicles settle before entering the temporary shedding phase as newly rooted papillae anchor permanently into the dermis.",
    image: siteImages.results.case2,
    milestone: "Week 1 to Month 3",
    badge: "Accelerated Healing",
  },
  {
    step: "07",
    shortName: "Lifetime Growth",
    phase: "Final Density",
    title: "Lifetime Permanent Growth",
    desc: "From month 4 onwards, healthy permanent hair sprouts rapidly. Full cosmetic density, natural sweep, and lifelong shavable hairline achieved by month 9–12.",
    image: siteImages.results.case14,
    milestone: "Month 9–12 • Full Result",
    badge: "Permanent Follicle Anchor",
  },
];

export default function PatientJourney() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Interaction tracking for dragging & pause on interaction
  const isInteractingRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Measure card width + gap dynamically
  const getCardScrollStep = useCallback(() => {
    if (!scrollRef.current) return 380;
    const firstCard = scrollRef.current.querySelector<HTMLElement>("[data-journey-card]");
    if (firstCard) {
      const style = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(style.marginRight) || 24;
      return firstCard.offsetWidth + marginRight;
    }
    return 380;
  }, []);

  // Update active milestone index during scroll
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const stepWidth = getCardScrollStep();
    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (halfWidth <= 0) return;

    const normalizedLeft = scrollRef.current.scrollLeft % halfWidth;
    const currentIdx = Math.round(normalizedLeft / stepWidth) % journeySteps.length;
    setActiveStepIndex(currentIdx);
  }, [getCardScrollStep]);

  // Seamless continuous auto-scroll loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId: number;
    const speed = 0.8; // Smooth gliding speed in px/frame

    const step = () => {
      if (!isPaused && !isInteractingRef.current && container) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          } else {
            container.scrollLeft += speed;
          }
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Scroll forward by one card
  const handleNext = () => {
    if (!scrollRef.current) return;
    const stepWidth = getCardScrollStep();
    scrollRef.current.scrollBy({ left: stepWidth, behavior: "smooth" });
  };

  // Scroll backward by one card
  const handlePrev = () => {
    if (!scrollRef.current) return;
    const stepWidth = getCardScrollStep();
    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (scrollRef.current.scrollLeft <= stepWidth) {
      scrollRef.current.scrollLeft += halfWidth;
    }
    scrollRef.current.scrollBy({ left: -stepWidth, behavior: "smooth" });
  };

  // Jump to specific milestone step
  const handleMilestoneClick = (index: number) => {
    if (!scrollRef.current) return;
    const stepWidth = getCardScrollStep();
    scrollRef.current.scrollTo({
      left: index * stepWidth,
      behavior: "smooth",
    });
    setActiveStepIndex(index);
  };

  // Mouse Drag to Scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isMouseDownRef.current = true;
    isInteractingRef.current = true;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStartLeftRef.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    scrollRef.current.scrollLeft = scrollStartLeftRef.current - walk;
  };

  const onMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 1800);
    }
  };

  const onTouchStart = () => {
    isInteractingRef.current = true;
  };

  const onTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000);
  };

  // Duplicate items for infinite seamless scroll
  const duplicatedSteps = [...journeySteps, ...journeySteps];

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#F3EEE6] overflow-hidden border-y border-[#0B4F4A]/8"
      id="journey"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#0B4F4A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-8 sm:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#0B4F4A]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C96F4F]/10 text-[#C96F4F] text-[11px] font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Step-by-Step Clinical Experience
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-serif font-normal text-[#202A28] leading-[1.12]">
              The Patient Journey: From Consultation to Lifetime Growth
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#566965] mt-3 font-light max-w-xl">
              Every phase of your hair restoration is scientifically structured, transparent, and personally conducted by AIIMS-trained surgeons.
            </p>
          </motion.div>

          {/* Interactive Controls & Milestone Counter */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Auto-Scroll Pause / Play Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play Auto-Scroll" : "Pause Auto-Scroll"}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 border border-[#0B4F4A]/15 text-[#0B4F4A] hover:bg-white text-[12px] font-medium transition-all shadow-sm"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? "bg-amber-500" : "bg-[#0B4F4A] animate-pulse"
                }`}
              />
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume Auto-Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Auto-Scrolling</span>
                </>
              )}
            </button>

            {/* Previous / Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous step"
                className="w-10 h-10 rounded-full bg-white border border-[#0B4F4A]/15 text-[#0B4F4A] hover:bg-[#0B4F4A] hover:text-white transition-all flex items-center justify-center shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next step"
                className="w-10 h-10 rounded-full bg-white border border-[#0B4F4A]/15 text-[#0B4F4A] hover:bg-[#0B4F4A] hover:text-white transition-all flex items-center justify-center shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Milestone Quick Jump Selector */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          <span className="text-[12px] font-medium text-[#8A9E9B] uppercase tracking-wider whitespace-nowrap mr-1">
            Milestones:
          </span>
          {journeySteps.map((item, index) => {
            const isActive = activeStepIndex === index;
            return (
              <button
                key={item.step}
                onClick={() => handleMilestoneClick(index)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0B4F4A] text-white shadow-md scale-105"
                    : "bg-white/80 text-[#566965] hover:bg-white hover:text-[#0B4F4A] border border-[#0B4F4A]/8"
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? "text-[#C6A15B]" : "text-[#8A9E9B]"}`}>
                  {item.step}
                </span>
                <span>{item.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Auto-Scrolling Ribbon Container */}
      <div className="relative w-full">
        {/* Soft Edge Fade Gradients for editorial feel */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F3EEE6] via-[#F3EEE6]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F3EEE6] via-[#F3EEE6]/80 to-transparent z-10" />

        {/* The Horizontal Scrolling Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={onMouseUpOrLeave}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex items-stretch gap-6 sm:gap-7 px-4 sm:px-8 overflow-x-auto select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedSteps.map((step, idx) => {
            const stepNumber = step.step;
            return (
              <div
                key={`${stepNumber}-${idx}`}
                data-journey-card
                className="w-[320px] sm:w-[380px] lg:w-[410px] flex-shrink-0 bg-white rounded-[26px] p-5 sm:p-6 shadow-[0_12px_36px_-12px_rgba(11,79,74,0.09)] border border-[#0B4F4A]/8 flex flex-col justify-between group hover:border-[#C6A15B]/50 hover:shadow-[0_20px_48px_-12px_rgba(11,79,74,0.15)] transition-all duration-300"
              >
                {/* Card Top: Image Showcase (Full hairline visible with object-top) */}
                <div className="relative h-[210px] sm:h-[230px] w-full rounded-[18px] overflow-hidden bg-[#182320] mb-5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 320px, 410px"
                    priority={idx < 3}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  />
                  {/* Subtle darkening gradient for bottom contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Overlaid Step Number Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#073A37] text-[11px] font-bold tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C96F4F]" />
                    Step {stepNumber}
                  </div>

                  {/* Bottom Milestone Label */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-[#E8C582] font-semibold block">
                      {step.milestone}
                    </span>
                  </div>
                </div>

                {/* Card Middle: Phase, Title & Description */}
                <div className="space-y-2 flex-1">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#C96F4F] font-semibold block">
                    {step.phase}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-serif font-normal text-[#202A28] leading-snug group-hover:text-[#0B4F4A] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#566965] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Card Bottom: Verified Protocol Badge & Phase Counter */}
                <div className="pt-4 mt-5 border-t border-[#0B4F4A]/8 flex items-center justify-between text-[11.5px] text-[#0B4F4A] font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                    <span>{step.badge}</span>
                  </span>
                  <span className="text-[#8A9E9B] font-mono text-[11px]">
                    Phase {stepNumber} / 07
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Hint & Information */}
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#566965]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B4F4A] animate-pulse" />
            <span>Continuous Auto-Scroll Active • Hover any card to pause • Drag or click arrows to explore</span>
          </div>
          <div className="flex items-center gap-4 text-[#8A9E9B]">
            <span>AlloRoots Clinical Protocol</span>
            <span className="w-1 h-1 rounded-full bg-[#0B4F4A]/30" />
            <span>AIIMS Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
