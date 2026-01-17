# 📋 Guide de Personnalisation des Projets

## Vue d'ensemble

La section "Projets Recommandés" est entièrement personnalisable. Vous pouvez ajouter, modifier ou supprimer des projets directement dans le fichier `js/config.js`.

## Structure d'un Projet

Chaque projet dans le tableau `projects[]` contient les champs suivants:

```javascript
{
  id: 1,                                    // Identifiant unique (obligatoire)
  title: 'Eau Potable en Afrique',         // Titre du projet (obligatoire)
  description: 'Ce projet vise à...',      // Description complète (obligatoire)
  image: 'images/project-1.jpg',           // Chemin vers l'image (images/project-N.jpg)
  emoji: '💧',                              // Emoji de secours (fallback si image manquante)
  category: 'water',                        // Catégorie: 'water', 'health', 'food', 'emergency', 'education'
  badge: 'urgent',                          // Badge: 'urgent' ou 'active'
  raised: 32500,                            // Montant collecté en EUR
  goal: 50000,                              // Objectif de collecte en EUR
  donors: 543,                              // Nombre de donateurs
  days: 12,                                 // Jours restants
  beneficiaries: 2000                       // Nombre de bénéficiaires directs
}
```

## Comment Modifier un Projet Existant

1. **Ouvrez le fichier:** `js/config.js`
2. **Trouvez le tableau `projects[]`** (autour de la ligne 18)
3. **Modifiez les champs souhaités:**

### Exemple: Modifier le titre et la description

**Avant:**
```javascript
{
  id: 1,
  title: 'Eau Potable en Afrique',
  description: 'Ce projet vise à fournir...',
  // ...
}
```

**Après:**
```javascript
{
  id: 1,
  title: 'Accès à l\'eau potable en Haïti',
  description: 'Notre mission est d\'installer 20 puits et 50 fontaines...',
  // ...
}
```

### Exemple: Changer l'image

1. **Placez votre image** dans le dossier `/images/`
2. **Nommez-la:** `project-1.jpg` (ou le numéro du projet)
3. **Mettez à jour le chemin dans config.js:**

```javascript
{
  id: 1,
  image: 'images/project-1.jpg',  // ← Ce chemin doit correspondre à votre fichier
  // ...
}
```

### Exemple: Modifier les statistiques de collecte

```javascript
{
  id: 1,
  raised: 45000,      // Montant collecté (mettez à jour régulièrement)
  goal: 60000,        // Objectif total
  donors: 612,        // Nombre de donateurs
  days: 8,            // Jours restants avant fin de collecte
  beneficiaries: 2500, // Personnes bénéficiaires
  // ...
}
```

## Comment Ajouter un Nouveau Projet

1. **Ouvrez** `js/config.js`
2. **Trouvez la fin du tableau `projects[]`**
3. **Ajoutez une virgule** au dernier projet (s'il n'y en a pas)
4. **Ajoutez le nouveau projet:**

```javascript
{
  id: 7,                              // Nouvel ID unique (incrémentez)
  title: 'Nom du nouveau projet',
  description: 'Description complète du projet...',
  image: 'images/project-7.jpg',      // Votre nouvelle image
  emoji: '🏥',                         // Emoji approprié
  category: 'health',                 // Catégorie
  badge: 'urgent',                    // urgent ou active
  raised: 15000,
  goal: 40000,
  donors: 250,
  days: 30,
  beneficiaries: 1000
}
```

## Comment Supprimer un Projet

1. **Ouvrez** `js/config.js`
2. **Trouvez le projet** à supprimer
3. **Sélectionnez la ligne entière** (y compris les virgules)
4. **Supprimez le bloc entier**

**Important:** Assurez-vous qu'il n'y a pas de virgule supplémentaire après le dernier projet.

## Formats d'Images Recommandés

- **Format:** JPG, PNG ou WebP
- **Dimensions:** 600x450px minimum (ratio 4:3)
- **Taille du fichier:** <500 KB (optimisé pour web)
- **Emplacement:** Dossier `/images/`
- **Nommage:** `project-1.jpg`, `project-2.jpg`, etc.

## Catégories Disponibles

- `water` - Projets d'accès à l'eau
- `health` - Projets sanitaires et médicaux
- `food` - Projets alimentaires et nutritionnels
- `emergency` - Interventions d'urgence
- `education` - Projets éducatifs

## Badges Disponibles

- `urgent` - Affiche 🚨 Urgent (pour les projets critiques)
- `active` - Affiche ✓ Actif (pour les projets en cours)

## Comportement des Images

### Si l'image est présente
- L'image s'affiche dans la carte du projet
- Si l'image ne peut pas charger, l'emoji est affiché comme fallback

### Si l'image n'existe pas
- L'emoji s'affiche automatiquement
- Aucune erreur n'est générée

### Optimisation
- Les images sont redimensionnées automatiquement pour tenir dans la carte (300x220px)
- L'objet-fit: cover garde le ratio de l'image

## Exemple Complet de Configuration

```javascript
const state = { /* ... */ };

const projects = [
  // Projet 1: Eau Potable
  {
    id: 1,
    title: 'Eau Potable en Afrique',
    description: 'Ce projet vise à fournir un accès à l\'eau potable à 2000 personnes en milieu rural. Installation de 10 puits et mise en place de systèmes de filtration.',
    image: 'images/project-1.jpg',
    emoji: '💧',
    category: 'water',
    badge: 'urgent',
    raised: 32500,
    goal: 50000,
    donors: 543,
    days: 12,
    beneficiaries: 2000,
    villages: 5,
    wells: 10
  },
  
  // Projet 2: Cliniques Mobiles
  {
    id: 2,
    title: 'Cliniques Mobiles en Haïti',
    description: 'Déploiement de 5 cliniques mobiles pour apporter des soins médicaux d\'urgence aux zones reculées de Haïti. Consultations gratuites et distribution de médicaments essentiels.',
    image: 'images/project-2.jpg',
    emoji: '🏥',
    category: 'health',
    badge: 'active',
    raised: 18900,
    goal: 35000,
    donors: 289,
    days: 25,
    beneficiaries: 5000
  },
  
  // ... autres projets ...
];
```

## Conseils de Personnalisation

1. **Mettez à jour régulièrement** les montants collectés et les donateurs
2. **Utilisez des descriptions claires** et émotionnelles
3. **Choisissez des images impactantes** montrant le travail sur le terrain
4. **Variez les emojis** selon la catégorie du projet
5. **Définissez des délais réalistes** pour les projets urgents

## Dépannage

**Les images n'apparaissent pas?**
- Vérifiez que le fichier existe dans `/images/`
- Vérifiez que le chemin dans config.js est correct: `images/project-1.jpg`
- Assurez-vous que le fichier n'a pas d'espace dans son nom

**Un projet n'apparaît pas sur le site?**
- Vérifiez qu'il y a une virgule après le projet précédent (sauf le dernier)
- Vérifiez que l'ID est unique
- Rechargez la page dans votre navigateur

**Erreurs JavaScript?**
- Ouvrez la console du navigateur (F12)
- Cherchez des erreurs de syntaxe (guillemets manquants, virgules, accolades)
- Copiez/collez le message d'erreur pour localiser le problème

## Support des Champs Additionnels

Vous pouvez ajouter des champs personnalisés aux projets:

```javascript
{
  id: 1,
  // ... champs standard ...
  location: 'Port-au-Prince, Haïti',  // Localisation personnalisée
  duration: '6 mois',                  // Durée du projet
  impact: 'Réduction de 80% des maladies hydriques'  // Impact mesuré
}
```

Ces champs pourront être utilisés dans le modal de détail du projet pour afficher plus d'informations.
