// src/components/footer.js
export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer__socials">
        <a href="https://github.com/anthonyfahy" class="footer__social-link" target="_blank" rel="noopener">🐙</a>
        <a href="https://linkedin.com/in/anthonyfahy" class="footer__social-link" target="_blank" rel="noopener">🔗</a>
        <a href="mailto:anthony@example.com" class="footer__social-link" target="_blank" rel="noopener">✉️</a>
      </div>
      <div class="footer__copyright">© ${new Date().getFullYear()} Anthony Fahy. All rights reserved.</div>
    </footer>
  `;
}
