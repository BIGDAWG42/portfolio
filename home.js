// src/pages/home.js
import { Navbar, initNavbar } from '../components/navbar.js';
import { renderHero, initHero } from '../components/hero.js';
import { renderFooter } from '../components/footer.js';

export function renderHome() {
  return `
    ${Navbar('home')}
    ${renderHero()}
    <section class="section container" id="about">
      <h2 class="section__title gradient-text">About Me</h2>
      <p>Hello! Hello! I'm Anthony Fahy, a passionate full-stack developer who turns ideas into delightful digital experiences. I build beautiful web, mobile, games, and AI tools with seamless, intuitive interfaces that users love. Whether it's crafting pixel-perfect UIs or solving complex problems with clean code, I'm all about creating products that truly stand out.</p>
    </section>
    ${renderFooter()}
  `;
}

export function initHome() {
  initNavbar();
  initHero();
  // No additional init needed for footer
}
