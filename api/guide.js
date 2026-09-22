const { guides } = require('../data/guides');
const { renderHeader, renderFooter } = require('../lib/site-shell');

const { entries, card } = require('../lib/blog');
const { categories, isVisible, isReviewPreview } = require('../data/blog');

const ORIGIN = 'https://www.estudidentalcarrera.com';
const arrow = '<span aria-hidden="true">→</span>';
const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');

function labels(lang) {
  const es = lang === 'es';
  return {
    es, home: es ? '/es/' : '/', index: es ? '/es/blog.html' : '/blog.html',
    indexTitle: 'Blog',
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
  <meta charset="UTF-8" />
  <!-- Google tag (gtag.js) — same consent defaults as the clinic and contact pages. -->
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
  <link rel="stylesheet" href="/assets/css/main.min.css?v=20260916-blog" />
  <link rel="stylesheet" href="/assets/css/guides.min.css?v=20260922-photography" />
  <link rel="stylesheet" href="/assets/css/blog.min.css?v=2" />
  ${page.type === 'index' ? `<link rel="preload" as="image" href="/${page.image}" />` : ''}
  <link rel="icon" type="image/svg+xml" href="/assets/img/logos/favicon.svg" />
  <script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head><body class="guides-body" data-phone="+34973268826" data-wa="34615983352" data-clinic="carrera">
<a href="#main" class="skip-link">${l.es ? 'Saltar al contenido' : 'Salta al contingut'}</a>
${renderHeader(page.lang, page.alternatePath, { active: 'blog', hero: true })}
<main id="main">${main}</main>
${renderFooter(page.lang)}
<script src="/assets/js/main.min.js?v=20260916-blog"></script>
${page.type === 'index' ? '<script src="/assets/js/blog.min.js?v=1" defer></script>' : ''}
</body></html>`;
}

function breadcrumb(lang) {
  const l = labels(lang);
  return `<nav class="breadcrumb guide-breadcrumb" aria-label="${l.es ? 'Ruta de navegación' : 'Fil d’Ariadna'}"><a href="${l.home}">${l.es ? 'Inicio' : 'Inici'}</a><span aria-hidden="true">→</span><a href="${l.index}">Blog</a></nav>`;
}

function pageHeading(lang, title) {
  return `<header class="page-hero guide-heading"><div class="page-hero__bg page-hero__bg--serveis"></div><div class="container"><div class="page-hero__content">${breadcrumb(lang)}<h1>${escapeHtml(title)}</h1></div></div></header>`;
}

function renderPhotography(photography) {
  if (!photography) return '';
  const { src, width, height, alt, caption, srcset } = photography;
  return `<figure class="guide-figure"><img src="${escapeHtml(src)}" width="${escapeHtml(width)}" height="${escapeHtml(height)}" alt="${escapeHtml(alt)}"${srcset ? ` srcset="${escapeHtml(srcset)}"` : ''} sizes="(max-width: 900px) calc(100vw - 40px), 760px" loading="lazy" decoding="async" />${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ''}</figure>`;
}

function renderIndex(lang) {
  const l = labels(lang);
  const posts = entries(lang);
  const page = {
    type: 'index', lang, path: l.index.slice(1), alternatePath: l.es ? 'blog.html' : 'es/blog.html',
    title: l.es ? 'Blog de salud dental | Estudi Dental Carrera' : 'Blog de salut dental | Estudi Dental Carrera',
    description: l.es ? 'Respuestas sobre salud dental, bruxismo, implantes, ortodoncia y estética. El blog de Estudi Dental Carrera, en Lleida y Tremp.' : 'Respostes sobre salut dental, bruxisme, implants, ortodòncia i estètica. El blog d’Estudi Dental Carrera, a Lleida i Tremp.',
    image: 'assets/img/seus/slideshow/sl-2-recepcio.webp',
  };
  const filters = `<div class="blog-filters" data-blog-filters hidden role="group" aria-label="${l.es ? 'Filtrar por tema' : 'Filtra per tema'}"><button type="button" data-category="all" aria-pressed="true">${l.es ? 'Todos los artículos' : 'Tots els articles'}</button>${Object.entries(categories).map(([key, label]) => `<button type="button" data-category="${key}" aria-pressed="false">${label[lang]}</button>`).join('')}</div>`;
  const main = `<header class="hero hero--blog">
    <div class="hero__bg blog-hero__bg" aria-hidden="true"><div class="hero__gradient"></div><div class="hero__orb hero__orb--1"></div><div class="hero__orb hero__orb--2"></div></div>
    <div class="hero__content"><p class="hero__eyebrow">El blog de Carrera</p>
      <h1 class="hero__title"><span class="hero__line">${l.es ? 'Salud dental,' : 'Salut dental,'}</span><em class="hero__line">${l.es ? 'explicada con claridad.' : 'explicada amb claredat.'}</em></h1>
      <p class="hero__subtitle">${l.es ? 'Respuestas a las dudas sobre dientes, encías y tratamientos, para que puedas cuidarte y decidir con más información.' : 'Respostes als dubtes sobre dents, genives i tractaments, perquè puguis cuidar-te i decidir amb més informació.'}</p>
      <div class="hero__actions"><a class="btn btn--primary btn--lg" href="#articles">${l.es ? 'Explorar los artículos' : 'Explora els articles'} <span aria-hidden="true">↓</span></a></div>
    </div>
  </header>
  <section class="container blog-library" id="articles" aria-labelledby="blog-articles"><div class="blog-library__heading"><h2 id="blog-articles">${l.es ? 'Para resolver tus dudas' : 'Per resoldre els teus dubtes'}</h2><p data-blog-count data-singular="${l.es ? 'artículo' : 'article'}" data-plural="${l.es ? 'artículos' : 'articles'}" aria-live="polite" aria-atomic="true">${posts.length} ${l.es ? 'artículos' : 'articles'}</p></div>${filters}<div class="blog-grid">${posts.map(guide => card(guide)).join('')}</div><p class="blog-note">${l.es ? 'Cada persona y cada boca son distintas. Estos artículos te ayudan a orientarte; la valoración en consulta permite conocer tu caso.' : 'Cada persona i cada boca són diferents. Aquests articles t’ajuden a orientar-te; la valoració a la consulta permet conèixer el teu cas.'}</p></section>`;
  return document(page, main, [{
    '@type': 'CollectionPage', '@id': `${ORIGIN}/${page.path}#webpage`, url: `${ORIGIN}/${page.path}`,
    name: page.title, description: page.description, inLanguage: lang,
    mainEntity: { '@type': 'ItemList', itemListElement: posts.map((guide, i) => ({ '@type': 'ListItem', position: i + 1, url: `${ORIGIN}/${guide.path}`, name: guide.h1 })) },
  }]);
}

function renderGuide(guide) {
  const l = labels(guide.lang);
  const sectionLinks = guide.sections.map(section => `<li><a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a></li>`).join('');
  const sections = guide.sections.map(section => `<section id="${escapeHtml(section.id)}" class="guide-section"><h2>${escapeHtml(section.title)}</h2>${section.paragraphs.map(text => `<p>${text}</p>`).join('')}${section.items?.length ? `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}${renderPhotography(section.photography)}</section>`).join('');
  const faqs = guide.faqs?.length ? `<section id="preguntes" class="guide-section guide-faq"><h2>${l.es ? 'Otras preguntas habituales' : 'Altres preguntes habituals'}</h2>${guide.faqs.map(faq => `<details><summary>${escapeHtml(faq.q)}</summary><p>${faq.a}</p></details>`).join('')}</section>` : '';
  const toc = `<aside class="guide-toc"><nav aria-label="${l.es ? 'En esta guía' : 'En aquesta guia'}"><h2>${l.es ? 'En esta guía' : 'En aquesta guia'}</h2><ul>${sectionLinks}</ul></nav><div class="guide-toc__service"><p>${l.es ? 'El tratamiento en Carrera' : 'El tractament a Carrera'}</p><a href="${guide.relatedService.href}" data-track="blog_service_click" data-track-label="${escapeHtml(guide.key)}">${escapeHtml(guide.relatedService.label)} ${arrow}</a></div></aside>`;
  const main = `<article>${pageHeading(guide.lang, guide.h1)}<div class="container guide-layout">${toc}<div class="guide-article"><p class="guide-lead">${escapeHtml(guide.lead)}</p>
    ${renderPhotography(guide.photography)}
    <section id="en-resum" class="guide-summary"><h2>${l.es ? 'Lo esencial, antes de empezar' : 'L’essencial, abans de començar'}</h2><ul>${guide.summary.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
    ${sections}${faqs}
    <section class="guide-next-step"><h2>${l.es ? 'De la información a tu caso' : 'De la informació al teu cas'}</h2><p>${l.es ? 'Conoce cómo valoramos este motivo de consulta en Carrera y qué opciones explicamos en la visita.' : 'Coneix com valorem aquest motiu de consulta a Carrera i quines opcions expliquem a la visita.'}</p><a class="guide-text-link" href="${guide.relatedService.href}" data-track="blog_service_click" data-track-label="${escapeHtml(guide.key)}">${escapeHtml(guide.relatedService.label)} ${arrow}</a></section>
    <p class="guide-appointment"><a class="guide-text-link" href="${l.contact}" data-track="appointment_cta_click" data-track-label="guide-contact">${l.es ? 'Pedir visita en Lleida' : 'Demana visita a Lleida'} ${arrow}</a><a class="guide-text-link" href="${l.tremp}" data-track="appointment_cta_click" data-track-label="guide-contact-tremp">${l.es ? 'Pedir visita en Tremp' : 'Demana visita a Tremp'} ${arrow}</a></p>
    <footer class="guide-editorial"><p>${escapeHtml(guide.editorial)}</p><details class="guide-references"><summary>${l.es ? 'Para saber más' : 'Per saber-ne més'}</summary><ul>${guide.sources.map(source => `<li><a href="${escapeHtml(source.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join('')}</ul></details></footer>
    <aside class="guide-more"><p>${l.es ? 'También puede interesarte' : 'També et pot interessar'}</p><ul>${guide.relatedGuides.map(item => `<li><a href="${item.href}">${escapeHtml(item.label)}</a></li>`).join('')}</ul></aside>
  </div></div></article>`;
  const url = `${ORIGIN}/${guide.path}`;
  return document(guide, main, [
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: guide.h1, description: guide.description, image: `${ORIGIN}/${guide.image}`, inLanguage: guide.lang, mainEntityOfPage: { '@id': `${url}#webpage` }, citation: guide.sources.map(source => source.href) },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: guide.title, description: guide.description, inLanguage: guide.lang, about: { '@type': 'Thing', name: guide.topic }, citation: guide.sources.map(source => source.href), breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: l.es ? 'Inicio' : 'Inici', item: ORIGIN + l.home },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: ORIGIN + l.index },
      { '@type': 'ListItem', position: 3, name: guide.h1, item: url },
    ] },
  ]);
}

module.exports = (req, res) => {
  const key = String(req.query?.key || '');
  const isIndex = key === 'index-ca' || key === 'index-es';
  const guide = Object.prototype.hasOwnProperty.call(guides, key) ? guides[key] : null;
  if (!isIndex && (!guide || !isVisible(key))) return res.status(404).send('Not found');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', isReviewPreview() ? 'no-store' : 'public, s-maxage=86400, stale-while-revalidate=604800');
  if (isReviewPreview()) res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  return res.status(200).send(isIndex ? renderIndex(key.slice(6)) : renderGuide(guide));
};
