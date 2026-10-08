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
  const pages = ['https://alloroots.com/', 'https://alloroots.com/about-us/'];
  const allImgs = new Set();
  for (const p of pages) {
    const html = await fetchUrl(p);
    const regex = /(?:src|data-src|srcset)=["']([^"']+)["']/gi;
    let m;
    while ((m = regex.exec(html)) !== null) {
      const urls = m[1].split(',').map(s => s.trim().split(' ')[0]);
      for (const u of urls) {
        if (u.includes('alloroots.com/wp-content/uploads/')) {
          allImgs.add(u);
        }
      }
    }
  }
  console.log('Unique uploads found:', allImgs.size);
  Array.from(allImgs).sort().forEach(u => console.log(u));
}

run();
