document.addEventListener("DOMContentLoaded", function () {
  /* ===== Scroll behavior for topbar + shrink ===== */
  const topbar = document.getElementById("topbar");
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      if (topbar) topbar.classList.remove("topbar-transparent"), topbar.classList.add("topbar-solid");
      if (navbar) navbar.classList.add("shrink");
    } else {
      if (topbar) topbar.classList.add("topbar-transparent"), topbar.classList.remove("topbar-solid");
      if (navbar) navbar.classList.remove("shrink");
    }
  });

  /* ===== Footer form submission (AJAX) ===== */
  (function initFooterForm() {
    const form = document.getElementById("footer-contact-form");
    if (!form) return;
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
            // hide all row groups inside the form (preserve structure)
            const rows = form.querySelectorAll("div.row");
            rows.forEach(r => (r.style.display = "none"));
            if (message) message.style.display = "block";
            form.reset();
          } else {
            if (message) {
              message.style.display = "block";
              message.textContent = "Oops! Something went wrong. Please try again.";
              message.classList.remove("text-success");
              message.classList.add("text-danger");
            }
          }
        })
        .catch(() => {
          if (message) {
            message.style.display = "block";
            message.textContent = "Oops! Something went wrong. Please try again.";
            message.classList.remove("text-success");
            message.classList.add("text-danger");
          }
        });
    });
  })();

  /* ===== Contact hero fade-in animation ===== */
  (function initHeroText() {
    const heroText = document.querySelector(".contact-hero-text");
    if (heroText) setTimeout(() => heroText.classList.add("show"), 200);
  })();

  /* ===== Fade-in Intersection Observer for .fade-in and hero/about texts ===== */
  (function initObserver() {
    const elements = document.querySelectorAll(".fade-in, .about-hero-text, .contact-hero-text, .about-hero-text");
    if (!elements.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.18 });
    elements.forEach(el => observer.observe(el));
  })();

  /* ===== Team particles canvas (safe) ===== */
  (function initTeamParticles(){
    const canvas = document.getElementById("team-particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const maxParticles = 28;
    let rafId;

    function setup() {
      // size canvas to its parent width, fixed height for effect
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      canvas.height = 400;
      particles = Array.from({ length: maxParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,212,255,0.18)";
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      rafId = requestAnimationFrame(draw);
    }

    setup();
    window.addEventListener("resize", () => {
      cancelAnimationFrame(rafId);
      setup();
      draw();
    });
    draw();
  })();

  /* ===== Tools marquee (adaptive, safe transform-based animation) ===== */
  (function initToolsMarquee(){
    const marqueeContainer = document.querySelector(".tools-marquee");
    if (!marqueeContainer) return;

    // find first track node (must be a direct child containing icons)
    const firstTrack = marqueeContainer.querySelector(".tools-track");
    if (!firstTrack) return;

    // Prevent accidental double-init if called multiple times
    if (marqueeContainer.dataset.marqueeInitiated === "1") return;
    marqueeContainer.dataset.marqueeInitiated = "1";

    // Safety cap
    const MAX_CLONES = 6;

    // After layout is ready (next paint), clone tracks until wide enough or hit cap
    requestAnimationFrame(() => {
      const parentWidth = marqueeContainer.offsetWidth || window.innerWidth;
      let totalWidth = firstTrack.scrollWidth;
      let clones = 0;

      // Append clones until combined scrollWidth >= 2x viewport width (or cap)
      while (totalWidth < parentWidth * 2 && clones < MAX_CLONES) {
        const clone = firstTrack.cloneNode(true);
        clone.classList.add("tools-track-clone");
        marqueeContainer.appendChild(clone);
        clones++;
        totalWidth = marqueeContainer.scrollWidth;
      }

      // If no clone appended (already large enough) ensure at least 1 clone to support smooth loop
      if (clones === 0) {
        const clone = firstTrack.cloneNode(true);
        clone.classList.add("tools-track-clone");
        marqueeContainer.appendChild(clone);
        clones = 1;
        totalWidth = marqueeContainer.scrollWidth;
      }

      // Animation state
      let x = 0;
      let lastFrame = performance.now();
      const speedPxPerSec = Math.max(30, parentWidth / 3); // adaptive base speed (px/sec)
      let resetThreshold = totalWidth / 2; // when to reset x to 0

      // RAF loop using transform on marqueeContainer
      let running = true;
      function step(now) {
        const delta = (now - lastFrame) / 1000;
        lastFrame = now;
        if (running) {
          x += speedPxPerSec * delta;
          if (x >= resetThreshold) x = 0;
          marqueeContainer.style.transform = `translateX(${-x}px)`;
        }
        requestAnimationFrame(step);
      }

      // Pause on hover (desktop)
      marqueeContainer.addEventListener("mouseenter", () => { running = false; });
      marqueeContainer.addEventListener("mouseleave", () => { running = true; });

      // Reset animation on resize (debounced)
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        marqueeContainer.style.transform = `translateX(0px)`;
        resizeTimer = setTimeout(() => {
          // recompute sizes
          const newParentWidth = marqueeContainer.offsetWidth || window.innerWidth;
          totalWidth = marqueeContainer.scrollWidth;
          resetThreshold = totalWidth / 2;
          x = 0;
        }, 150);
      });

      // Start loop
      requestAnimationFrame(step);
    });
  })();

  /* ===== Video autoplay fallback (force muted play on tricky browsers) ===== */
  (function initHeroVideo() {
    const heroVideo = document.getElementById("heroVideo") || document.querySelector("#hero video");
    if (!heroVideo) return;
    // attempt to play; if blocked, ensure muted and try again
    heroVideo.play().catch(() => {
      try {
        heroVideo.muted = true;
        heroVideo.play().catch(() => {
          // some browsers don't allow autoplay — ignore silently
        });
      } catch (e) { /* ignore */ }
    });
  })();

}); // end DOMContentLoaded
