"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, UserCheck, Shield } from "lucide-react";

interface SpecialitiesSectionProps {
  onOpenConsultation?: () => void;
}

const specialities = [
  {
    title: "Beard Transplantation",
    badge: "Facial Aesthetics",
    desc: "Transform your look with our beard transplant service! Enhance facial aesthetics and confidence by achieving a fuller, well-defined beard with single and double follicular graft placement.",
    grafts: "1,200 – 2,500 Grafts",
    doctorNote: "Dr. Alok's natural jawline angulation",
    highlights: ["Sharp cheek & jaw definition", "Acute skin insertion angle", "Natural density matching"],
  },
  {
    title: "Female Hair Transplantation",
    badge: "Specialized Care",
    desc: "Hair loss affects individuals of all genders. Dr. Alok provides specialized treatments for female hair restoration, addressing concerns such as crown reconstruction, central partition restoration, and hairline lowering.",
    grafts: "1,500 – 3,000 Grafts",
    doctorNote: "Non-shave long hair protocol available",
    highlights: ["No scalp shaving required", "Ludwig scale crown restoration", "Soft feminine hairline contour"],
  },
  {
    title: "Eyebrow & Eyelash Restoration",
    badge: "Delicate Microsurgery",
    desc: "Single-follicle ultra-fine micro-implantation mimicking the natural eyebrow arch, curvature, and feathering direction for patients with sparse or scarred brows.",
    grafts: "300 – 800 Grafts",
    doctorNote: "Handcrafted single-hair micro-slits",
    highlights: ["Custom arch design", "Flat 10-15° angle placement", "Permanent natural regrowth"],
  },
  {
    title: "Body Hair Transplant (BHT)",
    badge: "Mega-Session Donor",
    desc: "Utilizing beard or chest donor hair as auxiliary grafts for high Norwood stage (Grade 5 to 7) restorations when scalp donor density is limited or previously exhausted.",
    grafts: "1,500 – 3,500 Grafts",
    doctorNote: "Pioneered by Dr. Alok Sahoo",
    highlights: ["Beard-to-scalp extraction", "Chest donor harvesting", "Zero linear scarring"],
  },
];

export default function SpecialitiesSection({ onOpenConsultation }: SpecialitiesSectionProps) {
  return (
    <section className="relative py-24 md:py-36 bg-[#FBF8F3] overflow-hidden border-b border-[#0B4F4A]/8" id="specialities">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C6A15B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-[#0B4F4A]/10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B4F4A]/10 shadow-sm mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D87852]" />
              <span className="text-[12px] uppercase tracking-[0.18em] font-bold text-[#073A37]">
                Restoration Surgeries For
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-serif font-normal text-[#1A2422] leading-[1.08] tracking-[-0.02em]">
              Complex Facial &amp; Body Restoration
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] text-[#566965] max-w-md font-light leading-relaxed"
          >
            With Dr. Alok&apos;s expertise, AlloRoots offers complex hair restoration procedures beyond standard scalp transplants, utilizing specialized microscopic instrumentation.
          </motion.p>
        </div>

        {/* 4 Cards Grid: left 2 from left, right 2 from right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {specialities.map((item, idx) => {
            const isLeft = idx < 2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-[32px] p-7 sm:p-8 border border-[#0B4F4A]/8 shadow-sm hover:shadow-2xl hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between"
              >
              <div className="space-y-4.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] font-bold text-[#0B4F4A] bg-[#F3EEE6] px-3.5 py-1.2 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-[13px] font-serif text-[#C96F4F]">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-[21px] sm:text-[23px] font-serif font-normal text-[#1A2422] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#D87852] font-medium mt-1">
                    {item.doctorNote}
                  </p>
                </div>

                <p className="text-[14.5px] text-[#566965] font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2.5 border-t border-[#0B4F4A]/6 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#1A2422]">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0B4F4A]/8 flex items-center justify-between">
                <div>
                  <span className="text-[10.5px] uppercase tracking-wider text-[#8A9E9B] font-bold block">Graft Count</span>
                  <span className="text-[14px] font-serif font-medium text-[#0B4F4A]">{item.grafts}</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1A2422] group-hover:text-[#D87852] transition-colors cursor-pointer"
                >
                  <span>Consult</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
