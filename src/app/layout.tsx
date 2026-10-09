import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlloRoots — Best Hair Transplant Clinic in India | AIIMS Doctors",
  description:
    "AlloRoots is India's premier hair transplant clinic led by AIIMS New Delhi doctors. Experience Realtime Bio-Enhanced FUE with 99.4% graft survival across Delhi, Bhubaneswar, Chennai & Uttarakhand.",
  keywords: [
    "Hair Transplant India",
    "Best Hair Transplant Clinic in India",
    "Dr Alok Kumar Sahoo",
    "AIIMS Hair Transplant Doctor",
    "Realtime Bio Enhanced FUE",
    "Natural Hairline Design",
    "Delhi Hair Transplant Clinic",
    "Bhubaneswar Hair Transplant Clinic",
    "Chennai Hair Transplant Clinic",
    "Uttarakhand Hair Transplant Clinic",
  ],
  authors: [{ name: "Dr. Alok Kumar Sahoo" }],
  openGraph: {
    title: "AlloRoots — Best Hair Transplant Clinic in India",
    description:
      "Led by AIIMS New Delhi Chief Surgeon Dr. Alok Kumar Sahoo. Premium hair restoration with 99.4% graft survival rate. 4 clinics across India.",
    url: "https://alloroots.com",
    siteName: "AlloRoots Hair Transplant Clinic",
    locale: "en_US",
    type: "website",
  },
};

import FloatingActions from "@/components/FloatingActions";
import CustomCursor from "@/components/CustomCursor";
import IntroAnimation from "@/components/IntroAnimation";
import { ConsultationProvider } from "@/context/ConsultationContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <ConsultationProvider>
          <IntroAnimation />
          <CustomCursor />
          {children}
          <FloatingActions />
        </ConsultationProvider>
      </body>
    </html>
  );
}
