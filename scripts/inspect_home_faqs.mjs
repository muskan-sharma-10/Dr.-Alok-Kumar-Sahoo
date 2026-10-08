import fs from 'fs';

const html = fs.readFileSync('scraped/home.html', 'utf-8');

function clean(t) {
  return t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const faqIdx = html.indexOf('Frequently Asked Questions');
if (faqIdx !== -1) {
  const faqSection = html.slice(faqIdx, faqIdx + 6000);
  console.log('=== HOMEPAGE FAQ SECTION ===');
  console.log(clean(faqSection));
}
