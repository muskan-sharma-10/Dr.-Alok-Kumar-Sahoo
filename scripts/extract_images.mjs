import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const files = fs.readdirSync('scraped').filter(f => f.endsWith('.html'));
const images = new Set();

for (const f of files) {
  const content = fs.readFileSync(path.join('scraped', f), 'utf-8');
  const wpImgRegex = /https?:\/\/[^\s"'<>\)]+wp-content\/uploads\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg)/gi;
  let match;
  while ((match = wpImgRegex.exec(content)) !== null) {
    images.add(match[0]);
  }
}

console.log(`Extracted ${images.size} unique image URLs from scraped HTML files.`);
const imgArray = Array.from(images);
fs.writeFileSync('scraped/extracted_images.json', JSON.stringify(imgArray, null, 2));

// Print summary by category
console.log('Sample images:');
imgArray.slice(0, 20).forEach(img => console.log(' -', img));
