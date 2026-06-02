# Backlog Cursor — Site web de l'association « Je vis en Rose »

## 1. Contexte du projet

L'association **Je vis en Rose**, basée à **Colomiers**, souhaite créer un site web moderne, rassurant et facile à administrer. L'association intervient autour de la lutte contre le cancer, de l'accompagnement, de la sensibilisation et/ou du soutien aux personnes concernées.

L'objectif est de remplacer ou compléter l'existant par un site plus propre, plus rapide, moins coûteux, avec une vraie partie administration pour gérer le contenu sans dépendre d'un développeur pour chaque modification.

## 2. Objectif principal

Créer un site vitrine administrable avec :

- un design chaleureux, humain, rassurant et professionnel ;
- une architecture simple à maintenir ;
- un coût annuel minimal ;
- une interface admin via TinaCMS ;
- des contenus modifiables par une personne non technique ;
- une base technique propre avec Next.js, Tailwind CSS et shadcn/ui.

## 3. Stack technique imposée

- **Framework** : Next.js avec App Router
- **Langage** : TypeScript
- **CMS** : TinaCMS
- **Style** : Tailwind CSS
- **UI components** : shadcn/ui
- **Contenu** : Markdown / MDX / JSON via TinaCMS
- **Hébergement cible** : Netlify ou Vercel
- **Dons** : lien externe HelloAsso, pas de paiement géré directement dans le site
- **Formulaire de contact** : solution simple type Netlify Forms, Formspree, Resend ou route handler Next.js selon le choix final

## 4. Contraintes importantes

- Le site doit être simple à administrer.
- Le site ne doit pas stocker de données médicales sensibles.
- Le formulaire de contact ne doit pas demander le type de cancer, le traitement médical, le dossier patient ou toute information médicale détaillée.
- Les contenus doivent être faciles à modifier depuis `/admin`.
- Le site doit être responsive mobile/tablette/desktop.
- Le site doit être optimisé SEO local : Colomiers, Toulouse, association, cancer, accompagnement, soutien.
- Le site doit être accessible : contraste suffisant, textes lisibles, navigation clavier, aria-labels si nécessaire.

---

# 5. Périmètre MVP

## Pages à créer pour la V1

1. Accueil
2. L'association
3. Nos actions
4. Actualités
5. Page détail d'une actualité
6. Événements
7. Page détail d'un événement
8. Témoignages
9. Nous soutenir
10. Contact
11. Mentions légales
12. Politique de confidentialité

## Fonctionnalités MVP

- Navigation principale responsive
- Hero section administrable
- Sections de contenu administrables
- Liste d'actualités administrable
- Liste d'événements administrable
- Témoignages administrables
- Partenaires administrables
- Bouton de don vers HelloAsso
- Formulaire de contact simple
- Footer complet
- SEO de base
- TinaCMS configuré avec collections
- Design system simple basé sur Tailwind + shadcn/ui

---

# 6. Structure de projet attendue

Créer ou organiser le projet comme suit :

```txt
/src
  /app
    layout.tsx
    page.tsx
    /association
      page.tsx
    /actions
      page.tsx
    /actualites
      page.tsx
      /[slug]
        page.tsx
    /evenements
      page.tsx
      /[slug]
        page.tsx
    /temoignages
      page.tsx
    /soutenir
      page.tsx
    /contact
      page.tsx
    /mentions-legales
      page.tsx
    /politique-confidentialite
      page.tsx
  /components
    /layout
      Header.tsx
      Footer.tsx
      MobileNav.tsx
    /sections
      HeroSection.tsx
      MissionSection.tsx
      ActionsPreview.tsx
      NewsPreview.tsx
      EventsPreview.tsx
      TestimonialsSection.tsx
      PartnersSection.tsx
      CtaDonation.tsx
    /ui
      // composants shadcn/ui
  /lib
    utils.ts
    tina.ts
  /types
    content.ts

/content
  /pages
    accueil.json
    association.json
    actions.json
    soutenir.json
    contact.json
  /actualites
    exemple-actualite.md
  /evenements
    exemple-evenement.md
  /temoignages
    temoignage-1.json
  /partenaires
    partenaire-1.json

/public
  /images
    placeholder-hero.jpg
    placeholder-action.jpg
  /uploads

/tina
  config.ts
```

---

# 7. Direction artistique

## Intention visuelle

Le site doit transmettre :

- douceur ;
- confiance ;
- espoir ;
- proximité locale ;
- sérieux associatif ;
- humanité.

## Style recommandé

- Couleurs principales : rose poudré, blanc cassé, prune doux, gris chaud.
- Éviter un rose trop criard.
- Typographie lisible et élégante.
- Sections aérées, beaucoup d'espaces blancs.
- Cartes avec coins arrondis.
- Boutons visibles mais doux.
- Images humaines, naturelles, locales si possible.

## Palette proposée

```txt
Rose principal : #E88BA8
Rose clair : #FDEAF0
Prune : #6F2D4F
Texte principal : #2B2B2B
Texte secondaire : #6B6065
Fond doux : #FFF8FA
Blanc : #FFFFFF
Bordure : #F2D6DF
```

## Composants shadcn/ui à utiliser

Installer et utiliser progressivement :

```txt
button
card
badge
input
textarea
label
separator
sheet
accordion
avatar
```

---

# 8. Modèle de contenu TinaCMS

## Collection : Pages

Chemin : `/content/pages`
Format : JSON

Champs communs :

```txt
title: string
seoTitle: string
seoDescription: string
heroTitle: string
heroSubtitle: string
heroImage: image
ctaLabel: string
ctaUrl: string
sections: object[]
```

Pages concernées :

- accueil.json
- association.json
- actions.json
- soutenir.json
- contact.json

## Collection : Actualités

Chemin : `/content/actualites`
Format : Markdown ou MDX

Champs :

```txt
title: string
slug: string
date: datetime
excerpt: string
coverImage: image
category: string
author: string
featured: boolean
body: rich-text
seoTitle: string
seoDescription: string
```

## Collection : Événements

Chemin : `/content/evenements`
Format : Markdown ou MDX

Champs :

```txt
title: string
slug: string
startDate: datetime
endDate: datetime optional
location: string
address: string optional
excerpt: string
coverImage: image
registrationUrl: string optional
isPastEvent: boolean
body: rich-text
seoTitle: string
seoDescription: string
```

## Collection : Témoignages

Chemin : `/content/temoignages`
Format : JSON

Champs :

```txt
name: string
role: string optional
quote: string
image: image optional
published: boolean
order: number
```

Important : ne jamais demander d'informations médicales détaillées dans les témoignages administrables. Les textes doivent rester publics, consentis et non sensibles.

## Collection : Partenaires

Chemin : `/content/partenaires`
Format : JSON

Champs :

```txt
name: string
logo: image
websiteUrl: string optional
order: number
published: boolean
```

## Collection : Paramètres du site

Chemin : `/content/settings/site.json`
Format : JSON

Champs :

```txt
siteName: string
siteDescription: string
logo: image
email: string
phone: string optional
address: string optional
facebookUrl: string optional
instagramUrl: string optional
linkedinUrl: string optional
helloAssoUrl: string
```

---

# 9. Backlog produit

## EPIC 1 — Initialisation du projet

### US 1.1 — Créer le projet Next.js

**En tant que développeur**, je veux initialiser un projet Next.js propre afin de disposer d'une base moderne et maintenable.

Tâches :

- Créer le projet Next.js avec TypeScript et App Router.
- Configurer ESLint.
- Configurer l'alias `@/*`.
- Vérifier que l'application démarre en local.
- Nettoyer les fichiers inutiles générés par défaut.

Critères d'acceptation :

- `npm run dev` lance le projet.
- La page d'accueil s'affiche sans erreur.
- TypeScript est actif.
- L'alias `@/` fonctionne.

Priorité : Haute

---

### US 1.2 — Configurer Tailwind CSS

**En tant que développeur**, je veux configurer Tailwind CSS afin de construire rapidement une interface responsive.

Tâches :

- Vérifier l'installation Tailwind.
- Configurer `globals.css`.
- Ajouter les variables CSS de thème.
- Définir les couleurs principales de l'association.
- Créer des classes utilitaires si nécessaire.

Critères d'acceptation :

- Tailwind fonctionne dans les composants.
- Les couleurs du thème sont disponibles.
- Le rendu est cohérent en mobile et desktop.

Priorité : Haute

---

### US 1.3 — Installer shadcn/ui

**En tant que développeur**, je veux installer shadcn/ui afin d'utiliser des composants accessibles et propres.

Tâches :

- Initialiser shadcn/ui.
- Configurer `components.json`.
- Installer les composants nécessaires : Button, Card, Badge, Input, Textarea, Label, Separator, Sheet, Accordion.
- Vérifier que les composants fonctionnent avec le thème.

Critères d'acceptation :

- Les composants shadcn/ui sont utilisables depuis `@/components/ui`.
- Le bouton principal utilise la palette rose/prune.
- Aucun conflit CSS majeur.

Priorité : Haute

---

## EPIC 2 — Configuration TinaCMS

### US 2.1 — Installer TinaCMS

**En tant que développeur**, je veux installer TinaCMS afin de permettre à l'association de gérer son contenu.

Tâches :

- Installer TinaCMS.
- Créer le dossier `/tina`.
- Configurer `tina/config.ts`.
- Configurer le dossier `public` pour les images.
- Vérifier l'accès local à l'admin.

Critères d'acceptation :

- L'interface admin TinaCMS est accessible.
- Les collections apparaissent dans l'admin.
- Les fichiers de contenu peuvent être créés ou modifiés.

Priorité : Haute

---

### US 2.2 — Créer les collections TinaCMS

**En tant qu'administrateur**, je veux pouvoir gérer les pages, actualités, événements, témoignages et partenaires depuis l'admin.

Tâches :

- Créer la collection Pages.
- Créer la collection Actualités.
- Créer la collection Événements.
- Créer la collection Témoignages.
- Créer la collection Partenaires.
- Créer la collection Paramètres du site.

Critères d'acceptation :

- Chaque collection est visible dans TinaCMS.
- Les champs sont compréhensibles pour une personne non technique.
- Les labels sont en français.
- Les champs obligatoires sont limités au strict nécessaire.

Priorité : Haute

---

### US 2.3 — Ajouter du contenu de démonstration

**En tant que développeur**, je veux créer du contenu initial afin de tester le rendu du site.

Tâches :

- Créer une page d'accueil de démonstration.
- Créer une page association.
- Créer 2 actualités fictives.
- Créer 2 événements fictifs.
- Créer 2 témoignages fictifs.
- Créer 2 partenaires fictifs.

Critères d'acceptation :

- Le site affiche les contenus TinaCMS.
- Les pages de liste et de détail fonctionnent.
- Aucun contenu médical sensible n'est présent dans les données de test.

Priorité : Haute

---

## EPIC 3 — Layout global

### US 3.1 — Créer le header responsive

**En tant que visiteur**, je veux naviguer facilement sur le site depuis mobile et desktop.

Tâches :

- Créer `Header.tsx`.
- Ajouter le logo ou le nom de l'association.
- Ajouter les liens : Accueil, Association, Actions, Actualités, Événements, Témoignages, Soutenir, Contact.
- Ajouter un bouton principal “Faire un don”.
- Créer un menu mobile avec `Sheet` de shadcn/ui.

Critères d'acceptation :

- Le header est lisible sur desktop.
- Le menu mobile fonctionne.
- Le bouton de don est visible.
- Le lien actif est identifiable.

Priorité : Haute

---

### US 3.2 — Créer le footer

**En tant que visiteur**, je veux retrouver les informations importantes en bas de page.

Tâches :

- Créer `Footer.tsx`.
- Ajouter coordonnées de l'association.
- Ajouter liens rapides.
- Ajouter liens réseaux sociaux.
- Ajouter liens mentions légales et politique de confidentialité.
- Ajouter rappel du bouton de don.

Critères d'acceptation :

- Le footer est présent sur toutes les pages.
- Les informations sont administrables depuis TinaCMS si possible.
- Les liens légaux sont présents.

Priorité : Haute

---

### US 3.3 — Créer le layout global

**En tant que développeur**, je veux un layout global propre afin de mutualiser header, footer et métadonnées.

Tâches :

- Configurer `layout.tsx`.
- Ajouter Header et Footer.
- Ajouter les métadonnées par défaut.
- Configurer la police.
- Ajouter les styles globaux.

Critères d'acceptation :

- Toutes les pages utilisent le même layout.
- Le site ne présente pas de saut visuel entre les pages.
- Les métadonnées par défaut sont présentes.

Priorité : Haute

---

## EPIC 4 — Page d'accueil

### US 4.1 — Créer la Hero section

**En tant que visiteur**, je veux comprendre rapidement qui est l'association et comment agir.

Tâches :

- Créer `HeroSection.tsx`.
- Afficher titre, sous-titre, image et CTA.
- Ajouter un bouton “Faire un don”.
- Ajouter un bouton secondaire “Découvrir l'association”.
- Rendre le contenu administrable via TinaCMS.

Critères d'acceptation :

- Le contenu vient de TinaCMS.
- La section est responsive.
- Le message est clair en moins de 5 secondes.

Priorité : Haute

---

### US 4.2 — Créer une section Missions

**En tant que visiteur**, je veux comprendre les missions principales de l'association.

Tâches :

- Créer une section avec 3 cartes : Accompagner, Sensibiliser, Soutenir.
- Utiliser le composant Card de shadcn/ui.
- Ajouter des icônes simples si nécessaire.
- Prévoir du contenu administrable.

Critères d'acceptation :

- Les 3 missions sont visibles.
- La section est claire sur mobile.
- Le ton reste humain et rassurant.

Priorité : Haute

---

### US 4.3 — Créer un aperçu des actualités

**En tant que visiteur**, je veux voir les dernières actualités de l'association.

Tâches :

- Récupérer les 3 dernières actualités.
- Afficher une carte par actualité.
- Ajouter image, date, titre, extrait.
- Ajouter lien vers la page actualités.

Critères d'acceptation :

- Les actualités sont triées par date décroissante.
- Les cartes redirigent vers les pages détail.
- Si aucune actualité, afficher un message propre.

Priorité : Moyenne

---

### US 4.4 — Créer un aperçu des événements

**En tant que visiteur**, je veux voir les prochains événements de l'association.

Tâches :

- Récupérer les événements à venir.
- Afficher date, lieu, titre et extrait.
- Ajouter lien vers la page événements.

Critères d'acceptation :

- Les événements à venir sont visibles.
- Les événements passés ne sont pas mis en avant sur l'accueil.
- Le rendu mobile est propre.

Priorité : Moyenne

---

### US 4.5 — Créer un bloc appel au don

**En tant que visiteur**, je veux pouvoir soutenir l'association facilement.

Tâches :

- Créer `CtaDonation.tsx`.
- Ajouter message rassurant sur l'impact du don.
- Ajouter bouton vers HelloAsso.
- Prévoir URL administrable depuis TinaCMS.

Critères d'acceptation :

- Le bouton ouvre le lien HelloAsso.
- Le lien est externe et sécurisé.
- Aucun paiement n'est géré directement dans le site.

Priorité : Haute

---

## EPIC 5 — Pages de contenu

### US 5.1 — Page « L'association »

**En tant que visiteur**, je veux connaître l'histoire, la mission et les valeurs de Je vis en Rose.

Tâches :

- Créer la page `/association`.
- Ajouter hero simple.
- Ajouter sections : histoire, mission, valeurs, équipe.
- Rendre le contenu administrable.

Critères d'acceptation :

- La page est claire et rassurante.
- Le contenu est modifiable dans TinaCMS.
- La page est responsive.

Priorité : Haute

---

### US 5.2 — Page « Nos actions »

**En tant que visiteur**, je veux comprendre concrètement ce que fait l'association.

Tâches :

- Créer la page `/actions`.
- Ajouter une grille d'actions.
- Prévoir des blocs : accompagnement, sensibilisation, événements, ateliers, soutien.
- Ajouter CTA vers contact ou don.

Critères d'acceptation :

- Les actions sont faciles à comprendre.
- Chaque action a un titre, une description et éventuellement une image.
- Le contenu est administrable.

Priorité : Haute

---

### US 5.3 — Page « Nous soutenir »

**En tant que visiteur**, je veux savoir comment aider l'association.

Tâches :

- Créer la page `/soutenir`.
- Ajouter sections : faire un don, devenir bénévole, devenir partenaire, relayer l'association.
- Ajouter bouton HelloAsso.
- Ajouter CTA contact.

Critères d'acceptation :

- Le bouton de don est visible.
- Les modes de soutien sont clairs.
- Aucun paiement n'est intégré directement.

Priorité : Haute

---

### US 5.4 — Page « Témoignages »

**En tant que visiteur**, je veux lire des témoignages publics et validés par l'association.

Tâches :

- Créer la page `/temoignages`.
- Afficher les témoignages publiés.
- Trier par ordre configuré.
- Prévoir un message si aucun témoignage.

Critères d'acceptation :

- Seuls les témoignages `published: true` sont affichés.
- Aucun témoignage ne contient d'information médicale imposée par le formulaire.
- Le rendu est humain et sobre.

Priorité : Moyenne

---

## EPIC 6 — Actualités

### US 6.1 — Page liste des actualités

**En tant que visiteur**, je veux consulter les actualités de l'association.

Tâches :

- Créer `/actualites`.
- Récupérer toutes les actualités TinaCMS.
- Trier par date décroissante.
- Afficher cartes d'actualités.
- Ajouter catégorie/date/extrait.

Critères d'acceptation :

- Toutes les actualités publiées sont visibles.
- Le tri est correct.
- Les cartes redirigent vers les détails.

Priorité : Haute

---

### US 6.2 — Page détail d'une actualité

**En tant que visiteur**, je veux lire une actualité complète.

Tâches :

- Créer `/actualites/[slug]`.
- Générer les pages dynamiques depuis TinaCMS.
- Afficher titre, date, image, catégorie, contenu riche.
- Ajouter retour vers la liste.
- Ajouter métadonnées SEO dynamiques.

Critères d'acceptation :

- Chaque actualité a sa propre URL.
- Les contenus rich-text s'affichent correctement.
- Les métadonnées sont renseignées.

Priorité : Haute

---

## EPIC 7 — Événements

### US 7.1 — Page liste des événements

**En tant que visiteur**, je veux consulter les événements à venir et passés.

Tâches :

- Créer `/evenements`.
- Afficher événements à venir en premier.
- Prévoir une section événements passés.
- Afficher date, lieu, titre, extrait.

Critères d'acceptation :

- Les événements à venir sont distingués des événements passés.
- Les informations clés sont visibles rapidement.
- Le rendu mobile est propre.

Priorité : Moyenne

---

### US 7.2 — Page détail d'un événement

**En tant que visiteur**, je veux voir les détails d'un événement.

Tâches :

- Créer `/evenements/[slug]`.
- Afficher date, lieu, adresse, image, contenu.
- Ajouter bouton d'inscription si `registrationUrl` existe.
- Ajouter métadonnées SEO dynamiques.

Critères d'acceptation :

- Chaque événement a sa propre URL.
- Le bouton d'inscription est conditionnel.
- Les données sont modifiables depuis TinaCMS.

Priorité : Moyenne

---

## EPIC 8 — Contact

### US 8.1 — Créer la page contact

**En tant que visiteur**, je veux contacter facilement l'association.

Tâches :

- Créer `/contact`.
- Afficher coordonnées.
- Ajouter formulaire simple : nom, email, objet, message.
- Ajouter texte de prévention : ne pas transmettre de données médicales sensibles via le formulaire.
- Ajouter carte ou lien Google Maps si adresse disponible.

Critères d'acceptation :

- Le formulaire est accessible.
- Les champs sont validés côté client.
- Aucun champ médical sensible n'est présent.
- Un message de succès/erreur est prévu.

Priorité : Haute

---

### US 8.2 — Gérer l'envoi du formulaire

**En tant qu'administrateur**, je veux recevoir les messages envoyés depuis le site.

Options possibles :

1. Netlify Forms si hébergement Netlify.
2. Formspree si besoin rapide.
3. Route handler Next.js + Resend si besoin plus propre.

Tâches :

- Choisir l'option la plus simple selon l'hébergeur.
- Implémenter l'envoi.
- Ajouter validation anti-spam minimale.
- Ajouter honeypot invisible.
- Ajouter message d'information RGPD.

Critères d'acceptation :

- Un message peut être envoyé.
- L'association reçoit l'email.
- Les erreurs sont affichées proprement.
- Le formulaire ne stocke pas de données sensibles dans le site.

Priorité : Haute

---

## EPIC 9 — SEO et métadonnées

### US 9.1 — Configurer les métadonnées globales

**En tant que responsable de l'association**, je veux que le site soit bien référencé localement.

Tâches :

- Configurer title et description par défaut.
- Ajouter Open Graph.
- Ajouter favicon.
- Ajouter image de partage.
- Ajouter metadataBase si domaine connu.

Critères d'acceptation :

- Les pages ont un title propre.
- Les descriptions sont cohérentes.
- Le partage social affiche une image et un titre corrects.

Priorité : Haute

---

### US 9.2 — SEO dynamique sur pages CMS

**En tant que visiteur venant de Google**, je veux trouver rapidement les contenus de l'association.

Tâches :

- Utiliser `seoTitle` et `seoDescription` des contenus TinaCMS.
- Générer les métadonnées des actualités.
- Générer les métadonnées des événements.
- Ajouter des URLs propres.

Critères d'acceptation :

- Chaque page principale a des métadonnées uniques.
- Chaque actualité a des métadonnées uniques.
- Chaque événement a des métadonnées uniques.

Priorité : Moyenne

---

### US 9.3 — Ajouter sitemap et robots

**En tant que responsable du site**, je veux faciliter l'indexation par les moteurs de recherche.

Tâches :

- Créer `sitemap.ts`.
- Créer `robots.ts`.
- Inclure les pages statiques.
- Inclure les actualités.
- Inclure les événements.

Critères d'acceptation :

- `/sitemap.xml` fonctionne.
- `/robots.txt` fonctionne.
- Les URLs importantes sont présentes.

Priorité : Moyenne

---

## EPIC 10 — Accessibilité et qualité

### US 10.1 — Vérifier l'accessibilité

**En tant que visiteur**, je veux pouvoir consulter le site facilement même avec des besoins d'accessibilité.

Tâches :

- Vérifier les contrastes.
- Ajouter textes alternatifs aux images.
- Vérifier les labels des formulaires.
- Vérifier la navigation clavier.
- Éviter les textes trop petits.

Critères d'acceptation :

- Les images importantes ont un alt.
- Les champs de formulaire ont des labels.
- Le menu mobile est utilisable au clavier.
- Les contrastes sont suffisants.

Priorité : Haute

---

### US 10.2 — Responsive design

**En tant que visiteur mobile**, je veux consulter le site sans difficulté depuis mon téléphone.

Tâches :

- Tester toutes les pages en mobile.
- Adapter les grilles.
- Vérifier le header mobile.
- Vérifier les boutons et formulaires.
- Éviter les débordements horizontaux.

Critères d'acceptation :

- Toutes les pages sont lisibles à 360px de large.
- Aucun scroll horizontal inutile.
- Les boutons sont facilement cliquables.

Priorité : Haute

---

### US 10.3 — Performance

**En tant que visiteur**, je veux un site rapide.

Tâches :

- Utiliser `next/image` pour les images.
- Compresser les images de démonstration.
- Éviter les dépendances inutiles.
- Charger uniquement ce qui est nécessaire.
- Vérifier les erreurs console.

Critères d'acceptation :

- Le site se charge rapidement en local.
- Pas d'erreur console majeure.
- Les images sont optimisées.

Priorité : Moyenne

---

## EPIC 11 — Pages légales

### US 11.1 — Mentions légales

**En tant qu'association**, je veux afficher les mentions légales obligatoires.

Tâches :

- Créer `/mentions-legales`.
- Ajouter contenu temporaire à compléter.
- Prévoir champs : éditeur, responsable publication, hébergeur, contact.

Critères d'acceptation :

- La page existe.
- Elle est liée dans le footer.
- Les zones à compléter sont clairement indiquées.

Priorité : Haute

---

### US 11.2 — Politique de confidentialité

**En tant que visiteur**, je veux comprendre comment mes données sont traitées.

Tâches :

- Créer `/politique-confidentialite`.
- Expliquer le formulaire de contact.
- Mentionner absence de collecte de données médicales sensibles.
- Mentionner les outils tiers utilisés si connus : hébergeur, formulaire, analytics éventuel.

Critères d'acceptation :

- La page existe.
- Elle est liée dans le footer.
- Le contenu est clair et simple.

Priorité : Haute

---

## EPIC 12 — Déploiement

### US 12.1 — Préparer le déploiement

**En tant que développeur**, je veux préparer le site pour Netlify ou Vercel.

Tâches :

- Vérifier `npm run build`.
- Corriger les erreurs TypeScript.
- Ajouter variables d'environnement TinaCMS.
- Ajouter README de déploiement.
- Documenter le choix Netlify ou Vercel.

Critères d'acceptation :

- `npm run build` passe.
- Les variables nécessaires sont listées.
- Le site est prêt à connecter à GitHub.

Priorité : Haute

---

### US 12.2 — Préparer la documentation admin

**En tant qu'administrateur non technique**, je veux savoir modifier le contenu du site.

Tâches :

- Créer `/docs/guide-admin.md`.
- Expliquer comment se connecter à TinaCMS.
- Expliquer comment modifier une page.
- Expliquer comment ajouter une actualité.
- Expliquer comment ajouter un événement.
- Expliquer comment changer le lien HelloAsso.
- Ajouter conseils sur les images.

Critères d'acceptation :

- Le guide est compréhensible pour une personne non technique.
- Les actions principales sont expliquées étape par étape.

Priorité : Moyenne

---

# 10. Ordre d'implémentation recommandé pour Cursor

Implémenter dans cet ordre :

```txt
1. Initialiser Next.js + TypeScript + Tailwind
2. Installer shadcn/ui
3. Créer le thème visuel global
4. Installer et configurer TinaCMS
5. Créer les collections TinaCMS
6. Ajouter contenus de démonstration
7. Créer Header + Footer + Layout
8. Créer page d'accueil
9. Créer pages Association, Actions, Soutenir
10. Créer Actualités liste + détail
11. Créer Événements liste + détail
12. Créer Témoignages + Partenaires
13. Créer Contact + formulaire
14. Créer pages légales
15. Ajouter SEO, sitemap, robots
16. Tester responsive, accessibilité, build
17. Créer guide admin
```

---

# 11. Prompt à donner à Cursor pour démarrer

Copier-coller ce prompt dans Cursor :

```txt
Tu es un développeur senior Next.js. Je veux que tu implémentes le site de l'association "Je vis en Rose", basée à Colomiers, avec Next.js App Router, TypeScript, TinaCMS, Tailwind CSS et shadcn/ui.

Lis entièrement le fichier BACKLOG_JE_VIS_EN_ROSE_CURSOR.md puis commence par l'EPIC 1.

Objectif : créer un site vitrine administrable, chaleureux, responsive, accessible et peu coûteux à héberger.

Contraintes :
- Ne pas créer de base de données.
- Ne pas collecter de données médicales sensibles.
- Utiliser TinaCMS pour gérer les pages, actualités, événements, témoignages, partenaires et paramètres du site.
- Utiliser shadcn/ui pour les composants principaux.
- Utiliser Tailwind CSS pour le design.
- Préparer un design doux, humain et professionnel autour du rose poudré, blanc cassé et prune.

Commence par vérifier la structure du projet. Si le projet n'existe pas encore, propose les commandes d'initialisation. Ensuite, implémente étape par étape en respectant l'ordre d'implémentation du backlog.

À chaque étape :
1. explique ce que tu vas faire ;
2. crée ou modifie les fichiers nécessaires ;
3. vérifie les erreurs TypeScript/imports ;
4. passe à l'étape suivante seulement quand la précédente est propre.
```

---

# 12. Exemples de contenus initiaux

## Accueil

```json
{
  "title": "Accueil",
  "seoTitle": "Je vis en Rose — Association de soutien autour du cancer à Colomiers",
  "seoDescription": "Je vis en Rose accompagne, sensibilise et soutient les personnes concernées par le cancer à Colomiers et dans la région toulousaine.",
  "heroTitle": "Ensemble, avançons avec douceur et espoir",
  "heroSubtitle": "Je vis en Rose accompagne les personnes touchées par le cancer et leurs proches à Colomiers et autour de Toulouse.",
  "ctaLabel": "Soutenir l'association",
  "ctaUrl": "/soutenir"
}
```

## Actualité exemple

```md
---
title: "Octobre Rose à Colomiers"
slug: "octobre-rose-colomiers"
date: "2026-10-01"
excerpt: "Une mobilisation locale pour sensibiliser au dépistage et soutenir les personnes concernées."
category: "Sensibilisation"
author: "Je vis en Rose"
featured: true
seoTitle: "Octobre Rose à Colomiers — Je vis en Rose"
seoDescription: "Découvrez l'action Octobre Rose organisée par l'association Je vis en Rose à Colomiers."
---

Contenu de démonstration à remplacer par l'association.
```

## Événement exemple

```md
---
title: "Rencontre solidaire à Colomiers"
slug: "rencontre-solidaire-colomiers"
startDate: "2026-10-12T14:00:00.000Z"
location: "Colomiers"
excerpt: "Un moment d'échange, d'écoute et de solidarité autour de l'accompagnement des personnes concernées par le cancer."
registrationUrl: ""
isPastEvent: false
seoTitle: "Rencontre solidaire à Colomiers — Je vis en Rose"
seoDescription: "Participez à une rencontre solidaire organisée par Je vis en Rose à Colomiers."
---

Contenu de démonstration à remplacer par l'association.
```

---

# 13. Definition of Done globale

Le projet est considéré comme terminé pour la V1 si :

- toutes les pages MVP existent ;
- les contenus principaux sont administrables dans TinaCMS ;
- le site est responsive ;
- le header et le footer sont complets ;
- le bouton de don externe fonctionne ;
- le formulaire de contact fonctionne ou est prêt à connecter ;
- les pages légales existent ;
- le SEO de base est configuré ;
- `npm run build` fonctionne ;
- un guide admin simple est disponible ;
- aucune donnée médicale sensible n'est collectée ;
- le site peut être déployé sur Netlify ou Vercel.

---

# 14. Points à demander à l'association

Avant la mise en ligne, récupérer :

```txt
Logo officiel
Nom exact de l'association
Statut juridique
Numéro RNA ou SIRET si disponible
Adresse complète ou zone d'intervention
Email de contact
Téléphone si public
Réseaux sociaux
Lien HelloAsso
Photos autorisées
Textes officiels
Noms des membres à afficher ou non
Mentions légales complètes
```

---

# 15. Hors périmètre V1

Ne pas développer en V1 :

- espace membre ;
- gestion d'adhérents ;
- paiement Stripe ;
- base de données Supabase ;
- authentification utilisateurs côté site public ;
- prise de rendez-vous médicale ;
- stockage de données de santé ;
- chatbot médical ;
- forum ;
- newsletter avancée.

Ces éléments pourront être étudiés en V2 si nécessaire.

---

# 16. V2 possible plus tard

Fonctionnalités envisageables :

- inscription à une newsletter ;
- espace bénévole ;
- gestion d'inscriptions aux événements ;
- formulaire de demande d'accompagnement plus cadré ;
- multilingue ;
- blog plus avancé ;
- statistiques de consultation ;
- intégration HelloAsso plus poussée ;
- Supabase si vraie donnée dynamique nécessaire.

