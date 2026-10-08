import { siteImages } from "./siteImages";

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  role: string;
  qualifications: string;
  institution: string;
  experience: string;
  bio: string;
  specializations: string[];
  achievements: string[];
  image: string;
  isChiefSurgeon?: boolean;
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-alok",
    slug: "dr-alok-kumar-sahoo",
    name: "Dr. Alok Kumar Sahoo",
    role: "Chief Hair Transplant Surgeon & Founder",
    qualifications: "MBBS, MD (Dermatology & Venereology, AIIMS New Delhi)",
    institution: "AIIMS (All India Institute of Medical Sciences), New Delhi",
    experience: "10+ Years Dedicated Experience",
    bio: "Dr. Alok Kumar Sahoo is the Chief Hair Transplant Surgeon at AlloRoots. Having completed his post-graduation (MD) from the All India Institute of Medical Sciences (AIIMS), New Delhi, and serving as an Ex-Senior Resident at AIIMS Delhi, he has personally performed over 3,000+ hair restorations with an industry-leading graft viability rate. He specializes in Realtime Bio-Enhanced FUE, natural hairline design, and complex corrective hair restoration.",
    specializations: [
      "Realtime Bio-Enhanced FUE Hair Transplantation",
      "Artistic Natural Hairline Design & Micro-Slit Implantation",
      "Failed / Depleted Hair Transplant Repair",
      "Mega & Giga Session Hair Restoration",
      "Beard, Moustache & Eyebrow Reconstruction",
      "Growth Factor Concentrate (GFC) & Autologous PRF",
    ],
    achievements: [
      "AIIMS New Delhi Post-Graduate Alumnus (MD Dermatology)",
      "Ex-Senior Resident, Department of Dermatology, AIIMS New Delhi",
      "Over 3,000+ successful hair restoration procedures completed",
      "Pioneer of Realtime Bio-Enhanced FUE with 99.4% graft survival",
      "100% doctor-led extraction and implantation guarantee",
    ],
    image: siteImages.doctors.drAlok,
    isChiefSurgeon: true,
  },
  {
    id: "dr-karthik",
    slug: "dr-karthik-l",
    name: "Dr. Karthik L",
    role: "Senior Hair Transplant Surgeon & Dermatologist",
    qualifications: "MBBS, MD (AIIMS, New Delhi), DNB, MRCP (SCE) Dermatology",
    institution: "AIIMS, New Delhi",
    experience: "6+ Years Experience",
    bio: "Dr. Karthik L is an AIIMS New Delhi MD alumnus and Ex-Senior Resident at AIIMS New Delhi. With dual international qualifications including MRCP (SCE) Dermatology and DNB, he brings surgical precision in high-density graft placement, temple angle restoration, and regenerative scalp therapies.",
    specializations: [
      "High Density Micro-FUE Implantation",
      "Frontal Hairline Feathering & Single Graft Placement",
      "Non-Trim & Long Hair FUE",
      "Advanced Dermapen & Mesotherapy",
    ],
    achievements: [
      "MBBS, MD from AIIMS New Delhi",
      "DNB & MRCP (SCE) Dermatology Certified",
      "Ex-Senior Resident at AIIMS New Delhi",
    ],
    image: siteImages.doctors.drKarthik,
  },
  {
    id: "dr-sanjay",
    slug: "dr-sanjay-singh",
    name: "Dr. Sanjay Singh",
    role: "Consultant Hair Transplant Surgeon & Cosmetologist",
    qualifications: "MBBS, MD (AIIMS, New Delhi)",
    institution: "AIIMS, New Delhi",
    experience: "11+ Years Experience",
    bio: "Dr. Sanjay Singh is a veteran dermatologist and hair transplant surgeon with over 11 years of clinical mastery. Trained at AIIMS New Delhi, he has extensive expertise in facial hair restoration (beard, moustache, and eyebrow transplants) and complex crown whorl reconstructions.",
    specializations: [
      "Beard & Moustache Reconstruction",
      "Crown Whorl & Swirl Angle Restoration",
      "Body Hair Extraction (BHT - Beard to Scalp)",
      "Male Pattern Baldness Management",
    ],
    achievements: [
      "11+ Years of Surgical & Clinical Experience",
      "MBBS, MD from AIIMS New Delhi",
      "Specialist in High-Density Facial Hair Restoration",
    ],
    image: siteImages.doctors.drSanjay,
  },
  {
    id: "dr-utpal",
    slug: "dr-utpal-patel",
    name: "Dr. Utpal Patel",
    role: "Hair Transplant Surgeon & Dermatological Specialist",
    qualifications: "MBBS, MD (AIIMS, New Delhi)",
    institution: "AIIMS, New Delhi",
    experience: "8+ Years Experience",
    bio: "Dr. Utpal Patel completed his MD at AIIMS New Delhi with focused research on modern dermatological and cosmetic procedures. He specializes in regenerative follicle biology, autologous Growth Factor Concentrate (GFC), and delicate eyebrow micro-grafting.",
    specializations: [
      "Growth Factor Concentrate (GFC) & i-PRF Therapy",
      "Eyebrow & Eyelash Micro-Transplantation",
      "Scalp Micropigmentation (SMP) Artistry",
      "Dermal Papilla Follicle Rejuvenation",
    ],
    achievements: [
      "8+ Years Surgical Experience",
      "MBBS, MD from AIIMS New Delhi",
      "MD Thesis Dissertation on Advanced Cosmetic Procedures",
    ],
    image: siteImages.doctors.drUtpal,
  },
  {
    id: "dr-iftekhar",
    slug: "dr-iftekhar-khan",
    name: "Dr. Iftekhar Khan",
    role: "Hair Transplant Surgeon & Clinical Dermatologist",
    qualifications: "MBBS, MD (AIIMS, New Delhi), MRCP SCE (Dermatology)",
    institution: "AIIMS, New Delhi",
    experience: "6+ Years Experience",
    bio: "Dr. Iftekhar Khan is an AIIMS New Delhi MD alumnus with MRCP SCE certification in Dermatology. He has served as Senior Resident in the Department of Dermatology at AIIMS Delhi, specializing in trichology diagnostics, microscopic graft preservation, and female diffuse thinning treatments.",
    specializations: [
      "Female Hair Transplant & Ludwig Thinning Restoration",
      "Microscopic Graft Extraction & Zero-Transection FUE",
      "Exosome & Stromal Vascular Fraction (SVF) Therapy",
      "Corrective Scar Camouflage",
    ],
    achievements: [
      "Senior Resident in Dermatology at AIIMS New Delhi",
      "MBBS, MD (AIIMS New Delhi) & MRCP SCE (Dermatology)",
      "Expert in Microscopic Follicular Unit Dissection",
    ],
    image: siteImages.doctors.drIftekhar,
  },
];
