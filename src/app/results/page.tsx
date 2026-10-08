import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import { Sparkles, Eye } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Hair Transplant Results | Before & After | AlloRoots Clinic",
  description:
    "Explore verified patient before and after hair transplant results achieved by Dr. Alok Kumar Sahoo and AIIMS surgeons at AlloRoots using Realtime Bio-Enhanced FUE.",
};

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="Verified Patient Outcome Repository"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Hair Transplant Results at"
        highlightText="AlloRoots Clinics"
        description="Natural-looking, high-density results backed by AIIMS surgical protocols. Explore unedited photographic transformations covering hairline design, crown vertex swirls, beard implants, and failed transplant corrective repairs."
        breadcrumbs={[{ label: "Patient Results" }]}
        primaryActionLabel="Book Free Assessment"
        primaryActionHref="/contact-us"
        statCardTitle="Documented Transformations"
        statCardValue="3,000+"
        statCardSubtext="High-density permanent natural results across Norwood stages 2 to 7"
        bgImage={siteImages.results.case4}
      />

      <TrustStrip />

      {/* Full Real Results Gallery */}
      <BeforeAfterGallery />

      {/* Conversion CTA */}
      <ConsultationCTA />

      <Footer />
    </main>
  );
}
