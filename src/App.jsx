import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const LAUNCH_DATE = new Date('2025-12-01T00:00:00'); // Change this!

export default function App() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(formatDistanceToNow(LAUNCH_DATE, { addSuffix: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll email ${email} when we launch.`);
    setEmail('');
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>Khushbu Chauhan </h1>
        <p>We're building the future. Be the first to know when we launch.</p>
       

        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">
            <Mail size={20} />
            Notify Me
          </button>
        </form>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features-grid">
          {[
            { title: 'Blazing Fast', desc: 'Optimized for speed and performance.' },
            { title: 'Secure by Design', desc: 'Your data is encrypted and safe.' },
            { title: 'Scalable', desc: 'Built to grow with your needs.' },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{i + 1}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="GitHub"><Github /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </footer>
    </>
  );
}