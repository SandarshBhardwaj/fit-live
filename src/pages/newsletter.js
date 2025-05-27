// src/pages/Newsletter.js
import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { loadAboutPage } from './about.js';
import { loadClassesPage } from './classes.js';
import { loadJournalPage } from './journal.js';

export function loadNewsletterPage() {
  const mainHTML = `
    <section class="classes-container">
      <div class="section-divider-top"></div>

      <div class="class-hero">
        <h2>Community Forum</h2>
        <p class="hero-quote">"Grow together in our supportive wellness community"</p>
      </div>

      <!-- Q&A Section -->
      <div class="class-type alternate-left">
        <div class="class-content">
          <h3>Q&A Hub</h3>
          <div class="forum-grid">
            <div class="forum-card">
              <h4>Beginner Modifications</h4>
              <p>"What are good alternatives for Crow Pose?"</p>
              <div class="forum-meta">
                <span>Posted by Sarah • 2d ago</span>
                <button class="forum-reply">Reply</button>
              </div>
            </div>
            <div class="forum-card">
              <h4>Breathwork Timing</h4>
              <p>"Best time of day for pranayama practice?"</p>
              <div class="forum-meta">
                <span>Posted by Mike • 5h ago</span>
                <button class="forum-reply">Reply</button>
              </div>
            </div>
          </div>
        </div>
        <div class="class-visual">
          <div class="quote-mark">“</div>
          <div class="image-placeholder forum-image"></div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Peer Support -->
      <div class="class-type alternate-right">
        <div class="class-visual">
          <div class="quote-mark">”</div>
          <div class="image-placeholder group-image"></div>
        </div>
        <div class="class-content">
          <h3>Support Groups</h3>
          <div class="group-grid">
            <div class="group-card">
              <h4>Parent Wellness</h4>
              <p>Thursdays 8PM GMT</p>
              <button class="group-join">Join Circle</button>
            </div>
            <div class="group-card">
              <h4>Stress Management</h4>
              <p>Mondays 7PM GMT</p>
              <button class="group-join">Join Circle</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Live Chat -->
      <div class="class-type alternate-left">
        <div class="class-content">
          <h3>Live Instructor Chat</h3>
          <div class="chat-container">
            <div class="chat-messages">
              <div class="message instructor">
                <p>Welcome! Ask me anything about today's practice 🧘</p>
                <span>10:00 AM</span>
              </div>
            </div>
            <div class="chat-input">
              <input type="text" placeholder="Type your question...">
              <button class="chat-send">Send</button>
            </div>
          </div>
        </div>
        <div class="class-visual">
          <div class="quote-mark">“</div>
          <div class="image-placeholder chat-image"></div>
        </div>
      </div>
    </section>
  `;

  renderLayout(headerHTML, mainHTML, footerHTML);
  setupNewsletterLinkHandlers();
}

function setupNewsletterLinkHandlers() {
  // Set active nav link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('active');
  });
  const newsletterLink = document.querySelector('a[href="#newsletter"]');
  if (newsletterLink) newsletterLink.classList.add('active');

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