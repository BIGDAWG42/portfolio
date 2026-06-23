// main.js - Flat structure fix
import './theme.css';
import './base.css';
import './layout.css';
import './animations.css';
import './components.css';

// Page modules
import { renderHome, initHome } from './home.js';
import { renderPortfolio, initPortfolio } from './portfolio.js';
import { renderContact, initContact } from './contact.js';
import { Navbar, initNavbar } from './navbar.js';

async function loadPage() {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App container not found');
    return;
  }

  const rawHash = location.hash.replace('#', '').toLowerCase();
  const hash = rawHash.startsWith('/') ? rawHash.slice(1) : rawHash;

  app.innerHTML = '';

  switch (hash) {
    case 'portfolio':
      await renderPortfolio();
      initNavbar();
      return;

    case 'contact':
      app.innerHTML = renderContact();
      initContact();
      break;

    case '':
    case 'home':
    default:
      app.innerHTML = renderHome();
      initHome();
  }

  initNavbar();
}

window.addEventListener('hashchange', loadPage);
loadPage();

console.log('Portfolio SPA initialized');
