import https from 'https';
import fs from 'fs';

https.get('https://alloroots.com/bollywood-celebrity-hair-transplant-analysis/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('bollywood-data.html', data);
    console.log('Saved to bollywood-data.html');
  });
}).on('error', (err) => {
  console.error(err);
});
