import fs from 'fs';
import path from 'path';

async function main() {
  const urls = [
    'https://alloroots.com/',
    'https://alloroots.com/about-us/',
    'https://alloroots.com/services/',
    'https://alloroots.com/hair-transplant-result/',
    'https://alloroots.com/alloroots-reviews/',
    'https://alloroots.com/patient-testimonials/',
    'https://alloroots.com/faq/',
    'https://alloroots.com/contact-us/',
    'https://alloroots.com/blog/',
    'https://alloroots.com/hair-transplant-in-delhi/',
    'https://alloroots.com/hair-transplant-in-bhubaneswar/',
    'https://alloroots.com/hair-transplant-in-chennai/',
    'https://alloroots.com/hair-transplant-in-uttarakhand/'
  ];

  const allImages = new Set();
  const pageContents = {};

  for (const url of urls) {
    try {
      console.log(`Fetching ${url}...`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      const slug = url.replace('https://alloroots.com/', '').replace(/\/$/, '') || 'home';
      pageContents[slug] = html;

      // Extract image URLs
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        let src = match[1];
        if (src.startsWith('//')) src = 'https:' + src;
        if (src.startsWith('http')) allImages.add(src);
      }

      // Extract srcset
      const srcsetRegex = /srcset=["']([^"']+)["']/gi;
      while ((match = srcsetRegex.exec(html)) !== null) {
        const parts = match[1].split(',');
        for (const p of parts) {
          const u = p.trim().split(' ')[0];
          if (u.startsWith('http')) allImages.add(u);
        }
      }

      // Extract all wp-content upload images
      const wpRegex = /https?:\/\/[^\s"'<>\)]+wp-content\/uploads\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg)/gi;
      while ((match = wpRegex.exec(html)) !== null) {
        allImages.add(match[0]);
      }
    } catch (e) {
      console.error(`Failed on ${url}:`, e.message);
    }
  }

  if (!fs.existsSync('scraped')) {
    fs.mkdirSync('scraped', { recursive: true });
  }

  fs.writeFileSync('scraped/images_list.json', JSON.stringify(Array.from(allImages), null, 2));
  for (const [k, v] of Object.entries(pageContents)) {
    fs.writeFileSync(`scraped/${k}.html`, v);
  }

  console.log(`Finished scraping! Found ${allImages.size} images across ${urls.length} pages.`);
}

main();
