// Original clinic photographs, selected and resized from the supplied SSD.
// Captions describe the scene without attributing a diagnosis to the person pictured.
const descriptions = {
  'atm-exploracio-lleida': {
    height: 1080,
    ca: { alt: 'Professional explorant la boca d’una pacient a Carrera, a Lleida', caption: 'Exploració a la consulta de Carrera, a Lleida.' },
    es: { alt: 'Profesional explorando la boca de una paciente en Carrera, en Lleida', caption: 'Exploración en la consulta de Carrera, en Lleida.' },
  },
  'atm-explicacio-lleida': {
    ca: { alt: 'Professional assenyalant la zona de la mandíbula a la consulta de Lleida', caption: 'Una explicació sobre la zona mandibular a la consulta de Lleida.' },
    es: { alt: 'Profesional señalando la zona de la mandíbula en la consulta de Lleida', caption: 'Una explicación sobre la zona mandibular en la consulta de Lleida.' },
  },
  'implants-planificacio-lleida': {
    ca: { alt: 'Professional consultant imatges dentals en una pantalla a Carrera, a Lleida', caption: 'Revisió d’imatges dentals a la consulta de Lleida.' },
    es: { alt: 'Profesional consultando imágenes dentales en una pantalla en Carrera, en Lleida', caption: 'Revisión de imágenes dentales en la consulta de Lleida.' },
  },
  'implant-preparacio-tremp': {
    height: 1080,
    ca: { alt: 'Mans amb guants preparant instrumental dental al gabinet de Tremp', caption: 'Preparació de l’instrumental al gabinet de Tremp.' },
    es: { alt: 'Manos con guantes preparando instrumental dental en el gabinete de Tremp', caption: 'Preparación del instrumental en el gabinete de Tremp.' },
  },
  'escaner-intraoral-tremp': {
    ca: { alt: 'Professionals amb un escàner intraoral i una imatge digital de les dents a Tremp', caption: 'Escàner intraoral i visualització digital al gabinet de Tremp.' },
    es: { alt: 'Profesionales con un escáner intraoral y una imagen digital de los dientes en Tremp', caption: 'Escáner intraoral y visualización digital en el gabinete de Tremp.' },
  },
  'valoracio-digital-tremp': {
    ca: { alt: 'Professional treballant amb l’ordinador del gabinet de Tremp', caption: 'L’ordinador i l’equipament de treball d’un dels gabinets de Tremp.' },
    es: { alt: 'Profesional trabajando con el ordenador del gabinete de Tremp', caption: 'El ordenador y el equipo de trabajo de uno de los gabinetes de Tremp.' },
  },
  'higiene-dental-tremp': {
    ca: { alt: 'Professional atenent una pacient a la butaca dental de Tremp', caption: 'Exploració bucodental al gabinet de Tremp.' },
    es: { alt: 'Profesional atendiendo a una paciente en el sillón dental de Tremp', caption: 'Exploración bucodental en el gabinete de Tremp.' },
  },
  'conversa-consulta-tremp': {
    ca: { alt: 'Professional i pacient conversant al costat de la butaca dental de Tremp', caption: 'Un moment de conversa al gabinet de Tremp.' },
    es: { alt: 'Profesional y paciente conversando junto al sillón dental de Tremp', caption: 'Un momento de conversación en el gabinete de Tremp.' },
  },
  'tractament-dental-tremp': {
    ca: { alt: 'Professional treballant amb instrumental dental al gabinet de Tremp', caption: 'Atenció odontològica al gabinet de Tremp.' },
    es: { alt: 'Profesional trabajando con instrumental dental en el gabinete de Tremp', caption: 'Atención odontológica en el gabinete de Tremp.' },
  },
  'restauracio-dental-lleida': {
    ca: { alt: 'Mans amb guants treballant sobre una peça dental a Carrera, a Lleida', caption: 'Detall del treball sobre una peça dental a la clínica de Lleida.' },
    es: { alt: 'Manos con guantes trabajando sobre una pieza dental en Carrera, en Lleida', caption: 'Detalle del trabajo sobre una pieza dental en la clínica de Lleida.' },
  },
  'ortodoncia-model-lleida': {
    ca: { alt: 'Model de dents amb bràquets a la clínica de Lleida', caption: 'Model dental amb bràquets per explicar l’ortodòncia a la consulta de Lleida.' },
    es: { alt: 'Modelo de dientes con brackets en la clínica de Lleida', caption: 'Modelo dental con brackets para explicar la ortodoncia en la consulta de Lleida.' },
  },
  'alineadors-lleida': {
    height: 1080,
    ca: { alt: 'Alineador transparent sobre la safata del gabinet de Lleida', caption: 'Detall d’un alineador transparent a la consulta de Lleida.' },
    es: { alt: 'Alineador transparente sobre la bandeja del gabinete de Lleida', caption: 'Detalle de un alineador transparente en la consulta de Lleida.' },
  },
  'recepcio-tremp': {
    ca: { alt: 'Una pacient parlant amb la recepcionista al taulell de Tremp', caption: 'La recepció de la clínica de Tremp.' },
    es: { alt: 'Una paciente hablando con la recepcionista en el mostrador de Tremp', caption: 'La recepción de la clínica de Tremp.' },
  },
  'recepcio-lleida': {
    ca: { alt: 'L’equip de recepció davant de l’ordinador a la clínica de Lleida', caption: 'L’equip de recepció de Carrera, a Lleida.' },
    es: { alt: 'El equipo de recepción frente al ordenador en la clínica de Lleida', caption: 'El equipo de recepción de Carrera, en Lleida.' },
  },
  'gabinet-tremp': {
    ca: { alt: 'Gabinet dental de Tremp amb butaca, llum i instrumental', caption: 'Un dels gabinets de la clínica de Tremp.' },
    es: { alt: 'Gabinete dental de Tremp con sillón, luz e instrumental', caption: 'Uno de los gabinetes de la clínica de Tremp.' },
  },
  'radiologia-lleida': {
    height: 1080,
    ca: { alt: 'Professional ajustant l’equip de radiologia dental amb un pacient a Lleida', caption: 'Preparació de l’equip de radiologia dental a la clínica de Lleida.' },
    es: { alt: 'Profesional ajustando el equipo de radiología dental con un paciente en Lleida', caption: 'Preparación del equipo de radiología dental en la clínica de Lleida.' },
  },
  'cbct-lleida': {
    ca: { alt: 'Imatges tridimensionals de les estructures dentals en una pantalla a Lleida', caption: 'Visualització d’imatges de radiologia dental a la consulta de Lleida.' },
    es: { alt: 'Imágenes tridimensionales de las estructuras dentales en una pantalla en Lleida', caption: 'Visualización de imágenes de radiología dental en la consulta de Lleida.' },
  },
};

const photos = Object.fromEntries(Object.entries(descriptions).map(([id, description]) => {
  const base = `/assets/img/editorial/${id}`;
  return [id, {
    src: `${base}.webp`,
    srcset: `${base}-640.webp 640w, ${base}-960.webp 960w, ${base}.webp 1440w`,
    width: 1440,
    height: description.height || 960,
    ca: description.ca,
    es: description.es,
  }];
}));

function photograph(id, lang) {
  if (!Object.prototype.hasOwnProperty.call(photos, id)) throw new Error(`Unknown editorial photograph: ${id}`);
  if (lang !== 'ca' && lang !== 'es') throw new Error(`Unsupported photograph language: ${lang}`);
  const { src, srcset, width, height } = photos[id];
  return { src, srcset, width, height, ...photos[id][lang] };
}

// Each optional section names both translations explicitly so placement stays editorial.
const selections = [
  ['endodoncia-dubtes', 'tractament-dental-tremp', 'restauracio-dental-lleida', 'despres', 'despues'],
  ['sagnat-genives', 'higiene-dental-tremp', 'conversa-consulta-tremp', 'preparar-consulta', 'preparar-consulta'],
  ['ferula-descarrega', 'atm-explicacio-lleida', 'atm-exploracio-lleida', 'dolor-mandibular', 'dolor-mandibular'],
  ['implant-o-pont', 'implants-planificacio-lleida', 'implant-preparacio-tremp', 'valoracio-professional', 'valoracion-profesional'],
  ['alineadors-o-braquets', 'ortodoncia-model-lleida', 'alineadors-lleida', 'rutina-us', 'rutina-uso'],
  ['taques-dents', 'conversa-consulta-tremp', 'higiene-dental-tremp', 'neteja-superficie', 'limpieza-superficie'],
  ['dolor-mandibula-despertar', 'atm-exploracio-lleida', 'atm-explicacio-lleida', 'que-observar', 'que-observar'],
  ['primera-visita-dentista-infantil-ca', 'recepcio-tremp'],
  ['ortodoncia-infantil-ca', 'ortodoncia-model-lleida'],
  ['clic-mandibula-ca', 'atm-explicacio-lleida'],
  ['dolor-mandibula-dentista-fisioterapeuta-ca', 'atm-exploracio-lleida'],
  ['implant-immediat-carrega-immediata-ca', 'implant-preparacio-tremp', 'implants-planificacio-lleida', 'seleccio', 'seleccion'],
  ['implants-multiples-ca', 'escaner-intraoral-tremp'],
  ['arcada-completa-quatre-sis-implants-ca', 'implants-planificacio-lleida', 'escaner-intraoral-tremp', 'nombre', 'numero'],
  ['protesi-fixa-removible-ca', 'valoracio-digital-tremp', 'restauracio-dental-lleida', 'materials', 'materiales'],
  ['facetes-composite-porcellana-ca', 'restauracio-dental-lleida'],
  ['composite-dental-ca', 'restauracio-dental-lleida'],
  ['queixals-seny-ca', 'radiologia-lleida', 'gabinet-tremp', 'recuperacio', 'recuperacion'],
  ['dent-trencada-cop-ca', 'recepcio-lleida'],
  ['radiografia-panoramica-cbct-ca', 'cbct-lleida', 'radiologia-lleida', 'abans', 'antes'],
  ['neteja-dental-raspat-ca', 'higiene-dental-tremp'],
];

function enrichGuides(guides) {
  for (const [key, opening, detail, caSection, esSection] of selections) {
    const ca = Object.prototype.hasOwnProperty.call(guides, key) ? guides[key] : null;
    if (!ca || ca.lang !== 'ca') throw new Error(`Missing Catalan guide for editorial photography: ${key}`);
    const es = Object.values(guides).find(guide => guide.path === ca.alternatePath);
    if (!es || es.lang !== 'es' || es.alternatePath !== ca.path) throw new Error(`Missing Spanish counterpart for editorial photography: ${key}`);
    for (const guide of [ca, es]) {
      const photo = photograph(opening, guide.lang);
      Object.assign(guide, {
        photography: photo,
        image: photo.src.slice(1),
        imageAlt: photo.alt,
        imageWidth: photo.width,
        imageHeight: photo.height,
      });
      if (detail) {
        const id = guide.lang === 'ca' ? caSection : esSection;
        const section = guide.sections.find(section => section.id === id);
        if (!section) throw new Error(`Missing photography section ${id} in guide ${guide.key}`);
        section.photography = photograph(detail, guide.lang);
      }
    }
  }
  return guides;
}

module.exports = { photos, photograph, enrichGuides };
