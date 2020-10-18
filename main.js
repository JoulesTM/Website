document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-right").classList.toggle("show");
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".new-sec", { delay: 500 });
ScrollReveal().reveal(".banner-one", { delay: 500 });
ScrollReveal().reveal(".banner-two", { delay: 500 });
