import fs from 'fs';

const html = fs.readFileSync('scraped/faq.html', 'utf-8');

function clean(t) {
  return t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

console.log('--- FAQ PAGE CONTENT ---');
// Match accordion titles and contents
const regex = /<(h[1-6]|div|span)[^>]*class=["'][^"']*(?:accordion|toggle|title|faq|question)[^"']*["'][^>]*>([\s\S]*?)<\/\1>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null && count < 30) {
  count++;
  console.log(`[Q ${count}]`, clean(m[2]));
}

// Also check all question-like texts
const allText = clean(html);
const qRegex = /(What|How|Why|Is|Can|When|Do|Are|Who)\s+[^?]+\?/gi;
const questions = html.match(qRegex) || [];
console.log(`Found ${questions.length} questions in FAQ page:`);
Array.from(new Set(questions)).slice(0, 15).forEach((q, idx) => console.log(` ${idx+1}. ${clean(q)}`));
