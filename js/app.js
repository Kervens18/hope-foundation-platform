// MAIN APP INITIALIZATION & LIFECYCLE

function renderApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    ${renderAnnouncementBar()}
    ${renderHeader()}
    ${renderHeroSection()}
    ${renderImpactCounters()}
    ${renderProjectsSection()}
    ${renderRecentDonationsSection()}
    ${renderTrustBadgesSection()}
    ${renderAboutSection()}
    ${renderBlogSection()}
    ${renderNewsletterSection()}
    ${renderFooter()}
  `;
}

function startCountdowns() {
  // Hero Countdown
  startCountdown(7, 12, 34, 56, (values) => {
    updateCountdownDisplay({
      days: document.getElementById('hero-days'),
      hours: document.getElementById('hero-hours'),
      minutes: document.getElementById('hero-minutes'),
      seconds: document.getElementById('hero-seconds')
    }, values);
  });
}

function init() {
  // Render the app
  renderApp();
  
  // Initialize projects grid
  renderProjectsGrid('all');
  
  // Start countdown timers
  startCountdowns();
  
  // Show promo popup after delay
  setTimeout(() => {
    const shown = sessionStorage.getItem('promo_shown');
    if (!shown) {
      showPromoPopup();
      sessionStorage.setItem('promo_shown', 'true');
    }
  }, 10000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
