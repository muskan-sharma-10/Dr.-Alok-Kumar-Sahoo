import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const files = fs.readdirSync('scraped').filter(f => f.endsWith('.html'));
const imagesSet = new Set();

for (const f of files) {
  const content = fs.readFileSync(path.join('scraped', f), 'utf-8');
  const wpImgRegex = /https?:\/\/[^\s"'<>\)]+wp-content\/uploads\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg|avif)/gi;
  let match;
  while ((match = wpImgRegex.exec(content)) !== null) {
    let url = match[0].replace(/[,;\)"]+$/, '');
    imagesSet.add(url);
  }
}

const imagesJson = Array.from(imagesSet);
console.log(`Found ${imagesJson.length} unique images across all HTML files. Starting download...`);

const baseDir = path.join('public', 'images', 'alloroots');
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

// Create subfolders
const folders = ['hero', 'doctors', 'results', 'services', 'clinics', 'testimonials', 'logo', 'general'];
for (const f of folders) {
  const d = path.join(baseDir, f);
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function determineFolderAndName(url) {
  const parsed = new URL(url);
  const baseName = path.basename(parsed.pathname);
  const lower = baseName.toLowerCase();

  let folder = 'general';
  if (lower.includes('logo') || lower.includes('favicon') || lower.includes('icon')) {
    folder = 'logo';
  } else if (lower.includes('banner') || lower.includes('slider') || lower.includes('hero') || lower.includes('header') || lower.includes('frame-1')) {
    folder = 'hero';
  } else if (lower.includes('design-2') || lower.includes('design-3') || lower.includes('result') || lower.includes('transplant') || lower.includes('before') || lower.includes('after') || lower.includes('case')) {
    folder = 'results';
  } else if (lower.includes('alok') || lower.includes('dr-') || lower.includes('doctor') || lower.includes('surgeon')) {
    folder = 'doctors';
  } else if (lower.includes('delhi') || lower.includes('bhubaneswar') || lower.includes('chennai') || lower.includes('uttarakhand') || lower.includes('clinic')) {
    folder = 'clinics';
  } else if (lower.includes('fue') || lower.includes('fut') || lower.includes('prp') || lower.includes('beard') || lower.includes('eyebrow') || lower.includes('service') || lower.includes('group-10') || lower.includes('group-7') || lower.includes('group-2') || lower.includes('group-11')) {
    folder = 'services';
  } else if (lower.includes('testimonial') || lower.includes('review') || lower.includes('patient') || lower.includes('feedback')) {
    folder = 'testimonials';
  }

  return { folder, baseName };
}

const downloaded = [];
let idx = 0;

for (const url of imagesJson) {
  idx++;
  const { folder, baseName } = determineFolderAndName(url);
  const destPath = path.join(baseDir, folder, baseName);
  const webPath = `/images/alloroots/${folder}/${baseName}`;

  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
    downloaded.push({ url, local: webPath, folder, baseName });
    continue;
  }

  try {
    execSync(`curl.exe -s -L --max-time 10 -A "Mozilla/5.0" "${url}" -o "${destPath}"`);
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      console.log(`[${idx}/${imagesJson.length}] Downloaded: ${folder}/${baseName} (${fs.statSync(destPath).size} bytes)`);
      downloaded.push({ url, local: webPath, folder, baseName });
    } else {
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
    }
  } catch (err) {
    // continue
  }
}

console.log(`Successfully completed! Total downloaded valid images: ${downloaded.length}`);
fs.writeFileSync('scraped/downloaded_summary.json', JSON.stringify(downloaded, null, 2));
