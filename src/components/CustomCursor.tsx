"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight, Play, Eye, SlidersHorizontal } from "lucide-react";

export type CursorType = "default" | "view" | "play" | "compare" | "cta" | "drag" | "hidden";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid, premium following
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerMode = () => {
      setIsDesktop(mediaQuery.matches);
      if (mediaQuery.matches) {
        document.body.classList.add("has-custom-cursor");
      } else {
        document.body.classList.remove("has-custom-cursor");
      }
    };

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check cursor attribute on hovered element or its parents
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const type = target.getAttribute("data-cursor") as CursorType;
        setCursorType(type || "cta");
      } else {
        const isClickable = (e.target as HTMLElement)?.closest("button, a, input, select, textarea");
        if (isClickable) {
          setCursorType("cta");
        } else {
          setCursorType("default");
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      mediaQuery.removeEventListener("change", updatePointerMode);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Follower Badge / Bubble */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorType === "default" ? 1 : cursorType === "cta" ? 1.3 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center pointer-events-none"
      >
        {cursorType === "default" && (
          <div className="relative flex items-center justify-center">
            {/* Minimal Outer Ring */}
            <div className="w-8 h-8 rounded-full border border-[#0B4F4A]/30 bg-[#0B4F4A]/5 backdrop-blur-[2px]" />
            {/* Center Core Dot */}
            <div className="absolute w-2 h-2 rounded-full bg-[#0B4F4A]" />
          </div>
        )}

        {cursorType === "view" && (
          <div className="px-4 py-2 rounded-full bg-[#073A37] text-white shadow-xl flex items-center gap-1.5 border border-[#C6A15B]/40 backdrop-blur-md">
            <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase font-sans">VIEW</span>
          </div>
        )}

        {cursorType === "play" && (
          <div className="px-4 py-2 rounded-full bg-[#073A37] text-white shadow-xl flex items-center gap-1.5 border border-[#C6A15B]/50 backdrop-blur-md">
            <Play className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase font-sans">PLAY</span>
          </div>
        )}

        {cursorType === "compare" && (
          <div className="px-4 py-2 rounded-full bg-[#0B4F4A] text-white shadow-xl flex items-center gap-2 border border-white/20 backdrop-blur-md">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase font-sans">COMPARE</span>
          </div>
        )}

        {cursorType === "drag" && (
          <div className="px-3.5 py-1.5 rounded-full bg-[#202A28] text-white shadow-xl flex items-center gap-1.5 border border-white/15">
            <span className="text-[10.5px] font-medium tracking-[0.12em] uppercase">DRAG</span>
          </div>
        )}

        {cursorType === "cta" && (
          <div className="w-9 h-9 rounded-full bg-[#C96F4F] text-white shadow-lg flex items-center justify-center border border-white/30">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
