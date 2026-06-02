# Je vis en Rose — Site web associatif

Site vitrine administrable de l'association **Je vis en Rose** (Colomiers).
Construit avec **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**,
**shadcn/ui** et **TinaCMS**.

## Stack

- **Framework** : Next.js 16 (App Router) + React 19
- **Langage** : TypeScript
- **Style** : Tailwind CSS v4 + shadcn/ui (Base UI)
- **CMS** : TinaCMS (contenu en fichiers Markdown / JSON dans `/content`)
- **Contenu riche** : `react-markdown`
- **Formulaire de contact** : route handler Next.js + Resend (optionnel)
- **Dons** : lien externe HelloAsso (aucun paiement traité sur le site)

## Démarrage local

```bash
npm install
npm run dev          # site seul (lecture directe du contenu) → http://localhost:3000
npm run dev:cms      # site + admin TinaCMS → http://localhost:3000/admin
```

## Scripts

| Script           | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`     | Serveur de développement                               |
| `npm run dev:cms` | Développement avec l'admin TinaCMS                     |
| `npm run build`   | Build de production                                    |
| `npm run build:cms` | Build avec génération du client TinaCMS              |
| `npm run start`   | Démarrage du serveur de production                     |
| `npm run lint`    | Vérification ESLint                                    |

## Structure

```txt
content/            Contenu éditable (pages JSON, actualités/événements MD, etc.)
public/images/      Images (placeholders SVG + CREDITS.md)
src/app/            Pages (App Router), API contact, sitemap, robots
src/components/     Composants UI, sections, layout
src/lib/            Accès contenu, navigation, SEO, utilitaires
tina/config.ts      Configuration des collections TinaCMS
docs/guide-admin.md Guide pour l'administration non technique
```

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner si besoin :

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` : URL publique du site (pour SEO/sitemap).
- `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`, `NEXT_PUBLIC_TINA_BRANCH` :
  TinaCMS en production (Tina Cloud, voir https://app.tina.io). Facultatif en local.
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` : envoi des emails
  du formulaire de contact. **Si absent, le formulaire reste fonctionnel** : le
  message est validé et confirmé, mais l'email n'est pas envoyé (mode démo).

## Déploiement

### Option recommandée : Vercel

1. Pousser le dépôt sur GitHub.
2. Importer le projet sur [Vercel](https://vercel.com).
3. Renseigner les variables d'environnement (voir ci-dessus).
4. Vercel détecte Next.js et déploie automatiquement (commande `npm run build`).

Pour activer l'édition de contenu en production via Tina Cloud, créer un projet
sur https://app.tina.io, renseigner `NEXT_PUBLIC_TINA_CLIENT_ID` et `TINA_TOKEN`,
et utiliser la commande de build `npm run build:cms`.

### Alternative : Netlify

1. Pousser le dépôt sur GitHub.
2. Créer un site sur [Netlify](https://www.netlify.com) à partir du dépôt.
3. Build command : `npm run build` — Publish directory : `.next`
   (avec le plugin officiel `@netlify/plugin-nextjs`).
4. Renseigner les variables d'environnement.

## Choix techniques notables

- **Contenu découplé** : les pages publiques lisent directement les fichiers de
  `/content` via une couche typée (`src/lib/content.ts`). TinaCMS édite ces mêmes
  fichiers. Le site reste donc buildable même sans le runtime de l'admin.
- **Aucune base de données** et **aucune donnée médicale sensible** collectée.
- **Accessibilité** : navigation clavier, lien d'évitement, `alt` sur les images,
  labels de formulaire, contrastes conformes à la palette de la charte.

## Avant la mise en ligne

Compléter les informations marquées « à compléter » dans les pages
**Mentions légales** et **Politique de confidentialité**, et remplacer les
images placeholder par les vraies photos de l'association (voir
`public/images/CREDITS.md`).
