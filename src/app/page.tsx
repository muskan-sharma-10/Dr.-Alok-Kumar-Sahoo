"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import NewsSection from "@/components/NewsSection";
import ServicesSection from "@/components/ServicesSection";
import SurgeonSection from "@/components/SurgeonSection";
import ExpertTeamSection from "@/components/ExpertTeamSection";
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
import ConsultationModal from "@/components/ConsultationModal";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <main className="min-h-screen bg-[#FBF8F3] text-[#202A28] selection:bg-[#C6A15B] selection:text-white">
      {/* 0. Minimal Luxury Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* 1. Refined Sticky Navbar with Trust Marquee */}
      <Navbar onOpenConsultation={openConsultation} />

      {/* 2. Cinematic Editorial Hero (Warm Ivory + Dr. Alok Portrait + Live Badges) */}
      <Hero onOpenConsultation={openConsultation} />

      {/* 3. Trust Strip (White + Google 5.0 Star Pillar Bar) */}
      <TrustStrip />

      {/* 4. As Featured In — Continuous Moving Media Marquee (White + Grayscale) */}
      <NewsSection />

      {/* 5. Interactive Services Explorer (Soft Sand + Vertical Selector + Large Image Preview) */}
      <ServicesSection onOpenConsultation={openConsultation} />

      {/* 6. Chief Surgeon Editorial Feature (White + Dr. Alok Parallax + AIIMS Floating Badges) */}
      <SurgeonSection onOpenConsultation={openConsultation} />

      {/* 7. AIIMS Expert Team Showcase (Featured Active Doctor + Carousel Selector) */}
      <ExpertTeamSection onOpenConsultation={openConsultation} />

      {/* 8. Why Choose Us (Deep Teal Accent Feature + Interactive 6-Pillar Explorer) */}
      <WhyChooseUs />

      {/* 9. Numbers That Matter (Warm Ivory + 120px Editorial Light Serif Typography Wall) */}
      <NumbersSection />

      {/* 10. Draggable Before / After Comparison Slider (COMPARE Cursor + Real Cases) */}
      <BeforeAfterSliderSection onOpenConsultation={openConsultation} />

      {/* 11. Staggered Visual Case-Study Gallery (VIEW RESULT Cursor + Detail Modal) */}
      <BeforeAfterGallery onOpenConsultation={openConsultation} />

      {/* 12. Patient Journey Timeline (Horizontal Scroll Driven by Vertical Scrolling) */}
      <PatientJourney />

      {/* 13. Cinematic Video Documentary Area (PLAY Cursor + HD Modal) */}
      <HairRestorationStory onOpenConsultation={openConsultation} />

      {/* 14. Editorial Patient Stories & Testimonials (Soft Peach + Horizontal Sliding Cards) */}
      <TestimonialsSection />

      {/* 15. Interactive Clinic Facility Selector (White + Delhi, Bhubaneswar, Chennai, Uttarakhand) */}
      <ClinicsSection onOpenConsultation={openConsultation} />

      {/* 16. Cost & 0% EMI Calculator (Norwood Stage Graft Estimator) */}
      <CostCalculator onOpenConsultation={openConsultation} />

      {/* 17. Editorial FAQ (Warm Ivory + 01/02 Animated Numbers + Expanding Answers) */}
      <FaqSection />

      {/* 18. Consultation CTA (Deep Teal & Champagne Accent Conversion Bar) */}
      <ConsultationCTA onOpenConsultation={openConsultation} />

      {/* 19. Contact & Appointment Booking Form */}
      <ContactFormSection />

      {/* 20. Editorial Footer */}
      <Footer onOpenConsultation={openConsultation} />

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />

      {/* Sticky Mobile Floating Action Bar */}
      <StickyMobileBar onOpenConsultation={openConsultation} />
    </main>
  );
}
