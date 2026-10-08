"use client";

import { motion } from "framer-motion";
import { Star, Award, ShieldCheck, Stethoscope, Sparkles, TrendingUp } from "lucide-react";

const trustPillars = [
  { icon: Award, label: "AIIMS Delhi Alumnus", sub: "Team of World's Renowned Surgeons" },
  { icon: ShieldCheck, label: "Realtime Bio Enhanced FUE", sub: "Proprietary Protocol" },
  { icon: Sparkles, label: "Natural Hair Line Design", sub: "Artistic Single Follicle Placement" },
  { icon: Stethoscope, label: "Evidence Based Approach", sub: "Clinical Excellence" },
  { icon: TrendingUp, label: "Holistic Hair Care", sub: "Complete Restoration Spectrum" },
  { icon: Sparkles, label: "0% EMI Option Available", sub: "Transparent Financing" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-5 bg-white border-y border-[#0B4F4A]/6">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
          {/* Google Badge */}
          <div className="flex items-center gap-3 flex-shrink-0 pr-6 border-r border-[#0B4F4A]/8">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#C9A45C] fill-[#C9A45C]" />
              ))}
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#1E2E2C] leading-tight">5.0 / 5.0</p>
              <p className="text-[10.5px] text-[#5A7370]">163+ Google Reviews</p>
            </div>
          </div>

          {/* Trust Pillars */}
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B4F4A]/5 flex items-center justify-center">
                <pillar.icon className="w-4 h-4 text-[#0B4F4A]" />
              </div>
              <div>
                <p className="text-[12.5px] font-semibold text-[#1E2E2C] leading-tight whitespace-nowrap">{pillar.label}</p>
                <p className="text-[10px] text-[#8A9E9B] whitespace-nowrap">{pillar.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
