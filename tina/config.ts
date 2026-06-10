import { defineConfig } from "tinacms";

// Branche Git utilisée par Tina Cloud en production.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Renseigner ces variables pour la production (Tina Cloud). En local, le mode
  // développement fonctionne sans clés via `npm run dev`.
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || "",
      stopwordLanguages: ["fra"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "string", name: "seoTitle", label: "Titre SEO" },
          {
            type: "string",
            name: "seoDescription",
            label: "Description SEO",
            ui: { component: "textarea" },
          },
          { type: "string", name: "heroTitle", label: "Titre du hero" },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Sous-titre du hero",
            ui: { component: "textarea" },
          },
          { type: "image", name: "heroImage", label: "Image du hero" },
          {
            type: "string",
            name: "heroImageAlt",
            label: "Texte alternatif de l'image",
          },
          { type: "string", name: "ctaLabel", label: "Libellé du bouton" },
          { type: "string", name: "ctaUrl", label: "Lien du bouton" },
          {
            type: "string",
            name: "ctaSecondaryLabel",
            label: "Libellé bouton secondaire",
          },
          {
            type: "string",
            name: "ctaSecondaryUrl",
            label: "Lien bouton secondaire",
          },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.heading || "Section" }),
            },
            fields: [
              { type: "string", name: "_template", label: "Type" },
              { type: "string", name: "heading", label: "Titre" },
              {
                type: "string",
                name: "body",
                label: "Texte",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "linkUrl",
                label: "Lien (URL)",
                description:
                  "Rend la carte cliquable : lien HelloAsso, page du site, etc. Laisser vide pour une carte sans lien.",
              },
            ],
          },
        ],
      },
      {
        name: "actualites",
        label: "Actualités",
        path: "content/actualites",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL)",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Extrait",
            ui: { component: "textarea" },
          },
          { type: "image", name: "coverImage", label: "Image de couverture" },
          {
            type: "string",
            name: "coverImageAlt",
            label: "Texte alternatif de l'image",
          },
          { type: "string", name: "category", label: "Catégorie" },
          { type: "string", name: "author", label: "Auteur" },
          { type: "boolean", name: "featured", label: "Mise en avant" },
          { type: "string", name: "seoTitle", label: "Titre SEO" },
          {
            type: "string",
            name: "seoDescription",
            label: "Description SEO",
            ui: { component: "textarea" },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
      {
        name: "evenements",
        label: "Événements",
        path: "content/evenements",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL)",
            required: true,
          },
          {
            type: "datetime",
            name: "startDate",
            label: "Date de début",
            required: true,
          },
          { type: "datetime", name: "endDate", label: "Date de fin" },
          { type: "string", name: "location", label: "Lieu", required: true },
          { type: "string", name: "address", label: "Adresse" },
          {
            type: "string",
            name: "excerpt",
            label: "Extrait",
            ui: { component: "textarea" },
          },
          { type: "image", name: "coverImage", label: "Image de couverture" },
          {
            type: "string",
            name: "coverImageAlt",
            label: "Texte alternatif de l'image",
          },
          {
            type: "string",
            name: "registrationUrl",
            label: "Lien d'inscription",
          },
          {
            type: "boolean",
            name: "isPastEvent",
            label: "Événement passé",
          },
          { type: "string", name: "seoTitle", label: "Titre SEO" },
          {
            type: "string",
            name: "seoDescription",
            label: "Description SEO",
            ui: { component: "textarea" },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
      {
        name: "temoignages",
        label: "Témoignages",
        path: "content/temoignages",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Nom", required: true },
          { type: "string", name: "role", label: "Rôle" },
          {
            type: "string",
            name: "quote",
            label: "Témoignage",
            required: true,
            ui: { component: "textarea" },
          },
          { type: "image", name: "image", label: "Photo (optionnelle)" },
          {
            type: "boolean",
            name: "published",
            label: "Publié",
          },
          { type: "number", name: "order", label: "Ordre d'affichage" },
        ],
      },
      {
        name: "partenaires",
        label: "Partenaires",
        path: "content/partenaires",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Nom", required: true },
          { type: "image", name: "logo", label: "Logo" },
          { type: "string", name: "websiteUrl", label: "Site web" },
          { type: "number", name: "order", label: "Ordre d'affichage" },
          { type: "boolean", name: "published", label: "Publié" },
        ],
      },
      {
        name: "settings",
        label: "Paramètres du site",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Nom du site",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Description du site",
            ui: { component: "textarea" },
          },
          { type: "image", name: "logo", label: "Logo" },
          { type: "string", name: "email", label: "Email", required: true },
          { type: "string", name: "phone", label: "Téléphone" },
          { type: "string", name: "address", label: "Adresse" },
          { type: "string", name: "facebookUrl", label: "Facebook" },
          { type: "string", name: "instagramUrl", label: "Instagram" },
          { type: "string", name: "youtubeUrl", label: "YouTube" },
          { type: "string", name: "linkedinUrl", label: "LinkedIn" },
          {
            type: "string",
            name: "helloAssoUrl",
            label: "Lien HelloAsso (don)",
            required: true,
          },
        ],
      },
    ],
  },
});
