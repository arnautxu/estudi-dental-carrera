// Navigation and consultation questions drawn from the existing service copy.
// Do not introduce techniques, prices, credentials or outcome guarantees here.
function applyServicePriorities(pages) {
  for (const lang of ['ca', 'es']) {
    const es = lang === 'es';
    const guides = es ? '/es/guias/' : '/guies/';
    const implants = pages[`${lang}-implants`];
    implants.quickLinks = [
      { href: '#primera-visita-lleida', label: es ? 'Primera valoración' : 'Primera valoració' },
      { href: es ? '#fases-implantes' : '#fases-implants', label: es ? 'Fases del tratamiento' : 'Fases del tractament' },
      { href: es ? '#presupuesto-implantes' : '#pressupost-implants', label: es ? 'Presupuesto y alternativas' : 'Pressupost i alternatives' },
    ];
    const budget = implants.sections.find(s => s.id === (es ? 'presupuesto-implantes' : 'pressupost-implants'));
    budget.items = es ? [
      '¿Qué dientes se reponen y con qué restauración?',
      '¿Qué estudio, procedimientos previos y provisional incluye el plan?',
      '¿Qué fases dependen de la cicatrización y cuándo se revisarán?',
      '¿Qué controles y mantenimiento están incluidos y cuáles se presupuestan aparte?',
    ] : [
      'Quines dents es reposen i amb quina restauració?',
      'Quin estudi, procediments previs i provisional inclou el pla?',
      'Quines fases depenen de la cicatrització i quan es revisaran?',
      'Quins controls i manteniment s’inclouen i quins es pressuposten a part?',
    ];
    const phases = implants.sections.find(s => s.id === (es ? 'fases-implantes' : 'fases-implants'));
    phases.paragraphs.push(es
      ? `Puedes preparar las preguntas sobre <a href="${guides}implante-o-puente.html">implante o puente</a>, <a href="${guides}implantes-poco-hueso.html">la valoración cuando falta hueso</a> y <a href="${guides}implante-inmediato-carga-inmediata.html">colocación y carga inmediata</a>.`
      : `Pots preparar les preguntes sobre <a href="${guides}implant-o-pont.html">implant o pont</a>, <a href="${guides}implants-poc-os.html">la valoració quan falta os</a> i <a href="${guides}implant-immediat-carrega-immediata.html">col·locació i càrrega immediata</a>.`);
    implants.sections[0].paragraphs.push(es
      ? `Si te preocupa la anestesia, puedes preparar tus dudas con la <a href="${guides}duracion-anestesia-dental.html">guía sobre anestesia dental y recuperación</a> y comentarlas antes de confirmar la intervención.`
      : `Si et preocupa l’anestèsia, pots preparar els dubtes amb la <a href="${guides}durada-anestesia-dental.html">guia sobre anestèsia dental i recuperació</a> i comentar-los abans de confirmar la intervenció.`);

    const ortho = pages[`${lang}-ortho`];
    ortho.quickLinks = [
      { href: '#ortodoncia-invisible', label: es ? 'Alineadores o brackets' : 'Alineadors o bràquets' },
      { href: es ? '#controles-ortodoncia' : '#controls-ortodoncia', label: es ? 'Proceso y controles' : 'Procés i controls' },
      { href: es ? '#precio-ortodoncia' : '#preu-ortodoncia', label: es ? 'Qué incluye el precio' : 'Què inclou el preu' },
    ];
    const invisible = ortho.sections.find(s => s.id === 'ortodoncia-invisible');
    invisible.paragraphs.push(es
      ? `El proceso empieza por el <a href="#estudio-ortodoncia">estudio de la mordida</a>, continúa con los <a href="#controles-ortodoncia">controles del movimiento</a> y contempla desde el inicio la <a href="#retenedores">retención posterior</a>. Puedes consultar también qué aporta un <a href="${guides}escaner-intraoral.html">registro con escáner intraoral</a>.`
      : `El procés comença per l’<a href="#estudi-ortodoncia">estudi de la mossegada</a>, continua amb els <a href="#controls-ortodoncia">controls del moviment</a> i preveu des de l’inici la <a href="#retenidors">retenció posterior</a>. Pots consultar també què aporta un <a href="${guides}escaner-intraoral.html">registre amb escàner intraoral</a>.`);

    const atm = pages[`${lang}-atm`];
    atm.quickLinks = [
      { href: es ? '#sintomas-atm' : '#simptomes-atm', label: es ? 'Qué explicar en la visita' : 'Què explicar a la visita' },
      { href: es ? '#ferula-descarga' : '#ferula-descarrega', label: es ? 'Cuándo valorar una férula' : 'Quan valorar una fèrula' },
      { href: es ? '#tratamiento-bruxismo' : '#tractament-bruxisme', label: es ? 'Valoración en Lleida' : 'Valoració a Lleida' },
    ];
    const difference = atm.sections.find(s => s.id === (es ? 'bruxismo-y-dolor' : 'bruxisme-i-dolor'));
    difference.paragraphs.push(es
      ? `Si tu duda es el desgaste, la <a href="${guides}erosion-esmalte-dental.html">guía sobre erosión del esmalte</a> explica qué observar sin atribuir todo el daño al bruxismo.`
      : `Si el dubte és el desgast, la <a href="${guides}erosio-esmalt-dental.html">guia sobre erosió de l’esmalt</a> explica què observar sense atribuir tot el dany al bruxisme.`);
    pages[`${lang}-perio`].sections[0].paragraphs.push(es
      ? `Para preparar la consulta, puedes leer qué observar ante <a href="${guides}mal-aliento-persistente.html">mal aliento persistente</a> y qué explicar al equipo sobre <a href="${guides}diabetes-encias.html">diabetes y salud de las encías</a>.`
      : `Per preparar la consulta, pots llegir què observar davant de <a href="${guides}mal-ale-persistent.html">mal alè persistent</a> i què explicar a l’equip sobre <a href="${guides}diabetis-genives.html">diabetis i salut de les genives</a>.`);
    for (const page of [implants, ortho, atm]) {
      page.dateModified = '2026-10-07';
      page.updatedLabel = es ? '7 de octubre de 2026' : '7 d’octubre de 2026';
      page.ctaText = es ? 'Solicita una valoración en Lleida. Recepción concretará contigo el día y la hora; también puedes pedir atención en Tremp.' : 'Sol·licita una valoració a Lleida. Recepció concretarà amb tu el dia i l’hora; també pots demanar atenció a Tremp.';
    }
    for (const [service, slug, label] of es ? [
      ['perio', 'mal-aliento-persistente', 'Mal aliento persistente: qué observar'],
      ['perio', 'diabetes-encias', 'Diabetes y salud de las encías'],
      ['atm', 'erosion-esmalte-dental', 'Erosión del esmalte y desgaste dental'],
      ['ortho', 'escaner-intraoral', 'Escáner intraoral: qué aporta al estudio'],
      ['implants', 'duracion-anestesia-dental', 'Anestesia dental: efecto y recuperación'],
    ] : [
      ['perio', 'mal-ale-persistent', 'Mal alè persistent: què observar'],
      ['perio', 'diabetis-genives', 'Diabetis i salut de les genives'],
      ['atm', 'erosio-esmalt-dental', 'Erosió de l’esmalt i desgast dental'],
      ['ortho', 'escaner-intraoral', 'Escàner intraoral: què aporta a l’estudi'],
      ['implants', 'durada-anestesia-dental', 'Anestèsia dental: efecte i recuperació'],
    ]) {
      const page = pages[`${lang}-${service}`];
      const href = `${guides}${slug}.html`;
      if (!page.related.some(link => link.href === href)) page.related.push({ href, type: es ? 'Guía' : 'Guia', label });
      if (service === 'perio') {
        page.dateModified = '2026-10-07';
        page.updatedLabel = es ? '7 de octubre de 2026' : '7 d’octubre de 2026';
      }
    }
  }
}

function linkWeakGuides(guides, pages) {
  const pairs = [
    ['mal-ale-persistent-ca', 'mal-aliento-persistente-es', 'perio'],
    ['diabetis-genives-ca', 'diabetes-encias-es', 'perio'],
    ['erosio-esmalt-dental-ca', 'erosion-esmalte-dental-es', 'atm'],
    ['escaner-intraoral-ca', 'escaner-intraoral-es', 'ortho'],
    ['durada-anestesia-dental-ca', 'duracion-anestesia-dental-es', 'implants'],
  ];
  for (const [ca, esKey, service] of pairs) {
    for (const key of [ca, esKey]) {
      const guide = guides[key];
      const es = guide.lang === 'es';
      const page = pages[`${guide.lang}-${service}`];
      const section = guide.sections.at(-1);
      section.paragraphs.push(es
        ? `Para preparar una visita, consulta <a href="/es/clinica-dental-lleida.html">el acceso y los horarios de Lleida</a>. Puedes llevar estas preguntas a la <a href="/${page.path}">valoración del tratamiento</a>; recepción confirmará el día y la hora.`
        : `Per preparar una visita, consulta <a href="/clinica-dental-lleida.html">l’accés i els horaris de Lleida</a>. Pots portar aquestes preguntes a la <a href="/${page.path}">valoració del tractament</a>; recepció confirmarà el dia i l’hora.`);
    }
  }
}

module.exports = { applyServicePriorities, linkWeakGuides };
