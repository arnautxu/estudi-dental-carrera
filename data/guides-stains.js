// Dental information with supporting health sources.
const guides = {
  'taques-dents': {
    key: 'taques-dents',
    lang: 'ca',
    path: 'guies/taques-dents.html',
    alternatePath: 'es/guias/manchas-dientes.html',
    title: 'Taques a les dents: neteja o blanquejament? | Carrera',
    h1: 'Taques a les dents: neteja o blanquejament?',
    description: 'Què convé observar si canvia el color de les dents, què poden aportar la neteja i el blanquejament i quines preguntes preparar per a la visita.',
    lead: 'Quan veus una taca, és fàcil pensar que cal netejar més o buscar un blanquejament. Abans d’escollir, convé entendre què ha canviat. Una fotografia o el color, per si sols, no permeten saber què passa ni quin tractament seria adequat.',
    topic: 'Taques i color dental',
    image: 'assets/img/serveis/estetica-llum.webp',
    imageAlt: 'Professional amb una llum dental i una pantalla de protecció',
    imageWidth: 1280,
    imageHeight: 1600,
    summary: [
      'Les taques poden tenir orígens diferents.',
      'Netejar i aclarir el color són objectius diferents.',
      'Un canvi de color persistent convé valorar-lo.',
    ],
    sections: [
      {
        id: 'que-ha-canviat',
        title: 'Què ha canviat exactament?',
        paragraphs: [
          'Comença descrivint el que veus: és una sola dent, una zona concreta o un canvi general? Hi era des de fa temps o ho has notat fa poc? Si el canvi persisteix després de la higiene habitual o no té una causa clara, comenta’l al dentista.',
          'Explica també si coincideix amb molèsties, un cop, una medicació o un producte dental nou. Porta el nom del producte si el tens. No cal arribar amb una explicació: aquestes observacions són un punt de partida per a l’exploració.',
        ],
      },
      {
        id: 'neteja-superficie',
        title: 'Quan pot ajudar una neteja?',
        paragraphs: [
          'La neteja professional pot reduir algunes pigmentacions de la superfície, com les associades al cafè o al te. El color també pot provenir de l’interior de la dent. Retirar una pigmentació externa no equival a aclarir el color intern.',
          'Pregunta quina part del canvi observat es troba a la superfície i què es podria esperar d’una neteja en el teu cas. Si l’objectiu és recuperar l’aspecte habitual, explica-ho així; no has de demanar un tractament estètic concret abans de saber què s’ha observat.',
        ],
      },
      {
        id: 'blanquejament-restauracions',
        title: 'Què pot canviar un blanquejament?',
        paragraphs: [
          'El blanquejament busca aclarir les dents naturals. No canvia el color dels empastaments, les corones o les carilles; per això poden quedar diferències de color. Abans de decidir, convé revisar el conjunt i la salut de dents i genives.',
          'Demana que t’assenyalin quines peces són naturals i quines tenen restauracions visibles. Explica quin canvi t’agradaria i què prefereixes conservar. L’objectiu és acordar expectatives realistes, sense prometre un to exacte ni un resultat uniforme en totes les peces.',
        ],
      },
      {
        id: 'una-dent-diferent',
        title: 'I si només hi ha una dent més fosca?',
        paragraphs: [
          'Si una dent ha canviat després d’un cop o d’un tractament anterior, explica aquest antecedent. Cal valorar-la abans d’intentar aclarir-la. No es pot deduir del color que necessiti una endodòncia ni que un blanquejament sigui la resposta.',
          'Les taques blanques, marrons o negres també poden aparèixer amb càries, que al començament pot no fer mal. El color no confirma el diagnòstic. Si hi ha dolor o sensibilitat en menjar o beure, demana una visita i comenta tots els canvis, no només l’aspecte.',
        ],
      },
      {
        id: 'remeis-casolans',
        title: 'Per què evitar els remeis casolans?',
        paragraphs: [
          'Fregar les dents amb llimona o vinagre pot danyar l’esmalt per l’acidesa. Els materials massa abrasius també poden desgastar-lo. El carbó no és una alternativa amb seguretat i eficàcia blanquejadora prou demostrades. Que una proposta sigui «natural» no la fa innòcua.',
          'Si has vist un producte que t’interessa, porta’n l’envàs o el nom a la consulta. Si ja l’has utilitzat, explica com t’ha anat. És més útil revisar aquella proposta concreta que encadenar proves per veure quina aconsegueix eliminar la taca.',
        ],
      },
      {
        id: 'preparar-decisio',
        title: 'Quines preguntes t’ajudaran a decidir?',
        paragraphs: [
          'El blanquejament pot causar sensibilitat o irritació de les genives. Si ja tens molèsties, explica-les abans de començar. Confirma amb el professional què has de fer si apareixen efectes que et preocupen, sense modificar pel teu compte el tractament indicat.',
          'Abans de marxar, intenta resumir amb les teves paraules què s’ha observat i quin és el següent pas. Pots preparar aquestes preguntes:',
        ],
        items: [
          'Què explica el canvi de color que heu observat?',
          'Hi ha algun problema que s’hagi de valorar abans de l’estètica?',
          'Què podria canviar amb cada opció i què quedaria igual?',
          'Com comprovarem si el resultat respon a l’objectiu acordat?',
        ],
      },
    ],
    faqs: [
      { q: 'Una taca marró sempre és una càries?', a: 'No es pot saber només pel color. Pot haver-hi causes diferents; l’exploració permet distingir-les. Explica si és nova, si ha canviat i si hi ha molèsties.' },
      { q: 'He de demanar directament un blanquejament?', a: 'Pots demanar una valoració del canvi de color. Explica què t’agradaria millorar i deixa que l’exploració orienti les opcions abans d’escollir-ne una.' },
      { q: 'I si també em sagnen les genives?', a: 'Comenta-ho en la mateixa visita, encara que la taca sigui el que més et preocupa. La salut de les genives s’ha de revisar abans de plantejar el blanquejament.' },
    ],
    sources: [
      { href: 'https://www.ada.org/resources/ada-library/oral-health-topics/whitening', label: 'ADA: pigmentacions superficials, color intern i restauracions' },
      { href: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/', label: 'NHS: valoració prèvia i possibles efectes del blanquejament' },
      { href: 'https://medlineplus.gov/ency/article/003065.htm', label: 'MedlinePlus: canvis de color dental i consulta' },
      { href: 'https://www.nhs.uk/conditions/tooth-decay/', label: 'NHS: taques i altres signes possibles de càries' },
      { href: 'https://www.mouthhealthy.org/all-topics-a-z/natural-teeth-whitening', label: 'MouthHealthy, ADA: riscos dels mètodes casolans' },
    ],
    relatedService: { href: '/estetica-dental.html#blanquejament', label: 'Com valorem el blanquejament dental' },
    relatedGuides: [
      { href: '/guies/sagnat-genives.html', label: 'Si també et sagnen les genives' },
      { href: '/guies/endodoncia-dubtes.html', label: 'Si et proposen una endodòncia: dubtes per a la visita' },
    ],
    editorial: 'Informació general basada en fonts sanitàries. La valoració odontològica individual determina el diagnòstic i el tractament.',
  },

  'manchas-dientes': {
    key: 'manchas-dientes',
    lang: 'es',
    path: 'es/guias/manchas-dientes.html',
    alternatePath: 'guies/taques-dents.html',
    title: 'Manchas en los dientes: ¿limpieza o blanqueamiento? | Carrera',
    h1: 'Manchas en los dientes: ¿limpieza o blanqueamiento?',
    description: 'Qué observar si cambia el color de los dientes, qué pueden aportar la limpieza y el blanqueamiento y qué preguntas preparar para la visita.',
    lead: 'Cuando ves una mancha, es fácil pensar que necesitas limpiar más o buscar un blanqueamiento. Antes de elegir, conviene entender qué ha cambiado. Una fotografía o el color, por sí solos, no permiten saber qué ocurre ni qué tratamiento sería adecuado.',
    topic: 'Manchas y color dental',
    image: 'assets/img/serveis/estetica-llum.webp',
    imageAlt: 'Profesional con una luz dental y una pantalla de protección',
    imageWidth: 1280,
    imageHeight: 1600,
    summary: [
      'Las manchas pueden tener orígenes diferentes.',
      'Limpiar y aclarar el color son objetivos distintos.',
      'Conviene valorar un cambio de color persistente.',
    ],
    sections: [
      {
        id: 'que-ha-cambiado',
        title: '¿Qué ha cambiado exactamente?',
        paragraphs: [
          'Empieza describiendo lo que ves: ¿es un solo diente, una zona concreta o un cambio general? ¿Estaba desde hace tiempo o lo has notado hace poco? Si el cambio persiste después de la higiene habitual o no tiene una causa clara, coméntalo con el dentista.',
          'Explica también si coincide con molestias, un golpe, una medicación o un producto dental nuevo. Lleva el nombre del producto si lo tienes. No necesitas llegar con una explicación: estas observaciones son un punto de partida para la exploración.',
        ],
      },
      {
        id: 'limpieza-superficie',
        title: '¿Cuándo puede ayudar una limpieza?',
        paragraphs: [
          'La limpieza profesional puede reducir algunas pigmentaciones de la superficie, como las asociadas al café o al té. El color también puede proceder del interior del diente. Retirar una pigmentación externa no equivale a aclarar el color interno.',
          'Pregunta qué parte del cambio observado está en la superficie y qué se podría esperar de una limpieza en tu caso. Si el objetivo es recuperar el aspecto habitual, explícalo así; no tienes que pedir un tratamiento estético concreto antes de saber qué se ha observado.',
        ],
      },
      {
        id: 'blanqueamiento-restauraciones',
        title: '¿Qué puede cambiar un blanqueamiento?',
        paragraphs: [
          'El blanqueamiento busca aclarar los dientes naturales. No cambia el color de los empastes, las coronas o las carillas; por eso pueden quedar diferencias de color. Antes de decidir, conviene revisar el conjunto y la salud de dientes y encías.',
          'Pide que te señalen qué piezas son naturales y cuáles tienen restauraciones visibles. Explica qué cambio te gustaría y qué prefieres conservar. El objetivo es acordar expectativas realistas, sin prometer un tono exacto ni un resultado uniforme en todas las piezas.',
        ],
      },
      {
        id: 'un-diente-diferente',
        title: '¿Y si solo hay un diente más oscuro?',
        paragraphs: [
          'Si un diente ha cambiado después de un golpe o de un tratamiento anterior, explica ese antecedente. Hay que valorarlo antes de intentar aclararlo. No se puede deducir del color que necesite una endodoncia ni que un blanqueamiento sea la respuesta.',
          'Las manchas blancas, marrones o negras también pueden aparecer con caries, que al principio puede no doler. El color no confirma el diagnóstico. Si hay dolor o sensibilidad al comer o beber, pide una visita y comenta todos los cambios, no solo el aspecto.',
        ],
      },
      {
        id: 'remedios-caseros',
        title: '¿Por qué evitar los remedios caseros?',
        paragraphs: [
          'Frotar los dientes con limón o vinagre puede dañar el esmalte por la acidez. Los materiales demasiado abrasivos también pueden desgastarlo. El carbón no es una alternativa con seguridad y eficacia blanqueadora suficientemente demostradas. Que una propuesta sea «natural» no la hace inocua.',
          'Si has visto un producto que te interesa, lleva su envase o su nombre a la consulta. Si ya lo has utilizado, explica cómo te ha ido. Es más útil revisar esa propuesta concreta que encadenar pruebas para ver cuál consigue eliminar la mancha.',
        ],
      },
      {
        id: 'preparar-decision',
        title: '¿Qué preguntas te ayudarán a decidir?',
        paragraphs: [
          'El blanqueamiento puede causar sensibilidad o irritación de las encías. Si ya tienes molestias, explícalas antes de empezar. Confirma con el profesional qué debes hacer si aparecen efectos que te preocupan, sin modificar por tu cuenta el tratamiento indicado.',
          'Antes de irte, intenta resumir con tus palabras qué se ha observado y cuál es el siguiente paso. Puedes preparar estas preguntas:',
        ],
        items: [
          '¿Qué explica el cambio de color que habéis observado?',
          '¿Hay algún problema que deba valorarse antes de la estética?',
          '¿Qué podría cambiar con cada opción y qué quedaría igual?',
          '¿Cómo comprobaremos si el resultado responde al objetivo acordado?',
        ],
      },
    ],
    faqs: [
      { q: '¿Una mancha marrón siempre es una caries?', a: 'No se puede saber solo por el color. Puede haber causas diferentes; la exploración permite distinguirlas. Explica si es nueva, si ha cambiado y si hay molestias.' },
      { q: '¿Tengo que pedir directamente un blanqueamiento?', a: 'Puedes pedir una valoración del cambio de color. Explica qué te gustaría mejorar y deja que la exploración oriente las opciones antes de elegir una.' },
      { q: '¿Y si también me sangran las encías?', a: 'Coméntalo en la misma visita, aunque la mancha sea lo que más te preocupa. La salud de las encías debe revisarse antes de plantear el blanqueamiento.' },
    ],
    sources: [
      { href: 'https://www.ada.org/resources/ada-library/oral-health-topics/whitening', label: 'ADA: pigmentaciones superficiales, color interno y restauraciones' },
      { href: 'https://www.nhs.uk/tests-and-treatments/teeth-whitening/', label: 'NHS: valoración previa y posibles efectos del blanqueamiento' },
      { href: 'https://medlineplus.gov/ency/article/003065.htm', label: 'MedlinePlus: cambios de color dental y consulta' },
      { href: 'https://www.nhs.uk/conditions/tooth-decay/', label: 'NHS: manchas y otros posibles signos de caries' },
      { href: 'https://www.mouthhealthy.org/all-topics-a-z/natural-teeth-whitening', label: 'MouthHealthy, ADA: riesgos de los métodos caseros' },
    ],
    relatedService: { href: '/es/estetica-dental.html#blanqueamiento', label: 'Cómo valoramos el blanqueamiento dental' },
    relatedGuides: [
      { href: '/es/guias/sangrado-encias.html', label: 'Si también te sangran las encías' },
      { href: '/es/guias/endodoncia-dudas.html', label: 'Si te proponen una endodoncia: dudas para la visita' },
    ],
    editorial: 'Información general basada en fuentes sanitarias. La valoración odontológica individual determina el diagnóstico y el tratamiento.',
  },
};

module.exports = { guides };
