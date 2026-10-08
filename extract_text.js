const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\sw\\.gemini\\antigravity-ide\\brain\\fe0b3165-79e2-416b-b968-82219715cf54\\.system_generated\\steps\\4\\content.md', 'utf8');

// Let's strip scripts, styles
let cleaned = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
cleaned = cleaned.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

// Extract textual blocks
const blocks = [];
const pMatches = [...cleaned.matchAll(/<(p|h1|h2|h3|h4|h5|h6|li|blockquote|span)[^>]*>([\s\S]*?)<\/\1>/gi)];
pMatches.forEach(m => {
  const t = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (t && t.length > 20 && !t.includes('{') && !t.includes('var ')) {
    blocks.push(t);
  }
});

fs.writeFileSync('d:\\alloroots\\site_texts.json', JSON.stringify(Array.from(new Set(blocks)), null, 2));
console.log('Total unique text blocks:', new Set(blocks).size);
