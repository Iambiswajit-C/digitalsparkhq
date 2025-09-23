document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

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
});
