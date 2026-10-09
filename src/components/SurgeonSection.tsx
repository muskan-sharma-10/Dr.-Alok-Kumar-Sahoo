"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ArrowRight, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";
import { siteImages } from "@/data/siteImages";
import { doctorsData } from "@/data/doctors";

interface SurgeonSectionProps {
  onOpenConsultation?: () => void;
}

export default function SurgeonSection({ onOpenConsultation }: SurgeonSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chief = doctorsData.find((d) => d.isChiefSurgeon) || doctorsData[0];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves at different speed from text
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={containerRef}
      id="surgeon"
      className="relative py-28 md:py-40 bg-white overflow-hidden border-b border-[#0B4F4A]/6"
    >
      <div id="about" className="absolute -top-28 pointer-events-none" />
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#C6A15B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#0B4F4A]/3 blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Eyebrow Section */}
        <div className="mb-14 pb-8 border-b border-[#0B4F4A]/8">
          <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
            Chief Hair Transplant Surgeon
          </span>
          <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-serif font-normal text-[#202A28] leading-[1.08]">
            Meet Our Esteemed Surgeon
          </h2>
        </div>

        {/* Editorial Composition: Image & Overlapping Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Parallax Portrait with Floating Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              style={{ y: imageParallaxY }}
              className="relative mx-auto max-w-[440px] lg:max-w-none"
            >
              {/* Outer Editorial Frame */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#F3EEE6] border border-[#0B4F4A]/10 shadow-[0_24px_60px_-16px_rgba(11,79,74,0.14)]" data-cursor="view">
                <div className="relative h-[480px] sm:h-[560px] w-full">
                  <Image
                    src={chief.image}
                    alt={`${chief.name} — Chief Hair Transplant Surgeon`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073A37]/80 via-transparent to-transparent" />

                  {/* Overlaid Bottom Title */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[12px] uppercase tracking-[0.16em] text-[#C6A15B] font-medium">Founder &amp; Chief Surgeon</p>
                    <h3 className="text-[28px] font-serif font-normal text-white">{chief.name}</h3>
                    <p className="text-[13.5px] text-white/85 font-light mt-0.5">
                      MBBS, MD (Dermatology, AIIMS New Delhi)
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Credential Label 1: AIIMS */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -top-5 -left-5 bg-white shadow-xl rounded-2xl p-4 sm:p-5 border border-[#0B4F4A]/10 flex items-center gap-3.5 z-20"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B4F4A] text-[#C6A15B] flex items-center justify-center">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0B4F4A] leading-tight">AIIMS New Delhi</p>
                  <p className="text-[11.5px] text-[#566965]">Ex-Senior Resident &amp; MD</p>
                </div>
              </motion.div>

              {/* Floating Credential Label 2: 10+ Years */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -right-4 bg-white shadow-xl rounded-2xl p-4 sm:p-5 border border-[#C6A15B]/30 flex items-center gap-3.5 z-20"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F8EDE7] text-[#C96F4F] flex items-center justify-center">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#202A28] leading-tight">10+ Dedicated Years</p>
                  <p className="text-[11.5px] text-[#566965]">3,000+ Surgeries Performed</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Details & Doctor's Pledge (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: textParallaxY }}
            className="lg:col-span-7 space-y-8"
          >

            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0B4F4A]/6 text-[#0B4F4A] text-[12.5px] font-medium uppercase tracking-wider">
                Ex-Senior Resident, AIIMS Delhi
              </span>
              <h3 className="text-[34px] sm:text-[44px] font-serif font-normal text-[#202A28] leading-tight">
                Artistic Vision Combined with AIIMS Dermatological Mastery
              </h3>
            </div>

            {/* Quote block */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#FBF8F3] border-l-4 border-[#0B4F4A] text-[#202A28]">
              <p className="text-[17px] sm:text-[18.5px] font-serif italic leading-relaxed text-[#202A28]">
                &ldquo;Every hair follicle is a living organ. At AlloRoots, 100% of the critical procedure — microscopic graft extraction, custom micro-slit angulation, and root implantation — is personally executed by qualified medical doctors, never delegated to technicians.&rdquo;
              </p>
              <p className="text-[12.5px] uppercase tracking-wider text-[#C96F4F] font-semibold mt-4">
                — Dr. Alok Sahoo
              </p>
            </div>

            <p className="text-[16.5px] text-[#566965] font-light leading-relaxed">
              Dr. Alok combines manual skills with advanced technology, ensuring the best outcomes for his patients. His expertise includes eyebrow and eyelash transplants, along with beard and body hair transplant procedures. With Dr Alok&apos;s expertise we offer complex hair restoration procedures.
            </p>

            {/* Key Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {[
                "MD (Dermatology & Venereology) from AIIMS (New Delhi)",
                "Ex-Senior Resident, Department of Dermatology, AIIMS Delhi",
                "Over 3000+ successful hair transplant surgeries all over India & for International clients",
                "10+ years of dedicated experience",
                "Specialization in Body Hair Transplant (BHT)",
                "Eyebrow and eyelash transplants, beard and body hair restoration",
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-[#202A28] leading-snug">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>

            {/* Direct Doctor CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                data-cursor="cta"
                className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 sm:py-4.5 rounded-full bg-[#0B4F4A] text-white text-[15px] font-medium tracking-wide hover:bg-[#073A37] transition-all duration-300 shadow-xl shadow-[#0B4F4A]/20 cursor-pointer group hover:scale-[1.01]"
              >
                <span>Click to Book an Appointment with Dr. Alok Sahoo</span>
                <ArrowRight className="w-4.5 h-4.5 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
