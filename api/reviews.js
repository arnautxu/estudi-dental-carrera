// Live Google Reviews for the homepage testimonials carousel.
//
// Requires these env vars in Vercel (Project Settings → Environment Variables):
//   GOOGLE_PLACES_API_KEY   — a Google Cloud API key with "Places API" enabled
//   GOOGLE_PLACE_ID_LLEIDA  — Place ID for the Lleida clinic (Google Business Profile)
//   GOOGLE_PLACE_ID_TREMP   — Place ID for the Tremp clinic
//
// Without them this endpoint returns 200 with an empty `reviews` array, and
// the homepage silently keeps its static testimonials — never a broken page.
//
// Google's Place Details endpoint returns at most 5 reviews per place, picked
// by Google as "most relevant" — there is no pagination to get more.

const CACHE_SECONDS = 60 * 60 * 12; // 12h — reviews don't need to be real-time

async function fetchPlace(placeId, apiKey, lang) {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'name,rating,user_ratings_total,reviews');
  url.searchParams.set('language', lang);
  url.searchParams.set('key', apiKey);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Google Places HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== 'OK') throw new Error(`Google Places status ${data.status}`);
  return data.result;
}

module.exports = async (req, res) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeIds = [process.env.GOOGLE_PLACE_ID_LLEIDA, process.env.GOOGLE_PLACE_ID_TREMP].filter(Boolean);
  const lang = (req.query.lang === 'es') ? 'es' : 'ca';

  res.setHeader('Cache-Control', `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`);

  if (!apiKey || !placeIds.length) {
    res.status(200).json({ reviews: [], rating: null, total: null, configured: false });
    return;
  }

  try {
    const places = await Promise.all(placeIds.map(id => fetchPlace(id, apiKey, lang)));

    const allReviews = places.flatMap(p => p.reviews || []);
    allReviews.sort((a, b) => (b.time || 0) - (a.time || 0));

    const totalRatings = places.reduce((sum, p) => sum + (p.user_ratings_total || 0), 0);
    const weightedAvg = totalRatings
      ? places.reduce((sum, p) => sum + (p.rating || 0) * (p.user_ratings_total || 0), 0) / totalRatings
      : null;

    res.status(200).json({
      configured: true,
      rating: weightedAvg ? Math.round(weightedAvg * 10) / 10 : null,
      total: totalRatings || null,
      reviews: allReviews.slice(0, 9).map(r => ({
        author: r.author_name,
        text: r.text,
        rating: r.rating,
        time: r.time,
        lang: r.language,
      })),
    });
  } catch (err) {
    // Never break the page over a Google API hiccup — fall back client-side.
    res.status(200).json({ reviews: [], rating: null, total: null, configured: true, error: String(err.message || err) });
  }
};
