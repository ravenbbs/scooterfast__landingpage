// Carousel Swiper
let swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    // Se ha redireccionado a una sección específica
    var navbar = document.getElementById("header-show"); // Reemplaza "navbar" con el ID de tu navbar
    navbar.classList.add("header-hidden"); // Oculta el navbar
  }
});
