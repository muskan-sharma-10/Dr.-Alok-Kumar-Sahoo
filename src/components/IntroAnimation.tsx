"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation() {
  const [stage, setStage] = useState<"intro" | "exit" | "done">("intro");
  const [showDivider, setShowDivider] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Only lock scroll while intro is playing
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setShowDivider(true), 400);
    const t2 = setTimeout(() => setShowSubtitle(true), 850);
    const t3 = setTimeout(() => setStage("exit"), 2300);
    const t4 = setTimeout(() => {
      setStage("done");
      document.body.style.overflow = "";
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setStage("done");
    document.body.style.overflow = "";
  };

  if (stage === "done") return null;

  const doctorName = "Alok Sahoo";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col justify-center items-center overflow-hidden bg-[#03211E] select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Ambient Center Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C6A15B]/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0B4F4A]/30 rounded-full blur-[90px]" />
        </div>

        {/* Cinematic Split Curtains on Exit */}
        {stage === "exit" && (
          <>
            <motion.div
              className="absolute top-0 left-0 right-0 h-[51%] bg-[#03211E] origin-top z-10"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[51%] bg-[#03211E] origin-bottom z-10"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            />
          </>
        )}

        {/* Top Corner Monogram Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20 flex items-center gap-2.5"
        >
          <div className="w-10 h-10 rounded-full border border-[#C6A15B]/40 flex items-center justify-center bg-[#C6A15B]/5 backdrop-blur-sm">
            <span className="font-serif text-[#C6A15B] font-bold text-sm tracking-wider">
              AR
            </span>
          </div>
          <span className="hidden sm:inline font-serif text-white/80 text-xs uppercase tracking-[0.2em]">
            AlloRoots
          </span>
        </motion.div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[11px] font-sans uppercase tracking-widest transition-all backdrop-blur-sm flex items-center gap-1.5"
        >
          <span>Skip</span>
          <span className="text-[10px]">✕</span>
        </button>

        {/* Main Center Animated Content */}
        <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-4xl mx-auto">
          {/* Prefix "Dr." */}
          <div className="mb-1 overflow-hidden">
            <motion.span
              className="block font-serif text-[#C6A15B] tracking-[0.25em] uppercase text-[clamp(1.2rem,2.8vw,1.9rem)] font-normal"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              Dr.
            </motion.span>
          </div>

          {/* Doctor Name - Staggered 3D Letters */}
          <div
            className="flex items-baseline justify-center overflow-visible"
            style={{ perspective: 700 }}
          >
            {doctorName.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className={
                  letter === " "
                    ? "inline-block w-[clamp(0.8rem,2vw,2.2rem)]"
                    : "inline-block font-serif text-white font-bold leading-none text-[clamp(2.6rem,7.5vw,6rem)] tracking-tight"
                }
                initial={{ opacity: 0, y: 55, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + 0.035 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Champagne Gold Gradient Divider Line */}
          <motion.div
            className="h-[1.5px] w-[clamp(140px,32vw,280px)] my-6 mx-auto origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C6A15B, #DFCA97, transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: showDivider ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle / Specialties */}
          <motion.p
            className="text-white/90 uppercase tracking-[0.16em] text-[clamp(0.82rem,1.8vw,1.05rem)] font-sans font-medium px-4 leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 14 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Advanced Hair Restoration · AIIMS New Delhi · Realtime Bio-Enhanced FUE
          </motion.p>

          {/* Tagline / Locations */}
          <motion.p
            className="text-[#C6A15B] tracking-[0.14em] uppercase text-[clamp(0.7rem,1.3vw,0.85rem)] font-sans font-medium mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtitle ? 0.95 : 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            AlloRoots Centers · New Delhi · Bhubaneswar · Chennai · Uttarakhand
          </motion.p>
        </div>

        {/* Bottom Smooth Progress Indicator Line */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2.5px] origin-left z-20"
          style={{
            background:
              "linear-gradient(90deg, #0B4F4A, #C6A15B, #DFCA97, #C6A15B)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.3, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
