"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { siteImages } from "@/data/siteImages";
import { mainNavItems, locationNavItems } from "@/data/navigation";

interface FooterProps {
  onOpenConsultation?: () => void;
}

const serviceLinks = [
  { name: "FUE Hair Transplant", href: "/hair-transplant-services" },
  { name: "Hairline Reconstruction", href: "/hair-transplant-services" },
  { name: "Beard Transplant", href: "/hair-transplant-services" },
  { name: "Female Hair Transplant", href: "/hair-transplant-services" },
  { name: "Failed HT Repair", href: "/hair-transplant-services" },
  { name: "GFC & PRF Therapy", href: "/hair-transplant-services" },
  { name: "PRP Treatment", href: "/hair-transplant-services" },
  { name: "Scalp Micropigmentation", href: "/hair-transplant-services" },
];

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer className="relative bg-[#042926] text-white overflow-hidden">
      {/* Top CTA Strip */}
      <div className="border-b border-white/8">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[20px] font-serif text-white">Ready to start your hair restoration journey?</p>
            <p className="text-[14px] text-white/50 mt-1">Free consultation with AIIMS New Delhi doctors.</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            onClick={onOpenConsultation}
            className="group flex items-center gap-2 px-7 py-3 rounded-xl bg-[#C9A45C] text-[#042926] font-semibold text-[14px] hover:bg-[#E0C98A] transition-all duration-300 cursor-pointer flex-shrink-0"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            <Link href="/" className="relative block w-[150px] h-[40px]">
              <Image
                src={siteImages.logo.main}
                alt="AlloRoots"
                fill
                sizes="150px"
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="text-[13.5px] text-white/60 leading-relaxed max-w-[340px]">
              At AllôRoots, we are a team of experienced dermatologists and hair transplant surgeons, alumni of AIIMS, Delhi; Led by Dr. Alok Sahoo (MBBS, MD AIIMS, New Delhi). We are committed to innovation, providing clinically proven solutions for all hair restoration, with customized plans prescribed exclusively by experienced doctors.
            </p>
            <p className="text-[12.5px] text-white/50 leading-relaxed max-w-[340px]">
              Beyond hair transplants, Alloroots offers an extensive suite of services, including Hair fall treatment, Scalp Micropigmentation, Beard &amp; Eyebrow restoration, regenerative hair treatments, PRP and GFC.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a href="tel:+919717503031" className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-[#C9A45C] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +91 9717503031
              </a>
              <a href="mailto:info@alloroots.com" className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-[#C9A45C] transition-colors">
                <Mail className="w-3.5 h-3.5" />
                info@alloroots.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/alloroots/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-[#C9A45C] hover:text-[#042926] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/alloroots/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-[#C9A45C] hover:text-[#042926] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@alloroots"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-[#C9A45C] hover:text-[#042926] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/alloroots"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-[#C9A45C] hover:text-[#042926] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Nav & Services & Clinics Columns (3 cols from right) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8"
          >
            {/* Quick Links */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-[#C9A45C] mb-4">Quick Links</p>
              <ul className="space-y-2.5">
                {mainNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-white/50 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-[#C9A45C] mb-4">Services</p>
              <ul className="space-y-2.5">
                {serviceLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-white/50 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinics */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-[#C9A45C] mb-4">Our Clinics</p>
              <ul className="space-y-3">
                {locationNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-start gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-white/30 flex-shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-white/50 group-hover:text-white transition-colors">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Appointment CTA */}
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/8">
                <p className="text-[12px] font-semibold text-white/70 mb-2">Need Help?</p>
                <a
                  href="tel:+919717503031"
                  className="group flex items-center gap-2 text-[14px] font-semibold text-[#C9A45C] hover:text-[#E0C98A] transition-colors"
                >
                  Call Now
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[12px] text-white/40"
          >
            Copyright © 2026 Quizox Health care pvt. ltd. All rights reserved. • AlloRoots Hair Transplant Clinic
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 text-[12px] text-white/30"
          >
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-white/60 transition-colors">Sitemap</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
