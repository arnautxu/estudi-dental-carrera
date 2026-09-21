# Publicació conjunta dels continguts de serveis — 21/09/2026

Peticio: publicar ara tot el pla, en català i castellà, a main. Substitueix l'esglaonament proposat de deu setmanes.

## Resultat preparat

- 14 temes nous, cadascun en català i castellà: 28 URLs noves.
- 6 guies existents ampliades en tots dos idiomes: fèrula, alineadors/bràquets, sagnat, taques/blanquejament, implant/pont i endodòncia.
- Total: 21 temes, 42 pàgines de guies, 66 URLs al sitemap.
- Les guies noves enllacen amb el servei corresponent i aquest hi retorna un enllaç. Els subpunts de serveis es poden obrir com a lectures. Àncores noves per a odontopediatria, pròtesi, cirurgia oral i radiologia.
- Home: tres destacats i quatre lectures addicionals. El blog exposa els 21 temes per idioma i els filtres continuen funcionant.
- Cita a Lleida i a Tremp des de totes les guies. Mateixes rutes de contacte i consentiment; cap formulari de prova enviat.

## Cobertura dels subpunts

| Grup | Contingut nou o ampliat |
|---|---|
| Diagnòstic mandibular | Clic de mandíbula |
| Fèrula personalitzada i seguiment | Ampliació de la guia de fèrula |
| Coordinació multidisciplinària | Dentista o fisioterapeuta |
| Implant unitari | Ampliació d'implant o pont |
| Implants múltiples | Falten diverses dents |
| All on 4 / All on 6 | Arcada completa: quatre o sis implants |
| Implants immediats | Col·locació i càrrega immediata |
| Alineadors, bràquets metàl·lics i estètics | Ampliació d'alineadors o bràquets |
| Ortodòncia interceptiva | Ortodòncia infantil |
| Blanquejament | Ampliació de taques a les dents |
| Facetes i disseny digital | Composite o porcellana, amb secció sobre simulació |
| Composite local | Reparació d'una vora o d'un espai |
| Odontopediatria | Primera visita infantil |
| Endodòncia | Ampliació de recuperació i restauració |
| Periodontologia | Ampliació de diagnòstic i seguiment del sagnat |
| Pròtesi dental | Fixa o removible |
| Cirurgia oral | Queixals del seny |
| Higiene | Neteja o raspat periodontal |
| Radiologia | Panoràmica o CBCT |
| Urgències | Cop o dent trencada, circuits de les dues seus i 061/112 |

`articles.json` conté els títols, les dues URLs, el servei de destí i les fonts de cada tema nou.

## Fonts i límits editorials

Contrast documental amb fonts primàries sanitàries: ADA, AAPD, AAO, NIDCR, FDA, NHS, ITI, ACR/RSNA i Canal Salut. `sources-checked.json` registra 28 URLs externes amb resposta HTTP 200; les fonts es mostren a cada article. Els textos són explicacions originals i preguntes per preparar la consulta, sense copiar les fonts.

La publicació conjunta respon a la petició expressa del responsable del web. No consta revisió clínica d'un professional de Carrera i no se n'atribueix cap: ni signatura, ni `reviewedBy`, ni data de revisió clínica. No s'inventen preus, percentatges de resultats, experiències de pacients o disponibilitat de marques/equips. Una futura revisió professional pot incorporar-se amb identitat i data reals. Aquest registre documenta la publicació autoritzada i no canvia la pauta general de revisió de docs/BLOG.md.

No s'han validat volums de cerca nous en aquesta entrega. La publicació amplia contingut i accessibilitat al rastreig; no acredita indexació, millores de posició, visites ni primeres visites de pacients. Cal mesurar les impressions i clics per URL i idioma a Search Console, i distingir contactes de cites confirmades.

## Validació abans de publicar

- `npm run build` completat; 123 proves automatitzades correctes.
- 66 URLs locals: HTTP 200, un H1, idioma correcte, canonical propi, alternances recíproques, IDs únics, àncores internes correctes; 21 targetes a cada portada del blog.
- Les 42 guies tenen accés a cita a Tremp i Lleida.
- Comprovació visual de portada d'escriptori, filtre d'estètica (3 articles), article CA/ES en mòbil i nous enllaços dels serveis en fons fosc. Sense desbordament horitzontal a les pàgines comprovades.
- `local-qa.json` conserva el resultat complet. El servidor de prova impedeix enviar contactes i exclou indexació; això no s'aplica a producció.

Després del push, verificar l'estat READY de Vercel i el SHA de main, i executar la mateixa comprovació HTTP sobre el domini públic. No confondre aquesta comprovació amb la indexació de Google.
