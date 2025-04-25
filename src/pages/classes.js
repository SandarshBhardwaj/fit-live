import { renderLayout } from '../layout/renderLayout.js';
import { headerHTML } from '../layout/header.js';
import { footerHTML } from '../layout/footer.js';
import { loadAboutPage } from './About.js';

export function loadClassesPage() {
  const headerHTML = `
    <h1>YOGA FIT</h1>
    
  `;

  const mainHTML = `
    <section class="classes-intro">
      <h2>Weekly Classes</h2>
      <p>
        Each class is a journey of movement, breath, and presence. Whether you’re new to yoga or returning to the mat, all are welcome.
        Expect a mix of breath-led movement, stillness, and grounding.
      </p>
    </section>

    <section class="class-details">
      <div class="class-item">
        <h3>Monday</h3>
        <p><strong>Yin Yoga</strong> – 6:30–7:30 PM (online via Zoom)</p>
      </div>
      <div class="class-item">
        <h3>Tuesday</h3>
        <p><strong>Yoga Flow</strong> – 6:30–7:30 PM @ The Movement Studio</p>
      </div>
      <div class="class-item">
        <h3>Thursday</h3>
        <p><strong>Yoga Flow</strong> – 6:30–7:30 PM (online via Zoom)</p>
      </div>
    </section>

    <section class="classes-note">
      <p>
        Please bring your own mat if attending in person. Online classes require registration.
        Feel free to contact me if you’re unsure which class is right for you.
      </p>
    </section>
  `;

  const footerHTML = `
    <ul>
      <li><a href="#" id="about-link-footer">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Follow</a></li>
    </ul>
    <p>YOGA FIT</p>
  `;

  renderLayout(headerHTML, mainHTML, footerHTML);
  setupLinkHandlers();
}
