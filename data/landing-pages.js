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

pages['ca-atm'] = servicePage('ca', {
  related: [
    { href: '/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental a Lleida' },
    { href: '/dentista-tremp.html', type: 'Clínica', label: 'Dentista a Tremp' },
    { href: '/equip.html#carme-roure', type: 'Equip', label: 'Dra. Carme Roure · Ortodòncia i ATM' }
  ],
  path: 'atm-bruxisme.html', alternatePath: 'es/atm-bruxismo.html',
  title: 'ATM i bruxisme a Lleida i Tremp | Estudi Dental Carrera',
  description: 'Valoració de dolor mandibular, sorolls, limitació d’obertura i bruxisme a Lleida i Tremp. Diagnòstic individual, opcions i seguiment.',
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
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
      title: 'Què valorem i què no es pot deduir a simple vista',
      paragraphs: [
        'Els sorolls articulars sense dolor ni limitació són freqüents i no sempre necessiten tractament. En canvi, un bloqueig recent, una obertura molt limitada, un canvi sobtat de la mossegada o un dolor que empitjora mereixen una valoració específica. També revisem cefalees, dolor d’oïda no explicat, traumatismes, artritis, apnees o medicació, perquè poden canviar el diagnòstic diferencial i la necessitat de coordinació amb altres professionals.',
        'En el bruxisme distingim, fins on és possible, l’activitat durant el son de l’hàbit d’apretar mentre estem desperts. No són exactament el mateix i poden requerir enfocaments diferents. Les marques a la llengua, la tensió muscular o el desgast poden orientar, però cap signe aïllat confirma intensitat, causa o evolució. Documentar els patrons i relacionar-los amb els símptomes és més útil que buscar una explicació única.',
        'Quan hi ha desgast dental, avaluem si està actiu, si també hi participen l’erosió àcida o altres factors i si la funció està compromesa. Protegir les dents pot ser un objectiu diferent de reduir el dolor. Explicar aquesta diferència evita esperar que una sola intervenció resolgui tots els aspectes alhora.',
      ],
    },
    {
      title: 'Opcions conservadores i fèrules: quan poden ajudar',
      paragraphs: [
        'Molts casos es comencen amb mesures reversibles: informació sobre el problema, descans temporal de sobrecàrregues, exercicis o fisioteràpia indicats, treball sobre hàbits diürns i mesures de son. La tria depèn del diagnòstic. No recomanem exercicis genèrics en fases agudes o davant d’un bloqueig sense haver explorat abans, perquè el mateix consell no és adequat per a totes les situacions.',
        'Una fèrula oclusal pot plantejar-se per protegir les dents, redistribuir càrregues o ajudar en determinats quadres, però no “cura” automàticament el bruxisme ni és apropiada en qualsevol disfunció temporomandibular. Cal dissenyar-la per a una indicació concreta, comprovar-ne l’ajust i revisar-ne l’ús. Les fèrules comprades sense diagnòstic poden adaptar-se malament i dificultar el control dels símptomes.',
        'Si detectem senyals que queden fora de l’àmbit dental, proposem coordinació amb medicina, fisioteràpia, unitats del son o altres especialitats. L’objectiu no és acumular tractaments, sinó decidir quin professional pot respondre millor cada pregunta i començar per les opcions menys invasives compatibles amb la situació.',
      ],
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
  related: [
    { href: '/es/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental en Lleida' },
    { href: '/es/dentista-tremp.html', type: 'Clínica', label: 'Dentista en Tremp' },
    { href: '/es/equipo.html#carme-roure', type: 'Equipo', label: 'Dra. Carme Roure · Ortodoncia y ATM' }
  ],
  trust: common.es.trust.map(item => item.title === 'Diagnóstico primero' ? { ...item, text: 'El tratamiento viene después de entender el problema' } : item),
  path: 'es/atm-bruxismo.html', alternatePath: 'atm-bruxisme.html',
  title: 'ATM y bruxismo en Lleida y Tremp | Estudi Dental Carrera',
  description: 'Valoración de dolor mandibular, ruidos, limitación de apertura y bruxismo en Lleida y Tremp. Diagnóstico individual, opciones y seguimiento.',
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
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
      title: 'Qué valoramos y qué no puede deducirse a simple vista',
      paragraphs: [
        'Los ruidos articulares sin dolor ni limitación son frecuentes y no siempre necesitan tratamiento. En cambio, un bloqueo reciente, una apertura muy limitada, un cambio brusco de la mordida o un dolor que empeora merecen una valoración específica. También revisamos cefaleas, dolor de oído no explicado, traumatismos, artritis, apneas o medicación, porque pueden cambiar el diagnóstico diferencial y la necesidad de coordinación con otros profesionales.',
        'En el bruxismo distinguimos, hasta donde es posible, la actividad durante el sueño del hábito de apretar mientras estamos despiertos. No son exactamente lo mismo y pueden requerir enfoques distintos. Las marcas en la lengua, la tensión muscular o el desgaste pueden orientar, pero ningún signo aislado confirma intensidad, causa o evolución. Documentar los patrones y relacionarlos con los síntomas es más útil que buscar una explicación única.',
        'Cuando existe desgaste dental, evaluamos si está activo, si también participan la erosión ácida u otros factores y si la función está comprometida. Proteger los dientes puede ser un objetivo diferente de reducir el dolor. Explicar esta diferencia evita esperar que una sola intervención resuelva todos los aspectos a la vez.',
      ],
    },
    {
      title: 'Opciones conservadoras y férulas: cuándo pueden ayudar',
      paragraphs: [
        'Muchos casos empiezan con medidas reversibles: información sobre el problema, reducción temporal de las sobrecargas, ejercicios o fisioterapia indicados, revisión de los hábitos diurnos y del sueño. La elección depende del diagnóstico. No recomendamos ejercicios genéricos en fases agudas o ante un bloqueo sin haber explorado antes, porque el mismo consejo no es adecuado para todas las situaciones.',
        'Una férula oclusal puede plantearse para proteger los dientes, redistribuir cargas o ayudar en determinados cuadros, pero no “cura” automáticamente el bruxismo ni es apropiada en cualquier disfunción temporomandibular. Debe diseñarse para una indicación concreta, comprobar su ajuste y revisar su uso. Las férulas compradas sin diagnóstico pueden adaptarse mal y dificultar el control de los síntomas.',
        'Si detectamos señales que quedan fuera del ámbito dental, proponemos coordinación con medicina, fisioterapia, unidades del sueño u otras especialidades. El objetivo no es acumular tratamientos, sino decidir qué profesional puede responder mejor a cada pregunta y empezar por las opciones menos invasivas compatibles con la situación.',
      ],
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
      title: 'Alternatives, riscos i decisions abans de la cirurgia',
      paragraphs: [
        'Abans d’extreure una dent revisem si encara es pot conservar amb un pronòstic raonable. Quan l’extracció és necessària, expliquem si convé esperar la cicatrització, preservar l’alvèol o col·locar l’implant en el mateix acte. “Implant immediat” descriu el moment de col·locació, no garanteix que es pugui carregar una dent fixa immediatament. Aquestes decisions depenen de l’estabilitat, la infecció, l’os, els teixits i les forces que rebrà.',
        'Entre els riscos hi ha infecció, sagnat, lesió d’estructures pròximes, falta d’integració, pèrdua d’os o complicacions de la pròtesi. El risc varia segons la zona i la persona. El tabac i una malaltia periodontal no controlada poden empitjorar el pronòstic. Explicar-ho no significa que hagi de passar, sinó que forma part del consentiment i permet reduir riscos modificables abans de començar.',
        'Quan falta os es poden considerar tècniques de regeneració, però no són automàtiques ni sempre aporten el mateix benefici. A vegades una pròtesi diferent, un implant més curt o no substituir una peça posterior pot ser una alternativa raonable. El pla compara complexitat, temps, manteniment i impacte funcional, no només la possibilitat tècnica de fer una cirurgia.',
      ],
    },
    {
      title: 'Cirurgia guiada, pròtesi i manteniment',
      paragraphs: [
        'La cirurgia guiada utilitza la planificació digital i una guia per traslladar una posició prevista a la boca. Pot aportar control en casos seleccionats, però requereix registres precisos i no elimina la necessitat de criteri clínic. Tampoc converteix qualsevol cas en un procediment sense incisions ni garanteix una recuperació concreta. La tècnica s’escull per la seva utilitat real en aquell cas.',
        'Després de la integració es dissenya la corona, el pont o la pròtesi. Comprovem l’ajust, la mossegada, la fonètica, l’estètica i l’accés per netejar. Una restauració difícil d’higienitzar pot donar problemes encara que l’implant estigui ben integrat. Per això ensenyem eines i tècniques adaptades i programem revisions segons el risc.',
        'Els implants no pateixen càries, però els teixits que els envolten poden inflamar-se i perdre suport. El sagnat, la supuració, el mal gust, la mobilitat o una molèstia persistent mereixen revisió. El manteniment professional no substitueix la higiene diària, i cap implant es pot presentar honestament com una solució “per sempre” sense controls.',
      ],
    },
  ],
  faqs: [
    { q: 'Com es calcula el preu del tractament?', a: 'El pressupost depèn del que necessiti el teu cas. A la primera visita valorem les opcions i expliquem les fases, els controls i el manteniment previstos. La primera visita és de pagament, excepte per a titulars del Carnet Jove a Lleida. Recepció pot confirmar-ne l’import, què inclou i els descomptes aplicables abans de reservar.' },
    { q: 'Tothom pot portar implants?', a: 'No. Cal valorar salut, medicació, os, genives, higiene, tabac i possibilitat de manteniment. També s’han de comparar alternatives.' },
    { q: 'Es pot posar implant i dent el mateix dia?', a: 'En casos seleccionats es pot plantejar càrrega immediata, però depèn de l’estabilitat i del risc. No es pot confirmar sense estudi.' },
    { q: 'Un implant dura tota la vida?', a: 'No es pot garantir. El pronòstic depèn de factors biològics, mecànics i del manteniment continuat.' },
    { q: 'Què passa si no hi ha prou os?', a: 'Es valoren regeneració, altres dissenys protètics o alternatives sense implant. La millor opció depèn de l’objectiu i del risc.' },
  ],
  serviceType: 'Planificació, cirurgia i rehabilitació amb implants dentals',
  sources: [
    { href: 'https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know', label: 'FDA: dental implants' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: informació per a pacients' },
  ],
});

pages['es-implants'] = servicePage('es', {
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
      title: 'Alternativas, riesgos y decisiones antes de la cirugía',
      paragraphs: [
        'Antes de extraer un diente revisamos si todavía puede conservarse con un pronóstico razonable. Cuando la extracción es necesaria, explicamos si conviene esperar la cicatrización, preservar el alveolo o colocar el implante en el mismo acto. “Implante inmediato” describe el momento de colocación, no garantiza que pueda cargarse un diente fijo inmediatamente. Estas decisiones dependen de la estabilidad, la infección, el hueso, los tejidos y las fuerzas que recibirá.',
        'Entre los riesgos están la infección, el sangrado, la lesión de estructuras próximas, la falta de integración, la pérdida de hueso o las complicaciones de la prótesis. El riesgo varía según la zona y la persona. El tabaco y una enfermedad periodontal no controlada pueden empeorar el pronóstico. Explicarlo no significa que tenga que ocurrir, sino que forma parte del consentimiento y permite reducir riesgos modificables antes de empezar.',
        'Cuando falta hueso pueden considerarse técnicas de regeneración, pero no son automáticas ni siempre aportan el mismo beneficio. A veces una prótesis distinta, un implante más corto o no sustituir una pieza posterior puede ser una alternativa razonable. El plan compara complejidad, tiempo, mantenimiento e impacto funcional, no solo la posibilidad técnica de realizar una cirugía.',
      ],
    },
    {
      title: 'Cirugía guiada, prótesis y mantenimiento',
      paragraphs: [
        'La cirugía guiada utiliza la planificación digital y una guía para trasladar una posición prevista a la boca. Puede aportar control en casos seleccionados, pero requiere registros precisos y no elimina la necesidad de criterio clínico. Tampoco convierte cualquier caso en un procedimiento sin incisiones ni garantiza una recuperación concreta. La técnica se elige por su utilidad real en ese caso.',
        'Después de la integración se diseña la corona, el puente o la prótesis. Comprobamos el ajuste, la mordida, la fonética, la estética y el acceso para limpiar. Una restauración difícil de higienizar puede dar problemas aunque el implante esté bien integrado. Por eso enseñamos herramientas y técnicas adaptadas y programamos revisiones según el riesgo.',
        'Los implantes no sufren caries, pero los tejidos que los rodean pueden inflamarse y perder soporte. El sangrado, la supuración, el mal sabor, la movilidad o una molestia persistente merecen revisión. El mantenimiento profesional no sustituye la higiene diaria, y ningún implante puede presentarse honestamente como una solución “para siempre” sin controles.',
      ],
    },
  ],
  faqs: [
    { q: '¿Cómo se calcula el precio del tratamiento?', a: 'El presupuesto depende de lo que necesite tu caso. En la primera visita valoramos las opciones y explicamos las fases, los controles y el mantenimiento previstos. La primera visita es de pago, excepto para titulares del Carnet Jove en Lleida. Recepción puede confirmar su importe, qué incluye y los descuentos aplicables antes de reservar.' },
    { q: '¿Todo el mundo puede llevar implantes?', a: 'No. Hay que valorar salud, medicación, hueso, encías, higiene, tabaco y posibilidad de mantenimiento. También deben compararse alternativas.' },
    { q: '¿Se puede poner el implante y el diente el mismo día?', a: 'En casos seleccionados puede plantearse carga inmediata, pero depende de la estabilidad y del riesgo. No puede confirmarse sin estudio.' },
    { q: '¿Un implante dura toda la vida?', a: 'No puede garantizarse. El pronóstico depende de factores biológicos, mecánicos y del mantenimiento continuado.' },
    { q: '¿Qué ocurre si no hay suficiente hueso?', a: 'Se valoran regeneración, otros diseños protésicos o alternativas sin implante. La mejor opción depende del objetivo y del riesgo.' },
  ],
  serviceType: 'Planificación, cirugía y rehabilitación con implantes dentales',
  sources: [
    { href: 'https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know', label: 'FDA: dental implants' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: información para pacientes' },
  ],
});

pages['ca-ortho'] = servicePage('ca', {
  related: [
    { href: '/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental a Lleida' },
    { href: '/dentista-tremp.html', type: 'Clínica', label: 'Dentista a Tremp' },
    { href: '/equip.html#carme-roure', type: 'Equip', label: 'Dra. Carme Roure · Ortodòncia i ATM' }
  ],
  path: 'ortodoncia.html', alternatePath: 'es/ortodoncia.html',
  title: 'Ortodòncia a Lleida i Tremp | Estudi Dental Carrera',
  description: 'Ortodòncia amb alineadors o aparells a Lleida i Tremp. Estudi individual de mossegada, salut periodontal, alternatives i retenció.',
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
  eyebrow: 'Ortodòncia en infants, adolescents i adults', h1: 'Ortodòncia a Lleida i Tremp: alineadors i brackets',
  lead: 'L’ortodòncia pot millorar posició, funció i higiene, però necessita un diagnòstic complet, expectatives realistes i una fase de retenció planificada des del principi.',
  image: 'assets/img/serveis/ortodoncia-model.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Model digital utilitzat per planificar un tractament d’ortodòncia',
  introTitle: 'Alineadors i brackets són eines, no diagnòstics',
  intro: [
    'A la clínica dental estudiem l’ortodòncia a Lleida i Tremp. Primer parlem del que vols corregir: dents apinyades, espais o dificultats en mossegar. Revisem les genives, l’os i les càries abans de moure les dents. En infants i adolescents, també tenim en compte el creixement.',
    'Els alineadors transparents i els brackets són eines diferents. Per escollir, valorem els moviments necessaris, la higiene i les hores d’ús. Alguns casos necessiten coordinar l’ortodòncia amb altres tractaments. T’expliquem les fases i com mantindrem la posició de les dents quan acabem.',
  ],
  sections: [
    {
      title: 'L’estudi d’ortodòncia i les opcions possibles',
      paragraphs: [
        'L’estudi pot incloure fotografies, registres digitals, radiografies justificades i anàlisi de la mossegada i del perfil. No es tracta de generar una simulació atractiva, sinó d’identificar límits biològics i objectius mesurables. En infants i adolescents també valorem el creixement i el moment adequat per intervenir. Tractar abans no sempre significa tractar millor; depèn del problema que es vulgui modificar.',
        'Expliquem les alternatives raonables, inclosa l’opció de no tractar si no hi ha un benefici clar. Alguns plans poden requerir crear espai amb desgast interproximal, expansió o extraccions; altres no. Aquestes decisions no es poden generalitzar a partir d’una fotografia. Cal entendre com afecten el perfil, l’estabilitat, les arrels, les genives i la durada.',
        'En adults amb pèrdua de suport periodontal, restauracions extenses o dents absents, el moviment pot continuar sent possible, però requereix un control específic i coordinació. L’objectiu pot ser facilitar una higiene millor, preparar un espai protètic o distribuir forces, i no necessàriament perseguir una alineació idealitzada.',
      ],
    },
    {
      title: 'Durant el tractament i després: higiene i retenció',
      paragraphs: [
        'Amb qualsevol aparell, la higiene és essencial. La placa al voltant dels brackets o dels ancoratges dels alineadors pot afavorir inflamació gingival i desmineralitzacions. Revisem la tècnica, recomanem eines adaptades i coordinem higienes quan cal. Els alineadors s’han de portar les hores indicades i netejar correctament; si no hi ha prou ús, els moviments poden no seguir el pla.',
        'És normal notar pressió o sensibilitat temporal després d’alguns canvis, però dolor intens, ferides persistents, un aparell trencat o moviments imprevistos s’han de comunicar. Els controls permeten comprovar que dents i teixits responen de manera segura. De vegades cal refinar el pla, canviar auxiliars o allargar terminis; no és prudent prometre una data exacta abans de veure l’evolució.',
        'Quan acaba el moviment actiu, les dents tenen tendència a canviar. La retenció, fixa o removible segons el cas, ajuda a mantenir el resultat, però també necessita controls i manteniment. Si un retenidor es desenganxa, deixa d’ajustar o es perd, convé revisar-lo aviat. La retenció no és un detall final: forma part del tractament des del primer dia.',
      ],
    },
  ],
  faqs: [
    { q: 'Com es calcula el preu del tractament?', a: 'El pressupost depèn del que necessiti el teu cas. A la primera visita valorem les opcions i expliquem les fases, els controls i el manteniment previstos. La primera visita és de pagament, excepte per a titulars del Carnet Jove a Lleida. Recepció pot confirmar-ne l’import, què inclou i els descomptes aplicables abans de reservar.' },
    { q: 'Alineadors o brackets: què és millor?', a: 'Depèn dels moviments necessaris, la higiene, la col·laboració i els objectius. Cap sistema és universalment millor.' },
    { q: 'Quant dura una ortodòncia?', a: 'La durada varia segons la complexitat, la resposta biològica i el compliment. Només es pot estimar després de l’estudi.' },
    { q: 'Es pot fer ortodòncia amb malaltia periodontal?', a: 'Pot ser possible si la inflamació està controlada i hi ha seguiment periodontal específic. Requereix valoració coordinada.' },
    { q: 'Cal portar retenidors per sempre?', a: 'La necessitat i el tipus varien, però mantenir la posició sol requerir retenció a llarg termini i controls.' },
  ],
  serviceType: 'Diagnòstic i tractament d’ortodòncia amb alineadors i aparells fixos',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/braces/', label: 'NHS: braces and orthodontics' },
    { href: 'https://www.sedo.es/', label: 'Sociedad Española de Ortodoncia' },
  ],
});

pages['es-ortho'] = servicePage('es', {
  related: [
    { href: '/es/clinica-dental-lleida.html', type: 'Clínica', label: 'Clínica dental en Lleida' },
    { href: '/es/dentista-tremp.html', type: 'Clínica', label: 'Dentista en Tremp' },
    { href: '/es/equipo.html#carme-roure', type: 'Equipo', label: 'Dra. Carme Roure · Ortodoncia y ATM' }
  ],
  path: 'es/ortodoncia.html', alternatePath: 'ortodoncia.html',
  title: 'Ortodoncia en Lleida y Tremp | Estudi Dental Carrera',
  description: 'Ortodoncia con alineadores o aparatos en Lleida y Tremp. Estudio individual de mordida, salud periodontal, alternativas y retención.',
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
  eyebrow: 'Ortodoncia en niños, adolescentes y adultos', h1: 'Ortodoncia en Lleida y Tremp: alineadores y brackets',
  lead: 'La ortodoncia puede mejorar posición, función e higiene, pero necesita un diagnóstico completo, expectativas realistas y una fase de retención planificada desde el principio.',
  image: 'assets/img/serveis/ortodoncia-model.webp', imageWidth: 1280, imageHeight: 1600, imageAlt: 'Modelo digital utilizado para planificar un tratamiento de ortodoncia',
  introTitle: 'Alineadores y brackets son herramientas, no diagnósticos',
  intro: [
    'En la clínica dental estudiamos la ortodoncia en Lleida y Tremp. Primero hablamos de lo que quieres corregir: dientes apiñados, espacios o dificultades al morder. Revisamos las encías, el hueso y las caries antes de mover los dientes. En niños y adolescentes, también tenemos en cuenta el crecimiento.',
    'Los alineadores transparentes y los brackets son herramientas distintas. Para elegir, valoramos los movimientos necesarios, la higiene y las horas de uso. Algunos casos necesitan coordinar la ortodoncia con otros tratamientos. Te explicamos las fases y cómo mantendremos la posición de los dientes al terminar.',
  ],
  sections: [
    {
      title: 'El estudio de ortodoncia y las opciones posibles',
      paragraphs: [
        'El estudio puede incluir fotografías, registros digitales, radiografías justificadas y análisis de la mordida y del perfil. No se trata de generar una simulación atractiva, sino de identificar límites biológicos y objetivos medibles. En niños y adolescentes también valoramos el crecimiento y el momento adecuado para intervenir. Tratar antes no siempre significa tratar mejor; depende del problema que se quiera modificar.',
        'Explicamos las alternativas razonables, incluida la opción de no tratar si no existe un beneficio claro. Algunos planes pueden requerir crear espacio con desgaste interproximal, expansión o extracciones; otros no. Estas decisiones no pueden generalizarse a partir de una fotografía. Hay que entender cómo afectan al perfil, la estabilidad, las raíces, las encías y la duración.',
        'En adultos con pérdida de soporte periodontal, restauraciones extensas o dientes ausentes, el movimiento puede seguir siendo posible, pero requiere un control específico y coordinación. El objetivo puede ser facilitar una mejor higiene, preparar un espacio protésico o distribuir fuerzas, y no necesariamente perseguir una alineación idealizada.',
      ],
    },
    {
      title: 'Durante el tratamiento y después: higiene y retención',
      paragraphs: [
        'Con cualquier aparato, la higiene es esencial. La placa alrededor de brackets o aditamentos de los alineadores puede favorecer inflamación gingival y desmineralizaciones. Revisamos la técnica, recomendamos herramientas adaptadas y coordinamos las limpiezas dentales cuando es necesario. Los alineadores deben llevarse las horas indicadas y limpiarse correctamente; si no se usan el tiempo necesario, los movimientos pueden no seguir el plan.',
        'Es normal notar presión o sensibilidad temporal después de algunos cambios, pero el dolor intenso, las heridas persistentes, un aparato roto o movimientos imprevistos deben comunicarse. Los controles permiten comprobar que dientes y tejidos responden de forma segura. A veces hay que refinar el plan, cambiar auxiliares o alargar plazos; no es prudente prometer una fecha exacta antes de ver la evolución.',
        'Cuando termina el movimiento activo, los dientes tienden a cambiar. La retención, fija o removible según el caso, ayuda a mantener el resultado, pero también necesita controles y mantenimiento. Si un retenedor se despega, deja de ajustar o se pierde, conviene revisarlo pronto. La retención no es un detalle final: forma parte del tratamiento desde el primer día.',
      ],
    },
  ],
  faqs: [
    { q: '¿Cómo se calcula el precio del tratamiento?', a: 'El presupuesto depende de lo que necesite tu caso. En la primera visita valoramos las opciones y explicamos las fases, los controles y el mantenimiento previstos. La primera visita es de pago, excepto para titulares del Carnet Jove en Lleida. Recepción puede confirmar su importe, qué incluye y los descuentos aplicables antes de reservar.' },
    { q: '¿Alineadores o brackets: qué es mejor?', a: 'Depende de los movimientos necesarios, la higiene, la colaboración y los objetivos. Ningún sistema es universalmente mejor.' },
    { q: '¿Cuánto dura una ortodoncia?', a: 'La duración varía según la complejidad, la respuesta biológica y el cumplimiento. Solo puede estimarse después del estudio.' },
    { q: '¿Puede hacerse ortodoncia con enfermedad periodontal?', a: 'Puede ser posible si la inflamación está controlada y existe seguimiento periodontal específico. Requiere valoración coordinada.' },
    { q: '¿Hay que llevar retenedores para siempre?', a: 'La necesidad y el tipo varían, pero mantener la posición suele requerir retención a largo plazo y controles.' },
  ],
  serviceType: 'Diagnóstico y tratamiento de ortodoncia con alineadores y aparatos fijos',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/braces/', label: 'NHS: braces and orthodontics' },
    { href: 'https://www.sedo.es/', label: 'Sociedad Española de Ortodoncia' },
  ],
});

pages['ca-perio'] = servicePage('ca', {
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
  path: 'periodoncia-endodoncia.html', alternatePath: 'es/periodoncia-endodoncia.html',
  title: 'Periodòncia i endodòncia a Lleida i Tremp | Estudi Dental',
  description: 'Diagnòstic i tractament de genives, periodontitis, dolor pulpar i endodòncia a Lleida i Tremp, amb seguiment i manteniment individual.',
  eyebrow: 'Conservar dents i teixits', h1: 'Periodòncia i endodòncia a Lleida i Tremp',
  lead: 'El sagnat de genives i el dolor dental no s’han de normalitzar. Identificar si el problema ve dels teixits de suport, de la polpa o d’una altra causa permet actuar amb més precisió.',
  image: 'assets/img/headers/hero-serveis.webp', imageWidth: 2200, imageHeight: 942, imageAlt: 'Gabinet d’Estudi Dental Carrera preparat per a tractaments conservadors',
  introTitle: 'Dues àrees diferents amb un objectiu compartit',
  intro: [
    'A la nostra clínica dental, valorem tractaments de periodòncia a Lleida i Tremp. La periodòncia tracta les genives i els teixits que sostenen les dents. L’endodòncia tracta l’interior de la dent quan la polpa està inflamada o infectada. Poden donar símptomes semblants, com sensibilitat, dolor en mastegar o molèsties localitzades, però el tractament no és el mateix. Explorar, fer proves de sensibilitat i interpretar radiografies quan estan indicades ajuda a diferenciar-ne l’origen.',
    'Conservar una dent és una prioritat quan el pronòstic ho permet, però no qualsevol dent es pot salvar ni qualsevol endodòncia o tractament periodontal és justificable. Valorem quant teixit queda, el suport ossi, les fractures, la possibilitat de restaurar, la higiene i el valor funcional de la peça. L’objectiu no és allargar tractaments sense límit, sinó prendre una decisió proporcionada.',
  ],
  sections: [
    {
      title: 'Genives: de la gingivitis a la periodontitis',
      paragraphs: [
        'La gingivitis és una inflamació superficial relacionada habitualment amb placa i pot provocar sagnat, envermelliment o inflor. La periodontitis implica pèrdua dels teixits de suport i pot avançar amb pocs símptomes. El sagnat repetit, la retracció, la mobilitat, el mal alè persistent o espais que canvien mereixen una exploració. Fumar pot emmascarar el sagnat i alhora augmentar el risc.',
        'L’estudi periodontal registra profunditats, sagnat, mobilitat, recessions i, quan cal, el nivell ossi. El tractament inicial acostuma a combinar instruccions d’higiene i eliminació professional de dipòsits per sobre i per sota de la geniva. Després es reavalua la resposta; algunes zones poden necessitar tractament addicional o cirurgia, però no s’ha de decidir abans de comprovar què ha millorat amb la fase inicial.',
        'El manteniment és part del tractament periodontal. La freqüència es personalitza segons risc, tabac, control de placa, diabetis, profunditats residuals i antecedents. Una higiene puntual no substitueix aquest seguiment quan hi ha periodontitis. També revisem els implants, perquè poden patir inflamació dels teixits que els envolten.',
      ],
    },
    {
      title: 'Endodòncia: quan l’interior de la dent està afectat',
      paragraphs: [
        'Càries profundes, fractures o traumatismes poden inflamar o infectar la polpa. El dolor espontani, la sensibilitat prolongada al fred o la calor, el dolor en mossegar, un canvi de color o una inflamació poden orientar, però també hi ha infeccions sense dolor. Les proves clíniques i radiogràfiques ajuden a decidir si cal endodòncia, una restauració, observació o una altra actuació.',
        'Durant l’endodòncia s’accedeix als conductes, es netegen i es desinfecten abans de segellar-los. L’anatomia interna pot ser complexa, i cap procediment pot garantir la desaparició de tots els microorganismes. Després cal reconstruir la dent perquè resisteixi les forces i quedi ben segellada. Endarrerir aquesta restauració pot augmentar el risc de fractura o filtració.',
        'Una dent endodonciada pot necessitar controls. Si persisteix o reapareix una lesió, es valora el retratament, la cirurgia apical o l’extracció segons la causa i la possibilitat de restaurar. Els antibiòtics no substitueixen el tractament local d’una infecció dental i no s’indiquen de manera rutinària; es consideren quan hi ha criteris clínics i afectació sistèmica.',
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
    { href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/', label: 'NHS: root canal treatment' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: salut periodontal' },
  ],
});

pages['es-perio'] = servicePage('es', {
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
  path: 'es/periodoncia-endodoncia.html', alternatePath: 'periodoncia-endodoncia.html',
  title: 'Periodoncia y endodoncia en Lleida y Tremp | Estudi Dental',
  description: 'Diagnóstico y tratamiento de encías, periodontitis, dolor pulpar y endodoncia en Lleida y Tremp, con seguimiento y mantenimiento individual.',
  eyebrow: 'Conservar dientes y tejidos', h1: 'Periodoncia y endodoncia en Lleida y Tremp',
  lead: 'El sangrado de encías y el dolor dental no deben normalizarse. Identificar si el problema procede de los tejidos de soporte, de la pulpa o de otra causa permite actuar con mayor precisión.',
  image: 'assets/img/headers/hero-serveis.webp', imageWidth: 2200, imageHeight: 942, imageAlt: 'Gabinete de Estudi Dental Carrera preparado para tratamientos conservadores',
  introTitle: 'Dos áreas distintas con un objetivo compartido',
  intro: [
    'En nuestra clínica dental valoramos tratamientos de periodoncia en Lleida y Tremp. La periodoncia trata las encías y los tejidos que sostienen los dientes. La endodoncia trata el interior del diente cuando la pulpa está inflamada o infectada. Pueden producir síntomas parecidos, como sensibilidad, dolor al masticar o molestias localizadas, pero el tratamiento no es el mismo. Explorar, realizar pruebas de sensibilidad e interpretar radiografías cuando están indicadas ayuda a diferenciar su origen.',
    'Conservar un diente es prioritario cuando el pronóstico lo permite, pero no cualquier pieza puede salvarse ni cualquier endodoncia o tratamiento periodontal está justificado. Valoramos cuánto tejido queda, el soporte óseo, las fracturas, la posibilidad de restaurar, la higiene y el valor funcional de la pieza. El objetivo no es prolongar tratamientos sin límite, sino tomar una decisión proporcionada.',
  ],
  sections: [
    {
      title: 'Encías: de la gingivitis a la periodontitis',
      paragraphs: [
        'La gingivitis es una inflamación superficial relacionada habitualmente con placa y puede provocar sangrado, enrojecimiento o hinchazón. La periodontitis implica pérdida de los tejidos de soporte y puede avanzar con pocos síntomas. El sangrado repetido, la retracción, la movilidad, el mal aliento persistente o espacios que cambian merecen una exploración. Fumar puede enmascarar el sangrado y al mismo tiempo aumentar el riesgo.',
        'El estudio periodontal registra profundidades, sangrado, movilidad, recesiones y, cuando hace falta, el nivel óseo. El tratamiento inicial suele combinar instrucciones de higiene y eliminación profesional de depósitos por encima y por debajo de la encía. Después se reevalúa la respuesta; algunas zonas pueden necesitar tratamiento adicional o cirugía, pero no debe decidirse antes de comprobar qué ha mejorado con la fase inicial.',
        'El mantenimiento forma parte del tratamiento periodontal. La frecuencia se personaliza según riesgo, tabaco, control de placa, diabetes, profundidades residuales y antecedentes. Una higiene puntual no sustituye este seguimiento cuando existe periodontitis. También revisamos los implantes, porque pueden sufrir inflamación de los tejidos que los rodean.',
      ],
    },
    {
      title: 'Endodoncia: cuando el interior del diente está afectado',
      paragraphs: [
        'Caries profundas, fracturas o traumatismos pueden inflamar o infectar la pulpa. El dolor espontáneo, la sensibilidad prolongada al frío o al calor, el dolor al morder, un cambio de color o una inflamación pueden orientar, pero también existen infecciones sin dolor. Las pruebas clínicas y radiográficas ayudan a decidir si hace falta endodoncia, una restauración, observación u otra actuación.',
        'Durante la endodoncia se accede a los conductos, se limpian y desinfectan antes de sellarlos. La anatomía interna puede ser compleja, y ningún procedimiento puede garantizar la desaparición de todos los microorganismos. Después hay que reconstruir el diente para que resista las fuerzas y quede bien sellado. Retrasar esta restauración puede aumentar el riesgo de fractura o filtración.',
        'Un diente endodonciado puede necesitar controles. Si persiste o reaparece una lesión, se valora el retratamiento, la cirugía apical o la extracción según la causa y la posibilidad de restaurar. Los antibióticos no sustituyen el tratamiento local de una infección dental y no se indican de forma rutinaria; se consideran cuando existen criterios clínicos y afectación sistémica.',
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
    { href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/', label: 'NHS: root canal treatment' },
    { href: 'https://www.efp.org/for-patients/home/', label: 'EFP: salud periodontal' },
  ],
});

pages['ca-aesthetic'] = servicePage('ca', {
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
  path: 'estetica-dental.html', alternatePath: 'es/estetica-dental.html',
  title: 'Estètica dental a Lleida i Tremp | Estudi Dental Carrera',
  description: 'Estètica dental a Lleida i Tremp amb diagnòstic, emblanquiment, restauracions i plans conservadors adaptats a la salut i al somriure.',
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
      title: 'Emblanquiment: indicació, límits i seguretat',
      paragraphs: [
        'L’emblanquiment pot aclarir dents naturals, però no canvia el color d’empastaments, corones o facetes. Abans cal descartar càries actives, fissures, sensibilitat no estudiada o inflamació gingival. També identifiquem taques que poden respondre de manera desigual. La concentració, el sistema i el temps s’adapten a la situació; més producte o més temps no equivalen automàticament a un millor resultat.',
        'La sensibilitat transitòria i la irritació de genives són efectes possibles. Cal seguir les indicacions i interrompre l’ús si apareixen molèsties importants. Els productes comprats sense supervisió varien en composició i ajust, i no permeten diagnosticar la causa del canvi de color. Durant l’embaràs o davant de determinades condicions, es pot recomanar ajornar el tractament.',
        'El resultat i la seva durada depenen del color inicial, l’estructura de la dent i hàbits com el tabac o el consum freqüent de begudes pigmentades. Poden caldre manteniments, però no s’han de fer de forma contínua sense revisió. Si hi ha una sola dent fosca després d’un traumatisme o una endodòncia, l’abordatge pot ser diferent.',
      ],
    },
    {
      title: 'Composite, facetes i planificació mínimament invasiva',
      paragraphs: [
        'El composite permet reparar vores, tancar alguns espais o modificar formes amb una preparació sovint reduïda. És reparable, però pot desgastar-se, pigmentar-se o necessitar poliment. Les facetes ceràmiques poden aportar estabilitat de color i forma en casos seleccionats, però acostumen a implicar una decisió menys reversible. La quantitat de teixit que cal preparar depèn de la posició, el color i l’objectiu.',
        'Abans de restaurar, valorem si l’ortodòncia, l’emblanquiment o un petit recontornejat permeten assolir l’objectiu conservant més estructura. De vegades una combinació gradual evita tractar dents que estan sanes. Quan es proposa una prova estètica o mock-up, serveix per conversar sobre proporcions i fonètica abans de prendre decisions definitives.',
        'Cap material és indestructible. Mossegar objectes, obrir envasos amb les dents, el bruxisme i una higiene insuficient poden afectar el resultat. Expliquem les cures, els controls i la possibilitat de manteniment o reparació. L’objectiu és que la persona entengui no només com pot quedar, sinó què exigeix conservar-ho. També revisem periòdicament les vores, el color, la mossegada i la salut de les genives per detectar canvis abans que es converteixin en un problema més gran.',
      ],
    },
  ],
  faqs: [
    { q: 'Com es calcula el preu del tractament?', a: 'El pressupost depèn del que necessiti el teu cas. A la primera visita valorem les opcions i expliquem les fases, els controls i el manteniment previstos. La primera visita és de pagament, excepte per a titulars del Carnet Jove a Lleida. Recepció pot confirmar-ne l’import, què inclou i els descomptes aplicables abans de reservar.' },
    { q: 'L’emblanquiment fa malbé l’esmalt?', a: 'Els sistemes indicats i supervisats tenen un perfil de seguretat conegut, però poden causar sensibilitat temporal i no són adequats en qualsevol situació.' },
    { q: 'Les corones i els empastaments s’emblanqueixen?', a: 'No. Els materials restauradors no canvien de color com la dent natural i pot caldre replantejar-los després.' },
    { q: 'Composite o ceràmica?', a: 'Depèn del teixit disponible, el canvi necessari, la mossegada, la reparabilitat i les preferències. Cal comparar avantatges i límits.' },
    { q: 'Es pot veure el resultat abans?', a: 'Fotografies, simulacions o proves poden ajudar a comunicar l’objectiu, però no garanteixen una reproducció exacta.' },
  ],
  serviceType: 'Diagnòstic i tractaments conservadors d’estètica dental',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/', label: 'NHS: teeth whitening' },
    { href: 'https://consejodentistas.es/informacion-publica/informacion-clinica/', label: 'Consejo General de Dentistas' },
  ],
});

pages['es-aesthetic'] = servicePage('es', {
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
  path: 'es/estetica-dental.html', alternatePath: 'estetica-dental.html',
  title: 'Estética dental en Lleida y Tremp | Estudi Dental Carrera',
  description: 'Estética dental en Lleida y Tremp con diagnóstico, blanqueamiento, restauraciones y planes conservadores adaptados a la salud y a la sonrisa.',
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
      title: 'Blanqueamiento: indicación, límites y seguridad',
      paragraphs: [
        'El blanqueamiento puede aclarar dientes naturales, pero no cambia el color de empastes, coronas o carillas. Antes hay que descartar caries activas, fisuras, sensibilidad no estudiada o inflamación gingival. También identificamos manchas que pueden responder de forma desigual. La concentración, el sistema y el tiempo se adaptan a la situación; más producto o más tiempo no equivalen automáticamente a un mejor resultado.',
        'La sensibilidad transitoria y la irritación de encías son efectos posibles. Hay que seguir las indicaciones e interrumpir el uso si aparecen molestias importantes. Los productos comprados sin supervisión varían en composición y ajuste, y no permiten diagnosticar la causa del cambio de color. Durante el embarazo o ante determinadas condiciones, puede recomendarse aplazar el tratamiento.',
        'El resultado y su duración dependen del color inicial, la estructura del diente y hábitos como el tabaco o el consumo frecuente de bebidas pigmentadas. Puede ser necesario un tratamiento de mantenimiento, pero no deben realizarse de forma continua sin revisión. Si existe un único diente oscuro tras un traumatismo o una endodoncia, el abordaje puede ser distinto.',
      ],
    },
    {
      title: 'Composite, carillas y planificación mínimamente invasiva',
      paragraphs: [
        'El composite permite reparar bordes, cerrar algunos espacios o modificar formas con una preparación a menudo reducida. Es reparable, pero puede desgastarse, pigmentarse o necesitar pulido. Las carillas cerámicas pueden aportar estabilidad de color y forma en casos seleccionados, pero suelen implicar una decisión menos reversible. La cantidad de tejido que debe prepararse depende de la posición, el color y el objetivo.',
        'Antes de restaurar, valoramos si la ortodoncia, el blanqueamiento o un pequeño recontorneado permiten alcanzar el objetivo conservando más estructura. A veces una combinación gradual evita tratar dientes sanos. Cuando se propone una prueba estética o mock-up, sirve para conversar sobre proporciones y fonética antes de tomar decisiones definitivas.',
        'Ningún material es indestructible. Morder objetos, abrir envases con los dientes, el bruxismo y una higiene insuficiente pueden afectar al resultado. Explicamos los cuidados, los controles y la posibilidad de mantenimiento o reparación. El objetivo es que la persona entienda no solo cómo puede quedar, sino qué cuidados necesita.',
      ],
    },
  ],
  faqs: [
    { q: '¿Cómo se calcula el precio del tratamiento?', a: 'El presupuesto depende de lo que necesite tu caso. En la primera visita valoramos las opciones y explicamos las fases, los controles y el mantenimiento previstos. La primera visita es de pago, excepto para titulares del Carnet Jove en Lleida. Recepción puede confirmar su importe, qué incluye y los descuentos aplicables antes de reservar.' },
    { q: '¿El blanqueamiento daña el esmalte?', a: 'Los sistemas indicados y supervisados tienen un perfil de seguridad conocido, pero pueden causar sensibilidad temporal y no son adecuados en cualquier situación.' },
    { q: '¿Las coronas y los empastes se blanquean?', a: 'No. Los materiales restauradores no cambian de color como el diente natural y puede ser necesario replantearlos después.' },
    { q: '¿Composite o cerámica?', a: 'Depende del tejido disponible, el cambio necesario, la mordida, la reparabilidad y las preferencias. Hay que comparar ventajas y límites.' },
    { q: '¿Puede verse el resultado antes?', a: 'Fotografías, simulaciones o pruebas pueden ayudar a comunicar el objetivo, pero no garantizan una reproducción exacta.' },
  ],
  serviceType: 'Diagnóstico y tratamientos conservadores de estética dental',
  sources: [
    { href: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/', label: 'NHS: teeth whitening' },
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
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
  title: 'Clínica dental a Lleida | Estudi Dental Carrera',
  description: 'Clínica dental al centre de Lleida. Odontologia conservadora, implants, ortodòncia, genives, ATM i estètica amb diagnòstic individual.',
  eyebrow: 'Carrer Major, Lleida', h1: 'Clínica dental a Lleida amb una mirada integral',
  lead: 'Al centre de Lleida, un equip coordinat per entendre el problema abans de proposar una solució. Primera visita, diagnòstic i seguiment en un mateix espai.',
  image: 'assets/img/lleida-edifici.webp', imageWidth: 1333, imageHeight: 2000, imageAlt: 'Edifici de la clínica Estudi Dental Carrera al carrer Major de Lleida',
  introTitle: 'Odontologia al centre de Lleida, amb temps per explicar',
  intro: [
    'Estudi Dental Carrera és una clínica dental al centre de Lleida, al carrer Major, 74-76, 3r 3a. Hi fem visites de diagnòstic, prevenció i tractament. Abans de substituir o moure una dent, valorem què podem conservar i quin benefici tindria cada pas.',
    'Si el cas necessita diversos professionals, ordenem les visites entre l’equip. Pot caldre tractar les genives abans de posar una pròtesi o revisar la mossegada abans de restaurar una dent. T’expliquem què proposem, en quin ordre i per què.',
  ],
  aside: 'Adreça: carrer Major, 74-76, 3r 3a, 25007 Lleida. Telèfon: 973 26 88 26. Horari: dilluns a divendres 9–20 h; dissabtes 9–14 h. Diumenges, tancat. Consulta amb recepció qualsevol necessitat d’accés.',
  sections: [
    {
      title: 'Què podem valorar a la clínica de Lleida',
      paragraphs: [
        'Fem revisions, diagnòstic de càries i desgast, odontologia restauradora, periodòncia, endodòncia, pròtesi, cirurgia oral i implants. També valorem ortodòncia en diferents edats, estètica dental, bruxisme i trastorns de l’articulació temporomandibular. Aquesta llista descriu àrees de treball; no implica que qualsevol tècnica sigui adequada per a qualsevol persona.',
        'Quan una visita comença per dolor, inflamació, una fractura o un canvi sobtat, primer busquem l’origen i prioritzem controlar el problema. Quan l’objectiu és preventiu o estètic, revisem igualment la salut de dents i genives abans de començar. Les radiografies o escàners s’indiquen segons la pregunta clínica i s’eviten si no poden aportar una decisió útil.',
        'La primera visita acaba amb una explicació de troballes i opcions. Alguns tractaments poden començar després d’una fase d’higiene o estabilització; altres necessiten estudi o coordinació. Si hi ha una alternativa més simple o l’observació és raonable, també forma part de la conversa. El pressupost correspon al pla acordat i pot canviar si apareixen dades que no eren visibles inicialment.',
      ],
    },
    {
      title: 'Com preparar la visita i arribar-hi',
      paragraphs: [
        'Porta la llista de medicació, antecedents rellevants i, si en tens, radiografies o informes recents. Explica si prens anticoagulants, medicació per a l’os, si tens al·lèrgies, embaràs, diabetis o altres condicions que puguin modificar l’atenció. No interrompis cap medicament pel teu compte. Si la visita és per dolor, anota quan va començar, què el desencadena i si hi ha inflamació o febre.',
        'La clínica es troba en una planta superior d’un edifici del carrer Major. Com que les condicions d’accés i aparcament poden canviar, recomanem confirmar amb recepció la millor opció segons mobilitat, transport o hora de la visita. Si necessites acompanyament, més temps per comunicar-te o alguna adaptació, indica-ho quan demanis cita perquè puguem preparar-la.',
        'Per anul·lar o canviar una cita, avisa amb la màxima antelació possible. El formulari web serveix per sol·licitar contacte, però no és un canal d’urgències ni per enviar dades clíniques sensibles. Davant d’una urgència vital, truca al 112. Per una urgència dental, contacta directament per telèfon perquè puguem orientar la prioritat.',
      ],
    },
    {
      title: 'Continuïtat, prevenció i decisions compartides',
      paragraphs: [
        'La prevenció no significa fer el mateix control a tothom. La freqüència de revisions i higienes depèn del risc de càries, la salut periodontal, l’edat, els hàbits i els tractaments previs. Una persona amb implants o antecedents de periodontitis pot necessitar controls diferents d’una persona amb risc baix. Ho definim després de veure l’evolució, no amb un calendari universal.',
        'Documentem el punt de partida amb els registres necessaris i revisem els canvis al llarg del temps. Aquesta continuïtat ajuda a detectar si una lesió està estable, si el desgast progressa o si un tractament necessita manteniment. També permet evitar intervencions precipitades quan observar és segur i actuar quan hi ha evidència de canvi.',
        'Volem que la persona entengui què està decidint. Expliquem beneficis, riscos, alternatives i conseqüències de no tractar quan són rellevants. No prometem resultats idèntics per a tothom ni utilitzem la tecnologia com a substitut d’aquesta conversa. L’objectiu és construir un pla assumible, revisable i coherent amb la salut a llarg termini.',
      ],
    },
  ],
  faqs: [
    { q: 'La primera visita és gratuïta?', a: 'La primera visita és de pagament. A Lleida, amb el Carnet Jove, la primera visita i una neteja anual són gratuïtes i tens un 20% de descompte en la resta de serveis. Presenta el carnet a recepció. Contacta amb recepció per confirmar què inclou abans de reservar.' },
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
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
  title: 'Clínica dental Lleida | Estudi Dental Carrera',
  description: 'Clínica dental en Lleida para diagnóstico, prevención, implantes, ortodoncia, encías, ATM y estética. Conoce al equipo y pide una primera visita.',
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
      title: 'Tratamientos dentales en Lleida que podemos valorar',
      paragraphs: [
        'Realizamos revisiones, diagnóstico de caries y desgaste, odontología restauradora, prótesis y cirugía oral. Puedes consultar cómo valoramos los <a href="/es/implantes-dentales.html">implantes dentales</a>, la <a href="/es/ortodoncia.html">ortodoncia</a>, la <a href="/es/periodoncia-endodoncia.html">periodoncia y la endodoncia</a>, la <a href="/es/estetica-dental.html">estética dental</a> y los problemas de <a href="/es/atm-bruxismo.html">ATM y bruxismo</a>. Esta lista describe áreas de trabajo; no implica que cualquier técnica sea adecuada para cualquier persona.',
        'Cuando una visita empieza por dolor, inflamación, una fractura o un cambio brusco, primero buscamos el origen y priorizamos controlar el problema. Cuando el objetivo es preventivo o estético, revisamos igualmente la salud de dientes y encías antes de empezar. Las radiografías o escáneres se indican según la pregunta clínica y se evitan si no pueden aportar una decisión útil.',
        'La primera visita termina con una explicación de hallazgos y opciones. Algunos tratamientos pueden empezar después de una fase de higiene o estabilización; otros necesitan estudio o coordinación. Si existe una alternativa más simple o la observación es razonable, también forma parte de la conversación. El presupuesto corresponde al plan acordado y puede cambiar si aparecen datos que no eran visibles inicialmente.',
      ],
    },
    {
      title: 'Cómo preparar la visita y llegar',
      paragraphs: [
        'Trae la lista de medicación, antecedentes relevantes y, si los tienes, radiografías o informes recientes. Explica si tomas anticoagulantes, medicación para el hueso, si tienes alergias, embarazo, diabetes u otras condiciones que puedan modificar la atención. No interrumpas ningún medicamento por tu cuenta. Si la visita es por dolor, anota cuándo empezó, qué lo desencadena y si existe inflamación o fiebre.',
        'La clínica se encuentra en una planta superior de un edificio de carrer Major. Como las condiciones de acceso y aparcamiento pueden cambiar, recomendamos confirmar con recepción la mejor opción según movilidad, transporte u hora de la visita. Si necesitas acompañamiento, más tiempo para comunicarte o alguna adaptación, indícalo al pedir cita para que podamos prepararla.',
        'Para anular o cambiar una cita, avisa con la máxima antelación posible. El formulario web sirve para solicitar contacto, pero no es un canal de urgencias ni para enviar datos clínicos sensibles. Ante una urgencia vital, llama al 112. Para una urgencia dental, contacta directamente por teléfono para que podamos orientar la prioridad.',
      ],
    },
    {
      title: 'Continuidad, prevención y decisiones compartidas',
      paragraphs: [
        'La prevención no significa hacer el mismo control a todo el mundo. La frecuencia de revisiones e higienes depende del riesgo de caries, la salud periodontal, la edad, los hábitos y los tratamientos previos. Una persona con implantes o antecedentes de periodontitis puede necesitar controles distintos de una persona con riesgo bajo. Lo definimos después de ver la evolución, no con un calendario universal.',
        'Documentamos el punto de partida con los registros necesarios y revisamos los cambios a lo largo del tiempo. Esta continuidad ayuda a detectar si una lesión está estable, si el desgaste progresa o si un tratamiento necesita mantenimiento. También permite evitar intervenciones precipitadas cuando observar es seguro y actuar cuando existe evidencia de cambio.',
        'Queremos que la persona entienda qué está decidiendo. Explicamos beneficios, riesgos, alternativas y consecuencias de no tratar cuando son relevantes. No prometemos resultados idénticos para todos ni utilizamos la tecnología como sustituto de esta conversación. El objetivo es construir un plan asumible, revisable y coherente con la salud a largo plazo.',
      ],
    },
  ],
  faqs: [
    { q: '¿La primera visita es gratuita?', a: 'La primera visita es de pago. En Lleida, con el Carnet Jove, la primera visita y una limpieza anual son gratuitas y tienes un 20% de descuento en el resto de servicios. Presenta el carnet en recepción. Contacta con recepción para confirmar qué incluye antes de reservar.' },
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
  dateModified: '2026-09-15', updatedLabel: '15 de setembre de 2026',
  path: 'dentista-tremp.html', alternatePath: 'es/dentista-tremp.html', city: 'Tremp',
  title: 'Dentista a Tremp | Estudi Dental Carrera',
  description: 'Clínica dental a Tremp per al Pallars: prevenció, odontologia conservadora, implants, ortodòncia, genives, ATM i seguiment proper.',
  eyebrow: 'Carrer Montllobar, Tremp', h1: 'Dentista a Tremp per cuidar la salut oral al Pallars',
  lead: 'La nostra clínica dental a Tremp ofereix diagnòstic, tractament i seguiment al Pallars. Quan el cas ho necessita, coordinem les visites amb l’equip de Lleida.',
  image: 'assets/img/tremp-exterior.webp', imageWidth: 2200, imageHeight: 1466, imageAlt: 'Exterior de la clínica Estudi Dental Carrera a Tremp',
  introTitle: 'Atenció dental de proximitat, sense simplificar el diagnòstic',
  intro: [
    'La clínica és al carrer Montllobar, 22 baixos, 25620 Tremp, Lleida. Atenem persones de Tremp i del Pallars que volen una revisió o consultar un problema dental. Tenir la clínica a prop facilita els controls. A cada visita expliquem què veiem, què podem fer i què cal estudiar millor.',
    'La prioritat és conservar les dents i la seva funció amb el tractament que calgui. Si el cas necessita més d’un professional, coordinem les visites entre les dues clíniques. T’expliquem abans qualsevol desplaçament a Lleida i per què el proposem.',
  ],
  aside: 'Adreça: carrer Montllobar, 22 baixos, 25620 Tremp. Telèfon i WhatsApp: 650 60 01 72. Confirma horaris, accessibilitat o necessitats concretes amb recepció.',
  sections: [
    {
      title: 'Serveis i primera visita a Tremp',
      paragraphs: [
        'A Tremp fem revisions, prevenció, diagnòstic de càries i dolor, odontologia restauradora, seguiment de genives, endodòncia, pròtesi i valoració d’implants. També estudiem ortodòncia, estètica dental, bruxisme i molèsties de l’articulació temporomandibular. La indicació depèn de la història, l’exploració i les proves necessàries; una llista de serveis no substitueix aquesta valoració.',
        'A la primera visita revisem el motiu de consulta, la salut general i la medicació. Si hi ha radiografies o informes recents, porta’ls perquè puguem valorar si continuen sent útils. Després de l’exploració expliquem les troballes i prioritzem: controlar dolor o infecció, estabilitzar genives i càries, o planificar un objectiu funcional o estètic. No tots els passos s’han de fer alhora.',
        'Si existeixen diverses alternatives, comparem conservació de teixit, riscos, temps, manteniment i cost. També expliquem què pot passar si es decideix esperar. En situacions estables, observar amb controls pot ser una decisió adequada. En altres, retardar pot complicar el pronòstic. Aquesta diferència només es pot establir després d’examinar el cas.',
      ],
    },
    {
      title: 'Coordinació, desplaçaments i continuïtat',
      paragraphs: [
        'Viure al Pallars no hauria de convertir cada control en un desplaçament innecessari. Organitzem el seguiment segons la fase del tractament i indiquem quines visites es poden fer a Tremp. Quan una prova, equipament o professional requereix coordinació amb Lleida, ho expliquem amb antelació. L’objectiu és mantenir qualitat clínica i reduir trajectes que no aporten valor.',
        'La continuïtat facilita detectar canvis en genives, desgast, restauracions, pròtesis o implants. La freqüència no és igual per a tothom: s’adapta al risc de càries, antecedents de periodontitis, higiene, tabac i tractaments previs. Entre visites, una bona higiene i consultar davant de símptomes nous són més útils que seguir un calendari de forma automàtica.',
        'El formulari web i WhatsApp serveixen per demanar contacte, no per enviar històries clíniques, fotografies íntimes o dades sensibles. Si hi ha dolor intens, inflamació, febre, traumatisme o dificultat per empassar o respirar, truca directament per rebre orientació; davant d’una urgència vital, contacta amb el 112.',
      ],
    },
    {
      title: 'Prevenció i manteniment al llarg del temps',
      paragraphs: [
        'La prevenció combina hàbits diaris, control professional i actuacions proporcionades al risc. Revisem la tècnica de raspallat, la higiene interdental, la dieta i l’exposició a fluor quan és rellevant. En infants, adults i persones grans, les necessitats canvien. No recomanem procediments només perquè hagi passat un interval fix si no hi ha una indicació.',
        'Després d’un tractament, expliquem què s’ha de vigilar i quan convé revisar. Les restauracions poden desgastar-se, les pròtesis necessiten ajustos i els implants requereixen control dels teixits. La sensació que “ja està acabat” no elimina el manteniment, però tampoc implica visites o radiografies innecessàries. El pla es revisa segons l’evolució.',
        'La informació d’aquesta pàgina és general. A la consulta adaptem les recomanacions a la salut, l’edat, la medicació i les preferències de cada persona. Si alguna explicació no queda clara, demanem que ens ho diguis: entendre el pla és una part essencial del consentiment i ajuda a prendre decisions sostenibles.',
      ],
    },
  ],
  faqs: [
    { q: 'La primera visita és gratuïta?', a: 'La primera visita és de pagament. Contacta amb recepció per saber-ne l’import i què inclou abans de reservar.' },
    { q: 'On és la clínica de Tremp?', a: 'Al carrer Montllobar, 22 baixos, 25620 Tremp. Pots confirmar com arribar-hi i qualsevol necessitat d’accés amb recepció.' },
    { q: 'Ateneu persones d’altres poblacions del Pallars?', a: 'Sí. La planificació de visites s’adapta al tractament i, si cal coordinació amb Lleida, s’explica prèviament.' },
    { q: 'Puc enviar fotografies per WhatsApp per obtenir un diagnòstic?', a: 'WhatsApp és un canal de contacte, no substitueix una exploració ni és adequat per enviar dades clíniques sensibles sense indicació.' },
    { q: 'Com es gestiona una urgència dental?', a: 'Truca al 650 60 01 72 perquè puguem valorar prioritat i disponibilitat. Davant d’una urgència vital, truca al 112.' },
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
  dateModified: '2026-09-15', updatedLabel: '15 de septiembre de 2026',
  path: 'es/dentista-tremp.html', alternatePath: 'dentista-tremp.html', city: 'Tremp',
  title: 'Dentista en Tremp | Estudi Dental Carrera',
  description: 'Clínica dental en Tremp para el Pallars: prevención, odontología conservadora, implantes, ortodoncia, encías, ATM y seguimiento cercano.',
  eyebrow: 'Carrer Montllobar, Tremp', h1: 'Dentista en Tremp para cuidar la salud oral en el Pallars',
  lead: 'Nuestra clínica dental en Tremp ofrece diagnóstico, tratamiento y seguimiento en el Pallars. Cuando el caso lo necesita, coordinamos las visitas con el equipo de Lleida.',
  image: 'assets/img/tremp-exterior.webp', imageWidth: 2200, imageHeight: 1466, imageAlt: 'Exterior de la clínica Estudi Dental Carrera en Tremp',
  introTitle: 'Atención dental de proximidad, sin simplificar el diagnóstico',
  intro: [
    'La clínica está en carrer Montllobar, 22, bajos, 25620 Tremp, Lleida. Atendemos a personas de Tremp y del Pallars que quieren una revisión o consultar un problema dental. Tener la clínica cerca facilita los controles. En cada visita explicamos qué vemos, qué podemos hacer y qué falta estudiar.',
    'La prioridad es conservar los dientes y su función con el tratamiento necesario. Si el caso requiere más de un profesional, coordinamos las visitas entre las dos clínicas. Te explicamos antes cualquier desplazamiento a Lleida y por qué lo proponemos.',
  ],
  aside: 'Dirección: carrer Montllobar, 22, bajos, 25620 Tremp. Teléfono y WhatsApp: 650 60 01 72. Confirma horarios, accesibilidad o necesidades concretas con recepción.',
  sections: [
    {
      title: 'Servicios y primera visita en Tremp',
      paragraphs: [
        'En Tremp realizamos revisiones, prevención, diagnóstico de caries y dolor, odontología restauradora, seguimiento de encías, endodoncia, prótesis y valoración de implantes. También estudiamos ortodoncia, estética dental, bruxismo y molestias de la articulación temporomandibular. La indicación depende de la historia, la exploración y las pruebas necesarias; una lista de servicios no sustituye esta valoración.',
        'En la primera visita revisamos el motivo de consulta, la salud general y la medicación. Si existen radiografías o informes recientes, tráelos para valorar si siguen siendo útiles. Después de la exploración explicamos los hallazgos y priorizamos: controlar dolor o infección, estabilizar encías y caries, o planificar un objetivo funcional o estético. No todos los pasos deben hacerse a la vez.',
        'Si existen varias alternativas, comparamos conservación de tejido, riesgos, tiempo, mantenimiento y coste. También explicamos qué puede ocurrir si se decide esperar. En situaciones estables, observar con controles puede ser una decisión adecuada. En otras, retrasar puede complicar el pronóstico. Esta diferencia solo puede establecerse después de examinar el caso.',
      ],
    },
    {
      title: 'Coordinación, desplazamientos y continuidad',
      paragraphs: [
        'Vivir en el Pallars no debería convertir cada control en un desplazamiento innecesario. Organizamos el seguimiento según la fase del tratamiento e indicamos qué visitas pueden hacerse en Tremp. Cuando una prueba, el uso de un equipo o la intervención de un profesional requieren coordinación con Lleida, lo explicamos con antelación. El objetivo es mantener calidad clínica y reducir trayectos que no aportan valor.',
        'La continuidad facilita detectar cambios en encías, desgaste, restauraciones, prótesis o implantes. La frecuencia no es igual para todos: se adapta al riesgo de caries, antecedentes de periodontitis, higiene, tabaco y tratamientos previos. Entre visitas, una buena higiene y consultar ante síntomas nuevos son más útiles que seguir un calendario de forma automática.',
        'El formulario web y WhatsApp sirven para pedir contacto, no para enviar historias clínicas, fotografías íntimas o datos sensibles. Si hay dolor intenso, inflamación, fiebre, traumatismo o dificultad para tragar o respirar, llama directamente para recibir orientación; ante una urgencia vital, contacta con el 112.',
      ],
    },
    {
      title: 'Prevención y mantenimiento a lo largo del tiempo',
      paragraphs: [
        'La prevención combina hábitos diarios, control profesional y actuaciones proporcionadas al riesgo. Revisamos la técnica de cepillado, la higiene interdental, la dieta y la exposición a flúor cuando es relevante. En niños, adultos y personas mayores, las necesidades cambian. No recomendamos procedimientos solo porque haya pasado un intervalo fijo si no existe una indicación.',
        'Después de un tratamiento, explicamos qué debe vigilarse y cuándo conviene revisar. Las restauraciones pueden desgastarse, las prótesis necesitan ajustes y los implantes requieren control de los tejidos. La sensación de que “ya está terminado” no elimina el mantenimiento, pero tampoco implica visitas o radiografías innecesarias. El plan se revisa según la evolución.',
        'La información de esta página es general. En consulta adaptamos las recomendaciones a la salud, la edad, la medicación y las preferencias de cada persona. Si alguna explicación no queda clara, pedimos que nos lo digas: entender el plan es una parte esencial del consentimiento y ayuda a tomar decisiones informadas.',
      ],
    },
  ],
  faqs: [
    { q: '¿La primera visita es gratuita?', a: 'La primera visita es de pago. Contacta con recepción para conocer el importe y qué incluye antes de reservar.' },
    { q: '¿Dónde está la clínica de Tremp?', a: 'En carrer Montllobar, 22, bajos, 25620 Tremp. Puedes confirmar cómo llegar y cualquier necesidad de acceso con recepción.' },
    { q: '¿Atendéis a personas de otras poblaciones del Pallars?', a: 'Sí. La planificación de visitas se adapta al tratamiento y, si hace falta coordinación con Lleida, se explica previamente.' },
    { q: '¿Puedo enviar fotografías por WhatsApp para obtener un diagnóstico?', a: 'WhatsApp es un canal de contacto, no sustituye una exploración ni es adecuado para enviar datos clínicos sensibles sin indicación.' },
    { q: '¿Cómo se gestiona una urgencia dental?', a: 'Llama al 650 60 01 72 para que podamos valorar prioridad y disponibilidad. Ante una urgencia vital, llama al 112.' },
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

module.exports = { pages };
