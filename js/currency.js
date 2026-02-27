// Gestion dynamique des taux de change pour le site
// Utilise exchangerate.host (gratuit, sans clé API)

const supportedCurrencies = ['EUR','USD','GBP','CHF','CAD','AUD','JPY','CNY','INR'];
let currencyRates = { EUR: 1 };

async function fetchCurrencyRates(base = 'EUR') {
  try {
    const res = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
    const data = await res.json();
    if (data && data.rates) {
      currencyRates = data.rates;
    }
  } catch (e) {
    currencyRates = { EUR: 1 };
  }
}

function convertAmount(amount, from, to) {
  if (!currencyRates[from] || !currencyRates[to]) return amount;
  return (amount / currencyRates[from]) * currencyRates[to];
}

// Initial fetch
fetchCurrencyRates();
