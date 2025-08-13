// Botão Instagram:

const instagramBtn = document.getElementById("instagramButton");

instagramBtn.addEventListener("click", () => {
  window.open("https://www.instagram.com/construpred", "_blank");
});

const facebookBtn = document.getElementById("facebookButton");

facebookBtn.addEventListener("click", () => {
  window.open("https://www.facebook.com/profile.php?id=61564298175344", "_blank");
});

const whatsappBtn = document.getElementById("whatsappButton");

whatsappBtn.addEventListener("click", () => {
  window.open("https://wa.me/5554981534028", "_blank");
});

const slides = document.querySelectorAll('.slides a');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;
let interval = setInterval(nextSlide, 4000);

// Criar indicadores
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
    resetTimer();
  });
  indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.indicators div');

function updateCarousel() {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});