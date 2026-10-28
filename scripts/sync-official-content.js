const fs = require('fs');
const path = require('path');

async function fetchJSON(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) CyberiumX-Sync/1.0'
    }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function run() {
  console.log('Fetching official data from https://cyberiumx.com ...');
  
  // 1. Fetch all 84 blog posts (pagination: 100 per page fetches all in 1 call)
  console.log('1. Fetching all blog posts...');
  let allPosts = [];
  try {
    const postsPage1 = await fetchJSON('https://cyberiumx.com/wp-json/wp/v2/posts?per_page=100&_embed=1');
    allPosts = postsPage1;
    console.log(`Fetched ${allPosts.length} posts.`);
  } catch (err) {
    console.error('Error fetching posts:', err);
  }

  // 2. Fetch all 12 provided courses
  console.log('2. Fetching all provided courses...');
  let allCourses = [];
  try {
    allCourses = await fetchJSON('https://cyberiumx.com/wp-json/wp/v2/provided-course?per_page=50&_embed=1');
    console.log(`Fetched ${allCourses.length} courses.`);
  } catch (err) {
    console.error('Error fetching courses:', err);
  }

  // 3. Fetch all student testimonials
  console.log('3. Fetching student testimonials...');
  let allTestimonials = [];
  try {
    allTestimonials = await fetchJSON('https://cyberiumx.com/wp-json/wp/v2/student-testimonial?per_page=50&_embed=1');
    console.log(`Fetched ${allTestimonials.length} testimonials.`);
  } catch (err) {
    console.error('Error fetching testimonials:', err);
  }

  // 4. Fetch all official pages
  console.log('4. Fetching official pages...');
  let allPages = [];
  try {
    allPages = await fetchJSON('https://cyberiumx.com/wp-json/wp/v2/pages?per_page=50&_embed=1');
    console.log(`Fetched ${allPages.length} pages.`);
  } catch (err) {
    console.error('Error fetching pages:', err);
  }

  // Save raw data to a data dump file for inspection
  const outDir = path.join(__dirname, '..', 'src', 'data', 'official');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'raw_posts.json'), JSON.stringify(allPosts, null, 2));
  fs.writeFileSync(path.join(outDir, 'raw_courses.json'), JSON.stringify(allCourses, null, 2));
  fs.writeFileSync(path.join(outDir, 'raw_testimonials.json'), JSON.stringify(allTestimonials, null, 2));
  fs.writeFileSync(path.join(outDir, 'raw_pages.json'), JSON.stringify(allPages, null, 2));

  console.log('Successfully saved raw data to src/data/official/');
}

run();
