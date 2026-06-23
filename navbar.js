export function Navbar(activePage = '') {
  return `
    <nav class="navbar">
      <div class="navbar__inner container">
        <div class="navbar__logo gradient-text">Anthony Fahy</div>
        <ul class="navbar__links">
          <li><a href="#/" class="navbar__link ${activePage === 'home' ? 'navbar__link--active' : ''}">Home</a></li>
          <li><a href="#/portfolio" class="navbar__link ${activePage === 'portfolio' ? 'navbar__link--active' : ''}">Portfolio</a></li>
          <li><a href="#/contact" class="navbar__link ${activePage === 'contact' ? 'navbar__link--active' : ''}">Contact</a></li>
        </ul>
        <div class="navbar__hamburger" id="navbarHamburger">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="navbar__mobile-menu" id="navbarMobileMenu">
        <a href="#/" class="navbar__mobile-link ${activePage === 'home' ? 'navbar__link--active' : ''}">Home</a>
        <a href="#/portfolio" class="navbar__mobile-link ${activePage === 'portfolio' ? 'navbar__link--active' : ''}">Portfolio</a>
        <a href="#/contact" class="navbar__mobile-link ${activePage === 'contact' ? 'navbar__link--active' : ''}">Contact</a>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const hamburger = document.getElementById('navbarHamburger');
  const mobileMenu = document.getElementById('navbarMobileMenu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('navbar__mobile-menu--open');
    hamburger.classList.toggle('is-open');
  });
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('navbar__mobile-menu--open');
      hamburger.classList.remove('is-open');
    });
  });
}
