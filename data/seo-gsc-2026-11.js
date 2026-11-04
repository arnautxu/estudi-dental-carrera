// On-page adjustments from the Search Console read of 1 Sep – 2 Nov 2026.
// Only facts already published on the site are used (addresses, phones,
// hours, team roles, clinic names). No prices, outcomes or new services.
const UPDATED = { dateModified: '2026-11-04', ca: '4 de novembre de 2026', es: '4 de noviembre de 2026' };

function touch(page, es) {
  page.dateModified = UPDATED.dateModified;
  page.updatedLabel = es ? UPDATED.es : UPDATED.ca;
}

function applyGscNovember(pages) {
  for (const lang of ['ca', 'es']) {
    const es = lang === 'es';

    // Tremp: the clinic is listed as "Estudi Dental Tremp" (data/clinics.js) and
    // people search that name and "dentista tremp" (positions 6–8, almost no clicks).
    const tremp = pages[`${lang}-tremp`];
    tremp.title = es ? 'Dentista en Tremp | Estudi Dental Tremp, Pallars Jussà' : 'Dentista a Tremp | Estudi Dental Tremp, Pallars Jussà';
    tremp.h1 = es ? 'Estudi Dental Tremp: tu dentista en Tremp y el Pallars' : 'Estudi Dental Tremp: el teu dentista a Tremp i al Pallars';
    tremp.description = es
      ? 'Estudi Dental Tremp, en carrer Montllobar, 22: dentista en Tremp para el Pallars. Revisiones, encías, implantes, ortodoncia y ATM. Llama al 973 44 75 34.'
      : 'Estudi Dental Tremp, al carrer Montllobar, 22: dentista a Tremp per al Pallars. Revisions, genives, implants, ortodòncia i ATM. Truca al 973 44 75 34.';
    tremp.lead = es
      ? 'Estudi Dental Tremp es la clínica dental de Estudi Dental Carrera en Tremp. Ofrecemos diagnóstico, tratamiento y seguimiento en el Pallars y, cuando el caso lo necesita, coordinamos las visitas con el equipo de Lleida.'
      : 'Estudi Dental Tremp és la clínica dental d’Estudi Dental Carrera a Tremp. Oferim diagnòstic, tractament i seguiment al Pallars i, quan el cas ho necessita, coordinem les visites amb l’equip de Lleida.';
    touch(tremp, es);

    // Periodontics / endodontics: "endodòncia lleida" ~16, "periodòncia lleida" ~14.
    // Both professionals are listed in the Lleida team, as on the Lleida page.
    const perio = pages[`${lang}-perio`];
    perio.primaryClinic = 'lleida';
    perio.title = es ? 'Periodoncia y endodoncia en Lleida | Estudi Dental Carrera' : 'Periodòncia i endodòncia a Lleida | Estudi Dental Carrera';
    perio.h1 = es ? 'Periodoncia y endodoncia en Lleida' : 'Periodòncia i endodòncia a Lleida';
    perio.description = es
      ? 'Periodoncia, limpieza dental y endodoncia en Lleida con el Dr. Albert Vim y la Dra. Isabel Sierra. También en Tremp. Revisamos encías y dolor dental.'
      : 'Periodòncia, neteja dental i endodòncia a Lleida amb el Dr. Albert Vim i la Dra. Isabel Sierra. També a Tremp. Revisem genives i dolor dental.';
    const gums = perio.sections.find(section => section.id === 'periodoncia');
    if (gums) gums.title = es ? 'Periodoncia en Lleida: encías que sangran' : 'Periodòncia a Lleida: genives que sagnen';
    const endo = perio.sections.find(section => section.id === 'endodoncia');
    if (endo) endo.title = es ? 'Endodoncia en Lleida: en qué consiste el tratamiento' : 'Endodòncia a Lleida: en què consisteix el tractament';
    touch(perio, es);

    // Aesthetics: "blanqueamiento dental lleida" ~19 on the service page.
    // Keep Tremp in the title: Tremp whitening queries already rank 2–5.
    const aesthetic = pages[`${lang}-aesthetic`];
    aesthetic.title = es ? 'Blanqueamiento dental y carillas en Lleida y Tremp | Carrera' : 'Blanquejament i facetes dentals a Lleida i Tremp | Carrera';
    aesthetic.h1 = es ? 'Blanqueamiento dental y carillas en Lleida y Tremp' : 'Blanquejament i facetes dentals a Lleida i Tremp';
    touch(aesthetic, es);
  }
  return pages;
}

module.exports = { applyGscNovember };
