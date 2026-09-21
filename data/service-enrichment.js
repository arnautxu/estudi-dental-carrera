const { isVisible } = require('./blog');
// Editorial additions for the local content preview. Sources support the
// explanations; they do not imply review or authorship by the clinic's staff.

const addedSectionIds = new Set([
  'implant-i-protesi', 'implante-y-protesis', 'aparells-dentals', 'aparatos-dentales',
  'dubtes-genives-endodoncia', 'dudas-encias-endodoncia',
  'neteja-i-blanquejament', 'limpieza-y-blanqueamiento',
  'seguiment-atm', 'seguimiento-atm', 'guies-de-consulta', 'guias-de-consulta',
  'urgencies-dentals', 'urgencias-dentales',
]);

function addSection(page, section, position = page.sections.length) {
  const existing = page.sections.findIndex(item => item.id === section.id);
  if (existing >= 0) page.sections[existing] = section;
  else page.sections.splice(position, 0, section);
}

function navigation(page, items, label) {
  const originalSections = page.sections.filter(section => !addedSectionIds.has(section.id));
  items.forEach(([id, jumpLabel], index) => {
    if (!originalSections[index]) return;
    originalSections[index].id ||= id;
    originalSections[index].jumpLabel = jumpLabel;
  });
  page.sectionNavLabel = label;
}

function addRelated(page, href, label) {
  if (page.related.some(item => item.href === href)) return;
  page.related = [...page.related, { href, type: page.lang === 'es' ? 'Guía' : 'Guia', label }];
}

function addSource(page, href, label) {
  if (page.sources.some(item => item.href === href)) return;
  page.sources = [...page.sources, { href, label }];
}

function addFaq(page, q, a) {
  const existing = page.faqs.findIndex(item => item.q === q);
  if (existing >= 0) page.faqs[existing] = { q, a };
  else page.faqs.push({ q, a });
}

function firstVisitAnswer(page, answer) {
  const question = page.lang === 'es'
    ? '¿Qué valoraréis en la primera visita?'
    : 'Què valorareu a la primera visita?';
  const faq = page.faqs.find(item => item.q === question);
  if (faq) faq.a = answer;
}

function enrichPages(pages) {
  for (const lang of ['ca', 'es']) {
    const es = lang === 'es';
    const prefix = es ? '/es' : '';
    const guideIndex = es ? '/es/blog.html' : '/blog.html';
    const guides = es ? {
      endo: '/es/guias/endodoncia-dudas.html',
      gums: '/es/guias/sangrado-encias.html',
      splint: '/es/guias/ferula-descarga.html',
    } : {
      endo: '/guies/endodoncia-dubtes.html',
      gums: '/guies/sagnat-genives.html',
      splint: '/guies/ferula-descarrega.html',
    };
    const team = es ? '/es/equipo.html' : '/equip.html';
    const perio = `${prefix}/periodoncia-endodoncia.html`;
    const hygiene = `${perio}#${es ? 'limpieza-dental' : 'neteja-dental'}`;
    const atm = es ? '/es/atm-bruxismo.html' : '/atm-bruxisme.html';
    const aesthetic = `${prefix}/estetica-dental.html`;

    const implants = pages[`${lang}-implants`];
    if (implants) {
      navigation(implants, es ? [
        ['antes-de-extraer', 'Conservar o sustituir'],
        ['fases-implantes', 'Fases del tratamiento'],
        ['cuidados-implantes', 'Riesgos y cuidados'],
      ] : [
        ['abans-dextreure', 'Conservar o substituir'],
        ['fases-implants', 'Fases del tractament'],
        ['cures-implants', 'Riscos i cures'],
      ], es ? 'Decisiones sobre implantes dentales' : 'Decisions sobre implants dentals');
      addSection(implants, {
        id: es ? 'implante-y-protesis' : 'implant-i-protesi',
        jumpLabel: es ? 'Implante y prótesis' : 'Implant i pròtesi',
        title: es ? 'Implante y diente visible: qué aporta cada parte' : 'Implant i dent visible: què aporta cada part',
        paragraphs: [es
          ? 'Conviene distinguir el soporte que se coloca en el hueso de la restauración que permite masticar. Son partes del mismo plan, pero requieren decisiones y controles distintos.'
          : 'Convé distingir el suport que es col·loca a l’os de la restauració que permet mastegar. Són parts del mateix pla, però necessiten decisions i controls diferents.'],
        blocks: es ? [
          { title: 'El implante y la conexión', text: 'El implante queda en el hueso. Una pieza de conexión, llamada pilar, lo une a la restauración. Conservar la información de la marca y el modelo del sistema puede ayudar en futuras revisiones.' },
          { title: 'La corona, el puente o la prótesis', text: 'Es la parte que repone la forma de los dientes. El plan debe explicar qué restauración se propone, cómo se limpiará y qué ajustes o reparaciones podría necesitar.' },
        ] : [
          { title: 'L’implant i la connexió', text: 'L’implant queda a l’os. Una peça de connexió, anomenada pilar, l’uneix a la restauració. Conservar la informació de la marca i el model del sistema pot ajudar en revisions futures.' },
          { title: 'La corona, el pont o la pròtesi', text: 'És la part que reposa la forma de les dents. El pla ha d’explicar quina restauració es proposa, com es netejarà i quins ajustos o reparacions podria necessitar.' },
        ],
        ctaText: es ? 'Podemos revisar contigo qué parte del tratamiento necesitas valorar.' : 'Podem revisar amb tu quina part del tractament necessites valorar.',
      }, 1);
      firstVisitAnswer(implants, es
        ? 'Revisamos si el diente puede conservarse, el estado del hueso y las encías y las alternativas para recuperar la función. También hablamos de la prótesis prevista y de cómo podrás limpiarla y mantenerla.'
        : 'Revisem si la dent es pot conservar, l’estat de l’os i les genives i les alternatives per recuperar la funció. També parlem de la pròtesi prevista i de com podràs netejar-la i mantenir-la.');
      addRelated(implants, guides.endo, es ? 'Endodoncia: dudas antes de decidir' : 'Endodòncia: dubtes abans de decidir');
      addRelated(implants, guides.gums, es ? 'Sangrado de encías: cuándo consultar' : 'Sagnat de genives: quan consultar');
    }

    const ortho = pages[`${lang}-ortho`];
    if (ortho) {
      navigation(ortho, es ? [
        ['estudio-ortodoncia', 'Estudio previo'], ['ortodoncia-invisible', 'Alineadores o brackets'],
        ['controles-ortodoncia', 'Durante el tratamiento'], ['retenedores', 'Retenedores'],
      ] : [
        ['estudi-ortodoncia', 'Estudi previ'], ['ortodoncia-invisible', 'Alineadors o brackets'],
        ['controls-ortodoncia', 'Durant el tractament'], ['retenidors', 'Retenidors'],
      ], es ? 'Decisiones sobre ortodoncia' : 'Decisions sobre ortodòncia');
      addSection(ortho, {
        id: es ? 'aparatos-dentales' : 'aparells-dentals',
        jumpLabel: es ? 'Qué aparato necesitas' : 'Quin aparell necessites',
        title: es ? 'Alineador, retenedor y férula: funciones diferentes' : 'Alineador, retenidor i fèrula: funcions diferents',
        paragraphs: [es
          ? 'Aunque algunos aparatos se parecen, no se eligen por su aspecto. Hay que saber qué objetivo tiene cada uno y cómo se coordina con otros tratamientos.'
          : 'Encara que alguns aparells s’assemblin, no es trien pel seu aspecte. Cal saber quin objectiu té cadascun i com es coordina amb altres tractaments.'],
        blocks: es ? [
          { title: 'Mover los dientes', text: 'Los alineadores y los brackets forman parte del movimiento activo planificado. Los controles comprueban cómo responden los dientes y las encías.' },
          { title: 'Mantener la posición', text: 'El retenedor ayuda a conservar la posición después del movimiento. No se utiliza como sustituto de un aparato de ortodoncia que deba hacer nuevas correcciones.' },
          { title: 'Proteger los dientes', text: 'La férula de descarga tiene otra finalidad. No sustituye a un alineador ni garantiza eliminar el dolor mandibular. Si coinciden ambas necesidades, hay que coordinarlas.', href: guides.splint, linkLabel: 'Entender para qué sirve una férula' },
        ] : [
          { title: 'Moure les dents', text: 'Els alineadors i els brackets formen part del moviment actiu planificat. Els controls comproven com responen les dents i les genives.' },
          { title: 'Mantenir la posició', text: 'El retenidor ajuda a conservar la posició després del moviment. No es fa servir com a substitut d’un aparell d’ortodòncia que hagi de fer noves correccions.' },
          { title: 'Protegir les dents', text: 'La fèrula de descàrrega té una altra finalitat. No substitueix un alineador ni garanteix eliminar el dolor mandibular. Si coincideixen totes dues necessitats, cal coordinar-les.', href: guides.splint, linkLabel: 'Entendre per a què serveix una fèrula' },
        ],
        ctaText: es ? 'Explica al pedir visita si ya llevas un aparato o una férula.' : 'Explica en demanar visita si ja portes un aparell o una fèrula.',
      });
      firstVisitAnswer(ortho, es
        ? 'Valoramos la posición de los dientes, la mordida y la salud de encías y dientes. Con esa información explicamos qué movimientos tienen sentido, qué sistema podría realizarlos y qué retención se prevé después.'
        : 'Valorem la posició de les dents, la mossegada i la salut de genives i dents. Amb aquesta informació expliquem quins moviments tenen sentit, quin sistema podria fer-los i quina retenció es preveu després.');
      addRelated(ortho, guides.splint, es ? 'Férula de descarga: dudas habituales' : 'Fèrula de descàrrega: dubtes habituals');
      addSource(ortho, 'https://www.nidcr.nih.gov/health-info/tmd', es ? 'NIDCR: aparatos y trastornos temporomandibulares' : 'NIDCR: aparells i trastorns temporomandibulars');
    }

    const periodontal = pages[`${lang}-perio`];
    if (periodontal) {
      navigation(periodontal, es ? [
        ['periodoncia', 'Encías que sangran'], ['limpieza-dental', 'Limpieza dental'],
        ['endodoncia', 'Endodoncia'], ['seguimiento-periodontal-endodoncia', 'Después del tratamiento'],
      ] : [
        ['periodoncia', 'Genives que sagnen'], ['neteja-dental', 'Neteja dental'],
        ['endodoncia', 'Endodòncia'], ['seguiment-periodontal-endodoncia', 'Després del tractament'],
      ], es ? 'Encías, limpieza dental y endodoncia' : 'Genives, neteja dental i endodòncia');
      addSection(periodontal, {
        id: es ? 'dudas-encias-endodoncia' : 'dubtes-genives-endodoncia',
        jumpLabel: es ? 'Dudas antes de consultar' : 'Dubtes abans de consultar',
        title: es ? '¿No sabes si necesitas periodoncia o endodoncia?' : 'No saps si necessites periodòncia o endodòncia?',
        paragraphs: [es
          ? 'No necesitas escoger el tratamiento antes de la visita. Explicar qué notas ayuda a orientar la exploración; un mismo síntoma puede tener causas distintas.'
          : 'No necessites escollir el tractament abans de la visita. Explicar què notes ajuda a orientar l’exploració; un mateix símptoma pot tenir causes diferents.'],
        blocks: es ? [
          { title: 'Si la duda empieza por las encías', text: 'La guía sobre sangrado explica qué cambios observar y qué preguntas llevar a la valoración. No presupone que una limpieza sea suficiente.', href: guides.gums, linkLabel: 'Leer la guía sobre sangrado de encías' },
          { title: 'Si te han propuesto una endodoncia', text: 'La guía reúne dudas sobre el tratamiento de conductos, la reconstrucción posterior y los controles. Puede ayudarte a preparar la conversación sobre conservar el diente.', href: guides.endo, linkLabel: 'Leer las dudas sobre endodoncia' },
        ] : [
          { title: 'Si el dubte comença per les genives', text: 'La guia sobre sagnat explica quins canvis observar i quines preguntes portar a la valoració. No pressuposa que una neteja sigui suficient.', href: guides.gums, linkLabel: 'Llegir la guia sobre sagnat de genives' },
          { title: 'Si t’han proposat una endodòncia', text: 'La guia reuneix dubtes sobre el tractament de conductes, la reconstrucció posterior i els controls. Pot ajudar-te a preparar la conversa sobre conservar la dent.', href: guides.endo, linkLabel: 'Llegir els dubtes sobre endodòncia' },
        ],
        ctaText: es ? 'Puedes solicitar una valoración explicando el motivo de consulta, sin elegir antes un tratamiento.' : 'Pots sol·licitar una valoració explicant el motiu de consulta, sense triar abans un tractament.',
      });
      addFaq(periodontal,
        es ? '¿La endodoncia se hace con anestesia?' : 'L’endodòncia es fa amb anestèsia?',
        es ? 'Habitualmente se utiliza anestesia local para tratar el diente. Explica si has tenido problemas con la anestesia o si algo te preocupa. Después puede haber molestias; sigue las indicaciones del profesional y consulta si no evolucionan como te han explicado.'
          : 'Habitualment es fa servir anestèsia local per tractar la dent. Explica si has tingut problemes amb l’anestèsia o si alguna cosa et preocupa. Després hi pot haver molèsties; segueix les indicacions del professional i consulta si no evolucionen com t’han explicat.');
      addRelated(periodontal, guides.gums, es ? 'Sangrado de encías: cómo preparar la consulta' : 'Sagnat de genives: com preparar la consulta');
      addRelated(periodontal, guides.endo, es ? 'Endodoncia: tratamiento y dudas' : 'Endodòncia: tractament i dubtes');
    }

    const aesthetics = pages[`${lang}-aesthetic`];
    if (aesthetics) {
      navigation(aesthetics, es ? [
        ['blanqueamiento', 'Blanqueamiento dental'], ['carillas', 'Carillas y composite'],
        ['mantenimiento-estetica', 'Mantenimiento'],
      ] : [
        ['blanquejament', 'Blanquejament dental'], ['carilles', 'Carilles i composite'],
        ['manteniment-estetica', 'Manteniment'],
      ], es ? 'Opciones de estética dental' : 'Opcions d’estètica dental');
      // Role and image are already published in equip.html / es/equipo.html.
      aesthetics.professional = {
        name: 'Dra. Isabel Sierra',
        role: es ? 'Médica odontóloga · Endodoncia y estética' : 'Metgessa odontòloga · Endodòncia i estètica',
        href: `${team}#isabel-sierra`,
        image: '/assets/img/equip/isabel-sierra.webp', imageWidth: 900, imageHeight: 1080,
      };
      addSection(aesthetics, {
        id: es ? 'limpieza-y-blanqueamiento' : 'neteja-i-blanquejament',
        jumpLabel: es ? 'Limpieza o blanqueamiento' : 'Neteja o blanquejament',
        title: es ? 'Limpieza dental y blanqueamiento: objetivos distintos' : 'Neteja dental i blanquejament: objectius diferents',
        paragraphs: [es
          ? 'Si el motivo de consulta es el color, primero distinguimos los depósitos sobre el diente del color de la propia dentición y de las restauraciones. No todo se resuelve con el mismo tratamiento.'
          : 'Si el motiu de consulta és el color, primer distingim els dipòsits sobre la dent del color de la dentició i de les restauracions. No tot es resol amb el mateix tractament.'],
        blocks: es ? [
          { title: 'Retirar depósitos y cuidar las encías', text: 'La higiene profesional retira depósitos. Se acompaña de una valoración de las encías para decidir si hace falta atención periodontal. No equivale a cambiar el color natural de los dientes.', href: hygiene, linkLabel: 'Consultar limpieza dental y salud de las encías' },
          { title: 'Aclarar el color del diente natural', text: 'El blanqueamiento busca aclarar el diente natural. Los empastes, coronas y carillas conservan su color, por lo que hay que valorar el conjunto antes de decidir.', href: '#blanqueamiento', linkLabel: 'Ver qué puede cambiar el blanqueamiento' },
        ] : [
          { title: 'Retirar dipòsits i cuidar les genives', text: 'La higiene professional retira dipòsits. S’acompanya d’una valoració de les genives per decidir si cal atenció periodontal. No equival a canviar el color natural de les dents.', href: hygiene, linkLabel: 'Consultar neteja dental i salut de les genives' },
          { title: 'Aclarir el color de la dent natural', text: 'El blanquejament busca aclarir la dent natural. Els empastaments, les corones i les carilles conserven el seu color, de manera que cal valorar el conjunt abans de decidir.', href: '#blanquejament', linkLabel: 'Veure què pot canviar el blanquejament' },
        ],
      }, 0);
      firstVisitAnswer(aesthetics, es
        ? 'Hablamos de qué quieres cambiar y qué prefieres conservar. Revisamos el color, las restauraciones, las encías y la mordida para comparar blanqueamiento, composite, carillas u otras opciones que puedan conservar más diente.'
        : 'Parlem del que vols canviar i del que prefereixes conservar. Revisem el color, les restauracions, les genives i la mossegada per comparar blanquejament, composite, carilles o altres opcions que puguin conservar més dent.');
      addFaq(aesthetics,
        es ? '¿Puedo ponerme carillas si aprieto los dientes?' : 'Puc posar-me carilles si estrenyo les dents?',
        es ? 'Apretar o rechinar los dientes puede influir en la elección y el riesgo de dañar una restauración. Antes de decidir, valoramos el desgaste y la función. Una férula no convierte por sí sola cualquier caso en adecuado para carillas.'
          : 'Estrènyer o grinyolar les dents pot influir en la tria i el risc de danyar una restauració. Abans de decidir, valorem el desgast i la funció. Una fèrula no converteix per si sola qualsevol cas en adequat per a carilles.');
      addRelated(aesthetics, guides.splint, es ? 'Férula de descarga y protección dental' : 'Fèrula de descàrrega i protecció dental');
      addRelated(aesthetics, guides.gums, es ? 'Encías que sangran: dudas frecuentes' : 'Genives que sagnen: dubtes freqüents');
    }

    const jaw = pages[`${lang}-atm`];
    if (jaw) {
      navigation(jaw, es ? [
        ['sintomas-atm', 'Qué síntomas explicar'], ['bruxismo-y-dolor', 'Bruxismo y dolor'],
        ['ferula-descarga', 'Cuándo valorar una férula'],
      ] : [
        ['simptomes-atm', 'Quins símptomes explicar'], ['bruxisme-i-dolor', 'Bruxisme i dolor'],
        ['ferula-descarrega', 'Quan valorar una fèrula'],
      ], es ? 'Dolor mandibular, bruxismo y férula' : 'Dolor mandibular, bruxisme i fèrula');
      addSection(jaw, {
        id: es ? 'seguimiento-atm' : 'seguiment-atm',
        jumpLabel: es ? 'Cómo valorar la evolución' : 'Com valorar l’evolució',
        title: es ? 'Cómo saber si las medidas están ayudando' : 'Com saber si les mesures estan ajudant',
        paragraphs: [es
          ? 'Anotar si puedes comer o abrir la boca con menos molestias ayuda a explicar la evolución en la visita.'
          : 'Anotar si pots menjar o obrir la boca amb menys molèsties ajuda a explicar l’evolució a la visita.',
        es
          ? `Si una férula causa dolor, deja de usarla y consulta al profesional que la controla. La <a href="${guides.splint}">guía de la férula de descarga</a> explica sus objetivos y las dudas que conviene plantear.`
          : `Si una fèrula causa dolor, deixa de fer-la servir i consulta el professional que la controla. La <a href="${guides.splint}">guia de la fèrula de descàrrega</a> explica els seus objectius i els dubtes que convé plantejar.`],
        items: es ? [
          'Anota en qué situaciones aparece la molestia y qué actividades limita.',
          'Explica si llevas una férula, un retenedor o un tratamiento de ortodoncia.',
          'Comenta los cambios desde la última valoración, tanto las mejoras como las dificultades.',
        ] : [
          'Anota en quines situacions apareix la molèstia i quines activitats limita.',
          'Explica si portes una fèrula, un retenidor o un tractament d’ortodòncia.',
          'Comenta els canvis des de l’última valoració, tant les millores com les dificultats.',
        ],
        ctaText: es ? 'Pide una valoración para revisar el dolor, el movimiento o un aparato que ya utilices.' : 'Demana una valoració per revisar el dolor, el moviment o un aparell que ja facis servir.',
      });
      if (isVisible(es ? 'dolor-mandibula-despertar-es' : 'dolor-mandibula-despertar')) {
        addRelated(jaw, es ? '/es/guias/dolor-mandibula-despertar.html' : '/guies/dolor-mandibula-despertar.html', es ? 'Dolor de mandíbula al despertar: qué observar' : 'Dolor de mandíbula en despertar: què observar');
      }
      addRelated(jaw, guides.splint, es ? 'Férula de descarga: qué hace y qué no' : 'Fèrula de descàrrega: què fa i què no');
      addSource(jaw, 'https://www.nidcr.nih.gov/health-info/tmd', es ? 'NIDCR: objetivos y seguimiento de los trastornos temporomandibulares' : 'NIDCR: objectius i seguiment dels trastorns temporomandibulars');
    }

    const lleida = pages[`${lang}-lleida`];
    if (lleida) {
      navigation(lleida, es ? [
        ['tratamientos', 'Tratamientos'], ['equipo', 'Equipo'], ['primera-visita', 'Primera visita'],
        ['como-llegar', 'Cómo llegar'], ['contacto', 'Seguimiento y contacto'],
      ] : [
        ['tractaments', 'Tractaments'], ['equip', 'Equip'], ['primera-visita', 'Primera visita'],
        ['com-arribar', 'Com arribar'], ['contacte', 'Seguiment i contacte'],
      ], es ? 'Información de la clínica de Lleida' : 'Informació de la clínica de Lleida');
      const treatments = lleida.sections.find(section => section.id === (es ? 'tratamientos' : 'tractaments'));
      if (treatments) {
        delete treatments.items;
        treatments.blocks = es ? [
          { title: 'Implantes y alternativas', text: 'Si falta un diente, estudiamos cómo recuperar la función y qué opciones conservadoras existen.', href: '/es/implantes-dentales.html', linkLabel: 'Valorar implantes y otras opciones' },
          { title: 'Ortodoncia invisible y brackets', text: 'Para revisar la posición de los dientes y la mordida. El sistema se elige después del estudio.', href: '/es/ortodoncia.html#ortodoncia-invisible', linkLabel: 'Comparar alineadores y brackets' },
          { title: 'Periodoncia', text: 'Si las encías sangran, se retraen o hay movilidad, valoramos los tejidos que sostienen los dientes.', href: `${perio}#periodoncia`, linkLabel: 'Consultar sobre las encías' },
          { title: 'Limpieza dental', text: 'La valoración de las encías permite decidir si basta con una higiene o hace falta otro tratamiento.', href: hygiene, linkLabel: 'Conocer la valoración de higiene' },
          { title: 'Endodoncia', text: 'Si el problema está en el interior del diente, estudiamos si puede tratarse y reconstruirse.', href: `${perio}#endodoncia`, linkLabel: 'Entender el tratamiento de conductos' },
          { title: 'ATM y bruxismo', text: 'Dolor de mandíbula, tensión, bloqueos o desgaste necesitan una valoración de su posible origen.', href: atm, linkLabel: 'Consultar dolor mandibular y bruxismo' },
          { title: 'Blanqueamiento dental', text: 'Para valorar un cambio de color de los dientes naturales, teniendo en cuenta las restauraciones existentes.', href: `${aesthetic}#blanqueamiento`, linkLabel: 'Ver qué puede cambiar el blanqueamiento' },
          { title: 'Carillas y composite', text: 'Si quieres cambiar una forma o reparar un borde, comparamos la superficie que necesita restauración.', href: `${aesthetic}#carillas`, linkLabel: 'Comparar opciones conservadoras' },
        ] : [
          { title: 'Implants i alternatives', text: 'Si falta una dent, estudiem com recuperar la funció i quines opcions conservadores existeixen.', href: '/implants-dentals.html', linkLabel: 'Valorar implants i altres opcions' },
          { title: 'Ortodòncia invisible i brackets', text: 'Per revisar la posició de les dents i la mossegada. El sistema es tria després de l’estudi.', href: '/ortodoncia.html#ortodoncia-invisible', linkLabel: 'Comparar alineadors i brackets' },
          { title: 'Periodòncia', text: 'Si les genives sagnen, es retreuen o hi ha mobilitat, valorem els teixits que sostenen les dents.', href: `${perio}#periodoncia`, linkLabel: 'Consultar sobre les genives' },
          { title: 'Neteja dental', text: 'La valoració de les genives permet decidir si n’hi ha prou amb una higiene o cal un altre tractament.', href: hygiene, linkLabel: 'Conèixer la valoració d’higiene' },
          { title: 'Endodòncia', text: 'Si el problema és a l’interior de la dent, estudiem si es pot tractar i reconstruir.', href: `${perio}#endodoncia`, linkLabel: 'Entendre el tractament de conductes' },
          { title: 'ATM i bruxisme', text: 'Dolor de mandíbula, tensió, bloquejos o desgast necessiten una valoració del seu possible origen.', href: atm, linkLabel: 'Consultar dolor mandibular i bruxisme' },
          { title: 'Blanquejament dental', text: 'Per valorar un canvi de color de les dents naturals, tenint en compte les restauracions existents.', href: `${aesthetic}#blanquejament`, linkLabel: 'Veure què pot canviar el blanquejament' },
          { title: 'Carilles i composite', text: 'Si vols canviar una forma o reparar una vora, comparem la superfície que necessita restauració.', href: `${aesthetic}#carilles`, linkLabel: 'Comparar opcions conservadores' },
        ];
      }
      addSection(lleida, {
        id: es ? 'urgencias-dentales' : 'urgencies-dentals',
        jumpLabel: es ? 'Urgencias dentales' : 'Urgències dentals',
        title: es ? 'Urgencias dentales en Lleida: cómo pedir atención' : 'Urgències dentals a Lleida: com demanar atenció',
        paragraphs: [es
          ? 'Si tienes dolor intenso, hinchazón o te has dado un golpe en un diente, llama al <a href="tel:+34973268826">973 268 826</a>. Explica qué ha pasado y desde cuándo. Confirmaremos la prioridad y la disponibilidad antes de que te desplaces.'
          : 'Si tens dolor intens, inflor o t’has donat un cop en una dent, truca al <a href="tel:+34973268826">973 268 826</a>. Explica què ha passat i des de quan. Confirmarem la prioritat i la disponibilitat abans que et desplacis.'],
        items: es ? [
          'Al llamar, indica si hay fiebre, hinchazón o dificultad para abrir la boca. Comenta también si el problema apareció tras un tratamiento dental.',
          'Si la clínica está cerrada o no consigues atención, el 061 Salut Respon puede orientarte. No esperes la respuesta de un formulario ante una urgencia.',
          'Si te cuesta respirar o tragar, o la hinchazón de la boca es importante, llama al 112.',
        ] : [
          'Quan truquis, indica si hi ha febre, inflor o dificultat per obrir la boca. Comenta també si el problema va aparèixer després d’un tractament dental.',
          'Si la clínica està tancada o no aconsegueixes atenció, el 061 Salut Respon et pot orientar. No esperis la resposta d’un formulari davant d’una urgència.',
          'Si et costa respirar o empassar, o la inflor de la boca és important, truca al 112.',
        ],
      });
      addSource(lleida, 'https://canalsalut.gencat.cat/ca/contacte/', es ? 'Canal Salut: 061 Salut Respon y emergencias' : 'Canal Salut: 061 Salut Respon i emergències');
      addSource(lleida, 'https://www.nhs.uk/conditions/dental-abscess/', es ? 'NHS: infección dental y señales de urgencia' : 'NHS: infecció dental i senyals d’urgència');
      addSection(lleida, {
        id: es ? 'guias-de-consulta' : 'guies-de-consulta',
        jumpLabel: es ? 'Guías para preparar la consulta' : 'Guies per preparar la consulta',
        title: es ? 'Preguntas que puedes preparar antes de venir' : 'Preguntes que pots preparar abans de venir',
        paragraphs: [es
          ? `Las <a href="${guideIndex}">guías de consulta</a> reúnen explicaciones para preparar la conversación con el equipo. No hace falta llegar con un diagnóstico ni tener decidido un tratamiento.`
          : `Les <a href="${guideIndex}">guies de consulta</a> reuneixen explicacions per preparar la conversa amb l’equip. No cal arribar amb un diagnòstic ni tenir decidit un tractament.`],
        blocks: es ? [
          { title: 'Me han hablado de una endodoncia', text: 'Qué preguntar sobre los conductos, la reconstrucción y los controles.', href: guides.endo, linkLabel: 'Dudas sobre endodoncia' },
          { title: 'Me sangran las encías', text: 'Qué cambios explicar y por qué conviene valorar el origen del sangrado.', href: guides.gums, linkLabel: 'Dudas sobre sangrado de encías' },
          { title: 'Tengo dudas sobre una férula', text: 'Para qué se propone, qué límites tiene y cómo se revisa.', href: guides.splint, linkLabel: 'Dudas sobre la férula de descarga' },
        ] : [
          { title: 'M’han parlat d’una endodòncia', text: 'Què preguntar sobre els conductes, la reconstrucció i els controls.', href: guides.endo, linkLabel: 'Dubtes sobre endodòncia' },
          { title: 'Em sagnen les genives', text: 'Quins canvis explicar i per què convé valorar l’origen del sagnat.', href: guides.gums, linkLabel: 'Dubtes sobre sagnat de genives' },
          { title: 'Tinc dubtes sobre una fèrula', text: 'Per a què es proposa, quins límits té i com es revisa.', href: guides.splint, linkLabel: 'Dubtes sobre la fèrula de descàrrega' },
        ],
      });
      addRelated(lleida, guideIndex, es ? 'Guías para preparar la consulta dental' : 'Guies per preparar la consulta dental');
    }
  }
  const readingLinks = [
    ['ca-implants', 'implant-i-protesi', '/guies/implant-o-pont.html', 'Si has de substituir una dent, consulta <a href="/guies/implant-o-pont.html">què convé comparar entre un implant i un pont dental</a>.'],
    ['es-implants', 'implante-y-protesis', '/es/guias/implante-o-puente.html', 'Si necesitas sustituir un diente, consulta <a href="/es/guias/implante-o-puente.html">qué conviene comparar entre un implante y un puente dental</a>.'],
    ['ca-ortho', 'aparells-dentals', '/guies/alineadors-o-braquets.html', 'Per preparar la visita, pots llegir <a href="/guies/alineadors-o-braquets.html">què convé comparar entre alineadors i bràquets</a>.'],
    ['es-ortho', 'aparatos-dentales', '/es/guias/alineadores-o-brackets.html', 'Para preparar la visita, puedes leer <a href="/es/guias/alineadores-o-brackets.html">qué conviene comparar entre alineadores y brackets</a>.'],
    ['ca-aesthetic', 'neteja-i-blanquejament', '/guies/taques-dents.html', 'Si el que et preocupa és una taca, consulta <a href="/guies/taques-dents.html">què convé observar abans de decidir entre neteja i blanquejament</a>.'],
    ['es-aesthetic', 'limpieza-y-blanqueamiento', '/es/guias/manchas-dientes.html', 'Si lo que te preocupa es una mancha, consulta <a href="/es/guias/manchas-dientes.html">qué conviene observar antes de decidir entre limpieza y blanqueamiento</a>.'],
  ];
  for (const [key, sectionId, href, paragraph] of readingLinks) {
    const section = pages[key]?.sections.find(item => item.id === sectionId);
    if (section && !section.paragraphs.some(text => text.includes(href))) {
      section.paragraphs.push(paragraph);
    }
  }
  for (const guide of Object.values(require('./guides-library').guides)) {
    if (!isVisible(guide.key)) continue;
    const pathname = guide.relatedService.href.split('#')[0].slice(1);
    const page = Object.values(pages).find(item => item.path === pathname);
    if (page) addRelated(page, '/' + guide.path, guide.h1);
  }
  return pages;
}

module.exports = { enrichPages };
