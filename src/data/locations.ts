import { siteImages } from "./siteImages";

export interface ClinicLocation {
  id: string;
  city: string;
  state: string;
  name: string;
  address: string;
  landmark: string;
  pincode: string;
  phone: string;
  email: string;
  hours: string;
  googleMapUrl: string;
  image: string;
  features: string[];
}

export const locationsData: ClinicLocation[] = [
  {
    id: "delhi",
    city: "Delhi",
    state: "Delhi NCR",
    name: "AlloRoots Hair Transplant Clinic - Delhi",
    address: "C-26, First Floor, Greater Kailash 1, New Delhi, 110048, India",
    landmark: "Greater Kailash 1 / Near AIIMS New Delhi",
    pincode: "110048",
    phone: "+91 9717503031",
    email: "info@alloroots.com",
    hours: "Mon – Sun: 09:30 AM – 07:30 PM",
    googleMapUrl: "https://maps.google.com/?q=Alloroots+Hair+Transplant+Delhi",
    image: siteImages.clinics.delhi,
    features: [
      "Chief Surgeon Dr. Alok Sahoo Consultations",
      "Realtime Bio-Enhanced FUE Advanced Surgical Suites",
      "Sapphire Micro-Slit Implantation Technology",
      "Private VIP Recovery & Relaxation Rooms",
    ],
  },
  {
    id: "bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    name: "AlloRoots Hair Transplant Clinic - Bhubaneswar",
    address: "2nd Floor, D 1 Square, Nandan Kanan Road, KIIT Square, Patia, Bhubaneswar, Odisha 751024",
    landmark: "KIIT Square, Patia, Bhubaneswar",
    pincode: "751024",
    phone: "+91 9717503031",
    email: "info@alloroots.com",
    hours: "Mon – Sun: 09:30 AM – 07:30 PM",
    googleMapUrl: "https://maps.google.com/?q=Alloroots+Hair+Transplant+Bhubaneswar",
    image: siteImages.clinics.bhubaneswar,
    features: [
      "Odisha's Leading AIIMS Doctor-Led Hair Restoration Centre",
      "Dedicated GFC & Autologous PRF Laboratories",
      "Comprehensive Trichology Diagnostic Unit",
      "0% EMI & Transparent Graft-Based Pricing",
    ],
  },
  {
    id: "uttarakhand",
    city: "Uttarakhand",
    state: "Uttarakhand",
    name: "AlloRoots Hair Transplant Clinic - Uttarakhand",
    address: "Gularbhoj Rd, near The Royal Gym, Dineshpur, Gurunanakpur, Uttarakhand 263160",
    landmark: "Near The Royal Gym, Dineshpur, Gurunanakpur",
    pincode: "263160",
    phone: "+91 9717503031",
    email: "info@alloroots.com",
    hours: "Mon – Sun: 09:30 AM – 07:00 PM",
    googleMapUrl: "https://maps.google.com/?q=Alloroots+Hair+Transplant+Uttarakhand",
    image: siteImages.clinics.uttarakhand,
    features: [
      "Premier Hair Restoration Hub in Uttarakhand",
      "Bio-Enhanced FUE & Stem-Cell Scalp Regrowth",
      "Specialized Female Hairline Restoration",
      "Comprehensive Post-Procedure Follow-Up Protocols",
    ],
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    name: "AlloRoots Hair Transplant Clinic - Chennai",
    address: "39/2, RK Shanmugam Salai, Goutham Colony, K. K. Nagar, Chennai, Tamil Nadu 600078",
    landmark: "Goutham Colony, K. K. Nagar, Chennai",
    pincode: "600078",
    phone: "+91 9717503031",
    email: "info@alloroots.com",
    hours: "Mon – Sun: 09:30 AM – 07:30 PM",
    googleMapUrl: "https://maps.google.com/?q=Alloroots+Hair+Transplant+Chennai",
    image: siteImages.clinics.chennai,
    features: [
      "South India Flagship Hair Restoration Centre",
      "Micro-FUE & Non-Trim Long Hair Transplant",
      "Beard, Eyebrow & Facial Hair Specialists",
      "Multilingual Medical & Patient Support Staff",
    ],
  },
];
