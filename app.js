const toggle = document.querySelector(".toggle");
const cards = document.querySelector(".cards");

toggle.addEventListener("click", () => {
  cards.classList.toggle("show-cards");
});


