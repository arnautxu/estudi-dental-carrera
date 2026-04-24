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
