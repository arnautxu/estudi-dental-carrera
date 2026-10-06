// Navigation only: connect existing explanations to services and visit logistics.
// Clinical explanations and the established CA/ES URLs stay in their source files.
function appendOnce(section, paragraph) {
  if (!section.paragraphs.includes(paragraph)) section.paragraphs.push(paragraph);
}

function linkLocalPages(pages) {
  for (const lang of ['ca', 'es']) {
    const es = lang === 'es';
    const prefix = es ? '/es/' : '/';
    const guidePrefix = es ? '/es/guias/' : '/guies/';
    const local = pages[`${lang}-lleida`];
    appendOnce(local.sections.find(s => s.id === (es ? 'tratamientos' : 'tractaments')) || local.sections[0], es
      ? 'Puedes preparar tus preguntas consultando cómo valoramos la <a href="/es/ortodoncia.html">ortodoncia en Lleida</a>, los <a href="/es/implantes-dentales.html">implantes y sus alternativas</a> o el <a href="/es/atm-bruxismo.html">bruxismo y el dolor de mandíbula</a>.'
      : 'Pots preparar els dubtes consultant com valorem l’<a href="/ortodoncia.html">ortodòncia a Lleida</a>, els <a href="/implants-dentals.html">implants i les seves alternatives</a> o el <a href="/atm-bruxisme.html">bruxisme i el dolor de mandíbula</a>.');
    appendOnce(pages[`${lang}-ortho`].sections.find(s => s.id === 'primera-visita-lleida'), es
      ? `Antes de venir, puedes leer <a href="${guidePrefix}alineadores-o-brackets.html">qué comparar entre alineadores y brackets</a> y consultar la <a href="${prefix}clinica-dental-lleida.html#como-llegar">ubicación y el acceso a la clínica</a>.`
      : `Abans de venir, pots llegir <a href="${guidePrefix}alineadors-o-braquets.html">què comparar entre alineadors i bràquets</a> i consultar la <a href="${prefix}clinica-dental-lleida.html#com-arribar">ubicació i l’accés a la clínica</a>.`);
    appendOnce(pages[`${lang}-implants`].sections.find(s => s.id === (es ? 'cuidados-implantes' : 'cures-implants')), es
      ? `La <a href="${guidePrefix}mantenimiento-implantes-dentales.html">guía de mantenimiento de los implantes</a> recoge las preguntas que puedes comentar en los controles.`
      : `La <a href="${guidePrefix}manteniment-implants-dentals.html">guia de manteniment dels implants</a> recull les preguntes que pots comentar als controls.`);
    appendOnce(pages[`${lang}-atm`].sections.find(s => s.id === (es ? 'sintomas-atm' : 'simptomes-atm')), es
      ? `Si tu duda es un chasquido al abrir la boca, consulta la <a href="${guidePrefix}clic-mandibula.html">guía sobre el clic de la mandíbula</a> para preparar lo que explicarás en la visita.`
      : `Si el dubte és un soroll en obrir la boca, consulta la <a href="${guidePrefix}clic-mandibula.html">guia sobre el clic de la mandíbula</a> per preparar el que explicaràs a la visita.`);
    for (const key of ['lleida', 'ortho', 'implants', 'atm']) {
      pages[`${lang}-${key}`].dateModified = '2026-10-06';
      pages[`${lang}-${key}`].updatedLabel = es ? '6 de octubre de 2026' : '6 d’octubre de 2026';
    }
  }
}

function linkSupportingGuides(guides) {
  const keys = [
    'alineadors-o-braquets', 'alineadores-o-brackets',
    'ortodoncia-infantil-ca', 'ortodoncia-infantil-es',
    'implant-o-pont', 'implante-o-puente',
    'manteniment-implants-dentals-ca', 'mantenimiento-implantes-dentales-es',
    'ferula-descarrega', 'ferula-descarga',
    'clic-mandibula-ca', 'clic-mandibula-es',
  ];
  for (const key of keys) {
    const guide = guides[key];
    const es = guide.lang === 'es';
    const local = es ? '/es/clinica-dental-lleida.html' : '/clinica-dental-lleida.html';
    const section = guide.sections.at(-1);
    const topic = /ortodoncia/.test(guide.relatedService.href)
      ? (es ? 'valoración de ortodoncia' : 'valoració d’ortodòncia')
      : /implant/.test(guide.relatedService.href)
        ? (es ? 'valoración de implantes y alternativas' : 'valoració d’implants i alternatives')
        : (es ? 'valoración de ATM y bruxismo' : 'valoració d’ATM i bruxisme');
    appendOnce(section, es
      ? `Para llevar estas preguntas a consulta, puedes consultar cómo planteamos la <a href="${guide.relatedService.href}">${topic}</a> y revisar los <a href="${local}">horarios y el acceso a la clínica de Lleida</a>.`
      : `Per portar aquestes preguntes a consulta, pots consultar com plantegem la <a href="${guide.relatedService.href}">${topic}</a> i revisar els <a href="${local}">horaris i l’accés a la clínica de Lleida</a>.`);
  }
}

module.exports = { linkLocalPages, linkSupportingGuides };
