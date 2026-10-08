const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\sw\\.gemini\\antigravity-ide\\brain\\fe0b3165-79e2-416b-b968-82219715cf54\\.system_generated\\steps\\4\\content.md', 'utf8');

const linkMatches = [...content.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
console.log('=== LINKS ===');
const links = [];
linkMatches.forEach(m => {
  const href = m[1];
  const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text && href && text.length < 60) {
    links.push({ text, href });
  }
});
console.log(JSON.stringify(links.slice(0, 50), null, 2));

console.log('=== HEADINGS ===');
const headings = [...content.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)];
headings.forEach(h => {
  const text = h[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text) console.log(`H${h[1]}: ${text}`);
});

console.log('=== PHONE / EMAIL / ADDRESS ===');
const phones = content.match(/(\+?\d[\d -]{8,}\d)/g);
console.log('Phones:', Array.from(new Set(phones || [])).slice(0, 10));

const emails = content.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
console.log('Emails:', Array.from(new Set(emails || [])));
