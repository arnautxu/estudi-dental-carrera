# Mesura dels contactes · 16 de setembre de 2026

Implementació revisada a partir de la base de producció `0404aaf`. Aquesta revisió cobreix el codi i proves locals; no acredita la recepció dels esdeveniments a les interfícies de GA4 o Umami ni modifica aquests comptes.

## Correccions aplicades

- Els botons de la portada en castellà i dels serveis encara declaraven `click_cita`. Ara tots aquests clics s’envien com a `appointment_cta_click`, el mateix nom que utilitzen la portada en català i la navegació.
- Els botons amb `data-track` no incloïen la seu destinatària. Ara es resol a partir de l’enllaç del formulari i es conserva la diferència entre la pàgina d’origen i la clínica que rebrà la petició.
- Tots els esdeveniments emesos amb `window.track` comparteixen `page_path`, `page_language` i `page_clinic`. Abans el camí només es passava explícitament als clics de telèfon i WhatsApp.
- Un error del proveïdor Umami ja no impedeix enviar l’esdeveniment a GA4 quan hi ha consentiment.
- Els clics només utilitzen etiquetes de posició fixes. No es copia el text visible d’un botó o una etiqueta arbitrària al payload. Un atribut `data-track` arbitrari tampoc pot generar un `generate_lead` per un clic.
- L’inventari d’HTML, `api` i `lib` conserva les etiquetes de landing, guies i primera visita a Lleida. El nou botó de Maps emet `directions_click` amb la seu de la pàgina, sense enviar l’URL de Maps.

La deduplicació del formulari i l’emissió de `generate_lead` després d’una resposta confirmada ja existien i s’han preservat. No s’ha modificat `appointment.js`.

## Esdeveniments i significat

| Esdeveniment | Quan s’emet | Paràmetres propis |
|---|---|---|
| `phone_click` | Clic en un enllaç `tel:` | `clinic` deduïda del número conegut de la clínica |
| `whatsapp_click` | Clic en un enllaç a WhatsApp | `clinic` deduïda del número conegut de la clínica |
| `appointment_cta_click` | Clic per obrir el formulari de cita | `clinic`, `etiqueta` |
| `contact_options_click` | Clic per obrir les opcions de contacte directe | `clinic`, `etiqueta` |
| `directions_click` | Clic al botó de Maps «Com arribar» | `clinic` de la pàgina, `etiqueta` |
| `appointment_start` | Primera interacció amb el formulari | `clinic`, `form_name`, `form_entry` |
| `appointment_step` | Pas visitat després d’iniciar el formulari; una vegada per pas i seu | Els anteriors i `form_step` |
| `appointment_error` | Validació fallida o enviament no confirmat | Els anteriors i `form_step`, `error_type` |
| `generate_lead` | `/api/contact` respon amb estat HTTP correcte i JSON `ok: true` | `clinic`, `form_name`, `form_entry` |

Els clics de telèfon, WhatsApp i cita mesuren intenció. No confirmen una conversa, una primera visita ni un pacient nou. `generate_lead` confirma l’acceptació de la sol·licitud pel servei de contacte; tampoc confirma una cita realitzada.

Context comú:

- `page_path`: ruta de la pàgina d’origen, sense query ni fragment.
- `page_language`: `ca` o `es`.
- `page_clinic`: `lleida`, `tremp` o `general`, segons la pàgina d’origen.
- `clinic`: seu destinatària del contacte; `lleida`, `tremp`, `unselected` en un formulari genèric, o `general` en un número no reconegut.
- `etiqueta`: `hero`, `cta-band`, `serveis-cta`, `landing-hero`, `landing-section`, `landing-section-tremp`, `landing-footer`, `landing-alternative-tremp`, `landing-practical`, `guide-contact`, `lleida-first-visit`, `navigation`, `mobile-menu`, `mobile-bar`, `footer` o `page`.
- `form_entry`: `guided` o `clinic_link`. `form_step`: 1, 2 o 3. `form_name`: `appointment`.
- `error_type`: etiquetes fixes (`clinic_required`, `contact_validation`, `network_error`, `rate_limited`, `request_failed`, `timeout`); mai el text d’una resposta remota.

Els payloads personalitzats de contacte no inclouen el nom, telèfon, correu, missatge, motiu clínic, orientació del formulari ni identificador de la petició. Els números dels enllaços només s’utilitzen localment per identificar la seu. El contingut del missatge preomplert de WhatsApp no es transmet com a paràmetre.

## Consentiment i continuïtat de les dades

Es manté el sistema existent: Umami depèn de la preferència `umami` i GA4 de `analytics`. Les opcions del banner, els valors inicials, el Consent Mode de la capçalera i la configuració dels comptes no s’han alterat. Les proves comproven també que revocar Umami abans de carregar l’script descarta els esdeveniments en cua.

El canvi de `click_cita` a `appointment_cta_click` unifica dades futures; no reescriu l’històric. En comparar abans/després cal sumar els dos noms per als períodes anteriors. No s’han creat dimensions personalitzades ni s’han marcat esdeveniments clau a GA4.

## Verificació

Ordre executada:

```sh
node --test tests/appointment-tracking.test.cjs tests/contact-tracking-context.test.cjs
```

Resultat: **23 proves aprovades**, amb 10 proves noves de context i classificació. Cobreixen els dos idiomes, seu d’origen diferent de la destinatària, clics en icones internes, absència de duplicats entre gestors genèrics i etiquetats, exclusió de dades privades, etiquetes de posició existents, clics de Maps, les quatre combinacions de consentiment, fallada d’Umami, validació del formulari, errors de xarxa, resposta 429, reintents idempotents i un únic lead després d’acceptació confirmada.

No s’ha enviat cap formulari real ni s’han generat contactes de prova a la clínica. Queden pendents la comprovació de recepció a GA4/Umami, el període i volum que expliquen el 100% de rebot de Semrush, i la vinculació de sol·licituds amb primeres visites. Aquests resultats no es poden inferir de les proves locals.
