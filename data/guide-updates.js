// Keep existing URLs and build on their original explanations.
function enrichGuides(guides) {
  const append = (key, id, title, paragraphs) => guides[key].sections.push({ id, title, paragraphs });
  append('ferula-descarrega', 'adaptacio-pressupost', 'Adaptació, neteja i pressupost: què convé deixar acordat?', [
    'Si la fèrula deixa d’encaixar, no la forcis ni intentis escalfar-la per donar-li forma. Contacta amb qui la controla i comenta si hi ha hagut algun tractament dental recent. Porta-la a la visita encara que hagis deixat d’utilitzar-la.',
    'Demana una pauta de neteja concreta per al teu material: raspall o estri, producte compatible i conservació a l’estoig. Evita l’aigua molt calenta. Si un producte es ven per a pròtesis, no assumeixis que serveix també per a la teva fèrula.',
    'En el pressupost, aclareix si s’inclouen els registres, el lliurament, els ajustos inicials i els controls. Pregunta què passaria en cas de pèrdua, trencament o canvis dentals. El seguiment ha de tenir un responsable i un objectiu comprensible.',
  ]);
  append('ferula-descarga', 'adaptacion-presupuesto', 'Adaptación, limpieza y presupuesto: ¿qué conviene acordar?', [
    'Si la férula deja de encajar, no la fuerces ni intentes calentarla para darle forma. Contacta con quien la controla y comenta si ha habido algún tratamiento dental reciente. Llévala a la visita aunque hayas dejado de utilizarla.',
    'Pide una pauta de limpieza concreta para tu material: cepillo o utensilio, producto compatible y conservación en el estuche. Evita el agua muy caliente. Si un producto se vende para prótesis, no asumas que también sirve para tu férula.',
    'En el presupuesto, aclara si se incluyen los registros, la entrega, los ajustes iniciales y los controles. Pregunta qué ocurriría en caso de pérdida, rotura o cambios dentales. El seguimiento debe tener un responsable y un objetivo comprensible.',
  ]);
  append('alineadors-o-braquets', 'materials-pressupost', 'Bràquets metàl·lics o estètics: què canvia en la comparació?', [
    'Hi ha bràquets metàl·lics i opcions del color de la dent, com els ceràmics. Si una proposta parla de zirconi o d’un material concret, demana que te’l confirmin i t’expliquin per què és adequat. «Estètic» descriu l’aspecte, però no resumeix la indicació ni el manteniment.',
    'En els alineadors, Invisalign és una marca, no el nom de tots els aparells transparents. Confirma quin sistema inclou el teu pla, quins elements auxiliars es preveuen i què passa si cal ajustar la seqüència prevista.',
    'Per comparar pressupostos, revisa estudi inicial, aparells, revisions, possibles ajustos del pla, incidències i retenció. Demana quines partides estan incloses i quines poden variar. Ni el material més discret ni el preu inicial més baix decideixen, tot sols, l’opció més adequada.',
  ]);
  append('alineadores-o-brackets', 'materiales-presupuesto', 'Brackets metálicos o estéticos: ¿qué cambia en la comparación?', [
    'Hay brackets metálicos y opciones del color del diente, como los cerámicos. Si una propuesta habla de zirconio o de un material concreto, pide que te lo confirmen y expliquen por qué es adecuado. «Estético» describe el aspecto, pero no resume la indicación ni el mantenimiento.',
    'En los alineadores, Invisalign es una marca, no el nombre de todos los aparatos transparentes. Confirma qué sistema incluye tu plan, qué elementos auxiliares se prevén y qué ocurre si hay que ajustar la secuencia prevista.',
    'Para comparar presupuestos, revisa estudio inicial, aparatos, revisiones, posibles ajustes del plan, incidencias y retención. Pregunta qué partidas están incluidas y cuáles pueden variar. Ni el material más discreto ni el precio inicial más bajo deciden, por sí solos, la opción más adecuada.',
  ]);
  append('sagnat-genives', 'despres-valoracio', 'Què hauria de quedar clar després de valorar les genives?', [
    'Demana un resum del diagnòstic: si la inflamació es limita a la geniva o si s’ha observat afectació del suport de les dents, i en quines zones. Les mesures i les proves s’han de traduir en una explicació que puguis entendre.',
    'Aclareix si es proposa una higiene, tractament periodontal o més estudi. Pots llegir la diferència entre <a href="/guies/neteja-dental-raspat.html">neteja dental i raspat</a> per preparar les preguntes, però la guia no determina quin procediment necessites.',
    'Abans de marxar, confirma la rutina de cures, quan es tornarà a valorar el sagnat i a qui contactar si empitjora. Anota què et costa mantenir a casa perquè el seguiment pugui ajustar les instruccions a la teva situació.',
  ]);
  append('sangrado-encias', 'despues-valoracion', '¿Qué debería quedar claro después de valorar las encías?', [
    'Pide un resumen del diagnóstico: si la inflamación se limita a la encía o si se ha observado afectación del soporte de los dientes, y en qué zonas. Las mediciones y las pruebas deben traducirse en una explicación que puedas entender.',
    'Aclara si se propone una higiene, tratamiento periodontal o más estudio. Puedes leer la diferencia entre <a href="/es/guias/limpieza-dental-raspado.html">limpieza dental y raspado</a> para preparar las preguntas, pero la guía no determina qué procedimiento necesitas.',
    'Antes de salir, confirma la rutina de cuidados, cuándo volverá a valorarse el sangrado y a quién contactar si empeora. Anota qué te cuesta mantener en casa para que el seguimiento pueda adaptar las instrucciones a tu situación.',
  ]);
  append('taques-dents', 'clinica-domicili', 'Blanquejament a la clínica o a casa amb supervisió?', [
    'El tractament professional pot incloure aplicació a la clínica o un sistema domiciliari prescrit, amb fèrules i instruccions. La segona opció continua requerint valoració, pauta d’ús i control. No equival a improvisar productes ni a combinar gels pel teu compte.',
    'Pregunta com s’ha d’actuar si apareix sensibilitat o irritació i quin contacte tindràs durant el tractament. La pauta s’ha d’ajustar al producte i al cas; no augmentis el temps d’aplicació per intentar accelerar el canvi.',
    'Convé acordar com s’avaluarà el color i quin manteniment pot tenir sentit. El resultat no és permanent ni idèntic en totes les dents. Si tens restauracions visibles, pregunta com afecten el pla abans de començar.',
  ]);
  append('manchas-dientes', 'clinica-domicilio', '¿Blanqueamiento en la clínica o en casa con supervisión?', [
    'El tratamiento profesional puede incluir aplicación en la clínica o un sistema domiciliario prescrito, con férulas e instrucciones. La segunda opción sigue requiriendo valoración, pauta de uso y control. No equivale a improvisar productos ni a combinar geles por tu cuenta.',
    'Pregunta cómo actuar si aparece sensibilidad o irritación y qué contacto tendrás durante el tratamiento. La pauta debe ajustarse al producto y al caso; no aumentes el tiempo de aplicación para intentar acelerar el cambio.',
    'Conviene acordar cómo se evaluará el color y qué mantenimiento puede tener sentido. El resultado no es permanente ni idéntico en todos los dientes. Si tienes restauraciones visibles, pregunta cómo afectan al plan antes de empezar.',
  ]);
  append('implant-o-pont', 'una-dent-pressupost', 'Quan falta una sola dent: fases i pressupost', [
    'En una proposta d’implant unitari, diferencia el suport implantat, els components de connexió i la corona visible. Pregunta si cal algun tractament previ i què portaries durant l’espera. En un pont, comprova quines peces s’inclouen i què es farà a cada suport.',
    'Demana un calendari orientatiu amb els punts que depenen de la cicatrització o de l’evolució. Si et parlen d’immediatesa, aclareix la diferència entre <a href="/guies/implant-immediat-carrega-immediata.html">col·locació i càrrega immediata</a>.',
    'Per comparar imports, revisa estudi, procediments previs, cirurgia si escau, provisional, restauració definitiva i controls. Una xifra que només inclou l’implant no és el pressupost de tota la reposició.',
  ]);
  append('implante-o-puente', 'un-diente-presupuesto', 'Cuando falta un solo diente: fases y presupuesto', [
    'En una propuesta de implante unitario, distingue el soporte implantado, los componentes de conexión y la corona visible. Pregunta si hace falta algún tratamiento previo y qué llevarías durante la espera. En un puente, comprueba qué piezas se incluyen y qué se hará en cada soporte.',
    'Pide un calendario orientativo con los puntos que dependen de la cicatrización o de la evolución. Si te hablan de inmediatez, aclara la diferencia entre <a href="/es/guias/implante-inmediato-carga-inmediata.html">colocación y carga inmediata</a>.',
    'Para comparar importes, revisa estudio, procedimientos previos, cirugía si procede, provisional, restauración definitiva y controles. Una cifra que solo incluye el implante no es el presupuesto de toda la reposición.',
  ]);
  append('endodoncia-dubtes', 'recuperacio-controls', 'Com preparar la recuperació i la restauració definitiva?', [
    'Abans de marxar, confirma què pots fer amb la dent mentre es completa la restauració i quan serà la propera visita. No donis per acabat tot el tractament només perquè ja no fa mal. Aclareix qui farà la reconstrucció i com es coordinarà amb els controls.',
    'Si tens dolor intens o persistent, inflor, una mossegada que notes alta o cau el provisional, contacta amb el professional. Explica quan va començar, com evoluciona i quines instruccions has seguit. No ajustis pel teu compte la medicació.',
    'Guarda el resum del tractament i les dates de control. Si canvies de dentista, aquesta informació pot ajudar a continuar el seguiment i a comparar l’evolució de la dent.',
  ]);
  append('endodoncia-dudas', 'recuperacion-controles', '¿Cómo preparar la recuperación y la restauración definitiva?', [
    'Antes de salir, confirma qué puedes hacer con el diente mientras se completa la restauración y cuándo será la próxima visita. No des por terminado todo el tratamiento solo porque ya no duele. Aclara quién hará la reconstrucción y cómo se coordinará con los controles.',
    'Si tienes dolor intenso o persistente, hinchazón, una mordida que notas alta o se cae el provisional, contacta con el profesional. Explica cuándo empezó, cómo evoluciona y qué instrucciones has seguido. No ajustes por tu cuenta la medicación.',
    'Guarda el resumen del tratamiento y las fechas de control. Si cambias de dentista, esa información puede ayudar a continuar el seguimiento y a comparar la evolución del diente.',
  ]);
  return guides;
}
module.exports = { enrichGuides };
