// contact.js
import { Navbar, initNavbar } from './navbar.js';
import { renderContactForm, initContactForm } from './contactForm.js';
import { renderFooter } from './footer.js';

export function renderContact() {
  return `
    ${Navbar('contact')}
    ${renderContactForm()}
    ${renderFooter()}
  `;
}

export function initContact() {
  initNavbar();
  initContactForm();
}
