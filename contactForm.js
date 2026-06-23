// src/components/contactForm.js
export function renderContactForm() {
  return `
    <section class="section" id="contact-page">
      <div class="container">
        <h2 class="section__title gradient-text">Get in Touch</h2>
        <div class="contact">
          <div class="contact__info">
            <div class="contact__info-card">
              <div class="contact__info-icon">📧</div>
              <div>
                <div class="contact__info-label">Email</div>
                <div class="contact__info-value"><a href="mailto:anthonyfahy123@gmail.com">anthonyfahy123@gmail.com</a></div>
              </div>
            </div>
            <div class="contact__info-card">
              <div class="contact__info-icon">📍</div>
              <div>
                <div class="contact__info-label">Location</div>
                <div class="contact__info-value">Dublin, Ireland</div>
              </div>
            </div>
          </div>
          <form class="form" id="contact-form">
            <div class="form__group">
              <label class="form__label" for="name">Name</label>
              <input class="form__input" type="text" id="name" name="name" required />
              <div class="form__error" id="error-name">Please enter your name.</div>
            </div>
            <div class="form__group">
              <label class="form__label" for="email">Email</label>
              <input class="form__input" type="email" id="email" name="email" required />
              <div class="form__error" id="error-email">Please enter a valid email.</div>
            </div>
            <div class="form__group">
              <label class="form__label" for="message">Message</label>
              <textarea class="form__textarea" id="message" name="message" required></textarea>
              <div class="form__error" id="error-message">Message cannot be empty.</div>
            </div>
            <button type="submit" class="btn btn--primary form__submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const name = form.elements['name'];
    const email = form.elements['email'];
    const message = form.elements['message'];
    document.querySelectorAll('.form__error').forEach(el => el.classList.remove('form__error--visible'));
    if (!name.value.trim()) { document.getElementById('error-name').classList.add('form__error--visible'); valid = false; }
    if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) { document.getElementById('error-email').classList.add('form__error--visible'); valid = false; }
    if (!message.value.trim()) { document.getElementById('error-message').classList.add('form__error--visible'); valid = false; }
    if (valid) {
      import('./toast.js').then(m => m.showToast('Message sent!')).catch(console.error);
      form.reset();
    }
  });
}
