import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { heroHTML } from './heroSection.js';
import { renderServicesSection } from './servicesSection.js';
import { testimonialsHTML, setupTestimonialSlider } from './testimonialsSection.js';
import { loadAboutPage } from './about.js';
import { loadClassesPage } from './classes.js';

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
