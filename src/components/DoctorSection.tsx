"use client";

import Image from "next/image";
import { Award, GraduationCap, CheckCircle2, Star, ShieldCheck, HeartPulse } from "lucide-react";

interface DoctorSectionProps {
  onOpenConsultation: () => void;
}

export default function DoctorSection({ onOpenConsultation }: DoctorSectionProps) {
  return (
    <section id="doctors" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" /> AIIMS (Delhi) Qualified Experts
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Meet Your Lead Surgeon & <span className="gradient-text-gold">AIIMS Panel</span>
          </h2>
          <p className="text-slate-400 text-base">
            At Alloroots, we strictly guarantee that every slit-making, graft extraction, and hairline design is personally executed by M.D Surgeons from AIIMS New Delhi.
          </p>
        </div>

        {/* Doctor Main Profile Box */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Doctor Avatar / Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden glass-card border border-amber-500/30 p-2 shadow-xl">
                <div className="relative h-96 w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                  <Image
                    src="/images/hero-clinic.jpg"
                    alt="Dr. Alok Sahoo - Senior AIIMS Hair Transplant Surgeon"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3 border border-white/10 text-center">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                      AIIMS New Delhi Alumnus
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">Senior M.D Dermatologist & Trichologist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Doctor Bios */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                  Lead Surgeon & Founder
                </span>
                <h3 className="text-3xl font-semibold text-white mt-2">Dr. Alok Sahoo</h3>
                <p className="text-amber-400 font-semibold text-sm">
                  M.D. (Dermatology, Venereology & Leprology) — AIIMS, New Delhi
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Dr. Alok Sahoo is one of India's most respected hair transplant surgeons, having completed his post-graduation from prestigious <strong className="text-white">AIIMS New Delhi</strong>. He has pioneered Bio-Enhanced FUE techniques in India and has personally delivered over <strong className="text-emerald-400">5,000+ natural hairline reconstructions</strong> with a 99.4% graft survival rate.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>10+ Years Dedicated Hair Surgery</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>5,000+ Successful Procedures</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Doctor Implantation Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>International Research Publications</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl gradient-bg-gold text-slate-950 font-semibold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Book Consultation With Dr. Alok</span>
                </button>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Medical Credentials</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
