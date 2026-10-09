export interface SubLink {
  title: string;
  desc?: string;
  href: string;
  badge?: string;
  tag?: string;
}

export interface MegaCategory {
  categoryTitle: string;
  iconName?: string;
  links: SubLink[];
}

export interface NavDropdown {
  label: string;
  href?: string;
  isMega?: boolean;
  categories?: MegaCategory[];
  simpleLinks?: SubLink[];
}

export const navigationHierarchy: NavDropdown[] = [
  {
    label: "About Us",
    href: "/about-us",
    simpleLinks: [
      { title: "Our Story & Vision", desc: "AIIMS Alumnus Founded Excellence", href: "/about-us" },
      { title: "Dr. Alok Sahoo", desc: "Chief Hair Transplant Surgeon", href: "/doctors" },
      { title: "Medical Advisory Board", desc: "Expert Dermatologists Panel", href: "/doctors" },
      { title: "Clinical Infrastructure", desc: "State-of-the-art OT & Sterilization", href: "/about-us#infrastructure" },
    ],
  },
  {
    label: "Why Us",
    href: "/#why-us",
    simpleLinks: [
      { title: "Realtime Bio-Enhanced FUE", desc: "90%+ Graft Viability Protocol", href: "/#why-us", badge: "Exclusive" },
      { title: "Natural Hairline Design", desc: "Artistic Direction & Micro-Irregularities", href: "/#why-us" },
      { title: "AIIMS Delhi Specialist Panel", desc: "100% Doctor-Led Surgeries", href: "/doctors" },
      { title: "Holistic Hair Care Approach", desc: "Medical & Regenerative Combination", href: "/#why-us" },
      { title: "Evidence-Based Trichology", desc: "Clinically Proven Research & Results", href: "/#why-us" },
      { title: "0% EMI & Transparent Cost", desc: "Flexible Medical Financing", href: "/#calculator", badge: "0% Interest" },
    ],
  },
  {
    label: "Services",
    href: "/hair-transplant-services",
    isMega: true,
    categories: [
      {
        categoryTitle: "Hair Transplantation",
        links: [
          { title: "Male Pattern Baldness (FUE)", desc: "Norwood Stage 1-7 Precision Restoration", href: "/hair-transplant-services", badge: "Popular" },
          { title: "Female Hair Transplant", desc: "Specialized hairline lowering & crown density", href: "/hair-transplant-services" },
          { title: "Hairline Reconstruction", desc: "Natural feathering & facial framing", href: "/hair-transplant-services" },
          { title: "Failed HT Repair & Revision", desc: "Correcting unnatural pluggy hair transplants", href: "/hair-transplant-services", badge: "Speciality" },
          { title: "Beard & Moustache Transplant", desc: "Full density sharp contouring", href: "/hair-transplant-services" },
          { title: "Eyebrow Restoration", desc: "Delicate single-hair microsurgery", href: "/hair-transplant-services" },
          { title: "Body Hair Transplant (BHT)", desc: "Chest/beard donor extraction for mega cases", href: "/hair-transplant-services" },
          { title: "Crown / Vertex Restoration", desc: "Natural swirl whorl reconstruction", href: "/hair-transplant-services" },
          { title: "Non-Shave & Long Hair FUE", desc: "Zero downtime social-ready procedure", href: "/hair-transplant-services", badge: "VIP" },
          { title: "Scarring Alopecia HT", desc: "Restoration in trauma & burn scar tissue", href: "/hair-transplant-services" },
        ],
      },
      {
        categoryTitle: "Hair Loss & Trichology",
        links: [
          { title: "Male Hair Loss Therapy", desc: "Multi-modal preventive protocols", href: "/hair-transplant-services" },
          { title: "Female Hair Thinning Treatment", desc: "Hormonal & nutritional diagnostic care", href: "/hair-transplant-services" },
          { title: "PRP Therapy (Platelet-Rich)", desc: "Autologous growth concentration", href: "/hair-transplant-services" },
          { title: "Injectable PRF (i-PRF)", desc: "Next-gen fibrin scaffold matrix", href: "/hair-transplant-services", badge: "Advanced" },
          { title: "Growth Factor Concentrate (GFC)", desc: "Pure high-potency cellular activation", href: "/hair-transplant-services", badge: "Top Result" },
          { title: "Mesotherapy Infusions", desc: "Direct peptide & vitamin nourishment", href: "/hair-transplant-services" },
          { title: "Low-Level Laser Therapy (LLLT)", desc: "Photobiomodulation cellular energizer", href: "/hair-transplant-services" },
          { title: "Dermapen Microneedling", desc: "Collagen induction & topical absorption", href: "/hair-transplant-services" },
          { title: "Scalp Micro Pigmentation (SMP)", desc: "Cosmetic 3D follicle density illusion", href: "/hair-transplant-services" },
        ],
      },
      {
        categoryTitle: "Regenerative & Clinical Care",
        links: [
          { title: "Autologous Cellular Micrografts", desc: "Stem-cell rich homologous regeneration", href: "/hair-transplant-services", badge: "Breakthrough" },
          { title: "Stromal Vascular Fraction (SVF)", desc: "Adipose regenerative cellular therapy", href: "/hair-transplant-services" },
          { title: "Exosome Therapy", desc: "Extracellular vesicle signaling boosters", href: "/hair-transplant-services", badge: "New" },
          { title: "ACell + PRP Matrix", desc: "Extracellular matrix biomaterial healing", href: "/hair-transplant-services" },
          { title: "Medical Pharmacotherapy", desc: "Minoxidil, Finasteride, Dutasteride, Biotin", href: "/hair-transplant-services" },
          { title: "Scalp Conditions & Dandruff", desc: "Alopecia Areata, Seborrheic & Folliculitis", href: "/hair-transplant-services" },
          { title: "Laser Hair Reduction", desc: "Painless triple-wavelength body hair removal", href: "/hair-transplant-services" },
        ],
      },
    ],
  },
  {
    label: "Doctors",
    href: "/doctors",
    simpleLinks: [
      { title: "Dr. Alok Sahoo", desc: "MD Dermatology (AIIMS Delhi), 10+ Yrs Exp", href: "/doctors" },
      { title: "Dr. Karthik L", desc: "MBBS, MD (AIIMS Delhi), DNB, MRCP SCE", href: "/doctors" },
      { title: "Dr. Sanjay Singh", desc: "Hair Transplant Surgeon & Cosmetologist (11+ Yrs)", href: "/doctors" },
      { title: "Dr. Utpal Patel", desc: "Dermatologist & Hair Specialist (8+ Yrs)", href: "/doctors" },
      { title: "Dr. Iftekhar Khan", desc: "Ex-Senior Resident Dermatology (AIIMS Delhi)", href: "/doctors" },
    ],
  },
  {
    label: "Celebrity HT",
    href: "/#celebrity-ht",
    simpleLinks: [
      { title: "Bollywood HT Analysis", desc: "Deep dive into actor hairline transformations", href: "/bollywood-celebrity-hair-transplant-analysis", badge: "Trending" },
      { title: "Hollywood HT Analysis", desc: "Techniques used by world-famous icons", href: "/hollywood-celebrity-hair-transplant-analysis" },
      { title: "Cricketer & Athlete Hairlines", desc: "High-density active lifestyle transplants", href: "/#celebrity-ht" },
    ],
  },
  {
    label: "Results",
    href: "/results",
    simpleLinks: [
      { title: "Before & After Case Studies", desc: "16+ High Resolution Verified Patient Transformations", href: "/results" },
      { title: "Interactive Comparison Slider", desc: "Drag & inspect real hairline outcomes", href: "/#results" },
      { title: "High-Density Norwood 5-7 Cases", desc: "Severe baldness full coverage journeys", href: "/results" },
      { title: "Celebrity & Female Cases", desc: "Natural non-detectable results", href: "/results" },
    ],
  },
  {
    label: "Reviews",
    href: "/reviews",
    simpleLinks: [
      { title: "Google Verified Reviews (5.0 ★)", desc: "163+ Authentic 5-Star Patient Ratings", href: "/reviews", badge: "5.0 ★" },
      { title: "Video Testimonials", desc: "Real patients share their life-changing stories", href: "/#testimonials" },
      { title: "Patient Journey Diaries", desc: "Day 1 to Month 12 full progress logs", href: "/reviews" },
    ],
  },
  {
    label: "Clinics",
    href: "/#clinics",
    simpleLinks: [
      { title: "Delhi Flagship Clinic", desc: "C-26, Greater Kailash 1, New Delhi", href: "/hair-transplant-in-delhi" },
      { title: "Bhubaneswar Clinic", desc: "D 1 Square, KIIT Square, Patia, Bhubaneswar", href: "/hair-transplant-in-bhubaneswar" },
      { title: "Chennai Clinic", desc: "RK Shanmugam Salai, K.K. Nagar, Chennai", href: "/hair-transplant-in-chennai" },
      { title: "Uttarakhand Clinic", desc: "Gularbhoj Rd, Dineshpur, Uttarakhand", href: "/hair-transplant-in-uttarakhand" },
    ],
  },
  {
    label: "More",
    href: "/blog",
    simpleLinks: [
      { title: "Hair Restoration Blog", desc: "Evidence-backed hair care guides & clinical insights", href: "/blog" },
      { title: "Frequently Asked Questions", desc: "Procedure timing, recovery, cost & graft counts", href: "/faq" },
      { title: "Cost & 0% EMI Calculator", desc: "Calculate your exact graft requirement online", href: "/#calculator", badge: "Instant" },
      { title: "Contact Us & Appointments", desc: "Reach our clinic coordinators & team", href: "/contact-us" },
      { title: "Franchise & Partner Inquiries", desc: "Join AlloRoots pan-India network", href: "/contact-us" },
      { title: "Medical Tourism in India", desc: "International patient concierge service", href: "/medical-tourism" },
    ],
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];
