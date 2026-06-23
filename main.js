// src/main.js
// Entry point for the portfolio SPA. Handles routing and page rendering.

import './styles/theme.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/animations.css';
import './styles/components.css';

// Page modules (render + init)
import { renderHome, initHome } from './pages/home.js';
import { renderPortfolio, initPortfolio } from './pages/portfolio.js';
import { renderContact, initContact } from './pages/contact.js';
import { Navbar, initNavbar } from './components/navbar.js'; // Ensure navbar can be initialized globally

/**
 * Load and render the appropriate page based on the current hash.
 * If no hash is present, default to home.
 */
async function loadPage() {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App container not found');
    return;
  }

  const rawHash = location.hash.replace('#', '').toLowerCase();
  const hash = rawHash.startsWith('/') ? rawHash.slice(1) : rawHash;
  // Clear current content for pages that render themselves.
  app.innerHTML = '';

  switch (hash) {
    case 'portfolio':
      // renderPortfolio handles its own DOM injection and event init.
      await renderPortfolio();
      // Navbar init is already called inside renderPortfolio, but ensure active link.
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

  // For pages that set innerHTML here, init common components.
  initNavbar();
}


// Listen for hash changes to enable SPA navigation.
window.addEventListener('hashchange', loadPage);
// Initial page load.
loadPage();

console.log('Portfolio SPA initialized');
