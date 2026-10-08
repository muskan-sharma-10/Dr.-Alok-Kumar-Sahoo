import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const pages = [
  { slug: 'home', url: 'https://alloroots.com/' },
  { slug: 'about-us', url: 'https://alloroots.com/about-us/' },
  { slug: 'services', url: 'https://alloroots.com/services/' },
  { slug: 'hair-transplant-result', url: 'https://alloroots.com/hair-transplant-result/' },
  { slug: 'alloroots-reviews', url: 'https://alloroots.com/alloroots-reviews/' },
  { slug: 'patient-testimonials', url: 'https://alloroots.com/patient-testimonials/' },
  { slug: 'faq', url: 'https://alloroots.com/faq/' },
  { slug: 'contact-us', url: 'https://alloroots.com/contact-us/' },
  { slug: 'blog', url: 'https://alloroots.com/blog/' },
  { slug: 'delhi', url: 'https://alloroots.com/hair-transplant-in-delhi/' },
  { slug: 'bhubaneswar', url: 'https://alloroots.com/hair-transplant-in-bhubaneswar/' },
  { slug: 'chennai', url: 'https://alloroots.com/hair-transplant-in-chennai/' },
  { slug: 'uttarakhand', url: 'https://alloroots.com/hair-transplant-in-uttarakhand/' }
];

if (!fs.existsSync('scraped')) fs.mkdirSync('scraped', { recursive: true });

console.log('--- Step 1: Downloading HTML pages via curl ---');
const allFoundImages = new Set();

for (const p of pages) {
  const outFile = path.join('scraped', `${p.slug}.html`);
  console.log(`Downloading ${p.url} -> ${outFile}...`);
  try {
    execSync(`curl.exe -s -L --max-time 30 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0" "${p.url}" -o "${outFile}"`);
    const content = fs.readFileSync(outFile, 'utf-8');
    console.log(`  Saved ${content.length} bytes`);

    // Match all image URLs
    const wpImgRegex = /https?:\/\/[^\s"'<>\)]+wp-content\/uploads\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg)/gi;
    let match;
    while ((match = wpImgRegex.exec(content)) !== null) {
      allFoundImages.add(match[0]);
    }

    const genericImgRegex = /https?:\/\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg)/gi;
    while ((match = genericImgRegex.exec(content)) !== null) {
      if (match[0].includes('alloroots.com')) {
        allFoundImages.add(match[0]);
      }
    }
  } catch (err) {
    console.error(`  Error downloading ${p.url}:`, err.message);
  }
}

const imgList = Array.from(allFoundImages);
fs.writeFileSync('scraped/all_images_list.json', JSON.stringify(imgList, null, 2));
console.log(`Found total ${imgList.length} unique image URLs from alloroots.com.`);

// Step 2: Categorize and download images
console.log('--- Step 2: Downloading images into organized folders ---');

const categories = [
  'hero',
  'doctors',
  'team',
  'services',
  'results',
  'clinics',
  'testimonials',
  'blog',
  'logo',
  'other'
];

for (const cat of categories) {
  const dir = path.join('public', 'images', 'alloroots', cat);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function categorizeImage(url) {
  const lower = url.toLowerCase();
  const filename = path.basename(lower);
  
  if (lower.includes('logo') || lower.includes('icon') || lower.includes('favicon')) return 'logo';
  if (lower.includes('banner') || lower.includes('hero') || lower.includes('header') || lower.includes('slider')) return 'hero';
  if (lower.includes('dr-') || lower.includes('doctor') || lower.includes('alok') || lower.includes('surgeon')) return 'doctors';
  if (lower.includes('team') || lower.includes('staff')) return 'team';
  if (lower.includes('result') || lower.includes('before') || lower.includes('after') || lower.includes('case') || lower.includes('patient-result') || lower.includes('transplant-result')) return 'results';
  if (lower.includes('review') || lower.includes('testimonial') || lower.includes('patient') || lower.includes('feedback')) return 'testimonials';
  if (lower.includes('clinic') || lower.includes('delhi') || lower.includes('bhubaneswar') || lower.includes('chennai') || lower.includes('dehradun') || lower.includes('uttarakhand') || lower.includes('centre') || lower.includes('center') || lower.includes('interior') || lower.includes('reception')) return 'clinics';
  if (lower.includes('service') || lower.includes('fue') || lower.includes('fut') || lower.includes('prp') || lower.includes('beard') || lower.includes('eyebrow') || lower.includes('giga') || lower.includes('treatment')) return 'services';
  if (lower.includes('blog') || lower.includes('post') || lower.includes('article') || lower.includes('news')) return 'blog';
  return 'other';
}

const downloadedMap = {};

let count = 0;
for (const imgUrl of imgList) {
  try {
    const cat = categorizeImage(imgUrl);
    // Sanitize filename
    let rawFilename = path.basename(new URL(imgUrl).pathname);
    // Remove query params or special chars
    rawFilename = rawFilename.replace(/[^a-zA-Z0-9._-]/g, '_');
    if (!rawFilename || rawFilename.length < 3) rawFilename = `img_${count}.jpg`;

    const destPath = path.join('public', 'images', 'alloroots', cat, rawFilename);
    const relativeWebPath = `/images/alloroots/${cat}/${rawFilename}`;

    if (!fs.existsSync(destPath)) {
      execSync(`curl.exe -s -L --max-time 15 -A "Mozilla/5.0" "${imgUrl}" -o "${destPath}"`);
      const stat = fs.existsSync(destPath) ? fs.statSync(destPath) : null;
      if (!stat || stat.size === 0) {
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      } else {
        count++;
        downloadedMap[imgUrl] = relativeWebPath;
      }
    } else {
      downloadedMap[imgUrl] = relativeWebPath;
    }
  } catch (err) {
    // continue
  }
}

fs.writeFileSync('scraped/downloaded_map.json', JSON.stringify(downloadedMap, null, 2));
console.log(`Successfully downloaded ${count} new images. Total tracked: ${Object.keys(downloadedMap).length}.`);
