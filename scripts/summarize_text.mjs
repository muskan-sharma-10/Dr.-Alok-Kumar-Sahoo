import fs from 'fs';

const text = JSON.parse(fs.readFileSync('scraped/extracted_text.json', 'utf-8'));

for (const [page, items] of Object.entries(text)) {
  console.log(`\n=================== PAGE: ${page.toUpperCase()} ===================`);
  const headings = items.filter(i => i.tag.startsWith('h'));
  console.log('--- HEADINGS ---');
  headings.forEach(h => console.log(`[${h.tag.toUpperCase()}] ${h.text}`));

  console.log('\n--- SAMPLE PARAGRAPHS / POINTS ---');
  const paragraphs = items.filter(i => i.tag === 'p' || i.tag === 'li').slice(0, 15);
  paragraphs.forEach(p => console.log(`[${p.tag}] ${p.text.slice(0, 120)}...`));
}
