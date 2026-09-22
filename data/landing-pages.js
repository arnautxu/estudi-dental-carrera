const caCommonSections = [
  {
    title: 'Com és la primera visita',
    paragraphs: [
      'La primera visita serveix per entendre què et preocupa, des de quan ho notes i quin impacte té en el teu dia a dia. Abans de proposar cap tractament revisem els antecedents rellevants, la medicació i les proves que ja puguis tenir. Després fem l’exploració clínica i, només quan aporta informació útil, plantegem les proves complementàries adequades. Aquesta seqüència evita prendre decisions a partir d’una sola imatge o d’un símptoma explicat fora de context.',
      'Al final de la visita compartim les troballes amb un llenguatge entenedor. Si hi ha diverses opcions, expliquem què busca cadascuna, quines limitacions té, quant temps pot requerir i quins controls són previsibles. També és legítim decidir observar l’evolució quan la situació ho permet. El pressupost i el consentiment informat arriben després d’aquesta conversa, no abans. Pots preguntar, demanar que repetim una explicació o endur-te temps per decidir.',
      'Una pàgina web no pot substituir aquesta valoració individual. Els símptomes semblants poden tenir causes diferents, i l’opció adequada depèn de l’estat general de la boca, els hàbits, les expectatives i les prioritats de cada persona. Si hi ha dolor intens, inflamació que augmenta, febre, traumatisme o dificultat per empassar o respirar, cal buscar atenció sanitària sense esperar una visita ordinària.',
    ],
    items: ['Entrevista i antecedents rellevants', 'Exploració clínica orientada al motiu de consulta', 'Proves només quan poden canviar el diagnòstic o el pla', 'Explicació d’alternatives, límits i seguiment'],
  },
  {
    title: 'Planificació, seguiment i manteniment',
    paragraphs: [
      'Un bon resultat no depèn només del procediment. La higiene diària, el control de la placa, el tabac, la dieta, el bruxisme, algunes malalties i la regularitat de les revisions poden modificar el pronòstic. Per això el pla inclou també allò que passa abans i després del tractament. Quan convé, coordinem les diferents àrees de l’equip perquè cada fase tingui un objectiu clar i perquè no es facin passos irreversibles abans d’hora.',
      'Durant el seguiment comprovem la resposta dels teixits, l’adaptació, la funció i els símptomes. Les cites no tenen una freqüència universal: es defineixen segons el risc i l’evolució. Si alguna cosa no respon com s’esperava, revisem el diagnòstic i adaptem el pla. Aquesta capacitat de rectificar és part d’una pràctica prudent i ajuda a diferenciar un objectiu realista d’una promesa de resultat.',
      'Les indicacions d’aquesta pàgina són generals i s’han revisat amb criteris divulgatius i fonts sanitàries reconegudes. No descriuen un protocol tancat ni garanteixen que una tècnica sigui adequada per a tothom. A la consulta documentem el punt de partida, resolem dubtes i acordem les decisions amb la persona. El manteniment posterior és especialment important quan hi ha restauracions, implants, antecedents de malaltia periodontal o risc elevat de càries.',
    ],
  },
];

const esCommonSections = [
  {
    title: 'Cómo es la primera visita',
    paragraphs: [
      'La primera visita sirve para entender qué te preocupa, desde cuándo lo notas y qué impacto tiene en tu día a día. Antes de proponer un tratamiento revisamos los antecedentes relevantes, la medicación y las pruebas que ya puedas tener. Después realizamos la exploración clínica y, solo cuando aporta información útil, planteamos las pruebas complementarias adecuadas. Esta secuencia evita tomar decisiones a partir de una sola imagen o de un síntoma explicado fuera de contexto.',
      'Al final de la visita compartimos los hallazgos con un lenguaje comprensible. Si existen varias opciones, explicamos qué busca cada una, qué limitaciones tiene, cuánto tiempo puede requerir y qué controles son previsibles. También es legítimo observar la evolución cuando la situación lo permite. El presupuesto y el consentimiento informado llegan después de esta conversación, no antes. Puedes preguntar, pedir que repitamos una explicación o tomarte tiempo para decidir.',
      'Una página web no puede sustituir esta valoración individual. Síntomas parecidos pueden tener causas distintas, y la opción adecuada depende del estado general de la boca, los hábitos, las expectativas y las prioridades de cada persona. Si hay dolor intenso, inflamación creciente, fiebre, traumatismo o dificultad para tragar o respirar, es necesario buscar atención sanitaria sin esperar una visita ordinaria.',
    ],
    items: ['Entrevista y antecedentes relevantes', 'Exploración clínica orientada al motivo de consulta', 'Pruebas solo cuando pueden cambiar el diagnóstico o el plan', 'Explicación de alternativas, límites y seguimiento'],
  },
  {
    title: 'Planificación, seguimiento y mantenimiento',
    paragraphs: [
      'Un buen resultado no depende únicamente del procedimiento. La higiene diaria, el control de la placa, el tabaco, la dieta, el bruxismo, algunas enfermedades y la regularidad de las revisiones pueden modificar el pronóstico. Por eso el plan incluye también lo que ocurre antes y después del tratamiento. Cuando conviene, coordinamos las distintas áreas del equipo para que cada fase tenga un objetivo claro y para no realizar pasos irreversibles antes de tiempo.',
      'Durante el seguimiento comprobamos la respuesta de los tejidos, la adaptación, la función y los síntomas. Las citas no tienen una frecuencia universal: se definen según el riesgo y la evolución. Si algo no responde como se esperaba, revisamos el diagnóstico y adaptamos el plan. Esta capacidad de rectificar forma parte de una práctica prudente y ayuda a diferenciar un objetivo realista de una promesa de resultado.',
      'Las indicaciones de esta página son generales y se han revisado con criterios divulgativos y fuentes sanitarias reconocidas. No describen un protocolo cerrado ni garantizan que una técnica sea adecuada para todo el mundo. En consulta documentamos el punto de partida, resolvemos dudas y acordamos las decisiones con la persona. El mantenimiento posterior es especialmente importante cuando existen restauraciones, implantes, antecedentes de enfermedad periodontal o riesgo elevado de caries.',
    ],
  },
];

const common = {
  ca: {
    introKicker: 'Criteri clínic abans que receptes ràpides',
    trust: [
      { title: 'Diagnòstic primer', text: 'La tècnica ve després d’entendre el problema.' },
      { title: 'Opcions explicades', text: 'Beneficis, límits, temps i alternatives.' },
      { title: 'Seguiment adaptat', text: 'Controls segons risc i evolució.' },
    ],
    aside: 'Treballem a Lleida i Tremp. La disponibilitat d’una tècnica, els terminis i el pressupost només es poden confirmar després de valorar el cas.',
    editorial: 'Contingut informatiu general; no és un diagnòstic ni substitueix una visita odontològica.',
    ctaTitle: 'Parlem del teu cas amb calma',
    ctaText: 'Demana una primera visita a Lleida o Tremp. T’explicarem què observem i quines opcions tenen sentit per a tu.',
  },
  es: {
    introKicker: 'Criterio clínico antes que recetas rápidas',
    trust: [
      { title: 'Diagnóstico primero', text: 'La técnica viene después de entender el problema.' },
      { title: 'Opciones explicadas', text: 'Beneficios, límites, tiempos y alternativas.' },
      { title: 'Seguimiento adaptado', text: 'Controles según riesgo y evolución.' },
    ],
    aside: 'Trabajamos en Lleida y Tremp. La disponibilidad de una técnica, los plazos y el presupuesto solo pueden confirmarse después de valorar el caso.',
    editorial: 'Contenido informativo general; no es un diagnóstico ni sustituye una visita odontológica.',
    ctaTitle: 'Hablemos de tu caso con calma',
    ctaText: 'Pide una primera visita en Lleida o Tremp. Te explicaremos qué observamos y qué opciones tienen sentido para ti.',
  },
};

const related = {
  ca: [
    { href: '/serveis.html', type: 'Guia', label: 'Tots els tractaments' },
    { href: '/equip.html', type: 'Equip', label: 'Professionals i criteri de treball' },
    { href: '/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental a Lleida' },
    { href: '/dentista-tremp.html', type: 'Clínica', label: 'Clínica dental a Tremp' },
  ],
  es: [
    { href: '/es/servicios.html', type: 'Guía', label: 'Todos los tratamientos' },
    { href: '/es/equipo.html', type: 'Equipo', label: 'Profesionales y criterio de trabajo' },
    { href: '/es/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental en Lleida' },
    { href: '/es/dentista-tremp.html', type: 'Clínica', label: 'Clínica dental en Tremp' },
  ],
};

function servicePage(lang, spec) {
  return {
    lang,
    type: 'service',
    introKicker: common[lang].introKicker,
    trust: common[lang].trust,
    aside: common[lang].aside,
    editorial: common[lang].editorial,
    ctaTitle: common[lang].ctaTitle,
    ctaText: common[lang].ctaText,
    related: related[lang],
    sections: [...spec.sections, ...(lang === 'es' ? esCommonSections : caCommonSections)],
    ...spec,
  };
}

const pages = {};

const carmeProfile = {
  ca: {
    name: 'Dra. Carme Roure Miquel',
    role: 'Metgessa odontòloga · Ortodòncia i ATM',
    href: '/equip.html#carme-roure',
    image: '/assets/img/equip/carme-roure-featured.webp',
    imageWidth: 1086, imageHeight: 1181,
  },
  es: {
    name: 'Dra. Carme Roure Miquel',
    role: 'Médica odontóloga · Ortodoncia y ATM',
    href: '/es/equipo.html#carme-roure',
    image: '/assets/img/equip/carme-roure-featured.webp',
    imageWidth: 1086, imageHeight: 1181,
  },
};

const joanProfile = {
  ca: {
    name: 'Dr. Joan Carrera Carrillo',
    role: 'Odontòleg · Implantologia i cirurgia oral',
    href: '/equip.html#joan-carrera-carrillo',
    image: '/assets/img/equip/joan-carrera-carrillo.webp',
    imageWidth: 900, imageHeight: 1080,
  },
  es: {
    name: 'Dr. Joan Carrera Carrillo',
    role: 'Odontólogo · Implantología y cirugía oral',
    href: '/es/equipo.html#joan-carrera-carrillo',
    image: '/assets/img/equip/joan-carrera-carrillo.webp',
    imageWidth: 900, imageHeight: 1080,
  },
};

pages['ca-atm'] = servicePage('ca', {
  professional: carmeProfile.ca,
  related: [
    { href: '/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental a Lleida' },
    { href: '/dentista-tremp.html', type: 'Clínica', label: 'Dentista a Tremp' },
    { href: '/equip.html#carme-roure', type: 'Equip', label: 'Dra. Carme Roure · Ortodòncia i ATM' }
  ],
  path: 'atm-bruxisme.html', alternatePath: 'es/atm-bruxismo.html',
  title: 'Dolor de mandíbula i bruxisme a Lleida i Tremp | Carrera',
  description: 'Valoració de dolor mandibular, sorolls, limitació d’obertura i bruxisme a Lleida i Tremp. Diagnòstic individual, opcions i seguiment.',
  dateModified: '2026-09-21', updatedLabel: '21 de setembre de 2026',
  eyebrow: 'ATM, dolor orofacial i bruxisme', h1: 'Dolor de mandíbula i bruxisme a Lleida i Tremp',
  lead: 'Dolor en mastegar, tensió al despertar, sorolls o desgast dental no sempre tenen una única causa. Comencem escoltant, explorant i diferenciant què pot contribuir als símptomes.',
  image: 'assets/img/serveis/atm-carme.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Professional d’Estudi Dental Carrera durant una valoració de la mandíbula',
  introTitle: 'Bruxisme no és sinònim de dolor mandibular',
  intro: [
    'A la clínica dental valorem el dolor de mandíbula i el bruxisme a Lleida i Tremp. L’ATM és l’articulació que uneix la mandíbula amb el crani. Treballa juntament amb els músculs i les dents. Apretar o grinyolar les dents pot deixar marques, però el desgast no explica sempre un dolor. També hi poden influir el son, l’estrès i altres problemes de salut.',
    'Et preguntem quan apareix el dolor i com afecta menjar, parlar o dormir. Revisem el moviment, els músculs, l’articulació i la manera de mossegar. També comprovem si la mandíbula es bloqueja. Només proposem proves d’imatge si poden ajudar a aclarir el cas.',
  ],
  sections: [
    {
      title: 'Quins símptomes convé explicar a la visita',
      paragraphs: [
        'Un soroll a la mandíbula sense dolor ni limitació no sempre necessita tractament. Un bloqueig recent, una obertura molt limitada o un dolor que empitjora sí que mereixen una valoració. Passa el mateix si la manera de mossegar canvia de sobte.',
        'Ens interessa saber quan va començar, en quins moments es repeteix i quines activitats limita. Preguntem també per mal de cap o d’orella, cops, artritis, pauses en respirar durant el son i medicació. Aquestes dades ajuden a decidir si cal coordinar l’atenció amb un altre professional.',
      ],
      items: [
        'Si et fa mal en despertar, en menjar o al final del dia.',
        'Si la mandíbula es bloqueja o s’obre menys que abans.',
        'Si estrenys les dents de dia o t’han sentit grinyolar-les mentre dorms.',
        'Si notes un canvi recent en mossegar.',
      ],
    },
    {
      title: 'Quina diferència hi ha entre bruxisme i dolor de mandíbula',
      paragraphs: [
        'Estrènyer les dents de dia i grinyolar-les mentre dorms no és ben bé el mateix. Poden requerir enfocaments diferents. Les marques a la llengua, la tensió muscular o el desgast ajuden a orientar. Per si sols no expliquen la causa ni quant durarà el problema.',
        'Si hi ha desgast, revisem si continua avançant i si també hi intervenen àcids o altres factors. Comprovem si afecta la funció. Protegir les dents i reduir el dolor poden ser objectius diferents: una sola mesura no sempre resol tots dos.',
      ],
    },
    {
      title: 'Quan pot ajudar una fèrula',
      paragraphs: [
        'En molts casos comencem per mesures reversibles. Poden incloure informació, canvis d’hàbits, reducció temporal de les sobrecàrregues o exercicis i fisioteràpia indicats per al cas. Davant de dolor agut o un bloqueig, primer cal explorar; no tots els exercicis serveixen per a tothom.',
        'Una fèrula pot protegir les dents o ajudar en certs quadres. No elimina automàticament el bruxisme ni és adequada per a qualsevol problema d’ATM. Expliquem per què la proposem, comprovem l’ajust i en revisem l’ús. Una fèrula comprada sense diagnòstic es pot adaptar malament.',
        'Si el problema requereix una altra àrea d’atenció, proposem coordinació amb medicina, fisioteràpia o una unitat del son. Busquem quin professional pot respondre a cada necessitat i comencem per les opcions menys invasives que permeti el cas.',
      ],
    },
    {
      "title": "Tractament del bruxisme a Lleida i Tremp: per on comencem",
      "id": "tractament-bruxisme",
      "jumpLabel": "Valoració i tractament",
      "paragraphs": [
        "Si busques tractament per al bruxisme, el primer pas és explicar què notes: estrènyer o grinyolar les dents, desgast, tensió o dolor. A la visita diferenciem què necessita protecció, què requereix seguiment i si cal estudiar altres possibles causes del malestar.",
        "El pla i el pressupost depenen de la valoració. Si es proposa una fèrula, convé aclarir-ne l’objectiu, l’adaptació i els controls. Pots preparar la visita amb la <a href=\"/guies/ferula-descarrega.html\">guia de la fèrula de descàrrega</a> i les preguntes sobre <a href=\"/guies/dolor-mandibula-despertar.html\">dolor de mandíbula en despertar</a>."
      ],
      "ctaText": "Explica’ns què notes i si ja portes una fèrula o un aparell d’ortodòncia."
    },
  ],
  faqs: [
    { q: 'Un clic a la mandíbula significa que està lesionada?', a: 'No necessàriament. Els sorolls poden existir sense dolor ni limitació. Cal valorar-los sobretot si són nous, dolorosos, s’acompanyen de bloqueig o dificulten el moviment.' },
    { q: 'La fèrula elimina el bruxisme?', a: 'No es pot prometre. Pot protegir les dents o ajudar en indicacions concretes, però requereix diagnòstic, ajust i controls.' },
    { q: 'Cal una ressonància o una radiografia?', a: 'Només quan la història i l’exploració fan pensar que la prova pot canviar el diagnòstic o el tractament.' },
    { q: 'Quan cal consultar amb urgència?', a: 'Davant d’un traumatisme important, inflamació ràpida, febre, dolor intens no controlat, bloqueig sobtat o dificultat per empassar o respirar.' },
  ],
  serviceType: 'Diagnòstic i tractament conservador dels trastorns temporomandibulars i el bruxisme',
  sources: [
    { href: 'https://www.nhs.uk/symptoms/teeth-grinding/', label: 'NHS: teeth grinding' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['es-atm'] = servicePage('es', {
  professional: carmeProfile.es,
  related: [
    { href: '/es/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental en Lleida' },
    { href: '/es/dentista-tremp.html', type: 'Clínica', label: 'Dentista en Tremp' },
    { href: '/es/equipo.html#carme-roure', type: 'Equipo', label: 'Dra. Carme Roure · Ortodoncia y ATM' }
  ],
  trust: common.es.trust.map(item => item.title === 'Diagnóstico primero' ? { ...item, text: 'El tratamiento viene después de entender el problema' } : item),
  path: 'es/atm-bruxismo.html', alternatePath: 'atm-bruxisme.html',
  title: 'Dolor de mandíbula y bruxismo en Lleida y Tremp | Carrera',
  description: 'Valoración de dolor mandibular, ruidos, limitación de apertura y bruxismo en Lleida y Tremp. Diagnóstico individual, opciones y seguimiento.',
  dateModified: '2026-09-21', updatedLabel: '21 de septiembre de 2026',
  eyebrow: 'ATM, dolor orofacial y bruxismo', h1: 'Dolor de mandíbula y bruxismo en Lleida y Tremp',
  lead: 'Dolor al masticar, tensión al despertar, ruidos o desgaste dental no siempre tienen una única causa. Empezamos escuchando, explorando y diferenciando qué puede contribuir a los síntomas.',
  image: 'assets/img/serveis/atm-carme.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Profesional de Estudi Dental Carrera durante una valoración de la mandíbula',
  introTitle: 'Bruxismo no es sinónimo de dolor mandibular',
  intro: [
    'En la clínica dental valoramos el dolor de mandíbula y el bruxismo en Lleida y Tremp. La ATM es la articulación que une la mandíbula con el cráneo. Trabaja junto con los músculos y los dientes. Apretar o rechinar los dientes puede dejar marcas, pero el desgaste no siempre explica un dolor. También pueden influir el sueño, el estrés y otros problemas de salud.',
    'Te preguntamos cuándo aparece el dolor y cómo afecta a comer, hablar o dormir. Revisamos el movimiento, los músculos, la articulación y la forma de morder. También comprobamos si la mandíbula se bloquea. Solo proponemos pruebas de imagen si pueden ayudar a aclarar el caso.',
  ],
  sections: [
    {
      title: 'Qué síntomas conviene explicar en la visita',
      paragraphs: [
        'Un ruido en la mandíbula sin dolor ni limitación no siempre necesita tratamiento. Un bloqueo reciente, una apertura muy limitada o un dolor que empeora sí merecen una valoración. Lo mismo ocurre si la forma de morder cambia de repente.',
        'Nos interesa saber cuándo empezó, en qué momentos se repite y qué actividades limita. Preguntamos también por dolor de cabeza u oído, golpes, artritis, pausas al respirar durante el sueño y medicación. Estos datos ayudan a decidir si hace falta coordinar la atención con otro profesional.',
      ],
      items: [
        'Si te duele al despertar, al comer o al final del día.',
        'Si la mandíbula se bloquea o abre menos que antes.',
        'Si aprietas los dientes de día o te han oído rechinarlos al dormir.',
        'Si notas un cambio reciente al morder.',
      ],
    },
    {
      title: 'Qué diferencia hay entre bruxismo y dolor de mandíbula',
      paragraphs: [
        'Apretar los dientes de día y rechinarlos mientras duermes no son exactamente lo mismo. Pueden requerir enfoques distintos. Las marcas en la lengua, la tensión muscular o el desgaste ayudan a orientar. Por sí solos no explican la causa ni cuánto durará el problema.',
        'Si hay desgaste, revisamos si sigue avanzando y si también intervienen ácidos u otros factores. Comprobamos si afecta a la función. Proteger los dientes y reducir el dolor pueden ser objetivos distintos: una sola medida no siempre resuelve ambos.',
      ],
    },
    {
      title: 'Cuándo puede ayudar una férula',
      paragraphs: [
        'En muchos casos empezamos por medidas reversibles. Pueden incluir información, cambios de hábitos, reducción temporal de las sobrecargas o ejercicios y fisioterapia indicados para el caso. Ante dolor agudo o un bloqueo, primero hay que explorar; no todos los ejercicios sirven para todos.',
        'Una férula puede proteger los dientes o ayudar en ciertos cuadros. No elimina automáticamente el bruxismo ni es adecuada para cualquier problema de ATM. Explicamos para qué la proponemos, comprobamos su ajuste y revisamos su uso. Una férula comprada sin diagnóstico puede adaptarse mal.',
        'Si el problema requiere otra área de atención, proponemos coordinación con medicina, fisioterapia o una unidad del sueño. Buscamos qué profesional puede responder a cada necesidad y empezamos por las opciones menos invasivas que permita el caso.',
      ],
    },
    {
      "title": "Tratamiento del bruxismo en Lleida y Tremp: por dónde empezamos",
      "id": "tratamiento-bruxismo",
      "jumpLabel": "Valoración y tratamiento",
      "paragraphs": [
        "Si buscas tratamiento para el bruxismo, el primer paso es explicar qué notas: apretar o rechinar los dientes, desgaste, tensión o dolor. En la visita diferenciamos qué necesita protección, qué requiere seguimiento y si conviene estudiar otras posibles causas del malestar.",
        "El plan y el presupuesto dependen de la valoración. Si se propone una férula, conviene aclarar su objetivo, la adaptación y los controles. Puedes preparar la visita con la <a href=\"/es/guias/ferula-descarga.html\">guía de la férula de descarga</a> y las preguntas sobre <a href=\"/es/guias/dolor-mandibula-despertar.html\">dolor de mandíbula al despertar</a>."
      ],
      "ctaText": "Cuéntanos qué notas y si ya llevas una férula o un aparato de ortodoncia."
    },
  ],
  faqs: [
    { q: '¿Un clic en la mandíbula significa que está lesionada?', a: 'No necesariamente. Los ruidos pueden existir sin dolor ni limitación. Deben valorarse especialmente si son nuevos, dolorosos, se acompañan de bloqueo o dificultan el movimiento.' },
    { q: '¿La férula elimina el bruxismo?', a: 'No puede prometerse. Puede proteger los dientes o ayudar en indicaciones concretas, pero requiere diagnóstico, ajuste y controles.' },
    { q: '¿Hace falta una resonancia o una radiografía?', a: 'Solo cuando la historia y la exploración hacen pensar que la prueba puede cambiar el diagnóstico o el tratamiento.' },
    { q: '¿Cuándo hay que consultar con urgencia?', a: 'Ante un traumatismo importante, inflamación rápida, fiebre, dolor intenso no controlado, bloqueo brusco o dificultad para tragar o respirar.' },
  ],
  serviceType: 'Diagnóstico y tratamiento conservador de los trastornos temporomandibulares y el bruxismo',
  sources: [
    { href: 'https://www.nhs.uk/symptoms/teeth-grinding/', label: 'NHS: teeth grinding' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['ca-implants'] = servicePage('ca', {
  professional: joanProfile.ca,
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
  path: 'implants-dentals.html', alternatePath: 'es/implantes-dentales.html',
  title: 'Implants dentals a Lleida i Tremp | Estudi Dental Carrera',
  description: 'Planificació d’implants dentals a Lleida i Tremp: diagnòstic, alternatives, cirurgia guiada quan està indicada i manteniment posterior.',
  eyebrow: 'Implantologia i rehabilitació oral', h1: 'Implants dentals a Lleida i Tremp',
  lead: 'Substituir una dent no és només col·locar un implant. Valorem si cal fer-ho, quines alternatives existeixen i com es podrà netejar i mantenir el resultat a llarg termini.',
  image: 'assets/img/serveis/implants-planificacio.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Planificació digital d’un tractament amb implants dentals',
  introTitle: 'Primer decidim si l’implant és l’opció adequada',
  intro: [
    'A la nostra clínica dental valorem els implants dentals a Lleida i Tremp. Un implant s’insereix a l’os i sosté la dent que falta. Abans de proposar-lo, estudiem si podem conservar la dent o si convé un pont o una pròtesi removible. També pot ser raonable esperar, segons el cas.',
    'Revisem les genives, l’os, la higiene, el tabac i la manera de mossegar. Fem les radiografies que necessita el cas. Una imatge en tres dimensions pot ajudar a planificar, però no sempre cal. Primer definim la dent que volem recuperar; després decidim on col·locar l’implant. També preveiem com es podrà netejar.',
  ],
  sections: [
    {
      title: 'Què decidim abans d’extreure una dent',
      paragraphs: [
        'Primer revisem si la dent encara es pot conservar. Si el problema és a l’interior de la dent, valorem si un <a href="/periodoncia-endodoncia.html#endodoncia">tractament d’endodòncia i una restauració</a> poden ser adequats.',
        'Si cal extreure-la, expliquem les opcions: esperar que cicatritzi, conservar l’os de la zona o col·locar l’implant en aquell moment. La tria depèn de l’os, la infecció, l’estabilitat i la força de la mossegada.',
        'Col·locar un implant el mateix dia de l’extracció no vol dir que es pugui posar també una dent fixa aquell dia. Són dues decisions diferents. La càrrega immediata només es planteja quan l’estudi del cas ho permet.',
        'Si falta os, podem valorar una regeneració. També comparem altres opcions, com una pròtesi diferent, un implant més curt o no reposar una peça posterior. Revisem què aporta cada alternativa i què exigeix en temps, cirurgia i manteniment.',
      ],
    },
    {
      title: 'Les fases del tractament amb implants',
      paragraphs: [
        'El tractament combina cirurgia oral, per col·locar l’implant a l’os, i rehabilitació, per preparar la dent que s’hi recolza. El pla comença per definir les dents que volem recuperar. Després decidim la posició dels implants i si cal preparar abans l’os o les genives. L’ordre i la durada canvien segons el cas.',
        'La cirurgia guiada fa servir una guia preparada a partir de la planificació digital. Pot ajudar a col·locar l’implant en la posició prevista. Requereix registres precisos i criteri clínic. No garanteix una cirurgia sense incisions ni una recuperació concreta.',
        'Després de la integració de l’implant es prepara la corona, el pont o la pròtesi. Comprovem com encaixa, com mossegues i com parles. També revisem l’aspecte i l’espai per netejar.',
      ],
      items: [
        'Estudi, alternatives i pressupost del pla.',
        'Preparació prèvia quan cal i col·locació de l’implant.',
        'Revisions de la cicatrització i la integració.',
        'Pròtesi, ajust de la mossegada i manteniment.',
      ],
    },
    {
      title: 'Riscos i cures que has de conèixer',
      paragraphs: [
        'Hi pot haver infecció, sagnat o lesió d’estructures properes. També pot fallar la integració, perdre’s os o aparèixer una complicació de la pròtesi. El risc canvia segons la zona i la persona. El tabac i una malaltia de les genives sense controlar poden empitjorar l’evolució.',
        'Expliquem aquests riscos abans de començar i revisem quins es poden reduir. El consentiment inclou les limitacions del tractament i les alternatives. Cap implant es pot presentar com una solució garantida per a tota la vida.',
        'Un implant no té càries, però la geniva i l’os que l’envolten poden emmalaltir. La neteja diària i els controls continuen sent necessaris. T’ensenyem com netejar la pròtesi i adaptem les revisions al risc. Pots consultar com valorem la <a href="/periodoncia-endodoncia.html#periodoncia">salut de les genives</a>. Consulta si hi ha sagnat, pus, mal gust, mobilitat o molèsties persistents.',
      ],
    },
  ],
  faqs: [
    { q: 'Què valorareu a la primera visita?', a: 'A la primera visita valorem el teu cas i les opcions de tractament. T’expliquem les fases, els controls i el manteniment que es preveuen segons les teves necessitats.' },
    { q: 'Tothom pot portar implants?', a: 'No. Cal valorar salut, medicació, os, genives, higiene, tabac i possibilitat de manteniment. També s’han de comparar alternatives.' },
    { q: 'Es pot posar implant i dent el mateix dia?', a: 'En casos seleccionats es pot plantejar càrrega immediata, però depèn de l’estabilitat i del risc. No es pot confirmar sense estudi.' },
    { q: 'Un implant dura tota la vida?', a: 'No es pot garantir. El pronòstic depèn de factors biològics, mecànics i del manteniment continuat.' },
    { q: 'Què passa si no hi ha prou os?', a: 'Es valoren regeneració, altres dissenys protètics o alternatives sense implant. La millor opció depèn de l’objectiu i del risc.' },
  ],
  serviceType: 'Planificació, cirurgia i rehabilitació amb implants dentals',
  sources: [
    { href: 'https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know', label: 'FDA: dental implants' },
    { href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/', label: 'NHS: conservar la dent amb endodòncia' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: informació per a pacients' },
  ],
});

pages['es-implants'] = servicePage('es', {
  professional: joanProfile.es,
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
  path: 'es/implantes-dentales.html', alternatePath: 'implants-dentals.html',
  title: 'Implantes dentales en Lleida y Tremp | Estudi Dental Carrera',
  description: 'Planificación de implantes dentales en Lleida y Tremp: diagnóstico, alternativas, cirugía guiada cuando está indicada y mantenimiento posterior.',
  eyebrow: 'Implantología y rehabilitación oral', h1: 'Implantes dentales en Lleida y Tremp',
  lead: 'Sustituir un diente no consiste solo en colocar un implante. Valoramos si hace falta, qué alternativas existen y cómo podrá limpiarse y mantenerse el resultado a largo plazo.',
  image: 'assets/img/serveis/implants-planificacio.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Planificación digital de un tratamiento con implantes dentales',
  introTitle: 'Primero decidimos si el implante es la opción adecuada',
  intro: [
    'En nuestra clínica dental valoramos los implantes dentales en Lleida y Tremp. Un implante se coloca en el hueso y sostiene el diente que falta. Antes de proponerlo, estudiamos si podemos conservar el diente o si conviene un puente o una prótesis removible. También puede ser razonable esperar, según el caso.',
    'Revisamos las encías, el hueso, la higiene, el tabaco y la forma de morder. Hacemos las radiografías que necesita el caso. Una imagen en tres dimensiones puede ayudar a planificar, pero no siempre hace falta. Primero definimos el diente que queremos recuperar; después decidimos dónde colocar el implante. También prevemos cómo podrá limpiarse.',
  ],
  sections: [
    {
      title: 'Qué decidimos antes de extraer un diente',
      paragraphs: [
        'Primero revisamos si el diente todavía puede conservarse. Si el problema está en su interior, valoramos si un <a href="/es/periodoncia-endodoncia.html#endodoncia">tratamiento de endodoncia y una restauración</a> pueden ser adecuados.',
        'Si hay que extraerlo, explicamos las opciones: esperar a que cicatrice, conservar el hueso de la zona o colocar el implante en ese momento. La elección depende del hueso, la infección, la estabilidad y la fuerza de la mordida.',
        'Colocar un implante el mismo día de la extracción no significa que se pueda colocar también un diente fijo ese día. Son dos decisiones distintas. La carga inmediata solo se plantea cuando el estudio del caso lo permite.',
        'Si falta hueso, podemos valorar una regeneración. También comparamos otras opciones, como una prótesis distinta, un implante más corto o no reponer una pieza posterior. Revisamos qué aporta cada alternativa y qué exige en tiempo, cirugía y mantenimiento.',
      ],
    },
    {
      title: 'Las fases del tratamiento con implantes',
      paragraphs: [
        'El tratamiento combina cirugía oral, para colocar el implante en el hueso, y rehabilitación, para preparar el diente que se apoya en él. El plan empieza por definir los dientes que queremos recuperar. Después decidimos la posición de los implantes y si hace falta preparar antes el hueso o las encías. El orden y la duración cambian según el caso.',
        'La cirugía guiada usa una guía preparada a partir de la planificación digital. Puede ayudar a colocar el implante en la posición prevista. Requiere registros precisos y criterio clínico. No garantiza una cirugía sin incisiones ni una recuperación concreta.',
        'Tras la integración del implante se prepara la corona, el puente o la prótesis. Comprobamos cómo encaja, cómo muerdes y cómo hablas. También revisamos el aspecto y el espacio para limpiar.',
      ],
      items: [
        'Estudio, alternativas y presupuesto del plan.',
        'Preparación previa cuando es necesaria y colocación del implante.',
        'Revisiones de la cicatrización y la integración.',
        'Prótesis, ajuste de la mordida y mantenimiento.',
      ],
    },
    {
      title: 'Riesgos y cuidados que debes conocer',
      paragraphs: [
        'Puede haber infección, sangrado o lesión de estructuras cercanas. También puede fallar la integración, perderse hueso o aparecer una complicación de la prótesis. El riesgo cambia según la zona y la persona. El tabaco y una enfermedad de las encías sin controlar pueden empeorar la evolución.',
        'Explicamos estos riesgos antes de empezar y revisamos cuáles se pueden reducir. El consentimiento incluye las limitaciones del tratamiento y sus alternativas. Ningún implante puede presentarse como una solución garantizada para toda la vida.',
        'Un implante no tiene caries, pero la encía y el hueso que lo rodean pueden enfermar. La limpieza diaria y los controles siguen siendo necesarios. Te enseñamos cómo limpiar la prótesis y adaptamos las revisiones al riesgo. Puedes consultar cómo valoramos la <a href="/es/periodoncia-endodoncia.html#periodoncia">salud de las encías</a>. Consulta si hay sangrado, pus, mal sabor, movilidad o molestias persistentes.',
      ],
    },
  ],
  faqs: [
    { q: '¿Qué valoraréis en la primera visita?', a: 'En la primera visita valoramos tu caso y las opciones de tratamiento. Te explicamos las fases, los controles y el mantenimiento que se prevén según tus necesidades.' },
    { q: '¿Todo el mundo puede llevar implantes?', a: 'No. Hay que valorar salud, medicación, hueso, encías, higiene, tabaco y posibilidad de mantenimiento. También deben compararse alternativas.' },
    { q: '¿Se puede poner el implante y el diente el mismo día?', a: 'En casos seleccionados puede plantearse carga inmediata, pero depende de la estabilidad y del riesgo. No puede confirmarse sin estudio.' },
    { q: '¿Un implante dura toda la vida?', a: 'No puede garantizarse. El pronóstico depende de factores biológicos, mecánicos y del mantenimiento continuado.' },
    { q: '¿Qué ocurre si no hay suficiente hueso?', a: 'Se valoran regeneración, otros diseños protésicos o alternativas sin implante. La mejor opción depende del objetivo y del riesgo.' },
  ],
  serviceType: 'Planificación, cirugía y rehabilitación con implantes dentales',
  sources: [
    { href: 'https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know', label: 'FDA: dental implants' },
    { href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/', label: 'NHS: conservar el diente con endodoncia' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: información para pacientes' },
  ],
});

pages['ca-ortho'] = servicePage('ca', {
  professional: carmeProfile.ca,
  related: [
    { href: '/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental a Lleida' },
    { href: '/dentista-tremp.html', type: 'Clínica', label: 'Dentista a Tremp' },
    { href: '/equip.html#carme-roure', type: 'Equip', label: 'Dra. Carme Roure · Ortodòncia i ATM' }
  ],
  path: 'ortodoncia.html', alternatePath: 'es/ortodoncia.html',
  title: 'Ortodòncia invisible a Lleida i Tremp | Carrera',
  description: 'Ortodòncia invisible a Lleida i Tremp. Comparem alineadors transparents i brackets segons la mossegada, la salut de les genives i les teves necessitats.',
  dateModified: '2026-09-21', updatedLabel: '21 de setembre de 2026',
  eyebrow: 'Ortodòncia en infants, adolescents i adults', h1: 'Ortodòncia invisible a Lleida i Tremp',
  lead: 'Abans de moure les dents, revisem la boca i què vols corregir. T’expliquem les opcions i com mantindrem la posició de les dents quan acabi el tractament.',
  image: 'assets/img/serveis/ortodoncia-model.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Model de dents amb bràquets en un prestatge de la clínica',
  introTitle: 'Alineadors i brackets són eines, no diagnòstics',
  intro: [
    'A la clínica dental estudiem l’ortodòncia a Lleida i Tremp. Primer parlem del que vols corregir: dents apinyades, espais o dificultats en mossegar. Revisem les genives, l’os i les càries abans de moure les dents. En infants i adolescents, també tenim en compte el creixement.',
    'Els alineadors transparents i els brackets són eines diferents. Per escollir, valorem els moviments necessaris, la higiene i les hores d’ús. Alguns casos necessiten coordinar l’ortodòncia amb altres tractaments. T’expliquem les fases i com mantindrem la posició de les dents quan acabem.',
  ],
  sections: [
    {
      title: 'Què estudiem abans de moure les dents',
      paragraphs: [
        'L’estudi pot incloure fotografies, registres digitals i radiografies quan calen. Revisem la mossegada i el perfil. Busquem quins moviments es poden fer i quins límits tenen les genives, l’os i les arrels.',
        'En infants i adolescents, valorem també el creixement. Començar abans no sempre és millor: el moment depèn del problema que volem corregir. Expliquem les opcions i si té sentit esperar. Si no hi ha un benefici clar, també valorem no tractar.',
        'Per crear espai, alguns casos requereixen ampliar l’arcada, reduir una mica l’esmalt entre dents o fer extraccions. Altres no. Són decisions que necessiten un estudi complet, no només una fotografia. Abans de decidir, expliquem com poden afectar el perfil, l’estabilitat i la durada.',
      ],
    },
    {
      title: 'Ortodòncia invisible a Lleida: com triem el sistema',
      id: 'ortodoncia-invisible', jumpLabel: 'Alineadors o brackets',
      paragraphs: [
        'Els alineadors transparents es coneixen com a ortodòncia invisible. Per triar entre alineadors i brackets, estudiem els moviments necessaris i com encaixa cada aparell en el teu dia a dia. Cap sistema és millor per a tothom.',
        'Si hi ha malaltia de les genives, restauracions grans o dents absents, cal valorar un seguiment específic i coordinar altres tractaments. L’objectiu pot ser facilitar la neteja o preparar l’espai per a una pròtesi.',
      ],
      comparison: {
        caption: 'Alineadors i brackets: què cal comparar abans de decidir',
        columns: ['Aspecte', 'Alineadors transparents', 'Brackets'],
        rows: [
          ['Indicació', 'L’estudi confirma si poden fer els moviments previstos.', 'L’estudi defineix els moviments i els límits del tractament.'],
          ['Ús diari', 'Es retiren per menjar i raspallar-se les dents. Cal complir les hores d’ús indicades.', 'Queden fixats a les dents durant el tractament.'],
          ['Higiene', 'Cal netejar les dents, els suports i els alineadors.', 'Cal netejar amb cura al voltant dels brackets i entre les dents.'],
          ['Controls', 'Revisem l’adaptació i la resposta de dents i genives.', 'Revisem els ajustos i la resposta de dents i genives.'],
        ],
      },
    },
    {
      title: 'Què revisem durant el tractament',
      paragraphs: [
        'La placa al voltant dels brackets o dels suports dels alineadors pot inflamar les genives i danyar l’esmalt. T’expliquem com netejar aquestes zones i quines eines fer servir. Coordinem neteges professionals quan calen.',
        'Després d’alguns ajustos pots notar pressió o sensibilitat temporal. Comunica el dolor intens, una ferida que no millora, un aparell trencat o un canvi inesperat. Els controls serveixen per comprovar com responen les genives i les dents.',
        'A vegades cal ajustar el pla, canviar algun element de l’aparell o allargar el tractament. La durada s’estima després de l’estudi i es revisa segons l’evolució. No es pot prometre una data exacta de finalització.',
      ],
    },
    {
      title: 'Per a què serveixen els retenidors',
      paragraphs: [
        'Quan acaba el moviment actiu, les dents poden tornar a canviar de posició. Els retenidors ajuden a mantenir el resultat. Poden ser fixos o removibles segons el cas, i també necessiten neteja i controls.',
        'Si un retenidor es desenganxa, deixa d’encaixar o es perd, convé revisar-lo aviat. Des de l’inici expliquem quina retenció es preveu i com cuidar-la. És part del tractament, no un afegit al final.',
      ],
    },
    {
      "title": "Preu de l’ortodòncia: què cal comparar",
      "id": "preu-ortodoncia",
      "jumpLabel": "Preu i pressupost",
      "paragraphs": [
        "El preu d’una ortodòncia a Lleida o Tremp depèn de l’estudi i del pla proposat. Per comparar pressupostos, convé mirar més enllà del tipus d’aparell: quins moviments es preveuen, quines fases calen i quin seguiment s’ha inclòs.",
        "Abans de començar, pregunta si el pressupost inclou l’estudi inicial, els controls, possibles ajustos del pla i els retenidors. També convé aclarir com es pressupostarien altres tractaments que poguessin ser necessaris. T’explicarem les opcions després de valorar el teu cas."
      ],
      "ctaText": "Demana una primera visita per valorar les opcions i el pressupost."
    },
  ],
  faqs: [
    { q: 'Què valorareu a la primera visita?', a: 'A la primera visita valorem el teu cas i les opcions de tractament. T’expliquem les fases, els controls i el manteniment que es preveuen segons les teves necessitats.' },
    { q: 'Alineadors o brackets: què és millor?', a: 'Depèn dels moviments necessaris, la higiene, la col·laboració i els objectius. Cap sistema és universalment millor.' },
    { q: 'Quant dura una ortodòncia?', a: 'Depèn dels moviments necessaris, de com responen les dents i de seguir les indicacions d’ús i els controls. Després de l’estudi podem donar una estimació i revisar-la segons l’evolució.' },
    { q: 'Es pot fer ortodòncia amb malaltia periodontal?', a: 'Pot ser possible si la inflamació està controlada i hi ha seguiment periodontal específic. Requereix valoració coordinada.' },
    { q: 'Cal portar retenidors per sempre?', a: 'La necessitat i el tipus varien, però mantenir la posició sol requerir retenció a llarg termini i controls.' },
  ],
  serviceType: 'Diagnòstic i tractament d’ortodòncia amb alineadors i aparells fixos',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/braces/', label: 'NHS: braces and orthodontics' },
    { href: 'https://www.sedo.es/', label: 'Sociedad Española de Ortodoncia' },
    { href: 'https://bos.org.uk/wp-content/uploads/2024/01/Aligners-version-2024.pdf', label: 'BOS: ús i cura dels alineadors' },
  ],
});

pages['es-ortho'] = servicePage('es', {
  professional: carmeProfile.es,
  related: [
    { href: '/es/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental en Lleida' },
    { href: '/es/dentista-tremp.html', type: 'Clínica', label: 'Dentista en Tremp' },
    { href: '/es/equipo.html#carme-roure', type: 'Equipo', label: 'Dra. Carme Roure · Ortodoncia y ATM' }
  ],
  path: 'es/ortodoncia.html', alternatePath: 'ortodoncia.html',
  title: 'Ortodoncia invisible en Lleida y Tremp | Carrera',
  description: 'Ortodoncia invisible en Lleida y Tremp. Comparamos alineadores transparentes y brackets según la mordida, la salud de las encías y tus necesidades.',
  dateModified: '2026-09-21', updatedLabel: '21 de septiembre de 2026',
  eyebrow: 'Ortodoncia en niños, adolescentes y adultos', h1: 'Ortodoncia invisible en Lleida y Tremp',
  lead: 'Antes de mover los dientes, revisamos la boca y qué quieres corregir. Te explicamos las opciones y cómo mantendremos la posición de los dientes al terminar el tratamiento.',
  image: 'assets/img/serveis/ortodoncia-model.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Modelo de dientes con brackets en un estante de la clínica',
  introTitle: 'Alineadores y brackets son herramientas, no diagnósticos',
  intro: [
    'En la clínica dental estudiamos la ortodoncia en Lleida y Tremp. Primero hablamos de lo que quieres corregir: dientes apiñados, espacios o dificultades al morder. Revisamos las encías, el hueso y las caries antes de mover los dientes. En niños y adolescentes, también tenemos en cuenta el crecimiento.',
    'Los alineadores transparentes y los brackets son herramientas distintas. Para elegir, valoramos los movimientos necesarios, la higiene y las horas de uso. Algunos casos necesitan coordinar la ortodoncia con otros tratamientos. Te explicamos las fases y cómo mantendremos la posición de los dientes al terminar.',
  ],
  sections: [
    {
      title: 'Qué estudiamos antes de mover los dientes',
      paragraphs: [
        'El estudio puede incluir fotografías, registros digitales y radiografías cuando hacen falta. Revisamos la mordida y el perfil. Buscamos qué movimientos pueden hacerse y qué límites tienen las encías, el hueso y las raíces.',
        'En niños y adolescentes, valoramos también el crecimiento. Empezar antes no siempre es mejor: el momento depende del problema que queremos corregir. Explicamos las opciones y si tiene sentido esperar. Si no hay un beneficio claro, también valoramos no tratar.',
        'Para crear espacio, algunos casos requieren ampliar la arcada, reducir un poco el esmalte entre dientes o hacer extracciones. Otros no. Son decisiones que necesitan un estudio completo, no solo una fotografía. Antes de decidir, explicamos cómo pueden afectar al perfil, la estabilidad y la duración.',
      ],
    },
    {
      title: 'Ortodoncia invisible en Lleida: cómo elegimos el sistema',
      id: 'ortodoncia-invisible', jumpLabel: 'Alineadores o brackets',
      paragraphs: [
        'Los alineadores transparentes suelen conocerse como ortodoncia invisible. Para elegir entre alineadores y brackets, estudiamos los movimientos necesarios y cómo encaja cada aparato en tu día a día. Ningún sistema es mejor para todo el mundo.',
        'Si hay enfermedad de las encías, restauraciones grandes o dientes ausentes, hay que valorar un seguimiento específico y coordinar otros tratamientos. El objetivo puede ser facilitar la limpieza o preparar el espacio para una prótesis.',
      ],
      comparison: {
        caption: 'Alineadores y brackets: qué comparar antes de decidir',
        columns: ['Aspecto', 'Alineadores transparentes', 'Brackets'],
        rows: [
          ['Indicación', 'El estudio confirma si pueden realizar los movimientos previstos.', 'El estudio define los movimientos y los límites del tratamiento.'],
          ['Uso diario', 'Se retiran para comer y cepillarse los dientes. Hay que cumplir las horas de uso indicadas.', 'Quedan fijados a los dientes durante el tratamiento.'],
          ['Higiene', 'Hay que limpiar los dientes, los apoyos y los alineadores.', 'Hay que limpiar con cuidado alrededor de los brackets y entre los dientes.'],
          ['Controles', 'Revisamos la adaptación y la respuesta de dientes y encías.', 'Revisamos los ajustes y la respuesta de dientes y encías.'],
        ],
      },
    },
    {
      title: 'Qué revisamos durante el tratamiento',
      paragraphs: [
        'La placa alrededor de brackets o de los apoyos de los alineadores puede inflamar las encías y dañar el esmalte. Te explicamos cómo limpiar esas zonas y qué herramientas usar. Coordinamos limpiezas profesionales cuando hacen falta.',
        'Tras algunos ajustes puedes notar presión o sensibilidad temporal. Comunica el dolor intenso, una herida que no mejora, un aparato roto o un cambio inesperado. Los controles sirven para comprobar cómo responden las encías y los dientes.',
        'A veces hay que ajustar el plan, cambiar algún elemento del aparato o alargar el tratamiento. La duración se estima tras el estudio y se revisa según la evolución. No se puede prometer una fecha exacta de finalización.',
      ],
    },
    {
      title: 'Para qué sirven los retenedores',
      paragraphs: [
        'Cuando termina el movimiento activo, los dientes pueden volver a cambiar de posición. Los retenedores ayudan a mantener el resultado. Pueden ser fijos o removibles según el caso, y también necesitan limpieza y controles.',
        'Si un retenedor se despega, deja de encajar o se pierde, conviene revisarlo pronto. Desde el inicio explicamos qué retención se prevé y cómo cuidarla. Es parte del tratamiento, no un añadido al final.',
      ],
    },
    {
      "title": "Precio de la ortodoncia: qué conviene comparar",
      "id": "precio-ortodoncia",
      "jumpLabel": "Precio y presupuesto",
      "paragraphs": [
        "El precio de una ortodoncia en Lleida o Tremp depende del estudio y del plan propuesto. Para comparar presupuestos, conviene mirar más allá del tipo de aparato: qué movimientos se prevén, qué fases hacen falta y qué seguimiento se ha incluido.",
        "Antes de empezar, pregunta si el presupuesto incluye el estudio inicial, los controles, posibles ajustes del plan y los retenedores. También conviene aclarar cómo se presupuestarían otros tratamientos que pudieran ser necesarios. Te explicaremos las opciones después de valorar tu caso."
      ],
      "ctaText": "Pide una primera visita para valorar las opciones y el presupuesto."
    },
  ],
  faqs: [
    { q: '¿Qué valoraréis en la primera visita?', a: 'En la primera visita valoramos tu caso y las opciones de tratamiento. Te explicamos las fases, los controles y el mantenimiento que se prevén según tus necesidades.' },
    { q: '¿Alineadores o brackets: qué es mejor?', a: 'Depende de los movimientos necesarios, la higiene, la colaboración y los objetivos. Ningún sistema es universalmente mejor.' },
    { q: '¿Cuánto dura una ortodoncia?', a: 'Depende de los movimientos necesarios, de cómo responden los dientes y de seguir las indicaciones de uso y los controles. Tras el estudio podemos dar una estimación y revisarla según la evolución.' },
    { q: '¿Puede hacerse ortodoncia con enfermedad periodontal?', a: 'Puede ser posible si la inflamación está controlada y existe seguimiento periodontal específico. Requiere valoración coordinada.' },
    { q: '¿Hay que llevar retenedores para siempre?', a: 'La necesidad y el tipo varían, pero mantener la posición suele requerir retención a largo plazo y controles.' },
  ],
  serviceType: 'Diagnóstico y tratamiento de ortodoncia con alineadores y aparatos fijos',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/braces/', label: 'NHS: braces and orthodontics' },
    { href: 'https://www.sedo.es/', label: 'Sociedad Española de Ortodoncia' },
    { href: 'https://bos.org.uk/wp-content/uploads/2024/01/Aligners-version-2024.pdf', label: 'BOS: uso y cuidado de los alineadores' },
  ],
});

pages['ca-perio'] = servicePage('ca', {
  sectionNavLabel: 'Genives, neteja dental i endodòncia',
  dateModified: '2026-09-18', updatedLabel: '18 de setembre de 2026',
  path: 'periodoncia-endodoncia.html', alternatePath: 'es/periodoncia-endodoncia.html',
  title: 'Periodòncia i endodòncia a Lleida i Tremp | Estudi Dental',
  description: 'Periodòncia, neteja dental i endodòncia a Lleida i Tremp. Revisem genives, dolor dental i opcions per conservar les dents, amb seguiment individual.',
  eyebrow: 'Conservar dents i teixits', h1: 'Periodòncia i endodòncia a Lleida i Tremp',
  lead: 'El sagnat de genives i el dolor dental no s’han de normalitzar. Identificar si el problema ve dels teixits de suport, de la polpa o d’una altra causa permet actuar amb més precisió.',
  image: 'assets/img/headers/hero-serveis.webp', imageWidth: 2200, imageHeight: 942, imageAlt: 'Gabinet d’Estudi Dental Carrera preparat per a tractaments conservadors',
  introTitle: 'Dues àrees diferents amb un objectiu compartit',
  intro: [
    'A la nostra clínica dental valorem tractaments de periodòncia a Lleida i Tremp. La periodòncia cuida les genives i l’os que sosté les dents. El tractament d’endodòncia actua a l’interior de la dent, on hi ha la polpa: el teixit que conté nervis i vasos sanguinis.',
    'El dolor en mastegar o la sensibilitat poden tenir orígens diferents. Explorem la boca i fem les proves necessàries per distingir-los. Abans de tractar, revisem si la dent es pot conservar i reconstruir. Si està molt malmesa, expliquem també les alternatives.',
  ],
  sections: [
    {
      title: 'Genives que sagnen: què revisem primer',
      id: 'periodoncia', jumpLabel: 'Genives que sagnen',
      paragraphs: [
        'La gingivitis és una forma de malaltia periodontal: la geniva s’inflama, sovint per la placa, i pot sagnar, envermellir-se o inflar-se. La periodontitis afecta també l’os i els teixits que subjecten les dents i pot avançar amb poques molèsties.',
        'Convé consultar si les genives sagnen sovint, es retreuen o deixen veure més dent. També si notes mobilitat, mal alè persistent o espais nous entre dents. Fumar pot ocultar el sagnat i augmentar el risc.',
        'A l’estudi periodontal mesurem els espais entre la geniva i la dent. Anotem el sagnat, la mobilitat i la retracció. Quan cal, una radiografia ajuda a valorar quant os sosté cada peça.',
        'Al nostre equip, el <a href="/equip.html#albert-vim">Dr. Albert Vim</a> es dedica a la periodòncia i la rehabilitació oral. Pots conèixer la seva dedicació abans de demanar visita.',
      ],
    },
    {
      title: 'Neteja dental a Lleida: què necessiten les genives',
      id: 'neteja-dental', jumpLabel: 'Neteja dental',
      ctaText: 'Valorem si necessites una higiene o un tractament de les genives.',
      paragraphs: [
        'Una neteja dental professional ajuda a retirar els dipòsits que s’acumulen a les dents. Abans revisem les genives per saber si la higiene és suficient o si cal un tractament periodontal. El sagnat, la pèrdua d’os i la profunditat dels espais entre dent i geniva orienten aquesta decisió.',
        'Quan cal tractar les genives, la primera fase sol combinar higiene a casa i neteja professional per sobre i per sota de la geniva. Després revisem la resposta. Només llavors valorem si alguna zona necessita un altre tractament o cirurgia.',
        'Els controls formen part del tractament. La freqüència depèn de la placa, el tabac, la diabetis i l’estat de les genives després de la primera fase. Una neteja aïllada no substitueix el seguiment d’una periodontitis. Si portes implants, revisem també els teixits que els envolten.',
      ],
      items: [
        'Estudiar l’estat de les genives i de l’os.',
        'Explicar com netejar les zones que ho necessiten.',
        'Tractar i comprovar la resposta abans de decidir el pas següent.',
        'Acordar els controls segons el risc.',
      ],
    },
    {
      title: 'En què consisteix un tractament d’endodòncia',
      id: 'endodoncia', jumpLabel: 'Endodòncia',
      ctaText: 'Revisem l’origen del problema i si la dent es pot conservar.',
      paragraphs: [
        'Una càries profunda, una fractura o un cop poden danyar la polpa. El dolor espontani, el dolor en mossegar o la sensibilitat que dura després del fred o la calor poden orientar. Un canvi de color o una inflamació també mereixen revisió. A vegades hi ha infecció sense dolor.',
        'El tractament d’endodòncia neteja i desinfecta els conductes de l’interior de la dent i després els segella. Els conductes poden tenir una forma complexa. Cap procediment garanteix eliminar tots els microorganismes.',
        'El pas següent és reconstruir la dent perquè quedi segellada i pugui suportar la mossegada. Endarrerir aquesta restauració pot afavorir una fractura o l’entrada de bacteris. A la visita expliquem quina part del tractament correspon als conductes i quina a la reconstrucció.',
        'Al nostre equip, la <a href="/equip.html#isabel-sierra">Dra. Isabel Sierra</a> es dedica a l’endodòncia, les pròtesis i la rehabilitació oral mínimament invasiva.',
      ],
    },
    {
      title: 'Què passa després del tractament',
      paragraphs: [
        'Una endodòncia necessita seguiment. Si una lesió persisteix o reapareix, revisem la causa i si la dent encara es pot restaurar. Segons el cas, es pot plantejar repetir el tractament, una cirurgia a l’extrem de l’arrel o extreure la peça.',
        'Si la dent no es pot conservar, expliquem les opcions per substituir-la. La guia d’<a href="/implants-dentals.html">implants dentals i alternatives</a> descriu què es valora abans de triar. Una infecció no implica, per si sola, que calgui posar un implant.',
        'Els antibiòtics no substitueixen el tractament de la causa local. No s’indiquen de forma rutinària: el professional valora si calen segons la infecció i el seu efecte en la salut general.',
      ],
    },
  ],
  faqs: [
    { q: 'Si em sagnen les genives és normal?', a: 'El sagnat repetit és un signe d’inflamació i convé valorar-ne la causa, encara que no hi hagi dolor.' },
    { q: 'Una neteja cura la periodontitis?', a: 'La periodontitis necessita diagnòstic, tractament per fases i manteniment. Una higiene aïllada pot no ser suficient.' },
    { q: 'Una endodòncia fa que la dent duri per sempre?', a: 'No. El pronòstic depèn de la infecció, l’anatomia, el teixit restant, la restauració i els controls.' },
    { q: 'Els antibiòtics curen una infecció dental?', a: 'Generalment cal tractar la causa local. Els antibiòtics només s’utilitzen quan hi ha una indicació clínica concreta.' },
  ],
  serviceType: 'Diagnòstic i tractament periodontal i endodòntic',
  sources: [
    { href: 'https://www.nhs.uk/conditions/gum-disease/', label: 'NHS: gum disease' },
    { href: 'https://www.nidcr.nih.gov/health-info/gum-disease', label: 'NIDCR: diagnòstic i tractament de les genives' },
    { href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/', label: 'NHS: root canal treatment' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: salut periodontal' },
  ],
});

pages['es-perio'] = servicePage('es', {
  sectionNavLabel: 'Encías, limpieza dental y endodoncia',
  dateModified: '2026-09-18', updatedLabel: '18 de septiembre de 2026',
  path: 'es/periodoncia-endodoncia.html', alternatePath: 'periodoncia-endodoncia.html',
  title: 'Periodoncia y endodoncia en Lleida y Tremp | Estudi Dental',
  description: 'Periodoncia, limpieza dental y endodoncia en Lleida y Tremp. Revisamos encías, dolor dental y opciones para conservar los dientes, con seguimiento individual.',
  eyebrow: 'Conservar dientes y tejidos', h1: 'Periodoncia y endodoncia en Lleida y Tremp',
  lead: 'El sangrado de encías y el dolor dental no deben normalizarse. Identificar si el problema procede de los tejidos de soporte, de la pulpa o de otra causa permite actuar con mayor precisión.',
  image: 'assets/img/headers/hero-serveis.webp', imageWidth: 2200, imageHeight: 942, imageAlt: 'Gabinete de Estudi Dental Carrera preparado para tratamientos conservadores',
  introTitle: 'Dos áreas distintas con un objetivo compartido',
  intro: [
    'En nuestra clínica dental valoramos tratamientos de periodoncia en Lleida y Tremp. La periodoncia cuida las encías y el hueso que sostiene los dientes. El tratamiento de endodoncia actúa en el interior del diente, donde está la pulpa: el tejido que contiene nervios y vasos sanguíneos.',
    'El dolor al masticar o la sensibilidad pueden tener distintos orígenes. Exploramos la boca y hacemos las pruebas necesarias para distinguirlos. Antes de tratar, revisamos si el diente puede conservarse y reconstruirse. Si está muy dañado, explicamos también las alternativas.',
  ],
  sections: [
    {
      title: 'Encías que sangran: qué revisamos primero',
      id: 'periodoncia', jumpLabel: 'Encías que sangran',
      paragraphs: [
        'La gingivitis es una forma de enfermedad periodontal: la encía se inflama, a menudo por la placa, y puede sangrar, enrojecerse o hincharse. La periodontitis afecta también al hueso y a los tejidos que sujetan los dientes y puede avanzar con pocas molestias.',
        'Conviene consultar si las encías sangran a menudo, se retraen o dejan ver más diente. También si notas movilidad, mal aliento persistente o espacios nuevos entre dientes. Fumar puede ocultar el sangrado y aumentar el riesgo.',
        'En el estudio periodontal medimos los espacios entre la encía y el diente. Anotamos el sangrado, la movilidad y la retracción. Cuando hace falta, una radiografía ayuda a valorar cuánto hueso sostiene cada pieza.',
        'En nuestro equipo, el <a href="/es/equipo.html#albert-vim">Dr. Albert Vim</a> se dedica a la periodoncia y la rehabilitación oral. Puedes conocer su dedicación antes de pedir visita.',
      ],
    },
    {
      title: 'Limpieza dental en Lleida: qué necesitan tus encías',
      id: 'limpieza-dental', jumpLabel: 'Limpieza dental',
      ctaText: 'Valoramos si necesitas una higiene o un tratamiento de las encías.',
      paragraphs: [
        'Una limpieza dental profesional ayuda a retirar los depósitos que se acumulan en los dientes. Antes revisamos las encías para saber si la higiene es suficiente o si hace falta un tratamiento periodontal. El sangrado, la pérdida de hueso y la profundidad de los espacios entre diente y encía orientan esta decisión.',
        'Cuando hace falta tratar las encías, la primera fase suele combinar higiene en casa y limpieza profesional por encima y por debajo de la encía. Después revisamos la respuesta. Solo entonces valoramos si alguna zona necesita otro tratamiento o cirugía.',
        'Los controles forman parte del tratamiento. Su frecuencia depende de la placa, el tabaco, la diabetes y el estado de las encías tras la primera fase. Una limpieza aislada no sustituye el seguimiento de una periodontitis. Si llevas implantes, revisamos también los tejidos que los rodean.',
      ],
      items: [
        'Estudiar el estado de las encías y del hueso.',
        'Explicar cómo limpiar las zonas que lo necesitan.',
        'Tratar y comprobar la respuesta antes de decidir el siguiente paso.',
        'Acordar los controles según el riesgo.',
      ],
    },
    {
      title: 'En qué consiste un tratamiento de endodoncia',
      id: 'endodoncia', jumpLabel: 'Endodoncia',
      ctaText: 'Revisamos el origen del problema y si el diente puede conservarse.',
      paragraphs: [
        'Una caries profunda, una fractura o un golpe pueden dañar la pulpa. El dolor espontáneo, el dolor al morder o la sensibilidad que dura tras el frío o el calor pueden orientar. Un cambio de color o una inflamación también merecen revisión. A veces existe infección sin dolor.',
        'El tratamiento de endodoncia limpia y desinfecta los conductos del interior del diente y después los sella. Los conductos pueden tener una forma compleja. Ningún procedimiento garantiza eliminar todos los microorganismos.',
        'El siguiente paso es reconstruir el diente para que quede sellado y pueda soportar la mordida. Retrasar esa restauración puede favorecer una fractura o la entrada de bacterias. En la visita explicamos qué parte del tratamiento corresponde a los conductos y cuál a la reconstrucción.',
        'En nuestro equipo, la <a href="/es/equipo.html#isabel-sierra">Dra. Isabel Sierra</a> se dedica a la endodoncia, las prótesis y la rehabilitación oral mínimamente invasiva.',
      ],
    },
    {
      title: 'Qué pasa después del tratamiento',
      paragraphs: [
        'Una endodoncia necesita seguimiento. Si una lesión persiste o reaparece, revisamos la causa y si el diente aún se puede restaurar. Según el caso, puede plantearse repetir el tratamiento, una cirugía en el extremo de la raíz o extraer la pieza.',
        'Si el diente no puede conservarse, explicamos las opciones para sustituirlo. La guía de <a href="/es/implantes-dentales.html">implantes dentales y alternativas</a> describe qué se valora antes de elegir. Una infección no implica, por sí sola, que haya que colocar un implante.',
        'Los antibióticos no sustituyen el tratamiento de la causa local. No se indican de forma rutinaria: el profesional valora si hacen falta según la infección y su efecto en la salud general.',
      ],
    },
  ],
  faqs: [
    { q: '¿Es normal que me sangren las encías?', a: 'El sangrado repetido es un signo de inflamación y conviene valorar su causa, aunque no exista dolor.' },
    { q: '¿Una limpieza cura la periodontitis?', a: 'La periodontitis necesita diagnóstico, tratamiento por fases y mantenimiento. Una higiene aislada puede no ser suficiente.' },
    { q: '¿Una endodoncia hace que el diente dure para siempre?', a: 'No. El pronóstico depende de la infección, la anatomía, el tejido restante, la restauración y los controles.' },
    { q: '¿Los antibióticos curan una infección dental?', a: 'Generalmente hay que tratar la causa local. Los antibióticos solo se usan cuando existe una indicación clínica concreta.' },
  ],
  serviceType: 'Diagnóstico y tratamiento periodontal y endodóntico',
  sources: [
    { href: 'https://www.nhs.uk/conditions/gum-disease/', label: 'NHS: gum disease' },
    { href: 'https://www.nidcr.nih.gov/health-info/gum-disease', label: 'NIDCR: diagnóstico y tratamiento de las encías' },
    { href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/', label: 'NHS: root canal treatment' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: salud periodontal' },
  ],
});

pages['ca-aesthetic'] = servicePage('ca', {
  dateModified: '2026-09-21', updatedLabel: '21 de setembre de 2026',
  path: 'estetica-dental.html', alternatePath: 'es/estetica-dental.html',
  title: 'Facetes dentals i blanquejament a Lleida i Tremp | Carrera',
  description: 'Estètica dental a Lleida i Tremp: blanquejament, facetes o carilles dentals i composite. Valorem dents, genives i mossegada abans de proposar canvis.',
  eyebrow: 'Estètica dental conservadora', h1: 'Estètica dental a Lleida i Tremp',
  lead: 'Color, forma, posició i genives s’han de valorar conjuntament. Prioritzem les opcions reversibles o mínimament invasives abans de proposar restauracions.',
  image: 'assets/img/serveis/estetica-llum.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Valoració de llum i color per a un tractament d’estètica dental',
  introTitle: 'L’estètica no es pot separar de la salut',
  intro: [
    'L’estètica dental a Lleida i Tremp comença amb una revisió de la boca. A la clínica dental escoltem què voldries canviar i què prefereixes conservar. Una taca, una dent fosca o una vora trencada poden tenir causes diferents. Revisem càries, genives, desgast i mossegada abans de proposar un tractament.',
    'Les fotografies i simulacions ajuden a parlar del resultat que busquem. No en són una garantia exacta. La llum, els materials, les genives i els llavis influeixen en l’aspecte final. Sovint podem plantejar canvis petits i coordinats, sense haver de tractar moltes dents.',
  ],
  sections: [
    {
      title: 'Blanquejament dental a Lleida: què pot canviar',
      id: 'blanquejament', jumpLabel: 'Blanquejament dental',
      ctaText: 'Parlem del canvi de color que busques.',
      paragraphs: [
        'L’emblanquiment aclareix dents naturals. No canvia el color d’empastaments, corones o facetes. Per això comprovem quina part del somriure canviaria i quina conservaria el color. Si només hi ha una dent fosca després d’un cop o una endodòncia, pot necessitar un altre enfocament.',
        'Abans revisem càries, fissures, sensibilitat i genives. No totes les taques responen igual. Triem el sistema i el temps segons el cas: fer servir més producte o durant més temps no assegura un resultat millor.',
        'Pot causar sensibilitat temporal o irritar les genives. Cal seguir les indicacions i interrompre l’ús si apareixen molèsties importants. Un producte comprat sense supervisió no permet saber què causa el canvi de color. Durant l’embaràs o en altres situacions, pot convenir ajornar el tractament.',
      ],
    },
    {
      title: 'Facetes dentals a Lleida i Tremp: composite i ceràmica',
      id: 'carilles', jumpLabel: 'Facetes i composite',
      ctaText: 'Valorem la forma i les vores que voldries canviar.',
      paragraphs: [
        'Una faceta dental, també coneguda com a carilla, cobreix la cara visible de la dent i pot ser de composite o de ceràmica. Reparar només una vora amb composite no és el mateix que recobrir-la. Comparem quanta superfície necessita un canvi, la mossegada i l’estat de les genives.',
        'Abans de restaurar, valorem si l’ortodòncia, l’emblanquiment o un petit canvi de contorn conservarien més dent. Si cal retirar esmalt, aquest pas no és reversible. Una prova estètica pot ajudar a parlar de proporcions i de com es nota en parlar.',
      ],
      comparison: {
        caption: 'Composite i ceràmica: preparació, reparació i manteniment',
        columns: ['Aspecte', 'Composite', 'Carilles de ceràmica'],
        rows: [
          ['Preparació de la dent', 'Sovint requereix preparar poca superfície.', 'Depèn de la posició, el color inicial i el canvi buscat.'],
          ['Reparació', 'Es pot reparar si es desgasta o es danya.', 'Cal valorar si es pot reparar o s’ha de substituir la carilla.'],
          ['Manteniment', 'Es pot tenyir, desgastar i necessitar poliment.', 'Pot mantenir bé el color i la forma, però també necessita controls.'],
        ],
      },
    },
    {
      title: 'Quant dura i quin manteniment necessita',
      paragraphs: [
        'El color inicial i l’estructura de la dent influeixen en el resultat de l’emblanquiment. També el tabac i el consum freqüent de begudes que tenyeixen. Pot caldre manteniment, però no s’ha de repetir de forma contínua sense revisió.',
        'Cap material és indestructible. Mossegar objectes, obrir envasos amb les dents, el bruxisme o una higiene insuficient poden danyar una restauració. T’expliquem com cuidar-la i quan revisar-la.',
        'Als controls comprovem les vores, el color, la mossegada i les genives. La decisió ha de tenir en compte tant el canvi que busques avui com el que necessitaràs per mantenir-lo.',
      ],
    },
  ],
  faqs: [
    {"q": "Quant costen les facetes dentals o el blanquejament?", "a": "El pressupost depèn de les dents que es tractaran, el material o sistema proposat i l’estat inicial de la boca. A la visita comparem les alternatives i expliquem què inclou cada opció, els controls i el manteniment previst."},
    { q: 'Què valorareu a la primera visita?', a: 'A la primera visita valorem el teu cas i les opcions de tractament. T’expliquem les fases, els controls i el manteniment que es preveuen segons les teves necessitats.' },
    { q: 'L’emblanquiment fa malbé l’esmalt?', a: 'Els sistemes indicats i supervisats tenen un perfil de seguretat conegut, però poden causar sensibilitat temporal i no són adequats en qualsevol situació.' },
    { q: 'Les corones i els empastaments s’emblanqueixen?', a: 'No. Els materials restauradors no canvien de color com la dent natural i pot caldre replantejar-los després.' },
    { q: 'Composite o ceràmica?', a: 'Depèn del teixit disponible, el canvi necessari, la mossegada, la reparabilitat i les preferències. Cal comparar avantatges i límits.' },
    { q: 'Es pot veure el resultat abans?', a: 'Fotografies, simulacions o proves poden ajudar a comunicar l’objectiu, però no garanteixen una reproducció exacta.' },
  ],
  serviceType: 'Diagnòstic i tractaments conservadors d’estètica dental',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/', label: 'NHS: teeth whitening' },
    { href: 'https://www.mouthhealthy.org/all-topics-a-z/veneers', label: 'ADA: carilles de ceràmica i composite' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['es-aesthetic'] = servicePage('es', {
  dateModified: '2026-09-21', updatedLabel: '21 de septiembre de 2026',
  path: 'es/estetica-dental.html', alternatePath: 'estetica-dental.html',
  title: 'Estética dental en Lleida: carillas y blanqueamiento | Carrera',
  description: 'Estética dental en Lleida y Tremp: blanqueamiento dental, carillas y composite. Valoramos dientes, encías y mordida antes de proponer cambios.',
  eyebrow: 'Estética dental conservadora', h1: 'Estética dental en Lleida y Tremp',
  lead: 'Color, forma, posición y encías deben valorarse conjuntamente. Priorizamos las opciones reversibles o mínimamente invasivas antes de proponer restauraciones.',
  image: 'assets/img/serveis/estetica-llum.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Valoración de luz y color para un tratamiento de estética dental',
  introTitle: 'La estética no puede separarse de la salud',
  intro: [
    'La estética dental en Lleida y Tremp empieza con una revisión de la boca. En la clínica dental escuchamos qué te gustaría cambiar y qué prefieres conservar. Una mancha, un diente oscuro o un borde roto pueden tener causas distintas. Revisamos caries, encías, desgaste y mordida antes de proponer un tratamiento.',
    'Las fotografías y simulaciones ayudan a hablar del resultado que buscamos. No son una garantía exacta. La luz, los materiales, las encías y los labios influyen en el aspecto final. A menudo podemos plantear cambios pequeños y coordinados, sin tener que tratar muchos dientes.',
  ],
  sections: [
    {
      title: 'Blanqueamiento dental en Lleida: qué puede cambiar',
      id: 'blanqueamiento', jumpLabel: 'Blanqueamiento dental',
      ctaText: 'Hablemos del cambio de color que buscas.',
      paragraphs: [
        'El blanqueamiento aclara dientes naturales. No cambia el color de empastes, coronas o carillas. Por eso comprobamos qué parte de la sonrisa cambiaría y cuál conservaría su color. Si solo hay un diente oscuro después de un golpe o una endodoncia, puede necesitar otro enfoque.',
        'Antes revisamos caries, fisuras, sensibilidad y encías. No todas las manchas responden igual. Elegimos el sistema y el tiempo según el caso: usar más producto o durante más tiempo no asegura un mejor resultado.',
        'Puede causar sensibilidad temporal o irritar las encías. Hay que seguir las indicaciones e interrumpir el uso si aparecen molestias importantes. Un producto comprado sin supervisión no permite saber qué causa el cambio de color. Durante el embarazo o en otras situaciones, puede convenir aplazar el tratamiento.',
      ],
    },
    {
      title: 'Carillas dentales en Lleida: composite y cerámica',
      id: 'carillas', jumpLabel: 'Carillas y composite',
      ctaText: 'Valoramos la forma y los bordes que te gustaría cambiar.',
      paragraphs: [
        'Una carilla cubre la cara visible del diente y puede ser de composite o de cerámica. Reparar solo un borde con composite no es lo mismo que cubrirla. Comparamos cuánta superficie necesita un cambio, la mordida y el estado de las encías.',
        'Antes de restaurar, valoramos si la ortodoncia, el blanqueamiento o un pequeño cambio de contorno conservarían más diente. Si hay que retirar esmalte, ese paso no es reversible. Una prueba estética puede ayudar a hablar de proporciones y de cómo se siente al hablar.',
      ],
      comparison: {
        caption: 'Composite y cerámica: preparación, reparación y mantenimiento',
        columns: ['Aspecto', 'Composite', 'Carillas de cerámica'],
        rows: [
          ['Preparación del diente', 'A menudo requiere preparar poca superficie.', 'Depende de la posición, el color inicial y el cambio buscado.'],
          ['Reparación', 'Se puede reparar si se desgasta o se daña.', 'Hay que valorar si puede repararse o debe sustituirse la carilla.'],
          ['Mantenimiento', 'Puede teñirse, desgastarse y necesitar pulido.', 'Puede mantener bien el color y la forma, pero también necesita controles.'],
        ],
      },
    },
    {
      title: 'Cuánto dura y qué mantenimiento necesita',
      paragraphs: [
        'El color inicial y la estructura del diente influyen en el resultado del blanqueamiento. También el tabaco y el consumo frecuente de bebidas que tiñen. Puede hacer falta mantenimiento, pero no se debe repetir de forma continua sin revisión.',
        'Ningún material es indestructible. Morder objetos, abrir envases con los dientes, el bruxismo o una higiene insuficiente pueden dañar una restauración. Te explicamos cómo cuidarla y cuándo revisarla.',
        'En los controles comprobamos los bordes, el color, la mordida y las encías. La decisión debe tener en cuenta tanto el cambio que buscas hoy como lo que necesitarás para mantenerlo.',
      ],
    },
  ],
  faqs: [
    {"q": "¿Cuánto cuestan las carillas dentales o el blanqueamiento?", "a": "El presupuesto depende de los dientes que se tratarán, el material o sistema propuesto y el estado inicial de la boca. En la visita comparamos las alternativas y explicamos qué incluye cada opción, los controles y el mantenimiento previsto."},
    { q: '¿Qué valoraréis en la primera visita?', a: 'En la primera visita valoramos tu caso y las opciones de tratamiento. Te explicamos las fases, los controles y el mantenimiento que se prevén según tus necesidades.' },
    { q: '¿El blanqueamiento daña el esmalte?', a: 'Los sistemas indicados y supervisados tienen un perfil de seguridad conocido, pero pueden causar sensibilidad temporal y no son adecuados en cualquier situación.' },
    { q: '¿Las coronas y los empastes se blanquean?', a: 'No. Los materiales restauradores no cambian de color como el diente natural y puede ser necesario replantearlos después.' },
    { q: '¿Composite o cerámica?', a: 'Depende del tejido disponible, el cambio necesario, la mordida, la reparabilidad y las preferencias. Hay que comparar ventajas y límites.' },
    { q: '¿Puede verse el resultado antes?', a: 'Fotografías, simulaciones o pruebas pueden ayudar a comunicar el objetivo, pero no garantizan una reproducción exacta.' },
  ],
  serviceType: 'Diagnóstico y tratamientos conservadores de estética dental',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/', label: 'NHS: teeth whitening' },
    { href: 'https://www.mouthhealthy.org/all-topics-a-z/veneers', label: 'ADA: carillas de cerámica y composite' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

function locationPage(lang, spec) {
  return {
    lang,
    type: 'location',
    introKicker: lang === 'es' ? 'Una clínica cercana con decisiones explicadas' : 'Una clínica propera amb decisions explicades',
    trust: common[lang].trust,
    editorial: common[lang].editorial,
    related: related[lang],
    ctaTitle: lang === 'es' ? `Pide cita en ${spec.city}` : `Demana visita a ${spec.city}`,
    ctaText: lang === 'es' ? 'Deja tus datos de contacto. La recepción de la clínica elegida te llamará para concretar la visita.' : 'Deixa les teves dades de contacte. La recepció de la clínica escollida et trucarà per concretar la visita.',
    ...spec,
  };
}

pages['ca-lleida'] = locationPage('ca', {
  path: 'clinica-dental-lleida.html', alternatePath: 'es/clinica-dental-lleida.html', city: 'Lleida',
  dateModified: '2026-09-21', updatedLabel: '21 de setembre de 2026',
  title: 'Dentista a Lleida | Clínica dental Estudi Dental Carrera',
  description: 'Dentistes a Lleida: clínica dental al carrer Major per a diagnòstic, prevenció i tractaments coordinats. Coneix l’equip i demana una primera visita.',
  eyebrow: 'Carrer Major, Lleida', h1: 'Clínica dental a Lleida amb una mirada integral',
  lead: 'Al centre de Lleida, un equip coordinat per entendre el problema abans de proposar una solució. Primera visita, diagnòstic i seguiment en un mateix espai.',
  image: 'assets/img/lleida-edifici.webp', imageWidth: 1333, imageHeight: 2000, imageAlt: 'Edifici de la clínica Estudi Dental Carrera al carrer Major de Lleida',
  introTitle: 'Odontologia al centre de Lleida, amb temps per explicar',
  intro: [
    'Estudi Dental Carrera és una clínica dental al centre de Lleida, al carrer Major, 74-76, 3r 3a. El nostre equip de dentistes hi fa visites de diagnòstic, prevenció i tractament. Abans de substituir o moure una dent, valorem què podem conservar i quin benefici tindria cada pas.',
    'Si el cas necessita diversos professionals, ordenem les visites entre l’equip. Pot caldre tractar les genives abans de posar una pròtesi o revisar la mossegada abans de restaurar una dent. T’expliquem què proposem, en quin ordre i per què.',
  ],
  aside: 'Adreça: carrer Major, 74-76, 3r 3a, 25007 Lleida. Telèfon: 973 26 88 26. Horari: dilluns a divendres 9–20 h; dissabtes 9–14 h. Diumenges, tancat. Consulta amb recepció qualsevol necessitat d’accés.',
  sections: [
    {
      title: 'Quins tractaments podem valorar a Lleida',
      paragraphs: [
        'Fem revisions, diagnòstic de càries i desgast, restauracions, pròtesis i cirurgia oral. L’exploració ens ajuda a decidir què necessites. No totes les tècniques són adequades per a tothom.',
        'Pots ampliar la informació segons el motiu de la consulta:',
      ],
      items: [
        'Si falta una dent: <a href="/implants-dentals.html">implants i les seves alternatives</a>.',
        'Si vols corregir la posició de les dents: <a href="/ortodoncia.html#ortodoncia-invisible">ortodòncia invisible o brackets</a>.',
        'Si sagnen les genives: <a href="/periodoncia-endodoncia.html#periodoncia">valoració periodontal</a>.',
        'Si busques una higiene: <a href="/periodoncia-endodoncia.html#neteja-dental">neteja dental i salut de les genives</a>.',
        'Si fa mal una dent: <a href="/periodoncia-endodoncia.html#endodoncia">valoració i tractament d’endodòncia quan està indicat</a>.',
        'Si hi ha tensió o dolor de mandíbula: <a href="/atm-bruxisme.html">valoració d’ATM i bruxisme</a>.',
        'Si vols aclarir el color de les dents: <a href="/estetica-dental.html#blanquejament">blanquejament dental</a>.',
        'Si vols revisar la forma o una vora: <a href="/estetica-dental.html#carilles">carilles i composite</a>.',
      ],
    },
    {
      title: 'Professionals de l’equip de Lleida',
      paragraphs: [
        'Pots conèixer la dedicació i la trajectòria dels professionals abans de demanar visita. Si el cas combina diverses necessitats, l’equip coordina les diferents àrees.',
      ],
      items: [
        '<a href="/equip.html#joan-carrera-carrillo">Dr. Joan Carrera Carrillo</a>: implantologia i cirurgia oral.',
        '<a href="/equip.html#albert-vim">Dr. Albert Vim</a>: periodòncia i rehabilitació oral.',
        '<a href="/equip.html#isabel-sierra">Dra. Isabel Sierra</a>: endodòncia, pròtesis i rehabilitació oral mínimament invasiva.',
        '<a href="/equip.html#carme-roure">Dra. Carme Roure Miquel</a>: ortodòncia, disfunció craniomandibular i bruxisme.',
      ],
    },
    {
      title: 'Què passa a la primera visita',
      paragraphs: [
        'Comencem per escoltar-te i revisar la salut general, la medicació i les proves que ja tinguis. Després explorem la boca. Només proposem radiografies o escàners si poden ajudar a decidir el diagnòstic o el pla.',
        'Si hi ha dolor, inflamació o una fractura, primer en busquem l’origen. Si vens per prevenció o estètica, revisem igualment dents i genives. A vegades cal controlar una càries o una inflamació abans de començar un altre tractament.',
        'Al final expliquem què hem trobat i quines opcions tens. Comparem beneficis, riscos, temps i manteniment. Si observar o una alternativa més senzilla són raonables, també en parlem. El pressupost correspon al pla acordat; si apareixen dades noves, revisem amb tu els canvis.',
      ],
    },
    {
      title: 'Com preparar la visita i arribar a la clínica',
      paragraphs: [
        'Som al carrer Major, 74-76, 3r 3a, al centre de Lleida. La clínica és en una planta superior. Consulta amb recepció qualsevol necessitat d’accés, acompanyament o adaptació quan demanis cita.',
        'Porta la llista de medicació i, si en tens, informes o radiografies recents. Explica si tens al·lèrgies, diabetis, embaràs o alguna altra condició rellevant. Indica si prens anticoagulants o medicació per a l’os. No deixis cap medicament pel teu compte.',
        'Si vens per dolor, anota quan va començar i què el provoca. Indica també si hi ha inflor o febre. Si necessites canviar la cita, avisa amb la màxima antelació possible.',
      ],
      items: [
        'Adreça: carrer Major, 74-76, 3r 3a, 25007 Lleida.',
        '<a href="https://maps.google.com/?q=Carrer+Major+74-76,+25007+Lleida" target="_blank" rel="noopener">Obre la ubicació a Google Maps</a>.',
        'Horari: dilluns a divendres de 9 a 20 h i dissabtes de 9 a 14 h.',
        'Telèfon de recepció: <a href="tel:+34973268826">973 26 88 26</a>.',
      ],
    },
    {
      title: 'Després de la visita: seguiment i contacte',
      paragraphs: [
        'La freqüència de revisió depèn de les teves genives, el risc de càries, els hàbits i els tractaments previs. Una persona amb implants o periodontitis pot necessitar controls diferents. Revisem els canvis per decidir quan tractar i quan observar.',
        'Pots demanar contacte pel <a href="/seus.html#contacte-carrera">formulari de Lleida</a> o per <a href="https://wa.me/34615983352" target="_blank" rel="noopener">WhatsApp de recepció</a>. La sol·licitud no substitueix una visita ni confirma una cita fins que recepció la concreti. Evita enviar dades clíniques sensibles per aquests canals.',
        'Per a una urgència dental, truca i valorarem la prioritat i la disponibilitat. No esperis una resposta del formulari si necessites atenció urgent. Davant d’una urgència vital, truca al 112.',
      ],
    },
  ],
  faqs: [
    { q: 'Quin conveni teniu amb el Carnet Jove?', a: 'A Lleida, amb el Carnet Jove, la primera visita i una neteja anual són gratuïtes i tens un 20% de descompte en la resta de serveis. Presenta el carnet a recepció.' },
    { q: 'On és la clínica de Lleida?', a: 'Al carrer Major, 74-76, 3r 3a, 25007 Lleida. Recomanem confirmar amb recepció qualsevol necessitat d’accés.' },
    { q: 'Què he de portar a la primera visita?', a: 'Medicació, antecedents rellevants i radiografies o informes recents si en tens. No cal repetir proves útils sense motiu.' },
    { q: 'Puc demanar cita per WhatsApp?', a: 'Sí, com a canal de contacte. Evita enviar-hi dades clíniques sensibles i no l’utilitzis per a emergències.' },
    { q: 'Ateneu urgències?', a: 'Contacta per telèfon perquè puguem valorar la prioritat i la disponibilitat. Davant d’una urgència vital, truca al 112.' },
  ],
  location: { id: 'lleida' },
  related: [
    { href: '/implants-dentals.html', type: 'Tractament', label: 'Implants dentals a Lleida' },
    { href: '/ortodoncia.html', type: 'Tractament', label: 'Ortodòncia a Lleida' },
    { href: '/atm-bruxisme.html', type: 'Tractament', label: 'ATM i bruxisme a Lleida' },
  ],
  sources: [
    { href: 'https://www.who.int/news-room/fact-sheets/detail/oral-health', label: 'OMS: salut oral' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['es-lleida'] = locationPage('es', {
  path: 'es/clinica-dental-lleida.html', alternatePath: 'clinica-dental-lleida.html', city: 'Lleida',
  dateModified: '2026-09-21', updatedLabel: '21 de septiembre de 2026',
  title: 'Dentista en Lleida | Clínica dental Estudi Dental Carrera',
  description: 'Dentistas en Lleida: clínica dental en carrer Major para diagnóstico, prevención y tratamientos coordinados. Conoce al equipo y pide una primera visita.',
  eyebrow: 'Dentistas en carrer Major, Lleida', h1: 'Clínica dental en Lleida: diagnóstico y tratamientos coordinados',
  lead: 'Nuestro equipo de dentistas en Lleida reúne diagnóstico, prevención y seguimiento en un mismo espacio, con un plan explicado antes de empezar cualquier tratamiento.',
  image: 'assets/img/lleida-edifici.webp', imageWidth: 1333, imageHeight: 2000, imageAlt: 'Edificio de la clínica Estudi Dental Carrera en el carrer Major de Lleida',
  introTitle: 'Tu clínica dental en Lleida, con tiempo para explicar',
  intro: [
    'Estudi Dental Carrera es una clínica dental en el centro de Lleida, en carrer Major, 74-76, 3.º 3.ª. Hacemos visitas de diagnóstico, prevención y tratamiento. Antes de sustituir o mover un diente, valoramos qué podemos conservar y qué beneficio tendría cada paso.',
    'Si el caso necesita varios profesionales, ordenamos las visitas entre el equipo. Puede hacer falta tratar las encías antes de poner una prótesis o revisar la mordida antes de restaurar un diente. Te explicamos qué proponemos, en qué orden y por qué.',
  ],
  aside: 'Dirección: carrer Major, 74-76, 3.º 3.ª, 25007 Lleida. Teléfono: 973 26 88 26. Horario: lunes a viernes 9–20 h; sábados 9–14 h. Domingos, cerrado. Consulta con recepción cualquier necesidad de acceso.',
  sections: [
    {
      title: 'Qué tratamientos podemos valorar en Lleida',
      paragraphs: [
        'Hacemos revisiones, diagnóstico de caries y desgaste, restauraciones, prótesis y cirugía oral. La exploración nos ayuda a decidir qué necesitas. No todas las técnicas son adecuadas para todas las personas.',
        'Puedes ampliar la información según el motivo de tu consulta:',
      ],
      items: [
        'Si falta un diente: <a href="/es/implantes-dentales.html">implantes y sus alternativas</a>.',
        'Si quieres corregir la posición de los dientes: <a href="/es/ortodoncia.html#ortodoncia-invisible">ortodoncia invisible o brackets</a>.',
        'Si sangran las encías: <a href="/es/periodoncia-endodoncia.html#periodoncia">valoración periodontal</a>.',
        'Si buscas una higiene: <a href="/es/periodoncia-endodoncia.html#limpieza-dental">limpieza dental y salud de las encías</a>.',
        'Si duele un diente: <a href="/es/periodoncia-endodoncia.html#endodoncia">valoración y tratamiento de endodoncia cuando está indicado</a>.',
        'Si hay tensión o dolor de mandíbula: <a href="/es/atm-bruxismo.html">valoración de ATM y bruxismo</a>.',
        'Si quieres aclarar el color de los dientes: <a href="/es/estetica-dental.html#blanqueamiento">blanqueamiento dental</a>.',
        'Si quieres revisar la forma o un borde: <a href="/es/estetica-dental.html#carillas">carillas y composite</a>.',
      ],
    },
    {
      title: 'Profesionales del equipo de Lleida',
      paragraphs: [
        'Puedes conocer la dedicación y la trayectoria de los profesionales antes de pedir visita. Si el caso combina varias necesidades, el equipo coordina las distintas áreas.',
      ],
      items: [
        '<a href="/es/equipo.html#joan-carrera-carrillo">Dr. Joan Carrera Carrillo</a>: implantología y cirugía oral.',
        '<a href="/es/equipo.html#albert-vim">Dr. Albert Vim</a>: periodoncia y rehabilitación oral.',
        '<a href="/es/equipo.html#isabel-sierra">Dra. Isabel Sierra</a>: endodoncia, prótesis y rehabilitación oral mínimamente invasiva.',
        '<a href="/es/equipo.html#carme-roure">Dra. Carme Roure Miquel</a>: ortodoncia, disfunción craneomandibular y bruxismo.',
      ],
    },
    {
      title: 'Qué ocurre en la primera visita',
      paragraphs: [
        'Empezamos por escucharte y revisar tu salud general, la medicación y las pruebas que ya tengas. Después exploramos la boca. Solo proponemos radiografías o escáneres si pueden ayudar a decidir el diagnóstico o el plan.',
        'Si hay dolor, inflamación o una fractura, buscamos primero el origen. Si vienes por prevención o estética, revisamos igualmente dientes y encías. A veces hay que controlar una caries o una inflamación antes de empezar otro tratamiento.',
        'Al final explicamos qué hemos encontrado y qué opciones tienes. Comparamos beneficios, riesgos, tiempos y mantenimiento. Si observar o una alternativa más sencilla son razonables, también lo hablamos. El presupuesto corresponde al plan acordado; si aparecen datos nuevos, revisamos contigo los cambios.',
      ],
    },
    {
      title: 'Cómo preparar la visita y llegar a la clínica',
      paragraphs: [
        'Estamos en carrer Major, 74-76, 3.º 3.ª, en el centro de Lleida. La clínica está en una planta superior. Consulta con recepción cualquier necesidad de acceso, acompañamiento o adaptación al pedir cita.',
        'Trae la lista de medicación y, si los tienes, informes o radiografías recientes. Explica si tienes alergias, diabetes, embarazo u otra condición relevante. Indica si tomas anticoagulantes o medicación para el hueso. No dejes ningún medicamento por tu cuenta.',
        'Si vienes por dolor, anota cuándo empezó y qué lo provoca. Indica también si hay hinchazón o fiebre. Si necesitas cambiar la cita, avisa con la mayor antelación posible.',
      ],
      items: [
        'Dirección: carrer Major, 74-76, 3.º 3.ª, 25007 Lleida.',
        '<a href="https://maps.google.com/?q=Carrer+Major+74-76,+25007+Lleida" target="_blank" rel="noopener">Abre la ubicación en Google Maps</a>.',
        'Horario: lunes a viernes de 9 a 20 h y sábados de 9 a 14 h.',
        'Teléfono de recepción: <a href="tel:+34973268826">973 26 88 26</a>.',
      ],
    },
    {
      title: 'Después de la visita: seguimiento y contacto',
      paragraphs: [
        'La frecuencia de revisión depende de tus encías, el riesgo de caries, los hábitos y los tratamientos previos. Una persona con implantes o periodontitis puede necesitar controles distintos. Revisamos los cambios para decidir cuándo tratar y cuándo observar.',
        'Puedes pedir contacto por el <a href="/es/sedes.html#contacto-carrera">formulario de Lleida</a> o por <a href="https://wa.me/34615983352" target="_blank" rel="noopener">WhatsApp de recepción</a>. La solicitud no sustituye una visita ni confirma una cita hasta que recepción la concrete. Evita enviar datos clínicos sensibles por estos canales.',
        'Para una urgencia dental, llama y valoraremos la prioridad y la disponibilidad. No esperes una respuesta del formulario si necesitas atención urgente. Ante una urgencia vital, llama al 112.',
      ],
    },
  ],
  faqs: [
    { q: '¿Qué convenio tenéis con el Carnet Jove?', a: 'En Lleida, con el Carnet Jove, la primera visita y una limpieza anual son gratuitas y tienes un 20% de descuento en el resto de servicios. Presenta el carnet en recepción.' },
    { q: '¿Dónde está la clínica de Lleida?', a: 'En carrer Major, 74-76, 3.º 3.ª, 25007 Lleida. Recomendamos confirmar con recepción cualquier necesidad de acceso.' },
    { q: '¿Qué debo llevar a la primera visita?', a: 'Medicación, antecedentes relevantes y radiografías o informes recientes si los tienes. No hace falta repetir pruebas útiles sin motivo.' },
    { q: '¿Puedo pedir cita por WhatsApp?', a: 'Sí, como canal de contacto. Evita enviar datos clínicos sensibles y no lo utilices para emergencias.' },
    { q: '¿Atendéis urgencias?', a: 'Contacta por teléfono para que podamos valorar la prioridad y la disponibilidad. Ante una urgencia vital, llama al 112.' },
  ],
  location: { id: 'lleida' },
  related: [
    { href: '/es/implantes-dentales.html', type: 'Tratamiento', label: 'Implantes dentales en Lleida' },
    { href: '/es/ortodoncia.html', type: 'Tratamiento', label: 'Ortodoncia en Lleida' },
    { href: '/es/atm-bruxismo.html', type: 'Tratamiento', label: 'ATM y bruxismo en Lleida' },
  ],
  sources: [
    { href: 'https://www.who.int/news-room/fact-sheets/detail/oral-health', label: 'OMS: salud oral' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['ca-tremp'] = locationPage('ca', {
  dateModified: '2026-09-18', updatedLabel: '18 de setembre de 2026',
  path: 'dentista-tremp.html', alternatePath: 'es/dentista-tremp.html', city: 'Tremp',
  title: 'Dentista i clínica dental a Tremp | Estudi Dental Carrera',
  description: 'Clínica dental a Tremp per al Pallars: prevenció, odontologia conservadora, implants, ortodòncia, genives, ATM i seguiment proper.',
  eyebrow: 'Carrer Montllobar, Tremp', h1: 'Clínica dental a Tremp per cuidar la salut oral al Pallars',
  lead: 'La nostra clínica dental a Tremp ofereix diagnòstic, tractament i seguiment al Pallars. Quan el cas ho necessita, coordinem les visites amb l’equip de Lleida.',
  image: 'assets/img/tremp-exterior.webp', imageWidth: 2200, imageHeight: 1466, imageAlt: 'Exterior de la clínica Estudi Dental Carrera a Tremp',
  introTitle: 'Atenció dental de proximitat, sense simplificar el diagnòstic',
  intro: [
    'La clínica és al carrer Montllobar, 22 baixos, 25620 Tremp, Lleida. Atenem persones de Tremp i del Pallars que volen una revisió o consultar un problema dental. Tenir la clínica a prop facilita els controls. A cada visita expliquem què veiem, què podem fer i què cal estudiar millor.',
    'La prioritat és conservar les dents i la seva funció amb el tractament que calgui. Si el cas necessita més d’un professional, coordinem les visites entre les dues clíniques. T’expliquem abans qualsevol desplaçament a Lleida i per què el proposem.',
  ],
  aside: 'Demana cita prèvia. Recepció confirmarà la disponibilitat i les necessitats d’accés abans de la visita.',
  sections: [
    {
      title: 'Què podem valorar a la clínica de Tremp',
      paragraphs: [
        'No cal que sàpigues quin tractament necessites per demanar una visita. Pots explicar què notes o què vols revisar. L’exploració i les proves que estiguin indicades ens ajudaran a proposar el pas següent.',
        'Si tens bruxisme o molèsties de mandíbula, comencem per estudiar-ne la causa.',
      ],
      items: [
        '<strong>Revisions, càries i dolor.</strong> Fem prevenció i valorem càries, dolor i reparacions de dents.',
        '<strong>Genives i conservació de dents.</strong> Valorem <a href="/periodoncia-endodoncia.html#periodoncia">la salut de les genives</a> i <a href="/periodoncia-endodoncia.html#endodoncia">l’endodòncia per conservar dents</a>.',
        '<strong>Dents absents, posició i estètica.</strong> Valorem pròtesis, <a href="/implants-dentals.html">implants dentals</a>, ortodòncia i estètica dental.',
      ],
    },
    {
      title: 'Com preparem la primera visita',
      paragraphs: [
        'Revisem el motiu de consulta, la salut general i la medicació. Porta radiografies o informes recents si en tens. Valorarem si encara són útils per no repetir proves sense motiu.',
        'Després d’explorar, ordenem les prioritats. Pot caldre controlar dolor o infecció, tractar les genives o una càries abans d’abordar un altre objectiu. No tots els passos s’han de fer alhora.',
        'Expliquem les alternatives, els riscos, el temps, el cost i el manteniment. També què implica esperar. A vegades observar amb controls és adequat; en altres casos, endarrerir pot complicar el problema. Ho decidim després d’estudiar el teu cas.',
      ],
    },
    {
      title: 'Quines visites es fan a Tremp i quan anar a Lleida',
      paragraphs: [
        'A la primera valoració definim les fases del tractament i quines visites es poden fer a Tremp. La tècnica i el professional adequats depenen del teu cas. Si una prova, un equip o un professional requereixen una visita a Lleida, t’expliquem el motiu abans de programar-la.',
        'Abans de cada desplaçament, confirma amb recepció la clínica, l’horari i què has de portar. Si vens d’una altra població del Pallars, comenta-ho quan demanis cita per coordinar les visites necessàries.',
      ],
      items: [
        'Consulta a quina clínica correspon cada cita.',
        'Confirma si has de portar alguna prova o informe.',
        'Comunica les necessitats d’accés o acompanyament.',
        'Per canviar una cita, truca al <a href="tel:+34973447534">973 44 75 34</a>.',
      ],
    },
    {
      title: 'Com cuidem la continuïtat del tractament',
      paragraphs: [
        'Els controls permeten revisar genives, desgast, empastaments, pròtesis i implants. La freqüència depèn de la higiene, el risc de càries, el tabac i els tractaments previs. Adaptem el pla als canvis que veiem.',
        'La prevenció inclou el raspallat, la neteja entre dents i la revisió de la dieta o de l’ús de fluor quan cal. Les necessitats canvien amb l’edat i la salut. Després d’un tractament, expliquem què has de vigilar i quan convé tornar.',
        'El formulari i WhatsApp no substitueixen una exploració ni són canals per enviar dades clíniques sensibles. Si hi ha dolor intens, inflamació, febre o un cop, truca per rebre orientació. Davant d’una urgència vital, truca al 112.',
      ],
    },
  ],
  faqs: [
    { q: 'Com puc demanar una primera visita a Tremp?', a: 'Pots trucar al 973 44 75 34, escriure per WhatsApp o enviar el formulari. Aquests missatges són una sol·licitud de contacte. La cita queda confirmada quan recepció concreta el dia, l’hora i la clínica.' },
    { q: 'On és la clínica de Tremp?', a: 'Al carrer Montllobar, 22 baixos, 25620 Tremp. Pots confirmar com arribar-hi i qualsevol necessitat d’accés amb recepció.' },
    { q: 'Ateneu persones d’altres poblacions del Pallars?', a: 'Sí. La planificació de visites s’adapta al tractament i, si cal coordinació amb Lleida, s’explica prèviament.' },
    { q: 'Puc enviar fotografies per WhatsApp per obtenir un diagnòstic?', a: 'WhatsApp és un canal de contacte, no substitueix una exploració ni és adequat per enviar dades clíniques sensibles sense indicació.' },
    { q: 'Com es gestiona una urgència dental?', a: 'Truca al 973 44 75 34 perquè puguem valorar prioritat i disponibilitat. Davant d’una urgència vital, truca al 112.' },
  ],
  location: { id: 'tremp' },
  related: [
    { href: '/ortodoncia.html', type: 'Guia', label: 'Ortodòncia: opcions i seguiment' },
    { href: '/atm-bruxisme.html', type: 'Guia', label: 'Dolor de mandíbula i bruxisme' },
    { href: '/equip.html#tremp', type: 'Guia', label: 'Coneix l’equip de Tremp' }
  ],
  sources: [
    { href: 'https://www.who.int/news-room/fact-sheets/detail/oral-health', label: 'OMS: salut oral' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['es-tremp'] = locationPage('es', {
  dateModified: '2026-09-18', updatedLabel: '18 de septiembre de 2026',
  path: 'es/dentista-tremp.html', alternatePath: 'dentista-tremp.html', city: 'Tremp',
  title: 'Dentista y clínica dental en Tremp | Estudi Dental Carrera',
  description: 'Clínica dental en Tremp para el Pallars: prevención, odontología conservadora, implantes, ortodoncia, encías, ATM y seguimiento cercano.',
  eyebrow: 'Carrer Montllobar, Tremp', h1: 'Clínica dental en Tremp para cuidar la salud oral en el Pallars',
  lead: 'Nuestra clínica dental en Tremp ofrece diagnóstico, tratamiento y seguimiento en el Pallars. Cuando el caso lo necesita, coordinamos las visitas con el equipo de Lleida.',
  image: 'assets/img/tremp-exterior.webp', imageWidth: 2200, imageHeight: 1466, imageAlt: 'Exterior de la clínica Estudi Dental Carrera en Tremp',
  introTitle: 'Atención dental de proximidad, sin simplificar el diagnóstico',
  intro: [
    'La clínica está en carrer Montllobar, 22, bajos, 25620 Tremp, Lleida. Atendemos a personas de Tremp y del Pallars que quieren una revisión o consultar un problema dental. Tener la clínica cerca facilita los controles. En cada visita explicamos qué vemos, qué podemos hacer y qué falta estudiar.',
    'La prioridad es conservar los dientes y su función con el tratamiento necesario. Si el caso requiere más de un profesional, coordinamos las visitas entre las dos clínicas. Te explicamos antes cualquier desplazamiento a Lleida y por qué lo proponemos.',
  ],
  aside: 'Pide cita previa. Recepción confirmará la disponibilidad y las necesidades de acceso antes de la visita.',
  sections: [
    {
      title: 'Qué podemos valorar en la clínica de Tremp',
      paragraphs: [
        'No hace falta que sepas qué tratamiento necesitas para pedir una visita. Puedes explicar qué notas o qué quieres revisar. La exploración y las pruebas que estén indicadas nos ayudarán a proponer el siguiente paso.',
        'Si tienes bruxismo o molestias de mandíbula, empezamos por estudiar la causa.',
      ],
      items: [
        '<strong>Revisiones, caries y dolor.</strong> Hacemos prevención y valoramos caries, dolor y reparaciones de dientes.',
        '<strong>Encías y conservación de dientes.</strong> Valoramos <a href="/es/periodoncia-endodoncia.html#periodoncia">la salud de las encías</a> y <a href="/es/periodoncia-endodoncia.html#endodoncia">la endodoncia para conservar dientes</a>.',
        '<strong>Dientes ausentes, posición y estética.</strong> Valoramos prótesis, <a href="/es/implantes-dentales.html">implantes dentales</a>, ortodoncia y estética dental.',
      ],
    },
    {
      title: 'Cómo preparamos tu primera visita',
      paragraphs: [
        'Revisamos el motivo de consulta, la salud general y la medicación. Trae radiografías o informes recientes si los tienes. Valoraremos si siguen siendo útiles para no repetir pruebas sin motivo.',
        'Después de explorar, ordenamos las prioridades. Puede hacer falta controlar dolor o infección, tratar las encías o una caries antes de abordar otro objetivo. No todos los pasos tienen que hacerse a la vez.',
        'Explicamos las alternativas, los riesgos, el tiempo, el coste y el mantenimiento. También qué implica esperar. A veces observar con controles es adecuado; en otros casos, retrasar puede complicar el problema. Lo decidimos después de estudiar tu caso.',
      ],
    },
    {
      title: 'Qué visitas se hacen en Tremp y cuándo ir a Lleida',
      paragraphs: [
        'En la primera valoración definimos las fases del tratamiento y qué visitas pueden hacerse en Tremp. La técnica y el profesional adecuados dependen de tu caso. Si una prueba, un equipo o un profesional requieren una visita a Lleida, te explicamos el motivo antes de programarla.',
        'Antes de cada desplazamiento, confirma con recepción la clínica, el horario y qué debes traer. Si vienes de otra población del Pallars, coméntalo al pedir cita para coordinar las visitas necesarias.',
      ],
      items: [
        'Consulta qué clínica corresponde a cada cita.',
        'Confirma si debes traer alguna prueba o informe.',
        'Comunica las necesidades de acceso o acompañamiento.',
        'Para cambiar una cita, llama al <a href="tel:+34973447534">973 44 75 34</a>.',
      ],
    },
    {
      title: 'Cómo cuidamos la continuidad del tratamiento',
      paragraphs: [
        'Los controles permiten revisar encías, desgaste, empastes, prótesis e implantes. Su frecuencia depende de la higiene, el riesgo de caries, el tabaco y los tratamientos previos. Adaptamos el plan a los cambios que vemos.',
        'La prevención incluye el cepillado, la limpieza entre dientes y la revisión de la dieta o del uso de flúor cuando hace falta. Las necesidades cambian con la edad y la salud. Tras un tratamiento, explicamos qué debes vigilar y cuándo conviene volver.',
        'El formulario y WhatsApp no sustituyen una exploración ni son canales para enviar datos clínicos sensibles. Si hay dolor intenso, inflamación, fiebre o un golpe, llama para recibir orientación. Ante una urgencia vital, llama al 112.',
      ],
    },
  ],
  faqs: [
    { q: '¿Cómo puedo pedir una primera visita en Tremp?', a: 'Puedes llamar al 973 44 75 34, escribir por WhatsApp o enviar el formulario. Estos mensajes son una solicitud de contacto. La cita queda confirmada cuando recepción concreta el día, la hora y la clínica.' },
    { q: '¿Dónde está la clínica de Tremp?', a: 'En carrer Montllobar, 22, bajos, 25620 Tremp. Puedes confirmar cómo llegar y cualquier necesidad de acceso con recepción.' },
    { q: '¿Atendéis a personas de otras poblaciones del Pallars?', a: 'Sí. La planificación de visitas se adapta al tratamiento y, si hace falta coordinación con Lleida, se explica previamente.' },
    { q: '¿Puedo enviar fotografías por WhatsApp para obtener un diagnóstico?', a: 'WhatsApp es un canal de contacto, no sustituye una exploración ni es adecuado para enviar datos clínicos sensibles sin indicación.' },
    { q: '¿Cómo se gestiona una urgencia dental?', a: 'Llama al 973 44 75 34 para que podamos valorar prioridad y disponibilidad. Ante una urgencia vital, llama al 112.' },
  ],
  location: { id: 'tremp' },
  related: [
    { href: '/es/ortodoncia.html', type: 'Guía', label: 'Ortodoncia: opciones y seguimiento' },
    { href: '/es/atm-bruxismo.html', type: 'Guía', label: 'Dolor de mandíbula y bruxismo' },
    { href: '/es/equipo.html#tremp', type: 'Guía', label: 'Conoce al equipo de Tremp' }
  ],
  sources: [
    { href: 'https://www.who.int/news-room/fact-sheets/detail/oral-health', label: 'OMS: salud oral' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

require('./service-enrichment').enrichPages(pages);
module.exports = { pages };
