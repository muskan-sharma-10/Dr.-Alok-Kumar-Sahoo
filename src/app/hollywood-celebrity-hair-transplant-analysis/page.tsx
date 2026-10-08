import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import NumbersSection from "@/components/NumbersSection";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Hollywood Celebrity Hair Transplant Analysis | AlloRoots",
  description: "Explore expert analysis of Hollywood celebrity hair transplants and techniques behind their natural transformations.",
};

export default function HollywoodAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <section className="pt-36 pb-20 bg-[#042926] text-white relative border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073A37] border border-[#C9A45C]/30 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
            <Star className="w-4 h-4 text-[#C9A45C]" />
            <span>Expert Analysis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal">
            Hollywood Celebrity Hair Transplant Analysis
          </h1>

          <p className="text-base sm:text-lg text-[#DFCA95] max-w-2xl mx-auto leading-relaxed">
            Unveiling the techniques and artistry behind the most successful and natural-looking celebrity hair restorations.
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-[#042926] font-normal">
                  The Art of the Undetectable Hairline
                </h2>
                <p className="text-base text-[#5A7370] leading-relaxed">
                  In Hollywood, maintaining a youthful and vibrant appearance is often part of the job description. Hair loss affects leading men just as it does anyone else, but the solutions they choose are defined by one absolute requirement: they must look 100% natural on a 4K camera.
                </p>
                <p className="text-base text-[#5A7370] leading-relaxed">
                  Our AIIMS surgeons analyze what makes a celebrity hair transplant successful, from the irregularity of the macro-hairline to the precision of single-hair follicular units placed at the absolute correct angle and direction.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-[#FAF7F1] p-6 rounded-2xl border border-[#0B4F4A]/10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0B4F4A] flex items-center justify-center">
                    <span className="text-[#C9A45C] font-serif text-xl">1</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#042926]">Density vs. Illusion</h3>
                  <p className="text-sm text-[#5A7370] leading-relaxed">
                    Celebrity procedures often focus on the illusion of density by strategically placing grafts where light hits the scalp most directly.
                  </p>
                </div>

                <div className="bg-[#FAF7F1] p-6 rounded-2xl border border-[#0B4F4A]/10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0B4F4A] flex items-center justify-center">
                    <span className="text-[#C9A45C] font-serif text-xl">2</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#042926]">Micro-Irregularity</h3>
                  <p className="text-sm text-[#5A7370] leading-relaxed">
                    A straight hairline looks artificial. The best Hollywood results feature calculated micro-irregularities that mimic nature.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 pt-6">
                <h2 className="text-3xl font-serif text-[#042926] font-normal">
                  Achieving the "Hollywood" Result at AlloRoots
                </h2>
                <p className="text-base text-[#5A7370] leading-relaxed">
                  The secret to celebrity-grade hair transplants isn't magic—it's meticulous surgical protocol. At AlloRoots, we apply the exact same high-end standards: 100% doctor-led extraction, bio-enhanced ATP graft preservation, and artistic slit creation. You don't need a Hollywood budget to achieve a Hollywood result.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-[#073A37] border border-[#C9A45C]/30 shadow-xl">
                <Image
                  src={siteImages.hero.aboutHero}
                  alt="AlloRoots Surgical Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-[#0B4F4A] p-6 rounded-2xl text-white space-y-4">
                <h3 className="font-serif text-xl text-[#C9A45C]">The AlloRoots Standard</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#DFCA95]">AIIMS Doctors Only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#DFCA95]">High Density Slit Creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#DFCA95]">Zero-Touch Implantation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NumbersSection />

      <Footer />
    </main>
  );
}
