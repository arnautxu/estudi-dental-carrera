const { pages } = require('../data/landing-pages');
const clinics = require('../data/clinics');
const { renderHeader, renderFooter } = require('../lib/site-shell');
const { renderLleida } = require('../lib/lleida-page');

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
      { '@type': 'ListItem', position: 1, name: page.lang === 'es' ? 'Inicio' : 'Inici', item: page.lang === 'es' ? `${ORIGIN}/es/` : `${ORIGIN}/` },
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
  const graph = page.type === 'location' ? [webPage, clinics[page.location.id], breadcrumb] : [webPage, mainEntity, breadcrumb];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

function renderComparison(comparison, index) {
  if (!comparison?.rows?.length) return '';
  const id = `comparison-${index}`;
  return `<table class="landing-comparison" role="table">
    <caption>${escapeHtml(comparison.caption)}</caption>
    <thead role="rowgroup"><tr role="row">${comparison.columns.map((column, columnIndex) => `<th id="${id}-column-${columnIndex}" scope="col" role="columnheader">${escapeHtml(column)}</th>`).join('')}</tr></thead>
    <tbody role="rowgroup">${comparison.rows.map((row, rowIndex) => `<tr role="row"><th id="${id}-row-${rowIndex}" scope="row" role="rowheader">${escapeHtml(row[0])}</th>${row.slice(1).map((value, columnIndex) => `<td role="cell" headers="${id}-column-${columnIndex + 1} ${id}-row-${rowIndex}"><span class="landing-comparison__label" aria-hidden="true">${escapeHtml(comparison.columns[columnIndex + 1])}</span>${escapeHtml(value)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>`;
}

function renderClinicDetails(clinic, isEs, wa) {
  if (!clinic) return '';
  const days = isEs
    ? { Monday: 'Lun', Tuesday: 'Mar', Wednesday: 'Mié', Thursday: 'Jue', Friday: 'Vie', Saturday: 'Sáb', Sunday: 'Dom' }
    : { Monday: 'Dl', Tuesday: 'Dt', Wednesday: 'Dc', Thursday: 'Dj', Friday: 'Dv', Saturday: 'Ds', Sunday: 'Dg' };
  const hours = clinic.openingHoursSpecification.map(slot => {
    const week = [].concat(slot.dayOfWeek);
    const label = week.length > 1 ? `${days[week[0]]}–${days[week[week.length - 1]]}` : days[week[0]];
    return `${label}: ${slot.opens}–${slot.closes}`;
  }).join(' · ');
  return `<dl class="landing-clinic-facts">
    <div><dt>${isEs ? 'Dirección' : 'Adreça'}</dt><dd>${escapeHtml(clinic.address.streetAddress)}<br>${escapeHtml(clinic.address.postalCode)} ${escapeHtml(clinic.address.addressLocality)}</dd></div>
    <div><dt>${isEs ? 'Horario' : 'Horari'}</dt><dd>${escapeHtml(hours)}</dd></div>
    <div><dt>${isEs ? 'Teléfono' : 'Telèfon'}</dt><dd><a href="tel:${escapeHtml(clinic.telephone)}">${escapeHtml(clinic.telephone.replace('+34', '').replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4'))}</a></dd></div>
  </dl><div class="landing-clinic-actions"><a href="${escapeHtml(clinic.hasMap)}" target="_blank" rel="noopener" data-track="directions_click" data-track-label="landing-practical">${isEs ? 'Cómo llegar' : 'Com arribar'}</a><a href="https://wa.me/${escapeHtml(wa)}" target="_blank" rel="noopener">${isEs ? 'Escribir por WhatsApp' : 'Escriu per WhatsApp'}</a></div>`;
}

function renderSection(section, index, { contact, trempContact, isEs }) {
  const paragraphs = (section.paragraphs || []).map(text => `<p>${text}</p>`).join('');
  const blocks = section.blocks?.length
    ? `<div class="landing-treatment-blocks">${section.blocks.map(block => `<div><h3>${escapeHtml(block.title)}</h3><p>${block.text}</p>${block.href ? `<a class="landing-treatment-blocks__link" href="${escapeHtml(block.href)}">${escapeHtml(block.linkLabel || block.title)} <span aria-hidden="true">→</span></a>` : ''}</div>`).join('')}</div>`
    : '';
  const list = section.items && section.items.length
    ? `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>`
    : '';
  const sectionCta = section.ctaText
    ? `<div class="landing-section__contact"><p>${escapeHtml(section.ctaText)}</p><div class="landing-section__actions"><a href="${contact}" class="btn btn--primary" data-track="appointment_cta_click" data-track-label="landing-section">${isEs ? 'Pedir una valoración en Lleida' : 'Demana una valoració a Lleida'}</a><a href="${trempContact}" class="landing-clinic-alternative" data-track="appointment_cta_click" data-track-label="landing-section-tremp">${isEs ? '¿Prefieres Tremp?' : 'Prefereixes Tremp?'}</a></div></div>`
    : '';
  return `
    <section${section.id ? ` id="${escapeHtml(section.id)}"` : ''} class="landing-section${index % 2 ? ' landing-section--alt' : ''}">
      <div class="container landing-section__grid">
        <div class="landing-section__title">
          <span class="landing-section__index">0${index + 1}</span>
          <h2>${section.title}</h2>
        </div>
        <div class="landing-prose">${paragraphs}${renderComparison(section.comparison, index)}${list}${blocks}${sectionCta}</div>
      </div>
    </section>`;
}

function render(page) {
  const isEs = page.lang === 'es';
  const isLleida = page.type === 'location' && page.location?.id === 'lleida';
  const references = page.sources?.length ? `<details class="landing-references"><summary>${isEs ? 'Para saber más' : 'Per saber-ne més'}</summary><ul>${page.sources.map(source => `<li><a href="${escapeHtml(source.href)}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a></li>`).join('')}</ul></details>` : '';
  const home = isEs ? '/es/' : '/';
  const services = isEs ? '/es/servicios.html' : '/serveis.html';
  const team = isEs ? '/es/equipo.html' : '/equip.html';
  const locations = isEs ? '/es/sedes.html' : '/seus.html';
  const isService = page.type === 'service';
  const clinicId = page.location?.id === 'tremp' ? 'tremp' : 'carrera';
  const contact = `${locations}#${isEs ? 'contacto' : 'contacte'}-${clinicId}`;
  const trempContact = `${locations}#${isEs ? 'contacto' : 'contacte'}-tremp`;
  const primaryCtaLabel = isService ? (isEs ? 'Pedir visita en Lleida' : 'Demana visita a Lleida') : (isEs ? 'Pedir una primera visita' : 'Demana una primera visita');
  const alternateClinicLink = isService ? `<a href="${trempContact}" class="landing-clinic-alternative" data-track="appointment_cta_click" data-track-label="landing-alternative-tremp">${isEs ? '¿Prefieres Tremp?' : 'Prefereixes Tremp?'}</a>` : '';
  const professional = page.professional
    ? `<div class="landing-professional"><img src="${escapeHtml(page.professional.image)}" width="${page.professional.imageWidth}" height="${page.professional.imageHeight}" alt="" loading="lazy" decoding="async" /><div><span>${isEs ? 'En nuestro equipo' : 'Al nostre equip'}</span><strong>${escapeHtml(page.professional.name)}</strong><p>${escapeHtml(page.professional.role)}</p><a href="${escapeHtml(page.professional.href)}">${isEs ? 'Conoce su trayectoria' : 'Coneix la seva trajectòria'} <span aria-hidden="true">→</span></a></div></div>`
    : '';
  const jumpSections = page.sections.filter(section => section.id && section.jumpLabel);
  const sectionNavLabel = page.sectionNavLabel || (isEs ? 'Apartados del tratamiento' : 'Apartats del tractament');
  const sectionNav = jumpSections.length
    ? `<nav class="landing-section-nav" aria-label="${escapeHtml(sectionNavLabel)}"><span>${isEs ? '¿Qué te gustaría revisar?' : 'Què t’agradaria revisar?'}</span><ul>${jumpSections.map(section => `<li><a href="#${escapeHtml(section.id)}">${escapeHtml(section.jumpLabel)} <span aria-hidden="true">↓</span></a></li>`).join('')}</ul></nav>`
    : '';
  const url = `${ORIGIN}/${page.path}`;
  const altUrl = `${ORIGIN}/${page.alternatePath}`;
  const phone = page.location && page.location.id === 'tremp' ? '+34650600172' : '+34973268826';
  const wa = page.location && page.location.id === 'tremp' ? '34650600172' : '34615983352';
  const clinicDetails = page.type === 'location' ? renderClinicDetails(clinics[page.location.id], isEs, wa) : '';
  const editorialTeam = page.professional
    ? `<p class="landing-editorial__team">${isEs ? 'Profesional de referencia del área:' : 'Professional de referència de l’àrea:'} <a href="${escapeHtml(page.professional.href)}">${escapeHtml(page.professional.name)}</a>. ${escapeHtml(page.professional.role)}.</p>`
    : '';

  return `<!DOCTYPE html>
<html lang="${page.lang}">
<head>
  <meta charset="UTF-8" />
  <!-- Google tag (gtag.js) — advanced consent mode: cookies remain denied until consent. -->
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.GA4_ID = 'G-23SQ9SDX52';
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    try {
      var savedConsent = JSON.parse(localStorage.getItem('edc_consent_v1'));
      if (savedConsent && savedConsent.analytics === true) {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
    } catch (_) {}
    gtag('js', new Date());
    gtag('config', window.GA4_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-23SQ9SDX52"></script>
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
  <link rel="stylesheet" href="/assets/css/main.min.css?v=20260916-blog" />
  <link rel="stylesheet" href="/assets/css/landing.min.css?v=20260916-onpage" />
  ${isLleida ? '<link rel="stylesheet" href="/assets/css/lleida.min.css?v=20260916-home1" />' : ''}
  <link rel="icon" type="image/svg+xml" href="/assets/img/logos/favicon.svg" />
  <script type="application/ld+json">${jsonLd(page)}</script>
</head>
<body data-phone="${phone}" data-wa="${wa}" data-clinic="${clinicId}">
  <a href="#main" class="skip-link">${isEs ? 'Saltar al contenido' : 'Salta al contingut'}</a>
${renderHeader(page.lang, page.alternatePath, { active: isService ? 'services' : 'locations', hero: true })}
  ${isLleida ? renderLleida(page, { contact, phone, wa, references, renderSection }) : `<main id="main" class="landing-page">
    <section class="landing-hero">
      <img class="landing-hero__image" src="/${page.image}" width="${page.imageWidth}" height="${page.imageHeight}" alt="${escapeHtml(page.imageAlt)}" fetchpriority="high" />
      <div class="landing-hero__shade"></div>
      <div class="container landing-hero__content">
        <nav class="landing-breadcrumb" aria-label="Breadcrumb"><a href="${home}">${isEs ? 'Inicio' : 'Inici'}</a><span>→</span><a href="${page.type === 'location' ? locations : services}">${page.type === 'location' ? (isEs ? 'Clínicas' : 'Clíniques') : (isEs ? 'Tratamientos' : 'Tractaments')}</a></nav>
        <span class="label">${escapeHtml(page.eyebrow)}</span>
        <h1>${page.h1}</h1>
        <p class="landing-hero__lead">${page.lead}</p>
        <div class="landing-hero__actions"><a href="${contact}" class="btn btn--primary btn--lg" data-track="appointment_cta_click" data-track-label="landing-hero">${primaryCtaLabel}</a><a href="tel:${phone}" class="btn btn--ghost btn--lg">${isEs ? 'Llamar' : 'Trucar'} · ${clinicId === 'tremp' ? 'Tremp' : 'Lleida'}</a></div>
        ${alternateClinicLink}
        ${professional}
      </div>
    </section>
    <section class="landing-intro">
      <div class="container landing-intro__grid">
        <div class="landing-prose"><span class="landing-kicker">${escapeHtml(page.introKicker)}</span><h2>${page.introTitle}</h2>${page.intro.map(text => `<p>${text}</p>`).join('')}${sectionNav}
          <div class="landing-trust">${page.trust.map(item => `<div class="landing-trust__item"><strong>${item.title}</strong><span>${item.text}</span></div>`).join('')}</div>
        </div>
        <aside class="landing-aside"><h2>${isEs ? 'Información práctica' : 'Informació pràctica'}</h2>${clinicDetails}<p>${page.aside}</p><div class="landing-aside__links"><a href="${team}">${isEs ? 'Conoce al equipo' : 'Coneix l’equip'}</a><a href="${locations}">${isEs ? 'Ver las dos clínicas' : 'Veure les dues clíniques'}</a><a href="${contact}">${isService ? (isEs ? 'Contactar con Lleida' : 'Contactar amb Lleida') : 'Contactar'}</a>${isService ? `<a href="${trempContact}">${isEs ? 'Contactar con Tremp' : 'Contactar amb Tremp'}</a>` : ''}</div></aside>
      </div>
    </section>
    ${page.sections.map((section, index) => renderSection(section, index, { contact, trempContact, isEs })).join('')}
    <section class="landing-faq"><div class="container"><span class="landing-kicker">FAQ</span><h2>${isEs ? 'Preguntas frecuentes' : 'Preguntes freqüents'}</h2><div class="landing-faq__list">${page.faqs.map(faq => `<details><summary>${faq.q}</summary><p>${faq.a}</p></details>`).join('')}</div><div class="landing-editorial">${editorialTeam}<p>${page.editorial} ${isEs ? `Última actualización editorial: ${page.updatedLabel || '25 de agosto de 2026'}.` : `Darrera actualització editorial: ${page.updatedLabel || '25 d’agost de 2026'}.`}</p></div>${references}</div></section>
    <section class="landing-related"><div class="container"><span class="landing-kicker">${isEs ? 'Siguiente paso' : 'Següent pas'}</span><h2>${isEs ? 'Contenido relacionado' : 'Contingut relacionat'}</h2><div class="landing-related__grid">${page.related.map(item => `<a class="landing-related__card" href="${item.href}"><span>${item.type}</span><strong>${item.label}</strong><b>→</b></a>`).join('')}</div></div></section>
    <section class="landing-cta"><div class="container landing-cta__inner"><div><h2>${page.ctaTitle}</h2><p>${page.ctaText}</p></div><div class="landing-cta__actions"><a href="${contact}" class="btn btn--primary btn--lg" data-track="appointment_cta_click" data-track-label="landing-footer">${isService ? primaryCtaLabel : (isEs ? 'Pedir visita' : 'Demanar visita')}</a>${alternateClinicLink}</div></div></section>
  </main>`}
${renderFooter(page.lang)}
  <script src="/assets/js/main.min.js?v=20260916-blog"></script>
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
