"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home, ShieldCheck, Sparkles, Star, Phone, Calendar, ArrowRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TrustChip {
  label: string;
  icon?: React.ReactNode;
}

interface PageHeaderBannerProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  trustChips?: TrustChip[];
  bgImage?: string;
  onOpenConsultation?: () => void;
  primaryActionLabel?: string;
  primaryActionHref?: string;
  showStatCard?: boolean;
  statCardTitle?: string;
  statCardValue?: string;
  statCardSubtext?: string;
}

export default function PageHeaderBanner({
  badge,
  badgeIcon,
  title,
  highlightText,
  description,
  breadcrumbs,
  trustChips = [
    { label: "100% AIIMS Doctor-Led" },
    { label: "99.4% Graft Survival" },
    { label: "Zero Pain Ring Block" },
    { label: "0% Interest EMI" },
  ],
  bgImage,
  onOpenConsultation,
  primaryActionLabel = "Book Consultation",
  primaryActionHref,
  showStatCard = true,
  statCardTitle = "Verified AIIMS Clinical Standard",
  statCardValue = "99.4%",
  statCardSubtext = "Root survival with bio-enhanced ATP baths",
}: PageHeaderBannerProps) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#021A18] via-[#042926] to-[#073A37] text-white border-b border-[#C6A15B]/25">
      {/* ─── Ambient Lighting Spheres ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[400px] bg-[#C6A15B]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[350px] bg-[#D87852]/12 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#0B4F4A]/40 rounded-full blur-[160px]" />

        {/* Delicate Medical Grid Backdrop */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Optional background image with luxury vignette */}
        {bgImage && (
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <Image
              src={bgImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center filter saturate-150"
            />
          </div>
        )}
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Breadcrumb Navigation ─── */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#E6C687] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]/60" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#E6C687] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#E6C687] font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ─── Main Content Column (7 or 8 cols) ─── */}
          <div className={showStatCard ? "lg:col-span-8 space-y-6" : "lg:col-span-12 max-w-4xl space-y-6"}>
            
            {/* Top Clinical Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C6A15B]/35 shadow-sm">
              {badgeIcon || <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />}
              <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#E6C687]">
                {badge}
              </span>
            </div>

            {/* Editorial Serif Heading */}
            <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-serif font-normal text-white leading-[1.08] tracking-[-0.02em]">
              {title}{" "}
              {highlightText && (
                <span className="text-[#E6C687] italic font-serif block sm:inline">
                  {highlightText}
                </span>
              )}
            </h1>

            {/* High Readability Subtitle */}
            <p className="text-[16px] sm:text-[18px] text-white/80 leading-relaxed font-light max-w-3xl">
              {description}
            </p>

            {/* Trust Chips Bar */}
            {trustChips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {trustChips.map((chip, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.2 rounded-full bg-white/6 hover:bg-white/10 border border-white/12 text-[12px] sm:text-[12.5px] font-medium text-white/90 transition-colors"
                  >
                    {chip.icon || <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />}
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              {onOpenConsultation ? (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D87852] hover:bg-[#c46844] text-white font-bold text-[14px] transition-all duration-300 shadow-xl shadow-[#D87852]/30 hover:scale-[1.02] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{primaryActionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : primaryActionHref ? (
                <Link
                  href={primaryActionHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D87852] hover:bg-[#c46844] text-white font-bold text-[14px] transition-all duration-300 shadow-xl shadow-[#D87852]/30 hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{primaryActionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : null}

              <a
                href="tel:+919717503031"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold text-[14px] backdrop-blur-md transition-all hover:border-white/40"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <span>+91 9717503031</span>
              </a>
            </div>

          </div>

          {/* ─── Right Featured Credential / Stat Card (4 cols) ─── */}
          {showStatCard && (
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white/12 to-white/5 border border-white/18 backdrop-blur-xl shadow-2xl space-y-5">
                
                {/* Doctor / Facility Micro Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse" />
                    <span className="text-[11.5px] uppercase tracking-wider font-bold text-white/80">
                      Center of Excellence
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#FBBF24]">
                    <Star className="w-3.5 h-3.5 fill-[#FBBF24]" />
                    <span className="text-[12px] font-bold text-white">5.0 Star</span>
                  </div>
                </div>

                {/* Big Stat Value */}
                <div>
                  <span className="text-[44px] sm:text-[50px] font-serif font-normal text-[#E6C687] leading-none block">
                    {statCardValue}
                  </span>
                  <p className="text-[14px] font-semibold text-white mt-1">
                    {statCardTitle}
                  </p>
                  <p className="text-[12px] text-white/65 mt-1 leading-relaxed">
                    {statCardSubtext}
                  </p>
                </div>

                {/* Key Guarantees */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-[12px] text-white/85">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                    <span>Surgeries personally led by Dr. Alok Sahoo (AIIMS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                    <span>Hospital-grade cleanroom HEPA OT suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                    <span>Clinics in Delhi, Bhubaneswar, Chennai & UK</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
