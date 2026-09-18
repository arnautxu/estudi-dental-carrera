# Conciliació de les idees de Semrush · 18/09/2026

**218 files, 38 keywords i 12 URL.** El [CSV](idees-revisades.csv) conserva A:D exactament i afegeix categoria, comparació amb el dia 16, estat, motiu, evidència i pendent. Els canvis d’aquesta tanda estan publicats a `main` al commit `78202a123d5a4fc550094c1e23adae64e06f6217` i comprovats al web públic. La nova reanàlisi de Semrush continua pendent.

Font: `ideas_www.estudidentalcarrera.com_20260918.xlsx`, **SEO Ideas!A1:D219**, capçaleres **Priority, Url, Keyword, Idea**. Creació declarada: **18/09/2026 07:20:30 UTC** (09:20:30 a Catalunya). SHA-256: `b98879f4f022a88e2cbd8c3e34e2bf22b4e02bd5370826d5374366627eb6f0f2`.

Comparador: Excel del 16/09, **SEO Ideas!A1:D283**, 282 files, 49 keywords i 16 URL; SHA-256 `9f4580c8a18e52b449b8d7d056667ef10f0ff003e7eb5f501ad66bd7500d0969`. S’ha verificat que les 282 files antigues coincideixen amb el [CSV anterior](../seo-excel-2026-09-16/idees-revisades.csv). Les decisions heretades provenen del seu [resum](../seo-excel-2026-09-16/resum.md). Base publicada consultada: `2165e767f6b13f24c38443573debc1e61e31ebd4`.

## Comparació

| Classificació | Files |
| --- | ---: |
| Mateixa URL, keyword i idea | 147 |
| Mateixa keyword i idea en URL reassignada | 45 |
| Mateixa categoria per keyword, text canviat | 19 |
| Categoria d’avís nova per aquella keyword | 7 |

Les 45 diferències d’assignació reflecteixen 9 keywords mogudes correctament; no són errors. Dels 19 textos canviats, 17 són variants de markup d’estrelles i 2 llistes semàntiques. Les categories noves corresponen a les files **33, 35, 81, 82, 92, 123 i 169**. No hi ha keywords noves. Onze consultes de marca ja no tenen idees a l’export, fet que no prova que s’hagin eliminat del tracking.

Hi ha 71 triples URL+keyword+idea diferents i 135 antics absents. No equivalen a problemes resolts: inclouen reassignacions i reformulacions. Tampoc la data de creació de l’Excel acredita quan s’ha rastrejat cada pàgina.

## Estats

| Estat | Files | Abast |
| --- | ---: | --- |
| `aplicat_publicat_verificat` | 9 | Sis canvis editorials implementats i publicats, amb build i proves aprovats; reanàlisi pendent. |
| `cobertura_verificada` | 5 | Tres metadades i dues cobertures semàntiques revisades; no acredita tancament a Semrush. |
| `cobertura_heretada` | 9 | Cobertura documentada el 16/09; no és una nova modificació. |
| `no_aplica` | 126 | Descartades amb criteri explícit; no es compten com a implementades. |
| `pendent_extern` | 25 | Backlinks pendents de validació/gestió externa; cap enllaç aconseguit. |
| `mesurament_pendent` | 44 | Falten dades comparables per interpretar els avisos UX. |

No es calcula una taxa de «resolt». Les 37 propostes d’estrelles estan descartades. Les 32 files de backlinks es distribueixen entre 25 externes i 7 descartades. Dels 60 avisos UX, 44 requereixen dades i 16 mantenen el descart previ per consultes alienes. Cap recompte acredita millora de posicions, permanència o pacients.

## Canvis publicats

| Files | Canvi |
| --- | --- |
| 92, 123 i 202 | Meta de Lleida amb dentistas en Lleida i equivalent català dentistes a Lleida. Tres files, un mateix canvi editorial bilingüe. |
| 129 | Bloc d’urgències de Lleida més clar: recepció, prioritat/disponibilitat, 061 i 112, sense promesa d’atenció permanent. |
| 144 | Concepte de malaltia periodontal explícit al bloc de gingivitis/periodontitis, amb valoració individual. |
| 77 i 80 | Lectura de Tremp més clara, preservant dades i confirmació de cita per recepció. |
| 85 | Explicacions d’ortodòncia més planeres, preservant comparatives i límits. |
| 69 | Title de Tremp amb la marca completa Estudi Dental Carrera, en lloc de Carrera. Es manté el focus local en CA/ES sense repetir Tremp. |

Són **9 files associades a 6 canvis editorials**, aplicats a vuit pàgines CA/ES. La fila 129 reformula la llista antiga de la fila 143; la 144 escurça la de la fila 239. No són noves necessitats clíniques.

També s’ha corregit un desbordament mòbil: sota 900 px, `assets/css/landing.css` usa `minmax(0,1fr)` a les columnes de la introducció i seccions. Això evita que el text unit per JavaScript ampliï la pàgina catalana de periodòncia de 390 a 416 px. La verificació posterior en navegador confirma **8/8 pàgines sense desbordament ni àncores invàlides, tant a 320 com a 390 px**. Build i **95/95 proves aprovades**, segons la comprovació de l’agent principal.

## Cobertura pública i pendents

Les files **63, 149 i 217** passen a `cobertura_verificada`: un agent independent ha fet peticions HTTP fresques el 18/09 amb **3/3 HTTP 200, canonical correcte, cache MISS i age 0**. Ha comprovat el title d’ATM («Dolor de mandíbula y bruxismo en Lleida y Tremp | Carrera»), la meta amb limpieza dental i la meta amb blanqueamiento dental. Tractament i ubicació hi són semànticament; les keywords exactes no formen una cadena contigua. Es preserva el text natural. Aquest control correspon al contingut anterior, no acredita publicació dels canvis nous.

Les 19 files que heretaven una assignació correcta amb revisió pendent s’han contrastat amb el contingut efectiu: 69 i 202 corresponen a canvis publicats, 72 i 199 tenen cobertura semàntica i 15 peticions literals o d’intenció secundària es descarten. No queda cap d’aquestes files sense revisió editorial. Això no implica que Semrush hagi retirat els avisos.

En l’export ja no apareixen els avisos H1/title de clínica Tremp ni H1/meta d’ortodòncia invisible (files antigues 88–89 i 96–97). Es manté el H1 prioritari d’ortodòncia invisible, la landing local de Tremp i el descart de contingut Madrid. No s’ha executat una nova reanàlisi de Semrush el 18/09 ni consultat cap API d’Analytics. Els resultats del crawler i l’impacte continuen pendents.

## Fonts de criteri

- [Google: review snippets](https://developers.google.com/search/docs/appearance/structured-data/review-snippet#guidelines): no afegir estrelles autocontrolades ni qualificacions fictícies. Els canvis de tipus de markup no alteren aquest criteri.
- [Canal Salut: contacte](https://canalsalut.gencat.cat/ca/contacte/) i [NHS: dental abscess](https://www.nhs.uk/conditions/dental-abscess/): orientació sanitària i senyals d’urgència, amb el circuit real de la clínica.
- [NIDCR: periodontal disease](https://www.nidcr.nih.gov/health-info/gum-disease): concepte i tractament individual de la malaltia periodontal.
- [British Orthodontic Society: aligners](https://bos.org.uk/wp-content/uploads/2024/01/Aligners-version-2024.pdf): ús i cura dels alineadors, afegit a les lectures d’ortodòncia.
- [Semrush: metodologia](https://www.semrush.com/kb/567-seo-ideas-top-10-benchmarking): la mètrica de llegibilitat no enumera el català; l’avís d’equip manté el criteri anterior.
- La [conciliació del 16/09](../seo-excel-2026-09-16/resum.md) conserva els motius per descartar marques alienes i Damon. La [revisió de backlinks](../seo-onpage-2026-09-16/backlink-opportunities.md) identifica candidats, sense missatges, altes ni enllaços adquirits.

## Prova de publicació

Commit de codi `78202a123d5a4fc550094c1e23adae64e06f6217` confirmat a `origin/main`. Deployment Vercel `dpl_6QioQS1FJX4jCLKzvwxJwssPyroT`, **READY**, entorn **production**, SHA coincident i àlies `www.estudidentalcarrera.com`. Comprovació HTTP: **8/8 pàgines** amb 200, title, meta, canonical, H1 únic, dates del 18/09 i nou contingut; sitemap de **38 URL** i CSS publicat amb hash idèntic al local. [Prova completa](verificacio-publicacio.json), [validació local](validacio-local.json) i [metadades anteriors](metadades-publicades-abans.json).

Safari tenia un diàleg de desament de l’usuari actiu i s’ha deixat intacte; no s’ha llançat la nova reanàlisi de Semrush. Els backlinks externs i els resultats sobre contactes i primeres visites continuen pendents de gestió i mesurament, respectivament.

Validació documental: **218 files úniques 2–219, A:D exactes, comparació i estats sumen 218**, UTF-8 amb BOM i salts LF. L’extracció llegeix sheetData/sharedStrings perquè el rang declarat pels XML és incomplet; no s’han modificat els XLSX.
