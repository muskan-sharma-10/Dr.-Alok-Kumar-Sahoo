import fs from 'fs';

const html = fs.readFileSync('scraped/alloroots-reviews.html', 'utf-8');

const regex = /wp-google-name[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null && count < 6) {
  count++;
  console.log(`\n=== REVIEW ${count} RAW BLOCK ===`);
  console.log(m[0].replace(/<[^>]+>/g, ' | ').replace(/\s+/g, ' '));
}
