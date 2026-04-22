/* ============================================================
   ESTUDI DENTAL CARRERA — Main JS
   ============================================================ */

/* ---------- NAV ---------- */
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero');

function updateNav() {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('scrolled', scrolled);
  if (hero) {
    nav.classList.toggle('nav--hero', hero.getBoundingClientRect().bottom > 72);
  }
}
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

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
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    const bg = card.querySelector('.location-card__bg');
    if (bg) bg.style.transform = `scale(1.06) translate(${x*10}px,${y*10}px)`;
  });
  card.addEventListener('mouseleave', () => {
    const bg = card.querySelector('.location-card__bg');
    if (bg) bg.style.transform = '';
  });
});

/* ---------- CONTACT FORM ---------- */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn') || form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Enviant...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Sol·licitud enviada!';
      btn.style.background = '#5a8a6a';
      form.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    }, 1200);
  });
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

/* ---------- SPARKLE CURSOR (desktop only) ---------- */
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  const style = document.createElement('style');
  style.textContent = `@keyframes sparkle{0%{transform:translate(-50%,-50%) scale(0);opacity:1}60%{transform:translate(-50%,-50%) scale(1.8);opacity:.5}100%{transform:translate(-50%,-60%) scale(.5);opacity:0}}`;
  document.head.appendChild(style);
  let last = 0;
  document.addEventListener('mousemove', e => {
    if (Date.now() - last < 80) return;
    last = Date.now();
    const d = document.createElement('div');
    d.style.cssText = `position:fixed;pointer-events:none;z-index:9999;left:${e.clientX}px;top:${e.clientY}px;width:5px;height:5px;border-radius:50%;background:#C1B2A2;animation:sparkle .5s ease-out forwards;`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 500);
  });
}
