// SQUARE

// Hide/Show me!
const square1 = document.querySelector(".square");
const btnHide = document.querySelector(".btn-hide")
btnHide.addEventListener("click", () => {
    square1.classList.toggle("hidden");
});

// Change my color!
const square2 = document.querySelector(".square");
const btnColor = document.querySelector(".btn-color")
btnColor.addEventListener("click", () => {
    square2.classList.toggle("color");
});

// Make me pulse!
const square3 = document.querySelector(".square");
const btnPulse = document.querySelector(".btn-pulse")
btnPulse.addEventListener("click", () => {
    square3.classList.toggle("pulse");
});

// Make me spin!
const square4 = document.querySelector(".square");
const btnSpin = document.querySelector(".btn-spin")
btnSpin.addEventListener("click", () => {
    square4.classList.toggle("spin");
});