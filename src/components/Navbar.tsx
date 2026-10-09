"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CalendarDays,
  Home,
  MapPin,
  Sparkles,
  ShieldCheck,
  Building2,
  Stethoscope,
  Star,
  Users,
  Award,
} from "lucide-react";
import { siteImages } from "@/data/siteImages";
import { navigationHierarchy, NavDropdown, MegaCategory } from "@/data/allorootsMegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";
import { useConsultation } from "@/context/ConsultationContext";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

const trustItems = [
  { icon: Sparkles, text: "Natural & Undetectable Results" },
  { icon: ShieldCheck, text: "0% EMI Available" },
  { icon: Building2, text: "4 Clinics Across India" },
  { icon: Stethoscope, text: "AIIMS New Delhi Doctors" },
  { icon: Star, text: "10+ Years Experience" },
  { icon: Users, text: "3,000+ Successful Surgeries" },
  { icon: Award, text: "99.4% Graft Survival Rate" },
];

const clinicLocations = [
  { name: "Delhi", href: "/clinics#delhi" },
  { name: "Bhubaneswar", href: "/clinics#bhubaneswar" },
  { name: "Chennai", href: "/clinics#chennai" },
  { name: "Uttarakhand", href: "/clinics#uttarakhand" },
];

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const { openConsultation } = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleConsultationClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      openConsultation();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const desktopNav: NavDropdown[] = navigationHierarchy;

  return (
    <>
      {/* ════ ROW 1: TOP TRUST AUTO-SCROLL STRIP (Marquee Ticker) ════ */}
      <div className="bg-[#053733] text-white/90 overflow-hidden border-b border-white/10 select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap py-1.5 text-[11px] sm:text-[11.5px] tracking-[0.04em] font-medium">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-6 sm:gap-8 px-4 flex-shrink-0">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
                    <span className="flex items-center gap-1.5 text-white/90">
                      <Icon className="w-3 h-3 text-[#C6A15B] flex-shrink-0" />
                      <span>{item.text}</span>
                    </span>
                    <span className="text-white/25 ml-4 sm:ml-6 text-xs font-light">|</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ════ ROW 2: BRAND LOGO + CALL EXPERT + BOOK APPOINTMENT (WEBSITE THEME BG) ════ */}
      {/* On desktop: relative in document flow so it SCROLLS AWAY naturally with page scroll */}
      {/* On mobile: sticky top-0 so mobile users always have access to menu & CTA */}
      <div className="sticky top-0 xl:relative z-40 bg-[#FAF8F5] border-b border-[#0B4F4A]/8 py-2 sm:py-2.5 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* AlloRoots Logo */}
          <Link href="/" className="flex-shrink-0 relative w-[150px] sm:w-[170px] h-[36px] sm:h-[40px]">
            <Image
              src={siteImages.logo.main}
              alt="AlloRoots Hair Restoration"
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 150px, 170px"
              className="object-contain object-left"
            />
          </Link>

          {/* Right Side Info & Action */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            
            {/* Phone + Talk to Experts */}
            <a
              href="tel:+919717503031"
              className="hidden md:flex items-center gap-2.5 text-left group"
            >
              <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#EAF3F1] group-hover:bg-[#073A37] flex items-center justify-center text-[#073A37] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#073A37] group-hover:text-white transition-colors" />
              </div>
              <div className="leading-tight">
                <span className="block text-[14px] sm:text-[14.5px] font-semibold text-[#073A37] tracking-tight group-hover:text-[#D87852] transition-colors">
                  +91 9717503031
                </span>
                <span className="block text-[10.5px] sm:text-[11px] text-[#6A827F] font-normal">
                  Talk to Our Experts
                </span>
              </div>
            </a>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-gray-200 hidden md:block" />

            {/* Book Appointment CTA Button */}
            <button
              type="button"
              onClick={handleConsultationClick}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5.5 py-1.5 sm:py-2 rounded-full bg-[#073A37] hover:bg-[#0B4F4A] text-white text-[11.5px] sm:text-[13.5px] font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex-shrink-0"
            >
              <CalendarDays className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white flex-shrink-0" />
              <span className="sm:hidden">Book Slot</span>
              <span className="hidden sm:inline">Book Appointment</span>
              <ArrowRight className="hidden sm:inline w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white border border-[#0B4F4A]/10 hover:bg-[#0B4F4A]/10 text-[#073A37] transition-colors cursor-pointer flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>

      {/* ════ ROW 3: STICKY FLOATING NAVBAR (STICKS TO TOP ON SCROLL) ════ */}
      <header className="hidden xl:block sticky top-0 z-50 transition-all duration-300">
        <div className={`transition-all duration-300 ${
          scrolled ? "bg-[#FAF8F5]/90 backdrop-blur-md py-1 border-b border-[#0B4F4A]/10 shadow-sm" : "py-1.5 bg-transparent"
        }`}>
          <div className="w-fit max-w-fit mx-auto px-4">
            <div className={`bg-white rounded-2xl border border-[#0B4F4A]/10 px-3.5 py-1.5 sm:py-2 transition-all duration-300 ${
              scrolled ? "shadow-[0_10px_30px_rgba(7,58,55,0.12)] border-[#0B4F4A]/20" : "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            }`}>
              
              {/* Navigation Links Bar */}
              <nav className="flex items-center justify-center gap-1 xl:gap-1.5 2xl:gap-2">
                
                {/* Home Button with Icon */}
                <Link
                  href="/"
                  className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#EAF3F1] text-[#073A37] font-semibold text-[13.5px] transition-all flex-shrink-0"
                >
                  <div className="w-5.5 h-5.5 rounded-lg bg-white flex items-center justify-center text-[#073A37] shadow-2xs">
                    <Home className="w-3 h-3" />
                  </div>
                  <span>Home</span>
                  {/* Subtle active indicator bar */}
                  <span className="absolute -bottom-2 left-2.5 right-2.5 h-[2px] bg-[#073A37] rounded-full" />
                </Link>

                {/* Dropdown Links */}
                {desktopNav.map((item) => (
                  <div
                    key={item.label}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[13.5px] font-semibold transition-colors ${
                        activeDropdown === item.label
                          ? "text-[#073A37] bg-[#073A37]/6"
                          : "text-[#202A28] hover:text-[#073A37]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {(item.simpleLinks || item.categories) && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-250 ${
                            activeDropdown === item.label ? "rotate-180 text-[#073A37]" : "text-[#7B8F8C]"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu Container */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (item.simpleLinks || item.categories) && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className={
                            item.label === "Services"
                              ? "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[920px] max-w-[90vw]"
                              : item.isMega
                              ? "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[820px]"
                              : "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[300px]"
                          }
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(11,79,74,0.18)] border border-[#0B4F4A]/10 overflow-hidden">
                            {item.label === "Services" ? (
                              <ServicesMegaMenu />
                            ) : item.isMega ? (
                              <MegaMenuContent categories={item.categories || []} />
                            ) : (
                              <SimpleDropdown links={item.simpleLinks || []} />
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Book Appointment CTA Button inside Sticky Floating Navbar (Shows ONLY on scroll) */}
                <AnimatePresence>
                  {scrolled && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9, width: 0 }}
                      animate={{ opacity: 1, scale: 1, width: "auto" }}
                      exit={{ opacity: 0, scale: 0.9, width: 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      type="button"
                      onClick={handleConsultationClick}
                      className="overflow-hidden inline-flex items-center gap-1.5 ml-1 xl:ml-1.5 px-3.5 py-1.5 rounded-xl bg-[#073A37] hover:bg-[#0B4F4A] text-white text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.01] cursor-pointer group flex-shrink-0"
                    >
                      <CalendarDays className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                      <span className="whitespace-nowrap">Book Appointment</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-0.5 transition-transform duration-300" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </nav>

            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE DRAWER MENU ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm xl:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[88%] max-w-[390px] bg-white shadow-2xl overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#0B4F4A]/8 bg-[#FAF7F1]">
                <Link href="/" className="relative w-[140px] h-[38px]" onClick={() => setMobileOpen(false)}>
                  <Image
                    src={siteImages.logo.main}
                    alt="AlloRoots"
                    fill
                    unoptimized
                    sizes="140px"
                    className="object-contain object-left"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#0B4F4A]/10 text-[#073A37] cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Mobile Direct Contact Bar */}
              <div className="p-4 bg-white border-b border-[#0B4F4A]/8 flex items-center justify-between">
                <a href="tel:+919717503031" className="flex items-center gap-2.5 text-[#073A37]">
                  <div className="w-8 h-8 rounded-full bg-[#EAF3F1] flex items-center justify-center text-[#073A37]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[13.5px] font-semibold leading-tight">+91 9717503031</span>
                    <span className="block text-[10.5px] text-[#6A827F]">Talk to Our Experts</span>
                  </div>
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleConsultationClick();
                  }}
                  className="px-4 py-2 rounded-full bg-[#073A37] text-white text-[12px] font-semibold"
                >
                  Book Consult
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#EAF3F1] text-[#073A37] font-semibold text-[15px]"
                >
                  <Home className="w-4 h-4 text-[#073A37]" />
                  <span>Home</span>
                </Link>

                {navigationHierarchy.map((item) => (
                  <div key={item.label} className="border-b border-gray-100/60 pb-1">
                    {item.simpleLinks || item.categories ? (
                      <button
                        type="button"
                        onClick={() => {
                          setMobileSubmenu(mobileSubmenu === item.label ? null : item.label);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[15px] font-semibold text-[#1E2E2C] hover:bg-[#FAF7F1] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#5A7370] transition-transform duration-300 ${
                            mobileSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={() => setMobileOpen(false)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[15px] font-semibold text-[#1E2E2C] hover:bg-[#FAF7F1] transition-colors"
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}

                    <AnimatePresence>
                      {mobileSubmenu === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {item.isMega && item.categories?.map((cat) => (
                              <div key={cat.categoryTitle} className="pt-2">
                                <p className="px-3 text-[11px] uppercase tracking-wider font-bold text-[#C9A45C]">
                                  {cat.categoryTitle}
                                </p>
                                {cat.links.map((link) => (
                                  <Link
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-1.5 text-[13.5px] font-medium text-[#4A6360] hover:text-[#073A37]"
                                  >
                                    {link.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            {!item.isMega && item.simpleLinks?.map((link) => (
                              <Link
                                key={link.title}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-1.5 text-[13.5px] font-medium text-[#4A6360] hover:text-[#073A37]"
                              >
                                {link.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile Footer Clinic Cities */}
              <div className="p-4 bg-[#FAF7F1] border-t border-[#0B4F4A]/8">
                <p className="text-[11.5px] uppercase tracking-wider font-semibold text-[#073A37] mb-2 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D87852]" />
                  <span>Clinics Across India</span>
                </p>
                <div className="grid grid-cols-2 gap-2 text-[12.5px] text-[#4A6360]">
                  {clinicLocations.map((c) => (
                    <Link
                      key={c.name}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-[#0B4F4A]/10 font-semibold text-center hover:text-[#073A37]"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ────────────────── HELPER MEGA MENU COMPONENTS ──────────────────
function SimpleDropdown({ links }: { links: { title: string; desc?: string; href: string; badge?: string }[] }) {
  return (
    <div className="p-3 space-y-1">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="flex items-start justify-between p-3 rounded-xl hover:bg-[#FAF7F1] transition-colors group"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-[#1E2E2C] group-hover:text-[#073A37]">
                {link.title}
              </span>
              {link.badge && (
                <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#D87852]/10 text-[#D87852] font-semibold">
                  {link.badge}
                </span>
              )}
            </div>
            {link.desc && <p className="text-[12px] text-[#8A9E9B] mt-0.5">{link.desc}</p>}
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-[#8A9E9B] group-hover:text-[#073A37] group-hover:translate-x-1 transition-all mt-1 opacity-0 group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}

function MegaMenuContent({ categories }: { categories: MegaCategory[] }) {
  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {categories.map((cat) => (
        <div key={cat.categoryTitle}>
          <h4 className="text-[12px] uppercase tracking-wider font-semibold text-[#C9A45C] mb-3 pb-2 border-b border-[#0B4F4A]/8">
            {cat.categoryTitle}
          </h4>
          <div className="space-y-1">
            {cat.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block p-2 rounded-lg hover:bg-[#FAF7F1] transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[13.5px] font-semibold text-[#1E2E2C] group-hover:text-[#073A37]">
                    {link.title}
                  </span>
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#D87852]/10 text-[#D87852] font-semibold">
                      {link.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11.5px] text-[#8A9E9B] mt-0.5 line-clamp-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
