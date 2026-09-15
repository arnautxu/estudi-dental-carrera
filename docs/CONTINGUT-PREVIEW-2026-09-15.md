# Proposta local de contingut SEO · 15 de setembre de 2026

## Objectiu i estat

1. Millorar les pàgines existents amb respostes útils, navegació clara, professionals reals i enllaços contextuals.
2. Afegir sis guies que ajudin a preparar una consulta, connectades amb els serveis corresponents (dotze pàgines entre català i castellà).

**Proposta local, no publicada.** El checkout principal i el web de producció no s’han modificat en aquesta execució. Les guies estan pendents de validació clínica; no s’atribueix revisió ni autoria als professionals de la clínica.

- Còpia de treball: `/Users/arnau/WEBS/carrera-seo-content-preview`.
- Branca: `codex/seo-content-preview`.
- Base: `45a3396362dd97bdf4762153b0fe24f8d2d7c6a0`.
- Preview: <http://localhost:4176>.

Després de revisar la primera proposta, l’usuari ha demanat integrar tota la informació dins de la web normal. S’ha retirat «Guies» dels menús i s’han afegit enllaços petits sota els tractaments corresponents. Totes les pàgines generades comparteixen la capçalera, el menú mòbil i el peu normals a través de `lib/site-shell.js`. Les lectures complementàries fan servir la capçalera fotogràfica de Serveis i una ruta de navegació que passa pel tractament; s’ha retirat la portada independent de les guies.

`DESIGN.md` i `PRODUCT.md` no s’han reescrit. No s’han afegit preus ni durades de primera visita, garanties de resultats ni credencials noves. El conveni Carnet Jove confirmat es conserva només per a Lleida.

## Pàgines existents: 12 rutes, sis famílies

| Família | Català | Castellà |
|---|---|---|
| Clínica de Lleida | `/clinica-dental-lleida.html` | `/es/clinica-dental-lleida.html` |
| Implants | `/implants-dentals.html` | `/es/implantes-dentales.html` |
| Ortodòncia | `/ortodoncia.html` | `/es/ortodoncia.html` |
| Periodòncia i endodòncia | `/periodoncia-endodoncia.html` | `/es/periodoncia-endodoncia.html` |
| Estètica dental | `/estetica-dental.html` | `/es/estetica-dental.html` |
| ATM i bruxisme | `/atm-bruxisme.html` | `/es/atm-bruxismo.html` |

L’ampliació viu a `data/service-enrichment.js`, connectada des de `data/landing-pages.js`. Afegeix àncores, blocs amb H3 i dubtes concrets: implant i pròtesi; alineador, retenidor i fèrula; neteja i blanquejament; seguiment d’ATM. Manté les rutes i metadades existents. El perfil d’Isabel Sierra a estètica reutilitza les dades i la fotografia ja publicades.

## Guies: sis temes en dos idiomes

| Tema | Català | Castellà |
|---|---|---|
| Endodòncia | `/guies/endodoncia-dubtes.html` | `/es/guias/endodoncia-dudas.html` |
| Sagnat de genives | `/guies/sagnat-genives.html` | `/es/guias/sangrado-encias.html` |
| Fèrula de descàrrega | `/guies/ferula-descarrega.html` | `/es/guias/ferula-descarga.html` |
| Implant o pont | `/guies/implant-o-pont.html` | `/es/guias/implante-o-puente.html` |
| Alineadors o bràquets | `/guies/alineadors-o-braquets.html` | `/es/guias/alineadores-o-brackets.html` |
| Taques dentals | `/guies/taques-dents.html` | `/es/guias/manchas-dientes.html` |

Índexs: `/guies.html` i `/es/guias.html`. El contingut es defineix a `data/guides.js` i es presenta amb `api/guide.js`. Les guies i els serveis s’enllacen entre si.

La segona tanda es defineix a `data/guides-implants.js`, `data/guides-ortho.js` i `data/guides-stains.js`, carregats per l’agregador. Cada tema respon a una decisió o un dubte propi, amb sis seccions, tres preguntes freqüents i fonts sanitàries primàries. S’hi arriba amb enllaços petits des de Serveis i des del tractament relacionat. La capçalera, el peu i els estils aprovats es reutilitzen.

### Evidència SEO de la segona tanda

La consulta nova al connector Semrush no va retornar dades: `403 ERROR 132 :: API UNITS BALANCE IS ZERO`. S’ha utilitzat la captura anterior de Keyword Gap del 15/09/2026:

| Tema | Dada anterior de Semrush (Espanya) | Abast de l’evidència |
|---|---|---|
| Taques | `manchas dientes`: volum mensual estimat 260, KD 8 | Demanda del tema; comparació neteja/blanquejament pendent de verificar |
| Alineadors o bràquets | `que es la ortodoncia invisible`: 260, KD 19 | Cerca relacionada; no és el volum de la comparació |
| Implant o pont | `implantologia`: 1.300, KD 15 | Terme ampli; volum de la comparació desconegut |

Les lectures informatives es connecten amb els serveis locals existents. No s’ha creat una pàgina per cada variant de paraula clau. Aquests volums són estimacions nacionals: no equivalen a visites al web ni a pacients de Lleida. Crear les pàgines tampoc acredita posicionament. Les dades originals i la limitació de quota consten a l’artefacte `Keywords-nova-tanda-2026-09-15.json` de la carpeta de visualitzacions d’aquesta tasca.

## Com reprendre la preview

Des de la còpia de treball indicada:

```sh
npm ci
npm run build
PREVIEW_PORT=4176 node scripts/preview-content.cjs
```

Començar per <http://localhost:4176/serveis.html#endodoncia> per veure la integració, o per qualsevol ruta de les taules. Aquest servidor és local; no equival a un desplegament públic. L’usuari ha reiterat que vol revisar-ho abans de publicar.

## Validació registrada

Comprovacions de la primera tanda (anteriors a l’ampliació):

- 64 proves automatitzades.
- 20 rutes HTTP comprovades.
- 670 enllaços interns, 288 àncores i 162 recursos estàtics verificats, sense errors.
- Càrrega del mòdul d’ampliació i execució repetida sense duplicar contingut comprovades.

Ampliació de la segona tanda: build correcte, 70 proves superades i `git diff --check` correcte. Les proves inclouen les sis rutes noves, alternates, sitemap, enllaços de tornada al tractament i àncores. Comprovat al navegador el recorregut Serveis → implant/pont i el canvi CA → ES des del menú mòbil; captures d’escriptori i mòbil a la carpeta de visualitzacions. Aquestes comprovacions no substitueixen la validació clínica ni un desplegament.

Per continuar: revisar la proposta visual local i validar clínicament les guies. No donar aquests textos per publicats ni atribuir-los resultats de posicionament o captació.
