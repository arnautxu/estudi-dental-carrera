# Implementació i verificació

10 de setembre de 2026. Implementació local del pla autoritzada amb «Fes-ho». No publicada.

## Resultat

- Petició guiada CA/ES en tres passos: orientació opcional, clínica i contacte. La seu es mostra abans d’enviar i en la confirmació; es pot canviar sense perdre les dades.
- La recepció de la clínica escollida rep la petició. No es reserva cap hora automàticament ni es promet un termini de resposta no confirmat.
- Orientació local i opcional: ni es persisteix ni s’envia. El correu només inclou contacte, clínica, franja de trucada, idioma i confirmació del consentiment. Eliminats missatge lliure i especialitat del correu.
- Validació per camp, estat d’enviament, bloqueig de doble clic, límit de 15 segons al client, reintent amb clau d’idempotència i alternatives de contacte de la clínica escollida.
- Els accessos generals de telèfon/WhatsApp permeten escollir clínica. Les pàgines de localitat preseleccionen la seu al formulari. El canvi d’idioma conserva aquesta selecció; no traspassa dades personals.
- Contacte traslladat just després de la capçalera de seus. Formulari amb controls llegibles, files de selecció, jerarquia clara i barra fixa amagada mentre s’utilitza en mòbil.
- Portada CA/ES més breu, sense marquee de tractaments. Es preserven tipografia, colors i fotografies reals.
- Revisió editorial de les set pàgines ES i de les dades de les set landings ES. Registre de 105 substitucions editorials inicials a canvis-editorials.json; també s’han harmonitzat textos del formulari i dels components compartits. Cites atribuïdes preservades.
- Textos de privacitat CA/ES actualitzats segons les dades del nou formulari. No equival a una revisió jurídica.
- Recursos CSS/JS compartits versionats per evitar la càrrega de l’antic controlador des de la memòria cau.

## Verificació executada

`node --test tests/contact.test.cjs`: **11/11 proves superades**. Inclou CA/ES × Lleida/Tremp, destinataris, dades invàlides, exclusió de dades d’orientació, HTML/assumpte, idempotència, absència de configuració, fallada de proveïdor/xarxa, honeypot i mètode HTTP.

Comprovació de sintaxi de main.js, appointment.js, contact.js, landing.js i landing-pages.js. Cap identificador duplicat i un sol formulari a cada pàgina de seus.

Navegador local amb l’API real i proveïdor de correu simulat: **quatre recorreguts complets** (CA/ES × Lleida/Tremp), quatre correus simulats dirigits exclusivament al destinatari escollit. També s’ha comprovat validació buida, canvi de clínica, retorn entre passos, fallada d’enviament i reintent sense perdre dades. La fallada mostra els contactes de Tremp quan Tremp és la seleccionada.

Inspecció visual a 1440 × 1000, 390 × 844 i comprovació del formulari a 320 × 740. Sense overflow horitzontal a 320/390. No s’han observat errors de JavaScript en la consulta final del navegador. Captures a captures/.

Impeccable 4.3.1: detector posterior sobre quatre documents (78 avisos bruts, no equivalents a defectes confirmats ni directament comparables amb les cinc pàgines de l’auditoria inicial). Revisió independent del formulari: **disposition: ship**, limitada a les captures d’escriptori/mòbil, errors/èxit i implementació mostrejada. Sense correccions materials pendents en aquest abast. Revisió addicional de portada ES i accessos de contacte en escriptori/mòbil: **disposition: ship**, també sense correccions materials.

Passada independent de documentació del sistema: **No changes**. Contrastats PRODUCT.md, DESIGN.md, DESIGN.json, main.css, appointment.css i les dues pàgines de seus. Extensió dins la identitat existent; cap reescriptura del sistema. Les divergències prèvies de documentació no s’han convertit en regles noves.

## Límits i pendents concrets

- La recepció real de correus i les variables de producció encara no s’han verificat. Les proves no han enviat correus reals. La previsualització a http://127.0.0.1:4187 utilitza enviaments simulats.
- Cal que la clínica confirmi les dades professionals divergents de l’auditoria: Yasmine/Yasmin i el màster d’Isabel Sierra en curs o finalitzat. No s’han inventat correccions.
- Les fotografies dels professionals de Tremp no s’han canviat en aquesta intervenció. Les modificacions d’imatges que ja hi havia al checkout s’han preservat.
- No s’ha fet una certificació WCAG ni una validació clínica o jurídica del conjunt del web.

## Estat del checkout

Base HEAD c6fa27fd9c69c62c0f678d5f0eeef148b7bace54 amb molts canvis previs. Còpia prèvia dels fitxers de text intervinguts: /Users/arnau/.codex/backups/carrera-web-20260910-090123. El diff contra HEAD inclou treball anterior i no s’ha de considerar íntegrament d’aquesta intervenció. No s’ha fet commit, push ni desplegament.
