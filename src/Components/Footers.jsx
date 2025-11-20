import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Khushbu Chauhan</h3>
        <div style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          <p><Mail size={20} style={{ display: 'inline', marginRight: '8px' }} /> khushbu@example.com</p>
          <p><Phone size={20} style={{ display: 'inline', marginRight: '8px' }} /> +91 98765 43210</p>
          <p><MapPin size={20} style={{ display: 'inline', marginRight: '8px' }} /> Chennai, Tamil Nadu, India</p>
        </div>
        <div className="social-links">
          <a href="#"><Instagram /></a>
          <a href="#"><Linkedin /></a>
          <a href="#"><Twitter /></a>
        </div>
        <p style={{ marginTop: '3rem', opacity: 0.7 }}>
          © {new Date().getFullYear()} Khushbu Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}