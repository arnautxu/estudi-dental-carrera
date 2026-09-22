/* Appointment request. Orientation is local-only: never persist or transmit it. */
(() => {
  const form = document.querySelector('[data-appointment]');
  if (!form) return;
  const es = document.documentElement.lang === 'es';
  const text = (ca, castellano) => es ? castellano : ca;
  const clinics = {
    carrera: { city: 'Lleida', name: 'Estudi Dental Carrera', phone: '+34973268826', display: '973 26 88 26', wa: '34615983352' },
    tremp: { city: 'Tremp', name: 'Estudi Dental Tremp', phone: '+34973447534', display: '973 44 75 34', wa: '34650600172' }
  };
  const steps = [...form.querySelectorAll('[data-step]')];
  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('[type="submit"]');
  const intro = document.querySelector('[data-appointment-intro]');
  const genericIntro = intro?.textContent;
  let step = 0;
  let directEntry = false;
  let busy = false;
  let sent = false;
  let requestId = '';
  let previousPayload = '';
  let started = false;
  const measuredSteps = new Set();
  const selected = () => form.querySelector('[name="seu"]:checked')?.value || '';
  const clinic = () => clinics[selected()];

  // Only fixed funnel labels leave this form. No field values, orientation,
  // request IDs or validation messages belong in analytics.
  function measure(name, extra = {}) {
    window.track?.(name, {
      form_name: 'appointment',
      form_entry: directEntry ? 'clinic_link' : 'guided',
      clinic: selected() === 'carrera' ? 'lleida' : selected() === 'tremp' ? 'tremp' : 'unselected',
      ...extra
    });
  }

  function measureStep() {
    const key = `${step}:${selected()}`;
    if (!started || measuredSteps.has(key)) return;
    measuredSteps.add(key);
    measure('appointment_step', { form_step: step + 1 });
  }

  function startMeasurement() {
    if (started || sent) return;
    started = true;
    measure('appointment_start');
    measureStep();
  }

  function setStatus(message = '', kind = 'error') {
    status.textContent = message;
    status.className = `form-status form-status--${kind}`;
    status.hidden = !message;
  }

  function clearErrors() {
    form.querySelectorAll('.field-error').forEach(el => { el.hidden = true; el.textContent = ''; });
    form.querySelectorAll('[aria-invalid]').forEach(el => {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    });
  }

  function fieldError(name, message) {
    const fields = [...form.querySelectorAll(`[name="${name}"]`)];
    const error = form.querySelector(`#${name}-error`);
    if (!error || !fields.length) return;
    error.textContent = message;
    error.hidden = false;
    fields.forEach(el => { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', error.id); });
  }

  function updateClinic() {
    const c = clinic();
    form.querySelector('[data-clinic-context]').textContent = c ? `${text('Clínica de', 'Clínica de')} ${c.city}` : 'Lleida · Tremp';
    form.querySelector('[data-clinic-summary]').textContent = c ? `${c.name} · ${c.city}` : '';
    submit.textContent = c ? text(`Enviar sol·licitud a ${c.city}`, `Enviar solicitud a ${c.city}`) : text('Enviar sol·licitud', 'Enviar solicitud');
    if (intro) intro.textContent = directEntry && c
      ? text(`Deixa les teves dades. La recepció de ${c.city} et trucarà per concretar la visita.`, `Deja tus datos. La recepción de ${c.city} te llamará para concretar la visita.`)
      : genericIntro;
    document.querySelectorAll('a[hreflang].nav__lang-link, a[hreflang].mobile-menu__lang-link').forEach(link => {
      const url = new URL(link.href, window.location.href);
      url.searchParams.delete('seu');
      url.searchParams.delete('canal');
      url.hash = (es ? 'contacte' : 'contacto') + (c ? `-${selected()}` : '');
      link.href = url.pathname + url.search + url.hash;
    });
    document.dispatchEvent(new CustomEvent('appointment:clinic', { detail: { id: selected() } }));
  }

  function showStep(next, focus = true) {
    step = Math.max(0, Math.min(2, next));
    steps.forEach((el, i) => { el.hidden = i !== step; });
    form.classList.toggle('appointment--direct', directEntry);
    form.querySelector('[data-step-count]').textContent = directEntry
      ? (step === 1 ? text('Tria la clínica', 'Elige la clínica') : text('Dades de contacte', 'Datos de contacto'))
      : `${step + 1} de 3`;
    form.querySelector('.appointment-steps').hidden = directEntry;
    steps[2].querySelector('[data-back]').hidden = directEntry;
    steps[1].querySelector('[data-back]').textContent = directEntry ? text('Tornar al contacte', 'Volver al contacto') : text('Enrere', 'Atrás');
    form.querySelectorAll('.appointment-steps li').forEach((el, i) => {
      if (i === step) el.setAttribute('aria-current', 'step');
      else el.removeAttribute('aria-current');
    });
    setStatus();
    form.querySelector('[data-recovery]').hidden = true;
    measureStep();
    if (focus) steps[step].querySelector('legend').focus();
  }

  function validateClinic() {
    if (clinic()) return true;
    fieldError('seu', text('Escull la clínica on prefereixes venir.', 'Elige la clínica a la que prefieres venir.'));
    measure('appointment_error', { form_step: 2, error_type: 'clinic_required' });
    form.querySelector('[name="seu"]').focus();
    return false;
  }

  function validateContact() {
    const fields = [];
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const digits = phone.replace(/\D/g, '');
    if (!name) fields.push(['name', text('Escriu el teu nom.', 'Escribe tu nombre.')]);
    if (!/^[+()\d\s.-]+$/.test(phone) || digits.length < 6 || digits.length > 15) {
      fields.push(['phone', text('Escriu un telèfon vàlid, amb el prefix si cal.', 'Escribe un teléfono válido, con el prefijo si es necesario.')]);
    }
    const email = form.elements.email.value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.push(['email', text('Revisa l’adreça de correu o deixa aquest camp buit.', 'Revisa la dirección de correo o deja este campo vacío.')]);
    if (!form.elements.consent.checked) fields.push(['consent', text('Cal acceptar el tractament de les dades per enviar la sol·licitud.', 'Debes aceptar el tratamiento de los datos para enviar la solicitud.')]);
    fields.forEach(([name, message]) => fieldError(name, message));
    if (fields.length) {
      measure('appointment_error', { form_step: 3, error_type: 'contact_validation' });
      form.querySelector(`[name="${fields[0][0]}"]`).focus();
    }
    return !fields.length;
  }

  form.noValidate = true;
  submit.disabled = false;
  form.classList.add('is-ready');
  showStep(0, false);
  form.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => {
    if (busy || sent) return;
    startMeasurement();
    clearErrors();
    if (step === 1 && !validateClinic()) return;
    showStep(step + 1);
  }));
  form.querySelectorAll('[data-back]').forEach(button => button.addEventListener('click', () => {
    if (busy || sent) return;
    if (directEntry && step === 1) { if (validateClinic()) showStep(2); }
    else showStep(step - 1);
  }));
  form.querySelector('[data-edit-clinic]').addEventListener('click', () => { if (!busy && !sent) showStep(1); });
  form.querySelectorAll('[name="seu"]').forEach(radio => radio.addEventListener('change', () => {
    startMeasurement(); clearErrors(); updateClinic(); measureStep();
  }));
  form.addEventListener('input', event => {
    if (['name', 'phone', 'email', 'horari', 'consent'].includes(event.target.name)) startMeasurement();
  });
  const orientation = [
    text('Pots explicar quan notes la molèstia durant la trucada. No cal que sàpigues quin tractament necessites.', 'Puedes explicar cuándo notas la molestia durante la llamada. No necesitas saber qué tratamiento necesitas.'),
    text('La primera visita permetrà valorar què passa. Aquí només estàs demanant que contactem amb tu.', 'La primera visita permitirá valorar qué ocurre. Aquí solo estás pidiendo que contactemos contigo.'),
    text('Podràs explicar què voldries canviar. Les opcions es valoren a la consulta.', 'Podrás explicar qué te gustaría cambiar. Las opciones se valoran en la consulta.'),
    text('La recepció t’ajudarà a concretar la visita a la clínica que escullis.', 'Recepción te ayudará a concretar la visita en la clínica que elijas.'),
    text('Deixa les dades de contacte de la persona adulta que gestiona la visita.', 'Deja los datos de contacto de la persona adulta que gestiona la visita.'),
    text('Cap problema. Només necessitem saber on prefereixes venir i com et podem contactar.', 'Sin problema. Solo necesitamos saber dónde prefieres venir y cómo podemos contactar contigo.'),
    text('Podràs explicar què voldries canviar. Les opcions es valoren a la consulta.', 'Podrás explicar qué te gustaría cambiar. Las opciones se valoran en la consulta.')
  ];
  form.querySelectorAll('[name="orientation"]').forEach(radio => radio.addEventListener('change', () => {
    form.querySelector('[data-orientation-feedback]').textContent = orientation[Number(radio.value)] || '';
  }));

  function applyContactLink(focus = false) {
    // A fragment must never change the recipient while a request is in flight,
    // or reopen a successfully submitted form. Typed details remain in place.
    if (busy || sent) return;
    const params = new URLSearchParams(location.search);
    const match = location.hash.match(/^#contact[eo]-(carrera|tremp|whatsapp|directe)(?:-(whatsapp|directe))?$/);
    const fragment = match?.[1];
    const preselected = clinics[fragment] ? fragment : params.get('seu');
    if (clinics[preselected]) {
      form.querySelectorAll('[name="seu"]').forEach(radio => { radio.checked = radio.value === preselected; });
      directEntry = true;
      showStep(2, focus);
    }
    updateClinic();
    if (params.has('canal') || fragment === 'whatsapp' || fragment === 'directe' || match?.[2]) {
      document.querySelector('.appointment-direct').open = true;
    }
  }
  applyContactLink();
  window.addEventListener('hashchange', () => applyContactLink(true));
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href, location.href);
    // Clicking the current clinic link again does not emit hashchange.
    if (url.origin === location.origin && url.pathname === location.pathname && url.hash === location.hash
      && /^#contact[eo]-(?:carrera|tremp|whatsapp|directe)(?:-(?:whatsapp|directe))?$/.test(url.hash)) applyContactLink(true);
  });

  function recovery() {
    const c = clinic();
    if (!c) return;
    const links = form.querySelector('[data-recovery]');
    const phone = links.querySelector('[data-recovery-phone]');
    phone.href = `tel:${c.phone}`;
    phone.textContent = `${text('Trucar a', 'Llamar a')} ${c.city} · ${c.display}`;
    const wa = links.querySelector('[data-recovery-wa]');
    wa.href = `https://wa.me/${c.wa}`;
    wa.textContent = `WhatsApp · ${c.city}`;
    wa.dataset.seu = c.city.toLowerCase();
    links.hidden = false;
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || sent) return;
    startMeasurement();
    // Enter in earlier steps advances instead of bypassing the clinic selection.
    if (step < 2) { steps[step].querySelector('[data-next]').click(); return; }
    clearErrors();
    if (!clinic()) { showStep(1); validateClinic(); return; }
    if (!validateContact()) return;
    // Explicit allowlist. Never serialize orientation or arbitrary form fields.
    const payload = {
      name: form.elements.name.value.trim(), phone: form.elements.phone.value.trim(),
      email: form.elements.email.value.trim(), seu: selected(),
      horari: form.elements.horari.value, consent: form.elements.consent.checked,
      lang: es ? 'es' : 'ca', website: form.elements.website.value
    };
    const serialized = JSON.stringify(payload);
    if (serialized !== previousPayload || !requestId) {
      requestId = crypto.randomUUID();
      previousPayload = serialized;
    }
    payload.requestId = requestId;
    busy = true;
    form.setAttribute('aria-busy', 'true');
    steps.forEach(el => { el.disabled = true; });
    submit.textContent = text('Enviant…', 'Enviando…');
    setStatus(text('Enviant la sol·licitud…', 'Enviando la solicitud…'), 'info');
    form.querySelector('[data-recovery]').hidden = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let failureType = 'network_error';
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload), signal: controller.signal
      });
      failureType = response.status === 429 ? 'rate_limited' : 'request_failed';
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        if (response.status === 400 && Array.isArray(result.fields)) {
          result.fields.forEach(name => fieldError(name, text('Revisa aquest camp.', 'Revisa este campo.')));
        }
        throw new Error('Request not accepted');
      }
      sent = true;
      const c = clinic();
      steps.forEach(el => { el.hidden = true; });
      form.querySelector('.appointment-steps').hidden = true;
      form.querySelector('[data-step-count]').textContent = text('Enviada', 'Enviada');
      setStatus();
      const success = form.querySelector('[data-success]');
      success.hidden = false;
      success.querySelector('[data-success-message]').textContent = text(
        `Hem rebut la teva sol·licitud per a ${c.name}, a ${c.city}. La recepció es posarà en contacte amb tu per concretar la visita.`,
        `Hemos recibido tu solicitud para ${c.name}, en ${c.city}. Recepción se pondrá en contacto contigo para concretar la visita.`
      );
      measure('generate_lead');
      // Clear personal details and local orientation after confirmed acceptance.
      form.reset();
      form.querySelector('[data-orientation-feedback]').textContent = '';
      success.querySelector('h3').focus();
    } catch (_) {
      measure('appointment_error', { form_step: 3, error_type: controller.signal.aborted ? 'timeout' : failureType });
      setStatus(text('No hem pogut confirmar l’enviament. Les dades es conserven: torna-ho a provar o contacta directament amb la clínica.', 'No hemos podido confirmar el envío. Tus datos se conservan: vuelve a intentarlo o contacta directamente con la clínica.'));
      recovery();
    } finally {
      clearTimeout(timeout);
      busy = false;
      form.removeAttribute('aria-busy');
      steps.forEach(el => { el.disabled = false; });
      if (!sent) updateClinic();
    }
  });

  form.querySelector('[data-restart]').addEventListener('click', () => {
    sent = false; requestId = ''; previousPayload = '';
    directEntry = false;
    started = false; measuredSteps.clear();
    form.querySelector('[data-success]').hidden = true;
    form.querySelector('.appointment-steps').hidden = false;
    clearErrors(); updateClinic(); showStep(0);
  });

  // Avoid fixed phone/WhatsApp controls obscuring the active request on mobile.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      document.body.classList.toggle('appointment-in-view', entries[0].isIntersecting);
    }, { threshold: 0 }).observe(form);
  }
})();
