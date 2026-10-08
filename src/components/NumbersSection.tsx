"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "@/components/motion/Counter";
import { Award, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function NumbersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const subtleParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-36 bg-[#FBF8F3] overflow-hidden border-y border-[#0B4F4A]/8"
      id="numbers"
    >
      {/* Background typographic watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[280px] sm:text-[360px] lg:text-[460px] font-serif font-light text-[#0B4F4A] leading-none">
          3000+
        </span>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Eyebrow */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
            A Testament to Excellence in Hair Restoration
          </span>
          <h2 className="text-[38px] sm:text-[50px] lg:text-[56px] font-serif font-normal text-[#202A28] leading-[1.08]">
            Numbers Matter
          </h2>
          <p className="mt-3 text-[16px] text-[#566965] font-light leading-relaxed">
            A testament to excellence in hair restoration performed by AIIMS New Delhi dermatologists.
          </p>
        </div>

        {/* Editorial Layout: Hero Number + Flowing Typographic Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">

          {/* Left Column: Massive Editorial Hero Stat (6 cols) */}
          <motion.div
            style={{ y: subtleParallax }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4 pb-4 lg:border-r border-[#0B4F4A]/10 lg:pr-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/40 text-[#0B4F4A] text-[11px] font-medium uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Pan-India Clinical Track Record</span>
            </div>

            {/* Giant 110px Light Serif Number */}
            <div className="text-[76px] sm:text-[100px] lg:text-[120px] font-serif font-normal text-[#0B4F4A] leading-[0.95] tracking-tight">
              <Counter to={3000} suffix="+" duration={2.4} />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-[26px] sm:text-[30px] font-serif font-normal text-[#202A28] leading-tight">
                Hair Restorations Done
              </h3>
              <p className="text-[15.5px] text-[#566965] font-normal leading-relaxed max-w-lg">
                Over 3000+ successful hair transplant surgeries all over India &amp; for International clients with proven graft viability.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Flowing Typographic Metrics (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">

            {/* Metric 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-1.5 border-b sm:border-b-0 pb-6 sm:pb-0 border-[#0B4F4A]/8"
            >
              <div className="text-[44px] sm:text-[52px] font-serif font-normal text-[#C96F4F] leading-none">
                <Counter to={99.4} suffix="%" decimals={1} duration={2.2} />
              </div>
              <h4 className="text-[18px] font-serif font-normal text-[#202A28] pt-1">
                Graft Viability Rate
              </h4>
              <p className="text-[13px] text-[#566965] font-light leading-snug">
                Enriched in continuous ATP &amp; growth factor nutrient bath immediately upon extraction.
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-1.5 border-b sm:border-b-0 pb-6 sm:pb-0 border-[#0B4F4A]/8"
            >
              <div className="text-[44px] sm:text-[52px] font-serif font-normal text-[#0B4F4A] leading-none">
                <Counter to={10} suffix="+ Yrs" duration={2.0} />
              </div>
              <h4 className="text-[18px] font-serif font-normal text-[#202A28] pt-1">
                Dedicated AIIMS Experience
              </h4>
              <p className="text-[13px] text-[#566965] font-light leading-snug">
                Led by Ex-Senior Resident &amp; MD Dermatologists from AIIMS New Delhi.
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-1.5"
            >
              <div className="text-[44px] sm:text-[52px] font-serif font-normal text-[#C6A15B] leading-none">
                <Counter to={100} suffix="%" duration={1.8} />
              </div>
              <h4 className="text-[18px] font-serif font-normal text-[#202A28] pt-1">
                Doctor-Led Implantation
              </h4>
              <p className="text-[13px] text-[#566965] font-light leading-snug">
                Extraction, slit creation, and graft placement performed only by qualified surgeons.
              </p>
            </motion.div>

            {/* Metric 4 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="space-y-1.5"
            >
              <div className="text-[44px] sm:text-[52px] font-serif font-normal text-[#202A28] leading-none flex items-center">
                <Counter to={5.0} decimals={1} duration={2.0} />
                <span className="text-[#C6A15B] text-[36px] ml-1">★</span>
              </div>
              <h4 className="text-[18px] font-serif font-normal text-[#202A28] pt-1">
                160+ Google Reviews
              </h4>
              <p className="text-[13px] text-[#566965] font-light leading-snug">
                Perfect 5.0 score across Delhi, Bhubaneswar, Chennai &amp; Uttarakhand clinics.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
