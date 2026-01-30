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

  /* ===== UNIVERSAL AJAX FORM HANDLER ===== */

document.querySelectorAll("form[action*='formsubmit']").forEach(form => {

  const message =
      form.querySelector(".form-message") ||
      form.parentElement.querySelector(".form-message");

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action,{
      method:"POST",
      body:formData,
      headers:{Accept:"application/json"}
    })
    .then(res=>{

      if(res.ok){

        const row = form.querySelector(".row");
        if(row) row.style.display="none";

        if(message){
          message.style.display="block";
          message.innerHTML =
          "✅ Thanks! Your message has been delivered.<br>We typically respond within 24 hours.";
        }

        form.reset();
      }

    })
    .catch(()=> alert("Something went wrong. Please try again."));
  });

});

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

 /* ===== Pop Up Form Loader ===== */
document.querySelectorAll("[data-service]").forEach(btn => {

  btn.addEventListener("click", function(){

    const field = document.getElementById("serviceField");

    if(field){
      field.value = this.dataset.service;
    }

  });

});
  
});
