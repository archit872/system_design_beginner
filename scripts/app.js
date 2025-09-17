document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll(".app-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  // Mobile nav toggle (if menu collapses)
  const nav = document.querySelector(".app-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Quiz answer toggles (details elements)
  document.querySelectorAll("details").forEach(d => {
    d.addEventListener("toggle", () => {
      // Optionally log or style expanded answers
    });
  });
});
