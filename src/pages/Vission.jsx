// src/pages/VisionMission.jsx
import '../styles/global.css';
import '../styles/vision.css';
import visionBg from '../assets/vision.webp'; // ← Your background image

export default function VisionMission() {
  return (
    <section 
      className="vision-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.7)),
          url(${visionBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="vision-overlay" />

      <div className="container">
        <div className="vision-content">
          <h2 className="section-title">
            Vision & <span className="gold-text">Mission</span>
          </h2>

          <div className="vision-grid">
            <div className="vision-card">
              <h3 className="vision-subtitle">Vision</h3>
              <p className="vision-text">
                To create work that is not just seen,<br />
                <span className="highlight">but felt — for generations.</span>
              </p>
            </div>

            <div className="vision-card">
              <h3 className="vision-subtitle">Mission</h3>
              <p className="vision-text">
                Blend art and strategy to craft identities that are<br />
                <span className="highlight">authentic, elegant, and enduring.</span>
              </p>
            </div>
          </div>

          <div className="vision-signature">
            <span>— Khushbu Chauhan</span>
            <div className="golden-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}