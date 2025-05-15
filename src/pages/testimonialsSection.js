// testimonialsSection.js

export const testimonialsHTML = `
<section class="testimonials">
  <h2>What My Clients Say</h2>
  <div class="testimonial-slider">
    <div class="testimonial-slide active">
      <p>"Ruki's modified ashtanga was brilliant, a mixed level class with lots of variation and clear verbal cues."</p>
      <span>- Sarah-May Brown</span>
    </div>
    <div class="testimonial-slide">
      <p>"A truly transformative experience."</p>
      <span>- Client 2</span>
    </div>
    <div class="testimonial-slide">
      <p>"I feel more grounded and present than ever."</p>
      <span>- Client 3</span>
    </div>
    <div class="testimonial-slide">
      <p>"The best decision I made for my mental health."</p>
      <span>- Client 4</span>
    </div>
  </div>
  <button id="prevBtn" aria-label="Previous testimonial">❮</button>
  <button id="nextBtn" aria-label="Next testimonial">❯</button>
</section>
`;

export function setupTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);

  showSlide(current);
}
