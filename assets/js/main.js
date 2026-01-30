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
            message.textContent =
              "Oops! Something went wrong. Please try again.";
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
    setTimeout(() => heroText.classList.add("show"), 200);
  }

  /* ===== Tools auto-scroll (seamless, no gap) ===== */
  const inner = document.querySelector(".tools-marquee-inner");
  const track = document.querySelector(".tools-track");

  if (inner && track) {
    // Clone the track
    const clone = track.cloneNode(true);
    inner.appendChild(clone);

    let speed = 0.5; // pixels per frame
    let position = 0;
    let trackWidth = track.offsetWidth;
    let paused = false;

    // Update trackWidth on resize
    const updateWidth = () => {
      trackWidth = track.offsetWidth;
    };
    window.addEventListener("resize", updateWidth);

    // Pause on hover
    inner.parentElement.addEventListener("mouseenter", () => (paused = true));
    inner.parentElement.addEventListener("mouseleave", () => (paused = false));

    const animate = () => {
      if (!paused) {
        position -= speed;
        if (Math.abs(position) >= trackWidth) {
          position = 0; // seamless loop
        }
        inner.style.transform = `translateX(${position}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }
});

/* ===== Scroll fade-in effect for About sections ===== */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in, .about-hero-text");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((el) => observer.observe(el));
});

/* ===== Floating Particle Canvas for Team Section ===== */
const canvas = document.getElementById("team-particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = Array.from({ length: 25 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * 400,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,212,255,0.3)";
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = 400;
  }
  window.addEventListener("resize", resize);
  resize();
  draw();
}

/* ===== Video autoplay ===== */
document.addEventListener("DOMContentLoaded", () => {
  const heroVideo = document.getElementById("heroVideo");
  if (heroVideo) {
    heroVideo.play().catch(() => {
      heroVideo.muted = true;
      heroVideo.play();
    });
  }

  /* ===== Image Preview for Portfolio ===== */
  const portfolioModal = document.getElementById('portfolioModal');

portfolioModal.addEventListener('show.bs.modal', function (event) {

  const trigger = event.relatedTarget;
  const imgSrc = trigger.getAttribute('data-img');

  const modalImg = document.getElementById('portfolioModalImg');
  modalImg.src = imgSrc;

});

    /* ===== Pop up Success Message ===== */
const projectForm = document.getElementById("project-contact-form");

if(projectForm){

  const message = projectForm.querySelector(".form-message");

  projectForm.addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData(projectForm);

    fetch(projectForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
    .then(response => {

      if(response.ok){

        projectForm.querySelector(".row").style.display = "none";
        message.style.display = "block";

        projectForm.reset();

      }else{
        alert("Oops! Something went wrong.");
      }

    })
    .catch(() => alert("Network error. Please try again."));
  });

}
  const serviceField = document.getElementById("serviceField");

document.querySelectorAll("[data-service]").forEach(btn => {

  btn.addEventListener("click", function(){

    if(serviceField){
      serviceField.value = this.getAttribute("data-service");
    }

  });

});
  
});
