# Modifier les liens réseaux sociaux dans le footer via Netlify CMS

## Étape 1 : Ajouter les champs dans l’admin

Dans le fichier `static/admin/config.yml`, ajoutez une collection ou des champs pour les liens réseaux sociaux, par exemple :

```yaml
- name: "footer"
  label: "Footer"
  files:
    - label: "Liens Réseaux Sociaux"
      name: "social_links"
      file: "content/footer/social_links.json"
      fields:
        - { label: "Facebook", name: "facebook", widget: "string", required: false }
        - { label: "TikTok", name: "tiktok", widget: "string", required: false }
        - { label: "Instagram", name: "instagram", widget: "string", required: false }
        - { label: "Pinterest", name: "pinterest", widget: "string", required: false }
```

## Étape 2 : Modifier les liens dans l’admin

1. Accédez à l’admin (`/admin`)
2. Cliquez sur « Footer » puis « Liens Réseaux Sociaux »
3. Modifiez les URLs des réseaux sociaux
4. Cliquez sur « Publish »

## Étape 3 : Utiliser ces liens dans le code

Dans `js/components.js`, chargez les liens depuis le fichier `content/footer/social_links.json` et utilisez-les dans le footer à la place des URLs fixes.

---

Besoin d’aide pour automatiser cette intégration ? Demandez-moi d’ajouter la lecture dynamique des liens dans le code !
