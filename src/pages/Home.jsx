// src/pages/Home.jsx
import '../styles/global.css';
import '../styles/home.css';
import heroBg from '../assets/hero.avif'; // ← Works with .avif, .jpg, .webp, .png
import About from '../pages/About';
import Services from './Services';
import Vission from './Vission';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
export default function Home() {
  return (
    <>
        <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.6)),
          url(${heroBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Remove on mobile if performance issue
      }}
    >
      {/* Golden glow overlay */}
      <div className="hero-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 , padding:5}}>
        <h1>Khushbu Chauhan</h1>

        <p className="tagline">
          "My work. My voice. My story"
        </p>

        <p className="description" style={{}}>
          Turning ideas into distinctive identities that build trust, influence, and recognition.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          <Link to="/services" className="btn btn-primary">Business Services</Link>
        </div>

        <p className="trusted">
          Trusted by Taj Hotels • Fashion Houses • Global Leaders
        </p>
      </div>
    </section>
    <About/>
    <Welcome/>
    <Portfolio/>
    <Services/>
    <Vission/>
    
    
    </>

  );
}