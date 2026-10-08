import fs from 'fs';

const html = fs.readFileSync('scraped/home.html', 'utf-8');

function clean(t) {
  return t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Find doctor section details
const matchDoc = html.match(/Dr\. Alok Kumar Sahoo[\s\S]*?Meet Our Expert Team/i);
if (matchDoc) {
  console.log('--- DR ALOK SAHOO DETAILS ---');
  console.log(clean(matchDoc[0]));
}

// Find team section details
const matchTeam = html.match(/Meet Our Expert Team[\s\S]*?A Testament to Excellence/i);
if (matchTeam) {
  console.log('\n--- TEAM DETAILS ---');
  console.log(clean(matchTeam[0]));
}

// Find Why Choose Us
const matchWhy = html.match(/Why Choose Us[\s\S]*?Alloroots in the News/i);
if (matchWhy) {
  console.log('\n--- WHY CHOOSE US DETAILS ---');
  console.log(clean(matchWhy[0]));
}

// Find In The News
const matchNews = html.match(/Alloroots in the News[\s\S]*?Premier Destination/i);
if (matchNews) {
  console.log('\n--- IN THE NEWS ---');
  console.log(clean(matchNews[0]));
}
