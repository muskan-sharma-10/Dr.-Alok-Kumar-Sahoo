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
  const html = await fetchUrl('https://alloroots.com/');
  const imgTags = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[0]);
  console.log('Total img tags on homepage:', imgTags.length);
  imgTags.slice(0, 30).forEach(t => console.log(t));

  const aboutHtml = await fetchUrl('https://alloroots.com/about-us/');
  const aboutImgTags = [...aboutHtml.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[0]);
  console.log('\nTotal img tags on about-us:', aboutImgTags.length);
  aboutImgTags.forEach(t => console.log(t));
}

run();
