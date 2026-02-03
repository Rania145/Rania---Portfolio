// نجيب عناصر المينيو والتوجّل
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// عند الضغط على زرار المينيو
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
