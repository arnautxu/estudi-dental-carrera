// Old contact links carry UI state in the query. Keep that state in a fragment
// so crawlers see one contact document per language, without duplicate URLs.
module.exports = (req, res) => {
  const es = req.query.lang === 'es';
  const path = es ? '/es/sedes.html' : '/seus.html';
  const clinic = ['carrera', 'tremp'].includes(req.query.seu) ? req.query.seu : '';
  const channel = ['whatsapp', 'directe'].includes(req.query.canal) ? req.query.canal : '';
  const state = [clinic, channel].filter(Boolean).join('-');
  const fragment = `${es ? 'contacto' : 'contacte'}${state ? `-${state}` : ''}`;
  const tracking = new URLSearchParams();
  for (const [key, value] of Object.entries(req.query)) {
    if ((key.startsWith('utm_') || ['gclid', 'fbclid'].includes(key)) && typeof value === 'string') tracking.set(key, value);
  }
  const search = tracking.size ? `?${tracking}` : '';
  res.setHeader('Location', `${path}${search}#${fragment}`);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(308).end();
};
