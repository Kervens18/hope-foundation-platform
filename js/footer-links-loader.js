// footer-links-loader.js
// Charge dynamiquement les liens réseaux sociaux du footer

async function fetchFooterLinks() {
  try {
    const res = await fetch('content/footer/social_links.json');
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}
window.fetchFooterLinks = fetchFooterLinks;
