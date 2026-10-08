import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const files = fs.readdirSync('scraped').filter(f => f.endsWith('.html'));

const allImages = new Set();
const pageData = {};

for (const f of files) {
  const pageName = f.replace('.html', '');
  const html = fs.readFileSync(path.join('scraped', f), 'utf-8');

  // Find all wp-content images
  const wpImgRegex = /https?:\/\/[^\s"'<>\)]+wp-content\/uploads\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg|avif)/gi;
  let match;
  const pageImages = [];
  while ((match = wpImgRegex.exec(html)) !== null) {
    let url = match[0];
    // Clean trailing punctuation
    url = url.replace(/[,;]+$/, '');
    allImages.add(url);
    pageImages.push(url);
  }

  // Find all img tags with src and alt
  const imgTagRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
  const imgWithAlt = [];
  while ((match = imgTagRegex.exec(html)) !== null) {
    imgWithAlt.push({ src: match[1], alt: match[2] });
  }

  pageData[pageName] = {
    imageCount: pageImages.length,
    imgWithAlt: imgWithAlt.filter(i => i.src.includes('wp-content'))
  };
}

console.log(`Total unique image URLs across all pages: ${allImages.size}`);

const categorized = {
  hero: [],
  doctors: [],
  results: [],
  services: [],
  clinics: [],
  testimonials: [],
  logo: [],
  other: []
};

for (const img of allImages) {
  const l = img.toLowerCase();
  if (l.includes('logo') || l.includes('favicon') || l.includes('icon')) {
    categorized.logo.push(img);
  } else if (l.includes('result') || l.includes('before') || l.includes('after') || l.includes('case') || l.includes('transplant-result') || l.includes('patient-result')) {
    categorized.results.push(img);
  } else if (l.includes('alok') || l.includes('doctor') || l.includes('dr-') || l.includes('surgeon')) {
    categorized.doctors.push(img);
  } else if (l.includes('delhi') || l.includes('bhubaneswar') || l.includes('chennai') || l.includes('uttarakhand') || l.includes('clinic') || l.includes('center') || l.includes('interior') || l.includes('reception')) {
    categorized.clinics.push(img);
  } else if (l.includes('fue') || l.includes('fut') || l.includes('prp') || l.includes('beard') || l.includes('eyebrow') || l.includes('hair-loss') || l.includes('service')) {
    categorized.services.push(img);
  } else if (l.includes('review') || l.includes('testimonial') || l.includes('patient') || l.includes('client')) {
    categorized.testimonials.push(img);
  } else if (l.includes('banner') || l.includes('hero') || l.includes('header') || l.includes('slider') || l.includes('bg')) {
    categorized.hero.push(img);
  } else {
    categorized.other.push(img);
  }
}

console.log('Categories count:', {
  hero: categorized.hero.length,
  doctors: categorized.doctors.length,
  results: categorized.results.length,
  services: categorized.services.length,
  clinics: categorized.clinics.length,
  testimonials: categorized.testimonials.length,
  logo: categorized.logo.length,
  other: categorized.other.length
});

fs.writeFileSync('scraped/categorized_images.json', JSON.stringify(categorized, null, 2));
fs.writeFileSync('scraped/page_images_data.json', JSON.stringify(pageData, null, 2));
