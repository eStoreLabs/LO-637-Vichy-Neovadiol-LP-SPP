

(() => {
  const root = document.querySelector("#es-rc #es-rc-content");
  if (!root) return;
  const swiper = new Swiper(root.querySelector(".es-swiper"), {
  direction: "horizontal",
  loop: true,
  autoHeight: true,

  pagination: {
    el: root.querySelector(".es-swiper-pagination"),
  },

  navigation: {
    nextEl: root.querySelector(".es-swiper-button-next"),
    prevEl: root.querySelector(".es-swiper-button-prev"),
  },
});
})();