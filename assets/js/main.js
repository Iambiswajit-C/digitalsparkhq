// Scroll behavior for topbar + shrink
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

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    const form = document.getElementById("footer-contact-form");
    const message = form.querySelector(".form-message");
    message.style.display = "block";           // show thank-you message
    form.querySelector("div.row").style.display = "none"; // hide inputs
  }
});
