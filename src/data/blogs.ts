import { siteImages } from "./siteImages";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogsData: BlogPost[] = [
  {
    id: "b1",
    slug: "realtime-bio-enhanced-fue-vs-traditional-fue",
    title: "Realtime Bio-Enhanced FUE vs Traditional FUE: Why Graft Survival Matters",
    category: "Hair Surgery Science",
    author: "Dr. Alok Kumar Sahoo (AIIMS Delhi)",
    date: "October 2024",
    readTime: "5 min read",
    excerpt: "Understand how storing harvested hair grafts in specialized ATP and GFC nutrient solutions preserves root viability and guarantees 99.4% regrowth.",
    content: `
      Hair transplantation technology has evolved significantly over the past decade. Traditional FUE procedures often place extracted grafts in plain saline solutions where cellular dehydration and ischemia begin within 30 minutes.

      At AlloRoots, our AIIMS-trained surgeons developed the **Realtime Bio-Enhanced FUE** protocol. During extraction, grafts are immersed in an autologous ATP-enriched nutrient bath containing concentrated growth factors (GFC). This keeps dermal papilla stem cells active and hydrated, leading to an unprecedented 99.4% graft survival rate.

      ### Key Takeaways:
      - **Saline vs ATP Preservation:** ATP provides immediate cellular energy to extracted follicles.
      - **Vascularization Rate:** Bio-enhanced grafts anchor into scalp tissue 40% faster.
      - **Natural Density:** Higher graft survival directly yields dense, lifelong hair growth.
    `,
    image: siteImages.hero.aboutHero,
  },
  {
    id: "b2",
    slug: "natural-hairline-design-art-and-science",
    title: "The Art and Science of Natural Hairline Reconstruction",
    category: "Hairline Artistry",
    author: "Dr. Alok Kumar Sahoo (AIIMS Delhi)",
    date: "September 2024",
    readTime: "6 min read",
    excerpt: "How AIIMS dermatologists design age-appropriate, soft, single-graft frontal hairlines matching facial proportions.",
    content: `
      Creating an undetectable hairline requires both surgical precision and fine artistic intuition. A common flaw in low-cost hair transplants is planting multi-hair grafts along the front edge, resulting in a harsh 'doll hair' appearance.

      Our surgical team uses single-graft feathering along the frontal micro-contour. We measure facial thirds—from chin to nose base, nose base to eyebrows, and eyebrows to hairline—ensuring your restored hairline aligns harmoniously with your facial structure.

      ### Hairline Design Principles:
      - **Single-Graft Leading Zone:** Micro-fine single hair grafts placed along the outer 0.5cm edge.
      - **Acute Angle Slitting:** Slits created at 15 to 45-degree angles to match native growth.
      - **Temporal Peak Alignment:** Rebuilding temple points to maintain masculine or feminine facial framing.
    `,
    image: siteImages.results.case1,
  },
  {
    id: "b3",
    slug: "gfc-vs-prp-hair-loss-treatment",
    title: "GFC vs PRP: Which Non-Surgical Treatment Stops Hair Fall Faster?",
    category: "Regenerative Trichology",
    author: "Dr. Utpal Patel",
    date: "August 2024",
    readTime: "4 min read",
    excerpt: "Comparing autologous Growth Factor Concentrate (GFC) and Platelet-Rich Plasma (PRP) for early pattern baldness.",
    content: `
      For patients in early Norwood hair loss stages, surgical restoration may not yet be necessary. Non-surgical regenerative therapies offer a powerful way to halt active hair fall and thicken miniaturized hair shafts.

      While traditional PRP extracts whole platelets, Growth Factor Concentrate (GFC) activates blood platelets in specialized tubes to extract concentrated PDGF, VEGF, and EGF growth factors without red blood cell contamination. This results in higher potency and zero scalp inflammation.
    `,
    image: siteImages.results.case13,
  },
];
