// src/pages/Services.jsx
import '../styles/global.css';
import '../styles/services.css';
import visionBg from '../assets/services.avif'; // ← Reusing your powerful image

export default function Services() {
  const services = [
    "Brand Identity Design",
    "Creative Direction",
    "UI/UX & Web Design",
    "Luxury Photography",
    "Digital Strategy",
    "Visual Storytelling"
  ];

  return (
    <section 
      className="services-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(0,0,0,0.75)),
          url(${visionBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="services-overlay" />

      <div className="container">
        <h2 className="section-title">
          Services
        </h2>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="card-inner">
                <h3 className="service-title">{service}</h3>
                <div className="golden-accent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Ready to elevate your brand?</p>
          <a href="/contact" className="btn-gold">Begin Your Journey</a>
        </div>
      </div>
    </section>
  );
}