import '../styles/global.css';
import '../styles/services.css';

export default function Services() {
  const services = [
    "Brand Identity Design", "Creative Direction", "UI/UX & Web Design",
    "Luxury Photography", "Digital Strategy", "Visual Storytelling"
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}