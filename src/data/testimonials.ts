export interface Testimonial {
  id: string;
  patientName: string;
  date: string;
  rating: number;
  location: string;
  procedure: string;
  quote: string;
  fullReview: string;
  source: "Google Verified Review" | "Patient Experience";
}

export const googleRatingSummary = {
  score: "5.0",
  stars: 5,
  reviewCount: 163,
  platform: "Google Reviews",
};

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    patientName: "Benugopal",
    date: "26 Apr 2024",
    rating: 5,
    location: "AlloRoots Clinic",
    procedure: "Hairline Reconstruction & Bio-FUE",
    quote: "All through the procedure the doctor was there and did all the things like extraction, slit making & implantation by himself.",
    fullReview: "I did my hair reconstruction in Alloroots by Dr Alok Sahoo this week and here is my review: 1. Place was very spacious and was having dedicated rooms for procedure, relaxation & consultation. 2. Ambience was very nice and peaceful. 3. Staffs were very friendly, small to small things were taken care of before asking. 4. Procedure was done with optimum breaks which was very relaxing with chill background music. 5. Doctor was very friendly and very meticulous about the reconstruction. All through the procedure doctor was there and did all the things like extraction, slit making & implantation by himself and after procedure the look was exactly matching the design done on markers.",
    source: "Google Verified Review",
  },
  {
    id: "review-2",
    patientName: "Manas Jeet",
    date: "14 Nov 2024",
    rating: 5,
    location: "Bhubaneswar Clinic",
    procedure: "Hair Transplantation",
    quote: "My hair transplantation went very smooth with small bearable pinchings. Now I am confident about my result. Thank you Dr Alok Sahoo and team!",
    fullReview: "Hi. My self Manas from Talcher, odisha. I did my HT at Alloroots BBSR. Before reaching there I was confused about things like how the procedure may be, but after researching I was confident about the clinic and met Dr Alok Sahoo. My hair transplantation went very smooth with small bearable pinchings which is a normal procedure. The entire experience was very good. Dr. Sahoo is very friendly and all staffs are very supportive. Now I am confident about my result. Thank you Dr Alok Sahoo and team!",
    source: "Google Verified Review",
  },
  {
    id: "review-3",
    patientName: "Asish Kumar Sahu",
    date: "05 Jan 2025",
    rating: 5,
    location: "AlloRoots Clinic",
    procedure: "Bio-Enhanced FUE",
    quote: "Had a very pleasant experience at the clinic. Dr. Alok is very friendly and all staffs are very supportive.",
    fullReview: "Had a very pleasant experience at the clinic. Dr. Alok is very friendly and all staffs are very supportive. The entire hair restoration process was explained clearly and performed with absolute care.",
    source: "Google Verified Review",
  },
  {
    id: "review-4",
    patientName: "Sanjib Patra",
    date: "14 Nov 2024",
    rating: 5,
    location: "Bhubaneswar Clinic",
    procedure: "Hair Transplantation",
    quote: "My hair transplantation went very smoothly at Alloroots, BBSR. The entire experience was very good.",
    fullReview: "My hair transplantation went very smoothly at Alloroots, BBSR. The entire experience was very good and all staffs are very supportive. The hygiene and doctor involvement was top-notch.",
    source: "Google Verified Review",
  },
  {
    id: "review-5",
    patientName: "Subas Barik",
    date: "03 Sep 2024",
    rating: 5,
    location: "Bhubaneswar Clinic",
    procedure: "Hair Restoration Surgery",
    quote: "You feel like your own familiar atmosphere. I like to recommend the best hair transplant doctor in Bhubaneswar.",
    fullReview: "Thanks Alloroot. I am very happy with the service. All team members are very good, well behavior. You feel like your own familiar atmosphere. I like to recommend the best hair transplant doctor in Bhubaneswar.",
    source: "Google Verified Review",
  },
  {
    id: "review-6",
    patientName: "Pratik Nayak",
    date: "24 Aug 2024",
    rating: 5,
    location: "Bhubaneswar Clinic",
    procedure: "Hair Restoration Surgery",
    quote: "I couldn't be happier with the results of my hair transplant! Alloroot has the best hair transplant doctor.",
    fullReview: "I couldn't be happier with the results of my hair transplant! Alloroot has the best hair transplant doctor in Bhubaneswar city. They took the time to understand my concerns and needs, and the procedure was painless and efficient. The staff was incredibly friendly and supportive throughout the entire process.",
    source: "Google Verified Review",
  },
  {
    id: "review-7",
    patientName: "SupesCoding",
    date: "30 Aug 2024",
    rating: 5,
    location: "AlloRoots Clinic",
    procedure: "Scalp & Follicle Treatment",
    quote: "Professional staff, clean environment, and effective treatment. The dermatologist was skilled and addressed my concerns well.",
    fullReview: "Impressed with the Alloroot clinic! Professional staff, clean environment, and effective treatment. The dermatologist was skilled and addressed my concerns well. Recommend this clinic because they have the best doctors.",
    source: "Google Verified Review",
  },
  {
    id: "review-8",
    patientName: "Abhilash Mishra",
    date: "06 Nov 2024",
    rating: 5,
    location: "Odisha Clinic",
    procedure: "Hairline Reconstruction",
    quote: "Staff behaviour 10/10, Doctor 10/10. Highly satisfied with the clinical care.",
    fullReview: "Staff behaviour 10/10, Doctor 10/10. Results awaiting with great confidence. Dr. Alok Sahoo's meticulous approach gave me complete peace of mind.",
    source: "Google Verified Review",
  },
  {
    id: "review-9",
    patientName: "Sunil Sagar Patra",
    date: "06 Nov 2024",
    rating: 5,
    location: "AlloRoots Clinic",
    procedure: "FUE Hair Transplant",
    quote: "The best in Odisha for hair restoration. True AIIMS doctor led expertise.",
    fullReview: "The best in Odisha for hair restoration. Dr. Alok Sahoo and his team maintain international standards in every stage of the surgery.",
    source: "Google Verified Review",
  },
  {
    id: "review-10",
    patientName: "Subham Mohapatra",
    date: "05 Jan 2025",
    rating: 5,
    location: "Bhubaneswar Clinic",
    procedure: "Hairline Reconstruction & FUE",
    quote: "Very supportive staff and Dr. Alok explained the entire procedure in complete detail. Best clinic experience.",
    fullReview: "Had a very pleasant experience at Alloroots clinic. Dr. Alok is very friendly and all staffs are very supportive. The consultation gave me full confidence in the hair restoration plan.",
    source: "Google Verified Review",
  },
];
