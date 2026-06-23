// src/pages/contact.js
import { Navbar, initNavbar } from '../components/navbar.js';
import { renderContactForm, initContactForm } from '../components/contactForm.js';
import { renderFooter } from '../components/footer.js';

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
