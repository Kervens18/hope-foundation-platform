// MODAL COMPONENTS & FUNCTIONS

function renderQuickDonateDrawer() {
  return `
    <div style="padding: 24px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
      <h2 class="font-display text-2xl font-bold" style="color: var(--color-primary);">Don Rapide 💝</h2>
      <button onclick="closeQuickDonate()" style="background: transparent; border: none; font-size: 32px; cursor: pointer; color: var(--color-text-light); line-height: 1;">×</button>
    </div>
    <div style="flex: 1; overflow-auto; padding: 24px;">
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-weight: 600; margin-bottom: 12px;">Type de don</label>
        <div class="recurring-toggle">
          <button class="recurring-option active" onclick="setRecurring('one-time')">Ponctuel</button>
          <button class="recurring-option" onclick="setRecurring('monthly')">Mensuel</button>
          <button class="recurring-option" onclick="setRecurring('yearly')">Annuel</button>
        </div>
      </div>
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-weight: 600; margin-bottom: 12px;">Devise</label>
        <div class="currency-selector">
          <button class="currency-btn active" onclick="setCurrency('EUR', '€')">EUR €</button>
          <button class="currency-btn" onclick="setCurrency('USD', '$')">USD $</button>
          <button class="currency-btn" onclick="setCurrency('GBP', '£')">GBP £</button>
          <button class="currency-btn" onclick="setCurrency('CHF', 'CHF')">CHF</button>
        </div>
      </div>
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-weight: 600; margin-bottom: 12px;">Montant</label>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
          <div class="donation-amount active" onclick="selectAmount(25)">
            25<span id="currency-symbol-1">€</span>
          </div>
          <div class="donation-amount" onclick="selectAmount(50)">
            50<span id="currency-symbol-2">€</span>
          </div>
          <div class="donation-amount" onclick="selectAmount(100)">
            100<span id="currency-symbol-3">€</span>
          </div>
          <div class="donation-amount" onclick="selectAmount(250)">
            250<span id="currency-symbol-4">€</span>
          </div>
          <div class="donation-amount" onclick="selectAmount(500)">
            500<span id="currency-symbol-5">€</span>
          </div>
          <div class="donation-amount" onclick="selectCustomAmount()">
            Autre
          </div>
        </div>
        <div id="custom-amount-input" class="hidden">
          <input type="number" id="custom-amount" placeholder="Entrez un montant" min="1">
        </div>
      </div>
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-weight: 600; margin-bottom: 12px;">Options du don</label>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" id="gift-donation">
            <span>🎁 Offrir ce don au nom d'un proche</span>
          </label>
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" id="memorial-donation">
            <span>🕊️ Don en mémoire de quelqu'un</span>
          </label>
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" id="anonymous-donation">
            <span>🔒 Don anonyme</span>
          </label>
        </div>
      </div>
      <div id="gift-details" class="hidden" style="margin-bottom: 24px; padding: 16px; background: #F1F5F9; border-radius: 12px;">
        <label style="display: block; font-weight: 600; margin-bottom: 8px;">Nom du destinataire</label>
        <input type="text" placeholder="Nom complet" style="margin-bottom: 12px;">
        <label style="display: block; font-weight: 600; margin-bottom: 8px;">Email du destinataire</label>
        <input type="email" placeholder="email@exemple.com" style="margin-bottom: 12px;">
        <label style="display: block; font-weight: 600; margin-bottom: 8px;">Message personnel (optionnel)</label>
        <textarea rows="3" placeholder="Votre message..."></textarea>
      </div>
      <div id="memorial-details" class="hidden" style="margin-bottom: 24px; padding: 16px; background: #F1F5F9; border-radius: 12px;">
        <label style="display: block; font-weight: 600; margin-bottom: 8px;">En mémoire de</label>
        <input type="text" placeholder="Nom de la personne">
      </div>
      <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <span style="font-size: 32px;">🌟</span>
          <div>
            <div style="font-weight: 700; color: var(--color-primary); font-size: 18px;">
              Votre impact
            </div>
            <div style="font-size: 14px; color: var(--color-text-light);">
              Ce don va permettre de...
            </div>
          </div>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          <li style="display: flex; align-items: center; gap: 8px; font-size: 14px;"><span>✓</span> <span id="impact-text">Nourrir 5 enfants pendant 1 mois</span></li>
        </ul>
      </div>
    </div>
    <div style="padding: 24px; border-top: 1px solid var(--color-border); background: var(--color-surface);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 18px; font-weight: 600;">Total</span>
        <span class="font-display" style="font-size: 32px; font-weight: 700; color: var(--color-primary);">
          <span id="total-amount">25</span><span id="currency-symbol-total">€</span>
        </span>
      </div>
      <button onclick="processDonation()" class="btn btn-primary w-full" style="font-size: 16px; padding: 18px;">
        🔒 Procéder au paiement sécurisé
      </button>
      <div style="display: flex; gap: 16px; justify-content: center; margin-top: 16px;">
        <div class="trust-badge"><span style="font-size: 24px;">🔐</span> <span style="font-size: 11px; color: var(--color-text-light);">Paiement sécurisé</span></div>
        <div class="trust-badge"><span style="font-size: 24px;">🏆</span> <span style="font-size: 11px; color: var(--color-text-light);">Certifié ONG</span></div>
        <div class="trust-badge"><span style="font-size: 24px;">📜</span> <span style="font-size: 11px; color: var(--color-text-light);">Reçu fiscal</span></div>
      </div>
    </div>
  `;
}

function renderProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return '';

  const progress = Math.round((project.raised / project.goal) * 100);
  
  return `
    <button onclick="closeProjectModal()" style="position: sticky; top: 16px; right: 16px; float: right; background: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 24px; color: var(--color-text-light); z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">×</button>
    <div style="padding: 40px;">
      <span class="badge badge-${project.badge} mb-4">${project.badge === 'urgent' ? '🚨 Urgent' : '✓ Actif'}</span>
      <h2 class="font-display text-3xl font-bold mb-4" style="color: var(--color-primary);">${project.title}</h2>
      <div class="tabs">
        <button class="tab active" onclick="switchTab('mission')">Mission</button>
        <button class="tab" onclick="switchTab('impact')">Impact</button>
        <button class="tab" onclick="switchTab('budget')">Budget</button>
        <button class="tab" onclick="switchTab('updates')">Actualités</button>
      </div>
      <div id="tab-mission" class="tab-content">
        <div class="image-container" style="margin-bottom: 24px; border-radius: 16px; height: 300px; position: relative;">
          <div class="image-zoom" style="width: 100%; height: 100%; background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%); display: flex; align-items: center; justify-content: center; font-size: 100px;">
            ${project.emoji}
          </div>
          <div class="image-hotspot" style="top: 30%; left: 40%;"><div class="hotspot-tooltip">Puits installé</div></div>
          <div class="image-hotspot" style="top: 60%; left: 70%;"><div class="hotspot-tooltip">Village bénéficiaire</div></div>
        </div>
        <div style="margin-bottom: 24px;">
          <div class="progress-bar" style="margin-bottom: 12px;">
            <div class="progress-fill" style="width: ${progress}%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 4px;">
            <span style="font-weight: 700; color: var(--color-primary);">${formatCurrency(project.raised)} collectés</span>
            <span style="color: var(--color-text-light);">${formatCurrency(project.goal)} objectif</span>
          </div>
          <div style="display: flex; gap: 16px; font-size: 13px; color: var(--color-text-light);">
            <span>👥 ${project.donors} donateurs</span>
            <span>📅 ${project.days} jours restants</span>
          </div>
        </div>
        <p style="color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">${project.description || 'Projet important pour les communautés locales.'}</p>
        ${project.beneficiaries ? `
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
            <div style="text-align: center; padding: 16px; background: #F1F5F9; border-radius: 12px;">
              <div style="font-size: 32px; margin-bottom: 8px;">👨‍👩‍👧‍👦</div>
              <div style="font-weight: 700; color: var(--color-primary); font-size: 24px;">${project.beneficiaries}</div>
              <div style="font-size: 13px; color: var(--color-text-light);">Bénéficiaires</div>
            </div>
            ${project.villages ? `
              <div style="text-align: center; padding: 16px; background: #F1F5F9; border-radius: 12px;">
                <div style="font-size: 32px; margin-bottom: 8px;">🏘️</div>
                <div style="font-weight: 700; color: var(--color-primary); font-size: 24px;">${project.villages}</div>
                <div style="font-size: 13px; color: var(--color-text-light);">Villages</div>
              </div>
            ` : ''}
            ${project.wells ? `
              <div style="text-align: center; padding: 16px; background: #F1F5F9; border-radius: 12px;">
                <div style="font-size: 32px; margin-bottom: 8px;">💧</div>
                <div style="font-weight: 700; color: var(--color-primary); font-size: 24px;">${project.wells}</div>
                <div style="font-size: 13px; color: var(--color-text-light);">Puits</div>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
      <div id="tab-impact" class="tab-content hidden">
        <div class="before-after-slider" style="margin-bottom: 24px;">
          <div class="before-after-image" style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);"><span>😟</span></div>
          <div class="before-after-image after-image" style="background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);"><span>😊</span></div>
          <div class="slider-handle" id="slider-handle"></div>
        </div>
        <h3 style="font-weight: 700; font-size: 20px; margin-bottom: 16px;">Témoignages</h3>
        <div style="background: #F1F5F9; padding: 20px; border-radius: 12px; margin-bottom: 16px;">
          <p style="font-style: italic; color: var(--color-text); margin-bottom: 12px;">"Grâce à ce projet, mes enfants n'ont plus à marcher 5km pour aller chercher de l'eau. Maintenant ils peuvent aller à l'école."</p>
          <div style="font-weight: 600; color: var(--color-primary);">- Fatima, mère de 3 enfants</div>
        </div>
      </div>
      <div id="tab-budget" class="tab-content hidden">
        <h3 style="font-weight: 700; font-size: 20px; margin-bottom: 16px;">Répartition du budget</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${budgetBreakdown.map(item => `
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: 600;">${item.category}</span>
                <span style="color: var(--color-primary); font-weight: 700;">${item.percentage}% - ${formatCurrency(item.amount)}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${item.percentage}%;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div id="tab-updates" class="tab-content hidden">
        <h3 style="font-weight: 700; font-size: 20px; margin-bottom: 16px;">Dernières actualités</h3>
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; gap: 16px;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">📸</div>
            <div style="flex: 1;">
              <div style="font-size: 13px; color: var(--color-text-light); margin-bottom: 4px;">Il y a 2 jours</div>
              <h4 style="font-weight: 700; margin-bottom: 8px;">Premier puits inauguré en Haiti !</h4>
              <p style="color: var(--color-text-light); font-size: 14px; line-height: 1.6;">Port-au-Prince a célébré l'inauguration du premier puits. Plus de 400 personnes ont désormais accès à l'eau potable.</p>
            </div>
          </div>
          <div style="display: flex; gap: 16px;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">🎓</div>
            <div style="flex: 1;">
              <div style="font-size: 13px; color: var(--color-text-light); margin-bottom: 4px;">Il y a 1 semaine</div>
              <h4 style="font-weight: 700; margin-bottom: 8px;">Formation des équipes locales</h4>
              <p style="color: var(--color-text-light); font-size: 14px; line-height: 1.6;">20 membres de la communauté ont été formés à la maintenance des installations pour assurer la durabilité du projet.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="divider" style="margin: 24px 0;"></div>
      <div style="display: flex; gap: 12px;">
        <button onclick="openQuickDonate()" class="btn btn-primary flex-1">💝 Soutenir ce projet</button>
        <button onclick="shareProject()" class="btn btn-outline">📤 Partager</button>
      </div>
    </div>
  `;
}

function renderPromoPopup() {
  return `
    <div class="card animate-scale-in" style="max-width: 600px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, var(--color-accent) 0%, #D97706 100%); padding: 48px; text-align: center; color: white; position: relative;">
        <button onclick="closePromoPopup()" style="position: absolute; top: 16px; right: 16px; background: transparent; border: none; color: white; font-size: 28px; cursor: pointer; opacity: 0.9; line-height: 1;">×</button>
        <div style="font-size: 64px; margin-bottom: 16px;">🎉</div>
        <h2 class="font-display text-3xl font-bold mb-3">Doublez Votre Impact!</h2>
        <p style="font-size: 18px; opacity: 0.95; margin-bottom: 16px;">Un généreux donateur s'engage à doubler tous les dons effectués ce week-end</p>
        <div class="countdown-timer" style="margin-top: 24px;">
          <div class="countdown-unit">
            <div class="countdown-value" id="promo-hours">23</div>
            <div class="countdown-label">Heures</div>
          </div>
          <div class="countdown-unit">
            <div class="countdown-value" id="promo-minutes">45</div>
            <div class="countdown-label">Minutes</div>
          </div>
          <div class="countdown-unit">
            <div class="countdown-value" id="promo-seconds">12</div>
            <div class="countdown-label">Secondes</div>
          </div>
        </div>
      </div>
      <div style="padding: 32px; text-align: center;">
        <button onclick="openQuickDonate(); closePromoPopup();" class="btn btn-accent" style="font-size: 18px; padding: 18px 48px;">Faire un don maintenant</button>
        <p style="margin-top: 16px; font-size: 13px; color: var(--color-text-light); cursor: pointer;" onclick="closePromoPopup()">Non merci, peut-être plus tard</p>
      </div>
    </div>
  `;
}

function renderVolunteerModal() {
  return `
    <div class="card animate-scale-in" style="max-width: 600px; padding: 40px;" onclick="event.stopPropagation()">
      <button onclick="closeVolunteerModal()" style="position: absolute; top: 16px; right: 16px; background: transparent; border: none; font-size: 28px; cursor: pointer; color: var(--color-text-light); line-height: 1;">×</button>
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="font-size: 64px; margin-bottom: 16px;">🤝</div>
        <h2 class="font-display text-3xl font-bold mb-3" style="color: var(--color-primary);">Devenez Bénévole</h2>
        <p style="color: var(--color-text-light);">Rejoignez notre équipe et participez à nos missions</p>
      </div>
      <form onsubmit="event.preventDefault(); submitVolunteer();">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div><label style="display: block; font-weight: 600; margin-bottom: 8px;">Prénom</label> <input type="text" required></div>
          <div><label style="display: block; font-weight: 600; margin-bottom: 8px;">Nom</label> <input type="text" required></div>
        </div>
        <div style="margin-bottom: 16px;"><label style="display: block; font-weight: 600; margin-bottom: 8px;">Email</label> <input type="email" required></div>
        <div style="margin-bottom: 16px;"><label style="display: block; font-weight: 600; margin-bottom: 8px;">Téléphone</label> <input type="tel" required></div>
        <div style="margin-bottom: 16px;">
          <label style="display: block; font-weight: 600; margin-bottom: 8px;">Domaine d'intérêt</label>
          <select required>
            <option value="">Sélectionnez...</option>
            <option value="education">Éducation</option>
            <option value="health">Santé</option>
            <option value="environment">Environnement</option>
            <option value="community">Développement communautaire</option>
            <option value="fundraising">Collecte de fonds</option>
            <option value="communication">Communication</option>
          </select>
        </div>
        <div style="margin-bottom: 16px;">
          <label style="display: block; font-weight: 600; margin-bottom: 8px;">Disponibilité</label>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" value="weekday"> <span>En semaine</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" value="weekend"> <span>Week-ends</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" value="evening"> <span>Soirées</span>
            </label>
          </div>
        </div>
        <div style="margin-bottom: 24px;">
          <label style="display: block; font-weight: 600; margin-bottom: 8px;">Message (optionnel)</label>
          <textarea rows="4" placeholder="Parlez-nous de vous et de votre motivation..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full">Envoyer ma candidature</button>
      </form>
    </div>
  `;
}

// MODAL FUNCTIONS
function openQuickDonate() {
  const drawer = document.getElementById('donate-drawer');
  if (drawer) drawer.innerHTML = renderQuickDonateDrawer();
  document.getElementById('quick-donate-drawer').classList.remove('hidden');
  setupDonateListeners();
}

function closeQuickDonate() {
  document.getElementById('quick-donate-drawer').classList.add('hidden');
}

function setRecurring(type) {
  state.recurringType = type;
  document.querySelectorAll('.recurring-option').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  updateImpactText();
}

function setCurrency(currency, symbol) {
  state.selectedCurrency = currency;
  state.currencySymbol = symbol;
  document.querySelectorAll('.currency-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('[id^="currency-symbol"]').forEach(el => el.textContent = symbol);
}

function selectAmount(amount) {
  state.selectedAmount = amount;
  document.querySelectorAll('.donation-amount').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('custom-amount-input').classList.add('hidden');
  document.getElementById('total-amount').textContent = amount;
  updateImpactText();
}

function selectCustomAmount() {
  document.querySelectorAll('.donation-amount').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  const input = document.getElementById('custom-amount-input');
  input.classList.remove('hidden');
  document.getElementById('custom-amount').focus();
  document.getElementById('custom-amount').addEventListener('input', (e) => {
    const value = parseInt(e.target.value) || 0;
    state.selectedAmount = value;
    document.getElementById('total-amount').textContent = value;
    updateImpactText();
  });
}

function processDonation() {
  showToast('Fonctionnalité de paiement en démonstration', 'ℹ️');
}

function setupDonateListeners() {
  const giftDonation = document.getElementById('gift-donation');
  const memorialDonation = document.getElementById('memorial-donation');
  const giftDetails = document.getElementById('gift-details');
  const memorialDetails = document.getElementById('memorial-details');

  if (giftDonation) {
    giftDonation.addEventListener('change', (e) => {
      giftDetails.classList.toggle('hidden', !e.target.checked);
      if (e.target.checked) memorialDonation.checked = false;
      memorialDetails.classList.add('hidden');
    });
  }

  if (memorialDonation) {
    memorialDonation.addEventListener('change', (e) => {
      memorialDetails.classList.toggle('hidden', !e.target.checked);
      if (e.target.checked) giftDonation.checked = false;
      giftDetails.classList.add('hidden');
    });
  }
}

function openProjectModal(id) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('project-modal-content');
  if (content) content.innerHTML = renderProjectModal(id);
  modal.classList.remove('hidden');
  setupSlider();
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.add('hidden');
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  event.target.classList.add('active');
  const tabContent = document.getElementById(`tab-${tab}`);
  if (tabContent) tabContent.classList.remove('hidden');
}

function shareProject() {
  showToast('Lien de partage copié!', '📤');
}

function setupSlider() {
  const sliderHandle = document.getElementById('slider-handle');
  if (!sliderHandle) return;

  let isDragging = false;

  sliderHandle.addEventListener('mousedown', () => isDragging = true);
  document.addEventListener('mouseup', () => isDragging = false);
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const slider = sliderHandle.parentElement;
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    sliderHandle.style.left = `${percentage}%`;
    const afterImage = slider.querySelector('.after-image');
    if (afterImage) afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  });
}

function showPromoPopup() {
  const modal = document.getElementById('promo-popup');
  modal.innerHTML = renderPromoPopup();
  modal.classList.remove('hidden');
  startPromoCountdown();
}

function closePromoPopup() {
  document.getElementById('promo-popup').classList.add('hidden');
}

function startPromoCountdown() {
  let hours = 23, minutes = 45, seconds = 12;
  setInterval(() => {
    seconds--;
    if (seconds < 0) { seconds = 59; minutes--; }
    if (minutes < 0) { minutes = 59; hours--; }
    if (hours < 0) { hours = 0; minutes = 0; seconds = 0; }
    
    const hoursEl = document.getElementById('promo-hours');
    const minutesEl = document.getElementById('promo-minutes');
    const secondsEl = document.getElementById('promo-seconds');

    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
}

function openVolunteerModal() {
  const modal = document.getElementById('volunteer-modal');
  modal.innerHTML = renderVolunteerModal();
  modal.classList.remove('hidden');
}

function closeVolunteerModal() {
  document.getElementById('volunteer-modal').classList.add('hidden');
}

function submitVolunteer() {
  showToast('Candidature envoyée avec succès!', '✓');
  closeVolunteerModal();
}

function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email');
  if (email && email.value) {
    showToast('Merci pour votre inscription!', '✓');
    email.value = '';
  }
}
