import fs from 'fs';

const html = fs.readFileSync('scraped/patient-testimonials.html', 'utf-8');

function clean(t) {
  return t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

console.log('--- PATIENT TESTIMONIALS PAGE CONTENT ---');
const headings = html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [];
headings.forEach(h => console.log('H:', clean(h)));

const paras = html.match(/<p[^>]*>[\s\S]*?<\/p>/gi) || [];
paras.slice(0, 20).forEach(p => console.log('P:', clean(p)));
