---
layout: default
title: "Home"
---

<!-- Hero Section -->
<section id="hero" class="position-relative">
  <video autoplay muted loop class="w-100 vh-100 object-fit-cover">
    <source src="{{ '/assets/videos/hero.mp4' | relative_url }}" type="video/mp4">
  </video>
  <div class="scroll-down text-center position-absolute bottom-0 start-50 translate-middle-x mb-4">
    <a href="#services" class="text-white"><i class="fa fa-angle-down fa-2x"></i></a>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="py-5">
  <div class="container text-center">
    <h2 class="mb-4">Our Services</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <img src="/assets/images/web-design.jpg" class="img-fluid mb-2">
        <h5>Web Design</h5>
        <p>Beautiful and responsive websites tailored for your business.</p>
        <a href="/services/web-design/" class="btn btn-primary">Details</a>
      </div>
      <div class="col-md-4">
        <img src="/assets/images/seo.jpg" class="img-fluid mb-2">
        <h5>SEO</h5>
        <p>Rank higher and get more traffic with our SEO strategies.</p>
        <a href="/services/seo/" class="btn btn-primary">Details</a>
      </div>
      <div class="col-md-4">
        <img src="/assets/images/graphic-design.jpg" class="img-fluid mb-2">
        <h5>Graphic Design</h5>
        <p>Creative designs to bring your brand to life.</p>
        <a href="/services/graphic-design/" class="btn btn-primary">Details</a>
      </div>
      <div class="col-md-4">
        <img src="/assets/images/social-media.jpg" class="img-fluid mb-2">
        <h5>Social Media</h5>
        <p>Engaging campaigns to grow your audience and brand awareness.</p>
        <a href="/services/social-media/" class="btn btn-primary">Details</a>
      </div>
      <div class="col-md-4">
        <img src="/assets/images/paid-marketing.jpg" class="img-fluid mb-2">
        <h5>Paid Marketing</h5>
        <p>Maximize ROI with smart ad strategies.</p>
        <a href="/services/paid-marketing/" class="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
</section>
