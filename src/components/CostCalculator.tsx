"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Info } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface CostCalculatorProps {
  onOpenConsultation?: () => void;
}

const norwoodStages = [
  { stage: "Stage 2", grafts: "1,500 – 2,000", low: 1500, high: 2000, desc: "Early frontal recession" },
  { stage: "Stage 3", grafts: "2,000 – 2,800", low: 2000, high: 2800, desc: "Deeper temple recession" },
  { stage: "Stage 3V", grafts: "2,500 – 3,200", low: 2500, high: 3200, desc: "Vertex thinning begins" },
  { stage: "Stage 4", grafts: "3,000 – 3,800", low: 3000, high: 3800, desc: "Significant frontal & crown" },
  { stage: "Stage 5", grafts: "3,500 – 4,500", low: 3500, high: 4500, desc: "Large bald area" },
  { stage: "Stage 6", grafts: "4,000 – 5,500", low: 4000, high: 5500, desc: "Extensive coverage needed" },
  { stage: "Stage 7", grafts: "5,000 – 6,000+", low: 5000, high: 6000, desc: "Maximum restoration" },
];

const costPerGraft = 35; /* ₹ per graft approximate */

export default function CostCalculator({ onOpenConsultation }: CostCalculatorProps) {
  const [selectedStage, setSelectedStage] = useState(2);
  const stage = norwoodStages[selectedStage];

  const costRange = useMemo(() => {
    const low = stage.low * costPerGraft;
    const high = stage.high * costPerGraft;
    return {
      low: (low / 1000).toFixed(0),
      high: (high / 1000).toFixed(0),
      emiLow: ((low / 12) / 1000).toFixed(1),
      emiHigh: ((high / 12) / 1000).toFixed(1),
    };
  }, [selectedStage]);

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden" id="calculator">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Info */}
          <ScrollReveal direction="from-left" distance={70} duration={0.85} className="lg:col-span-5">
            <p className="text-[12px] tracking-[0.18em] uppercase font-bold text-[#D87852] mb-3">Cost Transparency</p>
            <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-serif font-normal text-[#1E2E2C] leading-[1.08]">
              Hair Transplant Cost Calculator
            </h2>
            <p className="mt-4 text-[16px] sm:text-[17px] text-[#5A7370] leading-relaxed font-light">
              Get an instant estimate based on your Norwood stage. Final pricing is confirmed after an in-clinic consultation with our AIIMS doctors.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#0B4F4A]/5 border border-[#0B4F4A]/10">
              <div className="flex items-start gap-3.5">
                <Info className="w-5 h-5 text-[#0B4F4A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[15px] font-bold text-[#1E2E2C]">0% Interest EMI Available</p>
                  <p className="text-[13.5px] text-[#5A7370] mt-1.5 leading-relaxed font-light">
                    Flexible payment plans across 3, 6, 9, or 12 months with zero additional interest charges.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="group mt-6 sm:mt-7 inline-flex items-center gap-2 sm:gap-2.5 px-4.5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#0B4F4A] text-white font-semibold text-[13px] sm:text-[15px] hover:bg-[#073A37] transition-all duration-300 shadow-md sm:shadow-xl shadow-[#0B4F4A]/20 cursor-pointer hover:scale-[1.01]"
            >
              Get Exact Quote
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </ScrollReveal>

          {/* Right: Calculator */}
          <ScrollReveal direction="from-right" distance={70} duration={0.85} delay={0.1} className="lg:col-span-7">
            <div className="bg-[#FAF7F1] rounded-3xl p-7 sm:p-9 border border-[#0B4F4A]/8 shadow-sm">
              {/* Stage Header */}
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#D87852] flex items-center justify-center">
                  <Calculator className="w-5.5 h-5.5 text-white" />
                </div>
                <div>
                  <p className="text-[16px] font-bold text-[#1E2E2C]">Select Your Norwood Stage</p>
                  <p className="text-[13px] text-[#8A9E9B]">Select your stage below to calculate grafts &amp; EMI</p>
                </div>
              </div>

              {/* Stage Selector */}
              <div className="grid grid-cols-7 gap-2.5 mb-8">
                {norwoodStages.map((s, i) => (
                  <button
                    key={s.stage}
                    onClick={() => setSelectedStage(i)}
                    className={`py-3.5 rounded-xl text-center transition-all duration-300 cursor-pointer ${
                      selectedStage === i
                        ? "bg-[#0B4F4A] text-white shadow-lg shadow-[#0B4F4A]/20 scale-105"
                        : "bg-white text-[#1E2E2C] hover:bg-[#0B4F4A]/5 border border-[#0B4F4A]/8"
                    }`}
                  >
                    <p className="text-[13px] font-bold leading-tight">{s.stage.split(" ")[1]}</p>
                  </button>
                ))}
              </div>

              {/* Selected Stage Details */}
              <motion.div
                key={selectedStage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0B4F4A]/8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[20px] font-serif text-[#1E2E2C]">Norwood {stage.stage}</p>
                    <p className="text-[13.5px] text-[#8A9E9B] mt-0.5">{stage.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11.5px] text-[#8A9E9B] uppercase tracking-wider font-bold">Grafts Needed</p>
                    <p className="text-[20px] font-bold text-[#D87852]">{stage.grafts}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#0B4F4A]/8 my-5" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FAF7F1] rounded-2xl p-4.5 text-center">
                    <p className="text-[11.5px] uppercase tracking-wider text-[#8A9E9B] font-bold mb-1">Estimated Cost</p>
                    <p className="text-[26px] sm:text-[28px] font-serif text-[#0B4F4A]">
                      ₹{costRange.low}K – ₹{costRange.high}K
                    </p>
                  </div>
                  <div className="bg-[#FFF0E9] rounded-2xl p-4.5 text-center">
                    <p className="text-[11.5px] uppercase tracking-wider text-[#8A9E9B] font-bold mb-1">0% EMI / Month</p>
                    <p className="text-[26px] sm:text-[28px] font-serif text-[#D87852]">
                      ₹{costRange.emiLow}K – ₹{costRange.emiHigh}K
                    </p>
                  </div>
                </div>

                <p className="text-[12px] text-[#8A9E9B] mt-4 text-center leading-relaxed font-light">
                  *Estimates based on ₹{costPerGraft}/graft. Actual cost confirmed after clinical evaluation by our doctors.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
