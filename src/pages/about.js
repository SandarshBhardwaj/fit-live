export function loadAboutPage() {
  const app = document.getElementById("main-content");

  app.innerHTML = `
    <section class="about-section">
      <div class="about-hero">
        <h1 class="page-title">About</h1>
        <p class="page-subtitle">A Journey of Mind-Body Transformation</p>
      </div>

      <div class="content-container">
        <article class="content-card origin-card">
          <h2 class="section-title">Origins</h2>
          <p class="section-text">My path began through a profound personal exploration of movement and mindfulness. What started as a personal practice in a small urban studio gradually evolved into a deep commitment to holistic wellness. The initial spark came from...</p>
          <p class="hidden-text">...a transformative experience during a silent retreat in 2012. This awakening led me to pursue formal training in various healing modalities, always seeking to bridge ancient wisdom with modern understanding.</p>
          <button class="reveal-btn">Continue Reading →</button>
        </article>

        <article class="content-card evolution-grid">
          <h2 class="section-title">Evolution</h2>
          <div class="milestone-container">
            <div class="milestone">
              <h3>Advanced Certification</h3>
              <p>500-hour training in therapeutic yoga practices</p>
            </div>
            <div class="milestone">
              <h3>Holistic Integration</h3>
              <p>Combining ayurveda with modern movement science</p>
            </div>
            <div class="milestone">
              <h3>Community Impact</h3>
              <p>Developing accessible wellness programs</p>
            </div>
          </div>
        </article>

        <article class="content-card credentials-wrapper">
          <h2 class="section-title">Credentials</h2>
          <div class="credential-list">
            <div class="credential-item">
              <h3>Yoga Alliance Certified</h3>
              <p>RYT-500 with specialization in trauma-sensitive practice</p>
            </div>
            <div class="credential-item">
              <h3>Mind-Body Therapy</h3>
              <p>Certified in integrative somatic therapy techniques</p>
            </div>
          </div>
        </article>

        <article class="cta-container">
          <h2 class="section-title">Let's Grow Together</h2>
          <div class="cta-group">
            <div class="cta-box">
              <h3>Group Sessions</h3>
              <p>Explore our weekly mindfulness programs</p>
            </div>
            <div class="cta-box">
              <h3>Private Guidance</h3>
              <p>Personalized holistic coaching sessions</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;

  // Add border color via JS to ensure immediate update
  document.querySelectorAll('.content-card').forEach(card => {
    card.style.border = '2px solid #f3ddca';
    card.style.background = '#fff';
  });

  // Interactive Text Reveal
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const hiddenText = this.previousElementSibling;
      hiddenText.style.maxHeight = hiddenText.style.maxHeight ? 
        null : `${hiddenText.scrollHeight}px`;
      this.textContent = hiddenText.style.maxHeight ? 
        'Show Less ↑' : 'Continue Reading →';
    });
  });

  // Hover Elevation Effect
  document.querySelectorAll('.milestone, .cta-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-5px)';
      item.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
      item.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    });
  });

  
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('active');
  });
  const aboutLink = document.querySelector('a[href="#about"]');
  if (aboutLink) aboutLink.classList.add('active');

  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener('click', () => window.location.reload());
  }
}