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
    With over <strong>6 years</strong> of experience in strategic consultancy and brand
    transformation, I help businesses, leaders, and emerging ventures discover their true
    potential and build identities that are clear, impactful, and future-ready.
  </p>

  <p>
    My work spans communication strategy, digital presence, and creative
    direction — blending analytical precision with refined aesthetics. Every project is
    guided by insight, intention, and a commitment to delivering solutions that elevate
    brands, strengthen market positioning, and create lasting value.
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
