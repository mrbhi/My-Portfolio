const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-list');
const close = document.querySelector('.hamburger-menu-close');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

document.querySelectorAll('.menu-link').forEach((l) => l.addEventListener('click', () => {
  menu.classList.remove('active');
}));