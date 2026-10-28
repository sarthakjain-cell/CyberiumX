const fs = require('fs');
const path = require('path');

function decodeEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '--')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function cleanExcerpt(rawHtml) {
  if (!rawHtml) return '';
  const clean = rawHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return decodeEntities(clean);
}

function getCategory(p) {
  const terms = p._embedded && p._embedded['wp:term'] ? p._embedded['wp:term'][0] : [];
  const termNames = terms.map(t => t.name);
  if (termNames.includes('TryHackMe')) return 'TryHackMe';
  if (termNames.includes('PortSwigger')) return 'PortSwigger';
  if (termNames.includes('HackTheBox')) return 'HackTheBox';
  return 'Guides & Alerts';
}

function calcReadTime(html) {
  const text = html.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(3, Math.ceil(words / 200));
  return `${mins} min read`;
}

function formatDate(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function run() {
  const rawPostsPath = path.join(__dirname, '..', 'src', 'data', 'official', 'raw_posts.json');
  const posts = JSON.parse(fs.readFileSync(rawPostsPath, 'utf8'));

  console.log(`Processing ${posts.length} official posts...`);

  const processed = posts.map(p => {
    const title = decodeEntities(p.title.rendered.trim());
    const slug = p.slug;
    const category = getCategory(p);
    const image = p._embedded && p._embedded['wp:featuredmedia'] ? p._embedded['wp:featuredmedia'][0].source_url : '';
    let desc = cleanExcerpt(p.excerpt.rendered);
    if (!desc || desc.length < 20) {
      desc = cleanExcerpt(p.content.rendered.slice(0, 300));
    }
    // Limit desc to ~180 chars with ellipsis if too long
    if (desc.length > 200) {
      desc = desc.slice(0, 197).trim() + '...';
    }

    const readTime = calcReadTime(p.content.rendered);
    const date = formatDate(p.date);
    const contentHtml = p.content.rendered;

    return {
      id: p.id,
      slug,
      title,
      category,
      image,
      desc,
      readTime,
      date,
      contentHtml
    };
  });

  const outPath = path.join(__dirname, '..', 'src', 'data', 'blogs.ts');
  const fileContent = `export interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  readTime: string;
  date?: string;
  contentHtml?: string;
  content?: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    conclusion: string;
  };
}

export const blogCategories = [
  "All",
  "TryHackMe",
  "PortSwigger",
  "HackTheBox",
  "Guides & Alerts"
];

export const blogs: BlogPost[] = ${JSON.stringify(processed, null, 2)};
`;

  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully generated src/data/blogs.ts with ${processed.length} official blogs!`);
}

run();
