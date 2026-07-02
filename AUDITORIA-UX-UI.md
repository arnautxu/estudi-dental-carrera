# Auditoria completa de disseny, usabilitat i UX/UI
**Estudi Dental Carrera** · 2 de juliol de 2026
Metodologia: 8 auditors especialitzats en paral·lel (tipografia/color, layout, moció, UX/conversió, accessibilitat, responsive, consistència/i18n/SEO, direcció d'art) + inspecció visual amb navegador (escriptori 1280px i mòbil 375px) + verificació manual al codi de totes les troballes crítiques. 88 troballes brutes → deduplicades i prioritzades a continuació. Totes les P0 han estat verificades línia a línia contra el codi font.

---

## Resum executiu

El web té una **execució tècnica notablement per sobre de la mitjana**: sistema d'easing exemplar, cobertura de `prefers-reduced-motion` en capes, hreflang i NAP impecables, paritat CA↔ES completa, zero enllaços trencats, tipografia disciplinada amb contrast AAA al nucli de lectura. La direcció "warm editorial" hi és i es nota.

El problema és que **la capa de conversió — el KPI primari del projecte — està trencada o degradada en els seus tres canals**:

1. **El formulari de cita no envia res enlloc i mostra "Sol·licitud enviada!"** — un pacient que el fa servir creu que té cita demanada i ningú no el trucarà. És pitjor que no tenir formulari.
2. **El telèfon i el WhatsApp del hero són gairebé invisibles** (contrast 1,92:1 sobre el fons fosc) i el CTA del header és un `tel:` mut a escriptori.
3. **GA4 continua amb l'ID placeholder a les 14 pàgines**: encara que tot funcionés, no es podria mesurar.

A més, hi ha **dues contradiccions directes amb PRODUCT.md**: la franja de mètriques "big numbers" (+30 anys, 98% èxit) just sota el hero — patró explícitament prohibit — i l'edifici modernista, declarat protagonista ("l'edifici és el hero"), que no apareix visible enlloc: el hero és un degradat abstracte amb icones dentals genèriques, i l'única foto de l'edifici està enfosquida al 55% amb filtre grayscale+sepia.

### Puntuació per dimensió

| Dimensió | Nota | Comentari |
|---|---|---|
| Moció i microinteraccions | 8/10 | Sistema exemplar; forats puntuals (scroll suau, tilt sense gates) |
| Consistència · i18n · SEO | 8/10 | NAP/hreflang impecables; falta sitemap/robots i i18n del JS |
| Layout i espaiat | 7,5/10 | Asimetries editorials ben resoltes; tokens d'espaiat inexistents |
| Tipografia i color | 7/10 | Nucli AAA; la perifèria (footer, labels, microtext) falla AA |
| Direcció d'art (anti-slop) | 7/10 | Disciplina tècnica alta; trust strip i hero genèric la contradiuen |
| Responsive i mòbil | 7/10 | Barra CTA ben enginyeria; solapaments i pes d'imatges |
| Accessibilitat | 6/10 | Fonaments sòlids; incompliments AA concrets i verificats |
| UX · IA · Conversió | 5,5/10 | Formulari fals + CTAs inconsistents + GA4 placeholder |

**Global: 7/10** — un web ben construït que ara mateix no pot complir el seu objectiu de negoci.

---

## Punts forts (mantenir-los intactes)

- **Càrrega de fonts exemplar**: N27 woff2 amb `font-display:swap`, preload dels pesos crítics a totes les pàgines (també es/), fallbacks coherents. Risc de FOIT pràcticament nul.
- **Parell tipogràfic disciplinat**: Playfair només a display/accents, headings amb `clamp()` fluid, longituds de línia sistemàticament limitades (38–68ch).
- **Nucli de lectura AAA**: `--beix-text` 8,1:1, `--gris-dark` 8,3:1, botons primaris 9,2:1. Zero gradient text, zero glassmorfisme, zero negre pur al cos.
- **Sistema de moció de manual**: cap `transition:all`, cap `ease-in`, corba tokenitzada `--ease: cubic-bezier(0.23,1,0.32,1)`, `.btn:active { scale(0.97) }` a 60ms, només transform/opacity.
- **`prefers-reduced-motion` en capes**: blanket global + overrides per component (marquee, orbes, constel·lació, FAB, banner) + View Transitions. Només queden 2 forats de JS (vegeu P1).
- **Carrusel amb degradació en 3 nivells** (Motion One → CSS → instantani) i autoplay que es pausa amb hover/focus/touch/fora de viewport.
- **La resposta a "què passarà a la primera visita?"** (index.html:368-400): 4 passos + "La primera visita és de pagament. És una decisió de principis" — exactament el que demana el posicionament.
- **Paritat CA↔ES estructuralment perfecta**, hreflang recíproc amb x-default, selector d'idioma pàgina-a-pàgina (mai a la home), NAP idèntic entre footer/seus/schema, email de Tremp corregit, zero enllaços interns trencats, zero IDs duplicats.
- **Barra CTA mòbil ben enginyeria**: `env(safe-area-inset-bottom)`, `body{padding-bottom}` compensatori, dedupe del FAB a ≤720px, auto-ocultació sobre el footer. Hero amb `100svh` (no `100vh`).
- **11 fitxes d'equip amb fotos de tractament unificat**, credencials concretes i cites reals dels professionals — corregeix l'anti-referència del web antic.

---

## P0 — Crítics (bloquegen conversió o incompleixen WCAG AA) — tots verificats

### 1. El formulari de cita mostra un èxit fals: no envia les dades enlloc
`seus.html:336` + `assets/js/main.js:116-141` (també es/sedes.html)
El `<form>` no té `action` ni `method`, porta `novalidate` sense cap validació JS substitutòria, i el handler fa `e.preventDefault()` → "Enviant..." → **"Sol·licitud enviada!"** → `form.reset()`. Es pot enviar completament buit i rep igualment l'èxit. La intro, a més, promet "et contactarem en menys de 24 hores".
**Conseqüències**: pacients perduts que creuen tenir cita; els `required` i el consentiment RGPD mai s'exigeixen; el canvi d'`innerHTML` del botó és mut per a lectors de pantalla (cal `role="status"`/`aria-live`).
**Acció**: connectar backend real (Formspree / funció Vercel → carrera@clinicarrera.cat amb còpia segons seu) + validació amb errors inline (`aria-describedby` + `aria-live`). **Si no es pot fer immediatament, substituir el formulari per CTAs de telèfon/WhatsApp** — mai un èxit fals. *(Esforç: alt · Impacte: el KPI sencer)*

### 2. Telèfon i WhatsApp del hero gairebé invisibles: contrast 1,92:1
`assets/css/main.css:2671` — `.contact-row__label { color: var(--gris) }` i `.contact-link` en `--beix-deep` estan pensats per a fons clar; només existeix override per a `.cta-band` (línies 2684-85), cap per al hero fosc. El bloc "O parla'ns ara mateix: 973 26 88 26 · WhatsApp" — micro-CTA directe del KPI — no es llegeix (confirmat visualment).
**Acció**: `.hero .contact-row__label { color: rgba(255,255,255,.6) } .hero .contact-link { color: var(--white) }`. *(Esforç: baix)*

### 3. Footer sota mínims AA a les 14 pàgines
`assets/css/main.css:1615, 1604, 1599` — enllaços legals i copyright a `rgba(255,255,255,.28)` sobre `--ink` = **2,50:1 a 12,5px**; h4 de columnes a `.35` = 3,11:1.
**Acció**: pujar alfes (≥.62 per a enllaços funcionals, ≥.55 per a h4/tagline) i mida ≥0.875rem. *(Esforç: baix)*

### 4. Botons WhatsApp: blanc sobre #25D366 = 1,98:1
`assets/css/main.css:2652` (barra CTA mòbil) i `1756-57` (FAB). El canal de conversió preferent de l'audiència amb el pitjor contrast del web.
**Acció**: fons verd WhatsApp fosc `#075E54` (7,4:1) o `--beix-deep` amb icona verda. *(Esforç: baix)*

### 5. Labels blanques de baixa alfa sobre superfícies fosques
`assets/css/main.css:1340` (`.sdc-stat span` 3,39:1 a 10,9px), `1322` (`.sdc-num` 2,05:1), `872` (`.loc-detail__label` ~3:1 a 9,9px — les etiquetes ADREÇA/TELÈFON/HORARI de les targetes de seus).
**Acció**: alfes ≥.62 i mides ≥14px. *(Esforç: baix)*

### 6. `--gris-light` no existeix: les 6 pàgines legals cauen al fallback #aaa (2,27:1)
`assets/css/main.css:1624` — "Darrera actualització: abril de 2026" es renderitza en gris pur no-de-paleta. La mateixa zona usa `var(--radius)` — tampoc definit (cau a 0).
**Acció**: `var(--gris)` + `var(--radius-md)`. *(Esforç: baix)*

### 7. Menú mòbil: enllaços focalitzables dins `aria-hidden` i sense gestió de focus
`index.html:135` + `assets/css/main.css:387` — l'estat tancat només fa `opacity:0; pointer-events:none` (sense `visibility:hidden`/`inert`): un usuari de teclat tabula per enllaços invisibles marcats `aria-hidden="true"` (contradicció ARIA directa). En obrir, el focus no es mou ni es confina. Afecta les 14 pàgines.
**Acció**: `visibility:hidden` a l'estat tancat (+`visibility:visible` a `.open`) o atribut `inert`; focus al botó de tancar en obrir, retorn al burger en tancar. *(Esforç: mitjà)*

### 8. La UI de cookies surt en català a les pàgines castellanes
`assets/js/main.js:518-589` — "Rebutjar/Acceptar/Preferències de cookies", `aria-label="Consentiment de cookies"`, "Enviant...", "Sol·licitud enviada!" són strings hardcoded en català; es/index.html carrega el mateix main.js. Incompliment WCAG 3.1.2 i risc RGPD (consentiment que el visitant pot no entendre).
**Acció**: replicar el patró `STR[lang]` que **ja existeix** a `initMobileBar` (main.js:797-801) per al banner, modal, formulari i aria-labels. *(Esforç: mitjà)*

---

## P1 — Importants

### Conversió i confiança
| # | Troballa | On | Acció |
|---|---|---|---|
| 9 | **El CTA del header "Demana cita" és `tel:`** a escriptori (mut/error), mentre el mateix label al hero i footer porta a `seus.html#contacte`. Mateix label ⇒ mateixa acció | index.html:124 (×14 pàgines) | Apuntar-lo al formulari; telèfon com a secundari |
| 10 | **El cookie banner (z-9000) tapa la barra CTA mòbil (z-950)** a la primera visita — el 100% del trànsit mòbil nou veu els seus canals de conversió coberts (confirmat visualment) | main.css:2506/2631 | `bottom: calc(82px + env(safe-area-inset-bottom))` al banner en mòbil |
| 11 | **GA4 amb ID placeholder a les 14 pàgines** — el guard de main.js:498 fa que GA no es carregui mai; el KPI no es pot mesurar. El cablatge de consentiment ja és correcte | index.html:9 | `sed` amb l'ID real |
| 12 | **L'enllaç "política de privacitat" del consentiment del formulari és `href="#"`** — consentiment RGPD que enllaça al buit (privacitat.html existeix) | seus.html:394, es/sedes.html:395 | Enllaçar la pàgina real, `target="_blank"` per no perdre el formulari |
| 13 | **La barra CTA mòbil truca sempre a Lleida**, també des de la pàgina de seus mirant Tremp: el mecanisme `data-phone`/`data-wa` existeix (main.js:806) però cap HTML el fa servir | main.js:806 + tots els HTML | Afegir `data-phone`/`data-wa` als `<body>` o oferir les dues seus |
| 14 | **"Abans i després" publicat amb 6 caixes "Foto pendent"** en producció, en ambdós idiomes — erosiona la credibilitat que el títol promet | serveis.html:636-657 | Ocultar la secció fins tenir fotos amb consentiment |
| 15 | **Placeholders legals visibles**: `[NIF/CIF]` i `[núm. de col·legiat]` a 4 pàgines — la LSSI exigeix identificació fiscal | avis-legal.html:147/151 + ES | Omplir les dades |

### Contradiccions amb PRODUCT.md (marca)
| # | Troballa | On | Acció |
|---|---|---|---|
| 16 | **Trust strip amb "big numbers" (+30 anys, 98% èxit en implants, 2 clíniques)** just sota el hero — patró **explícitament prohibit** a PRODUCT.md:60; "98% èxit" és a més un claim sanitari sense font | index.html:317-333 | Conservar només la ressenya 5,0 amb enllaç a les 42 ressenyes reals (prova verificable) + una cita de l'equip |
| 17 | **L'edifici modernista no apareix enlloc**: hero = degradat + orbes + constel·lació d'icones dentals genèriques (dent, corona, implant — "qualsevol clínica ho podria copiar"); l'única foto va amb `grayscale(1) sepia(.5) brightness(.55)` | index.html:194-259, main.css:855 | Fotografia arquitectònica amb gradació càlida com a capa protagonista del hero (o com a mínim a seus.html); alternativa: constel·lació de la tribuna modernista en el mateix llenguatge de traç |
| 18 | **Copy amb el vocabulari saturat que PRODUCT.md prohibeix**: "compromesos amb el teu somriure", "entorn proper i de confiança", "Odontologia d'excel·lència" (footer ×14), "El somriure que mereixes", "Resultat brillant", "la solució més avançada", "100% Invisible", "Tots els casos" | index.html:493, serveis.html:414/459/312, footer | Reescriure en clau de procés/predictibilitat ("Planificat abans de tocar res"); tagline de footer: p. ex. "Primer entenem què et passa. Lleida i Tremp" |
| 19 | **Odontopediatria i pacient amb por — serveis estratègics #2 i #3 — relegats** a extra-card genèrica sense id ni CTA, mentre l'estètica té secció completa | serveis.html:526 | Fitxa `service-detail` pròpia per a infantil + bloc "Tens por del dentista?" enllaçant el protocol de primera visita |

### Accessibilitat i llegibilitat (públic 30–70, visió reduïda)
| # | Troballa | On | Acció |
|---|---|---|---|
| 20 | **`html { font-size:16px }` fix** anul·la la preferència de mida de text del navegador — crític per a l'audiència declarada | main.css:98 | `font-size:100%` |
| 21 | **Cos generalitzat per sota del requisit dur de 16px**: cards de servei 14px, inputs 14,4px, legals 15,2px, procés 14,7px — amb N27 Light 300 | main.css:662/1564/1643/579 | Cos ≥1rem, pes 400 per defecte; Light només ≥18px |
| 22 | **Capa de microtext funcional de 9,9–12,8px**: labels, tags, badges, check-label del consentiment | main.css:137/674/872/1434/1580 | Sòl de 14px; jerarquia amb pes/letter-spacing, no mida |
| 23 | **Inputs a 14,4px disparen l'auto-zoom d'iOS Safari** en ple formulari de conversió | main.css:1564 | `font-size:1rem` als camps |
| 24 | **Touch targets <44px**: selector d'idioma del header ~18-20px (vigent a mòbil!), socials footer 36px, menú mòbil 40px, botons carrusel 42px, tancament modal cookies, switches | main.css:326/1716/1736/1167 | Àrea efectiva ≥44px (padding o `::after`); prioritat: idioma i cookies |
| 25 | **Carrusel avança sol cada 6,5s sense botó de pausa** (WCAG 2.2.2 — hover no serveix en tàctil) + patró tablist incomplet | main.js:339/317 | Botó pausa/play visible + `aria-selected`/`aria-controls` |
| 26 | **6 testimonis en castellà dins `<html lang="ca">` sense `lang="es"`** (WCAG 3.1.2) — el bloc de prova social llegit amb fonètica catalana | index.html:526-566 | `lang="es"` als blockquotes |
| 27 | **Scroll suau JS ignora `prefers-reduced-motion`** (àncores main.js:79 i back-top main.js:388) — l'únic forat del compliment altrament exemplar | main.js:79/388 | `behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'` |
| 28 | **Parallax de location-cards i tilt 3D de team-cards sense gate** de reduced-motion ni `(hover:hover)` — s'activa amb tocs i pot deixar la targeta inclinada | main.js:105/185 | Mateixa doble condició que ja usa el sparkle cursor |

### Responsive i rendiment
| # | Troballa | On | Acció |
|---|---|---|---|
| 29 | **La barra CTA (z-950) tapa el peu del menú mòbil obert (z-110)**: selector d'idioma i socials queden a sota (confirmat visualment) | main.css:2631 vs 380 | Ocultar la barra amb el menú obert, o z-index del menú >950 + padding |
| 30 | **"Tornar a dalt" ocult sota el FAB de WhatsApp a escriptori**: back-top (b:2rem/r:2rem, z-90, 44px) queda completament sota el FAB (b:1.5rem/r:1.5rem, z-900, 56px) | main.css:1911 vs 1752 | Apilar-lo per sobre del FAB |
| 31 | **`image-set()` sense fallback a les targetes de seus**: en navegadors sense suport, text blanc sobre fons blanc | main.css:852/858 | `background-color:var(--ink)` + `background-image:url()` previ |
| 32 | **Fotos sense variants responsive i JPEG de fins a 3,3MB** (equip-tremp.jpg 1,3MB) — connexió mòbil rural del Pallars | index.html:500, assets/img | Variants 480/768/1200 + `srcset/sizes`, recomprimir fallbacks |
| 33 | **Àncores entre pàgines aterren sota el header fix de 88px**: cap `scroll-margin-top` al CSS (el JS només cobreix àncores de la mateixa pàgina, i compensa 80px, no 88) | main.css (absent), main.js:79 | `section[id] { scroll-margin-top: 96px }` |
| 34 | **El menú mòbil té un error de niament**: `.mobile-menu__lang` i `__social` són dins de `.mobile-menu__seus` (graella 1fr 1fr amb vora) — el div de la línia 164 no es tanca fins la 186 | index.html:164-186 (×14) | Moure'ls com a fills de `.mobile-menu__footer` |

### SEO i infraestructura
| # | Troballa | On | Acció |
|---|---|---|---|
| 35 | **Ni sitemap.xml ni robots.txt** | arrel | Crear-los (8 URLs indexables, legals excloses) |
| 36 | **Cap pàgina 404**: Vercel mostra el 404 genèric anglès | arrel | 404.html amb capçalera, to de marca i CTAs |
| 37 | **seus.html (pàgina NAP) sense cap schema.org**, tot i que el DentalClinic de la home hi apunta | seus.html:18 | Duplicar el @graph amb els mateixos @id |

---

## P2 — Polish (selecció, deduplicada)

- **Line-height 1,5–1,6 en diversos blocs de cos** (feature-item, horari-table, check-label…) sota el mínim 1,65 del projecte — main.css:1348/579/1580/1485.
- **Neutres tintats cap al blau** (`--gris #6B6B6F`, `--ink #2A2A2C` amb canal B dominant) contra la paleta càlida, i un segon ink càlid paral·lel `#2A2623` als components de cookies — main.css:63 vs 2261. Re-derivar en oklch hue 52-56 i unificar.
- **Passos tipogràfics <1,25×**: h4 del procés 1,14× del seu paràgraf; pregunta FAQ 1,05× de la resposta al mínim del clamp — main.css:575/2728.
- **equip.html sense h2**: "Seu Lleida"/"Seu Tremp" són `<strong>` (salt h1→h3) — equip.html:184/348.
- **Graella "Més tractaments": 9 extra-cards idèntiques** (número+títol+text) i l'ítem 06 duplica el bruxisme com a commodity quan la mateixa pàgina obre amb #atm destacat — serveis.html:524-580.
- **Cap token d'espaiat**: DESIGN.md declara xs/sm/md/lg/xl però el CSS només té `--max-w` i `--pad`; valors orfes (14px, 18px, 0.55rem…) — main.css:54-87.
- **Headers de secció alternen centrat i esquerra sense regla** dins serveis.html — main.css:1352/1441.
- **Sortida del cookie banner tallada**: `remove()` a 500ms però la transició necessita 840ms — main.js:546 vs main.css:2211.
- **Comptador d'estadístiques = codi mort**: apunta a `.stat__num`, que no existeix a cap HTML (el markup usa `.trust-item__num`) — main.js:176.
- **Obertura del menú mòbil ~960ms** (delays fins a 540ms) — molt per sobre del rang; reduir a ~450ms total — main.css:1900/1907.
- **Hovers sense gate tàctil en components clau** (location-pills, botons/dots del carrusel, mapes) — estats "enganxats" després del tap — main.css:516-518/1176/1162.
- **Falta `:active` a premibles freqüents**: FAQ, carrusel, cookies, pills (el patró `.btn:active` ja existeix; replicar-lo) — main.css:2723.
- **Sparkle cursor** (partícules seguint el ratolí cada 80ms): gimmick fora del to "sobri, rigorós" i sense gate de reduced-motion al JS — main.js:403. Recomanació: eliminar-lo.
- **serveis.html sense índex intern** i les cards de la home (Endodòncia, Periodontologia, Odontopediatria) enllacen a dalt de la pàgina, no a la fitxa — index.html:432/440/464. Afegir ids + mini-nav d'àncores.
- **Modal de cookies sense focus trap** malgrat `aria-modal="true"` (Escape i retorn de focus sí que funcionen) — main.js:644.
- **Taula de cookies desborda a 320-375px** i `overflow-x:hidden` la retalla sense scroll — cookies.html:161. Embolcallar amb `.table-scroll`.
- **sdc-stats repeteixen el patró mètric prohibit** a les fitxes ("100% Invisible", "98% Taxa d'èxit", "Tots els casos") — serveis.html:294/415-427. Convertir en metadades factuals (durada, material, qui ho fa).

## P3 — Detalls (selecció)

- Estrella de valoració `#E2A93B`: or saturat fora de paleta (2,05:1) — usar `--beix-rich` com ja fa el slider — main.css:2705.
- Comentaris dels tokens amb ràtios/hex desfasats (p. ex. `--beix-text` documenta 5,3:1 però és 8,1:1) — main.css:59.
- Override tablet del títol de la card ATM = codi mort per especificitat — main.css:1779.
- Transicions sobre propietats de layout: `gap` al CTA, `top` a l'skip-link — main.css:744/126.
- Entrada des de `scale(0)` als cercles de les il·lustracions — main.css:1296 (mínim 0.6 + opacity).
- FAQ ES omet "És de pagament perquè el temps que et dediquem val el mateix" — es/servicios.html:615.
- "42 ressenyes a Google" enllaça una cerca genèrica amb el nom antic "Clínica Dental Carrera" — index.html:320. Enllaçar el perfil de Business directament.
- Modal de cookies amb `100vh` (→ `100dvh`) — main.css:2304.
- Anchor `id="ortodencia"` mal escrit (ES usa "ortodoncia") — serveis.html:350.
- Pàgines legals: `noindex` + hreflang sense canonical (senyals contradictoris) — avis-legal.html:20-23.
- Pàgines CA sense `og:locale:alternate` (les ES sí que en tenen) — index.html:27.
- Glif "✓" ×32 com a icona de checklist, fora del llenguatge SVG de traç propi — serveis.html:380.
- `<em>` de dues línies al hero contra la Single-Italic Rule del DESIGN.md — index.html:266.

---

## Pla d'acció recomanat

**Setmana 1 — Aturar l'hemorràgia de conversió (esforç baix-mitjà):**
1. Formulari: backend real o retirada temporal (P0-1) — *l'única troballa d'esforç alt, i la més urgent*
2. Contrast del hero contact-row, footer, WhatsApp, labels, --gris-light (P0-2 a 6) — ~2h de CSS
3. CTA header → formulari (P1-9) · banner sobre la barra CTA (P1-10) · GA4 real (P1-11) · enllaç privacitat (P1-12)
4. Ocultar "Abans i després" i omplir NIF/col·legiat (P1-14/15)

**Setmana 2 — Accessibilitat AA i mòbil:**
5. Menú mòbil (visibility/inert + focus) (P0-7) · i18n del JS (P0-8)
6. font-size:100%, cos ≥16px, microtext ≥14px, touch targets (P1-20 a 24)
7. Solapaments (menú/barra, back-top/FAB), scroll-margin-top, image-set fallback (P1-29/30/31/33)
8. Pausa del carrusel, lang="es", reduced-motion al JS (P1-25/26/27/28)

**Setmana 3-4 — Marca i diferenciació:**
9. Substituir la trust strip per evidència editorial (P1-16)
10. Fotografia de l'edifici modernista al hero o a seus (P1-17) — *la decisió de més impacte de marca*
11. Reescriptura del copy saturat (P1-18) · fitxa pròpia per a infantil i por (P1-19)
12. Imatges responsive + compressió (P1-32) · sitemap/robots/404/schema seus (P1-35/36/37)

*Nota metodològica: la fase de verificació adversarial automatitzada es va interrompre pel límit de sessió; totes les P0 i les P1 més crítiques han estat verificades manualment línia a línia (les cites de codi són exactes). Les P2/P3 provenen dels auditors amb evidència citada però sense segona verificació independent.*
