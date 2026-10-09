"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  DollarSign,
  Building2,
  Calendar,
  HelpCircle,
  MessageCircle,
  Phone,
  FileText,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Compass,
  Check,
  X,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import { siteImages } from "@/data/siteImages";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import TrustStrip from "@/components/TrustStrip";
import { useConsultation } from "@/context/ConsultationContext";

type CurrencyKey = "USD" | "GBP" | "EUR" | "AUD" | "CAD" | "AED";

interface CurrencyConfig {
  code: CurrencyKey;
  symbol: string;
  name: string;
  rate: number;
}

const currencies: Record<CurrencyKey, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", rate: 1.0 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rate: 0.8 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.54 },
  CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar", rate: 1.37 },
  AED: { code: "AED", symbol: "AED ", name: "UAE Dirham", rate: 3.67 },
};

interface PackagePlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  baseUsdPrice: number;
  grafts: string;
  duration: string;
  technique: string;
  surgeon: string;
  idealFor: string;
  highlights: string[];
}

const packages: PackagePlan[] = [
  {
    id: "starter",
    name: "STARTER PACKAGE",
    baseUsdPrice: 2199,
    grafts: "1,500 ~ 2,500 Grafts",
    duration: "6–8 Hours (Single Day)",
    technique: "Advanced Realtime Bio-Enhanced FUE",
    surgeon: "AIIMS MD Specialist (10+ Years Exp)",
    idealFor: "Norwood Grade 2–3 hairline advancement, temporal peak correction & early thinning",
    highlights: [
      "100% Procedure by Master Surgeon (No Technicians)",
      "1 Free Growth Concentrate Therapy (GFC) worth $200",
      "7-Day Patient Post-Op Kit (Shampoo, DHT Blocker, Meds)",
      "Post-Op Clinical Head-wash & Bandage Removal",
      "Airport Pick-up & Drop Chauffeur Service",
      "Hotel Booking Assistance at Corporate Rates",
      "Complimentary India Tourism Itinerary Guidance",
      "12 Months Virtual Teleconsultation Follow-up",
    ],
  },
  {
    id: "advanced",
    name: "ADVANCED PACKAGE",
    badge: "MOST POPULAR • BEST VALUE",
    isPopular: true,
    baseUsdPrice: 2799,
    grafts: "2,500 ~ 3,400 Grafts",
    duration: "8–12 Hours (Single Day Extended)",
    technique: "Advanced Realtime Bio-Enhanced FUE",
    surgeon: "AIIMS MD Specialist (10+ Years Exp)",
    idealFor: "Norwood Grade 3–4 frontal hairline reconstruction + high-density mid-scalp coverage",
    highlights: [
      "High-Density Artistic Hairline Feathering",
      "100% Doctor-Led Micro-Slits & Implantation",
      "1 Free Growth Concentrate Therapy (GFC) worth $200",
      "7-Day Complete Post-Op Medical & Shampoo Kit",
      "Clinical Head-wash, Scalp Conditioning & Checkup",
      "Dedicated 24/7 Personal Patient Coordinator",
      "VIP Airport Chauffeur Transfers (Round Trip)",
      "4-Star / 5-Star Hotel Booking at Discounted Rates",
      "Custom Delhi Heritage & Taj Mahal Day Tour Advice",
      "12 Months Scheduled Digital Progress Monitoring",
    ],
  },
  {
    id: "professional",
    name: "PROFESSIONAL PACKAGE",
    baseUsdPrice: 3799,
    grafts: "3,400 ~ 4,500 Grafts",
    duration: "2 Days Surgical Suite Session",
    technique: "Advanced Realtime Bio-Enhanced FUE",
    surgeon: "Senior AIIMS MD Specialist (10+ Years Exp)",
    idealFor: "Norwood Grade 5–6 extensive restoration: hairline, frontal zone & crown vortex",
    highlights: [
      "Multi-Zone Precision Sculpting (Hairline + Crown)",
      "2 Days Private Dedicated Surgical Suite",
      "Master Surgeon End-to-End Execution",
      "1 Free Growth Concentrate Therapy (GFC) worth $200",
      "Complete 7-Day Medicated Post-Op Care Suite",
      "Two Clinical Washes & Professional Dressing Change",
      "VIP Airport Pickup & Drop Chauffeur",
      "Luxury Hotel Concierge & Corporate Tariff Access",
      "Priority WhatsApp Hotline with Operating Surgeon",
      "Lifelong Follicular Growth Warranty Card",
    ],
  },
  {
    id: "elite",
    name: "ELITE MEGA PACKAGE",
    badge: "MAXIMUM COVERAGE • GIGA SESSION",
    baseUsdPrice: 4199,
    grafts: "4,500+ Grafts Onwards",
    duration: "2 Days Comprehensive Giga-Session",
    technique: "Bio-Enhanced FUE + Beard Donor Integration",
    surgeon: "Chief AIIMS Master Surgeon (Dr. Alok Kumar Sahoo Team)",
    idealFor: "Norwood Grade 6–7 severe baldness requiring maximum cosmetic coverage & body hair donor",
    highlights: [
      "Unlimited Strategic Graft Extraction (Scalp + Beard)",
      "Senior AIIMS Faculty Surgeon Personally Operates",
      "Active ATP Preservation for 99.4% Graft Survival",
      "1 Free Growth Concentrate Therapy (GFC) worth $200",
      "Premium Extended Post-Op Care Kit (14 Days Meds)",
      "In-Clinic Post-Op Scalp Cleansing & Laser Light Session",
      "VIP Airport Concierge with Private Executive Vehicle",
      "5-Star Hotel Booking Assistance with Free Breakfasts",
      "Complimentary Day Trip Assistance to Taj Mahal (Agra)",
      "Lifelong Physician Support & Direct Surgeon WhatsApp",
    ],
  },
];

const planningPhases = [
  {
    id: "before-arrival",
    number: "01",
    tabTitle: "Before Arrival",
    subtitle: "Virtual Assessment & Travel Preparation",
    desc: "Your journey starts from the comfort of your home. We evaluate your scalp, verify donor safety, and handle all your medical travel logistics.",
    points: [
      {
        title: "Unique Alopecia Assessment (UDSA)",
        detail:
          "High-definition video consultation with our AIIMS specialist. We analyze multi-angle scalp photographs to accurately calculate exact graft count and donor reserves.",
      },
      {
        title: "Pre-Operative Medical Checklist",
        detail:
          "We provide a comprehensive list of routine pre-op blood tests you can complete at your local neighborhood diagnostic lab before flying.",
      },
      {
        title: "Indian Medical Visa (M-Visa) Support",
        detail:
          "Receive an official clinic visa invitation letter within 24 hours of confirmation for hassle-free, expedited Indian e-Medical Visa approval.",
      },
      {
        title: "Accommodation & Travel Logistics",
        detail:
          "Our concierge assists with 4/5-star partner hotel bookings (Aerocity / South Delhi) at privileged corporate rates. We recommend reaching India 1–2 days prior for rest.",
      },
    ],
  },
  {
    id: "after-arrival",
    number: "02",
    tabTitle: "After Arrival",
    subtitle: "In-Person Clinic Mapping & Consensus",
    desc: "A day before surgery, visit our flagship clinic for physical scalp dermatoscopy, blood report review, and 3D artistic hairline design.",
    points: [
      {
        title: "Live High-Resolution Digital Dermatoscopy",
        detail:
          "Microscopic examination of hair caliber, density per cm², follicular grouping, and skin elasticity under high magnification.",
      },
      {
        title: "Custom 3D Artistic Hairline Design",
        detail:
          "The surgeon personally sketches your frontal hairline matching your facial bone structure, temple angles, and lifetime age progression.",
      },
      {
        title: "Total Care Consultant Briefing",
        detail:
          "Thorough review of pre-op protocols, anesthesia sensitivity check, and transparent treatment plan agreement. Zero hidden surprises.",
      },
      {
        title: "Pre-Surgery Rest & Preparation",
        detail:
          "Clear guidance on comfortable sleep, diet, and button-up shirts for surgery day so you feel completely calm and prepared.",
      },
    ],
  },
  {
    id: "procedure-day",
    number: "03",
    tabTitle: "Procedure Day",
    subtitle: "Pain-Free Precision & Active Graft Safety",
    desc: "Experience pain-free Sapphire Micro-FUE led entirely by AIIMS surgeons in a sterile, NABH/JCI-grade surgical theater.",
    points: [
      {
        title: "Zero-Pain Local Ring-Block Anesthesia",
        detail:
          "Advanced micro-cannula numbing technique ensures you don't even feel the pinch of the syringe. Relax, watch movies, or listen to music.",
      },
      {
        title: "Sapphire Micro-Punch Extraction (0.75–0.9mm)",
        detail:
          "Precision localized extraction preserving donor aesthetics with zero linear scars and zero over-harvesting.",
      },
      {
        title: "Active ATP Nutrient Preservation Bath",
        detail:
          "Follicles are immediately placed in chilled ATP bio-solution during sorting, ensuring 99.4% cellular survival and eliminating graft desiccation.",
      },
      {
        title: "Doctor-Led Angled Micro-Slits & Gourmet Lunch",
        detail:
          "AIIMS surgeon personally creates micro-slits at acute 40–45° angles following natural whorls. Enjoy a wholesome gourmet lunch during the session.",
      },
    ],
  },
  {
    id: "after-procedure",
    number: "04",
    tabTitle: "After Procedure",
    subtitle: "Clinical Wash, Fit-to-Fly & Lifelong Care",
    desc: "Sterile bandage removal, medicated head-wash, handover of complete post-op supplies, and certified fitness to fly home safely.",
    points: [
      {
        title: "Day 2 In-Clinic Medicated Head-Wash",
        detail:
          "Our medical team carefully removes bandages, cleanses recipient and donor zones, and provides a soothing scalp checkup.",
      },
      {
        title: "Complete 7-Day Patient Post-Op Kit",
        detail:
          "Specialized post-op shampoo, saline spray, DHT blocker, nutritional supplements, and detailed day-by-day care instructions.",
      },
      {
        title: "Fit-to-Fly Medical Certificate",
        detail:
          "Our surgeon issues an official Fit-to-Fly medical certificate so you can board your international return flight comfortably.",
      },
      {
        title: "12 Months Remote Video Follow-Up",
        detail:
          "Lifelong connection with our clinical team. Structured photo follow-ups at 1, 3, 6, 9, and 12 months via dedicated WhatsApp helpline.",
      },
    ],
  },
];

const comparisonData = [
  {
    metric: "Who Performs the Surgery?",
    alloroots: "100% AIIMS MD Specialist Surgeons",
    usUk: "Surgeons or delegated nurses",
    turkey: "Unlicensed technicians ('Hair Mills')",
    allorootsWin: true,
  },
  {
    metric: "Average Package Cost",
    alloroots: "$2,199 – $4,199 (All-Inclusive)",
    usUk: "$12,000 – $22,000+ (Extreme cost)",
    turkey: "$2,500 – $4,200 (Hidden add-ons)",
    allorootsWin: true,
  },
  {
    metric: "Graft Viability & Preservation",
    alloroots: "99.4% in Active ATP Bio-Solution",
    usUk: "Standard saline (85–90%)",
    turkey: "Air-exposed grafts (High failure rate)",
    allorootsWin: true,
  },
  {
    metric: "Free GFC / PRP Therapy Included",
    alloroots: "Yes — 1 Session Free ($200 Value)",
    usUk: "Extra $800 – $1,200 per session",
    turkey: "Often diluted or fake PRP",
    allorootsWin: true,
  },
  {
    metric: "English Fluency & Communication",
    alloroots: "100% Native English Fluency",
    usUk: "100% Fluent",
    turkey: "Heavy language barrier / Translators",
    allorootsWin: true,
  },
  {
    metric: "Airport Transfers & Hotel Support",
    alloroots: "VIP Chauffeur & 4/5★ Corporate Rates",
    usUk: "Self-arranged / No assistance",
    turkey: "Crowded shared shuttle buses",
    allorootsWin: true,
  },
  {
    metric: "Post-Op Teleconsultation",
    alloroots: "12 Months Dedicated Digital Access",
    usUk: "Expensive follow-up visit fees",
    turkey: "Zero accountability after departure",
    allorootsWin: true,
  },
];

const internationalFaqs = [
  {
    q: "How many days do I need to plan for my stay in India?",
    a: "We recommend a 3 to 5 day trip. Day 1: Arrival & rest. Day 2: In-person trichoscopy & hairline design. Day 3: Procedure day. Day 4: Clinic head-wash, bandage removal & tourism. Day 5: Departure with Fit-to-Fly certificate. Many patients also extend their trip by 2 days to visit the Taj Mahal in Agra (just 3 hours from Delhi).",
  },
  {
    q: "How do I obtain an Indian Medical Visa (M-Visa)?",
    a: "It is very simple and done entirely online. Once you confirm your appointment with a partial deposit, we issue a formal Medical Visa Invitation Letter on official hospital letterhead within 24 hours. You can then apply for the Indian e-Medical Visa online, which is typically approved in 48–72 hours.",
  },
  {
    q: "Who actually performs the hair transplant procedure?",
    a: "At AlloRoots, 100% of the surgical steps — from hairline design, localized anesthesia, micro-punch extraction, to micro-slit creation and graft placement — are performed exclusively by AIIMS-trained MD doctors. Unlike commercial hair mills in Turkey where surgeries are handed over to technicians, our doctors personally handle every single patient.",
  },
  {
    q: "Is the procedure painful, and will I be awake?",
    a: "You are fully awake and comfortable. We use a specialized pain-free localized ring-block technique with micro-fine needles so you don't even feel the injection. Once numbed, the procedure is completely painless. You can watch Netflix, listen to podcasts, or chat with the surgeon throughout the day.",
  },
  {
    q: "When can I safely fly back home to my country?",
    a: "You can safely fly back on Day 4 (just 24–48 hours after the procedure) once your clinic head-wash is complete and bandages are removed. We provide you with a sterile travel bandana and an official Fit-to-Fly certificate for airline clearance.",
  },
  {
    q: "What is included in the complimentary Post-Op Kit?",
    a: "Every package includes a full 7-day medical kit: medical-grade post-op shampoo, sterile saline spray, doctor-prescribed antibiotics and anti-inflammatories, DHT-blocking botanicals, and a detailed multilingual care guide.",
  },
  {
    q: "Can I bring a family member or companion?",
    a: "Absolutely! Our international concierge will assist in arranging twin/king accommodation at our 4-star and 5-star partner hotels so your companion can stay comfortably with you. They are also welcome to accompany you to the clinic lounge.",
  },
];

export default function MedicalTourismView() {
  const { openConsultation } = useConsultation();
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyKey>("USD");
  const [activePhase, setActivePhase] = useState<string>("before-arrival");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allExpanded = packages.every((p) => expandedCards[p.id]);
  const toggleAll = () => {
    if (allExpanded) {
      setExpandedCards({});
    } else {
      const all: Record<string, boolean> = {};
      packages.forEach((p) => {
        all[p.id] = true;
      });
      setExpandedCards(all);
    }
  };

  const formatPrice = (usdPrice: number) => {
    const curr = currencies[selectedCurrency];
    const converted = Math.round((usdPrice * curr.rate) / 10) * 10;
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  const handlePlanSelect = (pkgName: string) => {
    openConsultation();
  };

  return (
    <div className="w-full">
      {/* 1. Cinematic Header Banner */}
      <PageHeaderBanner
        badge="AIIMS Global Concierge • India Medical Tourism"
        badgeIcon={<Plane className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="World-Class Hair Transplant Packages in"
        highlightText="India (Delhi NCR & Odisha)"
        description="Receive 100% AIIMS doctor-led Realtime Bio-Enhanced FUE at 70–75% less cost than US, UK & European clinics. Comprehensive medical tourism packages include VIP airport chauffeur, luxury accommodation assistance, free GFC therapy, and 12-month remote teleconsultation."
        breadcrumbs={[{ label: "Medical Tourism" }]}
        onOpenConsultation={openConsultation}
        primaryActionLabel="Inquire Travel Package"
        showStatCard={true}
        statCardTitle="International Patient Advantage"
        statCardValue="70–75% Save"
        statCardSubtext="AIIMS physician care vs $15,000+ US/UK private clinics"
        bgImage={siteImages.hero.aboutHero}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Global Patient Highlights Bar */}
      <section className="bg-white py-10 border-b border-[#0B4F4A]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#0B4F4A]/6">
              <span className="block font-serif text-3xl sm:text-4xl text-[#0B4F4A]">28+</span>
              <span className="text-xs sm:text-sm text-[#566965] font-medium mt-1 block">
                Countries Represented
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#0B4F4A]/6">
              <span className="block font-serif text-3xl sm:text-4xl text-[#0B4F4A]">100%</span>
              <span className="text-xs sm:text-sm text-[#566965] font-medium mt-1 block">
                AIIMS Doctor Executed
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#0B4F4A]/6">
              <span className="block font-serif text-3xl sm:text-4xl text-[#0B4F4A]">99.4%</span>
              <span className="text-xs sm:text-sm text-[#566965] font-medium mt-1 block">
                Active Graft Survival
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#0B4F4A]/6">
              <span className="block font-serif text-3xl sm:text-4xl text-[#0B4F4A]">24h</span>
              <span className="text-xs sm:text-sm text-[#566965] font-medium mt-1 block">
                M-Visa Letter Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES SECTION (CORE REQUEST) */}
      <section className="py-20 lg:py-28 bg-[#FAF7F1] relative overflow-hidden" id="packages">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B4F4A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-[11px] font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              Transparent All-Inclusive Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#202A28] leading-tight">
              Allôroots Medical Tourism Packages
            </h2>
            <p className="text-base sm:text-lg text-[#566965] mt-4 font-light leading-relaxed">
              Every procedure is personally executed end-to-end by senior AIIMS master surgeons. No technician shortcuts, no hidden hospital fees, and zero surprise billing.
            </p>

            {/* Currency Switcher & Global Expand Toggle */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center p-1.5 rounded-2xl bg-white shadow-sm border border-[#0B4F4A]/10">
                <span className="text-xs font-semibold text-[#8A9E9B] uppercase tracking-wider px-3 hidden sm:inline">
                  Currency:
                </span>
                <div className="flex flex-wrap gap-1">
                  {(Object.keys(currencies) as CurrencyKey[]).map((cKey) => {
                    const isCurrent = selectedCurrency === cKey;
                    return (
                      <button
                        key={cKey}
                        onClick={() => setSelectedCurrency(cKey)}
                        className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                          isCurrent
                            ? "bg-[#0B4F4A] text-white shadow-sm"
                            : "text-[#566965] hover:text-[#0B4F4A] hover:bg-[#F3EEE6]"
                        }`}
                      >
                        {cKey} ({currencies[cKey].symbol.trim()})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Global Expand / Collapse */}
              <button
                type="button"
                onClick={toggleAll}
                className="px-4 py-2 rounded-2xl bg-white border border-[#0B4F4A]/10 text-xs font-semibold text-[#0B4F4A] hover:bg-[#F3EEE6] transition-all shadow-sm flex items-center gap-1.5"
              >
                {allExpanded ? (
                  <>
                    <span>Collapse All Cards</span>
                    <ChevronUp className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </>
                ) : (
                  <>
                    <span>Expand All Inclusions</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 items-start">
            {packages.map((pkg) => {
              const formattedPrice = formatPrice(pkg.baseUsdPrice);
              const isExpanded = !!expandedCards[pkg.id];
              const visibleHighlights = isExpanded ? pkg.highlights : pkg.highlights.slice(0, 3);
              const hiddenCount = pkg.highlights.length - 3;

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-white border-2 border-[#C6A15B] shadow-[0_16px_40px_-12px_rgba(11,79,74,0.16)] xl:-translate-y-1.5"
                      : "bg-white/95 border border-[#0B4F4A]/10 shadow-[0_10px_30px_-12px_rgba(11,79,74,0.06)] hover:border-[#C6A15B]/50 hover:shadow-lg"
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#DFCA97] text-[#073A37] text-[10px] font-bold tracking-wider uppercase shadow-md whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Card Top */}
                  <div>
                    {/* Header: Title, Price, Grafts */}
                    <div className="border-b border-[#0B4F4A]/8 pb-4 mb-4">
                      <span className="text-[10.5px] uppercase tracking-[0.18em] font-bold text-[#C96F4F] block mb-1">
                        {pkg.name}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-[34px] font-serif font-normal text-[#202A28]">
                          {formattedPrice}
                        </span>
                        <span className="text-[11px] text-[#8A9E9B] font-medium">
                          / all-inclusive
                        </span>
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#0B4F4A]/5 text-[#0B4F4A] text-[11px] font-semibold">
                        <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                        <span>{pkg.grafts}</span>
                      </div>
                    </div>

                    {/* Compact Procedure Details */}
                    <div className="space-y-1.5 text-[11.5px] text-[#566965] mb-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#202A28]">Procedure Time:</span>
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#202A28]">Technique:</span>
                        <span>Realtime Bio-FUE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#202A28]">Surgeon:</span>
                        <span className="font-semibold text-[#0B4F4A]">AIIMS MD Specialist</span>
                      </div>
                    </div>

                    {/* Compact "Best suited for" Box */}
                    <p className="text-[11px] text-[#566965] leading-relaxed italic bg-[#FBF8F3] p-2.5 rounded-xl border border-[#0B4F4A]/5 mb-4">
                      <strong className="text-[#202A28] not-italic block mb-0.5 font-semibold text-[11.5px]">Best suited for:</strong>
                      {pkg.idealFor}
                    </p>

                    {/* Package Inclusions with Show More Toggle */}
                    <div className="space-y-2 text-xs text-[#202A28]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#8A9E9B] font-bold">
                          Key Inclusions:
                        </span>
                        <span className="text-[10px] font-medium text-[#0B4F4A] bg-[#0B4F4A]/5 px-2 py-0.5 rounded-full">
                          {pkg.highlights.length} Benefits
                        </span>
                      </div>

                      {/* Top 3 items always visible */}
                      <div className="space-y-1.5">
                        {pkg.highlights.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0B4F4A] flex-shrink-0 mt-0.5" />
                            <span className="leading-snug text-[#40504D] text-[11.5px]">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Remaining items shown when expanded */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden space-y-1.5 pt-1.5 border-t border-[#0B4F4A]/8"
                          >
                            {pkg.highlights.slice(3).map((feat, i) => (
                              <div key={i + 3} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                                <span className="leading-snug text-[#40504D] text-[11.5px]">{feat}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Show More / Show Less Button */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(pkg.id)}
                        className="w-full mt-2 py-1.5 px-3 rounded-xl bg-[#FAF7F1] hover:bg-[#F3EEE6] border border-[#0B4F4A]/8 text-[11px] font-semibold text-[#0B4F4A] hover:text-[#C96F4F] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-3.5 h-3.5 text-[#C6A15B]" />
                          </>
                        ) : (
                          <>
                            <span>+ Show More ({hiddenCount} more inclusions)</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#C6A15B]" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Bottom / CTA */}
                  <div className="pt-4 mt-5 border-t border-[#0B4F4A]/8">
                    <button
                      onClick={() => handlePlanSelect(pkg.name)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${
                        pkg.isPopular
                          ? "bg-[#0B4F4A] text-white hover:bg-[#073A37] shadow-md hover:shadow-lg"
                          : "bg-[#F3EEE6] text-[#0B4F4A] hover:bg-[#0B4F4A] hover:text-white"
                      }`}
                    >
                      <span>Select {pkg.name.split(" ")[0]} Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inclusions Guarantee Bar */}
          <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#0B4F4A]/10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold block mb-1">
                Zero Hidden Charges
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#202A28]">
                Every Allôroots Package Guarantees
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-[#566965]">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FBF8F3]">
                <div className="w-9 h-9 rounded-xl bg-[#0B4F4A]/10 text-[#0B4F4A] flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#202A28] mb-1">100% Doctor-Led</h4>
                  <p className="text-xs leading-relaxed">
                    Zero technician substitution. Every incision, punch, and placement is personally performed by AIIMS MD surgeons.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FBF8F3]">
                <div className="w-9 h-9 rounded-xl bg-[#0B4F4A]/10 text-[#0B4F4A] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#202A28] mb-1">Complimentary GFC Session</h4>
                  <p className="text-xs leading-relaxed">
                    1 Session of advanced Growth Concentrate Therapy (valued at US$ 200) included free to fast-track healing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FBF8F3]">
                <div className="w-9 h-9 rounded-xl bg-[#0B4F4A]/10 text-[#0B4F4A] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#202A28] mb-1">7-Day Post-Op Kit</h4>
                  <p className="text-xs leading-relaxed">
                    Specialized clinic shampoo, botanical DHT blocker, sterile saline, and 7 days of prescribed medications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FBF8F3]">
                <div className="w-9 h-9 rounded-xl bg-[#0B4F4A]/10 text-[#0B4F4A] flex items-center justify-center flex-shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#202A28] mb-1">VIP Airport Transfers</h4>
                  <p className="text-xs leading-relaxed">
                    Private chauffeur pickup and drop directly from Indira Gandhi International Airport (DEL) Terminal 3.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FBF8F3]">
                <div className="w-9 h-9 rounded-xl bg-[#0B4F4A]/10 text-[#0B4F4A] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#202A28] mb-1">Hotel Booking Concierge</h4>
                  <p className="text-xs leading-relaxed">
                    Assistance booking partner 4-star and 5-star boutique hotels within 10 minutes of clinic at corporate tariffs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FBF8F3]">
                <div className="w-9 h-9 rounded-xl bg-[#0B4F4A]/10 text-[#0B4F4A] flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#202A28] mb-1">India Tourism Support</h4>
                  <p className="text-xs leading-relaxed">
                    Complimentary travel coordination for visiting the iconic Taj Mahal (Agra) and New Delhi heritage sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP PATIENT PLANNING JOURNEY (FROM LIVE SITE) */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#0B4F4A]/8" id="plan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold block mb-2">
              Step-by-Step Medical Travel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202A28]">
              How to Plan Your Hair Transplant with Allôroots India
            </h2>
            <p className="text-base sm:text-lg text-[#566965] mt-4 font-light">
              A smooth, fully guided protocol designed specifically for international visitors traveling from the US, UK, Europe, Australia, and the Middle East.
            </p>

            {/* Interactive Timeline Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
              {planningPhases.map((phase) => {
                const isActive = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-[#0B4F4A] text-white shadow-md scale-105"
                        : "bg-[#F3EEE6] text-[#566965] hover:bg-[#EAE2D5] hover:text-[#0B4F4A]"
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? "text-[#C6A15B]" : "text-[#8A9E9B]"}`}>
                      {phase.number}
                    </span>
                    <span>{phase.tabTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Phase Content Display */}
          <div className="bg-[#FAF7F1] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#0B4F4A]/10 shadow-sm">
            {planningPhases.map((phase) => {
              if (phase.id !== activePhase) return null;
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#0B4F4A]/10">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold block mb-1">
                        Phase {phase.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#202A28]">
                        {phase.tabTitle}: {phase.subtitle}
                      </h3>
                    </div>
                    <p className="text-sm text-[#566965] max-w-md font-light leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {phase.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white border border-[#0B4F4A]/8 shadow-sm hover:border-[#C6A15B]/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-[#0B4F4A]/10 text-[#0B4F4A] text-xs font-bold flex items-center justify-center font-mono">
                            {idx + 1}
                          </span>
                          <h4 className="font-serif text-lg text-[#202A28]">
                            {pt.title}
                          </h4>
                        </div>
                        <p className="text-sm text-[#566965] leading-relaxed font-light pl-8">
                          {pt.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {phase.id === "before-arrival" && (
                    <div className="p-4 rounded-2xl bg-[#0B4F4A]/5 border border-[#0B4F4A]/10 text-xs text-[#0B4F4A] flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-[#C6A15B] flex-shrink-0" />
                      <span>
                        <strong>Pro-Tip for Travelers:</strong> Pack 2–3 loose button-up shirts so you don't pull any tight t-shirts over your head after the procedure.
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX: INDIA (ALLOROOTS) VS USA/UK VS TURKEY */}
      <section className="py-20 lg:py-28 bg-[#FAF7F1] border-b border-[#0B4F4A]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold block mb-2">
              Unmatched Quality & Value
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202A28]">
              Why Global Patients Choose AlloRoots
            </h2>
            <p className="text-base sm:text-lg text-[#566965] mt-4 font-light">
              See how our AIIMS-led clinical standard compares with expensive Western clinics and unregulated Turkish technician centers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl bg-white border border-[#0B4F4A]/10 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#0B4F4A]/10 bg-[#F3EEE6]/50">
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#566965] font-bold w-1/4">
                    Comparison Factor
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider font-bold w-1/4 bg-[#0B4F4A] text-white">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                      AlloRoots (India)
                    </span>
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#566965] font-bold w-1/4">
                    USA / UK / Canada
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#566965] font-bold w-1/4">
                    Turkey ("Hair Mills")
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B4F4A]/8 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F1]/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#202A28]">
                      {row.metric}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#0B4F4A] bg-[#0B4F4A]/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#0B4F4A] flex-shrink-0" />
                        <span>{row.alloroots}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#566965]">
                      {row.usUk}
                    </td>
                    <td className="py-4 px-6 text-[#8A9E9B]">
                      {row.turkey}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. DEDICATED CONCIERGE & TOURISM EXPERIENCES */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#0B4F4A]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-[320px] sm:h-[380px] w-full rounded-3xl overflow-hidden bg-[#073A37] shadow-xl border border-[#C6A15B]/30">
                <Image
                  src={siteImages.clinics.delhi}
                  alt="AlloRoots Delhi Flagship Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                    Flagship Facility
                  </span>
                  <p className="font-serif text-xl sm:text-2xl">
                    AlloRoots South Delhi & Aerocity Suite
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    15 mins from Indira Gandhi International Airport (DEL)
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F1] border border-[#0B4F4A]/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B4F4A] text-white flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-[#C6A15B]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#202A28]">
                    Taj Mahal Day Tour Coordination
                  </h4>
                  <p className="text-xs text-[#566965]">
                    Agra is just 3 hours from our Delhi clinic via Yamuna Expressway. Explore the Wonder of the World comfortably post-procedure.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold">
                Complete End-to-End Hospitality
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#202A28] leading-tight">
                Your Dedicated International Concierge Desk
              </h2>
              <p className="text-base text-[#566965] font-light leading-relaxed">
                Traveling to a new country for medical treatment should be peaceful and empowering. From the minute your flight lands at Delhi International Airport to the moment you board your flight home, our bilingual patient coordinators manage every detail.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#FAF7F1] border border-[#0B4F4A]/8 space-y-1.5">
                  <div className="flex items-center gap-2 text-base font-serif text-[#0B4F4A]">
                    <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
                    <span>M-Visa Guarantee</span>
                  </div>
                  <p className="text-xs text-[#566965] leading-relaxed">
                    Official hospital stamped invitation letters issued within 24 hours to secure fast e-Medical Visa processing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F1] border border-[#0B4F4A]/8 space-y-1.5">
                  <div className="flex items-center gap-2 text-base font-serif text-[#0B4F4A]">
                    <Building2 className="w-5 h-5 text-[#C6A15B]" />
                    <span>Luxury Hotels</span>
                  </div>
                  <p className="text-xs text-[#566965] leading-relaxed">
                    Preferred tariffs at 4-star & 5-star partner hotels in Aerocity and South Delhi with complimentary breakfast and Wi-Fi.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F1] border border-[#0B4F4A]/8 space-y-1.5">
                  <div className="flex items-center gap-2 text-base font-serif text-[#0B4F4A]">
                    <Users className="w-5 h-5 text-[#C6A15B]" />
                    <span>Private Chauffeur</span>
                  </div>
                  <p className="text-xs text-[#566965] leading-relaxed">
                    Pre-arranged luxury airport pickup and clinic transfer vehicles. No waiting, no hailing cabs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F1] border border-[#0B4F4A]/8 space-y-1.5">
                  <div className="flex items-center gap-2 text-base font-serif text-[#0B4F4A]">
                    <Compass className="w-5 h-5 text-[#C6A15B]" />
                    <span>Heritage Tourism</span>
                  </div>
                  <p className="text-xs text-[#566965] leading-relaxed">
                    Personalized itineraries for Humayun’s Tomb, Qutub Minar, and weekend excursions to the Taj Mahal.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={openConsultation}
                  className="px-7 py-3.5 rounded-xl bg-[#0B4F4A] text-white font-medium text-sm hover:bg-[#073A37] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Connect with Concierge</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                </button>
                <a
                  href="https://wa.me/919717503031?text=Hi%20AlloRoots%2C%20I%20am%20interested%20in%20Medical%20Tourism%20Hair%20Transplant%20Packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20bd5a] transition-all flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge (+91 9717503031)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERNATIONAL PATIENT RESULTS SHOWCASE */}
      <section className="py-20 lg:py-28 bg-[#FAF7F1] border-b border-[#0B4F4A]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold block mb-2">
              Global Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202A28]">
              Proven Results for International Patients
            </h2>
            <p className="text-base sm:text-lg text-[#566965] mt-4 font-light">
              See natural, dense, lifetime results achieved by patients who traveled to AlloRoots from the United Kingdom, United States, Canada, Australia, and UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dense Frontal Hairline",
                country: "London, United Kingdom",
                grafts: "2,850 Grafts",
                image: siteImages.results.case1,
                tech: "Bio-Enhanced Sapphire FUE",
              },
              {
                title: "Temporal & Mid-Scalp Pack",
                country: "California, United States",
                grafts: "3,400 Grafts",
                image: siteImages.results.case4,
                tech: "ATP Solution Realtime FUE",
              },
              {
                title: "Crown Swirl & Frontal Zone",
                country: "Toronto, Canada",
                grafts: "4,100 Grafts",
                image: siteImages.results.case2,
                tech: "2-Day Mega Session",
              },
              {
                title: "Complete Scalp Transformation",
                country: "Sydney, Australia",
                grafts: "4,600 Grafts",
                image: siteImages.results.case14,
                tech: "Bio-FUE + Beard Donor",
              },
            ].map((res, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#0B4F4A]/10 shadow-sm group hover:border-[#C6A15B]/50 transition-all"
              >
                <div className="relative h-56 w-full bg-[#073A37] overflow-hidden">
                  <Image
                    src={res.image}
                    alt={res.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#073A37] text-[10px] font-bold uppercase">
                    {res.grafts}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] text-[#C6A15B] font-semibold block">
                      {res.country}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-serif text-base text-[#202A28]">
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#566965]">
                    {res.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MEDICAL TOURISM FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#0B4F4A]/8" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C96F4F] font-bold block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#202A28]">
              Medical Tourism FAQs
            </h2>
            <p className="text-base text-[#566965] mt-3 font-light">
              Clear answers to the most common questions international travelers ask our clinical team.
            </p>
          </div>

          <div className="space-y-4">
            {internationalFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#0B4F4A]/10 bg-[#FAF7F1] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-serif text-lg text-[#202A28]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0B4F4A] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#C96F4F]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#566965] leading-relaxed border-t border-[#0B4F4A]/6">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA BAR */}
      <section className="py-20 bg-gradient-to-br from-[#021A18] via-[#042926] to-[#073A37] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4A]/50 border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>Start Your Transformation Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white max-w-2xl mx-auto leading-tight">
            Ready to Restore Your Hair with AIIMS Specialists in India?
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Send us your scalp photographs today for a confidential, no-obligation graft calculation and customized international travel package.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={openConsultation}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#DFCA97] text-[#073A37] font-semibold text-sm hover:opacity-95 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-4 h-4 text-[#073A37]" />
              <span>Book Virtual Video Consultation</span>
            </button>

            <a
              href="https://wa.me/919717503031?text=Hi%20AlloRoots%2C%20I%20am%20interested%20in%20Hair%20Transplant%20Medical%20Tourism%20in%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all border border-white/20 flex items-center gap-2 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp (+91 9717503031)</span>
            </a>
          </div>

          <p className="text-xs text-white/50 pt-2">
            M-Visa assistance letter issued within 24 hours of package booking • Confidential virtual assessment
          </p>
        </div>
      </section>
    </div>
  );
}
