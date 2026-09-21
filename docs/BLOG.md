# Blog de Carrera

## Primera entrega

Portada `/blog.html` i `/es/blog.html`, sis temes existents en dos idiomes, filtres accessibles, menú i peu globals i tres destacats a la home. Els articles conserven les URLs. Les antigues portades de guies redirigeixen permanentment al Blog. No s'han afegit dates ni signatures clíniques que no constin. El schema BlogPosting descriu el contingut existent sense inventar autoria.

## Presentació dels articles

No mostrar etiquetes d’esborrany ni de revisió pendent als articles, en cap idioma. Els estats editorials són interns i no formen part de la pàgina que llegeix el visitant.

## Publicar contingut

La primera versió es gestiona al repositori, sense panell CMS. `data/guides*.js` conté els articles; `data/blog.js` en controla categoria, ordre, estat i destacats. El build genera els destacats de les dues homes des del mateix catàleg.

1. Preparar una fitxa amb consulta principal, intenció, URL, tractament relacionat, fonts i dubtes reals de consulta. Comprovar Search Console/Semrush abans d'afirmar demanda o prioritat per volum.
2. Redactar les dues versions amb la mateixa estructura de `data/guides.js`. Afegir-les al catàleg amb `status: 'draft'`. Aquest estat retorna 404 a l'URL directa i exclou l'article de portada/home. No afegir esborranys al sitemap ni als enllaços d'altres articles.
3. Revisió clínica per un professional real de Carrera. Registrar nom, data real i canvis en la fitxa editorial; no donar per revisats els articles anteriors. Fonts desplegables, afirmacions prudents i resposta orientada a la consulta.
4. Per revisar el render, canviar a `published` en una branca de preview protegida/noindex, afegir les dues rewrites a `vercel.json`, sitemap/hreflang recíprocs i enllaços contextuals des del tractament. La previsualització local reprodueix la porta de publicació; no té un mode privat de lectura d'esborranys.
5. Comprovar mòbil, enllaços, idiomes i fonts; executar `npm run build` i `npm test`. Publicar després de la revisió: passar a `published`, afegir les dues entrades de sitemap amb hreflang recíprocs i completar els enllaços relacionats. Les URLs són estables; canvis futurs requereixen redirecció.
6. Si es publiquen autoria/revisió/dates, mostrar-les a l'article i reflectir-les fidelment al schema. Mai posar la data del deploy com a data de revisió clínica.

## Mapa inicial d'intencions

| Grup | Articles actuals | Pàgina comercial que reforcen |
|---|---|---|
| ATM i bruxisme | Fèrula de descàrrega | `/atm-bruxisme.html` |
| Dents i genives | Sagnat de genives; dubtes sobre endodòncia | `/periodoncia-endodoncia.html` |
| Implants i ortodòncia | Implant o pont; alineadors o bràquets | `/implants-dentals.html`; `/ortodoncia.html` |
| Estètica | Taques a les dents | `/estetica-dental.html` |

Les cerques locals de dentista/clínica a Lleida o Tremp continuen a les pàgines de clínica. Les cerques de tractaments amb intenció de contractació corresponen a serveis. Els articles cobreixen preguntes informatives; evitar clonar una pàgina comercial amb un títol gairebé idèntic.

## Calendari proposat: primers 90 dies

Ordre provisional pendent de dades de demanda i prioritats de la clínica. Sense volums inventats.

| Període | Nou tema CA / ES | Destinació |
|---|---|---|
| Mes 1 | Dolor mandibular en despertar / Dolor mandibular al despertar | ATM |
| Mes 1 | Gingivitis i periodontitis: diferències / Gingivitis y periodontitis: diferencias | Periodòncia |
| Mes 2 | Dolor després d'una endodòncia / Dolor después de una endodoncia | Endodòncia |
| Mes 2 | Recuperació d'un implant dental / Recuperación de un implante dental | Implants |
| Mes 3 | Ortodòncia en adults / Ortodoncia en adultos | Ortodòncia |
| Mes 3 | Sensibilitat després del blanquejament / Sensibilidad después del blanqueamiento | Estètica |

Dues peces mensuals, cadascuna en català i castellà, condicionades a revisió clínica. Actualitzar també els articles que ja obtenen impressions. Cap contingut pendent està programat ni publicat automàticament.

## Mesurar després de publicar

Registrar una línia de base en Search Console: consultes, pàgines, impressions, clics i CTR, separant marca i consultes informatives. Revisar indexació als 14 dies i rendiment als 30, 60 i 90 dies amb períodes comparables. Un canvi de posició no prova causalitat.

Els clics del blog cap a un tractament porten `blog_service_click`; llegir un article, tocar el telèfon o WhatsApp no és una cita. El tracking conserva el mecanisme de consentiment existent. Contrast amb formularis enviats i primeres visites confirmades per la clínica. Accés als comptes i atribució de visites encara s'han de validar; aquesta entrega no acredita creixement orgànic.

## Article preparat el 16/09/2026

**Dolor de mandíbula en despertar: és bruxisme?** / **Dolor de mandíbula al despertar: ¿es bruxismo?**

- Fitxer: `data/guides-jaw-morning.js`; dues versions, estat `published` per petició de publicació del responsable del web.
- Fotografia: `assets/img/blog/atencio-mandibula-carme.webp`, optimitzada a partir de `CARME/WORK/DSCF0278.jpg` del disc de fotos de Carrera. Original conservat sense canvis.
- Intenció: dubte sobre un símptoma al matí. Consulta principal provisional: «dolor mandíbula al despertar»; català: «dolor mandíbula en despertar». Sense volum ni dificultat validats.
- Diferenciació: la pàgina ATM explica la valoració del servei; la guia de fèrula tracta l'aparell; aquesta peça ajuda a descriure el símptoma i orientar la consulta.
- Fonts consultades: NIDCR (bruxisme i TMD) i NHS (TMD, bruxisme, dolor dental i apnea). Fonts enllaçades dins de l'article. Contrast de causes/diagnòstic amb NIDCR; autocura i senyals d'alarma amb NHS. No s'atribueix autoria ni revisió al personal de Carrera.
- Revisió clínica: **pendent**. Validar especialment l'autocura, la prioritat dels senyals d'alarma i la formulació sobre fèrules abans d'aprovar la publicació.
- Publicat al Blog en català i castellà, en primera posició, i inclòs al sitemap amb alternances recíproques. No forma part dels tres destacats de la home. La publicació no acredita una revisió clínica ni atribueix autoria al personal de Carrera.

## Ampliació conjunta del 21/09/2026

Publicació conjunta autoritzada pel responsable del web: 14 temes nous en CA/ES i sis guies existents ampliades. Total de 21 temes en cada idioma. La petició substitueix el calendari esglaonat anterior. Fonts contrastades i cap atribució de revisió clínica a l'equip. Vegeu `docs/articles-serveis-2026-09-21/README.md` per a cobertura, fonts, límits editorials i verificació.

Els nous temes viuen a `guides-family`, `guides-restoration`, `guides-aesthetics` i `guides-prevention`; `guides-library` els adapta al format del render i del catàleg. `guide-updates` amplia les sis guies sense canviar-ne les URLs.
