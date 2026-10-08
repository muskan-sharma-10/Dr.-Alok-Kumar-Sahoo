import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/doctors";
import { siteImages } from "@/data/siteImages";
import { CheckCircle2, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Alok Kumar Sahoo | Chief Hair Transplant Surgeon (AIIMS Delhi)",
  description:
    "Dr. Alok Kumar Sahoo — M.D Dermatology from AIIMS New Delhi. Founder & Chief Surgeon at AlloRoots, pioneer of Realtime Bio-Enhanced FUE in India.",
};

export default function DrAlokProfilePage() {
  const drAlok = doctorsData.find((d) => d.id === "dr-alok") || doctorsData[0];

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      {/* Hero Profile */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#021A18] via-[#042926] to-[#073A37] text-white border-b border-[#C6A15B]/25">
        {/* Ambient Lighting Spheres */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-[#C6A15B]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-10 w-[450px] h-[350px] bg-[#D87852]/12 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60">
            <Link href="/" className="hover:text-[#E6C687] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/doctors" className="hover:text-[#E6C687] transition-colors">Doctors</Link>
            <span>/</span>
            <span className="text-[#E6C687] font-semibold">{drAlok.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Doctor Real Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B4F4A] to-[#042926] p-3 shadow-2xl border border-[#C6A15B]/35">
                <div className="relative h-[460px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-[#042926]">
                  <Image
                    src={siteImages.doctors.drAlok}
                    alt="Dr. Alok Kumar Sahoo - Chief Surgeon at AlloRoots"
                    fill
                    priority
                    className="object-cover object-top filter contrast-[1.05]"
                  />
                </div>
              </div>
            </div>

            {/* Right Profile Headline */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#E6C687] text-xs font-semibold uppercase tracking-wider border border-[#C6A15B]/35 backdrop-blur-md">
                  AIIMS New Delhi Alumnus • Chief Surgeon
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mt-4 font-normal">
                  {drAlok.name}
                </h1>

                <p className="text-lg text-[#DFCA95] font-semibold mt-2">
                  {drAlok.qualifications}
                </p>
                <p className="text-sm text-[#C9A45C] font-medium">
                  {drAlok.role} • {drAlok.experience}
                </p>
              </div>

              <p className="text-base text-white/85 leading-relaxed">
                {drAlok.bio}
              </p>

              {/* Achievements Badges */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-white font-medium pt-2">
                {drAlok.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-[#073A37] p-3.5 rounded-xl border border-[#C9A45C]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="px-8 py-4 rounded-xl bg-[#C9A45C] text-[#042926] font-semibold text-sm hover:bg-[#DFCA95] transition-all flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Alok</span>
                </Link>

                <a
                  href="tel:+919717503031"
                  className="px-7 py-4 rounded-xl bg-[#073A37] text-white font-medium text-sm hover:bg-[#0B4F4A] transition-all flex items-center gap-2 border border-[#C9A45C]/30"
                >
                  <Phone className="w-4 h-4 text-[#C9A45C]" />
                  <span>Call +91 9717503031</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations & Philosophy */}
      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
              MEDICAL EXPERTISE & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#042926] font-normal">
              Surgical Specializations & AIIMS Standard
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#FAF7F1] p-8 sm:p-10 rounded-3xl border border-[#0B4F4A]/10 space-y-5">
              <h3 className="font-serif text-2xl text-[#042926] font-normal">
                Specialized Surgical Procedures
              </h3>
              <ul className="space-y-3 text-sm text-[#5A7370]">
                {drAlok.specializations.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C] flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#042926]">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#042926] p-8 sm:p-10 rounded-3xl text-white border border-[#C9A45C]/30 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-white font-normal">
                  Doctor-Led Implantation Philosophy
                </h3>
                <p className="text-base text-[#DFCA95] leading-relaxed italic">
                  &ldquo;Hair transplantation is a micro-surgical procedure where root viability depends on gentle cellular handling and biological baths. At AlloRoots, I personally execute every micro-slit creation, graft extraction angle, and hairline single-graft placement. We never delegate surgical steps to technicians.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#C9A45C]/20 text-right">
                <span className="font-serif text-lg text-[#C9A45C] block">— Dr. Alok Kumar Sahoo</span>
                <span className="text-xs text-[#DFCA95]">Chief Hair Transplant Surgeon (AIIMS Delhi Alumnus)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
