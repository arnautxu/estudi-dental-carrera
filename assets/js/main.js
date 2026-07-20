/* ============================================================
   ESTUDI DENTAL CARRERA — Main JS
   ============================================================ */

/* ---------- NAV ---------- */
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero') || document.querySelector('.page-hero:not(.page-hero--light)');

function updateNav() {
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

/* ---------- CONTACT FORM ----------
   Honest states only: the form never claims success unless a submission
   actually goes somewhere. FORM_ENDPOINT is intentionally empty until a
   real backend (Formspree / Web3Forms / a Vercel serverless function) is
   wired — until then, invalid fields show inline errors and a valid
   submission is routed to phone/WhatsApp instead of a fake confirmation. */
const form = document.getElementById('contactForm');
if (form) {
  const FORM_ENDPOINT = ''; // TODO: set the real form backend endpoint to enable submissions.
  const FORM_LANG = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase();
  const FS = ({
    ca: {
      fieldRequired: 'Aquest camp és obligatori.',
      formInvalid: 'Revisa els camps marcats en vermell.',
      sending: 'Enviant...',
      success: 'Sol·licitud enviada! Et contactarem en menys de 24 hores.',
      error: 'No hem pogut enviar el formulari. Truca’ns al 973 26 88 26 o escriu-nos per WhatsApp i ho resolem a l’instant.',
      notWired: 'De moment no podem processar la sol·licitud des d’aquí. Truca’ns al 973 26 88 26 o escriu-nos per WhatsApp — et confirmarem la cita a l’instant.'
    },
    es: {
      fieldRequired: 'Este campo es obligatorio.',
      formInvalid: 'Revisa los campos marcados en rojo.',
      sending: 'Enviando...',
      success: '¡Solicitud enviada! Te contactaremos en menos de 24 horas.',
      error: 'No hemos podido enviar el formulario. Llámanos al 973 26 88 26 o escríbenos por WhatsApp y lo resolvemos al instante.',
      notWired: 'De momento no podemos procesar la solicitud desde aquí. Llámanos al 973 26 88 26 o escríbenos por WhatsApp — te confirmamos la cita al instante.'
    }
  })[FORM_LANG] || {};

  const statusEl = form.querySelector('[data-form-status]');
  const btn = form.querySelector('.submit-btn') || form.querySelector('[type="submit"]');
  const origHTML = btn.innerHTML;

  function setStatus(msg, kind) {
    if (!statusEl) return;
    statusEl.textContent = msg || '';
    statusEl.hidden = !msg;
    statusEl.className = 'form-status' + (kind ? ' form-status--' + kind : '');
  }

  function clearFieldErrors() {
    form.querySelectorAll('.field-error').forEach(el => el.remove());
    form.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));
  }

  function markInvalid(field) {
    field.setAttribute('aria-invalid', 'true');
    if (!field.id) return;
    const id = field.id + '-error';
    const err = document.createElement('span');
    err.className = 'field-error';
    err.id = id;
    err.textContent = FS.fieldRequired;
    field.setAttribute('aria-describedby', id);
    field.closest('.form-group')?.appendChild(err);
  }

  function validate() {
    clearFieldErrors();
    let firstInvalid = null;
    form.querySelectorAll('[required]').forEach(field => {
      const invalid = field.type === 'checkbox' ? !field.checked : !field.value.trim();
      if (invalid) {
        markInvalid(field);
        if (!firstInvalid) firstInvalid = field;
      }
    });
    return firstInvalid;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) {
      firstInvalid.focus();
      setStatus(FS.formInvalid, 'error');
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus(FS.notWired, 'info');
      return;
    }

    setStatus('');
    btn.innerHTML = FS.sending;
    btn.disabled = true;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus(FS.success, 'success');
      form.reset();
    } catch (_) {
      setStatus(FS.error, 'error');
    } finally {
      btn.innerHTML = origHTML;
      btn.disabled = false;
    }
  });
}

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
(function initTestimonials() {
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
})();

/* ---------- BACK TO TOP ---------- */
const backTop = document.createElement('button');
backTop.className = 'back-top';
backTop.setAttribute('aria-label', 'Tornar a dalt');
backTop.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 13V5M4.5 9.5l4.5-5 4.5 5"/></svg>`;
document.body.appendChild(backTop);
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }));

/* ---------- TAB TITLE DELIGHT ---------- */
const _pageTitle = document.title;
const _awayTitle = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase() === 'es'
  ? '¿Vuelves pronto?' : 'Tornes aviat?';
document.addEventListener('visibilitychange', () => {
  document.title = document.hidden ? _awayTitle : _pageTitle;
});

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
  const DEFAULT = { necessary: true, maps: false, analytics: false, ts: null };

  const LANG = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase();
  const I18N = {
    ca: {
      bannerTitle: 'Cookies i privacitat',
      bannerText: 'Fem servir cookies tècniques pròpies per al funcionament del lloc i, si ho acceptes, mapes de Google Maps a la pàgina de seus. <a href="cookies.html">Més informació</a>.',
      prefs: 'Preferències', reject: 'Rebutjar', accept: 'Acceptar',
      bannerAria: 'Consentiment de cookies',
      modalTitle: 'Preferències de cookies',
      modalLead: 'Tria quines categories acceptes. Pots canviar aquestes preferències en qualsevol moment des del peu de pàgina.',
      rejectOptional: 'Rebutjar opcionals', save: 'Desar preferències', acceptAll: 'Acceptar totes',
      close: 'Tancar',
      categories: [
        { key: 'necessary', label: 'Estrictament necessàries', tag: 'Sempre actives',
          desc: 'Permeten el funcionament bàsic del lloc (navegació, sessió, formularis). Sense aquestes cookies el web no funcionaria correctament.', required: true },
        { key: 'maps', label: 'Mapes de Google Maps', tag: 'De tercers',
          desc: 'Carrega els mapes integrats a la pàgina de seus perquè puguis veure la ubicació de les clíniques. Google pot establir cookies pròpies segons la seva política.', required: false },
        { key: 'analytics', label: 'Estadístiques (Google Analytics)', tag: 'De tercers',
          desc: 'Ens ajuden a entendre de forma anònima i agregada com es fa servir el web (pàgines vistes, clics a telèfon o WhatsApp) per millorar-lo. No carreguem Google Analytics fins que ho acceptes.', required: false }
      ]
    },
    es: {
      bannerTitle: 'Cookies y privacidad',
      bannerText: 'Usamos cookies técnicas propias para el funcionamiento del sitio y, si lo aceptas, mapas de Google Maps en la página de sedes. <a href="cookies.html">Más información</a>.',
      prefs: 'Preferencias', reject: 'Rechazar', accept: 'Aceptar',
      bannerAria: 'Consentimiento de cookies',
      modalTitle: 'Preferencias de cookies',
      modalLead: 'Elige qué categorías aceptas. Puedes cambiar estas preferencias en cualquier momento desde el pie de página.',
      rejectOptional: 'Rechazar opcionales', save: 'Guardar preferencias', acceptAll: 'Aceptar todas',
      close: 'Cerrar',
      categories: [
        { key: 'necessary', label: 'Estrictamente necesarias', tag: 'Siempre activas',
          desc: 'Permiten el funcionamiento básico del sitio (navegación, sesión, formularios). Sin estas cookies el sitio no funcionaría correctamente.', required: true },
        { key: 'maps', label: 'Mapas de Google Maps', tag: 'De terceros',
          desc: 'Carga los mapas integrados en la página de sedes para que puedas ver la ubicación de las clínicas. Google puede establecer sus propias cookies según su política.', required: false },
        { key: 'analytics', label: 'Estadísticas (Google Analytics)', tag: 'De terceros',
          desc: 'Nos ayudan a entender de forma anónima y agregada cómo se usa el sitio (páginas vistas, clics en teléfono o WhatsApp) para mejorarlo. No cargamos Google Analytics hasta que lo aceptes.', required: false }
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
      return Object.assign({}, DEFAULT, p, { necessary: true });
    } catch (_) { return null; }
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

  /* ---- Google Analytics 4 gate ----
     GA is loaded lazily, ONLY after the visitor grants the "analytics"
     category. Until then no request is made to Google's servers. The
     gtag() stub + Consent Mode defaults live in each page's <head>. */
  let gaLoaded = false;
  function applyAnalytics(prefs) {
    const allow = !!(prefs && prefs.analytics);
    if (!allow) {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
      }
      return;
    }
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    loadGA();
  }
  function loadGA() {
    if (gaLoaded) return;
    const id = window.GA4_ID;
    if (!id || /X{4,}/.test(id)) { gaLoaded = true; return; } // placeholder → don't load
    gaLoaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);
    if (typeof window.gtag === 'function') {
      window.gtag('js', new Date());
      window.gtag('config', id, { anonymize_ip: true });
    }
  }

  /* ---- Banner ---- */
  let bannerEl = null;
  function buildBanner() {
    if (bannerEl) return bannerEl;
    const el = document.createElement('aside');
    el.className = 'cookie-banner';
    el.setAttribute('role', 'dialog');
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
      if (action === 'accept') { write({ maps: true, analytics: true }); hideBanner(); }
      else if (action === 'reject') { write({ maps: false, analytics: false }); hideBanner(); }
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
      else if (a === 'accept') { write({ maps: true, analytics: true }); closeModal(); hideBanner(); }
      else if (a === 'reject') { write({ maps: false, analytics: false }); closeModal(); hideBanner(); }
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
    accept: () => write({ maps: true, analytics: true }),
    reject: () => write({ maps: false, analytics: false }),
    on: fn => { if (typeof fn === 'function') listeners.add(fn); return () => listeners.delete(fn); }
  };

  /* ---- Boot ---- */
  function boot() {
    const stored = read();
    applyMapGate(stored || DEFAULT);
    applyAnalytics(stored || DEFAULT);
    if (!stored) {
      setTimeout(showBanner, 650);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

/* ---------- HERO CONSTELLATION — responsive fit ----------
   The SVG's preserveAspectRatio is not reachable via CSS. On narrow
   viewports we swap from 'slice' (crops sides) to 'meet' (fits the
   whole graph), so the remaining nodes stay on-screen. */
(function () {
  const svg = document.querySelector('.hero-constellation');
  if (!svg) return;
  const mq = window.matchMedia('(max-width: 640px)');
  const apply = () => {
    svg.setAttribute('preserveAspectRatio', mq.matches ? 'xMidYMid meet' : 'xMidYMid slice');
  };
  apply();
  if (mq.addEventListener) mq.addEventListener('change', apply);
  else if (mq.addListener) mq.addListener(apply); // Safari <14
})();

/* ---------- CONVERSION EVENT TRACKING ----------
   Thin wrapper over GA4. track() is a no-op until the visitor grants the
   analytics category (gtag only sends once loaded — see initConsent). We
   capture the conversion-critical micro-actions: phone taps, WhatsApp
   taps, appointment CTAs and form submissions. Delegated from document
   so it covers nav, footer, FAB, mobile bar and any injected markup. */
window.track = function track(name, params) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  } catch (_) {}
};

(function initTracking() {
  document.addEventListener('click', e => {
    const tel = e.target.closest('a[href^="tel:"]');
    if (tel) {
      window.track('click_telefon', { numero: tel.getAttribute('href').replace('tel:', '') });
      return;
    }
    const wa = e.target.closest('a[href*="wa.me"]');
    if (wa) {
      window.track('click_whatsapp', { seu: wa.getAttribute('data-seu') || 'general' });
      return;
    }
    const cta = e.target.closest('[data-track]');
    if (cta) {
      window.track(cta.getAttribute('data-track'), { etiqueta: cta.getAttribute('data-track-label') || cta.textContent.trim().slice(0, 60) });
    }
  }, { passive: true });

  // Form submission intent — fires even though the backend isn't wired yet,
  // so the clinic can already see how many visitors reach "send".
  const cForm = document.getElementById('contactForm');
  if (cForm) {
    cForm.addEventListener('submit', () => {
      const seu = cForm.querySelector('[name="clinica"],[name="seu"],select');
      window.track('submit_formulari', { seu: (seu && seu.value) || '' });
    });
  }
})();

/* ---------- STICKY MOBILE ACTION BAR ----------
   On phones, a fixed bottom bar puts "Call" and "WhatsApp" one tap away on
   every page — the single highest-leverage conversion element for a local
   clinic. Injected here (like back-top) so it needs no per-page markup.
   Hidden on desktop via CSS; hidden over the footer so it never covers
   the legal links / contact details. */
(function initMobileBar() {
  const LANG = (document.documentElement.lang || 'ca').slice(0, 2).toLowerCase();
  const STR = {
    ca: { call: 'Trucar', wa: 'WhatsApp', callAria: 'Trucar a la clínica', waAria: 'Escriure per WhatsApp' },
    es: { call: 'Llamar', wa: 'WhatsApp', callAria: 'Llamar a la clínica', waAria: 'Escribir por WhatsApp' },
    en: { call: 'Call',   wa: 'WhatsApp', callAria: 'Call the clinic',     waAria: 'Message on WhatsApp' }
  }[LANG] || { call: 'Trucar', wa: 'WhatsApp', callAria: 'Trucar a la clínica', waAria: 'Escriure per WhatsApp' };

  // Primary contacts (Lleida line + main WhatsApp), overridable per page
  // via <body data-phone="..." data-wa="...">.
  const phone = document.body.getAttribute('data-phone') || '+34973268826';
  const wa    = document.body.getAttribute('data-wa') || '34615983352';

  const bar = document.createElement('div');
  bar.className = 'mobile-cta-bar';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', STR.call + ' / ' + STR.wa);
  bar.innerHTML = `
    <a href="tel:${phone}" class="mobile-cta-bar__btn mobile-cta-bar__btn--call" aria-label="${STR.callAria}">
      <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 1.5h3l1.5 3.5-1.75 1.25a9 9 0 004.5 4.5L11 9l3.5 1.5v3a1 1 0 01-1 1C6.3 14.5 1.5 9.7 1.5 3.5a1 1 0 011-1z"/></svg>
      <span>${STR.call}</span>
    </a>
    <a href="https://wa.me/${wa}" class="mobile-cta-bar__btn mobile-cta-bar__btn--wa" target="_blank" rel="noopener" data-seu="general" aria-label="${STR.waAria}">
      <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
      <span>${STR.wa}</span>
    </a>`;
  document.body.appendChild(bar);

  // Hide the bar while the footer is on screen so it never covers it.
  const footer = document.querySelector('.footer');
  if (footer && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(en => bar.classList.toggle('is-hidden', en.isIntersecting));
    }, { threshold: 0 }).observe(footer);
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

/* ---------- CLINIC GALLERY SLIDESHOW (seus) ----------
   A single crossfading stage with autoplay, a thin progress bar, dots,
   arrows, keyboard and swipe. Autoplay pauses on hover / focus / touch,
   while off-screen, and when the tab is hidden. Fully honours
   prefers-reduced-motion (no autoplay, no zoom, instant-ish fade). */
(function initGallerySlideshow() {
  const root = document.querySelector('[data-gallery]');
  if (!root) return;
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
})();
