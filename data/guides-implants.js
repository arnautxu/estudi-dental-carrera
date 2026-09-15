// Local editorial draft. Clinical review is pending; no clinical authorship is assigned.
const sources = [
  { href: 'https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know', label: 'FDA: Dental Implants: What You Should Know' },
  { href: 'https://www.leedsth.nhs.uk/patients/resources/bridges/', label: 'Leeds Teaching Hospitals NHS Trust: Bridges' },
  { href: 'https://www.mouthhealthy.org/all-topics-a-z/bridges', label: 'ADA MouthHealthy: Bridges' },
  { href: 'https://www.mouthhealthy.org/all-topics-a-z/implants', label: 'ADA MouthHealthy: Implants' },
  { href: 'https://www.mouthhealthy.org/all-topics-a-z/missing-teeth', label: 'ADA MouthHealthy: Missing Teeth' },
];

const guides = {
  'implant-o-pont': {
    key: 'implant-o-pont',
    lang: 'ca',
    path: 'guies/implant-o-pont.html',
    alternatePath: 'es/guias/implante-o-puente.html',
    title: 'Implant o pont dental: què es valora per decidir? | Carrera',
    h1: 'Implant o pont dental: què es valora per decidir?',
    description: 'Com es comparen un implant i un pont dental: dents veïnes, os, genives, fases i manteniment. Preguntes útils per valorar les alternatives.',
    lead: 'Quan falta una dent, la decisió també afecta les peces del costat i la manera de mastegar. Un implant i un pont es recolzen en estructures diferents. Comparar-los exigeix mirar tota la zona.',
    topic: 'Implants i pròtesis',
    image: 'assets/img/serveis/implants-planificacio.webp',
    imageAlt: 'Planificació digital d’un tractament amb implants dentals',
    imageWidth: 1280,
    imageHeight: 1600,
    summary: [
      'La dent absent no és l’única peça que cal estudiar.',
      'El tipus de pont canvia què cal preparar a les dents veïnes.',
      'La decisió inclou les cures i l’opció de no reposar quan sigui raonable.',
    ],
    sections: [
      {
        id: 'que-comparem',
        title: 'Què estem comparant exactament?',
        paragraphs: [
          'Un implant és un suport que es col·loca a l’os mitjançant cirurgia. La corona és la dent visible que s’hi connecta. Un pont uneix una o més dents de substitució a uns suports. Aquí comparem sobretot un implant amb un pont recolzat en dents naturals.',
          'També existeixen ponts sobre implants. Per això, «implant» i «pont» no sempre són alternatives excloents. Abans de comparar propostes, demana que t’assenyalin quines dents falten, on es recolzarà la restauració i quines peces formen part del pla.',
        ],
      },
      {
        id: 'dents-veines',
        title: 'Què passa amb les dents del costat?',
        paragraphs: [
          'Un pont convencional necessita preparar les dents de suport per cobrir-les amb corones. Un pont adhesiu es fixa amb una aleta i pot necessitar poca preparació o cap. No tots els espais permeten les mateixes opcions. Si les dents veïnes ja tenen corones o grans restauracions, la comparació pot ser diferent.',
          'La pregunta útil és quina estructura es conservaria i quina s’hauria de modificar. Demana també com canviaria el pla si una dent de suport necessités tractament més endavant.',
        ],
      },
      {
        id: 'valoracio-professional',
        title: 'Què valora el professional abans de proposar una opció?',
        paragraphs: [
          'La salut general, l’os, les genives i les dents que farien de suport formen part de la valoració. El tabac i algunes malalties poden dificultar la cicatrització d’un implant. També cal entendre com es distribueixen les forces en mastegar i si la restauració es podrà netejar.',
          'Explica què et costa fer ara: mastegar per aquell costat, parlar o conviure amb l’espai visible. Porta les proves i els informes que ja tinguis, i la llista de medicació. Demana quina troballa afavoreix o descarta cada alternativa; una preferència estètica, tota sola, no resol la comparació.',
        ],
      },
      {
        id: 'ordre-decisions',
        title: 'En quin ordre es prenen les decisions?',
        paragraphs: [
          'Si la dent encara hi és, primer convé aclarir si es pot conservar. Després es defineix què es vol recuperar i amb quin suport. Amb implants, la col·locació, la integració a l’os i la pròtesi són fases relacionades. Cal saber també què es preveu mentre la restauració definitiva no estigui preparada.',
          'Demana que el pla diferenciï allò que ja està decidit del que depèn de l’exploració o de l’evolució.',
        ],
        items: [
          'Quin problema hem de resoldre abans de preparar la restauració?',
          'Quines parts del pla es poden confirmar ara?',
          'Què portaré mentre es completa el tractament, si cal?',
          'Quina situació faria revisar la proposta inicial?',
        ],
      },
      {
        id: 'cures-manteniment',
        title: 'Quin manteniment exigeix cada alternativa?',
        paragraphs: [
          'Les dues opcions necessiten higiene i revisions. En un pont cal cuidar les dents de suport i poder netejar sota la dent de substitució. En un implant s’han de cuidar els teixits que l’envolten i comprovar la restauració. Cap de les dues opcions elimina la necessitat de seguiment.',
          'Abans de decidir, demana una explicació pràctica de les cures: quines zones hauràs de netejar, amb quins estris i què es revisarà als controls. Comenta si tens dificultats per utilitzar fil o raspalls interdentals. El manteniment ha de formar part de la comparació inicial, no descobrir-se només al final.',
        ],
      },
      {
        id: 'no-reposar',
        title: 'I si decideixo no reposar la dent?',
        paragraphs: [
          'En alguns casos es pot valorar deixar l’espai si la funció i l’aspecte són acceptables. Cal explicar-ne les conseqüències: les dents properes poden desplaçar-se i l’absència pot afectar la masticació. No es tracta d’una decisió automàtica ni necessàriament definitiva.',
          'Demana què es controlaria si prefereixes observar i quins canvis farien recomanable tornar a valorar la reposició. Per preparar la conversa, escriu què et preocupa de la cirurgia, de modificar dents veïnes o de les cures diàries. No cal arribar a la visita havent triat una tècnica.',
        ],
      },
    ],
    faqs: [
      { q: 'Un implant és sempre millor que un pont?', a: 'No hi ha una resposta universal. Cal comparar què exigeix cada opció a l’os, les dents de suport i les cures. La proposta ha de respondre a les condicions de la teva boca.' },
      { q: 'Què vol dir «pont sobre implants»?', a: 'És un pont que es recolza en implants en lloc de dents naturals. Demana que t’expliquin el suport concret quan et presentin un pla de rehabilitació.' },
      { q: 'Puc portar una proposta anterior per comparar-la?', a: 'Sí. Portar-la juntament amb les proves disponibles ajuda a formular dubtes concrets. Demana que t’expliquin en què coincideixen les alternatives i què necessita una nova valoració.' },
    ],
    sources,
    relatedService: { href: '/implants-dentals.html', label: 'Conèixer com valorem els implants i les alternatives' },
    relatedGuides: [
      { href: '/guies/endodoncia-dubtes.html', label: 'Dubtes abans d’una endodòncia' },
    ],
    editorial: 'Informació general basada en fonts sanitàries. Esborrany pendent de revisió clínica; la valoració odontològica individual determina el diagnòstic i el tractament.',
  },

  'implante-o-puente': {
    key: 'implante-o-puente',
    lang: 'es',
    path: 'es/guias/implante-o-puente.html',
    alternatePath: 'guies/implant-o-pont.html',
    title: 'Implante o puente dental: qué se valora para decidir | Carrera',
    h1: 'Implante o puente dental: qué se valora para decidir',
    description: 'Cómo se comparan un implante y un puente dental: dientes vecinos, hueso, encías, fases y mantenimiento. Preguntas para valorar las alternativas.',
    lead: 'Cuando falta un diente, la decisión también afecta a los dientes vecinos y a la forma de masticar. Un implante y un puente se apoyan en estructuras distintas. Compararlos exige mirar toda la zona.',
    topic: 'Implantes y prótesis',
    image: 'assets/img/serveis/implants-planificacio.webp',
    imageAlt: 'Planificación digital de un tratamiento con implantes dentales',
    imageWidth: 1280,
    imageHeight: 1600,
    summary: [
      'El diente ausente no es la única pieza que hay que estudiar.',
      'El tipo de puente cambia qué hay que preparar en los dientes vecinos.',
      'La decisión incluye los cuidados y la opción de no reponer cuando sea razonable.',
    ],
    sections: [
      {
        id: 'que-comparamos',
        title: '¿Qué estamos comparando exactamente?',
        paragraphs: [
          'Un implante es un soporte que se coloca en el hueso mediante cirugía. La corona es el diente visible que se conecta a él. Un puente une uno o más dientes de sustitución a unos soportes. Aquí comparamos sobre todo un implante con un puente apoyado en dientes naturales.',
          'También existen puentes sobre implantes. Por eso, «implante» y «puente» no siempre son alternativas excluyentes. Antes de comparar propuestas, pide que te señalen qué dientes faltan, dónde se apoyará la restauración y qué piezas forman parte del plan.',
        ],
      },
      {
        id: 'dientes-vecinos',
        title: '¿Qué ocurre con los dientes de al lado?',
        paragraphs: [
          'Un puente convencional necesita preparar los dientes de soporte para cubrirlos con coronas. Un puente adhesivo se fija con una aleta y puede necesitar poca preparación o ninguna. No todos los espacios permiten las mismas opciones. Si los dientes vecinos ya tienen coronas o grandes restauraciones, la comparación puede ser diferente.',
          'La pregunta útil es qué estructura se conservaría y cuál habría que modificar. Pregunta también cómo cambiaría el plan si un diente de soporte necesitara tratamiento más adelante.',
        ],
      },
      {
        id: 'valoracion-profesional',
        title: '¿Qué valora el profesional antes de proponer una opción?',
        paragraphs: [
          'La salud general, el hueso, las encías y los dientes que servirían de soporte forman parte de la valoración. El tabaco y algunas enfermedades pueden dificultar la cicatrización de un implante. También hay que entender cómo se distribuyen las fuerzas al masticar y si la restauración podrá limpiarse.',
          'Explica qué te cuesta hacer ahora: masticar por ese lado, hablar o convivir con el espacio visible. Lleva las pruebas e informes que ya tengas y la lista de medicación. Pregunta qué hallazgo favorece o descarta cada alternativa; una preferencia estética, por sí sola, no resuelve la comparación.',
        ],
      },
      {
        id: 'orden-decisiones',
        title: '¿En qué orden se toman las decisiones?',
        paragraphs: [
          'Si el diente todavía está presente, primero conviene aclarar si puede conservarse. Después se define qué se quiere recuperar y con qué soporte. Con implantes, la colocación, la integración en el hueso y la prótesis son fases relacionadas. También hay que saber qué se prevé mientras la restauración definitiva no esté preparada.',
          'Pide que el plan distinga lo ya decidido de lo que depende de la exploración o la evolución.',
        ],
        items: [
          '¿Qué problema debemos resolver antes de preparar la restauración?',
          '¿Qué partes del plan pueden confirmarse ahora?',
          '¿Qué llevaré mientras se completa el tratamiento, si hace falta?',
          '¿Qué situación haría revisar la propuesta inicial?',
        ],
      },
      {
        id: 'cuidados-mantenimiento',
        title: '¿Qué mantenimiento exige cada alternativa?',
        paragraphs: [
          'Las dos opciones necesitan higiene y revisiones. En un puente hay que cuidar los dientes de soporte y poder limpiar bajo el diente de sustitución. En un implante deben cuidarse los tejidos que lo rodean y comprobar la restauración. Ninguna de las dos opciones elimina la necesidad de seguimiento.',
          'Antes de decidir, pide una explicación práctica de los cuidados: qué zonas tendrás que limpiar, con qué utensilios y qué se revisará en los controles. Comenta si tienes dificultades para usar hilo o cepillos interdentales. El mantenimiento debe formar parte de la comparación inicial, no descubrirse solo al final.',
        ],
      },
      {
        id: 'no-reponer',
        title: '¿Y si decido no reponer el diente?',
        paragraphs: [
          'En algunos casos puede valorarse dejar el espacio si la función y el aspecto son aceptables. Hay que explicar sus consecuencias: los dientes cercanos pueden desplazarse y la ausencia puede afectar a la masticación. No es una decisión automática ni necesariamente definitiva.',
          'Pregunta qué se controlaría si prefieres observar y qué cambios aconsejarían volver a valorar la reposición. Para preparar la conversación, escribe qué te preocupa de la cirugía, de modificar dientes vecinos o de los cuidados diarios. No hace falta llegar a la visita habiendo elegido una técnica.',
        ],
      },
    ],
    faqs: [
      { q: '¿Un implante es siempre mejor que un puente?', a: 'No hay una respuesta universal. Debe compararse qué exige cada opción al hueso, los dientes de soporte y los cuidados. La propuesta debe responder a las condiciones de tu boca.' },
      { q: '¿Qué significa «puente sobre implantes»?', a: 'Es un puente que se apoya en implantes en lugar de dientes naturales. Pide que te expliquen el soporte concreto cuando te presenten un plan de rehabilitación.' },
      { q: '¿Puedo llevar una propuesta anterior para compararla?', a: 'Sí. Llevarla junto con las pruebas disponibles ayuda a plantear dudas concretas. Pide que te expliquen en qué coinciden las alternativas y qué necesita una nueva valoración.' },
    ],
    sources,
    relatedService: { href: '/es/implantes-dentales.html', label: 'Conocer cómo valoramos los implantes y las alternativas' },
    relatedGuides: [
      { href: '/es/guias/endodoncia-dudas.html', label: 'Dudas antes de una endodoncia' },
    ],
    editorial: 'Información general basada en fuentes sanitarias. Borrador pendiente de revisión clínica; la valoración odontológica individual determina el diagnóstico y el tratamiento.',
  },
};

module.exports = { guides };
