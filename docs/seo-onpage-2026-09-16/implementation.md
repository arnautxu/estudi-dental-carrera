# Millores On Page SEO · 16 de setembre de 2026

Base verificada: `0404aaf585349da18f48554bf75d0e4d3101052c`, coincident amb `origin/main` i la producció de Vercel abans de publicar. Implementació aïllada a `codex/semrush-onpage-improvements`; els altres checkouts no s’han modificat.

## Canvis aplicats

- Ortodòncia CA/ES: comparativa d’alineadors i brackets amb ús, higiene, indicació i controls. Substitueix prosa repetida; conserva la necessitat de valoració individual.
- Estètica CA/ES: comparativa de composite i ceràmica, incloent preparació, reparació i manteniment. Explica que retirar esmalt és irreversible.
- Tremp CA/ES: adreça, horari i telèfon des de les dades públiques compartides; accessos directes a Maps i WhatsApp; enllaços contextuals a tractaments i indicacions més clares per coordinar visites.
- Professionals de referència amb perfil enllaçat a les àrees que ja tenien un professional identificat. No s’atribueix una revisió clínica ni s’afegeix `reviewedBy` sense confirmació.
- Fonts desplegables amb el text «Per saber-ne més» / «Para saber más», també a les guies.
- Seguiment de contactes unificat i contextualitzat per pàgina, idioma i clínica; respecta les preferències existents. Detall a [tracking.md](tracking.md).
- Versions dels assets canviats renovades i `lastmod` de les sis pàgines amb canvis substantius actualitzat.

## Verificació prèvia a publicació

`npm run build` i `npm test`: **80/80 proves aprovades**. El conjunt cobreix les 14 landings, les guies, canonical/hreflang, els enllaços previstos, el formulari i el seguiment de contactes.

Verificació en navegador local: ortodòncia en escriptori i mòbil, estètica a 320/390 px i Tremp a 320/390 px. Sense desbordament horitzontal en les mides comprovades ni errors de JavaScript. Capçaleres de les taules vinculades a les cel·les; desplegable de fonts funcional; enllaços de contacte de Tremp de 44 px d’alçada. Inspecció visual de les captures completada.

El detector de disseny només ha assenyalat avisos en declaracions de tipografia i color preexistents. Cap canvi al sistema visual general.

## Límits i següents comprovacions

La vista actual de Semrush mostrava 31 idees en 9 pàgines: 12 UX, 7 backlinks, 7 SERP i 5 contingut. No s’han aplicat automàticament les recomanacions obsoletes d’absència de paraules clau de l’exportació, perquè la interfície actual ja les donava per resoltes. El volum de text no és un objectiu per si mateix.

No s’han afegit estrelles de ressenyes pròpies. Els suggeriments de backlinks requereixen gestió externa: [oportunitats verificades](backlink-opportunities.md). No s’ha enviat cap missatge ni contractat cap publicació.

Queden pendents la lectura posterior de Semrush i la recepció dels esdeveniments a GA4/Umami amb les seves dades de període i mostra. Les proves de codi no acrediten millora de posicions, rebot ni primeres visites.
