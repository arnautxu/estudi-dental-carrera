// Published in both languages. Sources do not imply review or authorship by clinic staff.
const sources = [
  { href: 'https://www.nidcr.nih.gov/health-info/bruxism', label: 'NIDCR: bruxisme / bruxismo' },
  { href: 'https://www.nidcr.nih.gov/health-info/tmd', label: 'NIDCR: trastorns temporomandibulars / trastornos temporomandibulares' },
  { href: 'https://www.nhs.uk/conditions/temporomandibular-disorder-tmd/', label: 'NHS: dolor mandibular i autocura / dolor mandibular y autocuidado' },
  { href: 'https://www.nhs.uk/symptoms/teeth-grinding/', label: 'NHS: hàbits, descans i bruxisme / hábitos, descanso y bruxismo' },
  { href: 'https://www.nhs.uk/symptoms/toothache/', label: 'NHS: dolor dental i senyals d’alarma / dolor dental y señales de alarma' },
  { href: 'https://www.nhs.uk/conditions/sleep-apnoea/', label: 'NHS: símptomes d’apnea del son / síntomas de apnea del sueño' },
];
const image = { image: 'assets/img/blog/atencio-mandibula-carme.webp', imageWidth: 1064, imageHeight: 1600 };
const guides = {
  'dolor-mandibula-despertar': {
    key: 'dolor-mandibula-despertar', lang: 'ca',
    path: 'guies/dolor-mandibula-despertar.html', alternatePath: 'es/guias/dolor-mandibula-despertar.html',
    title: 'Dolor de mandíbula en despertar: és bruxisme? | Carrera',
    h1: 'Em fa mal la mandíbula en despertar-me: és bruxisme?',
    description: 'Dolor o tensió a la mandíbula al matí: possibles causes, què observar, quan consultar i per què una fèrula no és sempre el primer pas.',
    lead: 'Despertar-te amb la mandíbula adolorida o carregada pot fer-te pensar que has premut les dents durant la nit. És una possibilitat, però el moment del dolor no confirma que sigui bruxisme. Explicar com és la molèstia i explorar la zona ajuda a orientar-ne la causa.',
    topic: 'Dolor de mandíbula en despertar', ...image,
    imageAlt: 'La Carme atén una pacient a la zona de la mandíbula',
    summary: [
      'El dolor al matí, tot sol, no permet diagnosticar bruxisme.',
      'Si es repeteix, empitjora o limita el moviment, demana una valoració.',
      'Un bloqueig o una inflor amb dificultat per empassar necessiten atenció urgent.',
    ],
    sections: [
      { id: 'possibles-causes', title: 'Què pot explicar el dolor al matí?', paragraphs: [
        'Prémer o fer fregament amb les dents, despert o adormit, pot anar acompanyat de cansament muscular, dolor i desgast dental. Algunes persones no se n’adonen fins que algú els comenta que fan soroll mentre dormen.',
        'També cal considerar els músculs i l’articulació temporomandibular, o ATM, situada davant de l’orella. El dolor de la cara o la mandíbula pot tenir altres orígens, inclosos problemes dentals. Per això no convé atribuir-lo automàticament al bruxisme.',
      ] },
      { id: 'que-observar', title: 'Què pots anotar abans de la visita?', paragraphs: [
        'Portar unes notes breus ajuda a explicar la molèstia sense haver de recordar tots els detalls a la consulta. No són un test per diagnosticar-te. Pots començar per aquestes preguntes:',
      ], items: [
        'Quan va començar i quants matins t’ha passat?',
        'És en un costat, als dos o en una dent concreta?',
        'Canvia després d’esmorzar o al llarg del dia?',
        'Et costa obrir la boca o notes que queda bloquejada?',
        'Has canviat algun hàbit, medicació o aparell dental?',
      ] },
      { id: 'descans', title: 'Què hi tenen a veure el descans i l’estrès?', paragraphs: [
        'L’estrès i l’ansietat poden estar relacionats amb el bruxisme. Mantenir horaris de son regulars i reservar una estona tranquil·la abans d’anar al llit pot ajudar a descansar. Explica també el consum de cafeïna, alcohol o tabac, sense donar per fet que un sol hàbit expliqui el dolor.',
        'Si algú observa pauses en la teva respiració, et despertes ofegant-te o tens molta son durant el dia, consulta el metge. Poden ser signes d’apnea del son, que requereix una valoració pròpia. El dolor mandibular, per si sol, no la diagnostica.',
      ] },
      { id: 'mentrestant', title: 'Què pots fer mentre esperes la valoració?', paragraphs: [
        'Si mastegar et molesta, tria temporalment aliments tous i evita el xiclet o mossegar objectes. No forcis l’obertura de la boca. Durant el dia, observa si mantens les dents premudes i deixa-les separades quan no mengis.',
        'Aquestes mesures no substitueixen una visita si el dolor persisteix o augmenta. Si necessites medicació per al dolor, demana consell al farmacèutic o al professional que et tracta perquè valori què és adequat per a tu.',
      ] },
      { id: 'quan-consultar', title: 'Quan convé consultar sense esperar?', paragraphs: [
        'Demana una valoració si el dolor es repeteix, empitjora o afecta la masticació. Si la mandíbula queda bloquejada, no pots menjar o beure, o apareixen alteracions de la visió amb dolor al cap, busca atenció urgent.',
        'Si el dolor dental va acompanyat de febre o inflor de la galta o mandíbula, contacta aviat amb un dentista. Si la inflor dificulta respirar, empassar o parlar, ves a urgències immediatament.',
      ] },
      { id: 'ferula', title: 'Necessitaré una fèrula de descàrrega?', paragraphs: [
        'No es pot decidir només perquè et faci mal al matí. Una fèrula pot protegir les dents quan està indicada, però això no garanteix que resolgui el dolor de l’ATM. Primer cal concretar quin problema es vol tractar.',
        'Si te’n proposen una, pregunta quin objectiu té i com es revisarà el resultat. A la <a href="/guies/ferula-descarrega.html">guia de la fèrula de descàrrega</a> trobaràs més preguntes sobre l’ajust, les cures i el seguiment.',
      ] },
    ],
    faqs: [
      { q: 'Què explico quan demano la visita?', a: 'Pots dir: «Em desperto amb dolor de mandíbula des de fa uns dies». Afegeix si hi ha inflor, bloqueig o dificultat per menjar perquè puguin orientar la prioritat.' },
      { q: 'He de portar la fèrula que ja tinc?', a: 'Sí: porta-la i explica quan la fas servir i què has notat. Això permet parlar del teu cas amb l’aparell a mà.' },
    ],
    sources,
    relatedService: { href: '/atm-bruxisme.html', label: 'Com valorem el dolor mandibular a Carrera' },
    relatedGuides: [{ href: '/guies/ferula-descarrega.html', label: 'Fèrula de descàrrega: funció, ajust i seguiment' }],
    editorial: 'Informació general basada en fonts sanitàries. La valoració individual determina el diagnòstic i el tractament.',
  },
  'dolor-mandibula-despertar-es': {
    key: 'dolor-mandibula-despertar-es', lang: 'es',
    path: 'es/guias/dolor-mandibula-despertar.html', alternatePath: 'guies/dolor-mandibula-despertar.html',
    title: 'Dolor de mandíbula al despertar: ¿es bruxismo? | Carrera',
    h1: 'Me duele la mandíbula al despertar: ¿es bruxismo?',
    description: 'Dolor o tensión en la mandíbula por la mañana: posibles causas, qué observar, cuándo consultar y por qué una férula no siempre es el primer paso.',
    lead: 'Despertarte con la mandíbula dolorida o cargada puede hacerte pensar que has apretado los dientes durante la noche. Es una posibilidad, pero el momento del dolor no confirma que sea bruxismo. Explicar cómo es la molestia y explorar la zona ayuda a orientar su causa.',
    topic: 'Dolor de mandíbula al despertar', ...image,
    imageAlt: 'Carme atiende a una paciente en la zona de la mandíbula',
    summary: [
      'El dolor por la mañana, por sí solo, no permite diagnosticar bruxismo.',
      'Si se repite, empeora o limita el movimiento, pide una valoración.',
      'Un bloqueo o una hinchazón con dificultad para tragar necesitan atención urgente.',
    ],
    sections: [
      { id: 'posibles-causas', title: '¿Qué puede explicar el dolor por la mañana?', paragraphs: [
        'Apretar o rechinar los dientes, despierto o dormido, puede acompañarse de cansancio muscular, dolor y desgaste dental. Algunas personas no se dan cuenta hasta que alguien les comenta que hacen ruido mientras duermen.',
        'También hay que considerar los músculos y la articulación temporomandibular, o ATM, situada delante del oído. El dolor de la cara o la mandíbula puede tener otros orígenes, incluidos problemas dentales. Por eso no conviene atribuirlo automáticamente al bruxismo.',
      ] },
      { id: 'que-observar', title: '¿Qué puedes anotar antes de la visita?', paragraphs: [
        'Llevar unas notas breves ayuda a explicar la molestia sin tener que recordar todos los detalles en la consulta. No son un test para diagnosticarte. Puedes empezar por estas preguntas:',
      ], items: [
        '¿Cuándo empezó y cuántas mañanas te ha pasado?',
        '¿Es en un lado, en ambos o en un diente concreto?',
        '¿Cambia después de desayunar o a lo largo del día?',
        '¿Te cuesta abrir la boca o notas que queda bloqueada?',
        '¿Has cambiado algún hábito, medicación o aparato dental?',
      ] },
      { id: 'descanso', title: '¿Qué tienen que ver el descanso y el estrés?', paragraphs: [
        'El estrés y la ansiedad pueden estar relacionados con el bruxismo. Mantener horarios de sueño regulares y reservar un rato tranquilo antes de acostarte puede ayudar a descansar. Explica también el consumo de cafeína, alcohol o tabaco, sin dar por hecho que un solo hábito explique el dolor.',
        'Si alguien observa pausas en tu respiración, te despiertas ahogándote o tienes mucho sueño durante el día, consulta al médico. Pueden ser signos de apnea del sueño, que requiere una valoración propia. El dolor mandibular, por sí solo, no la diagnostica.',
      ] },
      { id: 'mientras-tanto', title: '¿Qué puedes hacer mientras esperas la valoración?', paragraphs: [
        'Si masticar te molesta, elige temporalmente alimentos blandos y evita el chicle o morder objetos. No fuerces la apertura de la boca. Durante el día, observa si mantienes los dientes apretados y déjalos separados cuando no comas.',
        'Estas medidas no sustituyen una visita si el dolor persiste o aumenta. Si necesitas medicación para el dolor, pide consejo al farmacéutico o al profesional que te trata para que valore qué es adecuado para ti.',
      ] },
      { id: 'cuando-consultar', title: '¿Cuándo conviene consultar sin esperar?', paragraphs: [
        'Pide una valoración si el dolor se repite, empeora o afecta a la masticación. Si la mandíbula queda bloqueada, no puedes comer o beber, o aparecen alteraciones de la visión con dolor de cabeza, busca atención urgente.',
        'Si el dolor dental va acompañado de fiebre o hinchazón de la mejilla o mandíbula, contacta pronto con un dentista. Si la hinchazón dificulta respirar, tragar o hablar, acude a urgencias inmediatamente.',
      ] },
      { id: 'ferula', title: '¿Necesitaré una férula de descarga?', paragraphs: [
        'No se puede decidir solo porque te duela por la mañana. Una férula puede proteger los dientes cuando está indicada, pero eso no garantiza que resuelva el dolor de la ATM. Primero hay que concretar qué problema se quiere tratar.',
        'Si te proponen una, pregunta qué objetivo tiene y cómo se revisará el resultado. En la <a href="/es/guias/ferula-descarga.html">guía de la férula de descarga</a> encontrarás más preguntas sobre el ajuste, los cuidados y el seguimiento.',
      ] },
    ],
    faqs: [
      { q: '¿Qué explico cuando pido la visita?', a: 'Puedes decir: «Me despierto con dolor de mandíbula desde hace unos días». Añade si hay hinchazón, bloqueo o dificultad para comer para que puedan orientar la prioridad.' },
      { q: '¿Debo llevar la férula que ya tengo?', a: 'Sí: llévala y explica cuándo la usas y qué has notado. Eso permite hablar de tu caso con el aparato a mano.' },
    ],
    sources,
    relatedService: { href: '/es/atm-bruxismo.html', label: 'Cómo valoramos el dolor mandibular en Carrera' },
    relatedGuides: [{ href: '/es/guias/ferula-descarga.html', label: 'Férula de descarga: función, ajuste y seguimiento' }],
    editorial: 'Información general basada en fuentes sanitarias. La valoración individual determina el diagnóstico y el tratamiento.',
  },
};
module.exports = { guides };
