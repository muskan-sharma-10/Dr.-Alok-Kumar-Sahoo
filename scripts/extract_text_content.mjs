import fs from 'fs';
import path from 'path';

function stripTags(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeadingsAndParagraphs(html) {
  const items = [];
  const regex = /<(h[1-6]|p|li|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const tag = match[1].toLowerCase();
    const text = stripTags(match[2]);
    if (text.length > 2 && !text.includes('var ctPublic') && !text.includes('dataLayer')) {
      items.push({ tag, text });
    }
  }
  return items;
}

const files = fs.readdirSync('scraped').filter(f => f.endsWith('.html'));
const extracted = {};

for (const f of files) {
  const name = f.replace('.html', '');
  const html = fs.readFileSync(path.join('scraped', f), 'utf-8');
  extracted[name] = extractHeadingsAndParagraphs(html);
}

fs.writeFileSync('scraped/extracted_text.json', JSON.stringify(extracted, null, 2));
console.log('Saved extracted text from all pages to scraped/extracted_text.json');
