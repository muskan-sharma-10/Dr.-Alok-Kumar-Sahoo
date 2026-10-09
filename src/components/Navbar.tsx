"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteImages } from "@/data/siteImages";
import { navigationHierarchy, NavDropdown, MegaCategory } from "@/data/allorootsMegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";
import { useConsultation } from "@/context/ConsultationContext";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
      {/* ─── Trust Marquee Bar ─── */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#073A37] text-white/90 overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap py-[7px]">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-10 px-5">
              {[
                "AIIMS New Delhi Doctors",
                "10+ Years Experience",
                "3,000+ Successful Surgeries",
                "99.4% Graft Survival",
                "100% Doctor-Led Procedures",
                "Natural & Undetectable Results",
                "0% EMI Available",
                "4 Clinics Across India",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-3 text-[11.5px] tracking-[0.08em] uppercase font-medium">
                  <span className="w-1 h-1 rounded-full bg-[#C9A45C]" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── Main Navbar ─── */}
      <header
        className={`fixed top-[29px] left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? "glass-nav-scrolled" : "glass-nav"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-400 ${scrolled ? "h-[64px]" : "h-[72px]"}`}>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative w-[140px] h-[38px] sm:w-[155px] sm:h-[42px]">
              <Image
                src={siteImages.logo.main}
                alt="AlloRoots"
                fill
                priority
                sizes="155px"
                className="object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {desktopNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href || "#"}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13.5px] font-medium tracking-wide transition-colors
                      ${activeDropdown === item.label
                        ? "text-[#0B4F4A] bg-[#0B4F4A]/5"
                        : "text-[#1E2E2C] hover:text-[#0B4F4A]"
                      }`}
                  >
                    {item.label}
                    {(item.simpleLinks || item.categories) && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (item.simpleLinks || item.categories) && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className={item.label === "Services" 
                            ? "fixed top-[70px] left-1/2 -translate-x-1/2 pt-2"
                            : `absolute top-full left-1/2 -translate-x-1/2 pt-2 ${item.isMega ? "w-[820px]" : "w-[300px]"}`}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(11,79,74,0.15)] border border-[#0B4F4A]/8 overflow-hidden">
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
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919717503031"
                data-cursor="cta"
                className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-[#0B4F4A] hover:text-[#C96F4F] transition-colors px-3 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="tracking-wide">+91 9717503031</span>
              </a>

              <button
                type="button"
                onClick={handleConsultationClick}
                data-cursor="cta"
                className="hidden sm:inline-flex items-center justify-center gap-2 w-[158px] h-[48px] rounded-full bg-[#0B4F4A] text-white text-[13.5px] font-medium tracking-wide hover:bg-[#073A37] transition-all duration-300 hover:shadow-lg hover:shadow-[#0B4F4A]/25 whitespace-nowrap group cursor-pointer border border-[#C6A15B]/30"
              >
                <span>Book Consult</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#0B4F4A]/5 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5 text-[#202A28]" /> : <Menu className="w-5 h-5 text-[#202A28]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-black/30 backdrop-blur-sm xl:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[380px] bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#0B4F4A]/8">
                <Link href="/" className="relative w-[130px] h-[36px]" onClick={() => setMobileOpen(false)}>
                  <Image src={siteImages.logo.main} alt="AlloRoots" fill sizes="130px" className="object-contain object-left" />
                </Link>
                <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FAF7F1] cursor-pointer">
                  <X className="w-4.5 h-4.5 text-[#1E2E2C]" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <nav className="p-4 space-y-1">
                {navigationHierarchy.map((item) => (
                  <div key={item.label}>
                    {item.simpleLinks || item.categories ? (
                      <button
                        type="button"
                        onClick={() => {
                          setMobileSubmenu(mobileSubmenu === item.label ? null : item.label);
                        }}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium text-[#1E2E2C] hover:bg-[#FAF7F1] transition-colors cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-[#5A7370] transition-transform duration-300 ${mobileSubmenu === item.label ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={() => setMobileOpen(false)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium text-[#1E2E2C] hover:bg-[#FAF7F1] transition-colors"
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
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-0.5">
                            {item.isMega && item.categories?.map((cat) => (
                              <div key={cat.categoryTitle}>
                                <p className="px-3 py-2 text-[11px] uppercase tracking-[0.1em] font-bold text-[#C9A45C]">{cat.categoryTitle}</p>
                                {cat.links.map((link) => (
                                  <Link
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2 text-[13.5px] text-[#5A7370] hover:text-[#0B4F4A] hover:bg-[#FAF7F1] rounded-md transition-colors"
                                  >
                                    {link.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            {item.simpleLinks?.map((link) => (
                              <Link
                                key={link.title}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2.5 text-[13.5px] text-[#5A7370] hover:text-[#0B4F4A] hover:bg-[#FAF7F1] rounded-md transition-colors"
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

              {/* Mobile CTA */}
              <div className="p-5 mt-4 border-t border-[#0B4F4A]/8">
                <button
                  type="button"
                  onClick={() => { setMobileOpen(false); handleConsultationClick(); }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B4F4A] text-white font-semibold text-[15px] hover:bg-[#073A37] transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Book Free Consultation
                </button>
                <a
                  href="tel:+919717503031"
                  className="flex items-center justify-center gap-2 mt-3 px-5 py-3 rounded-xl border border-[#0B4F4A]/15 text-[#0B4F4A] font-semibold text-[14px] hover:bg-[#FAF7F1] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call +91 9717503031
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Mega Menu Content ─── */
function MegaMenuContent({ categories }: { categories: MegaCategory[] }) {
  return (
    <div className="grid grid-cols-3 gap-0 divide-x divide-[#0B4F4A]/6">
      {categories.map((cat) => (
        <div key={cat.categoryTitle} className="p-5">
          <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-[#C9A45C] mb-3">{cat.categoryTitle}</p>
          <div className="space-y-0.5">
            {cat.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-[#FAF7F1] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1E2E2C] group-hover:text-[#0B4F4A] transition-colors leading-tight">
                    {link.title}
                    {link.badge && (
                      <span className="ml-1.5 inline-block text-[9px] px-1.5 py-0.5 rounded-full bg-[#D87852]/10 text-[#D87852] font-bold uppercase tracking-wider align-middle">
                        {link.badge}
                      </span>
                    )}
                  </p>
                  {link.desc && (
                    <p className="text-[11px] text-[#8A9E9B] mt-0.5 leading-snug">{link.desc}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Simple Dropdown ─── */
function SimpleDropdown({ links }: { links: { title: string; desc?: string; href: string; badge?: string }[] }) {
  return (
    <div className="p-3">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF7F1] transition-colors"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[13.5px] font-medium text-[#1E2E2C] group-hover:text-[#0B4F4A] transition-colors leading-tight">
              {link.title}
              {link.badge && (
                <span className="ml-1.5 inline-block text-[9px] px-1.5 py-0.5 rounded-full bg-[#C9A45C]/10 text-[#C9A45C] font-bold uppercase tracking-wider align-middle">
                  {link.badge}
                </span>
              )}
            </p>
            {link.desc && (
              <p className="text-[11.5px] text-[#8A9E9B] mt-0.5 leading-snug">{link.desc}</p>
            )}
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-[#8A9E9B] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
        </Link>
      ))}
    </div>
  );
}
