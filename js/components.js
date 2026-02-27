// Welcome section for end users
function renderWelcomeSection() {
  return `
    <section id="welcome" class="section" style="background: #F3F4F6; padding: 48px 0;">
      <div class="container" style="max-width: 700px; margin: 0 auto;">
        <h2 class="font-display text-3xl font-bold mb-6" style="color: var(--color-primary); text-align: center;">Welcome to your site!</h2>
        <ol style="font-size: 18px; color: var(--color-text); line-height: 1.7; margin-bottom: 32px;">
          <li><b>1. Click "Admin"</b> (at the top or via /admin) to access the management area.</li>
          <li><b>2. Add your products, blog posts, and photos</b> in a few clicks, no coding needed.</li>
          <li><b>3. Refresh this page</b> to see your published content automatically.</li>
        </ol>
        <div style="background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px #0001;">
          <p style="font-size: 16px; color: var(--color-text-light); text-align: center;">Need help? Check the documentation or contact your support.</p>
        </div>
      </div>
    </section>
  `;
}
// Dynamic photo gallery section
function renderGallerySection() {
  return `
    <section id="gallery" class="section">
      <div class="container">
        <h2 class="font-display text-4xl font-bold mb-8" style="color: var(--color-primary); text-align: center;">Photo Gallery</h2>
        <div id="gallery-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px;"></div>
      </div>
    </section>
  `;
}

// Après le rendu principal, charger dynamiquement la galerie
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.fetchGalleryPhotos) {
      window.fetchGalleryPhotos().then(photos => {
        const container = document.getElementById('gallery-list');
        if (!container) return;
        if (!photos.length) {
          container.innerHTML = '<p style="text-align:center; color:var(--color-text-light);">No photos yet.</p>';
          return;
        }
        container.innerHTML = photos.map(photo => `
          <div class="card" style="overflow: hidden;">
            <div style="height: 180px; background: #F3F4F6; display: flex; align-items: center; justify-content: center;">
              ${photo.image ? `<img src="${photo.image}" alt="${photo.title || ''}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:60px;\'>📸</div>';">` : `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:60px;'>📸</div>`}
            </div>
            <div style="padding: 16px;">
              <h4 style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: var(--color-text);">${photo.title || ''}</h4>
              <p style="color: var(--color-text-light); font-size: 13px; line-height: 1.5;">${photo.description || ''}</p>
            </div>
          </div>
        `).join('');
      });
    }
  });
}
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
            <a href="#" onclick="event.preventDefault(); scrollToSection('projects')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Projects</a>
            <a href="#" onclick="event.preventDefault(); scrollToSection('impact')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Impact</a>
            <a href="#" onclick="event.preventDefault(); scrollToSection('about')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">About</a>
            <a href="shop.html" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Shop</a>
            <a href="#" onclick="event.preventDefault(); scrollToSection('blog')" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">News</a>
            <a href="#" onclick="event.preventDefault(); openVolunteerModal()" style="color: var(--color-text); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--color-secondary)'" onmouseout="this.style.color='var(--color-text)'">Volunteer</a>
          </nav>
          <div class="flex items-center gap-3">
            <button onclick="openQuickDonate()" class="btn btn-primary">💝 Donate</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderAnnouncementBar() {
  return `
    <div style="background: linear-gradient(135deg, var(--color-accent) 0%, #D97706 100%); color: white; padding: 12px; text-align: center; font-size: 14px; font-weight: 600;">
      ⚡ Emergency Campaign: All donations are doubled this weekend! <a href="#" onclick="event.preventDefault(); showPromoPopup();" style="color: white; text-decoration: underline; margin-left: 8px;">Learn more →</a>
    </div>
  `;
}

function renderHeroSection() {
  return `
    <section style="background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 50%, #DBEAFE 100%); padding: 100px 0;">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <span class="badge badge-urgent mb-4 animate-fade-in-up">🚨 Urgent Campaign</span>
          <h2 class="font-display animate-fade-in-up delay-100" style="font-size: clamp(40px, 6vw, 72px); font-weight: 800; color: var(--color-primary); line-height: 1.1; margin-bottom: 24px;">Let's transform lives together</h2>
          <p class="animate-fade-in-up delay-200" style="font-size: 20px; color: var(--color-text-light); margin-bottom: 40px; line-height: 1.7;">Your generosity brings water, education, and hope to thousands in need.</p>
          <div class="countdown-timer animate-fade-in-up delay-300" style="margin-bottom: 40px;">
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-days">7</div>
              <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-hours">12</div>
              <div class="countdown-label">Hours</div>
            </div>
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-minutes">34</div>
              <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-unit">
              <div class="countdown-value" id="hero-seconds">56</div>
              <div class="countdown-label">Seconds</div>
            </div>
          </div>
          <div class="flex gap-4 justify-center animate-fade-in-up delay-400">
            <a href="donate.html" class="btn btn-accent" style="font-size: 18px; padding: 18px 36px; text-decoration: none; display: inline-block;">💝 Double my impact</a>
            <button onclick="scrollToSection('projects')" class="btn btn-outline">Discover the projects</button>
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
          <h2 class="font-display text-4xl font-bold mb-3" style="color: var(--color-primary);">Our Impact in Numbers</h2>
          <p style="color: var(--color-text-light); font-size: 18px;">Thanks to the generosity of our donors</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
          ${impactStats.map(stat => `
            <div class="card" style="padding: 40px; text-align: center;">
              <div style="font-size: 56px; margin-bottom: 16px;">${stat.emoji}</div>
              <div class="impact-counter">${stat.value}</div>
              <div style="font-weight: 600; color: var(--color-text); margin-top: 8px;">${stat.labelEn || stat.label}</div>
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
          <span style="font-weight: 700; color: var(--color-primary);">${formatCurrency(project.raised)} raised</span>
          <span style="color: var(--color-text-light);">${formatCurrency(project.goal)} goal</span>
        </div>
        <div style="display: flex; gap: 16px; font-size: 13px; color: var(--color-text-light); margin-bottom: 16px;">
          <span>👥 ${project.donors} donors</span>
          <span>📅 ${project.days} days</span>
        </div>
        <a href="donate.html" onclick="event.stopPropagation()" class="btn btn-primary w-full" style="display:block; text-align:center;">Support this project</a>
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
      ${filtered.length === 0 ? '<p style="color: var(--color-text-light);">No projects found</p>' : ''}
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
            <h2 class="font-display text-4xl font-bold mb-2" style="color: var(--color-primary);">Recommended Projects</h2>
            <p style="color: var(--color-text-light);">Support the causes that need help most</p>
          </div>
          <div class="flex gap-3">
            <select onchange="renderProjectsGrid(this.value)" style="padding: 12px 16px;">
              <option value="all">All projects</option>
              <option value="urgent">Urgent</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="water">Water & Sanitation</option>
              <option value="environment">Environment</option>
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
        <h2 class="font-display text-3xl font-bold mb-8" style="color: var(--color-primary); text-align: center;">Latest Donations Received 💝</h2>
        <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
          ${recentDonations.map((donation, index) => `
            <div class="card" style="padding: 20px; display: flex; align-items: center; gap: 16px;">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: ${colorMap[donation.color]}; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white; font-weight: 700;">
                ${donation.initials}
              </div>
              <div style="flex: 1;">
                <div style="font-weight: 600; color: var(--color-text);">${donation.name}</div>
                <div style="font-size: 14px; color: var(--color-text-light);">just donated to "${donation.project}"</div>
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
            <span class="badge badge-new mb-4">Our Mission</span>
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
  // Section vide, sera remplie dynamiquement
  return `
    <section id="blog" class="section">
      <div class="container">
        <h2 class="font-display text-4xl font-bold mb-8" style="color: var(--color-primary); text-align: center;">News & Testimonials</h2>
        <div id="blog-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;"></div>
      </div>
    </section>
  `;
}

// Après le rendu principal, charger dynamiquement les blogs
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.fetchBlogPosts) {
      window.fetchBlogPosts().then(posts => {
        const container = document.getElementById('blog-list');
        if (!container) return;
        if (!posts.length) {
          container.innerHTML = '<p style="text-align:center; color:var(--color-text-light);">No articles yet.</p>';
          return;
        }
        container.innerHTML = posts.map(post => `
          <div class="card" style="overflow: hidden; cursor: pointer; position: relative;" onclick="showToast('Full article coming soon', '📖')">
            <div class="image-container" style="height: 220px; background: ${post.background || '#F3F4F6'}; position: relative;">
              ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px;\'>${post.emoji || '📰'}</div>';">` : `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px;'>${post.emoji || '📰'}</div>`}
            </div>
            <div style="padding: 24px;">
              <div style="font-size: 12px; color: var(--color-text-light); margin-bottom: 8px;">
                ${post.date || ''}
              </div>
              <h3 style="font-weight: 700; font-size: 18px; margin-bottom: 12px; color: var(--color-text);">${post.title || ''}</h3>
              <p style="color: var(--color-text-light); font-size: 14px; line-height: 1.6;">${post.excerpt || ''}</p>
            </div>
          </div>
        `).join('');
      });
    }
  });
}

function renderNewsletterSection() {
  return `
    <section class="section" style="background: linear-gradient(135deg, var(--color-primary) 0%, #075985 100%); color: white; text-align: center;">
      <div class="container">
        <div style="max-width: 600px; margin: 0 auto;">
          <div style="font-size: 64px; margin-bottom: 24px;">📬</div>
          <h2 class="font-display text-3xl font-bold mb-4">Stay Informed</h2>
          <p style="opacity: 0.9; margin-bottom: 32px; line-height: 1.7;">Get our news, testimonials, and impact reports directly in your inbox.</p>
          <form onsubmit="event.preventDefault(); subscribeNewsletter();" style="display: flex; gap: 12px; max-width: 500px; margin: 0 auto;">
            <input type="email" id="newsletter-email" placeholder="Your email" required style="flex: 1; color: var(--color-text);">
            <button type="submit" class="btn btn-accent">Subscribe</button>
          </form>
          <p style="font-size: 12px; opacity: 0.7; margin-top: 16px;">✓ No spam • ✓ Unsubscribe in 1 click</p>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  // Footer HTML with placeholder for dynamic social links
  setTimeout(() => {
    if (window.fetchFooterLinks) {
      window.fetchFooterLinks().then(links => {
        const container = document.getElementById('footer-social-links');
        if (!container || !links) return;
        container.innerHTML = `
          ${links.facebook ? `<a href="${links.facebook}" target="_blank" rel="noopener" aria-label="Facebook" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 22px;"><i class='fab fa-facebook-f' style='font-style:normal;'>f</i></a>` : ''}
          ${links.tiktok ? `<a href="${links.tiktok}" target="_blank" rel="noopener" aria-label="TikTok" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 22px;"><i class='fab fa-tiktok' style='font-style:normal;'>🎵</i></a>` : ''}
          ${links.instagram ? `<a href="${links.instagram}" target="_blank" rel="noopener" aria-label="Instagram" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 22px;"><i class='fab fa-instagram' style='font-style:normal;'>📸</i></a>` : ''}
          ${links.pinterest ? `<a href="${links.pinterest}" target="_blank" rel="noopener" aria-label="Pinterest" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 22px;"><i class='fab fa-pinterest-p' style='font-style:normal;'>📌</i></a>` : ''}
        `;
      });
    }
  }, 0);
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
            <p style="opacity: 0.8; line-height: 1.7; margin-bottom: 24px;">Recognized public benefit NGO • SIRET No: 123 456 789 00010</p>
            <div id="footer-social-links" style="display: flex; gap: 12px;"></div>
          </div>
          <div>
            <h4 style="font-weight: 700; margin-bottom: 20px; font-size: 16px;">Our Projects</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Water & Sanitation</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Education</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Health</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Community Development</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Environment</a></li>
            </ul>
          </div>
          <div>
            <h4 style="font-weight: 700; margin-bottom: 20px; font-size: 16px;">Get Involved</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault(); openQuickDonate()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Donate</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault(); openVolunteerModal()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Become a volunteer</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Corporate partnerships</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Organize an event</a></li>
              <li style="margin-bottom: 12px;"><a href="#" onclick="event.preventDefault()" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Bequests & donations</a></li>
            </ul>
          </div>
          <div>
            <h4 style="font-weight: 700; margin-bottom: 20px; font-size: 16px;">About</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;"><a href="about.html" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Our mission</a></li>
              <li style="margin-bottom: 12px;"><a href="impact.html" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Impact reports</a></li>
              <li style="margin-bottom: 12px;"><a href="finance.html" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Financial transparency</a></li>
              <li style="margin-bottom: 12px;"><a href="team.html" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Our team</a></li>
              <li style="margin-bottom: 12px;"><a href="faq.html" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">FAQ</a></li>
              <li style="margin-bottom: 12px;"><a href="contact.html" style="color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="divider" style="background: rgba(255,255,255,0.1); margin-bottom: 32px;"></div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
          <p style="opacity: 0.6; font-size: 14px;">© 2025 FIRST AID INTERNATIONAL, INC. All rights reserved.</p>
          <div style="display: flex; gap: 24px; font-size: 14px;">
            <a href="legal.html" style="color: rgba(255,255,255,0.6); text-decoration: none;">Legal notice</a>
            <a href="privacy.html" style="color: rgba(255,255,255,0.6); text-decoration: none;">Privacy policy</a>
            <a href="cookies.html" style="color: rgba(255,255,255,0.6); text-decoration: none;">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
