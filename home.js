// home.js - Fixed
import { Navbar, initNavbar } from './navbar.js';
import { renderHero, initHero } from './hero.js';
import { renderFooter } from './footer.js';

export function renderHome() {
  return `
    ${Navbar('home')}
    ${renderHero()}
    <section class="section container" id="about">
      <h2 class="section__title gradient-text">About Me</h2>
      <p>Hello! I'm Anthony Fahy, a passionate full-stack developer who turns ideas into delightful digital experiences. I build beautiful web, mobile, games, and AI tools with seamless, intuitive interfaces that users love.</p>
    </section>
    ${renderFooter()}
  `;
}

export function initHome() {
  initNavbar();
  initHero();
}
