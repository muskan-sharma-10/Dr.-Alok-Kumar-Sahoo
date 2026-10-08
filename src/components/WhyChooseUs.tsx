"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Sparkles, Heart, Stethoscope, Leaf, Zap, ArrowRight } from "lucide-react";
import { siteImages } from "@/data/siteImages";

const reasons = [
  {
    id: "safe",
    icon: ShieldCheck,
    title: "Totally Safe",
    tagline: "100% Clinical Safety Standards",
    desc: "Strict protocols are applied to all processes and at all levels to guarantee 100% safety. Procedures take place in dedicated, hospital-grade sterile surgical suites with continuous patient monitoring.",
    image: siteImages.hero.aboutExcellence,
    stat: "100%",
    statLabel: "Safety Compliance",
  },
  {
    id: "viability",
    icon: Sparkles,
    title: "Maximum Viability Guaranteed",
    tagline: "Active ATP & Growth Factor Baths",
    desc: "Grafts viability rate is above 90-99.4%, while the industry average is about 50%, as per independent studies. Follicles are never left to dry in saline; they thrive in active bio-solutions.",
    image: siteImages.results.case4,
    stat: "99.4%",
    statLabel: "Graft Survival Rate",
  },
  {
    id: "natural",
    icon: Heart,
    title: "Natural Result",
    tagline: "Single-Hair Micro-Slit Angulation",
    desc: "Full control of the depth, the direction, and the angle of placement ensures 100% natural result. Hairlines are feathered with single-hair grafts matching unique facial geometry.",
    image: siteImages.results.case1,
    stat: "100%",
    statLabel: "Natural Angulation",
  },
  {
    id: "doctors",
    icon: Stethoscope,
    title: "Only by Doctors",
    tagline: "AIIMS Certified Surgeons",
    desc: "The procedure from start to finish is performed directly by medical dermatologists, trained, qualified, and certified at AIIMS New Delhi. Critical extraction and slit-making are never outsourced to technicians.",
    image: siteImages.doctors.drAlok,
    stat: "100%",
    statLabel: "Doctor Performed",
  },
  {
    id: "growth",
    icon: Leaf,
    title: "Growth for Lifetime",
    tagline: "Permanent DHT-Resistant Follicles",
    desc: "Only healthy hair follicles, excluding hair in telogen phase, are chosen and implanted from the permanent donor zone. These follicles retain their genetic immunity to hair loss and grow for a lifetime.",
    image: siteImages.results.case14,
    stat: "Lifetime",
    statLabel: "Permanent Growth",
  },
  {
    id: "pain",
    icon: Zap,
    title: "Minimal Pain",
    tagline: "Ultra-Fine Precision Delivery",
    desc: "For extraction and placement, we utilize precision instruments, specialized Sapphire devices, and ultra-fine needles for administering localized ring-block anesthesia, ensuring high comfort throughout.",
    image: siteImages.hero.clinicThumb,
    stat: "5-7 Days",
    statLabel: "Micro-Healing Phase",
  },
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeReason = reasons[activeIdx];

  return (
    <section className="relative py-24 md:py-36 bg-[#073A37] text-white overflow-hidden" id="why-us">
      {/* Visual background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0B4F4A] rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C6A15B]/8 rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Top Header */}
        <div className="max-w-2xl mb-14 lg:mb-18">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C6A15B] block mb-2">
            The AlloRoots Difference
          </span>
          <h2 className="text-[38px] sm:text-[50px] lg:text-[56px] font-serif font-normal text-white leading-[1.08]">
            Different Reasons That Sets Us Apart from Others
          </h2>
          <p className="mt-4 text-[16px] text-white/70 font-light leading-relaxed">
            While standard clinics rely on technicians and saline baths, AlloRoots operates on AIIMS clinical rigor and proprietary bio-preservation.
          </p>
        </div>

        {/* Interactive Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Dynamic Visual Reveal Card (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReason.id}
                initial={{ opacity: 0, scale: 0.96, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -14 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[28px] overflow-hidden bg-[#042926] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
                data-cursor="view"
              >
                {/* Image Showcase */}
                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden">
                  <Image
                    src={activeReason.image}
                    alt={activeReason.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042926] via-[#042926]/40 to-transparent" />

                  {/* Overlaid Big Stat Badge */}
                  <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-[#073A37] rounded-2xl px-4 py-2.5 shadow-xl border border-white/40">
                    <span className="text-[22px] font-serif font-normal block leading-tight text-[#0B4F4A]">
                      {activeReason.stat}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#566965] font-semibold">
                      {activeReason.statLabel}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-[#C6A15B] font-medium mb-1">
                      {activeReason.tagline}
                    </p>
                    <h3 className="text-[24px] sm:text-[28px] font-serif font-normal text-white">
                      {activeReason.title}
                    </h3>
                    <p className="text-[13.5px] text-white/80 font-light mt-2 line-clamp-3 leading-relaxed">
                      {activeReason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive List (7 cols) */}
          <div className="lg:col-span-7 space-y-2.5 order-1 lg:order-2">
            {reasons.map((reason, idx) => {
              const isActive = activeIdx === idx;
              const Icon = reason.icon;

              return (
                <div
                  key={reason.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  data-cursor="cta"
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-white/10 border-[#C6A15B]/50 shadow-lg translate-x-2"
                      : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/15"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#C6A15B] text-[#073A37]"
                          : "bg-white/5 text-[#C6A15B]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className={`text-[17px] sm:text-[19px] font-serif font-normal transition-colors ${
                          isActive ? "text-[#C6A15B]" : "text-white"
                        }`}>
                          {reason.title}
                        </h4>
                        <span className="text-[11px] uppercase tracking-wider font-medium text-white/40">
                          0{idx + 1}
                        </span>
                      </div>

                      <p className={`text-[13px] sm:text-[14px] leading-relaxed transition-colors ${
                        isActive ? "text-white/90" : "text-white/60 line-clamp-1 sm:line-clamp-none"
                      }`}>
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
