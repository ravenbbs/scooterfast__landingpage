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

