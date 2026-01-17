// UTILITY FUNCTIONS

function showToast(message, icon = '✓') {
  const toast = document.getElementById('toast');
  document.getElementById('toast-icon').textContent = icon;
  document.getElementById('toast-message').textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function formatPrice(price) {
  return `${price.toLocaleString('fr-FR')}${state.currencySymbol}`;
}

function formatCurrency(price) {
  if (state.selectedCurrency === 'EUR') {
    return `${price.toLocaleString('fr-FR')}€`;
  }
  return `${price.toLocaleString('en-US')} ${state.currencySymbol}`;
}

function getColorGradient(color) {
  const colors = {
    primary: 'linear-gradient(135deg, #0C4A6E 0%, #075985 100%)',
    secondary: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    accent: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    success: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    blue: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
    green: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
    red: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)',
    yellow: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
  };
  return colors[color] || colors.blue;
}

function updateImpactText() {
  const amount = state.selectedAmount;
  const recurring = state.recurringType;
  let impact = '';
  
  if (recurring === 'monthly') {
    impact = `Fournir de l'eau potable à ${Math.floor(amount / 5)} personnes chaque mois`;
  } else if (recurring === 'yearly') {
    impact = `Scolariser ${Math.floor(amount / 100)} enfants pour une année complète`;
  } else {
    impact = `Nourrir ${Math.floor(amount / 5)} enfants pendant 1 mois`;
  }
  
  const impactEl = document.getElementById('impact-text');
  if (impactEl) impactEl.textContent = impact;
}

// COUNTDOWN FUNCTION
function startCountdown(targetDays, targetHours, targetMinutes, targetSeconds, onUpdate) {
  let days = targetDays;
  let hours = targetHours;
  let minutes = targetMinutes;
  let seconds = targetSeconds;
  
  const interval = setInterval(() => {
    seconds--;
    if (seconds < 0) { seconds = 59; minutes--; }
    if (minutes < 0) { minutes = 59; hours--; }
    if (hours < 0) { hours = 23; days--; }
    if (days < 0) {
      clearInterval(interval);
      return;
    }
    
    onUpdate({ days, hours, minutes, seconds });
  }, 1000);
  
  return interval;
}

function updateCountdownDisplay(elements, values) {
  if (elements.days) elements.days.textContent = values.days;
  if (elements.hours) elements.hours.textContent = String(values.hours).padStart(2, '0');
  if (elements.minutes) elements.minutes.textContent = String(values.minutes).padStart(2, '0');
  if (elements.seconds) elements.seconds.textContent = String(values.seconds).padStart(2, '0');
}
