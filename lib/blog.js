const { guides } = require('../data/guides');
const { categories, articles, isVisible } = require('../data/blog');
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
function entries(lang, featured = false) {
  return articles.filter(item => isVisible(item[lang]) && (!featured || item.featured))
    .map(item => ({ ...guides[item[lang]], category: item.category }));
}
function card(guide, heading = 'h2') {
  return `<article class="blog-card" data-blog-category="${guide.category}">
    <a class="blog-card__link" href="/${guide.path}">
      <div class="blog-card__image"><img src="/${guide.image}" alt="${escape(guide.imageAlt)}" width="${guide.imageWidth}" height="${guide.imageHeight}" loading="lazy" decoding="async" /></div>
      <div class="blog-card__body"><p class="blog-eyebrow">${categories[guide.category][guide.lang]}</p>
      <${heading}>${escape(guide.h1)}</${heading}><p class="blog-card__description">${escape(guide.description)}</p>
      <span class="blog-card__read">${guide.lang === 'es' ? 'Leer artículo' : 'Llegir l’article'} <span aria-hidden="true">↗</span></span></div>
    </a></article>`;
}
function renderBlogHome(lang) {
  const es = lang === 'es';
  const featured = entries(lang, true).slice(0, 3);
  const more = entries(lang).filter(guide => !featured.some(item => item.path === guide.path)).slice(0, 4);
  return `<section class="blog-home" aria-labelledby="blog-home-title"><div class="container">
    <div class="blog-section-heading"><div><p class="blog-eyebrow">El blog de Carrera</p><h2 id="blog-home-title">${es ? 'Entender también es' : 'Entendre també és'}<br /><em>${es ? 'cuidarse.' : 'cuidar-se.'}</em></h2></div>
    <div class="blog-section-heading__aside"><p>${es ? 'Respuestas claras a las preguntas que nos hacéis en la consulta.' : 'Respostes clares a les preguntes que ens feu a la consulta.'}</p><a class="btn btn--outline" href="${es ? '/es/blog.html' : '/blog.html'}">${es ? 'Explorar el blog' : 'Explora el blog'} <span aria-hidden="true">↗</span></a></div></div>
    <div class="blog-grid blog-grid--home">${featured.map(guide => card(guide, 'h3')).join('')}</div>
    ${more.length ? `<nav class="blog-home__more" aria-label="${es ? 'Más guías de salud dental' : 'Més guies de salut dental'}"><h3>${es ? 'Más preguntas de la consulta' : 'Més preguntes de la consulta'}</h3><ul>${more.map(guide => `<li><a href="/${escape(guide.path)}">${escape(guide.h1)} <span aria-hidden="true">↗</span></a></li>`).join('')}</ul></nav>` : ''}
  </div></section>`;
}
module.exports = { entries, card, renderBlogHome };
