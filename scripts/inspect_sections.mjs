import fs from 'fs';

const html = fs.readFileSync('scraped/home.html', 'utf-8');

// Search for doctor mentions
const doctorIdx = html.indexOf('Dr. Alok Kumar Sahoo');
if (doctorIdx !== -1) {
  console.log('=== DOCTOR SECTION SNIPPET ===');
  console.log(html.slice(doctorIdx - 300, doctorIdx + 3000));
}

// Search for team mentions
const teamIdx = html.indexOf('Meet Our Expert Team');
if (teamIdx !== -1) {
  console.log('\n=== TEAM SECTION SNIPPET ===');
  console.log(html.slice(teamIdx - 200, teamIdx + 3000));
}

// Search for reviews / testimonials
const reviewIdx = html.indexOf('Client Testimonials');
if (reviewIdx !== -1) {
  console.log('\n=== TESTIMONIALS SECTION SNIPPET ===');
  console.log(html.slice(reviewIdx - 200, reviewIdx + 3000));
}
