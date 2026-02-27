// gallery-loader.js
// Charge dynamiquement les photos de la galerie générées par Netlify CMS

async function fetchGalleryPhotos() {
  const photos = [];
  try {
    const index = await fetch('images/uploads/galerie/index.json').then(r => r.json());
    for (const file of index) {
      const res = await fetch(`images/uploads/galerie/${file}`);
      const text = await res.text();
      const photo = parseMarkdown(text);
      photos.push(photo);
    }
  } catch (e) {
    console.error('Erreur chargement galerie:', e);
  }
  return photos;
}

window.fetchGalleryPhotos = fetchGalleryPhotos;
