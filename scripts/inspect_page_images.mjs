import fs from 'fs';

const data = JSON.parse(fs.readFileSync('scraped/page_images_data.json', 'utf-8'));

for (const [page, pInfo] of Object.entries(data)) {
  console.log(`=== Page: ${page} (Total images: ${pInfo.imgWithAlt.length}) ===`);
  pInfo.imgWithAlt.slice(0, 15).forEach((img, i) => {
    console.log(`  [${i+1}] ALT: "${img.alt}" => URL: ${img.src}`);
  });
}
