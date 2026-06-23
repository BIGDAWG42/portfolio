// src/components/hero.js
export function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero__bg"></div>
      <div class="hero__content container">
        <p class="hero__greeting">Hi, I’m Anthony Fahy</p>
        <h1 class="hero__title gradient-text">Full‑Stack Developer</h1>
        <p class="hero__subtitle">Building web, mobile, games & AI tools that delight.</p>
        <div class="hero__typing" id="hero-typing">Creating experiences...</div>
        <div class="hero__cta-group">
          <a href="#/portfolio" class="btn btn--primary">View Projects</a>
          <a href="#/contact" class="btn btn--secondary">Contact Me</a>
        </div>
      </div>
    </section>
  `;
}

export function initHero() {
  const el = document.getElementById('hero-typing');
  if (!el) return;
  const phrases = [
    'Crafting seamless UIs',
    'Designing robust back‑ends',
    'Integrating AI solutions',
    'Shipping polished products'
  ];
  let i = 0;
  function type() {
    el.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }
  type();
  setInterval(type, 3000);
}
