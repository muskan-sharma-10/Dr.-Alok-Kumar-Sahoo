const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const pages = [
    'https://alloroots.com/',
    'https://alloroots.com/about-us/',
    'https://alloroots.com/dr-alok-kumar-sahoo/'
  ];

  for (const page of pages) {
    console.log('--- Checking:', page);
    try {
      const html = await fetchUrl(page);
      const matches = [...html.matchAll(/https:\/\/[^"'\s<>]+\.(?:webp|jpg|jpeg|png)/gi)].map(m => m[0]);
      const filtered = matches.filter(m => /alok|doctor|surgeon|sahoo|team|founder|leader|u2192|Heading/i.test(m));
      console.log('Matches:', [...new Set(filtered)]);
      // Also look for img tags around "Alok"
      const alokIdx = html.indexOf('Alok');
      if (alokIdx !== -1) {
        const snippet = html.substring(Math.max(0, alokIdx - 400), Math.min(html.length, alokIdx + 400));
        console.log('Snippet around Alok:\n', snippet);
      }
    } catch (err) {
      console.error('Error fetching', page, err.message);
    }
  }
}

run();
