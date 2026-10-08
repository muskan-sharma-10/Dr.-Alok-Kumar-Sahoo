import fs from 'fs';

const html = fs.readFileSync('bollywood-data.html', 'utf8');

// The content is usually within article or main tags, or specific div classes in wordpress.
// Let's just extract all h2 and p tags, and img sources inside content.
const matches = [...html.matchAll(/<(h2|p|img)[^>]*>(.*?)<\/\1>|<img[^>]+src="([^">]+)"[^>]*>/gi)];

let output = '';
matches.forEach(m => {
  if (m[0].startsWith('<h2')) {
    output += `\n## ${m[2].replace(/<[^>]+>/g, '').trim()}\n`;
  } else if (m[0].startsWith('<p')) {
    output += `${m[2].replace(/<[^>]+>/g, '').trim()}\n\n`;
  } else if (m[0].startsWith('<img') && m[3]) {
    // Only capture images that look like content
    if (m[3].includes('wp-content/uploads')) {
      output += `[IMAGE: ${m[3]}]\n\n`;
    }
  }
});

fs.writeFileSync('bollywood-extracted.txt', output);
console.log('Extracted to bollywood-extracted.txt');
