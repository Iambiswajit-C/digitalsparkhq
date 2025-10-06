<section class="contact-section py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form action="https://formsubmit.co/info@digitalsparkhq.com" method="POST" class="p-4 border rounded-4 bg-white shadow-sm">
          <h4 class="fw-bold mb-4 border-bottom pb-2">Contact Info</h4>

          <div class="mb-3">
            <label for="name" class="form-label fw-semibold">Name *</label>
            <input type="text" id="name" name="name" class="form-control form-control-lg" required>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label fw-semibold">Email *</label>
            <input type="email" id="email" name="email" class="form-control form-control-lg" required>
          </div>

          <div class="mb-3">
            <label for="interest" class="form-label fw-semibold">You are interested in *</label>
            <select id="interest" name="interest" class="form-select form-select-lg" required>
              <option value="">Click here to select...</option>
              <option value="Web Design">Web Design</option>
              <option value="SEO">SEO</option>
              <option value="Social Media">Social Media</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Paid Marketing">Paid Marketing</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="message" class="form-label fw-semibold">Please describe your business or message</label>
            <textarea id="message" name="message" class="form-control form-control-lg" rows="7" placeholder="Type your message here..." required></textarea>
          </div>

          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">

          <div class="text-center">
            <button type="submit" class="btn btn-dark btn-lg px-5">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
