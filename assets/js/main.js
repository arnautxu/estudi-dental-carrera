/* ============================================================
   ESTUDI DENTAL CARRERA — Main JS
   ============================================================ */

/* ---------- NAV: scroll state + hero detection ---------- */
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero');

function updateNav() {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('scrolled', scrolled);

  if (hero) {
    const heroBottom = hero.getBoundingClientRect().bottom;
    nav.classList.toggle('nav--hero', heroBottom > 72);
  }
}
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

/* ---------- NAV: mobile burger ---------- */
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

function toggleMenu(state) {
  menuOpen = state ?? !menuOpen;
  burger.setAttribute('aria-expanded', menuOpen);
  mobileMenu.classList.toggle('open', menuOpen);
  mobileMenu.setAttribute('aria-hidden', !menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  animateBurger(menuOpen);
}

function animateBurger(open) {
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
}

burger.addEventListener('click', () => toggleMenu());
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => toggleMenu(false));
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuOpen) toggleMenu(false);
});

/* ---------- REVEAL ON SCROLL ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- LOCATION PILLS (hero) ---------- */
const pills = document.querySelectorAll('.location-pill');
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const loc = pill.dataset.loc;
    const target = document.querySelector(`[data-loc="${loc}"]`);
    if (target && target.closest('.locations__cards')) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

/* ---------- SMOOTH ANCHOR SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---------- CONTACT FORM ---------- */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Enviant...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Sol·licitud enviada!';
      btn.style.background = '#5a8a6a';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Envia la sol·licitud';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    }, 1200);
  });
}

/* ---------- LOCATION CARDS: parallax on hover ---------- */
document.querySelectorAll('.location-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const bg = card.querySelector('.location-card__bg');
    if (bg) {
      bg.style.transform = `scale(1.04) translate(${x * 8}px, ${y * 8}px)`;
    }
  });
  card.addEventListener('mouseleave', () => {
    const bg = card.querySelector('.location-card__bg');
    if (bg) bg.style.transform = '';
  });
});

/* ---------- SERVICE CARDS: stagger reveal ---------- */
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, i) => {
  card.style.setProperty('--delay', `${i * 80}ms`);
});

/* ---------- NAV active link highlight ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ---------- CURSOR SPARKLE (subtle, desktop only) ---------- */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let sparkleTimeout;
  const createSparkle = (x, y) => {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9999;
      left: ${x}px; top: ${y}px;
      width: 4px; height: 4px;
      border-radius: 50%;
      background: #C1B2A2;
      transform: translate(-50%, -50%) scale(0);
      animation: sparkleAnim 0.6s ease-out forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 600);
  };

  const style = document.createElement('style');
  style.textContent = `
    @keyframes sparkleAnim {
      0%   { transform: translate(-50%,-50%) scale(0); opacity: 1; }
      50%  { transform: translate(-50%,-50%) scale(1.5); opacity: 0.6; }
      100% { transform: translate(-50%,-50%) scale(0.5) translateY(-20px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('mousemove', e => {
    clearTimeout(sparkleTimeout);
    sparkleTimeout = setTimeout(() => createSparkle(e.clientX, e.clientY), 60);
  });
}
