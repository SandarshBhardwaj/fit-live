// src/pages/Journal.js
import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { loadAboutPage } from './about.js';
import { loadClassesPage } from './classes.js';
import { loadNewsletterPage } from './newsletter.js';

export function loadJournalPage() {
  const mainHTML = `
    <section class="classes-container">
      <div class="section-divider-top"></div>

      <div class="class-hero">
        <h2>Wellness Journal</h2>
        <p class="hero-quote">"Mindful living through movement and awareness"</p>
      </div>

      <!-- Upcoming Workshops -->
      <div class="class-type alternate-left">
        <div class="class-content">
          <h3>Upcoming Events</h3>
          <div class="event-grid">
            <div class="event-card">
              <h4>Full Moon Flow</h4>
              <p>June 21 | 6:30 PM @ Beach Studio</p>
              <button class="event-cta">Reserve Spot</button>
            </div>
            <div class="event-card">
              <h4>Breathwork Masterclass</h4>
              <p>July 5 | 5:00 PM (Online)</p>
              <button class="event-cta">Join Session</button>
            </div>
          </div>
        </div>
        <div class="class-visual">
          <div class="quote-mark">“</div>
          <div class="image-placeholder"></div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Client Stories -->
      <div class="class-type alternate-right">
        <div class="class-visual">
          <div class="quote-mark">”</div>
          <div class="image-placeholder"></div>
        </div>
        <div class="class-content">
          <h3>Success Stories</h3>
          <div class="testimonial-grid">
            <div class="testimonial">
              <blockquote>"After 6 months of practice, my back pain has completely disappeared!"</blockquote>
              <cite>- Sarah, 34</cite>
            </div>
            <div class="testimonial">
              <blockquote>"The mindfulness techniques changed how I handle stress at work."</blockquote>
              <cite>- Michael, 42</cite>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Wellness Guides -->
      <div class="class-type alternate-left">
        <div class="class-content">
          <h3>Seasonal Guides</h3>
          <div class="guide-grid">
            <div class="guide-card">
              <h4>Summer Detox</h4>
              <p>7-day yoga & nutrition plan</p>
            </div>
            <div class="guide-card">
              <h4>Winter Immunity</h4>
              <p>Boosting practices for cold months</p>
            </div>
          </div>
        </div>
        <div class="class-visual">
          <div class="quote-mark">“</div>
          <div class="image-placeholder"></div>
        </div>
      </div>
    </section>
  `;

  renderLayout(headerHTML, mainHTML, footerHTML);
  setupJournalLinkHandlers();
}

function setupJournalLinkHandlers() {
  // Set active nav link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('active');
  });
  const journalLink = document.querySelector('a[href="#journal"]');
  if (journalLink) journalLink.classList.add('active');

  // Logo handler
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => window.location.reload());
  }

  // Navigation handler
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('href').substring(1);
      const app = document.getElementById("main-content");
      app.innerHTML = '';
      
      if(page === 'about') loadAboutPage();
      if(page === 'classes') loadClassesPage();
      if(page === 'journal') loadJournalPage();
      if(page === 'newsletter') loadNewsletterPage();
    });
  });
}