"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Play,
  X,
  Search,
  Sparkles,
  ChevronRight,
  Calculator,
  Stethoscope,
  Activity,
  Layers,
  Video,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { servicesData, Service, procedureVideos, ProcedureVideo } from "@/data/services";

interface ServicesSectionProps {
  onOpenConsultation?: () => void;
}

type CategoryType = "All" | "Hair Transplant" | "Hair Loss Treatment" | "Regenerative Trichology";
type MainTabType = "procedures" | "videos";

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [mainTab, setMainTab] = useState<MainTabType>("procedures");
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("fue");
  const [selectedVideo, setSelectedVideo] = useState<ProcedureVideo | null>(null);
  const [activeVideoCategory, setActiveVideoCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"featured" | "grid">("featured");

  // Category counts for procedures
  const categoryCounts = useMemo(() => {
    return {
      All: servicesData.length,
      "Hair Transplant": servicesData.filter((s) => s.category === "Hair Transplant").length,
      "Hair Loss Treatment": servicesData.filter((s) => s.category === "Hair Loss Treatment").length,
      "Regenerative Trichology": servicesData.filter((s) => s.category === "Regenerative Trichology").length,
    };
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Selected service for detailed showcase
  const activeService: Service = useMemo(() => {
    const found = servicesData.find((s) => s.id === selectedServiceId);
    return found || filteredServices[0] || servicesData[0];
  }, [selectedServiceId, filteredServices]);

  // Filtered procedure videos
  const filteredVideos = useMemo(() => {
    if (activeVideoCategory === "All") return procedureVideos;
    return procedureVideos.filter((v) =>
      v.category.toLowerCase().includes(activeVideoCategory.toLowerCase()) ||
      v.title.toLowerCase().includes(activeVideoCategory.toLowerCase())
    );
  }, [activeVideoCategory]);

  return (
    <>
      <section className="relative py-24 lg:py-36 bg-[#FBF8F3] overflow-hidden" id="services">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#0B4F4A]/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#D87852]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ═══════════ SECTION HEADER ═══════════ */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-10 border-b border-[#0B4F4A]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B4F4A]/12 shadow-sm mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D87852] animate-pulse" />
                <span className="text-[12px] uppercase tracking-[0.18em] font-bold text-[#073A37]">
                  AlloRoots Clinical Catalog &amp; Video Hub
                </span>
              </div>
              <h2 className="text-[38px] sm:text-[48px] lg:text-[58px] font-serif font-normal text-[#1A2422] leading-[1.08] tracking-[-0.02em]">
                Explore Treatments &amp; Clinical Videos
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-[16px] sm:text-[17px] text-[#4A6360] leading-relaxed mb-4 font-light">
                From patent-grade Bio-Enhanced FUE hair transplants to cutting-edge Autologous Cellular Micrografts, explore our clinical procedures and watch real surgical demonstrations led by certified AIIMS New Delhi doctors.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0B4F4A] bg-[#0B4F4A]/8 px-3.5 py-1.2 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                  100% Doctor-Led Implantation
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#D87852] bg-[#D87852]/10 px-3.5 py-1.2 rounded-full">
                  <Sparkles className="w-4 h-4 text-[#D87852]" />
                  99.4% Graft Survival Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* ═══════════ MAIN VIEW SELECTOR (PROCEDURES VS CLINICAL VIDEOS) ═══════════ */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 bg-white/70 backdrop-blur-md p-2.5 rounded-2xl border border-[#0B4F4A]/10 shadow-sm">
            
            {/* Main Tabs */}
            <div className="flex items-center gap-2.5 p-1 bg-[#EBE5DA]/70 rounded-2xl border border-[#0B4F4A]/15">
              <button
                type="button"
                onClick={() => setMainTab("procedures")}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-[13.5px] font-bold transition-all duration-300 cursor-pointer shadow-sm ${
                  mainTab === "procedures"
                    ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/30 scale-[1.02]"
                    : "bg-white/80 text-[#1A2422] hover:bg-white hover:text-[#0B4F4A] border border-black/5"
                }`}
              >
                <Layers className={`w-4 h-4 ${mainTab === "procedures" ? "text-[#C6A15B]" : "text-[#0B4F4A]"}`} />
                <span>All Procedures ({servicesData.length})</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  mainTab === "procedures" ? "bg-white/20 text-white" : "bg-[#0B4F4A]/10 text-[#0B4F4A]"
                }`}>
                  Catalog
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMainTab("videos")}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-[13.5px] font-bold transition-all duration-300 cursor-pointer relative shadow-sm ${
                  mainTab === "videos"
                    ? "bg-[#D87852] text-white shadow-md shadow-[#D87852]/30 scale-[1.02]"
                    : "bg-white/80 text-[#1A2422] hover:bg-white hover:text-[#D87852] border border-black/5"
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <Video className={`w-4 h-4 ${mainTab === "videos" ? "text-white" : "text-[#D87852]"}`} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C6A15B] animate-ping" />
                </div>
                <span>Watch Clinical Videos ({procedureVideos.length})</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  mainTab === "videos" ? "bg-white/25 text-white" : "bg-[#D87852]/15 text-[#D87852]"
                }`}>
                  YouTube
                </span>
              </button>
            </div>

            {/* Quick Consultation CTA */}
            <div className="hidden sm:flex items-center gap-3 pr-2">
              <span className="text-[12px] text-[#8A9E9B] font-medium">Free Hair Evaluation</span>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B4F4A]/8 text-[#0B4F4A] hover:bg-[#0B4F4A] hover:text-white text-[12px] font-bold transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Doctor Slot</span>
              </button>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              VIEW 1: PROCEDURES TAB (SHOWCASE & GRID)
          ══════════════════════════════════════════════════════════════ */}
          {mainTab === "procedures" && (
            <div>
              {/* Category Filter + Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
                
                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                  {[
                    { key: "All", label: "All Treatments", icon: Layers },
                    { key: "Hair Transplant", label: "Hair Transplant", icon: Stethoscope },
                    { key: "Hair Loss Treatment", label: "Hair Loss Therapy", icon: Activity },
                    { key: "Regenerative Trichology", label: "Regenerative", icon: Sparkles },
                  ].map(({ key, label, icon: Icon }) => {
                    const count = categoryCounts[key as CategoryType];
                    const isActive = activeCategory === key;
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setActiveCategory(key as CategoryType);
                          const matching = servicesData.filter(
                            (s) => key === "All" || s.category === key
                          );
                          if (matching.length > 0 && !matching.some((m) => m.id === selectedServiceId)) {
                            setSelectedServiceId(matching[0].id);
                          }
                        }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm ${
                          isActive
                            ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/20"
                            : "bg-white text-[#202A28] border border-[#0B4F4A]/10 hover:border-[#0B4F4A]/30 hover:bg-[#F3EEE6]"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C6A15B]" : "text-[#0B4F4A]"}`} />
                        <span>{label}</span>
                        <span
                          className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
                            isActive ? "bg-white/20 text-white" : "bg-[#0B4F4A]/8 text-[#0B4F4A]"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Search & Layout toggle */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 md:w-64">
                    <Search className="w-4 h-4 text-[#8A9E9B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search treatments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2 rounded-full bg-white border border-[#0B4F4A]/15 text-[13px] text-[#202A28] focus:outline-none focus:border-[#0B4F4A] focus:ring-1 focus:ring-[#0B4F4A] shadow-sm transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="hidden sm:flex bg-white rounded-full p-1 border border-[#0B4F4A]/12 shadow-sm">
                    <button
                      onClick={() => setViewMode("featured")}
                      className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                        viewMode === "featured"
                          ? "bg-[#0B4F4A] text-white shadow-sm"
                          : "text-[#566965] hover:text-[#0B4F4A]"
                      }`}
                    >
                      Showcase
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                        viewMode === "grid"
                          ? "bg-[#0B4F4A] text-white shadow-sm"
                          : "text-[#566965] hover:text-[#0B4F4A]"
                      }`}
                    >
                      Grid View ({filteredServices.length})
                    </button>
                  </div>
                </div>

              </div>

              {/* Showcase Mode */}
              {viewMode === "featured" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Procedure List */}
                  <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5 space-y-2 max-h-[720px] overflow-y-auto pr-1 select-none scrollbar-thin"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#8A9E9B] mb-2 px-2">
                      Select Procedure ({filteredServices.length} Available)
                    </p>

                    {filteredServices.length === 0 ? (
                      <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-gray-300">
                        <p className="text-sm text-gray-500 mb-2">No treatments match &ldquo;{searchQuery}&rdquo;</p>
                        <button
                          onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                          className="text-xs text-[#0B4F4A] font-semibold underline cursor-pointer"
                        >
                          Clear Filters
                        </button>
                      </div>
                    ) : (
                      filteredServices.map((service, index) => {
                        const isSelected = activeService.id === service.id;
                        return (
                          <button
                            key={service.id}
                            onClick={() => setSelectedServiceId(service.id)}
                            className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative group flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? "bg-white text-[#1A2422] shadow-[0_10px_25px_-6px_rgba(11,79,74,0.15)] border-2 border-[#C6A15B]/50"
                                : "bg-white/60 hover:bg-white text-[#566965] border border-transparent"
                            }`}
                          >
                            {isSelected && (
                              <motion.div
                                layoutId="activeIndicator"
                                className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#0B4F4A]"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                              />
                            )}

                            <div className="flex items-center gap-3.5 pl-2">
                              <div
                                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden transition-colors ${
                                  isSelected
                                    ? "bg-[#0B4F4A]/10 border border-[#0B4F4A]/20"
                                    : "bg-white border border-[#0B4F4A]/8 group-hover:bg-[#0B4F4A]/5"
                                }`}
                              >
                                {service.icon ? (
                                  <Image
                                    src={service.icon}
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                    onError={(e) => {
                                      (e.target as HTMLElement).style.display = "none";
                                    }}
                                  />
                                ) : (
                                  <span className="text-[12px] font-bold text-[#0B4F4A]">
                                    {index + 1}
                                  </span>
                                )}
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D87852]">
                                    {service.category}
                                  </span>
                                  {service.badge && (
                                    <span className="text-[9.5px] px-2 py-0.2 rounded-full bg-[#0B4F4A]/8 text-[#0B4F4A] font-semibold">
                                      {service.badge}
                                    </span>
                                  )}
                                </div>
                                <h4
                                  className={`text-[15px] sm:text-[16px] font-serif font-normal transition-colors line-clamp-1 ${
                                    isSelected ? "text-[#0B4F4A] font-medium" : "text-[#1A2422] group-hover:text-[#0B4F4A]"
                                  }`}
                                >
                                  {service.title}
                                </h4>
                              </div>
                            </div>

                            <ChevronRight
                              className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                                isSelected ? "text-[#C6A15B] translate-x-1" : "text-[#A8B7B5] group-hover:translate-x-0.5"
                              }`}
                            />
                          </button>
                        );
                      })
                    )}
                  </motion.div>

                  {/* Right Column: Procedure Showcase Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-7"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-[28px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(11,79,74,0.12)] border border-[#0B4F4A]/10"
                      >
                        
                        {/* Top Hero Image Banner */}
                        <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden bg-[#073A37] group">
                          <Image
                            src={activeService.image}
                            alt={activeService.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 750px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#042926] via-[#042926]/40 to-transparent" />

                          {/* Top Badges */}
                          <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                            <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#073A37] text-[11px] font-bold uppercase tracking-wider shadow-md">
                              AIIMS Protocol • Clinical Result
                            </span>
                            {activeService.badge && (
                              <span className="px-3.5 py-1.5 rounded-full bg-[#C6A15B] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                                {activeService.badge}
                              </span>
                            )}
                          </div>

                          {/* Watch Video Button in Header */}
                          {activeService.videoUrl && (
                            <button
                              onClick={() => {
                                const matchingVid = procedureVideos.find((v) => v.videoUrl === activeService.videoUrl) || {
                                  id: activeService.id,
                                  title: activeService.title,
                                  category: activeService.category,
                                  videoUrl: activeService.videoUrl || "https://www.youtube.com/embed/_uxQwrsRhDA",
                                  thumbnail: activeService.image,
                                  duration: activeService.duration || "5:00 Mins",
                                  doctor: activeService.doctorInCharge || "Dr. Alok Sahoo (AIIMS)",
                                  description: activeService.shortDesc,
                                  badge: activeService.badge || "Clinical Video",
                                };
                                setSelectedVideo(matchingVid);
                              }}
                              className="absolute top-5 right-5 z-10 flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white text-[12px] font-semibold transition-all duration-300 cursor-pointer shadow-lg group/vid"
                            >
                              <span className="w-5 h-5 rounded-full bg-[#D87852] flex items-center justify-center group-hover/vid:scale-110 transition-transform">
                                <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                              </span>
                              <span>Watch YouTube Video</span>
                            </button>
                          )}

                          {/* Bottom Banner Title */}
                          <div className="absolute bottom-5 left-6 right-6 text-white z-10">
                            <p className="text-[12px] uppercase tracking-[0.16em] text-[#C6A15B] font-semibold mb-1">
                              {activeService.category}
                            </p>
                            <h3 className="text-[24px] sm:text-[30px] font-serif font-normal text-white leading-tight">
                              {activeService.title}
                            </h3>
                          </div>
                        </div>

                        {/* Procedure Details Body */}
                        <div className="p-6 sm:p-8 space-y-6">
                          <p className="text-[15px] sm:text-[16px] text-[#4A6360] font-normal leading-relaxed">
                            {activeService.fullDesc || activeService.shortDesc}
                          </p>

                          {/* Clinical Quick Specs Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FBF8F3] border border-[#0B4F4A]/8">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-[#8A9E9B] font-semibold">Duration</p>
                              <p className="text-[13px] font-bold text-[#1A2422]">{activeService.duration || "3 - 5 Hours"}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-[#8A9E9B] font-semibold">Recovery Time</p>
                              <p className="text-[13px] font-bold text-[#1A2422]">{activeService.recoveryTime || "3 - 5 Days"}</p>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <p className="text-[10px] uppercase tracking-wider text-[#8A9E9B] font-semibold">Supervision</p>
                              <p className="text-[13px] font-bold text-[#0B4F4A]">{activeService.doctorInCharge || "AIIMS Doctors"}</p>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div>
                            <h5 className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#1A2422] mb-3">
                              Surgical Highlights &amp; Clinical Safeguards
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {activeService.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-[13.5px] text-[#202A28]">
                                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                                  <span className="font-medium">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Steps */}
                          {activeService.procedureSteps && activeService.procedureSteps.length > 0 && (
                            <div className="pt-4 border-t border-[#0B4F4A]/8">
                              <h5 className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#1A2422] mb-3">
                                Step-By-Step Clinical Execution
                              </h5>
                              <div className="space-y-2.5">
                                {activeService.procedureSteps.slice(0, 3).map((step, idx) => (
                                  <div key={idx} className="flex items-start gap-3 text-[13px] text-[#4A6360]">
                                    <span className="w-5 h-5 rounded-full bg-[#0B4F4A] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <span className="leading-snug">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Action CTAs */}
                          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#0B4F4A]/8">
                            <div className="flex items-center gap-2 text-[12px] text-[#0B4F4A] font-semibold">
                              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                              <span>100% Doctor-Performed Guarantee</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                              {activeService.videoUrl && (
                                <button
                                  onClick={() => {
                                    const matchingVid = procedureVideos.find((v) => v.videoUrl === activeService.videoUrl) || {
                                      id: activeService.id,
                                      title: activeService.title,
                                      category: activeService.category,
                                      videoUrl: activeService.videoUrl || "https://www.youtube.com/embed/_uxQwrsRhDA",
                                      thumbnail: activeService.image,
                                      duration: activeService.duration || "5:00 Mins",
                                      doctor: activeService.doctorInCharge || "Dr. Alok Sahoo (AIIMS)",
                                      description: activeService.shortDesc,
                                      badge: activeService.badge || "Clinical Video",
                                    };
                                    setSelectedVideo(matchingVid);
                                  }}
                                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#0B4F4A]/15 text-[#1A2422] text-[13px] font-semibold hover:bg-[#FBF8F3] transition-colors cursor-pointer"
                                >
                                  <Play className="w-3.5 h-3.5 text-[#D87852] fill-[#D87852]" />
                                  <span>Watch Video</span>
                                </button>
                              )}

                              <button
                                onClick={onOpenConsultation}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B4F4A] text-white text-[13px] font-semibold hover:bg-[#073A37] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
                              >
                                <span>Book Consultation</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>

                        </div>

                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                </div>
              )}

              {/* Grid View */}
              {viewMode === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#0B4F4A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-[#073A37]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#0B4F4A]">
                            {service.badge}
                          </span>
                        </div>

                        {service.videoUrl && (
                          <button
                            onClick={() => {
                              const matchingVid = procedureVideos.find((v) => v.videoUrl === service.videoUrl) || {
                                id: service.id,
                                title: service.title,
                                category: service.category,
                                videoUrl: service.videoUrl || "https://www.youtube.com/embed/_uxQwrsRhDA",
                                thumbnail: service.image,
                                duration: service.duration || "5:00 Mins",
                                doctor: service.doctorInCharge || "Dr. Alok Sahoo (AIIMS)",
                                description: service.shortDesc,
                                badge: service.badge || "Clinical Video",
                              };
                              setSelectedVideo(matchingVid);
                            }}
                            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#D87852] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform cursor-pointer"
                            title="Watch YouTube Video"
                          >
                            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                          </button>
                        )}

                        <div className="absolute bottom-3 left-3 text-white">
                          <p className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-semibold">
                            {service.category}
                          </p>
                          <h4 className="text-[17px] font-serif font-normal leading-tight">
                            {service.title}
                          </h4>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <p className="text-[13.5px] text-[#566965] leading-relaxed line-clamp-3">
                          {service.shortDesc}
                        </p>

                        <div className="space-y-1.5 pt-2 border-t border-gray-100">
                          {service.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-[12px] text-[#1A2422]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-[11px] text-[#8A9E9B] font-semibold">
                            {service.duration || "4 - 6 Hours"}
                          </span>
                          <button
                            onClick={() => {
                              setSelectedServiceId(service.id);
                              setViewMode("featured");
                            }}
                            className="text-[12.5px] font-bold text-[#0B4F4A] hover:text-[#D87852] inline-flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              VIEW 2: DEDICATED CLINICAL VIDEO LIBRARY (YOUTUBE HUB)
          ══════════════════════════════════════════════════════════════ */}
          {mainTab === "videos" && (
            <div className="space-y-8">
              
              {/* Video Sub-Header & Filters */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#0B4F4A]/10 shadow-sm">
                <div>
                  <h3 className="text-[20px] font-serif text-[#1A2422] flex items-center gap-2">
                    <Video className="w-5 h-5 text-[#D87852]" />
                    <span>Official AlloRoots Video Library</span>
                  </h3>
                  <p className="text-[13px] text-[#566965] mt-0.5">
                    Watch surgical procedures, hairline designs, and scientific breakdowns performed by AIIMS doctors.
                  </p>
                </div>

                {/* Video Category Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  {["All", "Surgery", "Hairline", "Female", "GFC", "Beard"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveVideoCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                        activeVideoCategory === cat
                          ? "bg-[#0B4F4A] text-white shadow-sm"
                          : "bg-[#FBF8F3] text-[#4A6360] hover:bg-[#F3EEE6] border border-[#0B4F4A]/10"
                      }`}
                    >
                      {cat === "All" ? "All Videos" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* YouTube Video Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="bg-white rounded-2xl overflow-hidden border border-[#0B4F4A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                  >
                    {/* Video Thumbnail with Play Button Overlay */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#073A37]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#D87852] text-white shadow-md">
                          {video.badge}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                          {video.duration}
                        </span>
                      </div>

                      {/* Center Floating Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 text-[#0B4F4A] flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-[#D87852] group-hover:text-white transition-all duration-300">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>

                      {/* Bottom Category Tag */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-bold">
                          {video.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="text-[16px] font-serif font-normal text-[#1A2422] group-hover:text-[#0B4F4A] transition-colors line-clamp-2 leading-snug mb-2">
                          {video.title}
                        </h4>
                        <p className="text-[13px] text-[#566965] leading-relaxed line-clamp-2">
                          {video.description}
                        </p>
                      </div>

                      {/* Doctor & Action Bar */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-[#0B4F4A] font-semibold">
                          <Stethoscope className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span className="truncate max-w-[180px]">{video.doctor}</span>
                        </div>

                        <span className="text-[12px] font-bold text-[#D87852] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>Play</span>
                          <Play className="w-3 h-3 fill-[#D87852]" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* YouTube Channel Promo Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#073A37] to-[#0B4F4A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D87852] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white">
                      Subscribe to AlloRoots on YouTube
                    </h4>
                    <p className="text-[12.5px] text-white/70">
                      Watch weekly live surgery updates, patient interviews, and hair care masterclasses by Dr. Alok Sahoo.
                    </p>
                  </div>
                </div>

                <a
                  href="https://alloroots.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#073A37] hover:bg-[#FBF8F3] text-[12.5px] font-bold transition-all shadow-md flex-shrink-0"
                >
                  <span>Visit Official Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          )}

          {/* ═══════════ BOTTOM TRUST BANNER: COST CALCULATOR & DOCTOR VIDEO ═══════════ */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B4F4A] via-[#073A37] to-[#042926] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center flex-shrink-0">
                <Calculator className="w-7 h-7 text-[#C6A15B]" />
              </div>
              <div>
                <h4 className="text-[18px] sm:text-[20px] font-serif font-normal text-white">
                  Want to Know the Cost of Your Hair Transplant?
                </h4>
                <p className="text-[13px] text-white/70 max-w-lg mt-0.5">
                  Calculate the exact number of grafts needed and estimated procedure cost transparently based on your current baldness grade.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setSelectedVideo(procedureVideos[0]);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[13px] font-semibold transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#C6A15B] fill-[#C6A15B]" />
                <span>Watch Clinic Video</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D87852] hover:bg-[#c46844] text-white text-[13px] font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════ THEATRE VIDEO MODAL ═══════════ */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.28 }}
            className="relative w-full max-w-5xl bg-[#073A37] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D87852] animate-pulse" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#C6A15B]">
                  {selectedVideo.badge} • {selectedVideo.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* YouTube Embed Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Footer Info & Consultation Trigger */}
            <div className="p-5 sm:p-6 bg-[#042926] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div className="space-y-1">
                <h4 className="text-[16px] sm:text-[18px] font-serif font-normal text-white">
                  {selectedVideo.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-[12px] text-white/70">
                  <span className="text-[#C6A15B] font-semibold">{selectedVideo.doctor}</span>
                  <span>•</span>
                  <span>Duration: {selectedVideo.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    onOpenConsultation?.();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D87852] hover:bg-[#c46844] text-white text-[13px] font-bold transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Procedure</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
