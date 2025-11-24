// src/pages/Services.jsx
import '../styles/global.css';
import '../styles/services.css';
import visionBg from '../assets/services.avif'; // ← Reusing your powerful image
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    "CA & Taxation",
    "Legal Services",
    "Financial Advisory",
    "Estate Development",
    "Film Production",
    "Real Estate Development",
    "Luxury Travel & Visa",
    "Celebrity Management",
    "Digital Media & PR",
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
          Business Services
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

       
      </div>
    </section>
  );
}