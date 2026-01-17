// COMPONENT RENDERING FUNCTIONS

function renderHeader() {
  return `
    <header class="sticky-header">
      <div class="container">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 20px 0;">
          <div class="flex items-center gap-3">
            <div style="font-size: 40px;">🌍</div>
            <div>
              <h1 class="font-display text-2xl font-bold" style="color: var(--color-primary); line-height: 1;">FIRST AID INTERNATIONAL, INC.</h1>
              <p style="font-size: 11px; letter-spacing: 1px; color: var(--color-text-light); text-transform: uppercase;">Building a Better Future</p>
            </div>
          </div>
          <nav class="hidden md:flex items-center gap-6" style="font-weight: 500;">
            <a href="#" onclick="event.preventDefault(); scrollToSection('projects')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Projets</a>
            <a href="#" onclick="event.preventDefault(); scrollToSection('impact')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Impact</a>
            <a href="#" onclick="event.preventDefault(); scrollToSection('about')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">À propos</a>
            <a href="#" onclick="event.preventDefault(); scrollToSection('blog')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Actualités</a>
            <a href="#" onclick="event.preventDefault(); openVolunteerModal()" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Bénévolat</a>
          </nav>
          <div class="flex items-center gap-3">
            <button onclick="openQuickDonate()" class="btn btn-primary">💝 Faire un don</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderAnnouncementBar() {
  return `
    <div style="background: linear-gradient(135deg, var(--color-accent) 0%, #D97706 100%); color: white; padding: 12px; text-align: center; font-size: 14px; font-weight: 600;">
      ⚡ Campagne d'urgence : Tous les dons sont doublés ce week-end ! <a href="#" onclick="event.preventDefault(); showPromoPopup();" style="color: white; text-decoration: underline; margin-left: 8px;">En savoir plus →</a>
    </div>
  `;
}

function renderHeroSection() {
  return `
    <section style="background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 50%, #DBEAFE 100%); padding: 100px 0;">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <span class="badge badge-urgent mb-4 animate-fade-in-up">🚨 Campagne Urgente</span>
          <h2 class="font-display animate-fade-in-up delay-100" style="font-size: clamp(40px, 6vw, 72px); font-weight: 800; color: var(--color-primary); line-height: 1.1; margin-bottom: 24px;">Transformons des vies ensemble</h2>
          <p class="animate-fade-in-up delay-200" style="font-size: 20px; color: var(--color-text-light); margin-bottom: 40px; line-height: 1.7;">Votre générosité permet d'apporter eau, éducation et espoir à des milliers de personnes dans le besoin.</p>
          <div class="countdown-timer animate-fade-in-up delay-300" style="margin-bottom: 40px;">
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-days">7</div>
              <div class="countdown-label">Jours</div>
            </div>
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-hours">12</div>
              <div class="countdown-label">Heures</div>
            </div>
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-minutes">34</div>
              <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-seconds">56</div>
              <div class="countdown-label">Secondes</div>
            </div>
          </div>
          <div class="flex gap-4 justify-center animate-fade-in-up delay-400">
            <button onclick="openQuickDonate()" class="btn btn-accent" style="font-size: 18px; padding: 18px 36px;">💝 Doubler mon impact</button>
            <button onclick="scrollToSection('projects')" class="btn btn-outline">Découvrir les projets</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderImpactCounters() {
  return `
    <section id="impact" class="section" style="background: var(--color-surface);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 64px;">
          <h2 class="font-display text-4xl font-bold mb-3" style="color: var(--color-primary);">Notre Impact en Chiffres</h2>
          <p style="color: var(--color-text-light); font-size: 18px;">Grâce à la générosité de nos donateurs</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
          ${impactStats.map(stat => `
            <div class="card" style="padding: 40px; text-align: center;">
              <div style="font-size: 56px; margin-bottom: 16px;">${stat.emoji}</div>
              <div class="impact-counter">${stat.value}</div>
              <div style="font-weight: 600; color: var(--color-text); margin-top: 8px;">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderProjectCard(project) {
  const progress = Math.round((project.raised / project.goal) * 100);
  return `
    <div class="card" style="cursor: pointer; overflow: hidden;" onclick="openProjectModal(${project.id})">
      <div class="image-container" style="height: 220px; position: relative; background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);">
        ${project.image ? `
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.innerHTML='<span style=\\'font-size: 80px;\\'>${project.emoji}</span>'">
        ` : `
          <div class="image-zoom" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 80px;">
            ${project.emoji}
          </div>
        `}
        <span class="badge badge-${project.badge}" style="position: absolute; top: 16px; left: 16px;">
          ${project.badge === 'urgent' ? '🚨 Urgent' : '✓ Actif'}
        </span>
      </div>
      <div style="padding: 24px;">
        <h3 style="font-weight: 700; font-size: 20px; margin-bottom: 16px; color: var(--color-text);">${project.title}</h3>
        <div class="progress-bar" style="margin-bottom: 12px;">
          <div class="progress-fill" style="width: ${progress}%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
          <span style="font-weight: 700; color: var(--color-primary);">${formatCurrency(project.raised)} collectés</span>
          <span style="color: var(--color-text-light);">${formatCurrency(project.goal)} objectif</span>
        </div>
        <div style="display: flex; gap: 16px; font-size: 13px; color: var(--color-text-light); margin-bottom: 16px;">
          <span>👥 ${project.donors} donateurs</span>
          <span>📅 ${project.days} jours</span>
        </div>
        <button onclick="event.stopPropagation(); openQuickDonate()" class="btn btn-primary w-full">Soutenir ce projet</button>
      </div>
    </div>
  `;
}

function renderProjectsGrid(filter = 'all') {
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const grid = document.getElementById('projects-grid');
  
  if (!grid) return;
  
  grid.innerHTML = `
    <div style="grid-column: 1 / -1; text-align: center;">
      ${filtered.length === 0 ? '<p style="color: var(--color-text-light);">Aucun projet trouvé</p>' : ''}
    </div>
    ${filtered.map(project => renderProjectCard(project)).join('')}
  `;
}

function renderProjectsSection() {
  return `
    <section id="projects" class="section">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; flex-wrap: wrap; gap: 16px;">
          <div>
            <h2 class="font-display text-4xl font-bold mb-2" style="color: var(--color-primary);">Projets Recommandés</h2>
            <p style="color: var(--color-text-light);">Soutenez les causes qui ont le plus besoin d'aide</p>
          </div>
          <div class="flex gap-3">
            <select onchange="renderProjectsGrid(this.value)" style="padding: 12px 16px;">
              <option value="all">Tous les projets</option>
              <option value="urgent">Urgents</option>
              <option value="education">Éducation</option>
              <option value="health">Santé</option>
              <option value="water">Eau & assainissement</option>
              <option value="environment">Environnement</option>
            </select>
          </div>
        </div>
        <div id="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 32px;"></div>
      </div>
    </section>
  `;
}

function renderRecentDonationsSection() {
  const colorMap = {
    secondary: 'linear-gradient(135deg, var(--color-secondary) 0%, #0284C7 100%)',
    accent: 'linear-gradient(135deg, var(--color-accent) 0%, #D97706 100%)',
    success: 'linear-gradient(135deg, var(--color-success) 0%, #059669 100%)'
  };

  return `
    <section class="section" style="background: var(--color-surface);">
      <div class="container">
        <h2 class="font-display text-3xl font-bold mb-8" style="color: var(--color-primary); text-align: center;">Derniers Dons Reçus 💝</h2>
        <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
          ${recentDonations.map((donation, index) => `
            <div class="card" style="padding: 20px; display: flex; align-items: center; gap: 16px;">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: ${colorMap[donation.color]}; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white; font-weight: 700;">
                ${donation.initials}
              </div>
              <div style="flex: 1;">
                <div style="font-weight: 600; color: var(--color-text);">${donation.name}</div>
                <div style="font-size: 14px; color: var(--color-text-light);">vient de donner pour "${donation.project}"</div>
              </div>
              <div style="font-weight: 700; color: var(--color-primary); font-size: 20px;">${donation.amount}€</div>
              <div style="font-size: 12px; color: var(--color-text-light);">${donation.time}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderTrustBadgesSection() {
  return `
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
          ${trustBadges.map(badge => `
            <div class="trust-badge card" style="padding: 32px; background: linear-gradient(135deg, ${badge.color || '#0EA5E9'}10 0%, ${badge.color || '#0EA5E9'}05 100%); border-left: 4px solid ${badge.color || '#0EA5E9'};">
              ${badge.icon ? `
                <img src="${badge.icon}" alt="${badge.title}" style="width: 64px; height: 64px; margin-bottom: 16px; object-fit: contain;" onerror="this.style.display='none'">
              ` : `
                <div style="font-size: 64px; margin-bottom: 16px;">${badge.emoji}</div>
              `}
              <div style="font-weight: 700; color: var(--color-primary); font-size: 18px; margin-bottom: 8px;">${badge.title}</div>
              <div style="font-size: 14px; color: var(--color-text-light);">${badge.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderAboutSection() {
  return `
    <section id="about" class="section" style="background: var(--color-surface);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <div>
            <span class="badge badge-new mb-4">Notre Mission</span>
            <h2 class="font-display text-4xl font-bold mb-6" style="color: var(--color-primary);">FIRST AID INTERNATIONAL, INC.</h2>
            <div style="color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">
              <p style="margin-bottom: 16px;"><strong style="color: var(--color-primary);">Section 1.02. Purpose.</strong> The Corporation is organized and operated exclusively for charitable and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code.</p>
              
              <p style="margin-bottom: 16px;">The Corporation's mission is to serve children and young adults in Haiti by providing food, shelter, clothing, and education — helping them escape life on the streets and avoid gang involvement.</p>
              
              <p>In addition, the Corporation operates educational programs in the United States to empower and educate the local community.</p>
            </div>
            <h3 style="font-weight: 700; margin-bottom: 16px; margin-top: 32px;">Recognized By:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center; opacity: 0.6;">
              <div style="font-size: 24px;">📰 News Organizations</div>
              <div style="font-size: 24px;">🏆 Non-profit Sector</div>
              <div style="font-size: 24px;">🌍 International Partners</div>
              <div style="font-size: 24px;">🏛️ Government Bodies</div>
            </div>
          </div>
          <div class="image-container" style="aspect-ratio: 4/5; border-radius: 24px;">
            <div class="image-zoom" style="width: 100%; height: 100%; background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); display: flex; align-items: center; justify-content: center; font-size: 120px;">
              🤝
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogSection() {
  return `
    <section id="blog" class="section">
      <div class="container">
        <h2 class="font-display text-4xl font-bold mb-8" style="color: var(--color-primary); text-align: center;">Actualités & Témoignages</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          ${blogPosts.map((post, index) => `
            <div class="card" style="overflow: hidden; cursor: pointer; position: relative;" onclick="showToast('Article complet bientôt disponible', '📖')">
              <div class="image-container" style="height: 220px; background: ${post.background}; position: relative;">
                ${post.video ? `
                  <video src="${post.video}" style="width: 100%; height: 100%; object-fit: cover;" poster="${post.image}"></video>
                  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(0, 0, 0, 0.5); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; pointer-events: none;">
                    ▶️
                  </div>
                ` : post.image ? `
                  <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.innerHTML='<span style=\\'font-size: 80px;\\'>${post.emoji}</span>'">
                ` : `
                  <div class="image-zoom" style="width: 100%; height: 100%; background: ${post.background}; display: flex; align-items: center; justify-content: center; font-size: 80px;">
                    ${post.emoji}
                  </div>
                `}
              </div>
              <div style="padding: 24px;">
                <div style="font-size: 12px; color: var(--color-text-light); margin-bottom: 8px;">
                  ${post.date} • ${post.readTime}
                </div>
                <h3 style="font-weight: 700; font-size: 18px; margin-bottom: 12px; color: var(--color-text);">${post.title}</h3>
                <p style="color: var(--color-text-light); font-size: 14px; line-height: 1.6;">${post.excerpt}</p>
                ${post.video ? `<div style="margin-top: 12px; display: flex; align-items: center; gap: 6px; color: var(--color-secondary); font-weight: 600; font-size: 12px;">
                  <span>🎬</span> Avec vidéo
                </div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderNewsletterSection() {
  return `
    <section class="section" style="background: linear-gradient(135deg, var(--color-primary) 0%, #075985 100%); color: white; text-align: center;">
      <div class="container">
        <div style="max-width: 600px; margin: 0 auto;">
          <div style="font-size: 64px; margin-bottom: 24px;">📬</div>
          <h2 class="font-display text-3xl font-bold mb-4">Restez Informé·e</h2>
          <p style="opacity: 0.9; margin-bottom: 32px; line-height: 1.7;">Recevez nos actualités, témoignages et rapports d'impact directement dans votre boîte mail.</p>
          <form onsubmit="event.preventDefault(); subscribeNewsletter();" style="display: flex; gap: 12px; max-width: 500px; margin: 0 auto;">
            <input type="email" id="newsletter-email" placeholder="Votre email" required style="flex: 1; color: var(--color-text);">
            <button type="submit" class="btn btn-accent">S'abonner</button>
          </form>
          <p style="font-size: 12px; opacity: 0.7; margin-top: 16px;">✓ Pas de spam • ✓ Désabonnement en 1 clic</p>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer style="background: #0F172A; color: white; padding: 80px 0 32px;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 48px; margin-bottom: 64px;">
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
              <div style="font-size: 40px;">🌍</div>
              <div>
                <h3 class="font-display text-2xl font-bold" style="line-height: 1;">FIRST AID INTERNATIONAL, INC.</h3>
                <p style="font-size: 10px; letter-spacing: 1px; opacity: 0.7; text-transform: uppercase;">Building a Better Future</p>
              </div>
            </div>
            <p style="opacity: 0.8; line-height: 1.7; margin-bottom: 24px;">ONG reconnue d'utilité publique • N° SIRET: 123 456 789 00010</p>
            <div style="display: flex; gap: 12px;">
              <a href="#" onclick="event.preventDefault()" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 20px;">📘</a>
              <a href="#" onclick="event.preventDefault()" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 20px;">📸</a>
              <a href="#" onclick="event.preventDefault()" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 20px;">🐦</a>
              <a href="#" onclick="event.preventDefault()" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 20px;">📺</a>
            </div>
          </div>
          <div>
            <h4 style="font-weight: 700; margin-bottom: 20px; font-size: 16px;">Nos Projets</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Eau & Assainissement</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Éducation</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Santé</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Développement Communautaire</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Environnement</a></li>
            </ul>
          </div>
          <div>
            <h4 style="font-weight: 700; margin-bottom: 20px; font-size: 16px;">S'Engager</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault(); openQuickDonate()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Faire un don</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault(); openVolunteerModal()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Devenir bénévole</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Partenariats entreprises</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Organiser un événement</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Legs & donations</a></li>
            </ul>
          </div>
          <div>
            <h4 style="font-weight: 700; margin-bottom: 20px; font-size: 16px;">À Propos</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Notre mission</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Rapports d'impact</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Transparence financière</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Notre équipe</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">FAQ</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="divider" style="background: rgba(255,255,255,0.1); margin-bottom: 32px;"></div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
          <p style="opacity: 0.6; font-size: 14px;">© 2025 FIRST AID INTERNATIONAL, INC. Tous droits réservés.</p>
          <div style="display: flex; gap: 24px; font-size: 14px;">
            <a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.6); text-decoration: none;">Mentions légales</a>
            <a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.6); text-decoration: none;">Politique de confidentialité</a>
            <a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.6); text-decoration: none;">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
