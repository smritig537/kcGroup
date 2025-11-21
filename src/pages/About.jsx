// src/pages/About.jsx
import '../styles/global.css';
import '../styles/about.css';
import aboutBg from '../assets/kc2.jpeg';
import aboutSideImg from '../assets/kc1.jpeg'; // ← Add a side portrait/image

export default function About() {
  return (
    <section 
      className="about-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.65)),
          url(${aboutBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="about-bg-overlay" />

      <div className="container about-flex">
        {/* Left Image */}
        <div className="about-image-wrapper">
          <img 
            src={aboutSideImg} 
            alt="Khushbu Chauhan"
            className="about-side-image"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="section-title">
            Introduction <br />
            <span className="gold-text">Khushbu Chauhan</span>
          </h2>

          <div className="about-text">
            <p>
              With over <strong>8 years</strong> in luxury branding and creative direction, 
              I help visionary brands and individuals create elegant, authentic, 
              and enduring identities.
            </p>

            <p>
              From crafting iconic campaigns to shaping minimalist digital experiences 
              for global fashion houses — every project is guided by intention, sophistication, 
              and timeless elegance.
            </p>

            <p className="quote">"My work. My voice. My story."</p>
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
