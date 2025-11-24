// src/pages/Welcome.jsx
import '../styles/global.css';
import '../styles/welcome.css';
import welcomeBg from '../assets/kc2.jpeg'; 
import welcomeSideImg from '../assets/kc6.jpeg'; // ← Add a new image

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

      <div className="container welcome-flex">
        {/* Left Side Content */}
        <div className="welcome-content">
          <h2 className="section-title">Welcome</h2>

         <p className="welcome-text">
  Led by our visionary <strong>Managing Director, Ms. Khushbu Chauhan</strong>, we
  bring a legacy of multi-industry excellence — spanning Finance, Real Estate,
  Entertainment, Travel, Media, and Strategic Consulting.<br /><br />
  With strategic leadership and a growth-driven mindset, we continue to expand
  horizons, build powerful collaborations, and create long-lasting impact
  through meaningful partnerships.<br /><br />
  <span className="gold-highlight">
    Together, let’s shape opportunities that inspire and elevate.
  </span>
</p>


          <div className="welcome-signature">
            <span>— Khushbu Chauhan</span>
            <div className="golden-line"></div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="welcome-image-wrapper">
          <img 
            src={welcomeSideImg} 
            alt="Welcome" 
            className="welcome-side-image"
          />
        </div>
      </div>
    </section>
  );
}
