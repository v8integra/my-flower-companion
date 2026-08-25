// Regenerates public/sitemap.xml from the plant catalog. Runs automatically before
// every build (see package.json "prebuild") so new plants always get a sitemap entry
// without anyone needing to remember to update it by hand.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Keep in sync with index.html / robots.txt — update all three if the production
// domain changes (e.g. once a custom domain is attached).
const SITE_URL = "https://my-flower-companion.vercel.app";

const plantsSrc = readFileSync(join(root, "src", "data", "plants.ts"), "utf8");
const plantIds = [...plantsSrc.matchAll(/\{ id: "([^"]+)", name: "[^"]+", type: "(?:flower|herb|vegetable)"/g)]
  .map(m => m[1]);

if (plantIds.length === 0) {
  console.error("generate-sitemap: found 0 plants — refusing to overwrite sitemap.xml with an empty one");
  process.exit(1);
}

const staticPages = [
  { loc: "/", changefreq: "monthly", priority: "1.0" },
  { loc: "/care", changefreq: "monthly", priority: "0.9" },
  { loc: "/about", changefreq: "monthly", priority: "0.6" },
  { loc: "/settings", changefreq: "yearly", priority: "0.3" },
];

const plantUrls = plantIds.map(id => ({ loc: `/care/${id}`, changefreq: "yearly", priority: "0.7" }));

const urls = [...staticPages, ...plantUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml);
console.log(`generate-sitemap: wrote ${urls.length} URLs (${plantIds.length} plants) to public/sitemap.xml`);
