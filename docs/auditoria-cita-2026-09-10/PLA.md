# Estudi Dental Carrera: auditoria i pla de textos i cita

Data: 10 de setembre de 2026. Estat: pla aprovat i implementat localment. Sense desplegament. Vegeu IMPLEMENTACIO.md per al resultat i les comprovacions. El diagnòstic següent conserva l’estat anterior als canvis.

## Decisió principal

Convertir el contacte en una petició guiada breu: què necessites, on prefereixes venir i com et podem contactar. Cada recepció rep les peticions de la seva clínica, confirmat per Arnau. La cita es confirma posteriorment; no es reserva una hora al web.

Conservar la identitat càlida, editorial i vinculada als espais reals. Les fotografies dels professionals de Tremp queden expressament fora d'aquesta intervenció.

## Abast i evidència

- Checkout: `/Users/arnau/WEBS/Estudi Dental Carrera`; HEAD `c6fa27fd9c69c62c0f678d5f0eeef148b7bace54`. Hi ha moltes modificacions prèvies; HEAD no representa tot el contingut auditat. No s'han alterat.
- S'ha comprovat igualtat byte a byte entre producció i el fitxer local per a `es/index.html`, `es/sedes.html`, `es/servicios.html`, `assets/css/main.css` i `assets/js/main.js`.
- Inspecció visual i DOM de portada, seus/contacte i serveis en producció. Mòbil: 390 × 844. Escriptori: 1280 × 720 i 1440 × 900. Revisió de codi de l'equip, API de contacte, generador i dades de landings, textos de privacitat i components compartits.
- Impeccable 4.3.1, playbook `audit`, detector real sobre cinc documents: portada CA i portada/serveis/equip/seus ES. `Human Writing` per a llenguatge artificial; `Ogilvy Copywriting` per a claredat, posicionament i evidència. No s'ha executat el procediment separat `critique` ni se'n presenta una puntuació.
- No s'han enviat formularis, correus ni WhatsApps. No s'ha verificat la recepció real de correus ni les variables de producció. No s'ha fet una certificació WCAG, Lighthouse ni mesurament de Core Web Vitals. La correcció editorial exhaustiva serà la primera fase d'implementació.

## Diagnòstic

La web té actius propis: arquitectura modernista, fotografies contextuals, paleta càlida, noms de professionals i explicació de la primera visita. No cal substituir aquesta identitat. La sensació genèrica es concentra en el llenguatge repetit, el catàleg de tractaments i la falta de continuïtat entre seu, botó i contacte.

El formulari ja inclou «Clínica preferida», però apareix després del nom, telèfon i correu. La barra mòbil i els accessos generals a WhatsApp utilitzen Lleida sense identificar-la. Un pacient de Tremp pot interpretar que parla amb Tremp mentre obre el contacte de Lleida. Les landings de Tremp sí que defineixen telèfon i WhatsApp propis, però el CTA del formulari no traspassa aquesta selecció.

### Puntuació tècnica orientativa de la mostra

| Dimensió | Punts / 4 | Evidència principal |
|---|---:|---|
| Accessibilitat | 2 | Labels i focus existents; llegibilitat petita, controls de carrusel molt baixos i moviment continu a revisar. |
| Rendiment | 3 | Web sense framework de client, WebP, dimensions i càrrega diferida en diverses imatges; moviment i scripts compartits a simplificar. Sense dades de camp. |
| Responsive | 2 | Sense overflow horitzontal a la portada mòbil observada; H1 de 359,5 px d'alt i CTA a y≈721,5 dins una pantalla de 844 px. |
| Tokens i tema | 3 | Sistema visual recognoscible; colors i tractaments locals dispersos. No es requereix mode fosc. |
| Coherència d'implementació | 2 | Selecció de seu sense continuïtat en els canals; missatges i noms inconsistents. |
| **Total** | **12/20** | **Hi ha una base útil, amb feina important en el recorregut de contacte.** |

La puntuació és judici sobre l'abast inspeccionat, no una mesura automàtica de qualitat de tota la web.

### Troballes verificades i prioritats

**P1 — Destí de contacte ambigu.** `assets/js/main.js:1004`, `es/index.html:183`, `api/landing.js:76`. La barra mòbil té Lleida per defecte; el menú mòbil diu «Pedir cita» però truca directament a Lleida. Els CTA de les landings arriben al formulari sense seu. Fer servir un únic model de seus per a selecció, enllaços, missatges i enviament. Accions: `impeccable shape`, `impeccable clarify`, `impeccable harden`.

**P1 — Promeses i expectatives desalineades.** `es/sedes.html:454`, `es/index.html:607`, `assets/js/main.js:160`. «En menos de 24 horas» necessita confirmació operativa; «Reserva tu cita» suggereix una reserva que el formulari no fa. Unificar com a sol·licitud i explicar qui contactarà i per a què. No substituir el termini per un altre inventat. Acció: `impeccable clarify`.

**P1 — Recuperació d'errors envia tothom a Lleida.** `assets/js/main.js:161`. Encara que s'hagi seleccionat Tremp, el missatge de fallada indica el telèfon de Lleida. La validació pròpia comprova camps buits, mentre l'API també valida formats: un rebuig del servidor es transforma en error genèric d'enviament. Afegir errors per camp i alternatives de la seu escollida. Acció: `impeccable harden`.

**P2 — El pacient ha de pensar en especialitats.** `es/sedes.html:516`. «Servicio de interés» obliga a reconèixer endodòncia o periodòncia; a més, no ofereix ATM/bruxisme explícitament malgrat ser un eix principal. Substituir-lo per motius en llenguatge quotidià, opcionals, sense inferir diagnòstics. Acció: `impeccable shape`.

**P2 — Portada ES massa extensa al mòbil.** `es/index.html:219–227`, `assets/css/main.css:569`. Localitat i especialitats es repeteixen entre etiqueta, títol i paràgraf. A 390 × 844 el primer CTA queda molt avall, just abans de la barra fixa. Fer un títol més curt i mantenir les dues localitats en una línia clara. No reduir indiscriminadament tota la tipografia. Accions: `impeccable distill`, `impeccable adapt`.

**P2 — Formulari amb lectura petita i jerarquia poc humana.** `assets/css/main.css:1980`. Labels mesurats de 12,8 px, en majúscules amb espaiat; inputs de 16 px i 46 px d'alt, que convé mantenir. La regla general també domina visualment el text de consentiment. Proposar labels en caixa de frase i 16 px en el nou recorregut. Els selectors de foto mesurats tenen una àrea molt baixa, aproximadament 26 × 2 px: ampliar l'àrea clicable sense engrandir necessàriament la marca visible. És una millora d'usabilitat; no s'atribueix una infracció normativa només per no arribar a 44 px. Accions: `impeccable typeset`, `impeccable adapt`.

**P2 — Text i informació professional inconsistents.** `es/equipo.html:286` i `:516`: el mateix màster figura «en curso» i com a titulació obtinguda. `:423` i `:429`: Yasmine / Yasmin. Validar les dades amb clínica abans d'unificar-les; no és una correcció que pugui decidir el redactor. Acció: `impeccable clarify`.

**P2 — Moviment decoratiu persistent.** `assets/css/main.css:580`. Marquee de tractaments amb animació infinita de 30 segons. Hi ha una alternativa de moviment reduït, però no un control de pausa del marquee identificat. Proposo retirar aquesta franja de catàleg; les fotografies i el procés real aporten més caràcter. Accions: `impeccable distill`, `impeccable animate`.

**P2 — Localització incompleta.** `assets/js/main.js:509`: «Tornar a dalt» en una pàgina ES; `:577`: canvi a «puede desactivarla» dins un conjunt que tracta de tu. Revisar també mapes, errors, alternatives d'imatge, metadades, peus de pàgina i contingut generat. Acció: `impeccable clarify`.

Recompte d'aquesta llista: 0 P0, 3 P1 i 6 P2. Hi ha, addicionalment, dos punts d'investigació, no comptats com a defectes confirmats: el salt a `#contacto` va quedar lluny del formulari en la sessió de navegador, però no s'ha aïllat la causa; i els contrastos suggerits pel detector requereixen mesurament final sobre cada superfície renderitzada.

### Detector: resultats i límits

133 avisos: 49 padding, 16 contrast, 12 combinacions de vora i ombra, 9 majúscules, 9 numeracions, 6 glows, 6 textos petits, 5 radi, 5 marquee, 4 overflow retallat, 4 font, 3 salts de heading, 2 etiquetes sobre el hero, 2 glows radials i 1 jerarquia plana. Resultat íntegre a `impeccable-detector.json`.

No equivalen a 133 errors confirmats. Diversos contrastos tenen línia 0 i combinen colors sense resoldre tota la composició. El padding del contenidor exterior pot quedar compensat pels fills. Playfair i N27 formen part de la marca: no es canviaran perquè el detector prefereixi altres fonts. La secció «Foto pendiente» existeix al codi de serveis però està `hidden` i no és visible al DOM inspeccionat; no es reporta com a contingut publicat. Els placeholders s'hauran de revisar si mai es decideix mostrar-la.

## Revisió editorial en castellà

La mostra no permet afirmar que tot siguin faltes ortogràfiques. Hi ha, sobretot, literalitat, frases feixugues, repetició i promeses vagues. Separarem errors de llengua, preferències d'estil i dades que necessiten verificació.

| Text actual | Diagnòstic | Proposta editorial |
|---|---|---|
| «conservar la pieza propia» | Correcte però poc natural per al pacient; repetit. | «conservar tus dientes naturales» |
| «Esto no es un tratamiento de nuestra carta» | Metàfora poc adequada i explicació interna del catàleg. | «Nuestro criterio es conservar tus dientes siempre que sea posible.» |
| «seguimiento a meses, no sesiones sueltas» | Construcció poc idiomàtica. | «seguimiento a lo largo de los meses», si aquest seguiment és el servei real. |
| «Hablamos cuando quieras» | Massa obert per a una clínica amb horari. | «Cuéntanos qué necesitas» |
| «te contactaremos» | Admissible; preferència de naturalitat, no falta. | «Nos pondremos en contacto contigo» |
| «puede desactivarla aquí» | Inconsistència tu/vostè. | «puedes desactivarla aquí» |
| «Centro Lleida» / «Centro Tremp» | Nomenclatura telegràfica. | «Clínica de Lleida» / «Clínica de Tremp» |
| «Siempre a la vanguardia» | Eslògan intercanviable. | «Formación del equipo», amb fets verificats. |
| «para tu total seguridad» | Promesa absoluta innecessària. | Explicar el protocol real sense prometre seguretat total. |
| «Tornar a dalt» | Cadena sense traduir en ES. | «Volver arriba» |

No reescriure silenciosament cites atribuïdes ni ressenyes de pacients. Separar la traducció editorial d'una cita del contingut verificat de l'original. Conservar noms oficials dels carrers i dels centres; adaptar «baixos» a «bajos» quan sigui una indicació funcional de l'adreça, sense alterar-ne la ubicació.

Inventari de correcció: els set HTML de `es/`, les set landings ES de `data/landing-pages.js`, el generador `api/landing.js`, textos compartits de `assets/js/main.js`, títols, descriptions, OG, JSON-LD, alt, labels, placeholders i estats. Revisar coherència amb CA, sense imposar una traducció paraula per paraula.

## Proposta de recorregut

Recomanació: adaptar l'espai de contacte existent amb tres passos curts. Mantenir `seus.html#contacte` i `es/sedes.html#contacto` com a destinacions, corregint el salt i portant el focus a l'inici del recorregut. Una pàgina dedicada només seria necessària si el prototip demostra que aquest espai limita l'experiència.

La superfície de contacte té mode **Operate**: completar una petició. La portada manté mode **Persuade**: donar confiança per iniciar-la.

### Entrada

Marca i «Lleida · Tremp» visibles abans de començar. Títol de treball: «Explica'ns què necessites» / «Cuéntanos qué necesitas». Frase de suport: «Tria la clínica i deixa'ns un telèfon. La recepció es posarà en contacte amb tu per parlar de la teva consulta.» Ajustar la seqüència verbal al prototip definitiu.

CTA general inequívoc: «Demanar cita» / «Pedir cita». Els accessos de cada seu poden dir «Demanar cita a Tremp» i preseleccionar Tremp de manera visible i editable. Els accessos generals no pressuposen Lleida. Mantenir trucada i WhatsApp amb nom de clínica, sense exigir completar el qüestionari.

### Pas 1. Què necessites?

Una pregunta opcional, sense puntuació, diagnòstic ni prescripció. Proposta de grups inicials: «Tinc una molèstia», «Vull revisar o millorar les dents», «És per a un infant» i «Prefereixo explicar-ho parlant». En escollir una molèstia, mostrar només si aporta valor una selecció breu com mandíbula, dents o genives; evitar un interrogatori clínic i no exigir aquesta precisió per continuar.

Alternativa de primer nivell sense desplegables: motius concrets com «Em molesta la mandíbula», «Em preocupen les genives», «Em falta una dent», «Vull una revisió», «És per al meu fill o filla» i «Prefereixo explicar-ho parlant». El prototip compararà la facilitat d'escaneig amb els quatre grups; no es pressuposa que més passos converteixin millor.

Mostrar «Prefereixo trucar» amb les dues seus. No donar una falsa garantia que una consulta urgent es llegirà a temps ni generar triatge mèdic automàtic.

### Pas 2. On prefereixes venir?

Dos blocs de selecció amb ràdio nativa: nom complet de la clínica, ciutat i adreça coneguda. Evitar un desplegable que amagui les dues opcions. Seu triada sempre visible en el resum i modificable. Des d'una pàgina específica de Tremp o Lleida, conservar la selecció explícita prèvia; no inferir-la per geolocalització.

### Pas 3. Com et podem contactar?

Nom i telèfon obligatoris; correu opcional. Franja horària opcional referida a la trucada, no a una cita ja disponible. Missatge logístic opcional, sense història clínica, informes ni fotografies. Resum visible de la clínica, dades i motiu si s'ha decidit recollir-lo. Accions «Enrere» i «Enviar sol·licitud a Tremp/Lleida».

Missatge final proposat: «Hem rebut la teva sol·licitud per a la clínica de Tremp. La recepció es posarà en contacte amb tu per concretar la visita. La cita encara no està confirmada.» En ES: «Hemos recibido tu solicitud para la clínica de Tremp. Recepción se pondrá en contacto contigo para concretar la visita. La cita todavía no está confirmada.»

Mostrar aquest resultat només després de confirmació del servidor. No confondre acceptació del proveïdor de correu amb lectura efectiva per recepció. Mantenir una via de contacte directa si hi ha error.

### Caràcter visual

Conservar N27, la serif existent, colors pedra i tinta. Una columna de lectura, títol clar, preguntes en llenguatge natural i resum de seu; sense graelles d'icones clíniques genèriques. La identitat ve de noms, adreces, espais reals i procés de recepció. El formulari no necessita noves fotos dels professionals per funcionar.

Al mòbil: controls amplis, labels llegibles, progrés «1 de 3», teclat telefònic i cap barra fixa tapant camps o botó d'enviament. Canviar de pas conserva les respostes durant la sessió; no guardar dades de salut en localStorage ni a la URL. No avançar automàticament en escollir una opció. Enrere, errors i canvi de seu han de funcionar amb teclat i lector de pantalla.

### Altres opcions

| Opció | Quan té sentit | Límit |
|---|---|---|
| Formulari d'una sola pantalla amb clínica al principi | Prioritat absoluta a rapidesa i poca interacció. | Menys espai per ajudar qui no sap què necessita. |
| Tres passos breus, recomanat | Pacient amb dubtes que necessita context. | Cal evitar clics innecessaris i conservar el contacte directe. |
| Escollir clínica i parlar directament | Pacient que ja sap on anar. | No resol per si sol la petició escrita ni estructura la consulta. |

## Privacitat i dades del nou recorregut

`es/privacidad.html:153` diu que el formulari no sol·licita dades de salut; `es/sedes.html:543` demana no incloure-les. Si les respostes sobre dolor o altres motius s'associen al nom i telèfon, cal tractar aquesta ampliació expressament. La naturalesa sensible de la informació de salut està descrita per l'[AEPD](https://www.aepd.es/areas-de-actuacion/salud/tus-derechos-en-relacion-con-tus-datos-de-salud).

Abans d'activar l'enviament d'aquests motius, la clínica ha de validar amb el seu responsable de protecció de dades la base aplicable, la informació al pacient, els destinataris i el circuit de recepció. No s'assumeix que una casella genèrica resolgui aquesta ampliació. Alternativa inicial: orientació local opcional, sense enviar ni persistir respostes clíniques, i petició de contacte amb dades mínimes; la recepció recull el detall parlant.

Analítica només de passos i resultats tècnics agregats: mai nom, telèfon, text lliure, símptomes o motius. No incloure motius de salut a `data-track-label`, query strings ni missatges de WhatsApp preemplenats. Preservar el règim de preferències existent. La revisió actual no és una auditoria jurídica.

## Pla d'implementació i acceptació

1. **Tancar contingut i operativa.** Confirmar el termini real de resposta, si s'envia motiu de consulta i el text de primera visita de pagament. El repartiment per recepció de seu ja està confirmat. Resoldre titulacions i noms contradictoris. Preparar un registre CA/ES de textos i fets.
2. **Corregir el castellà.** Revisió humana amb les tres capes: llengua, naturalitat i evidència. Prioritat a portada, cita, clínica i missatges; continuar per equip, serveis, landings i legals. No modificar testimonis o fets clínics sense font. Criteri de finalització: totes les superfícies de l'inventari revisades, cap residu involuntari de CA i terminologia coherent.
3. **Prototipar el contacte.** Tres passos dins el sistema existent, en CA i ES, mòbil i escriptori; presentar-lo per revisar estructura i textos abans de connectar enviaments. Incloure error, resum, èxit i retorn. Eliminar la dependència del catàleg d'especialitats i fer visible la seu. Comparar amb una pantalla única si els passos no aporten orientació.
4. **Implementar el circuit complet.** HTML a `seus.html` i `es/sedes.html`; estats i rutes a `assets/js/main.js`; estils a `assets/css/main.css`; adaptació d'`api/contact.js` i de CTA estàtics i generats. Mantenir els IDs interns `carrera`/`tremp` si no cal migrar-los. Validació de camps per client i servidor, resposta diferenciada als errors, doble enviament impedit, dades intactes després d'error i destinatari coherent amb la selecció.
5. **Ajustar portada i components compartits.** Escurçar hero ES, eliminar repetició de localitat, revisar marquee, llegibilitat i àrees tàctils. Conservar marca, fotografies actuals i URLs indexades. L'objectiu no és un redisseny total.
6. **Verificar i publicar quan s'autoritzi.** Matriu CA/ES × Lleida/Tremp × mòbil/escriptori; navegació amb teclat, zoom, moviment reduït, canvi de seu, tornar enrere, petició vàlida i camps invàlids, fallada de xarxa i servidor, reintent i estat d'èxit. Proves de rutes de correu amb proveïdor simulat abans d'un enviament controlat acordat amb recepció. Comprovar dades absents en analítica, metadades i enllaços conservats i recepció real abans de declarar el circuit operatiu. Acabar amb `impeccable polish` i una auditoria acotada dels canvis.

Èxit mesurable: peticions que arriben a la seu escollida, menys contactes redirigits entre clíniques i millor finalització del formulari. Cal obtenir una base de comparació; no es promet un increment de conversió sense dades.

## Decisions que falten

- Termini de resposta que cada recepció pot assumir.
- Import de primera visita o moment exacte en què es comunica; conservar el fet que és de pagament.
- Enviar el motiu a recepció o començar amb orientació local sense persistència clínica.
- Validació de la proposta de tres passos abans d'implementar-la.

Les fotos de Tremp es tractaran en una fase posterior quan Arnau ho indiqui.
