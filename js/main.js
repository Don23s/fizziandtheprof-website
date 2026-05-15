document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger menu ──
  const btn = document.getElementById('hamburger');
  const nav = document.querySelector('header nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll(
    '.card, .episode-card, .teens-ep-card, .char-card, .topic-card, ' +
    '.approach-card, .audience-card, .faq-item, .ep-preview-card, .char-teaser'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // ── Cookie banner ──
  const COOKIE_KEY = 'fnp_cookie_ok';
  if (!localStorage.getItem(COOKIE_KEY)) {
    const lang = localStorage.getItem('fnp_lang') || 'en';
    const msgs = {
      de: 'Diese Website verwendet Google Fonts (externe Schriftarten). Durch die Nutzung übermittelst du deine IP-Adresse an Google. Weitere Infos in der',
      en: 'This site uses Google Fonts (external typefaces). By visiting, your IP address is transmitted to Google. See our',
      fr: 'Ce site utilise Google Fonts (polices externes). En visitant, votre adresse IP est transmise à Google. Voir notre',
      es: 'Este sitio usa Google Fonts (tipografías externas). Al visitar, tu dirección IP se transmite a Google. Ver nuestra'
    };
    const links = {
      de: ['Datenschutzerklärung', 'privacy.html'],
      en: ['Privacy Policy', 'privacy.html'],
      fr: ['politique de confidentialité', 'privacy.html'],
      es: ['política de privacidad', 'privacy.html']
    };
    const okLabels = { de: 'OK', en: 'OK', fr: 'OK', es: 'OK' };
    const l = msgs[lang] ? lang : 'en';
    const [linkText, linkHref] = links[l];

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <p>${msgs[l]} <a href="${linkHref}">${linkText}</a>.</p>
      <button id="cookie-accept">${okLabels[l]}</button>
    `;
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, '1');
      banner.remove();
    });
  }

});
