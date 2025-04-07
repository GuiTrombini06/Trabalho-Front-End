const galeria = document.getElementById('galeria');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const fotoLargura = 300 + 16;

btnNext.addEventListener('click', () => {
  galeria.scrollBy({ left: fotoLargura, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  galeria.scrollBy({ left: -fotoLargura, behavior: 'smooth' });
});