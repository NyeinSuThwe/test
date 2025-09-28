// Simple nav toggle and year injection
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      siteNav.classList.toggle("open");
    });
  }

  // Inject current year into all spans that need it
  const year = new Date().getFullYear();
  document.querySelectorAll("#year, #year-2, #year-3").forEach(el => {
    el.textContent = year;
  });
});
