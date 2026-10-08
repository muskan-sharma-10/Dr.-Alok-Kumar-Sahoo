import fs from 'fs';
import path from 'path';

const allorootsRoot = path.join('public', 'images', 'alloroots');

function copyIfSrcExists(srcRel, destRel) {
  const src = path.join(allorootsRoot, srcRel);
  const dest = path.join(allorootsRoot, destRel);
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${srcRel} -> ${destRel}`);
  } else {
    // Search recursively in allorootsRoot
    const filename = path.basename(srcRel);
    const found = findFile(allorootsRoot, filename);
    if (found) {
      fs.copyFileSync(found, dest);
      console.log(`Found and copied ${found} -> ${destRel}`);
    } else {
      console.warn(`Could not find ${srcRel}`);
    }
  }
}

function findFile(dir, name) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      const res = findFile(full, name);
      if (res) return res;
    } else if (item.name === name) {
      return full;
    }
  }
  return null;
}

// 1. Logo
copyIfSrcExists('logo/AlloRoots-Logo-Dark-Horizontal-scaled.webp', 'logo/alloroots-logo.webp');
copyIfSrcExists('logo/cropped-AlloRoots-Logo-Dark-Mark-scaled-1-192x192.webp', 'logo/alloroots-mark.webp');

// 2. Doctors
copyIfSrcExists('general/u2192-Heading-5.webp', 'doctors/dr-alok-kumar-sahoo.webp');
copyIfSrcExists('general/Rectangle-29-1.webp', 'doctors/dr-karthik-l.webp');
copyIfSrcExists('general/Rectangle-30-1.webp', 'doctors/dr-sanjay-singh.webp');
copyIfSrcExists('general/Rectangle-32.webp', 'doctors/dr-utpal-patel.webp');
copyIfSrcExists('general/Rectangle-32-228x300.webp', 'doctors/dr-iftekhar-khan.webp');

// 3. Hero
copyIfSrcExists('hero/Frame-1-1.png', 'hero/alloroots-hero-banner.png');
copyIfSrcExists('hero/alloroots_banner_orange1-1.webp', 'hero/alloroots-hero-orange.webp');
copyIfSrcExists('general/Allo-Roots-Thumbnail.png', 'hero/alloroots-clinic-thumb.png');
copyIfSrcExists('services/Group-23-1.webp', 'hero/about-clinic-hero.webp');
copyIfSrcExists('services/Group-76-3.webp', 'hero/about-clinic-team.webp');
copyIfSrcExists('services/Group-78-1-1024x920.webp', 'hero/about-clinic-excellence.webp');

// 4. Clinics
copyIfSrcExists('general/IMG_4934-1024x683.webp', 'clinics/alloroots-delhi-clinic.webp');
copyIfSrcExists('general/gtftf.webp', 'clinics/alloroots-bhubaneswar-clinic.webp');
copyIfSrcExists('general/Untitled-design-5-5-scaled.webp', 'clinics/alloroots-chennai-clinic.webp');
copyIfSrcExists('general/Untitled-design-4-5-scaled.webp', 'clinics/alloroots-uttarakhand-clinic.webp');

// 5. Results (Before/After)
const resultCases = [
  { src: 'Untitled-design-23-1-1024x511.webp', dest: 'results/case-1-hairline-reconstruction.webp' },
  { src: 'Untitled-design-24-1-1024x511.webp', dest: 'results/case-2-male-pattern-baldness.webp' },
  { src: 'Untitled-design-25-1-1024x511.webp', dest: 'results/case-3-crown-density-restoration.webp' },
  { src: 'Untitled-design-27-2-1024x511.webp', dest: 'results/case-4-bio-enhanced-fue.webp' },
  { src: 'Untitled-design-28-1.webp', dest: 'results/case-5-dense-hairline-advancement.webp' },
  { src: 'Untitled-design-30-768x383.webp', dest: 'results/case-6-grade-5-restoration.webp' },
  { src: 'Untitled-design-34-1024x511.webp', dest: 'results/case-7-beard-transplant-case.webp' },
  { src: 'Untitled-design-40-1-1024x511.webp', dest: 'results/case-8-female-hair-transplant.webp' },
  { src: 'Untitled-design-42-1-1024x511.webp', dest: 'results/case-9-failed-hair-repair.webp' },
  { src: 'Untitled-design-71-1024x511.webp', dest: 'results/case-10-long-hair-fue.webp' },
  { src: 'unnamed-file-12-1024x511.png', dest: 'results/case-11-high-density-pack.png' },
  { src: 'unnamed-file-14-1024x511.png', dest: 'results/case-12-temple-closure.png' },
  { src: 'unnamed-file-16-1024x511.png', dest: 'results/case-13-diffuse-thinning-restoration.png' },
  { src: 'unnamed-file-21-1024x511.png', dest: 'results/case-14-complete-scalp-transformation.png' },
  { src: 'unnamed-file-22-1024x511.png', dest: 'results/case-15-crown-swirl-restoration.png' },
  { src: 'unnamed-file-58-1024x511.png', dest: 'results/case-16-celebrity-hairline-design.png' }
];

for (const r of resultCases) {
  copyIfSrcExists(r.src, r.dest);
}

// 6. News & Media Logos
copyIfSrcExists('logo/ANI-logo-768x576.png', 'news/ani-news.png');
copyIfSrcExists('logo/business-standard-logo-300x37.png', 'news/business-standard.png');
copyIfSrcExists('general/theprint-socialmedia--300x300.png', 'news/the-print.png');
copyIfSrcExists('general/cropped-indian-express-daily-300x300.png', 'news/indian-express.png');
copyIfSrcExists('general/cropped-news-india-talks-300x95.png', 'news/news-india-talks.png');
copyIfSrcExists('general/cropped-india-breaking-buzz-300x118.png', 'news/india-breaking-buzz.png');

console.log('Finished organizing clean assets!');
