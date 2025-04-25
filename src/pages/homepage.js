import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { loadAboutPage } from './About.js';
import { loadClassesPage } from './classes.js';

export function loadHomepage() {
  const mainHTML = `
    <section class="intro">
      <p class="tagline">Discover a practice that makes you</p>
      <h2>
        STRONGER CALMER PRESENT<br />
        BALANCED FOCUSED PATIENT<br />
        <span class="spaced">S P A C I O U S</span>
      </h2>
      <button class="cta">CLASS INFORMATION</button>
    </section>

    <section class="gallery">
      <div class="gallery-item">
        <img src="public/images/woman-practicing-yoga.png" alt="Yoga pose" />
        <p><strong>FIND</strong></p>
      </div>
      <div class="gallery-item">
        <img src="public/images/yoga-mandala.png" alt="Yoga pose" />
        <p><strong>YOUR</strong></p>
      </div>
      <div class="gallery-item">
        <img src="public/images/yoga-expert-icon-1.png" alt="Yoga pose" />
        <p><strong>FLOW</strong></p>
      </div>
    </section>

    <section class="text-block">
      <p>Yoga is a practice to support you through every part of life.</p>
      <p>
        Establishing connection between the breath and body can teach us how to move through
        the changes and challenges we will inevitably encounter. Building strength and flexibility
        both mentally and physically.
      </p>
      <p>I look forward to meeting you on the mat.</p>
    </section>
  `;

  renderLayout(headerHTML, mainHTML, footerHTML);
  setupLinkHandlers();
}

function setupLinkHandlers() {
  const footerAboutLink = document.getElementById("about-link-footer");
  if (footerAboutLink) {
    footerAboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadAboutPage();
    });
  }

  const headerAboutLink = document.getElementById("about-link");
  if (headerAboutLink) {
    headerAboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadAboutPage();
    });
  }

  const classesLink = document.getElementById("classes-link");
  if (classesLink) {
    classesLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadClassesPage();
    });
  }
}
