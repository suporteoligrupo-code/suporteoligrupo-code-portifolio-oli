import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

// Run after next build. Check the exported site, not only the source strings.
const output = path.resolve("out");
const html = (file) => readFileSync(path.join(output, file), "utf8")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
const home = html("index.html");
const careerSlugs = readdirSync(path.join(output, "career"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(path.join(output, "career", entry.name, "index.html"))).map((entry) => entry.name);
const caseSlugs = readdirSync(path.join(output, "cases"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(path.join(output, "cases", entry.name, "index.html"))).map((entry) => entry.name);

assert.equal(careerSlugs.length, 10, "Preserve all ten confirmed experiences");
assert.equal(caseSlugs.length, 10, "Preserve all ten public projects");
assert.match(home, /Estratégia, marketing e negócios para games e tecnologia/);
assert.match(home, /id="oli"/);
assert.match(home, /10% da renda bruta/);
assert.match(home, /2010–atual/);
assert.equal((home.match(/class="career-card[\s"]/g) ?? []).length, 4);
assert.equal((home.match(/class="case-card[\s"]/g) ?? []).length, 4);
for (const slug of ["rico-games", "josucas-eletronicos", "metro-case", "eletrotech-isa"]) {
  assert.ok(home.includes(`/cases/${slug}/`), `Home should feature ${slug}`);
}
assert.ok(!home.includes('/cases/manifesto-bar/'), "Manifesto stays in the archive");
assert.match(html("cases/manifesto-bar/index.html"), /PROJETO CONCEITUAL/);
assert.match(html("cases/eletrotech-isa/index.html"), /EM DESENVOLVIMENTO/);
assert.match(html("cases/rico-games/index.html"), /EM DESENVOLVIMENTO/);
assert.match(html("career/urly-marketing/index.html"), /10% da renda bruta/);

const files = ["index.html", "career/index.html", "cases/index.html", "404.html",
  ...careerSlugs.map((slug) => `career/${slug}/index.html`),
  ...caseSlugs.map((slug) => `cases/${slug}/index.html`)];
let linkCount = 0;
for (const file of files) {
  const page = html(file);
  assert.equal((page.match(/<h1[\s>]/g) ?? []).length, 1, `One h1: ${file}`);
  assert.match(page, /lang="pt-BR"/);
  assert.doesNotMatch(page, /Magazine Torra|Through to the Wolves|Rigel|Rygel|Podpah/);
  for (const [, href] of page.matchAll(/href="([^"?]+)"/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const [pathname, anchor] = href.split("#");
    const target = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
    assert.ok(existsSync(path.join(output, target)), `Missing local link ${href} in ${file}`);
    if (anchor) assert.ok(readFileSync(path.join(output, target), "utf8").includes(`id="${anchor}"`), `Missing anchor ${href}`);
    linkCount++;
  }
  for (const [, src] of page.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) {
    if (src.startsWith("/")) assert.ok(existsSync(path.join(output, src)), `Missing image: ${src}`);
  }
}
const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
assert.equal((sitemap.match(/<loc>/g) ?? []).length, 23);
assert.ok(existsSync(path.join(output, "robots.txt")));
console.log(`PASS: ${files.length} HTML pages, ${linkCount} internal links, images, metadata, status labels and 23 sitemap URLs.`);
