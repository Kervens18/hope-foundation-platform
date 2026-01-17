# 📊 Tableau de Données des Projets

Vous pouvez personnaliser les projets en modifiant le tableau ci-dessous, puis copier les modifications dans `js/config.js`.

## Vue d'ensemble rapide

| ID | Titre | Montant | Objectif | Jours | Bénéficiaires | Image |
|----|-------|---------|----------|-------|---------------|-------|
| 1 | Eau Potable en Afrique | 32,500€ | 50,000€ | 12 | 2,000 | project-1.jpg |
| 2 | Cliniques Mobiles | 18,900€ | 35,000€ | 25 | 5,000 | project-2.jpg |
| 3 | Nutrition | 28,700€ | 45,000€ | 18 | 1,500 | project-3.jpg |
| 4 | Électricité Solaire | 22,450€ | 40,000€ | 20 | 800 | project-4.jpg |
| 5 | Éducation | 35,200€ | 60,000€ | 15 | 3,000 | project-5.jpg |
| 6 | Refuge d'Urgence | 41,800€ | 75,000€ | 8 | 600 | project-6.jpg |

## Modifier Rapidement

### Format JSON pour copier-coller

Si vous voulez ajouter ou modifier un projet rapidement, voici le format exact à utiliser dans `js/config.js`:

```javascript
{
  id: 1,
  title: 'TITRE_DU_PROJET',
  description: 'DESCRIPTION_COMPLÈTE_DU_PROJET',
  image: 'images/project-1.jpg',
  emoji: '💧',
  category: 'water',
  badge: 'urgent',
  raised: 32500,
  goal: 50000,
  donors: 543,
  days: 12,
  beneficiaries: 2000
}
```

### Template pour nouveau projet

Copiez et complétez ce template:

```javascript
{
  id: 7,
  title: 'VOTRE_TITRE_ICI',
  description: 'Décrivez votre projet en détail. Qui aidez-vous? Comment? Quel impact?',
  image: 'images/project-7.jpg',
  emoji: '🎯',
  category: 'water',
  badge: 'active',
  raised: 0,
  goal: 50000,
  donors: 0,
  days: 30,
  beneficiaries: 1000
}
```

## Valeurs Prédéfinies à Utiliser

### Categories
```
category: 'water'       // Eau
category: 'health'      // Santé
category: 'food'        // Alimentation
category: 'emergency'   // Urgence
category: 'education'   // Éducation
```

### Badges
```
badge: 'urgent'         // Affiche 🚨 Urgent
badge: 'active'         // Affiche ✓ Actif
```

### Emojis Populaires
```
💧 💧💧 Eau
🏥 🩺 🏥 Santé
🍖 🍗 🥣 Alimentation
⚡ 💡 🔌 Électricité
📚 🎓 📖 Éducation
🏠 🏡 🏘️ Refuge
🌳 🌍 ♻️ Environnement
👶 👧 👦 Enfants
```

## Calendrier de Mise à Jour

Mettez à jour ces champs régulièrement:

- **Chaque jour:** `days` (jours restants)
- **Chaque semaine:** `raised` (montant collecté), `donors` (nombre)
- **Mensuellement:** `description` (à jour les progrès)
- **Si changement:** `badge` (urgent → active), `image` (nouvelle photo)

## Exemple: Créer un Nouveau Projet

Disons que vous lancez un nouveau projet d'urgence alimentaire:

```javascript
{
  id: 7,
  title: 'Aide Alimentaire d\'Urgence',
  description: 'Crise alimentaire majeure. Distribution immédiate de 5000 rations à Port-au-Prince. Chaque don sauve une vie.',
  image: 'images/project-7.jpg',
  emoji: '🍖',
  category: 'food',
  badge: 'urgent',
  raised: 5000,
  goal: 25000,
  donors: 145,
  days: 7,
  beneficiaries: 5000
}
```

## Validation

Avant de sauvegarder, vérifiez:

- ✅ L'ID est unique (pas deux projets avec ID: 1)
- ✅ Les guillemets sont fermés: `"texte"`
- ✅ Les virgules sont bien placées (entre champs, pas après le dernier)
- ✅ L'image existe: `images/project-X.jpg`
- ✅ Les nombres sont sans guillemets: `12500` pas `"12500"`

## Enregistrement

1. Modifiez `js/config.js`
2. Appuyez sur **Ctrl+S** pour sauvegarder
3. Rechargez le site: **F5**
4. Vérifiez que tout s'affiche correctement

## Nombre de Projets

- **Minimum:** 1 projet
- **Recommandé:** 3-6 projets
- **Maximum:** Pas de limite technique (mais attention à l'affichage)

## Questions Fréquentes

**Q: Je dois changer le montant, comment faire?**
A: Éditez le champ `raised: 32500` avec la nouvelle valeur.

**Q: Que faire si je n'ai pas d'image?**
A: Ne vous inquiétez pas, l'emoji s'affichera automatiquement.

**Q: Comment créer une superbe description?**
A: Soyez précis sur:
- Qui aidez-vous? (2000 enfants, 50 villages, etc.)
- Quel est le problème? (Manque d'eau, pas d'école, etc.)
- Quelle est la solution? (Puits, clinique, etc.)
- Quel est l'impact? (Durée, bénéfices, etc.)

**Q: Puis-je mettre à jour en direct?**
A: Oui! Éditez config.js et rechargez le site (F5).

## Support et Ressources

- **Guide complet:** [PROJECTS_GUIDE.md](PROJECTS_GUIDE.md)
- **Guide rapide:** [QUICK_START_PROJECTS.md](QUICK_START_PROJECTS.md)
- **Images:** Voir [images/README.md](images/README.md)

Bonne chance! 🚀
