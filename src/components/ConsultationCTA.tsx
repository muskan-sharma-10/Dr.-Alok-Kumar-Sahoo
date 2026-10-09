"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Calculator, Eye, ShieldCheck, Phone } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface ConsultationCTAProps {
  onOpenConsultation?: () => void;
}

export default function ConsultationCTA({ onOpenConsultation }: ConsultationCTAProps) {
  const scrollToCalculator = (e: React.MouseEvent) => {
    const calc = document.getElementById("calculator");
    if (calc) {
      e.preventDefault();
      calc.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-b from-[#021A18] via-[#042926] to-[#073A37] text-white border-t border-b border-[#C6A15B]/20">
      {/* Visual background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0B4F4A] rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#C6A15B]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-[#D87852]/10 rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="from-left" distance={60}>
          <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C6A15B]/30 mb-7 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-[12px] tracking-[0.16em] uppercase font-bold text-[#E6C687]">
              Doctor-Led AIIMS Hair Restoration
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="from-left" distance={70} delay={0.1}>
          <h2 className="text-[38px] sm:text-[50px] lg:text-[60px] font-serif font-normal text-white leading-[1.08] tracking-[-0.02em]">
            Ready to Redefine Your Look with <br className="hidden sm:block" />
            <span className="text-[#E6C687] italic font-serif">Permanent, Natural</span> Hair Restoration?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="from-right" distance={70} delay={0.15}>
          <p className="mt-6 text-[17px] sm:text-[18px] text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Book a confidential evaluation with Dr. Alok Sahoo and senior AIIMS dermatologists. Get your donor density mapped and receive a transparent, personalized restoration plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 mt-7 text-[13.5px] text-white/75">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-[#C6A15B]" />
              100% Doctor-Led Implantation
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-[#D87852]" />
              99.4% Root Survival Guarantee
            </span>
            <span>•</span>
            <span>0% EMI Available</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="from-right" distance={60} delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-4 sm:py-4.5 rounded-2xl bg-[#D87852] hover:bg-[#c46844] text-white font-bold text-[15.5px] transition-all duration-300 shadow-xl shadow-[#D87852]/30 hover:scale-[1.02] cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#calculator"
              onClick={scrollToCalculator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:py-4.5 rounded-2xl bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold text-[15px] backdrop-blur-md transition-all duration-300 hover:border-white/40 cursor-pointer"
            >
              <Calculator className="w-4.5 h-4.5 text-[#C6A15B]" />
              <span>Calculate Graft Cost</span>
            </a>

            <Link
              href="/results"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:py-4.5 rounded-2xl bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold text-[15px] backdrop-blur-md transition-all duration-300 hover:border-white/40 cursor-pointer"
            >
              <Eye className="w-4.5 h-4.5 text-[#C6A15B]" />
              <span>View 100+ Results</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
