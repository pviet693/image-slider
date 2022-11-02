const slides = document.querySelectorAll(".slide-container");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
let index = 0;

function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

setInterval(next, 7000);

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);