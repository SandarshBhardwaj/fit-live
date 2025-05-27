import { loadHomepage } from './Homepage.js';
import { loadAboutPage } from './About.js';
import { loadClassesPage } from './classes.js';
import { loadJournalPage } from './journal.js';
export function setupLinkHandlers() {
  const homeLink = document.getElementById("home-link");
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadHomepage();
    });
  }

  const aboutLinks = document.querySelectorAll("#about-link, #about-link-footer");
  aboutLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      loadAboutPage();
    });
  });

  const classesLink = document.getElementById("classes-link");
  if (classesLink) {
    classesLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadClassesPage();
    });
  }
  const journalLink = document.getElementById(journal-link);
  if (journalLink) {
    journalLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadJournalPage();
    });
  }
  // Add more handlers if needed (e.g., Journal, 1-2-1, etc.)
}
