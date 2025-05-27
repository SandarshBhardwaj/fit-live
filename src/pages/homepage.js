// src/pages/homepage.js
import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { heroHTML } from './heroSection.js';
import { renderServicesSection } from './servicesSection.js';
import { testimonialsHTML, setupTestimonialSlider } from './testimonialsSection.js';
import { loadAboutPage } from './about.js';
import { loadClassesPage } from './classes.js';
import { loadJournalPage } from './journal.js'; 
import { loadNewsletterPage } from './newsletter.js';

export function loadHomepage() {
  const mainHTML = `
    ${heroHTML}
    ${renderServicesSection()}
    ${testimonialsHTML}
  `;

  renderLayout(headerHTML, mainHTML, footerHTML);
  setupLinkHandlers();
  setupTestimonialSlider();
}

function setupLinkHandlers() {
  // Footer About Link
  const footerAboutLink = document.getElementById("about-link-footer");
  if (footerAboutLink) {
    footerAboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadAboutPage();
    });
  }

  // Header Links
  const links = {
    about: document.getElementById("about-link"),
    classes: document.getElementById("classes-link"),
    journal: document.getElementById("journal-link"), 
    newsletter: document.getElementById("newsletter-link")
  };

  // Generic link handler
  const handleLinkClick = (page, loader) => {
    if (page) {
      page.addEventListener("click", (e) => {
        e.preventDefault();
        loader();
      });
    }
  };

  // Set up all links
  handleLinkClick(links.about, loadAboutPage);
  handleLinkClick(links.classes, loadClassesPage);
  handleLinkClick(links.journal, loadJournalPage); 
  handleLinkClick(links.newsletter, loadNewsletterPage);

  // Logo handler
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => window.location.reload());
  }
}