
const hero_slides = document.querySelectorAll(".hero");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentslider = 0;

function showslider(number) {
    hero_slides.forEach((slide) => slide.classList.remove('active'));
    hero_slides[number].classList.add('active');
}
nextButton.addEventListener('click', () => {
    currentslider = (currentslider + 1) % hero_slides.length;
    showslider(currentslider);
});
prevButton.addEventListener('click', () => {
    currentslider = (currentslider - 1 + hero_slides.length) % hero_slides.length;
    showslider(currentslider);
});
setInterval(() => {
    currentslider = (currentslider + 1) % hero_slides.length;
    showslider(currentslider);
}, 3000);
