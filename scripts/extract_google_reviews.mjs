import fs from 'fs';

const html = fs.readFileSync('scraped/alloroots-reviews.html', 'utf-8');

function clean(t) {
  return t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Find each review container
const reviewBlockRegex = /<div[^>]*class=["'][^"']*grw-review-inner[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
let match;
let i = 0;
while ((match = reviewBlockRegex.exec(html)) !== null) {
  i++;
  const block = match[1];
  const nameMatch = block.match(/wp-google-name[^>]*>([\s\S]*?)<\/a>/i) || block.match(/wp-google-name[^>]*>([\s\S]*?)<\/div>/i);
  const textMatch = block.match(/wp-google-feedback[^>]*>([\s\S]*?)<\/div>/i) || block.match(/wp-google-text[^>]*>([\s\S]*?)<\/div>/i);
  const timeMatch = block.match(/wp-google-time[^>]*>([\s\S]*?)<\/div>/i);

  console.log(`\n[Review ${i}]`);
  console.log(`Author: ${nameMatch ? clean(nameMatch[1]) : 'Google User'}`);
  console.log(`Time: ${timeMatch ? clean(timeMatch[1]) : 'Recent'}`);
  console.log(`Feedback: ${textMatch ? clean(textMatch[1]) : ''}`);
}
