const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
