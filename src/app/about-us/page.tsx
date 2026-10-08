import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import NumbersSection from "@/components/NumbersSection";
import ExpertTeamSection from "@/components/ExpertTeamSection";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { siteImages } from "@/data/siteImages";
import PageHeaderBanner from "@/components/PageHeaderBanner";

export const metadata: Metadata = {
  title: "About Us | AlloRoots Hair Restoration Clinic (AIIMS Surgeons)",
  description:
    "Learn about AlloRoots — India's premier AIIMS doctor-led hair transplant clinic. Founded by Dr. Alok Kumar Sahoo, pioneers of Realtime Bio-Enhanced FUE.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="AIIMS New Delhi Surgical Excellence"
        badgeIcon={<Award className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="About AlloRoots"
        highlightText="Hair Restoration"
        description="Pioneering ethical, evidence-based hair transplant surgery in India under 100% direct AIIMS doctor leadership. Founded on the principle that extraction and slit-making must never be delegated to technicians."
        breadcrumbs={[{ label: "About Us" }]}
        primaryActionLabel="Book Doctor Consultation"
        primaryActionHref="/contact-us"
        statCardTitle="AIIMS Surgical Precision"
        statCardValue="3,000+"
        statCardSubtext="Successful doctor-led procedures with 99.4% root viability"
        bgImage={siteImages.hero.aboutHero}
      />

      <TrustStrip />

      {/* Core Philosophy Section with Real AlloRoots Asset */}
      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Real Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden bg-[#073A37] border border-[#C9A45C]/30 shadow-xl">
                <Image
                  src={siteImages.hero.aboutHero}
                  alt="AlloRoots AIIMS Surgical Facility and Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                  OUR MEDICAL LEGACY
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#042926] font-normal">
                  Founded on AIIMS Surgical Precision
                </h2>
              </div>

              <p className="text-base text-[#5A7370] leading-relaxed">
                AlloRoots was founded by <strong className="text-[#042926] font-semibold">Dr. Alok Kumar Sahoo</strong>, an alumnus of the prestigious <strong className="text-[#042926] font-semibold">All India Institute of Medical Sciences (AIIMS), New Delhi</strong>. Dissatisfied with commercial clinics that delegate critical slit-making and extraction to untrained technicians, Dr. Sahoo established AlloRoots on a single uncompromising principle: <em className="text-[#0B4F4A] font-semibold">100% Doctor-Led Surgery</em>.
              </p>

              <p className="text-base text-[#5A7370] leading-relaxed">
                At AlloRoots, every patient undergoes direct microscopic scalp evaluation by M.D. Dermatologists. From hairline artistic design to single-graft extraction and micro-slit depth control, AIIMS senior surgeons personally execute every surgical step.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#FAF7F1] p-5 rounded-2xl border border-[#0B4F4A]/10 space-y-1">
                  <div className="flex items-center gap-2 text-base font-serif text-[#042926]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C]" />
                    <span>Bio-Enhanced ATP Bath</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#5A7370] leading-relaxed">
                    Grafts preserved in active nutrient solutions achieving 99.4% survival rate.
                  </p>
                </div>

                <div className="bg-[#FAF7F1] p-5 rounded-2xl border border-[#0B4F4A]/10 space-y-1">
                  <div className="flex items-center gap-2 text-base font-serif text-[#042926]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C]" />
                    <span>Single-Graft Feathering</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#5A7370] leading-relaxed">
                    Soft, age-appropriate frontal transitions matching natural growth direction.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/dr-alok-kumar-sahoo"
                  className="px-7 py-3.5 rounded-xl bg-[#0B4F4A] text-white font-medium text-sm hover:bg-[#073A37] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Meet Lead Surgeon Dr. Alok</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                </Link>
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 rounded-xl border border-[#0B4F4A]/20 text-[#042926] font-medium text-sm hover:bg-[#FAF7F1] transition-all"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <ExpertTeamSection />

      {/* Numbers Section */}
      <NumbersSection />

      <Footer />
    </main>
  );
}
