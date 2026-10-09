"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ShieldCheck, Sparkles, Award } from "lucide-react";
import { siteImages } from "@/data/siteImages";

interface HairRestorationStoryProps {
  onOpenConsultation?: () => void;
}

export default function HairRestorationStory({ onOpenConsultation }: HairRestorationStoryProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-36 bg-white overflow-hidden border-b border-[#0B4F4A]/8" id="story">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C6A15B]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
                Cinematic Case Narrative
              </span>
              <h2 className="text-[38px] sm:text-[50px] lg:text-[56px] font-serif font-normal text-[#202A28] leading-[1.08]">
                Hair Restoration That Works
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-[16px] sm:text-[17px] text-[#566965] font-light leading-relaxed"
            >
              Experience the AlloRoots difference. Our team of expert AIIMS surgeons utilizes Realtime Bio-Enhanced FUE to restore your hairline and revitalize your self-esteem.
            </motion.p>
          </div>

          {/* Large Cinematic Video Canvas with PLAY cursor */}
          <div
            onClick={() => setIsVideoOpen(true)}
            data-cursor="play"
            className="group relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[32px] overflow-hidden bg-[#073A37] border border-[#0B4F4A]/10 shadow-[0_25px_60px_-15px_rgba(11,79,74,0.18)] cursor-pointer"
          >
            {/* Real AlloRoots Clinical Master Image with slow zoom */}
            <Image
              src={siteImages.hero.aboutHero}
              alt="AlloRoots Surgical Film — Realtime Bio-Enhanced FUE in Action"
              fill
              sizes="(max-width: 1280px) 100vw, 1380px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.04]"
            />

            {/* Gradient Overlays for Cinematic Mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:via-black/20 transition-colors duration-500" />

            {/* Center Cinematic Play Trigger */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Rotating Dashed Accent Ring */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#C6A15B]/40 group-hover:scale-110 transition-transform duration-500" />
                {/* Core Play Button */}
                <div className="absolute w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#0B4F4A] group-hover:bg-[#C96F4F] text-white flex items-center justify-center shadow-2xl transition-all duration-300">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
              <span className="text-white text-[13px] font-medium tracking-widest uppercase mt-4 opacity-90 group-hover:opacity-100 transition-opacity">
                Play Clinical Documentary
              </span>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C96F4F] animate-pulse" />
                <span className="text-[12px] uppercase tracking-wider font-medium text-white/90">
                  In-Depth Surgical Walkthrough • AIIMS Protocol
                </span>
              </div>
              <span className="text-[12px] text-white/70 font-light">
                Runtime: 3m 45s
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/_uxQwrsRhDA?autoplay=1"
                title="AlloRoots Surgical Hair Restoration Experience"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
