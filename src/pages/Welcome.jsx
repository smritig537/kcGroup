// src/pages/Welcome.jsx
import '../styles/global.css';
import '../styles/welcome.css';
import welcomeBg from '../assets/welcome .avif'; // ← Your background image

export default function Welcome() {
  return (
    <section 
      className="welcome-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.65)),
          url(${welcomeBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="welcome-overlay" />

      <div className="container">
        <div className="welcome-content">
          <h2 className="section-title">
            Welcome
          </h2>

          <p className="welcome-text">
            You’ve found a space dedicated to timeless design,<br />
            thoughtful creativity, and meaningful collaboration.
            <br /><br />
            Take your time. Explore the work.<br />
            <span className="gold-highlight">
              Let’s create something beautiful together.
            </span>
          </p>

          <div className="welcome-signature">
            <span>— Khushbu Chauhan</span>
            <div className="golden-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}