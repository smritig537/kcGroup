// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'

import '../styles/global.css'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Welcome', path: '/welcome' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Vision & Mission', path: '/vision-mission' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* === LUXURY LOGO === */}
        <Link to="/" className="logo-with-image">
          <img 
            src={logo}
            alt="Khushbu Chauhan" 
            className="navbar-logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div 
          className="mobile-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-logo-center">
            <img src={logo} alt="Khushbu Chauhan" className="mobile-logo" />
          </Link>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}