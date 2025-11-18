// src/pages/Portfolio.jsx
import '../styles/global.css';
import '../styles/portfolio.css';
import galleryBg from '../assets/gallery.avif'; // ← Your background image

export default function Portfolio() {
  const works = [
    { title: "Taj Hotels Campaign 2024", category: "Branding • Photography" },
    { title: "Luxury Brand Identity", category: "Brand Design" },
    { title: "Minimal Web Experience", category: "UI/UX • Web" },
    { title: "Fashion Editorial", category: "Photography • Creative Direction" },
    { title: "Corporate Rebranding", category: "Strategy • Identity" },
    { title: "Digital Art Series", category: "Visual Art • Motion" }
  ];

  return (
    <section 
      className="portfolio-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(0,0,0,0.75)),
          url(${galleryBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="portfolio-overlay" />

      <div className="container">
        <h2 className="section-title">
          Gallery
        </h2>

        <div className="portfolio-grid">
          {works.map((work, i) => (
            <div className="portfolio-card" key={i}>
              <div className="img-placeholder">
                {/* Optional: Add real images later */}
                <div className="placeholder-overlay">
                  <span className="coming-soon">Coming Soon</span>
                </div>
              </div>
              <h3 className="work-title">{work.title}</h3>
              <p className="portfolio-category">{work.category}</p>
              <div className="golden-line"></div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Want to see the full collection?</p>
          <a href="/contact" className="btn-gold">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}