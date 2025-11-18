// src/pages/About.jsx
import '../styles/global.css';
import '../styles/about.css';
import aboutBg from '../assets/image.avif'; // ← Your background image

export default function About() {
  return (
    <section className="about-section">
      {/* Dark overlay + background image */}
      <div className="about-bg-overlay" />

      <div className="container">
        <div className="about-content">
          <h2 className="section-title">
            Introduction <span className="gold-text">Khushbu Chauhan</span>
          </h2>

          <div className="about-text">
            <p>
              With over <strong>8 years</strong> in luxury branding and creative direction, 
              I help visionary brands and individuals create elegant, authentic, and enduring identities.
            </p>
            <p>
              From crafting iconic campaigns  to designing minimalist 
              digital experiences for global fashion houses — every project is infused with intention, 
              sophistication, and timeless elegance.
            </p>
            <p className="quote">
              "My work. My voice. My story"
            </p>
          </div>

          <div className="about-signature">
            <span>— Khushbu Chauhan</span>
            <div className="golden-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}