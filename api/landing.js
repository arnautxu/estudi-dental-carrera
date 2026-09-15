const { pages } = require('../data/landing-pages');

const ORIGIN = 'https://www.estudidentalcarrera.com';

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function jsonLd(page) {
  const url = `${ORIGIN}/${page.path}`;
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: page.lang === 'es' ? 'Inicio' : 'Inici', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: page.type === 'location' ? (page.lang === 'es' ? 'Clínicas' : 'Clíniques') : (page.lang === 'es' ? 'Tratamientos' : 'Tractaments'), item: page.type === 'location' ? (page.lang === 'es' ? `${ORIGIN}/es/sedes.html` : `${ORIGIN}/seus.html`) : (page.lang === 'es' ? `${ORIGIN}/es/servicios.html` : `${ORIGIN}/serveis.html`) },
      { '@type': 'ListItem', position: 3, name: page.h1, item: url },
    ],
  };
  const webPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: page.lang,
    dateModified: page.dateModified || '2026-08-25',
    isPartOf: { '@id': `${ORIGIN}/#website` },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
  const mainEntity = page.type === 'location'
    ? { '@id': `${ORIGIN}/#${page.location.id}` }
    : {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h1,
        serviceType: page.serviceType,
        description: page.description,
        provider: { '@id': `${ORIGIN}/#organization` },
        areaServed: [
          { '@type': 'City', name: 'Lleida' },
          { '@type': 'AdministrativeArea', name: 'Pallars Jussà' },
        ],
        url,
      };
  webPage.mainEntity = mainEntity;
  const graph = page.type === 'location' ? [webPage, breadcrumb] : [webPage, mainEntity, breadcrumb];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

function renderSection(section, index) {
  const paragraphs = section.paragraphs.map(text => `<p>${text}</p>`).join('');
  const list = section.items && section.items.length
    ? `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>`
    : '';
  return `
    <section class="landing-section${index % 2 ? ' landing-section--alt' : ''}">
      <div class="container landing-section__grid">
        <div class="landing-section__title">
          <span class="landing-section__index">0${index + 1}</span>
          <h2>${section.title}</h2>
        </div>
        <div class="landing-prose">${paragraphs}${list}</div>
      </div>
    </section>`;
}

function render(page) {
  const isEs = page.lang === 'es';
  const references = page.sources?.length ? `<details class="landing-references"><summary>${isEs ? 'Referencias' : 'Referències'}</summary><ul>${page.sources.map(source => `<li><a href="${escapeHtml(source.href)}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a></li>`).join('')}</ul></details>` : '';
  const home = isEs ? '/es/' : '/';
  const services = isEs ? '/es/servicios.html' : '/serveis.html';
  const team = isEs ? '/es/equipo.html' : '/equip.html';
  const locations = isEs ? '/es/sedes.html' : '/seus.html';
  const clinicId = page.location?.id === 'tremp' ? 'tremp' : (page.type === 'location' ? 'carrera' : '');
  const contact = `${locations}${clinicId ? `?seu=${clinicId}` : ''}#${isEs ? 'contacto' : 'contacte'}`;
  const url = `${ORIGIN}/${page.path}`;
  const altUrl = `${ORIGIN}/${page.alternatePath}`;
  const phone = page.location && page.location.id === 'tremp' ? '+34650600172' : '+34973268826';
  const wa = page.location && page.location.id === 'tremp' ? '34650600172' : '34615983352';

  return `<!DOCTYPE html>
<html lang="${page.lang}">
<head>
  <meta charset="UTF-8" />
  <script>
    window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.GA4_ID='G-23SQ9SDX52';
    gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="ca" href="${page.lang === 'ca' ? url : altUrl}" />
  <link rel="alternate" hreflang="es" href="${page.lang === 'es' ? url : altUrl}" />
  <link rel="alternate" hreflang="x-default" href="${page.lang === 'ca' ? url : altUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${isEs ? 'es_ES' : 'ca_ES'}" />
  <meta property="og:site_name" content="Estudi Dental Carrera" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/${page.image}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&amp;display=optional" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&amp;display=optional" rel="stylesheet" /></noscript>
  <link rel="preload" href="/assets/fonts/N27-Regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="/assets/css/main.css?v=20260910-cita" />
  <link rel="stylesheet" href="/assets/css/landing.css" />
  <link rel="icon" type="image/svg+xml" href="/assets/img/logos/favicon.svg" />
  <script type="application/ld+json">${jsonLd(page)}</script>
</head>
<body data-phone="${phone}" data-wa="${wa}" data-clinic="${clinicId}">
  <a href="#main" class="skip-link">${isEs ? 'Saltar al contenido' : 'Salta al contingut'}</a>
  <header class="landing-nav">
    <a href="${home}" class="landing-nav__brand" aria-label="Estudi Dental Carrera"><img src="/assets/img/logos/logo-carrera-vertical.png" width="163" height="210" alt="Estudi Dental Carrera" /></a>
    <nav class="landing-nav__links" aria-label="${isEs ? 'Navegación principal' : 'Navegació principal'}">
      <a href="${services}">${isEs ? 'Tratamientos' : 'Tractaments'}</a>
      <a href="${team}">${isEs ? 'Equipo' : 'Equip'}</a>
      <a href="${isEs ? '/es/clinica-dental-lleida.html' : '/clinica-dental-lleida.html'}">Lleida</a>
      <a href="${isEs ? '/es/dentista-tremp.html' : '/dentista-tremp.html'}">Tremp</a>
      <a href="/${page.alternatePath}" class="landing-nav__lang" hreflang="${isEs ? 'ca' : 'es'}">${isEs ? 'CA' : 'ES'}</a>
    </nav>
  </header>
  <main id="main" class="landing-page">
    <section class="landing-hero">
      <img class="landing-hero__image" src="/${page.image}" width="${page.imageWidth}" height="${page.imageHeight}" alt="${escapeHtml(page.imageAlt)}" fetchpriority="high" />
      <div class="landing-hero__shade"></div>
      <div class="container landing-hero__content">
        <nav class="landing-breadcrumb" aria-label="Breadcrumb"><a href="${home}">${isEs ? 'Inicio' : 'Inici'}</a><span>→</span><a href="${page.type === 'location' ? locations : services}">${page.type === 'location' ? (isEs ? 'Clínicas' : 'Clíniques') : (isEs ? 'Tratamientos' : 'Tractaments')}</a></nav>
        <span class="label">${escapeHtml(page.eyebrow)}</span>
        <h1>${page.h1}</h1>
        <p class="landing-hero__lead">${page.lead}</p>
        <div class="landing-hero__actions"><a href="${contact}" class="btn btn--primary btn--lg" data-track="appointment_cta_click" data-track-label="landing-hero">${isEs ? 'Pedir una primera visita' : 'Demana una primera visita'}</a><a href="tel:${phone}" class="btn btn--ghost btn--lg">${isEs ? 'Llamar' : 'Trucar'} · ${clinicId === 'tremp' ? 'Tremp' : 'Lleida'}</a></div>
      </div>
    </section>
    <section class="landing-intro">
      <div class="container landing-intro__grid">
        <div class="landing-prose"><span class="landing-kicker">${escapeHtml(page.introKicker)}</span><h2>${page.introTitle}</h2>${page.intro.map(text => `<p>${text}</p>`).join('')}
          <div class="landing-trust">${page.trust.map(item => `<div class="landing-trust__item"><strong>${item.title}</strong><span>${item.text}</span></div>`).join('')}</div>
        </div>
        <aside class="landing-aside"><h2>${isEs ? 'Información práctica' : 'Informació pràctica'}</h2><p>${page.aside}</p><div class="landing-aside__links"><a href="${team}">${isEs ? 'Conoce al equipo' : 'Coneix l’equip'}</a><a href="${locations}">${isEs ? 'Ver las dos clínicas' : 'Veure les dues clíniques'}</a><a href="${contact}">${isEs ? 'Contactar' : 'Contactar'}</a></div></aside>
      </div>
    </section>
    ${page.sections.map(renderSection).join('')}
    <section class="landing-faq"><div class="container"><span class="landing-kicker">FAQ</span><h2>${isEs ? 'Preguntas frecuentes' : 'Preguntes freqüents'}</h2><div class="landing-faq__list">${page.faqs.map(faq => `<details><summary>${faq.q}</summary><p>${faq.a}</p></details>`).join('')}</div><div class="landing-editorial">${page.editorial} ${isEs ? `Última actualización editorial: ${page.updatedLabel || '25 de agosto de 2026'}.` : `Darrera actualització editorial: ${page.updatedLabel || '25 d’agost de 2026'}.`}</div>${references}</div></section>
    <section class="landing-related"><div class="container"><span class="landing-kicker">${isEs ? 'Siguiente paso' : 'Següent pas'}</span><h2>${isEs ? 'Contenido relacionado' : 'Contingut relacionat'}</h2><div class="landing-related__grid">${page.related.map(item => `<a class="landing-related__card" href="${item.href}"><span>${item.type}</span><strong>${item.label}</strong><b>→</b></a>`).join('')}</div></div></section>
    <section class="landing-cta"><div class="container landing-cta__inner"><div><h2>${page.ctaTitle}</h2><p>${page.ctaText}</p></div><a href="${contact}" class="btn btn--primary btn--lg" data-track="appointment_cta_click" data-track-label="landing-footer">${isEs ? 'Pedir visita' : 'Demanar visita'}</a></div></section>
  </main>
  <footer class="landing-footer"><div class="landing-footer__grid"><div><h2>Estudi Dental Carrera</h2><p>${isEs ? 'Odontología conservadora y decisiones explicadas con claridad.' : 'Odontologia conservadora i decisions explicades amb claredat.'}</p></div><div><h2>Lleida</h2><p>Carrer Major, 74-76, 3r 3a<br />25007 Lleida<br /><a href="tel:+34973268826">973 26 88 26</a></p></div><div><h2>Tremp</h2><p>Carrer Montllobar, 22 Baixos<br />25620 Tremp<br /><a href="tel:+34650600172">650 60 01 72</a></p></div></div><div class="landing-footer__legal"><span>© 2026 Estudi Dental Carrera</span><a href="${isEs ? '/es/privacidad.html' : '/privacitat.html'}">${isEs ? 'Privacidad' : 'Privacitat'}</a><a href="${isEs ? '/es/aviso-legal.html' : '/avis-legal.html'}">${isEs ? 'Aviso legal' : 'Avís legal'}</a><a href="${isEs ? '/es/cookies.html' : '/cookies.html'}">Cookies</a><button type="button" data-consent-open>${isEs ? 'Preferencias de cookies' : 'Preferències de cookies'}</button></div></footer>
  <script src="/assets/js/main.js?v=20260910-cita"></script>
</body>
</html>`;
}

module.exports = (req, res) => {
  const key = String(req.query.key || '');
  const page = pages[key];
  if (!page) {
    res.status(404).send('Not found');
    return;
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.status(200).send(render(page));
};
