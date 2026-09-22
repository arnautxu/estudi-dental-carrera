const MAX_LENGTHS = {
  name: 120,
  phone: 40,
  email: 180,
  horari: 120,
};

function clean(value, max) {
  return String(value || '').trim().slice(0, max);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  if (clean(body.website, 200)) {
    // Honeypot: return a neutral success so bots do not learn the rule.
    res.status(200).json({ ok: true });
    return;
  }

  const data = {
    name: clean(body.name, MAX_LENGTHS.name),
    phone: clean(body.phone, MAX_LENGTHS.phone),
    email: clean(body.email, MAX_LENGTHS.email),
    seu: clean(body.seu, 20),
    horari: clean(body.horari, MAX_LENGTHS.horari),
    consent: body.consent === true || body.consent === 'on',
    lang: body.lang === 'es' ? 'es' : 'ca',
  };

  const digits = data.phone.replace(/\D/g, '');
  const validPhone = /^[+()\d\s.-]{6,40}$/.test(data.phone) && digits.length >= 6 && digits.length <= 15;
  const validEmail = !data.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const fields = [];
  if (!data.name) fields.push('name');
  if (!validPhone) fields.push('phone');
  if (!validEmail) fields.push('email');
  if (!['carrera', 'tremp'].includes(data.seu)) fields.push('seu');
  if (!['', 'morning', 'afternoon'].includes(data.horari)) fields.push('horari');
  if (!data.consent) fields.push('consent');
  if (fields.length) {
    res.status(400).json({ ok: false, error: 'invalid_fields', fields });
    return;
  }

  const apiKey = String(process.env.RESEND_API_KEY || '').trim();
  const from = String(process.env.CONTACT_FROM_EMAIL || '').trim();
  const to = data.seu === 'tremp'
    ? String(process.env.CONTACT_EMAIL_TREMP || 'contacte@estudidentaltremp.com').trim()
    : String(process.env.CONTACT_EMAIL_LLEIDA || 'carrera@clinicarrera.cat').trim();

  if (!apiKey || !from || !to) {
    res.status(503).json({ ok: false, error: 'contact_not_configured' });
    return;
  }

  const location = data.seu === 'tremp' ? 'Tremp' : 'Lleida';
  const subjectName = data.name.replace(/[\r\n]+/g, ' ');
  const subject = `Nova sol·licitud web · ${location} · ${subjectName}`;
  const lines = [
    ['Nom', data.name],
    ['Telèfon', data.phone],
    ['Email', data.email || 'No indicat'],
    ['Centre', location],
    ['Franja per trucar', { morning: 'Matí', afternoon: 'Tarda' }[data.horari] || 'Sense preferència'],
    ['Idioma', data.lang.toUpperCase()],
  ];
  const html = `
    <h1>Nova sol·licitud de cita</h1>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ddd">
      ${lines.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('')}
    </table>
    <p>La persona ha acceptat el tractament de les dades per gestionar aquesta sol·licitud. Cal contactar-hi per concretar la visita; no té una hora reservada.</p>`;

  try {
    // A retry of the same request must not create a second email. No health
    // orientation or free-form message is accepted by this endpoint.
    const requestId = clean(body.requestId, 36);
    const idempotencyKey = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)
      ? `appointment/${requestId}` : null;
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : {}),
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        reply_to: data.email || undefined,
      }),
    });

    if (!response.ok) {
      console.error('Contact delivery rejected', response.status);
      res.status(502).json({ ok: false, error: 'delivery_failed' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact delivery unavailable');
    res.status(502).json({ ok: false, error: 'delivery_failed' });
  }
};
