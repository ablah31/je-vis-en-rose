import { promises as fs } from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "images");

const ROSE = "#E88BA8";
const ROSE_LIGHT = "#FDEAF0";
const PRUNE = "#6F2D4F";
const CREAM = "#FFF8FA";

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Placeholder photo : dégradé doux + formes organiques + libellé.
function photoSvg({ w = 1600, h = 1000, label, seed = 0 }) {
  const c1 = seed % 2 === 0 ? ROSE_LIGHT : CREAM;
  const c2 = seed % 2 === 0 ? ROSE : "#F2D6DF";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <circle cx="${w * 0.78}" cy="${h * 0.28}" r="${h * 0.32}" fill="${ROSE}" opacity="0.28"/>
  <circle cx="${w * 0.2}" cy="${h * 0.82}" r="${h * 0.28}" fill="${PRUNE}" opacity="0.12"/>
  <path d="M ${w * 0.5} ${h * 0.46} c ${h * 0.07} -${h * 0.11}, ${h * 0.26} -${h * 0.04}, ${h * 0.13} ${h * 0.13} l -${h * 0.13} ${h * 0.13} l -${h * 0.13} -${h * 0.13} c -${h * 0.13} -${h * 0.17}, ${h * 0.06} -${h * 0.24}, ${h * 0.13} -${h * 0.13} Z" fill="#FFFFFF" opacity="0.55"/>
  <text x="50%" y="${h * 0.86}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(h * 0.05)}" fill="${PRUNE}" opacity="0.85">${esc(label)}</text>
</svg>`;
}

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80" role="img" aria-label="Je vis en Rose">
  <circle cx="40" cy="40" r="26" fill="${ROSE_LIGHT}"/>
  <path d="M 40 30 c 5 -8, 18 -3, 9 9 l -9 9 l -9 -9 c -9 -12, 4 -17, 9 -9 Z" fill="${ROSE}"/>
  <text x="80" y="48" font-family="Georgia, serif" font-size="26" font-weight="600" fill="${PRUNE}">Je vis en Rose</text>
</svg>`;
}

function partnerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120" viewBox="0 0 240 120" role="img" aria-label="Logo partenaire">
  <rect width="240" height="120" rx="12" fill="${CREAM}"/>
  <rect x="0.5" y="0.5" width="239" height="119" rx="12" fill="none" stroke="#F2D6DF"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-size="18" fill="#6B6065">Logo partenaire</text>
</svg>`;
}

const photos = [
  { file: "hero-accueil.svg", label: "Photo d'accueil", seed: 0, h: 1100 },
  { file: "association.svg", label: "Notre association", seed: 1 },
  { file: "actions.svg", label: "Nos actions", seed: 0 },
  { file: "soutenir.svg", label: "Nous soutenir", seed: 1 },
  { file: "contact.svg", label: "Contact", seed: 0 },
  { file: "actualite-octobre-rose.svg", label: "Octobre Rose", seed: 1 },
  { file: "actualite-ateliers.svg", label: "Ateliers bien-être", seed: 0 },
  { file: "evenement-rencontre.svg", label: "Rencontre solidaire", seed: 1 },
  { file: "evenement-marche.svg", label: "Marche rose", seed: 0 },
  { file: "og-image.svg", label: "Je vis en Rose", seed: 1, w: 1200, h: 630 },
];

await fs.mkdir(OUT, { recursive: true });

for (const p of photos) {
  await fs.writeFile(path.join(OUT, p.file), photoSvg(p), "utf8");
}
await fs.writeFile(path.join(OUT, "logo-je-vis-en-rose.svg"), logoSvg(), "utf8");
await fs.writeFile(
  path.join(OUT, "partenaire-placeholder.svg"),
  partnerSvg(),
  "utf8",
);

console.log(`Généré ${photos.length + 2} images dans public/images`);
