// js/temoignages.js
// Charge dynamiquement les témoignages et partenaires depuis un fichier JSON

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('temoignages-section');
    if (!section) return;
    fetch('js/temoignages.json')
        .then(res => res.json())
        .then(items => {
            section.innerHTML = '';
            if (!items.length) {
                section.innerHTML = '<p>Aucun témoignage pour le moment.</p>';
                return;
            }
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'temoignage-card';
                card.innerHTML = `
                    <img src="${item.photo}" alt="Photo de ${item.name}" class="temoignage-photo" loading="lazy" />
                    <blockquote>“${item.message}”</blockquote>
                    <div class="temoignage-meta">
                        <strong>${item.name}</strong><br><span>${item.role}</span>
                    </div>
                `;
                section.appendChild(card);
            });
        })
        .catch(() => {
            section.innerHTML = '<p>Erreur lors du chargement des témoignages.</p>';
        });
});
