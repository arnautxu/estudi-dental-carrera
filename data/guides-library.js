// Bilingual, patient-facing guides. Sources are references, not clinical endorsements.
const topics = [
  ...require('./guides-family'),
  ...require('./guides-restoration'),
  ...require('./guides-aesthetics'),
  ...require('./guides-prevention'),
];
const guides = {};
const articles = [];
for (const topic of topics) {
  const keys = { ca: topic.slugs[0] + '-ca', es: topic.slugs[1] + '-es' };
  const paths = { ca: `guies/${topic.slugs[0]}.html`, es: `es/guias/${topic.slugs[1]}.html` };
  articles.push({ ...keys, category: topic.category, status: 'published' });
  for (const [index, lang] of ['ca', 'es'].entries()) {
    const copy = topic[lang];
    guides[keys[lang]] = {
      key: keys[lang], lang, path: paths[lang], alternatePath: paths[lang === 'ca' ? 'es' : 'ca'],
      title: copy.h1 + ' | Carrera', h1: copy.h1, description: copy.description, lead: copy.lead,
      topic: copy.topic, image: topic.image || 'assets/img/serveis/implants-planificacio.webp',
      imageAlt: copy.imageAlt, imageWidth: 1280, imageHeight: 1600,
      summary: copy.summary,
      sections: copy.sections.map(([id, title, ...paragraphs]) => ({ id, title, paragraphs })),
      faqs: copy.faqs.map(([q, a]) => ({ q, a })),
      sources: topic.sources.map(([href, label]) => ({ href, label })),
      relatedService: { href: topic.services[index], label: copy.serviceLabel },
      relatedGuides: copy.related.map(([href, label]) => ({ href, label })),
      editorial: lang === 'ca'
        ? 'Informació general basada en fonts sanitàries. La valoració odontològica individual determina el diagnòstic i el tractament.'
        : 'Información general basada en fuentes sanitarias. La valoración odontológica individual determina el diagnóstico y el tratamiento.',
    };
  }
}
module.exports = { guides, articles };
