# Mesura de Lleida · estat d’execució

El codi ja registra `phone_click`, `whatsapp_click`, `appointment_cta_click`, passos del formulari i `generate_lead` amb seu i context de pàgina. `generate_lead` només s’emet després de resposta confirmada del servei. S’han preservat consentiment i deduplicació; les 164 proves locals passen. No s’ha enviat un formulari real a recepció.

Canvi nou: el botó de Maps a la pàgina de Lleida utilitza `directions_click` amb classificació de seu. La recepció dels esdeveniments a GA4 queda pendent de comprovació autenticada.

## Configuració quan hi hagi accés als comptes

| Compte | Acció concreta | Acceptació |
|---|---|---|
| GA4 | Comprovar recepció d’un clic amb consentiment i seu `lleida`; validar `generate_lead` amb una prova acordada amb recepció | Esdeveniment i paràmetres visibles al compte; cap duplicat |
| GA4 | Revisar si `generate_lead` ja és un esdeveniment clau; configurar només si falta | Clics de telèfon/WhatsApp diferenciats de sol·licituds acceptades |
| GA4 | Crear/reutilitzar dimensions `clinic`, `page_language`, `page_clinic` i una exploració per landing | Informe usable per seu; sense dades personals ni motiu clínic |
| GSC | Exportar últims 28 dies i 28 anteriors, per pàgina/consulta/dispositiu | Fitxers datats i segment Lleida comercial/no marca |
| GSC | Comprovar sitemap existent i indexació de les vuit URL | Estat observat; no enviar repetidament peticions d’indexació |
| GBP | Exportar dades disponibles de web, trucades i indicacions de Lleida | Mateixa fitxa i mateix període; no equiparar-ho a cites |
| Semrush UI | Conservar les 132 keywords i crear vistes Lleida/Tremp i comercial/marca | Històric intacte; base nacional separada de qualsevol seguiment local mòbil nou |

## Registre de recepció

[Plantilla CSV](registre-captacio-lleida.csv) amb recompte agregat setmanal: contactes vàlids, cites confirmades i visites realitzades, segons origen conegut. Sense noms, telèfons, identificadors ni dades clíniques. Una fila per setmana i origen. «Desconegut» és un valor vàlid; no atribuir a SEO els casos sense evidència.

Amb menys de 28 dies comparables o una mostra petita, informar recomptes i tendències amb prudència. Les posicions noves es valoraran després de recollides futures; no són un resultat verificat d’aquesta execució.
