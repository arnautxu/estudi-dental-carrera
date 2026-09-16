// Lleida's visual entry point uses the same source content and site shell as
// the other landings. Keep clinical copy, anchors and language pairs in data/.
const clinic = require('../data/clinics').lleida;
const arrow = '<span aria-hidden="true">↗</span>';
const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const paragraphs = values => (values || []).map(text => `<p>${text}</p>`).join('');
const portraits = ['joan-carrera-carrillo', 'albert-vim', 'isabel-sierra', 'carme-roure'];

function renderLleida(page, { contact, phone, wa, references, renderSection }) {
  const es = page.lang === 'es';
  const t = (ca, castellano) => es ? castellano : ca;
  const teamUrl = es ? '/es/equipo.html' : '/equip.html';
  const servicesUrl = es ? '/es/servicios.html' : '/serveis.html';
  const treatments = page.sections.find(section => section.id === t('tractaments', 'tratamientos'));
  const team = page.sections.find(section => section.id === t('equip', 'equipo'));
  const visit = page.sections.find(section => section.id === 'primera-visita');
  const arrival = page.sections.find(section => section.id === t('com-arribar', 'como-llegar'));
  const followup = page.sections.find(section => section.id === t('contacte', 'contacto'));
  const customIds = new Set([treatments.id, team.id, visit.id, arrival.id, followup.id]);
  const featured = treatments.blocks.find(block => /\/atm-bruxism/.test(block.href));
  const otherTreatments = treatments.blocks.filter(block => block !== featured);
  const visitTitles = t(['T’escoltem i explorem', 'Ordenem les prioritats', 'Decidim amb tu'], ['Te escuchamos y exploramos', 'Ordenamos las prioridades', 'Decidimos contigo']);
  const heroHeading = es
    ? 'Clínica dental en Lleida: <em>diagnóstico y tratamientos coordinados</em>'
    : 'Clínica dental a Lleida <em>amb una mirada integral</em>';
  const sectionHeading = (label, heading) => `<span class="label">${label}</span><h2>${heading}</h2>`;
  const appointment = (label, tracking) => `<a href="${contact}" class="btn btn--primary btn--lg" data-track="appointment_cta_click" data-track-label="${tracking}">${label}</a>`;

  return `<main id="main" class="landing-page lleida-page">
    <section class="hero lleida-hero" aria-labelledby="lleida-title">
      <div class="hero__bg" aria-hidden="true"><div class="hero__gradient"></div></div>
      <div class="hero__content">
        <p class="hero__eyebrow">Estudi Dental Carrera · Lleida</p>
        <h1 id="lleida-title" class="hero__title">${heroHeading}</h1>
        <p class="hero__subtitle">${page.lead}</p>
        <div class="hero__actions">
          ${appointment(t('Demana una primera visita', 'Pide una primera visita'), 'landing-hero')}
          <a class="btn btn--ghost btn--lg" href="#${treatments.id}">${t('Els nostres tractaments', 'Nuestros tratamientos')}</a>
        </div>
        <div class="lleida-hero__contact"><span>${t('Parlem?', '¿Hablamos?')}</span><a href="tel:${phone}">973 26 88 26</a><span aria-hidden="true">·</span><a href="https://wa.me/${wa}" target="_blank" rel="noopener">WhatsApp ${arrow}</a></div>
      </div>
      <a class="lleida-hero__discover" href="#la-clinica">${t('Coneix la clínica', 'Conoce la clínica')} <span aria-hidden="true">↓</span></a>
    </section>

    <div class="lleida-facts"><div class="container lleida-facts__inner">
      <a href="#${arrival.id}"><span class="label">${t('Al centre de Lleida', 'En el centro de Lleida')}</span><span>${escapeHtml(clinic.address.streetAddress)} ${arrow}</span></a>
      <div><span class="label">${t('Horari', 'Horario')}</span><span>${t('Dl–Dv 9–20 h · Ds 9–14 h', 'Lu–Vi 9–20 h · Sá 9–14 h')}</span></div>
      <a href="tel:${phone}"><span class="label">${t('Parla amb recepció', 'Habla con recepción')}</span><span>973 26 88 26 ${arrow}</span></a>
    </div></div>

    <section id="la-clinica" class="lleida-intro lleida-section">
      <div class="container">
        <div class="lleida-intro__grid">
          <div class="lleida-copy">
            ${sectionHeading(t('La nostra manera de fer', 'Nuestra forma de trabajar'), t('Odontologia al centre de Lleida.<br><em>Amb temps per explicar.</em>', 'Odontología en el centro de Lleida.<br><em>Con tiempo para explicar.</em>'))}
            ${paragraphs(page.intro)}
            <a class="lleida-text-link" href="#primera-visita">${t('Com serà la primera visita', 'Cómo será tu primera visita')} ${arrow}</a>
          </div>
          <figure class="lleida-intro__photo">
            <img src="/assets/img/seus/slideshow/sl-3-espera.webp" width="1800" height="1200" loading="lazy" decoding="async" alt="${t('Sala d’espera de la clínica de Lleida', 'Sala de espera de la clínica de Lleida')}">
            <figcaption><span>Estudi Dental Carrera</span><span>Carrer Major, Lleida</span></figcaption>
          </figure>
        </div>
        <div class="lleida-principles">${page.trust.map((item, index) => `<div><span class="lleida-number">0${index + 1}</span><div><h3>${item.title}</h3><p>${item.text}</p></div></div>`).join('')}</div>
        <nav class="lleida-jump" aria-label="${escapeHtml(page.sectionNavLabel)}">${page.sections.filter(section => section.id && section.jumpLabel).map(section => `<a href="#${section.id}">${section.jumpLabel}<span aria-hidden="true">↓</span></a>`).join('')}</nav>
      </div>
    </section>

    <section id="${treatments.id}" class="lleida-treatments lleida-section">
      <div class="container">
        <div class="lleida-section-head">${sectionHeading(t('Tractaments a Lleida', 'Tratamientos en Lleida'), t('Tractem el que cal,<br><em>quan cal.</em>', 'Tratamos lo que hace falta,<br><em>cuando hace falta.</em>'))}<div class="lleida-copy">${paragraphs(treatments.paragraphs)}</div></div>
        <div class="lleida-treatments__grid">
          <article class="lleida-featured">
            <img src="/assets/img/home/atm-tile.webp" width="1760" height="1210" loading="lazy" decoding="async" alt="${t('Dra. Carme Roure a la consulta', 'Dra. Carme Roure en la consulta')}">
            <div><span class="label">${t('Mandíbula i benestar', 'Mandíbula y bienestar')}</span><h3>${featured.title}</h3><p>${featured.text}</p><a href="${featured.href}" class="lleida-text-link">${featured.linkLabel} ${arrow}</a></div>
          </article>
          <div class="lleida-treatment-list">${otherTreatments.map((block, index) => `<article><span class="lleida-number">0${index + 1}</span><div><h3><a href="${block.href}">${block.title} ${arrow}</a></h3><p>${block.text}</p></div></article>`).join('')}</div>
        </div>
        <a href="${servicesUrl}" class="lleida-text-link lleida-section-link">${t('Tots els serveis de la clínica', 'Todos los servicios de la clínica')} ${arrow}</a>
      </div>
    </section>

    <section id="${team.id}" class="lleida-team lleida-section">
      <div class="container">
        <div class="lleida-section-head">${sectionHeading(t('El nostre equip', 'Nuestro equipo'), t('Persones que et coneixen.<br><em>Un equip que es coordina.</em>', 'Personas que te conocen.<br><em>Un equipo que se coordina.</em>'))}<div class="lleida-copy">${paragraphs(team.paragraphs)}<a href="${teamUrl}" class="lleida-text-link">${t('Coneix tot l’equip', 'Conoce a todo el equipo')} ${arrow}</a></div></div>
        <ul class="lleida-team__grid">${team.items.map(item => {
          const portrait = portraits.find(slug => item.includes(`#${slug}"`));
          return `<li>${portrait ? `<img src="/assets/img/equip/${portrait}.webp" width="900" height="1080" alt="" loading="lazy" decoding="async">` : ''}<div>${item.replace('</a>: ', '</a>')}</div></li>`;
        }).join('')}</ul>
      </div>
    </section>

    <section id="primera-visita" class="lleida-visit lleida-section">
      <div class="container lleida-visit__grid">
        <div class="lleida-visit__heading">${sectionHeading(t('La primera visita', 'La primera visita'), t('Primer t’escoltem.<br><em>Després decidim.</em>', 'Primero te escuchamos.<br><em>Después decidimos.</em>'))}${appointment(t('Demana visita a Lleida', 'Pide visita en Lleida'), 'lleida-first-visit')}</div>
        <ol class="lleida-steps">${visit.paragraphs.map((text, index) => `<li><span class="lleida-number">0${index + 1}</span><div><h3>${visitTitles[index]}</h3><p>${text}</p></div></li>`).join('')}</ol>
      </div>
    </section>

    <section id="${arrival.id}" class="lleida-arrival lleida-section">
      <div class="container">
        <div class="lleida-arrival__grid">
          <figure class="lleida-arrival__photo"><img src="/assets/img/lleida-edifici.webp" width="1333" height="2000" loading="lazy" decoding="async" alt="${escapeHtml(page.imageAlt)}"></figure>
          <div class="lleida-copy">${sectionHeading(t('Ens trobaràs aquí', 'Nos encontrarás aquí'), t('Al cor de Lleida.<br><em>Al carrer Major.</em>', 'En el corazón de Lleida.<br><em>En carrer Major.</em>'))}<p>${arrival.paragraphs[0]}</p><ul class="lleida-address">${arrival.items.map(item => `<li>${item}</li>`).join('')}</ul><a href="${clinic.hasMap}" target="_blank" rel="noopener" class="btn btn--outline">${t('Com arribar', 'Cómo llegar')} ${arrow}</a></div>
        </div>
        <details class="lleida-preparation"><summary>${t('Què portar i com preparar la visita', 'Qué llevar y cómo preparar la visita')}<span aria-hidden="true">+</span></summary><div class="lleida-copy">${paragraphs(arrival.paragraphs.slice(1))}</div></details>
      </div>
    </section>

    <section id="${followup.id}" class="lleida-followup lleida-section"><div class="container lleida-followup__grid"><div>${sectionHeading(t('Després de la visita', 'Después de la visita'), t('Seguim<br><em>al teu costat.</em>', 'Seguimos<br><em>a tu lado.</em>'))}<a href="tel:${phone}" class="lleida-text-link">973 26 88 26 ${arrow}</a></div><div class="lleida-copy">${paragraphs(followup.paragraphs)}</div></div></section>

    ${page.sections.filter(section => !customIds.has(section.id)).map(section => renderSection(section, page.sections.indexOf(section), { contact, isEs: es })).join('')}

    <section class="landing-faq lleida-faq"><div class="container lleida-faq__grid"><div>${sectionHeading(t('Abans de venir', 'Antes de venir'), t('Tens<br><em>preguntes?</em>', '¿Tienes<br><em>preguntas?</em>'))}</div><div><div class="landing-faq__list">${page.faqs.map(faq => `<details><summary>${faq.q}<span aria-hidden="true">+</span></summary><p>${faq.a}</p></details>`).join('')}</div><div class="landing-editorial">${page.editorial} ${t('Darrera actualització editorial', 'Última actualización editorial')}: ${page.updatedLabel}.</div>${references}</div></div></section>
    <section class="landing-related lleida-related"><div class="container"><span class="label">${t('Per saber-ne més', 'Para saber más')}</span><h2>${t('Prepara la teva visita', 'Prepara tu visita')}</h2><div class="landing-related__grid">${page.related.map(item => `<a class="landing-related__card" href="${item.href}"><span>${item.type}</span><strong>${item.label}</strong>${arrow}</a>`).join('')}</div></div></section>

    <section class="cta-band lleida-cta"><div class="container"><span class="label">Estudi Dental Carrera · Lleida</span><h2>${t('El primer pas és<br><em>parlar-ne.</em>', 'El primer paso es<br><em>hablarlo.</em>')}</h2><p>${page.ctaText}</p>${appointment(t('Demana una primera visita', 'Pide una primera visita'), 'landing-footer')}<div class="lleida-hero__contact"><a href="tel:${phone}">973 26 88 26</a><span aria-hidden="true">·</span><a href="https://wa.me/${wa}" target="_blank" rel="noopener">WhatsApp ${arrow}</a></div></div></section>
  </main>`;
}

module.exports = { renderLleida };
