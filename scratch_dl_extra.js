const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://alloroots.com/wp-content/uploads/2024/04/Header-%E2%86%92-Heading-5.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Rectangle-29-1.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Rectangle-30-1.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Rectangle-32.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-49-2.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-76-3.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Group-78-1.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-4-2-1.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-23-1.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-44-4.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-47.webp',
  'https://alloroots.com/wp-content/uploads/2024/04/Group-2.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Untitled-design-1-4-scaled.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Untitled-design-16-scaled.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Untitled-design-17-scaled.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Untitled-design-20-scaled.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Untitled-design-4-5-scaled.webp',
  'https://alloroots.com/wp-content/uploads/2024/05/Untitled-design-5-5-scaled.webp',
  'https://alloroots.com/wp-content/uploads/2024/07/alloroots_banner_orange1-1.webp',
  'https://alloroots.com/wp-content/uploads/2024/07/Frame-1-1.png',
];

async function download(url, out) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, out).then(resolve);
      }
      const file = fs.createWriteStream(out);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stat = fs.statSync(out);
        console.log(`Saved ${out} (${stat.size} bytes) from ${url}`);
        resolve();
      });
    }).on('error', err => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  const dir = path.join(__dirname, 'public', 'images', 'alloroots', 'extra');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const u of urls) {
    const filename = path.basename(decodeURIComponent(u)).replace(/[^a-zA-Z0-9.-]/g, '_');
    const outPath = path.join(dir, filename);
    await download(u, outPath);
  }
}

main();
