// Published educational guides retain stable bilingual URLs.
// Publication notes and source review are recorded in docs.
const categories = {
  atm: { ca: 'ATM i bruxisme', es: 'ATM y bruxismo' },
  salut: { ca: 'Dents i genives', es: 'Dientes y encías' },
  tractaments: { ca: 'Implants i ortodòncia', es: 'Implantes y ortodoncia' },
  estetica: { ca: 'Estètica dental', es: 'Estética dental' },
};
const articles = [
  ...require('./guides-library').articles,
  { ca: 'dolor-mandibula-despertar', es: 'dolor-mandibula-despertar-es', category: 'atm', status: 'published' },
  { ca: 'ferula-descarrega', es: 'ferula-descarga', category: 'atm', status: 'published', featured: true },
  { ca: 'sagnat-genives', es: 'sangrado-encias', category: 'salut', status: 'published', featured: true },
  { ca: 'implant-o-pont', es: 'implante-o-puente', category: 'tractaments', status: 'published', featured: true },
  { ca: 'alineadors-o-braquets', es: 'alineadores-o-brackets', category: 'tractaments', status: 'published' },
  { ca: 'endodoncia-dubtes', es: 'endodoncia-dudas', category: 'salut', status: 'published' },
  { ca: 'taques-dents', es: 'manchas-dientes', category: 'estetica', status: 'published' },
];
function isPublished(key) {
  return articles.some(article => article.status === 'published' && (article.ca === key || article.es === key));
}
function isReviewPreview() {
  return process.env.VERCEL_ENV === 'preview'
    || (process.env.VERCEL_ENV !== 'production' && process.env.CONTENT_PREVIEW === '1');
}
function isVisible(key) {
  return isPublished(key) || (isReviewPreview() && articles.some(article =>
    article.status === 'review' && (article.ca === key || article.es === key)));
}
module.exports = { categories, articles, isPublished, isVisible, isReviewPreview };
