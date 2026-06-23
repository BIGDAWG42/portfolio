// portfolio.js
import { Navbar, initNavbar } from './navbar.js';
import { renderFooter } from './footer.js';
import { renderProjectCard } from './projectCard.js';
import { renderProjectModal, initProjectModal } from './projectModal.js';

export async function renderPortfolio() {
  const app = document.getElementById('app');
  if (!app) return;

  const res = await fetch('./projects.json');
  const projects = await res.json();

  app.innerHTML = `
    <div class="page-transition">
      ${Navbar('portfolio')}
      <section class="section" id="portfolio-page">
        <div class="container">
          <h2 class="section__title gradient-text">Portfolio</h2>
          <div class="filter-bar" id="filter-bar">
            <button class="filter-bar__tab" data-type="all">All</button>
            <button class="filter-bar__tab" data-type="web">Web</button>
            <button class="filter-bar__tab" data-type="mobile">Mobile</button>
            <button class="filter-bar__tab" data-type="games">Games</button>
            <button class="filter-bar__tab" data-type="ai">AI</button>
          </div>
          <div class="project-grid" id="project-grid"></div>
        </div>
      </section>
      ${renderFooter()}
    </div>
  `;

  const grid = document.getElementById('project-grid');
  grid.innerHTML = projects.map(p => renderProjectCard(p)).join('');

  // Modals
  const modalsContainer = document.createElement('div');
  modalsContainer.innerHTML = projects.map(p => renderProjectModal(p)).join('');
  document.body.appendChild(modalsContainer);

  initProjectModal();

  // Filter
  const filterBar = document.getElementById('filter-bar');
  filterBar.addEventListener('click', (e) => {
    if (!e.target.matches('.filter-bar__tab')) return;
    const type = e.target.dataset.type;
    const filtered = type === 'all' ? projects : projects.filter(p => p.type === type);
    grid.innerHTML = filtered.map(p => renderProjectCard(p)).join('');
    initProjectModal();

    filterBar.querySelectorAll('.filter-bar__tab').forEach(t => t.classList.remove('filter-bar__tab--active'));
    e.target.classList.add('filter-bar__tab--active');
  });

  filterBar.querySelector('[data-type="all"]').classList.add('filter-bar__tab--active');
}

export function initPortfolio() {} 
