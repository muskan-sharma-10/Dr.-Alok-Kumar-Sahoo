"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { siteImages } from "@/data/siteImages";

const journeySteps = [
  {
    step: "01",
    phase: "Consultation & Diagnosis",
    title: "Microscopic Scalp Mapping",
    desc: "AIIMS dermatologists analyze donor follicular density, miniaturization percentage, and scalp elasticity under digital dermatoscopy to calculate exact graft requirements.",
    image: siteImages.hero.clinicThumb,
    milestone: "Day 0 • Digital Assessment",
  },
  {
    step: "02",
    phase: "Artistic Architecture",
    title: "Natural Hairline Planning",
    desc: "Surgeon sketches custom frontal hairline matching unique facial bone structure, temple angles, and lifetime aesthetic age-progression. No artificial straight lines.",
    image: siteImages.results.case1,
    milestone: "Day 0 • Hairline Marking",
  },
  {
    step: "03",
    phase: "Safe Extraction",
    title: "Painless Sapphire Micro-FUE",
    desc: "Ultra-fine Sapphire punches (0.75mm–0.9mm) extract single and multi-hair follicular units under precision localized anesthesia with zero linear scarring.",
    image: siteImages.results.case4,
    milestone: "Surgery Morning • Micro-Punch",
  },
  {
    step: "04",
    phase: "Root Viability",
    title: "ATP Bio-Solution Preservation",
    desc: "Follicles are immediately placed in active ATP nutrient and growth factor baths during sorting, maintaining 99.4% cellular viability and preventing dehydration.",
    image: siteImages.hero.aboutExcellence,
    milestone: "Realtime • 99.4% Viability",
  },
  {
    step: "05",
    phase: "Implantation",
    title: "100% Doctor-Led Micro-Slits",
    desc: "AIIMS surgeons personally create micro-slits at acute 40–45° angles matching natural hair whorls and feather single-graft follicles along the frontal perimeter.",
    image: siteImages.doctors.drAlok,
    milestone: "Surgery Afternoon • Doctor-Led",
  },
  {
    step: "06",
    phase: "Healing & Shedding",
    title: "Rapid 5–7 Day Recovery",
    desc: "Micro-scabs resolve within a week. Native follicles settle before entering the temporary shedding phase as newly rooted papillae anchor permanently into the dermis.",
    image: siteImages.results.case2,
    milestone: "Week 1 to Month 3",
  },
  {
    step: "07",
    phase: "Final Density",
    title: "Lifetime Permanent Growth",
    desc: "From month 4 onwards, healthy permanent hair sprouts rapidly. Full cosmetic density, natural sweep, and lifelong shavable hairline achieved by month 9–12.",
    image: siteImages.results.case14,
    milestone: "Month 9–12 • Full Result",
  },
];

export default function PatientJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Vertical scroll drives horizontal movement
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["5%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[280vh] bg-[#F3EEE6] overflow-clip"
      id="journey"
    >
      {/* Sticky Container Window */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-12 md:py-16 overflow-hidden">
        
        {/* Top Header & Dynamic Progress */}
        <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#0B4F4A]/10">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
                Step-by-Step Clinical Experience
              </span>
              <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif font-normal text-[#202A28] leading-[1.08]">
                The Patient Journey: From Consultation to Lifetime Growth
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 text-[13px] text-[#566965]"
            >
              <span className="font-serif text-[22px] text-[#0B4F4A]">7 Milestones</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F4A]/20" />
              <span>Scroll Vertically to Explore Timeline</span>
            </motion.div>
          </div>

          {/* Animated Connecting Line Indicator */}
          <div className="relative w-full h-1 bg-[#0B4F4A]/10 rounded-full mt-4 overflow-hidden">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-0 bottom-0 left-0 bg-[#0B4F4A] rounded-full"
            />
          </div>
        </div>

        {/* Horizontal Moving Ribbon of Steps */}
        <div className="relative w-full flex-1 flex items-center overflow-hidden my-4">
          <motion.div
            style={{ x: xTranslate }}
            className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-12 pl-[max(1.5rem,calc((100vw-1380px)/2+1rem))]"
          >
            {journeySteps.map((step, idx) => (
              <div
                key={step.step}
                className="w-[320px] sm:w-[380px] lg:w-[420px] flex-shrink-0 bg-white rounded-[28px] overflow-hidden p-6 sm:p-7 shadow-[0_16px_40px_-12px_rgba(11,79,74,0.12)] border border-[#0B4F4A]/8 flex flex-col justify-between group hover:border-[#C6A15B]/40 transition-colors"
                data-cursor="view"
              >
                {/* Step Top Image Showcase */}
                <div className="relative h-[200px] sm:h-[220px] w-full rounded-2xl overflow-hidden bg-[#202A28] mb-5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="420px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Overlaid Step Number & Phase Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#073A37] text-[11px] font-semibold tracking-wider uppercase">
                    Step {step.step}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10.5px] uppercase tracking-wider text-[#C6A15B] font-medium block">
                      {step.milestone}
                    </span>
                  </div>
                </div>

                {/* Step Details */}
                <div className="space-y-2.5 flex-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#C96F4F] font-semibold">
                    {step.phase}
                  </p>
                  <h3 className="text-[20px] sm:text-[22px] font-serif font-normal text-[#202A28] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#566965] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-4 border-t border-[#0B4F4A]/8 flex items-center justify-between text-[11.5px] text-[#0B4F4A] font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                    AIIMS Protocol Verified
                  </span>
                  <span className="text-[#8A9E9B]">Phase {idx + 1} of 7</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Scroll Hint */}
        <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex items-center justify-between text-[12px] text-[#566965]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0B4F4A] animate-pulse" />
              Continuous Vertical Scroll Powers Timeline Motion
            </span>
            <span>AlloRoots Clinical Journey</span>
          </div>
        </div>

      </div>
    </section>
  );
}
