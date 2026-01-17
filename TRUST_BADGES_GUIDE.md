# Trust Badges Section - Personnalisation

## Modification Simple

### Dans `js/config.js`:

```javascript
const trustBadges = [
  {
    emoji: '🏆',                          // Emoji de fallback
    icon: 'images/badge-certified.png',   // Image optionnelle
    title: 'Certifiée ONG',               // Titre
    description: 'Transparence financière garantie',  // Description
    color: '#F59E0B'                      // Couleur de la bordure gauche
  },
  {
    emoji: '📜',
    icon: 'images/badge-fiscal.png',
    title: 'Reçu Fiscal',
    description: '66% de réduction d\'impôts',
    color: '#10B981'
  },
  {
    emoji: '✨',
    icon: 'images/badge-impact.png',
    title: 'Impact Vérifié',
    description: 'Rapports trimestriels détaillés',
    color: '#0EA5E9'
  }
];
```

## Options de Personnalisation

### 1. **Ajouter une nouvelle section:**

```javascript
{
  emoji: '💝',
  icon: 'images/badge-donations.png',
  title: 'Donations Sécurisées',
  description: 'Tous vos dons sont protégés',
  color: '#EC4899'
}
```

### 2. **Modifier les couleurs:**

Couleurs recommandées:
- `#F59E0B` - Orange/Amber
- `#10B981` - Vert
- `#0EA5E9` - Bleu
- `#EC4899` - Rose
- `#8B5CF6` - Violet
- `#EF4444` - Rouge

### 3. **Ajouter des images:**

Placez vos images dans le dossier `images/`:
- `images/badge-certified.png` (64x64px recommandé)
- `images/badge-fiscal.png`
- `images/badge-impact.png`

**Format recommandé:**
- PNG avec transparent
- Dimensions: 64x64px
- Poids: < 50KB

### 4. **Sans image (emoji seulement):**

```javascript
{
  emoji: '🔐',
  icon: null,  // Pas d'image
  title: 'Sécurité',
  description: 'Données protégées',
  color: '#0EA5E9'
}
```

## Design Features

✅ **Bordure colorée** à gauche de chaque carte
✅ **Fond dégradé** adapté à la couleur
✅ **Image fallback** sur emoji si l'image ne charge pas
✅ **Responsive** - Grille adaptative
✅ **Hover effect** - Animation au survol

## Structure HTML Générée

```html
<div class="trust-badge card">
  <!-- Image ou emoji -->
  <img src="images/badge-certified.png" ... />
  
  <!-- Titre -->
  <div style="...">Certifiée ONG</div>
  
  <!-- Description -->
  <div style="...">Transparence financière garantie</div>
</div>
```

## Exemples de Personnalisation Complète

### Exemple 1: Section Plus Courte (2 badges)

```javascript
const trustBadges = [
  {
    emoji: '🏆',
    icon: 'images/badge-certified.png',
    title: 'Certifiée ONG',
    description: 'Transparence financière garantie',
    color: '#F59E0B'
  },
  {
    emoji: '✨',
    icon: 'images/badge-impact.png',
    title: 'Impact Vérifié',
    description: 'Rapports trimestriels détaillés',
    color: '#0EA5E9'
  }
];
```

### Exemple 2: Ajouter une 4ème section

```javascript
const trustBadges = [
  {
    emoji: '🏆',
    icon: 'images/badge-certified.png',
    title: 'Certifiée ONG',
    description: 'Transparence financière garantie',
    color: '#F59E0B'
  },
  {
    emoji: '📜',
    icon: 'images/badge-fiscal.png',
    title: 'Reçu Fiscal',
    description: '66% de réduction d\'impôts',
    color: '#10B981'
  },
  {
    emoji: '✨',
    icon: 'images/badge-impact.png',
    title: 'Impact Vérifié',
    description: 'Rapports trimestriels détaillés',
    color: '#0EA5E9'
  },
  {
    emoji: '🌍',
    icon: 'images/badge-worldwide.png',
    title: 'Portée Mondiale',
    description: 'Présent dans 34 pays',
    color: '#8B5CF6'
  }
];
```

## Palette de Couleurs Recommandées

```
Couleur Primaire:    #0C4A6E (Bleu foncé)
Couleur Secondaire:  #0EA5E9 (Bleu ciel)
Accent:              #F59E0B (Amber)
Succès:              #10B981 (Vert)
Rose:                #EC4899
Violet:              #8B5CF6
Rouge:               #EF4444
```

## Troubleshooting

**Images ne s'affichent pas?**
- Vérifiez le chemin: `images/badge-name.png`
- Assurez-vous que le fichier existe
- Format PNG recommandé

**Couleurs ne correspondent pas?**
- Utilisez format hexadécimal: `#RRGGBB`
- Testez avec des couleurs simples d'abord

**Emoji mal aligné?**
- L'emoji s'affiche si l'image échoue (fallback intégré)
- Pas besoin de configurer emoji ET image

## Styles CSS Disponibles

Les badges utilisent:
- `.trust-badge` - Classe du badge
- `.card` - Style de carte avec ombre
- `box-shadow` - Effet d'ombre sur hover
- `transform` - Animation au survol
