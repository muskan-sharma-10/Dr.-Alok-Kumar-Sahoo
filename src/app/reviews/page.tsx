import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleTrustSection from "@/components/GoogleTrustSection";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import { ShieldCheck, Star } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "AlloRoots Reviews & Patient Feedback | 5.0 Google Rating",
  description:
    "Read 163+ verified 5.0-star Google reviews and authentic patient experiences from AlloRoots Hair Transplant Clinic in Delhi, Bhubaneswar, Chennai & Uttarakhand.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="163+ Google Verified 5.0★ Reviews"
        badgeIcon={<Star className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />}
        title="AlloRoots Reviews &"
        highlightText="Patient Stories"
        description="Authentic, unedited clinical feedback from real patients across Delhi, Bhubaneswar, Chennai, and Uttarakhand who experienced permanent hair restoration under Dr. Alok Kumar Sahoo and the AIIMS surgical panel."
        breadcrumbs={[{ label: "Patient Reviews" }]}
        primaryActionLabel="Read Verified Stories"
        primaryActionHref="#google-reviews"
        statCardTitle="Google Rating Excellence"
        statCardValue="5.0 ★"
        statCardSubtext="Over 163+ five-star verified reviews across all clinical locations"
        bgImage={siteImages.hero.clinicThumb}
      />

      <GoogleTrustSection />

      <TrustStrip />

      <TestimonialsSection />

      <ConsultationCTA />

      <Footer />
    </main>
  );
}
