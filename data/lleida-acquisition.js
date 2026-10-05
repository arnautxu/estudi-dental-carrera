// Local navigation and first-visit logistics, using facts and professional
// roles already published by the clinic. This is not a clinical review claim.
function applyLleidaAcquisition(pages) {
  for (const lang of ['ca', 'es']) {
    const es = lang === 'es';
    const local = es ? '/es/clinica-dental-lleida.html' : '/clinica-dental-lleida.html';
    const contact = es ? '/es/sedes.html#contacto-carrera' : '/seus.html#contacte-carrera';
    for (const key of ['ortho', 'implants', 'atm']) {
      const page = pages[`${lang}-${key}`];
      page.primaryClinic = 'lleida';
      page.aside = es
        ? 'Recepción concretará contigo el día y la hora. Al pedir visita, indica si necesitas información sobre el acceso o si prefieres atención en Tremp.'
        : 'Recepció concretarà amb tu el dia i l’hora. En demanar visita, indica si necessites informació sobre l’accés o si prefereixes atenció a Tremp.';
      page.dateModified = '2026-10-05';
      page.updatedLabel = es ? '5 de octubre de 2026' : '5 d’octubre de 2026';
      const question = es ? '¿Dónde puedo pedir una valoración en Lleida?' : 'On puc demanar una valoració a Lleida?';
      const answer = es
        ? `En carrer Major, 74-76, 3.º 3.ª. Puedes llamar al 973 26 88 26 o <a href="${contact}">solicitar una primera visita</a>. Abrimos de lunes a miércoles de 9 a 19 h y jueves y viernes de 9 a 17 h. Recepción confirma la cita; consulta cualquier necesidad de acceso antes de venir.`
        : `Al carrer Major, 74-76, 3r 3a. Pots trucar al 973 26 88 26 o <a href="${contact}">sol·licitar una primera visita</a>. Obrim de dilluns a dimecres de 9 a 19 h i dijous i divendres de 9 a 17 h. Recepció confirma la cita; consulta qualsevol necessitat d’accés abans de venir.`;
      if (!page.faqs.some(faq => faq.q === question)) page.faqs.push({ q: question, a: answer });
    }

    const ortho = pages[`${lang}-ortho`];
    if (!ortho.sections.some(section => section.id === 'primera-visita-lleida')) {
      ortho.sections.unshift({
        id: 'primera-visita-lleida',
        jumpLabel: es ? 'Primera visita en Lleida' : 'Primera visita a Lleida',
        title: es ? 'Preparar tu primera visita de ortodoncia en Lleida' : 'Preparar la primera visita d’ortodòncia a Lleida',
        paragraphs: [es
          ? `La <a href="/es/equipo.html#carme-roure">Dra. Carme Roure Miquel</a> se dedica a la ortodoncia y la ATM. No necesitas elegir entre alineadores y brackets antes de la visita: puedes venir con tus dudas sobre la mordida, el tipo de aparato, los controles y el presupuesto.`
          : `La <a href="/equip.html#carme-roure">Dra. Carme Roure Miquel</a> es dedica a l’ortodòncia i l’ATM. No cal triar entre alineadors i bràquets abans de la visita: pots venir amb els dubtes sobre la mossegada, el tipus d’aparell, els controls i el pressupost.`],
        items: es ? [
          'Trae los informes y las pruebas previas que ya tengas.',
          'Si ya llevas un aparato, un retenedor o una férula, coméntalo al equipo.',
          'Pregunta qué incluye el estudio, quién realizará los controles y cómo se plantea la retención.',
        ] : [
          'Porta els informes i les proves prèvies que ja tinguis.',
          'Si ja portes un aparell, un retenidor o una fèrula, comenta-ho a l’equip.',
          'Pregunta què inclou l’estudi, qui farà els controls i com es planteja la retenció.',
        ],
        ctaText: es ? 'Solicita una valoración en nuestra clínica de carrer Major, Lleida.' : 'Sol·licita una valoració a la nostra clínica del carrer Major, Lleida.',
      });
    }

    const atm = pages[`${lang}-atm`];
    atm.professional = { ...ortho.professional };
    atm.title = es ? 'Bruxismo y ATM en Lleida: valoración y férula | Carrera' : 'Bruxisme i ATM a Lleida: valoració i fèrula | Carrera';
    atm.h1 = es ? 'Bruxismo y dolor de mandíbula en Lleida' : 'Bruxisme i dolor de mandíbula a Lleida';
    atm.description = es
      ? 'Valoración de bruxismo y dolor mandibular en Lleida con la Dra. Carme Roure. Férula de descarga cuando está indicada y seguimiento. Pide visita.'
      : 'Valoració de bruxisme i dolor mandibular a Lleida amb la Dra. Carme Roure. Fèrula de descàrrega quan està indicada i seguiment. Demana visita.';
    const visit = atm.sections.find(section => section.id === (es ? 'tratamiento-bruxismo' : 'tractament-bruxisme'));
    visit.jumpLabel = es ? 'Valoración en Lleida' : 'Valoració a Lleida';
    visit.ctaText = es ? 'Puedes pedir visita sin decidir de antemano si necesitas una férula.' : 'Pots demanar visita sense decidir abans si necessites una fèrula.';

    const implants = pages[`${lang}-implants`];
    const implantVisit = implants.sections.find(section => section.id === 'primera-visita-lleida');
    implantVisit.jumpLabel = es ? 'Primera visita en Lleida' : 'Primera visita a Lleida';
    implantVisit.ctaText = es ? 'Solicita una valoración para comparar las opciones de tu caso.' : 'Sol·licita una valoració per comparar les opcions del teu cas.';
    const budget = implants.sections.find(section => section.id === (es ? 'presupuesto-implantes' : 'pressupost-implants'));
    // Put the practical first step ahead of the detailed treatment explanations.
    implants.sections = [implantVisit, ...implants.sections.filter(section => section !== implantVisit)];
    budget.jumpLabel = es ? 'Qué incluye el presupuesto' : 'Què inclou el pressupost';

    const lleida = pages[`${lang}-lleida`];
    lleida.dateModified = '2026-10-05';
    lleida.updatedLabel = es ? '5 de octubre de 2026' : '5 d’octubre de 2026';
    const question = es ? '¿Cómo puedo pedir una primera visita en Lleida?' : 'Com puc demanar una primera visita a Lleida?';
    if (!lleida.faqs.some(faq => faq.q === question)) lleida.faqs.unshift({
      q: question,
      a: es
        ? `Puedes llamar al 973 26 88 26, escribir a recepción por WhatsApp o <a href="${contact}">enviar el formulario de Lleida</a>. No hace falta escoger un tratamiento. Recepción concretará contigo la fecha, la hora y el motivo de la visita.`
        : `Pots trucar al 973 26 88 26, escriure a recepció per WhatsApp o <a href="${contact}">enviar el formulari de Lleida</a>. No cal escollir un tractament. Recepció concretarà amb tu el dia, l’hora i el motiu de la visita.`,
    });
  }
  return pages;
}

module.exports = { applyLleidaAcquisition };
