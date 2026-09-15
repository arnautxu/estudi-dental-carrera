const { guides } = require('../data/guides');
const { renderHeader, renderFooter } = require('../lib/site-shell');

const ORIGIN = 'https://www.estudidentalcarrera.com';
const arrow = '<span aria-hidden="true">→</span>';
const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');

function labels(lang) {
  const es = lang === 'es';
  return {
    es, home: es ? '/es/' : '/', index: es ? '/es/guias.html' : '/guies.html',
    indexTitle: es ? 'Guías de salud dental' : 'Guies de salut dental',
    services: es ? '/es/servicios.html' : '/serveis.html',
    team: es ? '/es/equipo.html' : '/equip.html',
    local: es ? '/es/clinica-dental-lleida.html' : '/clinica-dental-lleida.html',
    contact: es ? '/es/sedes.html#contacto-carrera' : '/seus.html#contacte-carrera',
    tremp: es ? '/es/sedes.html#contacto-tremp' : '/seus.html#contacte-tremp',
  };
}

function document(page, main, graph) {
  const url = `${ORIGIN}/${page.path}`;
  const alt = `${ORIGIN}/${page.alternatePath}`;
  const l = labels(page.lang);
  return `<!DOCTYPE html>
<html lang="${page.lang}"><head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(page.title)}</title><meta name="description" content="${escapeHtml(page.description)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="ca" href="${l.es ? alt : url}" />
  <link rel="alternate" hreflang="es" href="${l.es ? url : alt}" />
  <link rel="alternate" hreflang="x-default" href="${l.es ? alt : url}" />
  <meta property="og:type" content="${page.type === 'index' ? 'website' : 'article'}" />
  <meta property="og:locale" content="${l.es ? 'es_ES' : 'ca_ES'}" />
  <meta property="og:site_name" content="Estudi Dental Carrera" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/${page.image}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&amp;display=swap" rel="stylesheet" />
  <link rel="preload" href="/assets/fonts/N27-Regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="/assets/css/main.min.css?v=content-preview" />
  <link rel="stylesheet" href="/assets/css/guides.min.css?v=content-preview" />
  <link rel="icon" type="image/svg+xml" href="/assets/img/logos/favicon.svg" />
  <script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head><body class="guides-body" data-phone="+34973268826" data-wa="34615983352" data-clinic="carrera">
<a href="#main" class="skip-link">${l.es ? 'Saltar al contenido' : 'Salta al contingut'}</a>
${renderHeader(page.lang, page.alternatePath, { active: 'services', hero: true })}
<main id="main">${main}</main>
${renderFooter(page.lang)}
<script src="/assets/js/main.min.js?v=content-preview"></script>
</body></html>`;
}

function serviceContext(guide) {
  const names = {
    '/atm-bruxisme.html': 'ATM i bruxisme', '/es/atm-bruxismo.html': 'ATM y bruxismo',
    '/periodoncia-endodoncia.html': 'Periodòncia i endodòncia', '/es/periodoncia-endodoncia.html': 'Periodoncia y endodoncia',
    '/implants-dentals.html': 'Implants dentals', '/es/implantes-dentales.html': 'Implantes dentales',
    '/ortodoncia.html': 'Ortodòncia', '/es/ortodoncia.html': 'Ortodoncia',
    '/estetica-dental.html': 'Estètica dental', '/es/estetica-dental.html': 'Estética dental',
  };
  return { href: guide.relatedService.href, label: names[guide.relatedService.href.split('#')[0]] || guide.relatedService.label };
}

function breadcrumb(lang, context) {
  const l = labels(lang);
  return `<nav class="breadcrumb guide-breadcrumb" aria-label="${l.es ? 'Ruta de navegación' : 'Fil d’Ariadna'}"><a href="${l.home}">${l.es ? 'Inicio' : 'Inici'}</a><span aria-hidden="true">→</span><a href="${l.services}">${l.es ? 'Servicios' : 'Serveis'}</a>${context ? `<span aria-hidden="true">→</span><a href="${escapeHtml(context.href)}">${escapeHtml(context.label)}</a>` : ''}</nav>`;
}

function pageHeading(lang, title, context) {
  return `<header class="page-hero guide-heading"><div class="page-hero__bg page-hero__bg--serveis"></div><div class="container"><div class="page-hero__content">${breadcrumb(lang, context)}<h1>${escapeHtml(title)}</h1></div></div></header>`;
}

function renderIndex(lang) {
  const l = labels(lang);
  const entries = Object.values(guides).filter(guide => guide.lang === lang);
  const page = {
    type: 'index', lang, path: l.index.slice(1), alternatePath: l.es ? 'guies.html' : 'es/guias.html',
    title: l.es ? 'Guías de salud dental | Estudi Dental Carrera' : 'Guies de salut dental | Estudi Dental Carrera',
    description: l.es ? 'Resuelve tus dudas sobre salud dental, implantes, ortodoncia y estética. Información para comparar opciones y preparar tu visita a Estudi Dental Carrera.' : 'Resol els dubtes sobre salut dental, implants, ortodòncia i estètica. Informació per comparar opcions i preparar la visita a Estudi Dental Carrera.',
    image: 'assets/img/lleida-sala-espera.webp',
  };
  const rows = entries.map(guide => `<article class="guide-entry"><h2><a href="/${guide.path}">${escapeHtml(guide.h1)}</a></h2><p>${escapeHtml(guide.description)}</p><a class="guide-text-link" href="/${guide.path}">${l.es ? 'Leer más' : 'Llegir-ne més'} ${arrow}</a></article>`).join('');
  const main = `${pageHeading(lang, l.es ? 'Más información sobre los tratamientos' : 'Més informació sobre els tractaments')}<section class="guide-library container" aria-label="${l.indexTitle}"><p class="guide-lead">${l.es ? 'Respuestas a dudas que pueden surgir antes y después de la visita.' : 'Respostes a dubtes que poden sorgir abans i després de la visita.'}</p>${rows}<a class="guide-text-link" href="${l.services}">${l.es ? 'Volver a los tratamientos' : 'Tornar als tractaments'} ${arrow}</a></section>`;
  return document(page, main, [{
    '@type': 'CollectionPage', '@id': `${ORIGIN}/${page.path}#webpage`, url: `${ORIGIN}/${page.path}`,
    name: page.title, description: page.description, inLanguage: lang,
    mainEntity: { '@type': 'ItemList', itemListElement: entries.map((guide, i) => ({ '@type': 'ListItem', position: i + 1, url: `${ORIGIN}/${guide.path}`, name: guide.h1 })) },
  }]);
}

function renderGuide(guide) {
  const l = labels(guide.lang);
  const sectionLinks = guide.sections.map(section => `<li><a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a></li>`).join('');
  const sections = guide.sections.map(section => `<section id="${escapeHtml(section.id)}" class="guide-section"><h2>${escapeHtml(section.title)}</h2>${section.paragraphs.map(text => `<p>${text}</p>`).join('')}${section.items?.length ? `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}</section>`).join('');
  const faqs = guide.faqs?.length ? `<section id="preguntes" class="guide-section guide-faq"><h2>${l.es ? 'Otras preguntas habituales' : 'Altres preguntes habituals'}</h2>${guide.faqs.map(faq => `<details><summary>${escapeHtml(faq.q)}</summary><p>${faq.a}</p></details>`).join('')}</section>` : '';
  const toc = `<aside class="guide-toc"><nav aria-label="${l.es ? 'En esta guía' : 'En aquesta guia'}"><h2>${l.es ? 'En esta guía' : 'En aquesta guia'}</h2><ul>${sectionLinks}</ul></nav><div class="guide-toc__service"><p>${l.es ? 'El tratamiento en Carrera' : 'El tractament a Carrera'}</p><a href="${guide.relatedService.href}">${escapeHtml(guide.relatedService.label)} ${arrow}</a></div></aside>`;
  const context = serviceContext(guide);
  const main = `<article>${pageHeading(guide.lang, guide.h1, context)}<div class="container guide-layout">${toc}<div class="guide-article"><p class="guide-lead">${escapeHtml(guide.lead)}</p>
    <section id="en-resum" class="guide-summary"><h2>${l.es ? 'Lo esencial, antes de empezar' : 'L’essencial, abans de començar'}</h2><ul>${guide.summary.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
    ${sections}${faqs}
    <section class="guide-next-step"><h2>${l.es ? 'De la información a tu caso' : 'De la informació al teu cas'}</h2><p>${l.es ? 'Conoce cómo valoramos este motivo de consulta en Carrera y qué opciones explicamos en la visita.' : 'Coneix com valorem aquest motiu de consulta a Carrera i quines opcions expliquem a la visita.'}</p><a class="guide-text-link" href="${guide.relatedService.href}">${escapeHtml(guide.relatedService.label)} ${arrow}</a></section>
    <p class="guide-appointment"><a class="guide-text-link" href="${l.contact}" data-track="appointment_cta_click" data-track-label="guide-contact">${l.es ? 'Pedir visita en Lleida' : 'Demana visita a Lleida'} ${arrow}</a></p>
    <footer class="guide-editorial"><p>${escapeHtml(guide.editorial)}</p><details class="guide-references"><summary>${l.es ? 'Fuentes consultadas' : 'Fonts consultades'}</summary><ul>${guide.sources.map(source => `<li><a href="${escapeHtml(source.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join('')}</ul></details></footer>
    <aside class="guide-more"><p>${l.es ? 'También puede interesarte' : 'També et pot interessar'}</p><ul>${guide.relatedGuides.map(item => `<li><a href="${item.href}">${escapeHtml(item.label)}</a></li>`).join('')}</ul></aside>
  </div></div></article>`;
  const url = `${ORIGIN}/${guide.path}`;
  return document(guide, main, [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: guide.title, description: guide.description, inLanguage: guide.lang, about: { '@type': 'Thing', name: guide.topic }, citation: guide.sources.map(source => source.href), breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: l.es ? 'Inicio' : 'Inici', item: ORIGIN + l.home },
      { '@type': 'ListItem', position: 2, name: l.es ? 'Servicios' : 'Serveis', item: ORIGIN + l.services },
      { '@type': 'ListItem', position: 3, name: context.label, item: ORIGIN + context.href },
      { '@type': 'ListItem', position: 4, name: guide.h1, item: url },
    ] },
  ]);
}

module.exports = (req, res) => {
  const key = String(req.query?.key || '');
  const isIndex = key === 'index-ca' || key === 'index-es';
  const guide = Object.prototype.hasOwnProperty.call(guides, key) ? guides[key] : null;
  if (!isIndex && !guide) return res.status(404).send('Not found');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  return res.status(200).send(isIndex ? renderIndex(key.slice(6)) : renderGuide(guide));
};
