(() => {
  const filters = document.querySelector('[data-blog-filters]');
  if (!filters) return;
  const cards = [...document.querySelectorAll('[data-blog-category]')];
  const count = document.querySelector('[data-blog-count]');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.category !== 'all' && card.dataset.blogCategory !== button.dataset.category; });
    const visible = cards.filter(card => !card.hidden).length;
    count.textContent = `${visible} ${visible === 1 ? count.dataset.singular : count.dataset.plural}`;
  });
})();
