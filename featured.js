// src/components/featured.js
export function renderFeatured() {
  return `
    <section class="featured section" id="featured">
      <div class="container">
        <div class="featured__header flex-between">
          <h2 class="section__title gradient-text">Featured Projects</h2>
          <a href="#/portfolio" class="featured__link btn btn--secondary">View All Projects</a>
        </div>
        <div class="project-grid" id="featured-grid"></div>
      </div>
    </section>
  `;
}

export function initFeatured(projects) {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  // Show up to 6 projects (2 rows of 3) as featured
  const featured = projects.slice(0, 6);
  grid.innerHTML = featured.map(p => {
    // Reuse project card component
    // Dynamically import to avoid circular deps
    return `<div class="project-card" data-id="${p.id}">
      <div class="project-card__image" style="background: ${p.gradient};">
        <img src="${p.image}" alt="${p.title}" class="project-card__img" />
      </div>
      <div class="project-card__content">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.shortDesc}</p>
        <div class="project-card__tech">
          ${p.techStack.map(t => `<span class="project-card__badge">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}
