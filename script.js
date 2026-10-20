const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product-card');
function applyFilter(category) {
  filters.forEach(button => button.classList.toggle('active', button.dataset.filter === category));
  products.forEach(product => product.hidden = category !== 'Todos' && product.dataset.category !== category);
}
filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
document.querySelectorAll('.category-card').forEach(card => card.addEventListener('click', () => {
  const category = card.dataset.filter;
  applyFilter(category);
}));

document.getElementById('newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('newsletter-message').textContent = 'Obrigado! O cadastro é demonstrativo e ainda não envia e-mails.';
  document.getElementById('email').value = '';
});
