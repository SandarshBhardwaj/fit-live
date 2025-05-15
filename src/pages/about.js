// src/pages/About.js
export function loadAboutPage() {
  const app = document.getElementById("main-content");

  app.innerHTML = `
    <section class="about-section">
      <h1>About Me</h1>

      <div class="about-intro">
        <p>Hi, I’m Ruki — a certified yoga teacher, intuitive tarot guide, and counselor dedicated to helping people reconnect with themselves through movement, stillness, and energy.</p>
      </div>

      <div class="about-origin">
        <h2>How It All Started</h2>
        <p>My journey began over a decade ago during a time of deep personal healing. Yoga offered me a path not just to physical strength, but to emotional balance and spiritual awakening. What started as a self-care ritual turned into a lifelong calling.</p>
      </div>

      <div class="about-evolution">
        <h2>The Journey So Far</h2>
        <p>As my practice evolved, I felt called to explore deeper forms of healing. I became a certified tarot practitioner and studied holistic counseling to guide others through life’s transitions. Today, I combine ancient movement, breath, and intuitive insight to support others in finding their own center.</p>
      </div>

      <div class="about-values">
        <h2>What I Believe In</h2>
        <p>My approach is rooted in compassion, authenticity, and inclusivity. Whether you join me for a class, a reading, or a one-on-one session, my goal is to hold space for your unique growth — with no judgment and no pressure to be anything but yourself.</p>
      </div>

      <div class="about-credentials">
        <h2>Certifications & Highlights</h2>
        <ul>
          <li>500-hour Yoga Alliance Certified</li>
          <li>Certified Intuitive Tarot Reader</li>
          <li>Trained in trauma-informed holistic counseling</li>
          <li>Featured in Yoga Journal (2024)</li>
        </ul>
      </div>

      <div class="about-personal-touch">
        <h2>A Little More About Me</h2>
        <p>Outside of my work, I love journaling by the sea, practicing breathwork at sunrise, and experimenting with Ayurvedic cooking. I believe life is a practice — and every day brings something new to learn or unlearn.</p>
      </div>

      <div class="about-cta">
        <h2>Let’s Connect</h2>
        <p>If my work resonates with you, I’d love to connect. Reach out, take a class, or simply say hello.</p>
      </div>
    </section>
  `;

  // Set active nav link to About
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('active');
  });
  const aboutLink = document.querySelector('a[href="#about"]');
  if (aboutLink) {
    aboutLink.classList.add('active');
  }

  // Add click event to logo to go back to homepage
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener('click', () => {
      window.location.reload();
    });
  }
}
