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

// form submission
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    const form = document.getElementById("footer-contact-form");
    const message = form.querySelector(".form-message");
    message.style.display = "block";           // show thank-you message
    form.querySelector("div.row").style.display = "none"; // hide inputs
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("footer-contact-form");
  const message = form.querySelector(".form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop the page from reloading

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        // Hide the form fields
        form.querySelector("div.row").style.display = "none";
        // Show thank-you message
        message.style.display = "block";
        // Optionally, reset the form
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
});
