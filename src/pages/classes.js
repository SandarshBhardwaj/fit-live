// src/pages/Classes.js
import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { loadAboutPage } from './about.js';

export function loadClassesPage() {
  const mainHTML = `
    <section class="classes-container">
      <div class="section-divider-top"></div>

      <div class="class-hero">
        <h2>Yoga & Movement Classes</h2>
        <p class="hero-quote">"A holistic blend of traditional practices and modern movement science"</p>
      </div>

      <!-- Hand Balancing Section -->
      <div class="class-type alternate-left">
        <div class="class-content">
          <h3>Hand Balancing</h3>
          <p>Combining arm balancing techniques from yoga with modern movement science:</p>
          <ul>
            <li>Body awareness development</li>
            <li>Coordinated movement patterns</li>
            <li>Progressive skill building</li>
            <li>Injury prevention techniques</li>
            <li>Strength conditioning</li>
          </ul>
        </div>
        <div class="class-visual">
          <div class="quote-mark">“</div>
          <div class="image-placeholder"></div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Elemental Flow Section -->
      <div class="class-type alternate-right">
        <div class="class-visual">
          <div class="quote-mark">”</div>
          <div class="image-placeholder"></div>
        </div>
        <div class="class-content">
          <h3>Elemental Flow</h3>
          <p>Grounding practices connecting movement to natural elements:</p>
          <div class="element-grid">
            <div class="element">Earth - Stability & Grounding</div>
            <div class="element">Water - Fluidity & Adaptability</div>
            <div class="element">Air - Expansion & Freedom</div>
            <div class="element">Fire - Transformation & Power</div>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Breathwork Section -->
      <div class="class-type alternate-left">
        <div class="class-content">
          <h3>Breathwork Fundamentals</h3>
          <p>Essential techniques for mindful breathing:</p>
          <ul>
            <li>Pranayama foundations</li>
            <li>Stress reduction methods</li>
            <li>Energy channeling</li>
            <li>Posture-breath coordination</li>
          </ul>
        </div>
        <div class="class-visual">
          <div class="quote-mark">“</div>
          <div class="image-placeholder"></div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Asana Practice Section -->
      <div class="class-type alternate-right">
        <div class="class-visual">
          <div class="quote-mark">”</div>
          <div class="image-placeholder"></div>
        </div>
        <div class="class-content">
          <h3>Advanced Asana Practice</h3>
          <p>Deepen your postural understanding:</p>
          <ul>
            <li>Alignment precision</li>
            <li>Sequencing strategies</li>
            <li>Prop utilization</li>
            <li>Transitional movements</li>
          </ul>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Weekly Schedule -->
      <div class="class-schedule">
        <h2>Weekly Classes</h2>
        ${generateClassSchedule()}
      </div>

       <!-- Registration Form -->
      <form class="coaching-form">
        <h2>Private Coaching Registration</h2>
        
        <div class="form-column">
          <div class="input-group">
            <label>First Name</label>
            <input type="text" required>
          </div>
          <div class="input-group">
            <label>Last Name</label>
            <input type="text" required>
          </div>
        </div>

        <div class="input-group">
          <label>Email <span class="required">*</span></label>
          <input type="email" required>
        </div>

        <div class="form-column">
          <div class="input-group">
            <label>Country Code</label>
            <select>
              <option>IN +91</option>
              <!-- Add more country codes -->
            </select>
          </div>
          <div class="input-group">
            <label>Phone Number</label>
            <input type="tel" required>
          </div>
        </div>

        <div class="input-group">
          <label>Country of Residence</label>
          <input type="text" required>
        </div>

        <div class="input-group">
          <label>Address</label>
          <textarea rows="3"></textarea>
        </div>

        <div class="input-group">
          <label>What is your yoga background, and what do you want to gain from the sessions? <span class="required">*</span></label>
          <textarea rows="5" required></textarea>
        </div>

        <div class="input-group">
          <label>Budget/session (in GBP)</label>
          <input type="number" min="0" step="10" required>
        </div>

        <button type="submit" class="form-submit">Submit Application</button>
      </form>
    </section>
  `;

  renderLayout(headerHTML, mainHTML, footerHTML);
  setupLinkHandlers();
}

function generateClassSchedule() {
  return `
    <div class="schedule-grid">
      ${generateClassItem("Monday", "Yin Yoga", "6:30–7:30 PM", "Online via Zoom")}
      ${generateClassItem("Tuesday", "Yoga Flow", "6:30–7:30 PM", "The Movement Studio")}
      ${generateClassItem("Thursday", "Yoga Flow", "6:30–7:30 PM", "Online via Zoom")}
    </div>
  `;
}

function generateClassItem(day, type, time, location) {
  return `
    <div class="class-card">
      <h4>${day}</h4>
      <p class="class-type">${type}</p>
      <p class="class-time">${time}</p>
      <p class="class-location">${location}</p>
    </div>
  `;
}


function setupLinkHandlers() {
  // Handle nav link clicks
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('href').substring(1);
      if(page === 'about') loadAboutPage();
      if(page === 'classes') loadClassesPage();
    });
  });

  // Set active class
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('active');
  });
  const classesLink = document.querySelector('a[href="#classes"]');
  if (classesLink) classesLink.classList.add('active');

  // Logo handler
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => window.location.reload());
  }
}