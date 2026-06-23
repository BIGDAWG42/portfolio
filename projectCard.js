// src/components/projectCard.js
export function renderProjectCard(project) {
  return `
    <div class="project-card" data-id="${project.id}">
      <div class="project-card__image" style="background: ${project.gradient};">
        <img src="${project.image}" alt="${project.title}" class="project-card__img" />
      </div>
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.shortDesc}</p>
        <div class="project-card__tech">
          ${project.techStack.map(tech => `<span class="project-card__badge">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// No init needed; click handling is done globally in page module.
