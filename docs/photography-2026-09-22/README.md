# Fotografies del web — 22 de setembre de 2026

Preparat sobre `064f26905d5cbebb597c83e30cbc81adf376f64d`, la versió d’`origin/main` comprovada durant la sessió. Canvis validats abans de publicar-los a `main`.

## Selecció i integració

- 17 fotografies originals del SSD ADATA SD700, de les sessions de Lleida i Tremp.
- 21 articles en català i les seves 21 traduccions: tots inclouen una fotografia dins del text; 12 parelles tenen una segona fotografia en una secció relacionada. Total: 66 figures.
- Targetes del blog i de la portada actualitzades amb la mateixa selecció i amb imatges adaptades a la mida de pantalla.
- Fotografies d’implants i estètica de la pàgina de serveis en format horitzontal. La d’implants conserva l’escena completa de planificació; la d’estètica mostra una restauració dental.
- Fotografies i pàgines d’equip intactes. Originals del SSD intactes.

Els peus i textos alternatius descriuen allò visible, amb la localització correcta. No atribueixen un diagnòstic a les persones fotografiades. A l’article de primera visita infantil s’utilitza la recepció; no es presenta una fotografia d’un adult com si fos un infant. No s’han necessitat imatges de banc per a aquesta selecció.

Només s’han redimensionat i retallat les fotografies, mantenint-ne el color original. 51 fitxers WebP (640, 960 i 1440 píxels), aproximadament 2,03 MiB en total. Les versions grans pesen entre 24 i 135 KiB. Dimensions declarades, càrrega diferida, fonts adaptatives i metadades EXIF eliminades.

## Material de vídeo localitzat

Carpetes amb etiqueta vermella comprovada (`Roja\n6`) a `PLANIFICACIÓ I FEED/AGOST:SETEMBRE/PÚBLICACIONS`:

- `CARRERA/4` i `TREMP/4`: `El_millor_implant_ES_EDITAT_4.mp4`, 1080 × 1920, 37,7 segons. Entrevista amb logotip i subtítols incrustats.
- `CARRERA/7` i `TREMP/7`: `REEL ATM.mp4`, 2160 × 3840, 39,97 segons. Plans clínics i entrevista; el fotograma de 9 segons mostra l’explicació de l’ATM en una pantalla.
- `CARRERA/11` i `TREMP/11`: buides.

Les còpies dels vídeos a Carrera i Tremp són idèntiques. S’han revisat com a material de suport; aquesta integració utilitza les fotografies originals i no incorpora els reels.

## Comprovacions

- Construcció del web correcta i 130 proves superades.
- Revisió visual d’ATM, implants, genives en castellà, blog i serveis en ordinador (1440 px) i mòbil (390 px): imatges visibles carregades i sense desbordament horitzontal.
- Revisió individual de retalls: ajust de l’exploració d’ATM i de l’alineador per conservar els elements rellevants.
- 51 variants comprovades: dimensions reals coincidents amb la informació declarada i sense EXIF.
- Cap canvi a les pàgines o fotografies d’equip.

`sources.json` conserva el fitxer original, hash SHA-256, retall, dimensions i pes de cada versió. `article-map.json` relaciona les imatges amb cada article i secció. `seleccio.jpg` mostra el conjunt seleccionat; les captures documenten el resultat al navegador.

Previsualització local: `http://127.0.0.1:4178/blog.html`.
