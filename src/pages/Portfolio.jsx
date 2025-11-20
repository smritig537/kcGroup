import '../styles/global.css';
import '../styles/portfolio.css';
import galleryBg from '../assets/gallery.avif';

// Import your 5 images
import img1 from '../assets/kc1.jpeg';
import img2 from '../assets/kc2.jpeg';
import img3 from '../assets/Kc3.jpeg';
import img4 from '../assets/kc4.jpeg';
import img5 from '../assets/kc5.jpeg';

export default function Portfolio() {
  const works = [
    { image: img1, title: "Taj Hotels Campaign 2024" },
    { image: img2, title: "Luxury Brand Identity" },
    { image: img3, title: "Minimal Web Experience" },
    { image: img4, title: "Fashion Editorial" },
    { image: img5, title: "Corporate Rebranding" }
  ];

  return (
    <section
      className="portfolio-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(0,0,0,0.75)),
          url(${galleryBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="portfolio-overlay" />

      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div className="portfolio-grid">
          {works.map((work, i) => (
            <div className="portfolio-card" key={i}>
              <div className="portfolio-image-wrapper">
                <img src={work.image} alt={work.title} className="portfolio-image" />
              </div>

              {/* <h3 className="work-title">{work.title}</h3> */}
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
