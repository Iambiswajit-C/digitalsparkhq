// Handle topbar + navbar behavior on scroll
window.addEventListener("scroll", function() {
  const topbar = document.getElementById("topbar");
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    topbar.classList.remove("topbar-transparent");
    topbar.classList.add("topbar-solid");
    navbar.classList.add("shrink");
  } else {
    topbar.classList.add("topbar-transparent");
    topbar.classList.remove("topbar-solid");
    navbar.classList.remove("shrink");
  }
});
