/* ============================================================
   ESTUDI DENTAL CARRERA — Main JS
   ============================================================ */

/* ---------- HEADING LINE BREAKS ----------
   Keep the final two words together when they fit, and protect compound
   words such as despertar-me. Inline emphasis and accessible text survive. */
(() => {
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')];
  const tails = [];
  const textNodes = element => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  };
  headings.forEach(heading => {
    const words = textNodes(heading).flatMap(node => [...node.data.matchAll(/\S+/g)].map(match => ({ node, start:match.index, end:match.index + match[0].length })));
    if (words.length > 2) {
      const before = words[words.length - 2], last = words[words.length - 1];
      const range = document.createRange();
      range.setStart(before.node, before.start);
      range.setEnd(last.node, last.end);
      if (!range.cloneContents().querySelector('br')) {
        const tail = document.createElement('span');
        tail.className = 'heading-tail';
        tail.append(range.extractContents());
        range.insertNode(tail);
        tails.push({ heading, tail });
      }
    }
    textNodes(heading).forEach(node => {
      const matches = [...node.data.matchAll(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+/gu)];
      if (!matches.length) return;
      const fragment = document.createDocumentFragment();
      let offset = 0;
      matches.forEach(match => {
        fragment.append(node.data.slice(offset, match.index));
        const word = document.createElement('span');
        word.className = 'heading-word';
        word.textContent = match[0];
        fragment.append(word);
        offset = match.index + match[0].length;
      });
      fragment.append(node.data.slice(offset));
      node.replaceWith(fragment);
    });
  });
  function fitTails() {
    tails.forEach(({ heading, tail }) => {
      tail.style.whiteSpace = 'nowrap';
      if (tail.getBoundingClientRect().width > heading.clientWidth) tail.style.whiteSpace = 'normal';
    });
  }
  fitTails();
  document.fonts?.ready.then(fitTails);
  window.addEventListener('resize', fitTails, { passive:true });
})();

/* ---------- NAV ---------- */
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero') || document.querySelector('.page-hero:not(.page-hero--light)');

function updateNav() {
  if (!nav) return;
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('scrolled', scrolled);
  if (hero) {
    nav.classList.toggle('nav--hero', hero.getBoundingClientRect().bottom > 72);
  }
}
updateNav();
// Use requestAnimationFrame to throttle scroll handler to 1 call per frame
let rafPending = false;
window.addEventListener('scroll', () => {
  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(() => { updateNav(); rafPending = false; });
  }
}, { passive: true });

/* ---------- MOBILE BURGER ---------- */
const burger  = document.getElementById('navBurger');
const menu    = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('mobileMenuClose');
let open = false;

function toggleMenu(state) {
  open = state ?? !open;
  burger.setAttribute('aria-expanded', open);
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
  document.querySelector('.mobile-cta-bar')?.classList.toggle('is-hidden', open);
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    // Move focus into the menu so keyboard/AT users land somewhere sane
    // instead of staying "behind" a full-screen overlay.
    setTimeout(() => closeBtn?.focus(), 60);
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    burger.focus();
  }
}

// Simple focus trap while the full-screen menu is open — Tab/Shift+Tab
// cycle within it instead of escaping to the (invisible) page behind.
document.addEventListener('keydown', e => {
  if (!open || e.key !== 'Tab' || !menu) return;
  const focusables = menu.querySelectorAll('a[href], button:not([disabled])');
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault(); last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault(); first.focus();
  }
});

if (burger) burger.addEventListener('click', () => toggleMenu());
if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) toggleMenu(false); });

/* ---------- REVEAL ON SCROLL ---------- */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } }),
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- HEADLINE ITALIC UNDERLINE ----------
   Draws a thin rule beneath any <em> inside an h2 once the h2 enters
   the viewport. Works independently of .reveal so headlines without
   a reveal ancestor still get the treatment. */
const emObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('em-lit'); emObserver.unobserve(e.target); }
  }),
  { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('h2:has(em)').forEach(el => emObserver.observe(el));

/* ---------- SMOOTH ANCHOR SCROLL ---------- */
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
});

/* ---------- ACTIVE NAV LINK ---------- */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');
const secObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
  }),
  { threshold: 0.45 }
);
sections.forEach(s => secObs.observe(s));

/* ---------- LOCATION CARD PARALLAX (pointer-fine only) ---------- */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.location-card').forEach(card => {
    const bg = card.querySelector('.location-card__bg');
    if (!bg) return;
    let rafId = null;
    card.addEventListener('mousemove', e => {
      if (rafId) return; // throttle to one RAF per frame
      rafId = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        bg.style.transform = `scale(1.06) translate(${x*10}px,${y*10}px)`;
        rafId = null;
      });
    });
    card.addEventListener('mouseleave', () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      bg.style.transform = '';
    });
  });
}

/* Appointment flow lives in appointment.js (contact pages only). */

/* ---------- TEAM CARDS: subtle hover tilt (pointer-fine only) ---------- */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 4;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 4;
      card.style.transform = `translateY(-3px) rotateX(${-y}deg) rotateY(${x}deg)`;
      card.style.transition = 'transform .1s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease, box-shadow .4s ease';
    });
  });
}

/* ---------- TESTIMONIALS (3D stage with Motion One springs) ---------- */
function initTestimonials() {
  const root = document.querySelector('[data-testimonials]');
  if (!root) return;
  const dotLabel = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase() === 'es'
    ? (i, total) => `Reseña ${i} de ${total}`
    : (i, total) => `Ressenya ${i} de ${total}`;
  const track = root.querySelector('[data-testimonials-track]');
  const slides = Array.from(track.querySelectorAll('.testimonial'));
  const total = slides.length;
  if (!total) return;

  const dotsWrap = root.querySelector('[data-testimonials-dots]');
  const idxEl    = root.querySelector('[data-testimonials-index]');
  const totalEl  = root.querySelector('[data-testimonials-total]');
  const prevBtn  = root.querySelector('[data-testimonials-prev]');
  const nextBtn  = root.querySelector('[data-testimonials-next]');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTOPLAY_MS = 6500;
  let current = 0;
  let timer = null;

  // Motion One — loaded via CDN as a global `motion` object. Degrade to
  // instant positioning if the script failed to load.
  const motionLib = (typeof window !== 'undefined') ? window.motion : null;
  const animate = motionLib && motionLib.animate;

  // Viewport-driven pose presets so narrow screens read cleanly.
  function poses() {
    const w = window.innerWidth;
    if (w <= 480) {
      return {
        center: { x: '0%',   z: 0,    rotateY: 0,    scale: 1,    opacity: 1 },
        right:  { x: '0%',   z: -260, rotateY: 0,    scale: 0.78, opacity: 0 },
        left:   { x: '0%',   z: -260, rotateY: 0,    scale: 0.78, opacity: 0 },
        hidden: { x: '0%',   z: -320, rotateY: 0,    scale: 0.7,  opacity: 0 }
      };
    }
    if (w <= 720) {
      return {
        center: { x: '0%',   z: 0,    rotateY: 0,    scale: 1,    opacity: 1 },
        right:  { x: '44%',  z: -220, rotateY: -26,  scale: 0.78, opacity: 0.28 },
        left:   { x: '-44%', z: -220, rotateY: 26,   scale: 0.78, opacity: 0.28 },
        hidden: { x: '0%',   z: -320, rotateY: 0,    scale: 0.7,  opacity: 0 }
      };
    }
    return {
      center: { x: '0%',   z: 0,    rotateY: 0,    scale: 1,    opacity: 1 },
      right:  { x: '52%',  z: -180, rotateY: -22,  scale: 0.84, opacity: 0.42 },
      left:   { x: '-52%', z: -180, rotateY: 22,   scale: 0.84, opacity: 0.42 },
      hidden: { x: '0%',   z: -320, rotateY: 0,    scale: 0.7,  opacity: 0 }
    };
  }

  function posFor(diff) {
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === -1) return 'left';
    return 'hidden';
  }

  // Spring config — stiff enough to feel decisive, damped enough to not
  // oscillate past the pose. Stagger sends waves through the stack.
  const SPRING = { type: 'spring', stiffness: 190, damping: 24, mass: 0.9 };
  const FAST_TWEEN = { duration: 0.32, easing: [0.23, 1, 0.32, 1] };

  function applyPose(el, target, delay = 0) {
    if (reducedMotion) {
      Object.assign(el.style, {
        transform: `translate3d(${target.x}, 0, ${target.z}px) rotateY(${target.rotateY}deg) scale(${target.scale})`,
        opacity: target.opacity
      });
      return;
    }
    if (!animate) {
      // No Motion One — fall back to a CSS transition baked on-the-fly.
      el.style.transition = 'transform 720ms cubic-bezier(0.23, 1, 0.32, 1), opacity 520ms ease-out';
      el.style.transform = `translate3d(${target.x}, 0, ${target.z}px) rotateY(${target.rotateY}deg) scale(${target.scale})`;
      el.style.opacity = target.opacity;
      return;
    }
    // Opacity eases; pose springs. Keeping them on separate curves prevents
    // the fade from visibly lagging the physics.
    animate(el, {
      x: target.x,
      z: target.z + 'px',
      rotateY: target.rotateY + 'deg',
      scale: target.scale
    }, { ...SPRING, delay });
    animate(el, { opacity: target.opacity }, { ...FAST_TWEEN, delay });
  }

  function go(i) {
    current = (i + total) % total;
    const p = poses();
    slides.forEach((s, j) => {
      let diff = j - current;
      if (diff > total / 2) diff -= total;
      else if (diff < -total / 2) diff += total;
      const pos = posFor(diff);
      s.setAttribute('data-pos', pos);
      s.setAttribute('aria-hidden', pos !== 'center');
      s.tabIndex = pos === 'center' ? 0 : -1;
      // Small stagger so the wave reads as a physical swap, not a mass move.
      const delay = pos === 'center' ? 0 : (pos === 'hidden' ? 0 : 0.04);
      applyPose(s, p[pos], delay);
    });
    dots.forEach((d, j) => d.classList.toggle('is-active', j === current));
    if (idxEl) idxEl.textContent = String(current + 1).padStart(2, '0');
  }

  // Side-card clicks jump directly to that card
  slides.forEach((s, j) => {
    s.addEventListener('click', () => {
      const pos = s.getAttribute('data-pos');
      if (pos === 'left' || pos === 'right') { go(j); restart(); }
    });
  });

  // Build dots
  const dots = [];
  for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'testimonials__dot';
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', dotLabel(i + 1, total));
    d.addEventListener('click', () => { go(i); restart(); });
    dotsWrap.appendChild(d);
    dots.push(d);
  }

  if (totalEl) totalEl.textContent = String(total).padStart(2, '0');

  // Recompute poses on resize so the stage reflows gracefully.
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => go(current), 120);
  });

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  function start() {
    if (reducedMotion) return;
    stop();
    timer = setInterval(next, AUTOPLAY_MS);
  }
  function stop()    { if (timer) { clearInterval(timer); timer = null; } }
  function restart() { if (!reducedMotion) start(); }

  prevBtn?.addEventListener('click', () => { prev(); restart(); });
  nextBtn?.addEventListener('click', () => { next(); restart(); });

  // Pause autoplay on hover / focus-in
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // Keyboard arrows when focus is inside
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { next(); restart(); }
    else if (e.key === 'ArrowLeft') { prev(); restart(); }
  });

  // Swipe on touch
  let touchStartX = null;
  root.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; stop(); }, { passive: true });
  root.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    touchStartX = null;
    restart();
  }, { passive: true });

  // Only autoplay when slider is in view
  const playObs = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? start() : stop());
  }, { threshold: 0.3 });
  playObs.observe(root);

  go(0);
}

/* Fetch live Google reviews (see api/reviews.js) and rebuild the
   testimonials track before wiring up the carousel. Falls back to the
   static markup already in the HTML — silently — if the endpoint
   isn't configured yet, errors, or returns nothing usable. */
function loadLiveReviews() {
  const root = document.querySelector('[data-testimonials]');
  if (!root) return;

  const isEs = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase() === 'es';
  const track = root.querySelector('[data-testimonials-track]');
  const ratingEl = document.querySelector('.testimonials__rating b');
  const starsEl = document.querySelector('.testimonials__stars');
  const linkEl = document.querySelector('.testimonials__link');
  const srcLabel = isEs ? 'Reseña publicada en Google' : 'Ressenya publicada a Google';
  const reviewsWord = (n) => isEs ? `${n} reseñas en Google →` : `${n} ressenyes a Google →`;
  const dateLocale = isEs ? 'es-ES' : 'ca-ES';

  const initials = name => (name || '').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

  fetch(`/api/reviews?lang=${isEs ? 'es' : 'ca'}`)
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (data && data.reviews && data.reviews.length) {
        track.innerHTML = data.reviews.map((r, i) => `
          <article class="testimonial" data-name="${escapeHtml(r.author)}"><div class="testimonial__inner"><blockquote class="testimonial__quote">"${escapeHtml(r.text)}"</blockquote>
            <footer class="testimonial__meta">
              <span class="testimonial__avatar" data-tone="${(i % 5) + 1}" aria-hidden="true">${escapeHtml(initials(r.author))}</span>
              <div class="testimonial__who">
                <cite class="testimonial__name">${escapeHtml(r.author)}</cite>
                <span class="testimonial__src">${escapeHtml(r.placeName ? `${r.placeName} · Google` : srcLabel)}${r.time ? ` · <time datetime="${new Date(r.time * 1000).toISOString().slice(0, 10)}">${new Intl.DateTimeFormat(dateLocale, { month: 'short', year: 'numeric' }).format(new Date(r.time * 1000))}</time>` : ''}</span>
              </div>
            </footer></div></article>`).join('');
        if (data.rating && ratingEl) ratingEl.textContent = String(data.rating).replace('.', ',');
        if (data.rating && starsEl) starsEl.textContent = '★ '.repeat(Math.round(data.rating)).trim();
        if (data.total && linkEl) linkEl.textContent = reviewsWord(data.total);
        if (data.places && data.places.length) {
          const links = document.querySelector('[data-reviews-links]');
          if (links) {
            links.innerHTML = data.places
              .filter(place => /^https:\/\//i.test(place.url || ''))
              .map(place => `<a href="${escapeHtml(place.url)}" target="_blank" rel="noopener" class="testimonials__link">${escapeHtml(place.name)} →</a>`)
              .join('<span class="testimonials__sep" aria-hidden="true"></span>');
          }
        }
      }
    })
    .catch(() => { /* keep the static testimonials already in the HTML */ })
    .finally(initTestimonials);
}
loadLiveReviews();

/* ---------- BACK TO TOP ---------- */
const backTop = document.createElement('button');
backTop.className = 'back-top';
backTop.setAttribute('aria-label', document.documentElement.lang === 'es' ? 'Volver arriba' : 'Tornar a dalt');
backTop.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 13V5M4.5 9.5l4.5-5 4.5 5"/></svg>`;
document.body.appendChild(backTop);
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }));

/* ---------- CONSOLE EASTER EGG ---------- */
console.log(
  '%cEstudi Dental Carrera',
  'color:#C1B2A2;font-size:18px;font-weight:400;letter-spacing:3px;font-family:Georgia,serif;line-height:2'
);
console.log(
  '%c🦷  Salut bucodental de qualitat · Carrera & Tremp\n   Dos equips. Una mateixa cura.',
  'color:#9A9090;font-size:11px;font-weight:300;line-height:1.8'
);

/* ============================================================
   COOKIE CONSENT
   ============================================================ */
(function initConsent() {
  const STORAGE_KEY = 'edc_consent_v1';
  const DEFAULT = { necessary: true, umami: true, maps: false, analytics: false, campaigns: false, ts: null };

  const LANG = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase();
  const I18N = {
    ca: {
      bannerTitle: 'Cookies i privacitat',
      bannerText: 'Fem servir Umami sense cookies per a estadístiques bàsiques. Google Analytics envia senyals sense cookies. Les cookies d\'Analytics, de mesurament de campanyes i de Google Maps només s\'activen si ho acceptes. <a href="/cookies.html">Més informació</a>.',
      prefs: 'Preferències', reject: 'Rebutjar', accept: 'Acceptar',
      bannerAria: 'Consentiment de cookies',
      modalTitle: 'Preferències de cookies',
      modalLead: 'Tria quines categories acceptes. Pots canviar aquestes preferències en qualsevol moment des del peu de pàgina.',
      rejectOptional: 'Rebutjar opcionals', save: 'Desar preferències', acceptAll: 'Acceptar totes',
      close: 'Tancar',
      categories: [
        { key: 'necessary', label: 'Estrictament necessàries', tag: 'Sempre actives',
          desc: 'Permeten el funcionament bàsic del lloc (navegació, sessió, formularis). Sense aquestes cookies el web no funcionaria correctament.', required: true },
        { key: 'umami', label: 'Estadístiques privades (Umami)', tag: 'Sense cookies',
          desc: 'Mesura pàgines vistes i interaccions de manera agregada, sense cookies ni perfils personals. Està activa per defecte, respecta «Do Not Track» i la pots desactivar aquí.', required: false },
        { key: 'maps', label: 'Mapes de Google Maps', tag: 'De tercers',
          desc: 'Carrega els mapes integrats a la pàgina de seus perquè puguis veure la ubicació de les clíniques. Google pot establir cookies pròpies segons la seva política.', required: false },
        { key: 'analytics', label: 'Estadístiques ampliades (Google Analytics)', tag: 'Amb consentiment',
          desc: 'Ens ajuden a entendre de forma agregada com es fa servir el web (pàgines vistes, clics a telèfon o WhatsApp) per millorar-lo. L’etiqueta es carrega automàticament i envia senyals sense cookies; les cookies d’Analytics només s’activen si ho acceptes.', required: false },
        { key: 'campaigns', label: 'Mesurament de campanyes (Google Ads)', tag: 'Amb consentiment',
          desc: 'Permet atribuir a les campanyes les visites i les sol·licituds de cita mitjançant identificadors de clic i cookies publicitàries. No fem remàrqueting ni anuncis personalitzats, i no enviem dades del formulari ni dades clíniques.', required: false }
      ]
    },
    es: {
      bannerTitle: 'Cookies y privacidad',
      bannerText: 'Usamos Umami sin cookies para estadísticas básicas. Google Analytics envía señales sin cookies. Las cookies de Analytics, medición de campañas y Google Maps solo se activan si lo acepta. <a href="/es/cookies.html">Más información</a>.',
      prefs: 'Preferencias', reject: 'Rechazar', accept: 'Aceptar',
      bannerAria: 'Consentimiento de cookies',
      modalTitle: 'Preferencias de cookies',
      modalLead: 'Elige qué categorías aceptas. Puedes cambiar estas preferencias en cualquier momento desde el pie de página.',
      rejectOptional: 'Rechazar opcionales', save: 'Guardar preferencias', acceptAll: 'Aceptar todas',
      close: 'Cerrar',
      categories: [
        { key: 'necessary', label: 'Estrictamente necesarias', tag: 'Siempre activas',
          desc: 'Permiten el funcionamiento básico del sitio (navegación, sesión, formularios). Sin estas cookies el sitio no funcionaría correctamente.', required: true },
        { key: 'umami', label: 'Estadísticas privadas (Umami)', tag: 'Sin cookies',
          desc: 'Mide páginas vistas e interacciones de forma agregada, sin cookies ni perfiles personales. Está activa por defecto, respeta «Do Not Track» y puedes desactivarla aquí.', required: false },
        { key: 'maps', label: 'Mapas de Google Maps', tag: 'De terceros',
          desc: 'Carga los mapas integrados en la página de sedes para que puedas ver la ubicación de las clínicas. Google puede establecer sus propias cookies según su política.', required: false },
        { key: 'analytics', label: 'Estadísticas ampliadas (Google Analytics)', tag: 'Con consentimiento',
          desc: 'Nos ayudan a entender de forma agregada cómo se usa el sitio (páginas vistas, clics en teléfono o WhatsApp) para mejorarlo. La etiqueta se carga automáticamente y envía señales sin cookies; las cookies de Analytics solo se activan si lo acepta.', required: false },
        { key: 'campaigns', label: 'Medición de campañas (Google Ads)', tag: 'Con consentimiento',
          desc: 'Permite atribuir a las campañas las visitas y solicitudes de cita mediante identificadores de clic y cookies publicitarias. No hacemos remarketing ni anuncios personalizados, y no enviamos datos del formulario ni datos clínicos.', required: false }
      ]
    }
  };
  const T = I18N[LANG] || I18N.ca;

  const listeners = new Set();

  function read() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const p = JSON.parse(raw);
      if (!p || typeof p !== 'object') return null;
      return Object.assign({}, DEFAULT, p, { necessary: true, campaigns: p.campaigns === true });
    } catch (_) { return null; }
  }

  function needsConsentPrompt() {
    try {
      const p = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return !p || typeof p.campaigns !== 'boolean';
    } catch (_) { return true; }
  }

  function write(prefs) {
    // Merge over the CURRENT stored prefs (not DEFAULT) so partial updates
    // — e.g. the map-gate "accept" button passing only { maps: true } —
    // don't silently reset other categories like analytics.
    const next = Object.assign({}, current(), prefs, {
      necessary: true,
      ts: new Date().toISOString()
    });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (_) {}
    listeners.forEach(fn => { try { fn(next); } catch (_) {} });
    applyMapGate(next);
    applyUmami(next);
    applyAnalytics(next);
    return next;
  }

  function current() {
    return read() || Object.assign({}, DEFAULT);
  }

  /* ---- Map iframe gate ---- */
  function applyMapGate(prefs) {
    const allow = !!(prefs && prefs.maps);
    document.querySelectorAll('.seu-map').forEach(wrap => {
      const iframe = wrap.querySelector('iframe[data-cookie-src]');
      if (!iframe) return;
      if (allow) {
        if (!iframe.src) iframe.src = iframe.dataset.cookieSrc;
        wrap.setAttribute('data-consent-blocked', 'false');
      } else {
        iframe.removeAttribute('src');
        wrap.setAttribute('data-consent-blocked', 'true');
      }
    });
  }

  /* ---- Privacy-first Umami analytics ----
     Umami runs without cookies or cross-site profiles, respects the browser's
     Do Not Track signal and is enabled by default with a persistent opt-out.
     It is restricted to the canonical production hostname. */
  let umamiLoaded = false;
  let umamiLoading = false;
  let umamiQueue = [];
  function applyUmami(prefs) {
    if (prefs && prefs.umami) loadUmami();
    else umamiQueue = [];
  }
  async function loadUmami() {
    if (umamiLoaded || umamiLoading) return;
    if (window.location.hostname !== 'www.estudidentalcarrera.com') return;
    umamiLoading = true;
    let id = window.UMAMI_WEBSITE_ID;
    if (!id) {
      try {
        const response = await fetch('/api/public-config', { headers: { Accept: 'application/json' } });
        const config = response.ok ? await response.json() : null;
        id = config && config.umamiWebsiteId;
      } catch (_) {
        id = null;
      }
    }
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id || '')) {
      umamiLoading = false;
      return;
    }
    if (!current().umami) {
      umamiLoading = false;
      umamiQueue = [];
      return;
    }
    window.UMAMI_WEBSITE_ID = id;
    const s = document.createElement('script');
    s.async = true;
    s.src = '/stats/script.js';
    s.dataset.websiteId = id;
    s.dataset.domains = 'www.estudidentalcarrera.com';
    s.dataset.doNotTrack = 'true';
    s.onload = () => {
      umamiLoaded = true;
      umamiLoading = false;
      const pending = umamiQueue.splice(0);
      if (current().umami && window.umami && typeof window.umami.track === 'function') {
        pending.forEach(item => window.umami.track(item.name, item.params));
      }
    };
    s.onerror = () => { umamiLoading = false; };
    document.head.appendChild(s);
  }

  window.EDCUmami = {
    track(name, params) {
      const prefs = current();
      if (!prefs.umami) return;
      if (window.umami && typeof window.umami.track === 'function') {
        window.umami.track(name, params || {});
      } else {
        umamiQueue.push({ name, params: params || {} });
        loadUmami();
      }
    }
  };

  /* ---- Google tag consent updates ----
     The Google tag loads in <head> with denied defaults. Cookie choices
     update analytics and campaign permissions without reloading it. */
  function applyAnalytics(prefs) {
    if (typeof window.gtag === 'function') {
      const campaigns = prefs && prefs.campaigns === true ? 'granted' : 'denied';
      window.gtag('consent', 'update', {
        analytics_storage: prefs && prefs.analytics === true ? 'granted' : 'denied',
        ad_storage: campaigns,
        ad_user_data: campaigns,
        ad_personalization: 'denied'
      });
    }
  }

  /* ---- Banner ---- */
  let bannerEl = null;
  function buildBanner() {
    if (bannerEl) return bannerEl;
    const el = document.createElement('aside');
    el.className = 'cookie-banner';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', T.bannerAria);
    el.innerHTML = `
      <h2 class="cookie-banner__title">${T.bannerTitle}</h2>
      <p class="cookie-banner__text">${T.bannerText}</p>
      <div class="cookie-banner__actions">
        <button type="button" class="cc-btn cc-btn--link" data-consent-action="prefs">${T.prefs}</button>
        <button type="button" class="cc-btn cc-btn--ghost" data-consent-action="reject">${T.reject}</button>
        <button type="button" class="cc-btn cc-btn--primary" data-consent-action="accept">${T.accept}</button>
      </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      const btn = e.target.closest('[data-consent-action]');
      if (!btn) return;
      const action = btn.dataset.consentAction;
      if (action === 'accept') { write({ umami: true, maps: true, analytics: true, campaigns: true }); hideBanner(); }
      else if (action === 'reject') { write({ umami: false, maps: false, analytics: false, campaigns: false }); hideBanner(); }
      else if (action === 'prefs') { openModal(); }
    });
    bannerEl = el;
    return el;
  }
  function showBanner() {
    const el = buildBanner();
    requestAnimationFrame(() => el.classList.add('is-visible'));
  }
  function hideBanner() {
    if (!bannerEl) return;
    bannerEl.classList.remove('is-visible');
    setTimeout(() => { if (bannerEl) { bannerEl.remove(); bannerEl = null; } }, 500);
  }

  /* ---- Modal ---- */
  let modalEl = null;
  let modalReturnFocus = null;
  const CATEGORIES = T.categories;

  function buildModal() {
    if (modalEl) return modalEl;
    const el = document.createElement('div');
    el.className = 'cookie-modal';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'cookieModalTitle');
    el.innerHTML = `
      <div class="cookie-modal__backdrop" data-consent-action="close"></div>
      <div class="cookie-modal__panel" role="document">
        <button type="button" class="cookie-modal__close" data-consent-action="close" aria-label="${T.close}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
        </button>
        <h2 class="cookie-modal__title" id="cookieModalTitle">${T.modalTitle}</h2>
        <p class="cookie-modal__lead">${T.modalLead}</p>
        <div class="cookie-modal__groups" data-groups></div>
        <div class="cookie-modal__actions">
          <button type="button" class="cc-btn cc-btn--ghost cc-btn--reject" data-consent-action="reject">${T.rejectOptional}</button>
          <button type="button" class="cc-btn cc-btn--ghost" data-consent-action="save">${T.save}</button>
          <button type="button" class="cc-btn cc-btn--primary" data-consent-action="accept">${T.acceptAll}</button>
        </div>
      </div>`;
    document.body.appendChild(el);

    const groupsWrap = el.querySelector('[data-groups]');
    CATEGORIES.forEach(cat => {
      const g = document.createElement('div');
      g.className = 'cc-group';
      g.dataset.key = cat.key;
      g.innerHTML = `
        <div class="cc-group__row">
          <h3 class="cc-group__label">${cat.label}<span class="cc-group__tag">${cat.tag}</span></h3>
          <button type="button" class="cc-switch"
            role="switch"
            aria-checked="false"
            ${cat.required ? 'aria-disabled="true"' : ''}
            aria-label="${cat.label}"
            data-switch="${cat.key}"></button>
        </div>
        <p class="cc-group__desc">${cat.desc}</p>`;
      groupsWrap.appendChild(g);
    });

    el.addEventListener('click', e => {
      const sw = e.target.closest('[data-switch]');
      if (sw) {
        if (sw.getAttribute('aria-disabled') === 'true') return;
        const on = sw.getAttribute('aria-checked') === 'true';
        setSwitch(sw, !on);
        return;
      }
      const btn = e.target.closest('[data-consent-action]');
      if (!btn) return;
      const a = btn.dataset.consentAction;
      if (a === 'close') closeModal();
      else if (a === 'accept') { write({ umami: true, maps: true, analytics: true, campaigns: true }); closeModal(); hideBanner(); }
      else if (a === 'reject') { write({ umami: false, maps: false, analytics: false, campaigns: false }); closeModal(); hideBanner(); }
      else if (a === 'save') {
        const prefs = {};
        el.querySelectorAll('[data-switch]').forEach(s => {
          prefs[s.dataset.switch] = s.getAttribute('aria-checked') === 'true';
        });
        write(prefs);
        closeModal();
        hideBanner();
      }
    });

    el.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    modalEl = el;
    return el;
  }

  function setSwitch(btn, on) {
    btn.setAttribute('aria-checked', on ? 'true' : 'false');
    const group = btn.closest('.cc-group');
    if (group) group.dataset.on = on ? 'true' : 'false';
  }

  function syncModalState() {
    const prefs = current();
    modalEl.querySelectorAll('[data-switch]').forEach(sw => {
      const key = sw.dataset.switch;
      const required = sw.getAttribute('aria-disabled') === 'true';
      setSwitch(sw, required ? true : !!prefs[key]);
    });
  }

  function openModal(opts) {
    modalReturnFocus = (opts && opts.returnFocus) || document.activeElement;
    buildModal();
    syncModalState();
    document.body.classList.add('cookie-modal-open');
    requestAnimationFrame(() => modalEl.classList.add('is-open'));
    setTimeout(() => {
      const first = modalEl.querySelector('.cookie-modal__close');
      if (first) first.focus();
    }, 60);
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove('is-open');
    document.body.classList.remove('cookie-modal-open');
    if (modalReturnFocus && typeof modalReturnFocus.focus === 'function') {
      try { modalReturnFocus.focus(); } catch (_) {}
    }
  }

  /* ---- Wire footer triggers (delegation so links in any page work) ---- */
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-consent-open]');
    if (!trigger) return;
    e.preventDefault();
    openModal({ returnFocus: trigger });
  });

  /* ---- Map gate "accept" button (inside .seu-map__gate) ---- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-consent-accept-maps]');
    if (!btn) return;
    e.preventDefault();
    write({ maps: true });
    hideBanner();
  });

  /* ---- Public API ---- */
  window.EDCConsent = {
    get: current,
    set: write,
    open: openModal,
    accept: () => write({ umami: true, maps: true, analytics: true, campaigns: true }),
    reject: () => write({ umami: false, maps: false, analytics: false, campaigns: false }),
    on: fn => { if (typeof fn === 'function') listeners.add(fn); return () => listeners.delete(fn); }
  };

  /* ---- Boot ---- */
  function boot() {
    const stored = read();
    applyMapGate(stored || DEFAULT);
    applyUmami(stored || DEFAULT);
    applyAnalytics(stored || DEFAULT);
    if (needsConsentPrompt()) {
      setTimeout(showBanner, 650);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

/* ---------- CONVERSION EVENT TRACKING ----------
   Thin wrapper over Umami and GA4. Umami is cookieless and can be disabled
   from preferences; custom GA4 contact events remain consent-gated. We
   capture the conversion-critical micro-actions: phone taps, WhatsApp
   taps, appointment CTAs and form submissions. Delegated from document
   so it covers nav, footer, FAB, mobile bar and any injected markup. */
window.track = function track(name, params) {
  let consent;
  try {
    consent = window.EDCConsent && window.EDCConsent.get();
  } catch (_) { return; }
  const sourceClinic = document.body?.dataset.clinic;
  const details = {
    ...params,
    // Share the same source context across links and the appointment funnel.
    // Do not copy query strings, fragments, form fields or visible link text.
    page_path: window.location.pathname,
    page_language: document.documentElement?.lang === 'es' ? 'es' : 'ca',
    page_clinic: sourceClinic === 'tremp' ? 'tremp' : sourceClinic === 'carrera' ? 'lleida' : 'general'
  };
  try {
    if (consent && consent.umami && window.EDCUmami) {
      window.EDCUmami.track(name, details);
    }
  } catch (_) {}
  // One provider being blocked must not drop events for the other provider.
  try {
    if (consent && consent.analytics && typeof window.gtag === 'function') {
      window.gtag('event', name, details);
    }
  } catch (_) {}
};

(function initTracking() {
  const clickEvents = new Map([
    ['click_cita', 'appointment_cta_click'],
    ['appointment_cta_click', 'appointment_cta_click'],
    ['contact_options_click', 'contact_options_click'],
    ['blog_service_click', 'blog_service_click'],
    ['directions_click', 'directions_click']
  ]);
  // Stable labels used by static HTML and the landing/guide renderers.
  const clickLabels = new Set([
    'hero', 'cta-band', 'serveis-cta', 'landing-hero', 'landing-section',
    'landing-section-tremp', 'landing-footer', 'landing-alternative-tremp',
    'landing-practical', 'guide-contact', 'lleida-first-visit'
  ]);
  const clinicForNumber = value => {
    const digits = value.replace(/\D/g, '');
    if (digits.endsWith('973447534') || digits.endsWith('650600172')) return 'tremp';
    if (digits.endsWith('973268826') || digits.endsWith('615983352')) return 'lleida';
    return 'general';
  };
  document.addEventListener('click', e => {
    const tel = e.target.closest('a[href^="tel:"]');
    if (tel) {
      window.track('phone_click', {
        clinic: clinicForNumber(tel.getAttribute('href'))
      });
      return;
    }
    const wa = e.target.closest('a[href*="wa.me"]');
    if (wa) {
      window.track('whatsapp_click', {
        clinic: clinicForNumber(new URL(wa.href).pathname)
      });
      return;
    }
    // Navigation and the mobile bar also lead to the appointment form.
    // Count the intent once; a phone/WhatsApp tap is never a confirmed lead.
    const link = e.target.closest('a[href]');
    if (link?.hasAttribute('hreflang')) return;
    const url = link ? new URL(link.href, window.location.href) : null;
    const contactLink = url && url.origin === window.location.origin
      && ['/seus.html', '/es/sedes.html'].includes(url.pathname)
      && /^#contact[eo](?:-(?:carrera|tremp|whatsapp|directe))?(?:-(?:whatsapp|directe))?$/.test(url.hash);
    const cta = e.target.closest('[data-track]');
    const explicit = cta?.getAttribute('data-track');
    if (!contactLink && !clickEvents.has(explicit)) return;
    const eventName = contactLink
      ? /-(whatsapp|directe)$/.test(url.hash) ? 'contact_options_click' : 'appointment_cta_click'
      : clickEvents.get(explicit);
    const destinationClinic = contactLink && /-tremp(?:-|$)/.test(url.hash) ? 'tremp'
      : contactLink && /-carrera(?:-|$)/.test(url.hash) ? 'lleida' : 'unselected';
    const sourceClinic = document.body?.dataset.clinic;
    const clinic = eventName === 'directions_click'
      ? sourceClinic === 'tremp' ? 'tremp' : sourceClinic === 'carrera' ? 'lleida' : 'general'
      : destinationClinic;
    const position = link?.closest('.mobile-cta-bar') ? 'mobile-bar' : link?.closest('.mobile-menu') ? 'mobile-menu'
      : link?.closest('.nav') ? 'navigation' : link?.closest('.footer') ? 'footer' : 'page';
    const label = cta?.getAttribute('data-track-label');
    const etiqueta = clickLabels.has(label) ? label : position;
    // Legacy click_cita attributes now join the same bilingual funnel.
    window.track(eventName, { clinic, etiqueta });
  }, { passive: true });

})();

/* ---------- CLINIC-AWARE CONTACTS ---------- */
(function initClinicContacts() {
  const es = document.documentElement.lang === 'es';
  const contact = es ? '/es/sedes.html' : '/seus.html';
  const hash = es ? '#contacto' : '#contacte';
  const clinics = {
    carrera: { city: 'Lleida', phone: '+34973268826', wa: '34615983352' },
    tremp: { city: 'Tremp', phone: '+34973447534', wa: '34650600172' }
  };
  const pageClinic = document.body.dataset.clinic || '';
  const bar = document.createElement('div');
  bar.className = 'mobile-cta-bar';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', es ? 'Cita y contacto' : 'Cita i contacte');
  bar.innerHTML = `<a class="mobile-cta-bar__btn mobile-cta-bar__btn--call" data-bar-primary></a><a class="mobile-cta-bar__btn mobile-cta-bar__btn--wa" data-bar-secondary></a>`;
  document.body.appendChild(bar);
  function update(id) {
    const c = clinics[id];
    const first = bar.querySelector('[data-bar-primary]');
    const second = bar.querySelector('[data-bar-secondary]');
    first.href = c ? `tel:${c.phone}` : contact + hash;
    first.textContent = c ? `${es ? 'Llamar' : 'Trucar'} · ${c.city}` : (es ? 'Pedir cita' : 'Demanar cita');
    second.href = c ? `https://wa.me/${c.wa}` : contact + hash + '-directe';
    second.textContent = c ? `WhatsApp · ${c.city}` : (es ? 'Llamar / WhatsApp' : 'Trucar / WhatsApp');
    if (c) { second.target = '_blank'; second.rel = 'noopener'; second.dataset.seu = c.city.toLowerCase(); }
    else { second.removeAttribute('target'); second.removeAttribute('data-seu'); }
  }
  update(pageClinic);
  document.addEventListener('appointment:clinic', event => update(event.detail.id));
  const footer = document.querySelector('.footer');
  if (footer && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => entries.forEach(en => bar.classList.toggle('is-hidden', en.isIntersecting))).observe(footer);
  }
})();

/* ---------- FAQ ACCORDION ----------
   Accessible disclosure: each question is a <button aria-expanded>
   controlling the answer panel. Open one at a time isn't enforced —
   visitors can keep several open while comparing answers. */
(function initFAQ() {
  const items = document.querySelectorAll('.faq__q');
  if (!items.length) return;
  items.forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (!open) window.track && window.track('obre_faq', { pregunta: btn.textContent.trim().slice(0, 80) });
    });
  });
})();

/* ---------- FIRST-VISIT PROCESS ACCORDION ----------
   Same disclosure pattern as the FAQ: collapsed by default to keep
   the "Què passa a la primera visita" block compact, each moment
   expands independently. */
(function initProcessAccordion() {
  const items = document.querySelectorAll('.about__process-toggle');
  if (!items.length) return;
  items.forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (!open) window.track && window.track('obre_moment_primera_visita', { moment: btn.querySelector('.about__process-toggle-title')?.textContent.trim() });
    });
  });
})();

/* ---------- CLINIC GALLERY SLIDESHOW (seus) ----------
   A single crossfading stage with autoplay, a thin progress bar, dots,
   arrows, keyboard and swipe. Autoplay pauses on hover / focus / touch,
   while off-screen, and when the tab is hidden. Fully honours
   prefers-reduced-motion (no autoplay, no zoom, instant-ish fade). */
(function initGallerySlideshows() {
  document.querySelectorAll('[data-gallery]').forEach(initGallerySlideshow);
})();

function initGallerySlideshow(root) {
  const slides = Array.from(root.querySelectorAll('[data-slide]'));
  const total = slides.length;
  if (!total) return;

  const captionEl = root.querySelector('[data-caption-el]');
  const countEl = root.querySelector('[data-count]');
  const dotsWrap = root.querySelector('[data-dots]');
  const progressEl = root.querySelector('[data-progress]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTOPLAY_MS = 5200;
  let current = 0;
  let timer = null;

  const pad = n => String(n).padStart(2, '0');

  const dots = slides.map((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'gallery-slideshow__dot';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Foto ${i + 1} de ${total}`);
    b.addEventListener('click', () => { go(i); restart(); });
    dotsWrap && dotsWrap.appendChild(b);
    return b;
  });

  function restartProgress() {
    if (!progressEl || reduced) return;
    progressEl.style.transition = 'none';
    progressEl.style.transform = 'scaleX(0)';
    void progressEl.offsetWidth; // reflow so the next transition runs
    progressEl.style.transition = `transform ${AUTOPLAY_MS}ms linear`;
    progressEl.style.transform = 'scaleX(1)';
  }

  function go(i) {
    current = (i + total) % total;
    slides.forEach((s, j) => {
      const on = j === current;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    dots.forEach((d, j) => {
      d.classList.toggle('is-active', j === current);
      d.setAttribute('aria-selected', j === current ? 'true' : 'false');
    });
    if (captionEl) captionEl.textContent = slides[current].getAttribute('data-caption') || '';
    if (countEl) countEl.textContent = `${pad(current + 1)} / ${pad(total)}`;
    restartProgress();
  }
  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  function start() {
    if (reduced) return;
    stop();
    timer = setInterval(next, AUTOPLAY_MS);
    restartProgress();
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    if (progressEl && !reduced) { progressEl.style.transition = 'none'; }
  }
  function restart() { if (!reduced) start(); }

  root.querySelector('[data-prev]')?.addEventListener('click', () => { prev(); restart(); });
  root.querySelector('[data-next]')?.addEventListener('click', () => { next(); restart(); });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { next(); restart(); }
    else if (e.key === 'ArrowLeft') { prev(); restart(); }
  });

  let touchX = null;
  root.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; stop(); }, { passive: true });
  root.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    touchX = null;
    restart();
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      entries => entries.forEach(en => (en.isIntersecting ? start() : stop())),
      { threshold: 0.35 }
    ).observe(root);
  } else {
    start();
  }
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  go(0);
}

/* Auto-updating copyright year — keeps every footer current with no build step.
   The hard-coded year in the markup stays as a no-JS fallback. */
(function initCopyrightYear() {
  var year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = year;
  });
})();
