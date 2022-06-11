// Scroll To Top Button
let scrollToTopButton = document.querySelector(".scrollToTop");

// Behaviour on Click
scrollToTopButton.addEventListener("click", () => {
  document.querySelector(`.home_intro`).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});

// Show and Hide on Scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset <= 200) {
    scrollToTopButton.style.clipPath = "circle(0%)";
  } else {
    scrollToTopButton.style.clipPath = "circle(48%)";
  }
});
