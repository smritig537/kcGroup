// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

import "../styles/global.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Introduction", path: "/about" },
  { name: "Welcome", path: "/welcome" },
  { name: "Gallery", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Vision & Mission", path: "/vision-mission" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="logo-with-image">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mobile-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <img src={logo} alt="Logo" className="mobile-logo" />

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
