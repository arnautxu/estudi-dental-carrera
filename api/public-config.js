// Public, non-secret runtime configuration for the static site.
// GA4 remains consent-gated. UMAMI_WEBSITE_ID identifies the separate,
// self-hosted cookieless analytics property.

module.exports = (req, res) => {
  const candidate = String(process.env.GA4_ID || '').trim();
  const ga4Id = /^G-[A-Z0-9]+$/i.test(candidate) ? candidate : null;
  const umamiCandidate = String(process.env.UMAMI_WEBSITE_ID || '').trim();
  const umamiWebsiteId = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(umamiCandidate)
    ? umamiCandidate
    : null;

  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  res.status(200).json({ ga4Id, umamiWebsiteId });
};
