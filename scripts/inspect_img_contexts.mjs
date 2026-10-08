import fs from 'fs';
import path from 'path';

function inspectPageImages(fileName) {
  const html = fs.readFileSync(path.join('scraped', fileName), 'utf-8');
  console.log(`\n=================== IMAGES IN ${fileName} ===================`);
  
  // Find img tags and surrounding context
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count++;
    const src = match[1];
    const alt = match[2];
    const start = Math.max(0, match.index - 100);
    const end = Math.min(html.length, match.index + 200);
    const snippet = html.slice(start, end).replace(/\s+/g, ' ');
    if (count <= 30) {
      console.log(`\n[${count}] ALT: "${alt}"`);
      console.log(`    SRC: ${src}`);
      console.log(`    SNIPPET: ${snippet.slice(0, 150)}...`);
    }
  }
}

inspectPageImages('home.html');
inspectPageImages('about-us.html');
