const https = require('https');

https.get('https://alloroots.com/', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Find the first few elementor widgets or images after header
    const matches = [...d.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
    console.log('First 15 images on alloroots.com:');
    matches.slice(0, 15).forEach((m, i) => console.log(i, m));

    // Also look for background-image in the first 10000 chars
    const bgMatches = [...d.slice(0, 15000).matchAll(/background(?:-image)?:\s*url\(([^)]+)\)/gi)].map(m => m[1]);
    console.log('Background images in top 15000 chars:', bgMatches);
  });
});
