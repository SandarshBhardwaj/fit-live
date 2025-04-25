// src/pages/About.js
export function loadAboutPage() {
  const app = document.getElementById("main-content");

  app.innerHTML = `
    
    <section class="about-section">
      <p>At Yoga Fit, we believe in a practice that strengthens the body and calms the mind.</p>
      <p>Our mission is to create a welcoming space for everyone to explore yoga in their own way.</p>
      <p>From beginners to advanced practitioners, our community thrives on openness, compassion, and growth.</p>
    </section>
    <footer>
      <ul>
        <li><a href="#" id="about-back">Back</a></li>
      </ul>
      <p>YOGA FIT</p>
    </footer>
  `;

  document.getElementById("about-back").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload(); // Reset back to home
  });
}
