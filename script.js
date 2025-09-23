document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch('header.html')
    fetch('/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      
      // Enable mobile toggle AFTER content loads
      const toggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.nav-links');
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('active');
        });
      }
    });

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch("https://formsubmit.co/ajax/info@digitalsparkhq.com", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          contactForm.style.display = "none";
          formMessage.textContent =
            "Thanks for contacting us! We will be in touch with you shortly.";
          formMessage.style.color = "green";
          formMessage.style.display = "block";
        } else {
          throw new Error("Formsubmit request failed");
        }
      })
      .catch(error => {
        formMessage.textContent =
          "Oops! Something went wrong. Please try again later.";
        formMessage.style.color = "red";
        formMessage.style.display = "block";
        console.error("Formsubmit error:", error);
      });
  });
}
});
