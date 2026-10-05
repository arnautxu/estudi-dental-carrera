# Execució del pla SEO de Lleida · 05/10/2026

Base de codi: `7ded70aaa9ac4682bb28a075fe3ad461a32f5125`, coincident amb `origin/main` i el desplegament públic del 29/09. S’ha treballat en un checkout aïllat; la carpeta original conserva els seus canvis previs.

## Canvis nous d’aquesta execució

- Pàgina de Lleida CA/ES: ortodòncia passa a ser el tractament destacat; implants queda primer a la llista. Es conserva la presència d’ATM, periodòncia, endodòncia i estètica.
- Ortodòncia CA/ES: secció inicial de preparació de primera visita amb la Dra. Carme Roure, preguntes pràctiques i contacte de Lleida.
- Implants CA/ES: la primera valoració passa al primer apartat del contingut; accés des del menú d’apartats, pressupost i CTA de valoració.
- Bruxisme CA/ES: title/H1/descripció centrats en Lleida, professional de referència visible i CTA de valoració. Es conserven contacte de Tremp i explicacions clíniques existents.
- Tres serveis CA/ES: adreça, horaris, telèfon, Maps i WhatsApp de Lleida visibles a la informació pràctica; FAQ de localització i reserva.
- JSON-LD: relació explícita Service → Dentist de Lleida en aquestes sis pàgines, amb les mateixes dades de seu que es mostren al contingut.
- Seguiment: el botó «Com arribar» de la pàgina de Lleida incorpora l’esdeveniment `directions_click` existent. Telèfon, WhatsApp i formulari ja tenien classificació per seu i consentiment.
- Sitemap: data de modificació actualitzada només a les vuit URL editades. Mateixes URL, canonicals i alternances CA/ES.

## Accions del pla que ja existien

La base de producció ja tenia equip amb fotografies i trajectòria, primera visita, horaris corregits, comparació d’aparells, retenció, pressupost d’ortodòncia i implants, explicacions de càrrega immediata, guies de suport i enllaços cap als serveis. També hi havia proves de deduplicació del formulari i seguiment dels contactes. No es presenten com a canvis nous del 5 d’octubre.

Les noves incorporacions són logístiques i editorials, basades en dades i funcions professionals ja publicades. No s’ha atribuït revisió clínica humana, acreditació nova, preu, resultat terapèutic o horari inventat.

## Verificació local

`npm run build` correcte. `npm test`: 164 proves correctes. Comprovació al navegador de vuit URL a 320, 390 i 1280 px: 24 combinacions, sense desbordament horitzontal ni imatges fallides al moment de la comprovació; CTA principal cap a Lleida en CA/ES. Dades a [qa-responsive.json](qa-responsive.json).

Captura: [tractaments en mòbil](captures/lleida-tractaments-mobil.png). La verificació de producció es registrarà després de publicar; la prova local no acredita publicació ni recepció d’esdeveniments a GA4.

## Feina externa preparada

[Fitxes i referències locals](FITXES-I-REFERENCIES.md): correccions concretes per QDQ i Docfav, revisió del perfil de Carme Roure i oportunitat editorial de TotLleida. [Procés de ressenyes](RESSENYES.md): text i criteri operatiu per recepció. [Mesura](MESURA.md): passos de configuració pendents i registre agregat de cites.

No s’ha completat accés estable de gestió a GBP/GSC/GA4 en aquesta execució; Safari tenia una altra sessió en ús. No s’han modificat els comptes, enviat missatges a directoris/pacients ni contractat publicacions. Les fitxes requereixen accés de propietari o intervenció del gestor. El seguiment de 90 dies exigeix recollides futures; aquesta publicació no acredita una millora de rànquing.
