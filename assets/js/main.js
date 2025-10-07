document.addEventListener("DOMContentLoaded", function () {
  /* ===== Scroll behavior for topbar + shrink ===== */
  const topbar = document.getElementById("topbar");
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
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

  /* ===== Footer form submission (AJAX) ===== */
  const form = document.getElementById("footer-contact-form");
  if (form) {
    const message = form.querySelector(".form-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            form.querySelector("div.row").style.display = "none";
            message.style.display = "block";
            form.reset();
          } else {
            message.style.display = "block";
            message.textContent = "Oops! Something went wrong. Please try again.";
            message.classList.remove("text-success");
            message.classList.add("text-danger");
          }
        })
        .catch(() => {
          message.style.display = "block";
          message.textContent = "Oops! Something went wrong. Please try again.";
          message.classList.remove("text-success");
          message.classList.add("text-danger");
        });
    });
  }

  /* ===== Contact hero fade-in animation ===== */
  const heroText = document.querySelector(".contact-hero-text");
  if (heroText) {
    // Add a short delay to allow DOM paint before animation
    setTimeout(() => {
      heroText.classList.add("show");
    }, 200);
  }
});
