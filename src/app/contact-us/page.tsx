import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import ClinicsSection from "@/components/ClinicsSection";
import { Phone, Mail, MapPin, Award, Calendar } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Contact Us & Book Consultation | AlloRoots Hair Clinic",
  description:
    "Contact AlloRoots Hair Restoration Clinic. Call +91 9717503031 or book a direct consultation with AIIMS doctors across Delhi, Bhubaneswar, Chennai & Uttarakhand.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="AIIMS Medical Support & Appointments"
        badgeIcon={<Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Contact AlloRoots &"
        highlightText="Book AIIMS Evaluation"
        description="Schedule a direct microscopic scalp evaluation with Dr. Alok Kumar Sahoo and senior surgeons. Visit our state-of-the-art hair restoration facilities in Delhi, Bhubaneswar, Chennai, or Uttarakhand."
        breadcrumbs={[{ label: "Contact Us" }]}
        primaryActionLabel="Call Directly"
        primaryActionHref="tel:+919717503031"
        statCardTitle="4 Clinic Centers in India"
        statCardValue="Delhi • Odisha"
        statCardSubtext="Chennai & Uttarakhand | Hospital-grade sterile surgical suites"
        bgImage={siteImages.clinics.delhi}
      />

      {/* Contact Quick Strip */}
      <section className="py-12 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-[#FAF7F1] p-7 rounded-2xl border border-[#0B4F4A]/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B4F4A] text-[#C9A45C] flex items-center justify-center mx-auto shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#042926] uppercase tracking-wider">Phone & WhatsApp</h3>
              <a href="tel:+919717503031" className="text-lg font-serif text-[#042926] hover:text-[#C9A45C] block">
                +91 9717503031
              </a>
              <p className="text-xs text-[#5A7370]">Mon - Sun: 09:30 AM - 07:30 PM IST</p>
            </div>

            <div className="bg-[#FAF7F1] p-7 rounded-2xl border border-[#0B4F4A]/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B4F4A] text-[#C9A45C] flex items-center justify-center mx-auto shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#042926] uppercase tracking-wider">Email Inquiry</h3>
              <a href="mailto:info@alloroots.com" className="text-lg font-serif text-[#042926] hover:text-[#C9A45C] block">
                info@alloroots.com
              </a>
              <p className="text-xs text-[#5A7370]">Medical queries answered within 24h</p>
            </div>

            <div className="bg-[#FAF7F1] p-7 rounded-2xl border border-[#0B4F4A]/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#0B4F4A] text-[#C9A45C] flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#042926] uppercase tracking-wider">Clinic Locations</h3>
              <p className="text-sm font-semibold text-[#042926]">
                Delhi • Bhubaneswar • Chennai • Uttarakhand
              </p>
              <p className="text-xs text-[#5A7370]">Sterile Surgical Operating Suites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <ContactFormSection />

      {/* Clinic Locations Details */}
      <ClinicsSection />

      <Footer />
    </main>
  );
}
