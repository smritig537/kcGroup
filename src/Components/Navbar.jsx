// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/global.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Welcome", path: "/welcome" },
  { name: "Introduction", path: "/about" },
  { name: "Gallery", path: "/portfolio" },
  { name: "Vision & Mission", path: "/vision-mission" },
  { name: "Business Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`navbar ${mobileOpen ? "mobile-menu-open" : ""}`}>
      <div className="container nav-inner">
        {/* Logo + Name */}
        <Link to="/" className="logo-wrapper">
          <img src={logo} alt="Khushbu Chauhan" className="navbar-logo" />
          <h5 className="logo-text">Khushbu Chauhan</h5>
        </Link>

        {/* Desktop Links */}
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

        {/* Mobile Menu Button - Gold Icon */}
        <button
          className="mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={32} color="#e5d669ff" strokeWidth={2.5} />
          ) : (
            <Menu size={32} color="#0a0901ff" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Dropdown Mobile Menu - Slides Down Inside Navbar */}
      <div className={`mobile-dropdown ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-dropdown-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}