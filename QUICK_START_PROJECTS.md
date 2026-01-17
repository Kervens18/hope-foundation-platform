# 🚀 Guide Rapide: Personnaliser les Projets

Bienvenue! Ce guide vous montre comment modifier rapidement les projets sans toucher au code compliqué.

## 📝 Étapes Simples

### 1. Ouvrir le fichier de configuration
Ouvrez le fichier: **`js/config.js`**

### 2. Trouver les projets
Cherchez la section `const projects = [` (autour de la ligne 18)

### 3. Modifier un projet
Voici ce que vous pouvez changer facilement:

```javascript
{
  id: 1,                    // ← Ne pas modifier
  title: 'Eau Potable',     // ← Changer le titre
  description: 'Texte...',  // ← Changer la description
  image: 'images/project-1.jpg',  // ← Changer le chemin de l'image
  emoji: '💧',              // ← Changer l'emoji
  raised: 32500,            // ← Mettre à jour les montants
  goal: 50000,              // ← Modifier l'objectif
  donors: 543,              // ← Mettre à jour les donateurs
  days: 12,                 // ← Modifier les jours restants
}
```

## 🖼️ Ajouter/Changer une Image

### Étape 1: Préparer l'image
1. Ayez une photo du projet (JPG ou PNG)
2. Redimensionnez à 600×450 pixels
3. Compressez le fichier (<500 KB)

**Outils gratuits:**
- [Squoosh.app](https://squoosh.app) - Redimensionnement facile
- [TinyJPG.com](https://tinyjpg.com) - Compression rapide

### Étape 2: Placer le fichier
1. Ouvrez le dossier `/images/`
2. Mettez votre fichier avec le bon nom:
   - `project-1.jpg` pour le projet 1
   - `project-2.jpg` pour le projet 2
   - etc.

### Étape 3: Mettre à jour config.js
Changez la ligne `image:` du projet:
```javascript
image: 'images/project-1.jpg',  // ← Chemin exact de votre fichier
```

## ✏️ Changer le Titre et Description

Trouvez le projet et modifiez:

```javascript
// AVANT:
title: 'Eau Potable en Afrique',
description: 'Ce projet vise à...',

// APRÈS:
title: 'Accès à l\'eau en Haïti',
description: 'Nous installons 20 puits pour 2000 personnes...',
```

**Astuce:** Incluez l'apostrophe avec un backslash: `\'` ou utilisez des guillemets doubles.

## 💰 Mettre à Jour les Montants

```javascript
raised: 45000,   // Montant collecté en EUR
goal: 60000,     // Objectif total en EUR
donors: 612,     // Nombre de donateurs
days: 8,         // Jours avant fin de collecte
```

## 🎯 Ajouter un Nouveau Projet

1. Trouvez la fin du dernier projet
2. Ajoutez une virgule si elle manque
3. Copiez ce template:

```javascript
{
  id: 7,
  title: 'Nom du projet',
  description: 'Description du projet...',
  image: 'images/project-7.jpg',
  emoji: '🎯',
  category: 'water',
  badge: 'active',
  raised: 10000,
  goal: 30000,
  donors: 150,
  days: 30,
  beneficiaries: 500
}
```

4. Changez les valeurs selon votre projet

## 🗑️ Supprimer un Projet

1. Trouvez le bloc du projet
2. Sélectionnez tout (de `{` à `}`)
3. Appuyez sur Delete
4. Assurez-vous qu'il n'y a pas de virgule orpheline

## 🎨 Changer l'Emoji

Remplacez l'emoji par n'importe quel autre:
- 💧 Eau
- 🏥 Santé
- 🍖 Alimentation
- ⚡ Électricité
- 📚 Éducation
- 🏠 Refuge
- 🌳 Environnement
- 👶 Enfants

## 🏷️ Changer le Badge

```javascript
badge: 'urgent',   // Affiche 🚨 Urgent
badge: 'active',   // Affiche ✓ Actif
```

## 📋 Changer la Catégorie

```javascript
category: 'water',      // Eau
category: 'health',     // Santé
category: 'food',       // Alimentation
category: 'emergency',  // Urgence
category: 'education',  // Éducation
```

## 💾 Sauvegarder et Tester

1. **Sauvegardez** le fichier (Ctrl+S)
2. **Rechargez** le site (F5 ou Ctrl+R)
3. **Regardez** les projets et leurs images
4. Si une image ne s'affiche pas, l'emoji s'affichera à la place

## 🐛 Si ça ne marche pas

**Les images ne s'affichent pas?**
- Vérifiez le chemin: `images/project-1.jpg` (exact!)
- Vérifiez que le fichier existe dans `/images/`
- Vérifiez qu'il n'y a pas d'espace: `project 1.jpg` ❌

**Le site affiche une erreur?**
- Appuyez sur F12 pour ouvrir la console
- Cherchez le message d'erreur
- Vérifiez les guillemets et virgules dans config.js

**Un projet disparaît?**
- Vérifiez qu'il y a une virgule après le projet précédent
- Vérifiez que l'ID est unique (pas deux ID: 1)
- Vérifiez les accolades `{}` et crochets `[]`

## 📖 Besoin de Plus?

Consultez **[PROJECTS_GUIDE.md](PROJECTS_GUIDE.md)** pour un guide complet.

## ⚡ Raccourcis Courants

### Copier-coller un projet existant

1. Copiez un projet complet (bloc `{}`)
2. Collez-le juste après
3. Changez l'ID: `id: 7` (utilisez le prochain numéro)
4. Changez les autres valeurs

### Chercher/remplacer du texte

Appuyez sur Ctrl+H dans VS Code:
- **Chercher:** `Eau Potable en Afrique`
- **Remplacer par:** `Accès à l'eau en Haïti`

### Utiliser des emojis du clavier

Windows: Appuyez sur **Win + ;** pour la palette d'emojis

## 🎓 Exemple Complet

```javascript
{
  id: 3,
  title: 'Nutrition pour Enfants',
  description: 'Programme de nutrition pour 1500 enfants en Haïti. Distribution de lait enrichi et aliments fortifiés chaque jour d\'école.',
  image: 'images/project-3.jpg',
  emoji: '🍖',
  category: 'food',
  badge: 'active',
  raised: 28700,
  goal: 45000,
  donors: 421,
  days: 18,
  beneficiaries: 1500
}
```

Voilà! Vous êtes maintenant capable de personnaliser complètement vos projets! 🎉
