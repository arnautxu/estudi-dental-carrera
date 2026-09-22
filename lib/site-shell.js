// Shared normal-site navigation and footer, mirrored from serveis.html and
// es/servicios.html. Keep these fixed templates in sync with their static peers;
// serverless rendering does not read source HTML at runtime.
function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

const HEADERS = {
  ca: `  <header class="nav__HERO__" id="nav">
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <img src="/assets/img/logos/logo-carrera-vertical.png" class="nav__logo-icon" alt="Estudi Dental Carrera" width="163" height="210" fetchpriority="high" />
      </a>
      <span class="nav__meta" aria-hidden="true">
        <span class="nav__meta-dot"></span>
        <span class="nav__meta-text">Lleida &amp; Tremp</span>
      </span>
      <nav class="nav__links" aria-label="Navegació principal">
        <a href="/"__ACTIVE_HOME__><span class="nav__label">Inici</span></a>
        <a href="/serveis.html"__ACTIVE_SERVICES__><span class="nav__label">Serveis</span></a>
        <a href="/equip.html"__ACTIVE_TEAM__><span class="nav__label">Equip</span></a>
        <a href="/seus.html"__ACTIVE_LOCATIONS__><span class="nav__label">Els nostres centres</span></a>
        <a href="/blog.html"__ACTIVE_BLOG__><span class="nav__label">Blog</span></a>
      </nav>
      <div class="nav__lang" role="group" aria-label="Idioma">
        <a href="#" class="nav__lang-link is-active" aria-current="true">CA</a>
        <span class="nav__lang-sep" aria-hidden="true">&middot;</span>
        <a href="__ALTERNATE__" class="nav__lang-link" hreflang="es" lang="es">ES</a>
      </div>
      <a href="/seus.html#contacte" class="btn btn--outline nav__cta">
        <span>Demana cita</span>
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 1.5h3l1.5 3.5-1.75 1.25a9 9 0 004.5 4.5L11 9l3.5 1.5v3a1 1 0 01-1 1C6.3 14.5 1.5 9.7 1.5 3.5a1 1 0 011-1z"/></svg>
      </a>
      <button class="nav__burger" id="navBurger" aria-label="Obrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu__top">
      <a href="/" class="mobile-menu__brand" aria-label="Inici · Estudi Dental Carrera">
        <img src="/assets/img/logos/logo-carrera-vertical.png" alt="" width="163" height="210" />
      </a>
      <button class="mobile-menu__close" id="mobileMenuClose" aria-label="Tancar menú">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
    <nav class="mobile-menu__nav" aria-label="Navegació principal">
      <a href="/" class="mobile-menu__link">
        <span class="mobile-menu__label">Inici</span>
      </a>
      <a href="/serveis.html" class="mobile-menu__link">
        <span class="mobile-menu__label">Serveis</span>
      </a>
      <a href="/equip.html" class="mobile-menu__link">
        <span class="mobile-menu__label">Equip</span>
      </a>
      <a href="/seus.html" class="mobile-menu__link">
        <span class="mobile-menu__label">Els nostres centres</span>
      </a>
      <a href="/blog.html" class="mobile-menu__link"><span class="mobile-menu__label">Blog</span></a>
    </nav>
    <div class="mobile-menu__footer">
      <a href="/seus.html#contacte" class="btn btn--primary btn--lg mobile-menu__cta">Demana cita</a>
      <div class="mobile-menu__seus">
        <a href="tel:+34973268826" class="mobile-menu__seu">
          <span class="mobile-menu__seu-label">Lleida</span>
          <span class="mobile-menu__seu-phone">973 26 88 26</span>
        </a>
        <a href="tel:+34973447534" class="mobile-menu__seu">
          <span class="mobile-menu__seu-label">Tremp</span>
          <span class="mobile-menu__seu-phone">973 44 75 34</span>
        </a></div>
        <div class="mobile-menu__lang" role="group" aria-label="Idioma">
          <a href="#" class="mobile-menu__lang-link is-active" aria-current="true">Catal&agrave;</a>
          <span class="mobile-menu__lang-sep" aria-hidden="true">&middot;</span>
          <a href="__ALTERNATE__" class="mobile-menu__lang-link" hreflang="es" lang="es">Espa&ntilde;ol</a>
        </div>
        <div class="mobile-menu__social">
          <a href="https://www.instagram.com/estudidentalcarrera/" class="mobile-menu__social-link" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="/seus.html#contacte-whatsapp" class="mobile-menu__social-link" rel="noopener" aria-label="WhatsApp: tria una clínica">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.965-1.364l-.356-.211-3.677.964.982-3.592-.231-.369A9.713 9.713 0 012.25 12C2.25 6.613 6.613 2.25 12 2.25S21.75 6.613 21.75 12 17.387 21.75 12 21.75z"/></svg>
          </a>
        </div>
    </div>
  </div>`,
  es: `  <header class="nav__HERO__" id="nav">
    <div class="nav__inner">
      <a href="/es/" class="nav__logo">
        <img src="/assets/img/logos/logo-carrera-vertical.png" class="nav__logo-icon" alt="Estudi Dental Carrera" width="163" height="210" fetchpriority="high" />
      </a>
      <span class="nav__meta" aria-hidden="true">
        <span class="nav__meta-dot"></span>
        <span class="nav__meta-text">Lleida &amp; Tremp</span>
      </span>
      <nav class="nav__links" aria-label="Navegación principal">
        <a href="/es/"__ACTIVE_HOME__><span class="nav__label">Inicio</span></a>
        <a href="/es/servicios.html"__ACTIVE_SERVICES__><span class="nav__label">Servicios</span></a>
        <a href="/es/equipo.html"__ACTIVE_TEAM__><span class="nav__label">Equipo</span></a>
        <a href="/es/sedes.html"__ACTIVE_LOCATIONS__><span class="nav__label">Clínicas</span></a>
        <a href="/es/blog.html"__ACTIVE_BLOG__><span class="nav__label">Blog</span></a>
      </nav>
      <div class="nav__lang" role="group" aria-label="Idioma">
        <a href="__ALTERNATE__" class="nav__lang-link" hreflang="ca" lang="ca">CA</a>
        <span class="nav__lang-sep" aria-hidden="true">&middot;</span>
        <a href="#" class="nav__lang-link is-active" aria-current="true">ES</a>
      </div>
      <a href="/es/sedes.html#contacto" class="btn btn--outline nav__cta">
        <span>Pedir cita</span>
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 1.5h3l1.5 3.5-1.75 1.25a9 9 0 004.5 4.5L11 9l3.5 1.5v3a1 1 0 01-1 1C6.3 14.5 1.5 9.7 1.5 3.5a1 1 0 011-1z"/></svg>
      </a>
      <button class="nav__burger" id="navBurger" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu__top">
      <a href="/es/" class="mobile-menu__brand" aria-label="Inicio · Estudi Dental Carrera">
        <img src="/assets/img/logos/logo-carrera-vertical.png" alt="" width="163" height="210" />
      </a>
      <button class="mobile-menu__close" id="mobileMenuClose" aria-label="Cerrar menú">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
    <nav class="mobile-menu__nav" aria-label="Navegación principal">
      <a href="/es/" class="mobile-menu__link">
        <span class="mobile-menu__label">Inicio</span>
      </a>
      <a href="/es/servicios.html" class="mobile-menu__link">
        <span class="mobile-menu__label">Servicios</span>
      </a>
      <a href="/es/equipo.html" class="mobile-menu__link">
        <span class="mobile-menu__label">Equipo</span>
      </a>
      <a href="/es/sedes.html" class="mobile-menu__link">
        <span class="mobile-menu__label">Clínicas</span>
      </a>
      <a href="/es/blog.html" class="mobile-menu__link"><span class="mobile-menu__label">Blog</span></a>
    </nav>
    <div class="mobile-menu__footer">
      <a href="/es/sedes.html#contacto" class="btn btn--primary btn--lg mobile-menu__cta">Pedir cita</a>
      <div class="mobile-menu__seus">
        <a href="tel:+34973268826" class="mobile-menu__seu">
          <span class="mobile-menu__seu-label">Lleida</span>
          <span class="mobile-menu__seu-phone">973 26 88 26</span>
        </a>
        <a href="tel:+34973447534" class="mobile-menu__seu">
          <span class="mobile-menu__seu-label">Tremp</span>
          <span class="mobile-menu__seu-phone">973 44 75 34</span>
        </a></div>
        <div class="mobile-menu__lang" role="group" aria-label="Idioma">
          <a href="__ALTERNATE__" class="mobile-menu__lang-link" hreflang="ca" lang="ca">Catal&agrave;</a>
          <span class="mobile-menu__lang-sep" aria-hidden="true">&middot;</span>
          <a href="#" class="mobile-menu__lang-link is-active" aria-current="true">Espa&ntilde;ol</a>
        </div>
        <div class="mobile-menu__social">
          <a href="https://www.instagram.com/estudidentalcarrera/" class="mobile-menu__social-link" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="/es/sedes.html#contacto-whatsapp" class="mobile-menu__social-link" rel="noopener" aria-label="WhatsApp: elige una clínica">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.965-1.364l-.356-.211-3.677.964.982-3.592-.231-.369A9.713 9.713 0 012.25 12C2.25 6.613 6.613 2.25 12 2.25S21.75 6.613 21.75 12 17.387 21.75 12 21.75z"/></svg>
          </a>
        </div>
    </div>
  </div>`
};

const FOOTERS = {
  ca: `  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="/" class="footer__logo">
            <img src="/assets/img/logos/logo-carrera-vertical.png" alt="Estudi Dental Carrera" width="163" height="210" loading="lazy" decoding="async" style="filter:brightness(0) invert(0.72);" />
          </a>
          <p class="footer__tagline">Primer entenem què et passa.<br />Lleida i Tremp, un sol equip.</p>
          <div class="footer__social">
            <a href="https://www.instagram.com/estudidentalcarrera/" class="footer__social-link" target="_blank" rel="noopener" aria-label="Instagram d'Estudi Dental Carrera">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="/seus.html#contacte-whatsapp" class="footer__social-link" rel="noopener" aria-label="WhatsApp: tria una clínica">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.965-1.364l-.356-.211-3.677.964.982-3.592-.231-.369A9.713 9.713 0 012.25 12C2.25 6.613 6.613 2.25 12 2.25S21.75 6.613 21.75 12 17.387 21.75 12 21.75z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer__col">
          <p class="footer__heading">Navegació</p>
          <ul>
            <li><a href="/">Inici</a></li>
            <li><a href="/serveis.html">Serveis</a></li>
            <li><a href="/equip.html">Equip</a></li>
            <li><a href="/seus.html">Els nostres centres</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/seus.html#contacte">Demana cita</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <p class="footer__heading">Centre Lleida</p>
          <ul>
            <li>Carrer Major, 74-76, 3r 3a</li><li>25007 Lleida</li>
            <li><a href="tel:+34973268826">973 26 88 26</a></li>
            <li>Dl–Dv: 9h – 20h</li><li>Ds: 9h – 14h</li>
          </ul>
        </div>
        <div class="footer__col">
          <p class="footer__heading">Centre Tremp</p>
          <ul>
            <li>Carrer Montllobar, 22 Baixos</li><li>25620 Tremp</li>
            <li><a href="tel:+34973447534">973 44 75 34</a></li>
            <li>Dl–Dv: 9h – 19h</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__meta">
          <p>&copy; <span data-year>2026</span> Estudi Dental Carrera. Tots els drets reservats.</p>
          <p class="footer__credit">Disseny i programaci&oacute; &middot; <a href="https://www.palsec.agency" target="_blank" rel="noopener">Palsec Agency</a></p>
        </div>
        <div class="footer__legal">
          <a href="/privacitat.html">Política de privacitat</a>
          <a href="/avis-legal.html">Avís legal</a>
          <a href="/cookies.html">Cookies</a>
          <button type="button" class="footer__consent-btn" data-consent-open>Prefer&egrave;ncies de cookies</button>
        </div>
      </div>
    </div>
  </footer>

  <a href="/seus.html#contacte-whatsapp" class="whatsapp-fab" rel="noopener" aria-label="WhatsApp: tria una clínica">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.965-1.364l-.356-.211-3.677.964.982-3.592-.231-.369A9.713 9.713 0 012.25 12C2.25 6.613 6.613 2.25 12 2.25S21.75 6.613 21.75 12 17.387 21.75 12 21.75z"/></svg>
  </a>`,
  es: `  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="/es/" class="footer__logo">
            <img src="/assets/img/logos/logo-carrera-vertical.png" alt="Estudi Dental Carrera" width="163" height="210" loading="lazy" decoding="async" style="filter:brightness(0) invert(0.72);" />
          </a>
          <p class="footer__tagline">Primero entendemos qué te pasa.<br />Lleida y Tremp, un solo equipo.</p>
          <div class="footer__social">
            <a href="https://www.instagram.com/estudidentalcarrera/" class="footer__social-link" target="_blank" rel="noopener" aria-label="Instagram de Estudi Dental Carrera">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="/es/sedes.html#contacto-whatsapp" class="footer__social-link" rel="noopener" aria-label="WhatsApp: elige una clínica">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.965-1.364l-.356-.211-3.677.964.982-3.592-.231-.369A9.713 9.713 0 012.25 12C2.25 6.613 6.613 2.25 12 2.25S21.75 6.613 21.75 12 17.387 21.75 12 21.75z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer__col">
          <p class="footer__heading">Navegación</p>
          <ul>
            <li><a href="/es/">Inicio</a></li>
            <li><a href="/es/servicios.html">Servicios</a></li>
            <li><a href="/es/equipo.html">Equipo</a></li>
            <li><a href="/es/sedes.html">Clínicas</a></li>
            <li><a href="/es/blog.html">Blog</a></li>
            <li><a href="/es/sedes.html#contacto">Pedir cita</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <p class="footer__heading">Clínica de Lleida</p>
          <ul>
            <li>Carrer Major, 74-76, 3.º 3.ª</li><li>25007 Lleida</li>
            <li><a href="tel:+34973268826">973 26 88 26</a></li>
            <li>L–V: 9h – 20h</li><li>S: 9h – 14h</li>
          </ul>
        </div>
        <div class="footer__col">
          <p class="footer__heading">Clínica de Tremp</p>
          <ul>
            <li>Carrer Montllobar, 22, bajos</li><li>25620 Tremp</li>
            <li><a href="tel:+34973447534">973 44 75 34</a></li>
            <li>L–V: 9h – 19h</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__meta">
          <p>&copy; <span data-year>2026</span> Estudi Dental Carrera. Todos los derechos reservados.</p>
          <p class="footer__credit">Dise&ntilde;o y programaci&oacute;n &middot; <a href="https://www.palsec.agency" target="_blank" rel="noopener">Palsec Agency</a></p>
        </div>
        <div class="footer__legal">
          <a href="/es/privacidad.html">Política de privacidad</a>
          <a href="/es/aviso-legal.html">Aviso legal</a>
          <a href="/es/cookies.html">Cookies</a>
          <button type="button" class="footer__consent-btn" data-consent-open>Preferencias de cookies</button>
        </div>
      </div>
    </div>
  </footer>

  <a href="/es/sedes.html#contacto-whatsapp" class="whatsapp-fab" rel="noopener" aria-label="WhatsApp: elige una clínica">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L.057 23.175a.75.75 0 00.918.899l5.42-1.424A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.965-1.364l-.356-.211-3.677.964.982-3.592-.231-.369A9.713 9.713 0 012.25 12C2.25 6.613 6.613 2.25 12 2.25S21.75 6.613 21.75 12 17.387 21.75 12 21.75z"/></svg>
  </a>`
};

function renderHeader(lang, alternatePath, { active = 'services', hero = false } = {}) {
  const language = lang === 'es' ? 'es' : 'ca';
  const fallback = language === 'es' ? '/' : '/es/';
  const alternate = typeof alternatePath === 'string' && alternatePath
    && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(alternatePath)
    ? '/' + alternatePath.replace(/^\/+/, '') : fallback;
  return HEADERS[language]
    .replaceAll('__ALTERNATE__', escapeAttribute(alternate))
    .replace('__HERO__', hero ? ' nav--hero' : '')
    .replace(/__ACTIVE_(HOME|SERVICES|TEAM|LOCATIONS|BLOG)__/g, (_, section) =>
      active === section.toLowerCase() ? ' class="active" aria-current="page"' : '');
}

function renderFooter(lang) {
  return FOOTERS[lang === 'es' ? 'es' : 'ca'];
}

module.exports = { renderHeader, renderFooter };
