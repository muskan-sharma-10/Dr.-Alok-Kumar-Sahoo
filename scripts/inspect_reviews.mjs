import fs from 'fs';

const html = fs.readFileSync('scraped/alloroots-reviews.html', 'utf-8');

function clean(t) {
  return t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Find reviews / feedbacks
const reviewMatches = html.match(/wp-google-feedback[\s\S]*?<\/div>/gi);
console.log('Found google feedback elements:', reviewMatches ? reviewMatches.length : 0);

// Find names and ratings
const nameMatches = html.match(/wp-google-name[\s\S]*?<\/div>/gi);
console.log('Found google name elements:', nameMatches ? nameMatches.length : 0);

// Extract all patient quotes
const quoteMatches = html.match(/<div class="elementor-testimonial__text">([\s\S]*?)<\/div>/gi);
if (quoteMatches) {
  console.log(`Found ${quoteMatches.length} elementor testimonial quotes:`);
  quoteMatches.slice(0, 10).forEach(q => console.log(' - ', clean(q)));
}

// Check JSON or text snippets
const textIdx = html.indexOf('Based on');
if (textIdx !== -1) {
  console.log('Rating snippet:', html.slice(textIdx - 100, textIdx + 300));
}
