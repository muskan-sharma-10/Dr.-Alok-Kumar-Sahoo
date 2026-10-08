const https = require('https');
const fs = require('fs');

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
    'https://alloroots.com/best-hair-transplant-surgeons-in-delhi/',
    'https://alloroots.com/hair-transplant-doctor-in-delhi/',
    'https://alloroots.com/hair-transplant-in-delhi/'
  ];

  for (const p of pages) {
    try {
      const html = await fetchUrl(p);
      const matches = [...html.matchAll(/<img[^>]+(?:alt|title|src)=["'][^"']*(?:alok|sahoo|doctor|surgeon)[^"']*["'][^>]*>/gi)];
      console.log(`Page: ${p} found ${matches.length} matches`);
      matches.forEach(m => console.log(m[0]));
      
      // Also look for any text containing "Alok Kumar Sahoo"
      let idx = 0;
      while ((idx = html.indexOf('Alok', idx)) !== -1) {
        console.log(`[Text near Alok in ${p}]:`, html.substring(Math.max(0, idx - 150), Math.min(html.length, idx + 250)));
        idx += 500;
      }
    } catch (e) {
      console.error(p, e.message);
    }
  }
}

run();
