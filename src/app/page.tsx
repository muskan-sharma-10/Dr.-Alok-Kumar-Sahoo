"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import NewsSection from "@/components/NewsSection";
import ServicesSection from "@/components/ServicesSection";
import SurgeonSection from "@/components/SurgeonSection";
import ExpertTeamSection from "@/components/ExpertTeamSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NumbersSection from "@/components/NumbersSection";
import BeforeAfterSliderSection from "@/components/BeforeAfterSliderSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import PatientJourney from "@/components/PatientJourney";
import HairRestorationStory from "@/components/HairRestorationStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClinicsSection from "@/components/ClinicsSection";
import CostCalculator from "@/components/CostCalculator";
import FaqSection from "@/components/FaqSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import { useConsultation } from "@/context/ConsultationContext";

export default function Home() {
  const { openConsultation } = useConsultation();

  return (
    <main className="min-h-screen bg-[#FBF8F3] text-[#202A28] selection:bg-[#C6A15B] selection:text-white">
      {/* 1. Refined Sticky Navbar with Trust Marquee */}
      <Navbar onOpenConsultation={openConsultation} />

      {/* 2. Cinematic Editorial Hero (Warm Ivory + Dr. Alok Portrait + Live Badges) */}
      <Hero onOpenConsultation={openConsultation} />

      {/* 3. Trust Strip (Google 5.0 Star Pillar Bar) */}
      <TrustStrip />

      {/* 4. Our Services / Interactive Services Explorer (Catalog & YouTube Hub) */}
      <ServicesSection onOpenConsultation={openConsultation} />

      {/* 5. Chief Surgeon Editorial Feature (Dr. Alok Parallax + AIIMS Floating Badges) */}
      <SurgeonSection onOpenConsultation={openConsultation} />

      {/* 6. Meet Our Expert Team of Doctors (AIIMS Faculty Panel) */}
      <ExpertTeamSection onOpenConsultation={openConsultation} />

      {/* 7. Why Choose Us (The AlloRoots Difference: 6 Clinical Pillars) */}
      <WhyChooseUs />

      {/* 8. Alloroots in the News (Continuous Media Coverage Marquee) */}
      <NewsSection />

      {/* 9. Specialized Hair Restorations (Beard, Eyebrow, Female HT, Body Hair) */}
      <SpecialitiesSection onOpenConsultation={openConsultation} />

      {/* 10. Numbers That Matter (3,000+ Surgeries, 99.4% Survival) */}
      <NumbersSection />

      {/* 11. Draggable Before / After Comparison Slider (COMPARE Real Cases) */}
      <BeforeAfterSliderSection onOpenConsultation={openConsultation} />

      {/* 12. Staggered Visual Case-Study Gallery (Detail Modal) */}
      <BeforeAfterGallery onOpenConsultation={openConsultation} />

      {/* 13. Patient Journey Timeline (Microscopic Scalp Mapping to Lifetime Growth) */}
      <PatientJourney />

      {/* 14. Cinematic Video Documentary Area (Clinical Film) */}
      <HairRestorationStory onOpenConsultation={openConsultation} />

      {/* 15. Client Testimonials & Google Verified Reviews */}
      <TestimonialsSection />

      {/* 16. Our Clinics (Delhi, Bhubaneswar, Chennai, Uttarakhand) */}
      <ClinicsSection onOpenConsultation={openConsultation} />

      {/* 17. Cost & 0% EMI Calculator (Norwood Stage Graft Estimator) */}
      <CostCalculator onOpenConsultation={openConsultation} />

      {/* 18. Frequently Asked Questions (FAQ) */}
      <FaqSection />

      {/* 19. Consultation CTA (Deep Teal & Champagne Accent Conversion Bar) */}
      <ConsultationCTA onOpenConsultation={openConsultation} />

      {/* 20. Contact & Appointment Booking Form */}
      <ContactFormSection />

      {/* 21. Editorial Footer */}
      <Footer onOpenConsultation={openConsultation} />

      {/* Sticky Mobile Floating Action Bar */}
      <StickyMobileBar onOpenConsultation={openConsultation} />
    </main>
  );
}
