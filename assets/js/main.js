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
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
}

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
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
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

/* ---------- LOCATION CARD PARALLAX ---------- */
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

/* ---------- CONTACT FORM ---------- */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn') || form.querySelector('[type="submit"]');
    const origHTML = btn.innerHTML;
    const origStyle = btn.getAttribute('style') || '';
    btn.innerHTML = 'Enviant...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="17" height="17" aria-hidden="true" style="flex-shrink:0"><path d="M3.5 10.5l4.5 4.5 8.5-9" class="check-path"/></svg><span>Sol·licitud enviada!</span>`;
      btn.style.cssText = origStyle + ';background:var(--success,oklch(52% 0.13 158));display:inline-flex;align-items:center;gap:8px;justify-content:center';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = origHTML;
        btn.setAttribute('style', origStyle);
        btn.disabled = false;
      }, 4000);
    }, 1200);
  });
}

/* ---------- STAT COUNTER ---------- */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  function animateCounter(el) {
    const original = el.textContent.trim();
    // Detect Catalan thousands separator (period): e.g. "+5.000"
    const hasThousands = /\d\.\d{3}/.test(original);
    const target = parseInt(original.replace(/\./g, '').replace(/[^\d]/g, ''), 10);
    if (!target) return;
    const prefix = original.match(/^[^\d]*/)[0];

    const fmt = n => {
      if (hasThousands && n >= 1000) {
        return prefix + Math.floor(n / 1000) + '.' + String(n % 1000).padStart(3, '0');
      }
      return prefix + n;
    };

    const duration = 1400;
    const startTs = performance.now();
    const tick = ts => {
      const t = Math.min((ts - startTs) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // cubic ease-out
      el.textContent = fmt(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(tick);
      else { el.textContent = original; el.classList.add('counted'); } // restore + pulse
    };
    requestAnimationFrame(tick);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.8 });

  document.querySelectorAll('.stat__num').forEach(el => counterObs.observe(el));
}

/* ---------- TEAM CARDS: subtle hover tilt ---------- */
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

/* ---------- TESTIMONIALS (3D stage with Motion One springs) ---------- */
(function initTestimonials() {
  const root = document.querySelector('[data-testimonials]');
  if (!root) return;
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
    d.setAttribute('aria-label', `Ressenya ${i + 1} de ${total}`);
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
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- TAB TITLE DELIGHT ---------- */
const _pageTitle = document.title;
document.addEventListener('visibilitychange', () => {
  document.title = document.hidden ? '🦷 Tornes aviat?' : _pageTitle;
});

/* ---------- SPARKLE CURSOR (desktop only) ---------- */
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  const sparkleBeix = getComputedStyle(document.documentElement).getPropertyValue('--beix').trim() || '#C1B2A2';
  const style = document.createElement('style');
  style.textContent = `@keyframes sparkle{0%{transform:translate(-50%,-50%) scale(0);opacity:1}60%{transform:translate(-50%,-50%) scale(1.8);opacity:.5}100%{transform:translate(-50%,-60%) scale(.5);opacity:0}}`;
  document.head.appendChild(style);
  let last = 0;
  document.addEventListener('mousemove', e => {
    if (Date.now() - last < 80) return;
    last = Date.now();
    const d = document.createElement('div');
    d.style.cssText = `position:fixed;pointer-events:none;z-index:9999;left:${e.clientX}px;top:${e.clientY}px;width:5px;height:5px;border-radius:50%;background:${sparkleBeix};animation:sparkle .5s ease-out forwards;`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 500);
  });
}

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
  const DEFAULT = { necessary: true, maps: false, ts: null };

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
    const next = Object.assign({}, DEFAULT, prefs, {
      necessary: true,
      ts: new Date().toISOString()
    });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (_) {}
    listeners.forEach(fn => { try { fn(next); } catch (_) {} });
    applyMapGate(next);
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

  /* ---- Banner ---- */
  let bannerEl = null;
  function buildBanner() {
    if (bannerEl) return bannerEl;
    const el = document.createElement('aside');
    el.className = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'Consentiment de cookies');
    el.innerHTML = `
      <h2 class="cookie-banner__title">Cookies i privacitat</h2>
      <p class="cookie-banner__text">Fem servir cookies tècniques pròpies per al funcionament del lloc i, si ho acceptes, mapes de Google Maps a la pàgina de seus. <a href="cookies.html">Més informació</a>.</p>
      <div class="cookie-banner__actions">
        <button type="button" class="cc-btn cc-btn--link" data-consent-action="prefs">Preferències</button>
        <button type="button" class="cc-btn cc-btn--ghost" data-consent-action="reject">Rebutjar</button>
        <button type="button" class="cc-btn cc-btn--primary" data-consent-action="accept">Acceptar</button>
      </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      const btn = e.target.closest('[data-consent-action]');
      if (!btn) return;
      const action = btn.dataset.consentAction;
      if (action === 'accept') { write({ maps: true }); hideBanner(); }
      else if (action === 'reject') { write({ maps: false }); hideBanner(); }
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
  const CATEGORIES = [
    {
      key: 'necessary',
      label: 'Estrictament necessàries',
      tag: 'Sempre actives',
      desc: 'Permeten el funcionament bàsic del lloc (navegació, sessió, formularis). Sense aquestes cookies el web no funcionaria correctament.',
      required: true
    },
    {
      key: 'maps',
      label: 'Mapes de Google Maps',
      tag: 'De tercers',
      desc: 'Carrega els mapes integrats a la pàgina de seus perquè puguis veure la ubicació de les clíniques. Google pot establir cookies pròpies segons la seva política.',
      required: false
    }
  ];

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
        <button type="button" class="cookie-modal__close" data-consent-action="close" aria-label="Tancar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
        </button>
        <h2 class="cookie-modal__title" id="cookieModalTitle">Preferències de cookies</h2>
        <p class="cookie-modal__lead">Tria quines categories acceptes. Pots canviar aquestes preferències en qualsevol moment des del peu de pàgina.</p>
        <div class="cookie-modal__groups" data-groups></div>
        <div class="cookie-modal__actions">
          <button type="button" class="cc-btn cc-btn--ghost cc-btn--reject" data-consent-action="reject">Rebutjar opcionals</button>
          <button type="button" class="cc-btn cc-btn--ghost" data-consent-action="save">Desar preferències</button>
          <button type="button" class="cc-btn cc-btn--primary" data-consent-action="accept">Acceptar totes</button>
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
            aria-label="Activar ${cat.label}"
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
      else if (a === 'accept') { write({ maps: true }); closeModal(); hideBanner(); }
      else if (a === 'reject') { write({ maps: false }); closeModal(); hideBanner(); }
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
    accept: () => write({ maps: true }),
    reject: () => write({ maps: false }),
    on: fn => { if (typeof fn === 'function') listeners.add(fn); return () => listeners.delete(fn); }
  };

  /* ---- Boot ---- */
  function boot() {
    const stored = read();
    applyMapGate(stored || DEFAULT);
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
