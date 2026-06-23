// src/components/projectModal.js
export function renderProjectModal(project) {
  return `
    <div class="modal" id="modal-${project.id}">
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <button class="modal__close" data-close>&times;</button>
        <div class="modal__hero" style="background: ${project.gradient};">
          <img src="${project.image}" alt="${project.title}" class="modal__hero-icon" />
        </div>
        <div class="modal__body">
          <h2 class="modal__title">${project.title}</h2>
          <p class="modal__category">${project.type.toUpperCase()}</p>
          <p class="modal__description">${project.fullDesc}</p>
          <h3 class="modal__tech-title">Tech Stack</h3>
          <div class="modal__tech-list">
            ${project.techStack.map(tech => `<span class="modal__tech-badge">${tech}</span>`).join('')}
          </div>
          <div class="modal__actions">
            ${project.demoLink ? `<a href="${project.demoLink}" class="btn btn--primary" target="_blank" rel="noopener">Demo</a>` : ''}
            ${project.repoLink ? `<a href="${project.repoLink}" class="btn btn--secondary" target="_blank" rel="noopener">Source</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initProjectModal() {
  // Close modal on overlay click or close button
  document.addEventListener('click', (e) => {
    if (e.target.matches('.modal__overlay') || e.target.matches('[data-close]')) {
      const modal = e.target.closest('.modal');
      if (modal) modal.classList.remove('modal--open');
    }
  });
}
