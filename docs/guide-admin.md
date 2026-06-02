# Guide d'administration — Je vis en Rose

Ce guide explique, étape par étape, comment modifier le contenu du site sans
connaissance technique. L'édition se fait via **TinaCMS**, une interface simple
accessible depuis votre navigateur.

---

## 1. Accéder à l'administration

1. Ouvrez le site avec l'adresse d'administration : ajoutez `/admin` à la fin
   de l'adresse du site (par exemple `https://votre-site.fr/admin`).
2. Connectez-vous si une connexion vous est demandée.
3. Vous arrivez sur le tableau de bord : à gauche, la liste des contenus
   modifiables (Pages, Actualités, Événements, Témoignages, Partenaires,
   Paramètres du site).

> En cours de développement local, le développeur lance l'admin avec la
> commande `npm run dev:cms`, puis ouvre `http://localhost:3000/admin`.

---

## 2. Modifier le contenu d'une page

1. Cliquez sur **Pages** dans le menu de gauche.
2. Choisissez la page à modifier (Accueil, L'association, Nos actions,
   Nous soutenir, Contact).
3. Modifiez les champs souhaités : titre, sous-titre, image, boutons, sections.
4. Cliquez sur **Save** (Enregistrer) en haut à droite.

Les modifications sont visibles après enregistrement.

---

## 3. Ajouter une actualité

1. Cliquez sur **Actualités**.
2. Cliquez sur le bouton **Create New** (Créer).
3. Renseignez :
   - le **titre** ;
   - le **slug** (l'adresse de la page, en minuscules et sans accents, ex.
     `octobre-rose-2027`) ;
   - la **date** ;
   - un **extrait** court ;
   - une **image de couverture** et son **texte alternatif** ;
   - la **catégorie** et l'**auteur** ;
   - le **contenu** dans l'éditeur de texte.
4. Cliquez sur **Save**.

---

## 4. Ajouter un événement

1. Cliquez sur **Événements** puis **Create New**.
2. Renseignez le titre, le slug, la **date de début** (et de fin si besoin),
   le **lieu**, l'**adresse**, un **extrait** et le **contenu**.
3. Si une inscription est nécessaire, collez le **lien d'inscription**.
4. Cochez **Événement passé** une fois l'événement terminé pour qu'il bascule
   dans la section « Événements passés ».
5. Cliquez sur **Save**.

---

## 5. Gérer les témoignages

1. Cliquez sur **Témoignages**.
2. Créez ou modifiez un témoignage : nom, rôle (facultatif), texte.
3. Cochez **Publié** pour l'afficher sur le site.
4. Utilisez le champ **Ordre d'affichage** pour classer les témoignages.

> Important : ne demandez jamais et ne publiez jamais d'informations médicales
> sensibles. Les témoignages doivent rester publics, consentis et non sensibles.

---

## 6. Gérer les partenaires

1. Cliquez sur **Partenaires**.
2. Ajoutez le **nom**, le **logo**, le **site web** (facultatif) et l'**ordre**.
3. Cochez **Publié** pour l'afficher.

---

## 7. Changer le lien de don (HelloAsso)

1. Cliquez sur **Paramètres du site**.
2. Modifiez le champ **Lien HelloAsso (don)** avec l'adresse de votre campagne.
3. Cliquez sur **Save**. Tous les boutons « Faire un don » du site utilisent
   automatiquement ce lien.

Vous pouvez aussi modifier ici le nom du site, l'email, le téléphone, l'adresse
et les liens vers les réseaux sociaux.

---

## 8. Conseils sur les images

- Privilégiez des images **horizontales** et **lumineuses**, au format `.jpg`
  ou `.webp`, d'un poids raisonnable (idéalement moins de 500 Ko).
- Renseignez toujours un **texte alternatif** décrivant l'image (utile pour
  l'accessibilité et le référencement).
- Évitez toute image médicale, choquante ou anxiogène.
- Les images sont déposées via l'onglet **Médias** de TinaCMS ; elles sont
  enregistrées dans le dossier `public/images`.

---

## 9. En cas de doute

- Enregistrez régulièrement vos modifications.
- Une modification n'efface jamais l'historique : le développeur peut revenir
  en arrière si besoin.
- Pour toute question technique, contactez la personne en charge du site.
