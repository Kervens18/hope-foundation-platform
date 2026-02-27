// js/blog.js
// Dynamically loads blog articles from a local JSON file and renders them

document.addEventListener('DOMContentLoaded', () => {
    const blogSection = document.getElementById('blog-articles');
    fetch('js/blog-articles.json')
        .then(res => res.json())
        .then(articles => {
            blogSection.innerHTML = '';
            if (!articles.length) {
                blogSection.innerHTML = '<p>Aucun article pour le moment.</p>';
                return;
            }
            articles.forEach(article => {
                const articleElem = document.createElement('article');
                articleElem.className = 'blog-article';
                articleElem.innerHTML = `
                    <h2>${article.title}</h2>
                    <div class="blog-meta">
                        <span>${article.date}</span> |
                        <span>${article.author}</span>
                    </div>
                    <img src="${article.image}" alt="${article.title}" loading="lazy" />
                    <p>${article.summary}</p>
                    <a href="#" class="read-more" tabindex="0" aria-label="Lire l'article complet : ${article.title}">Lire la suite</a>
                `;
                blogSection.appendChild(articleElem);
            });
        })
        .catch(() => {
            blogSection.innerHTML = '<p>Erreur lors du chargement des articles.</p>';
        });
});
