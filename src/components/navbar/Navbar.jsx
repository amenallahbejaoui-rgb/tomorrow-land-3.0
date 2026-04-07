import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "./645211211_1579885129794681_9013818130219003717_n.jpg";

const REGISTRATION_URL = "https://forms.gle/moLtMvPg1eEaPDhU7";

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-tommorowland-container' },
  { label: 'Ambassadors', href: '#ambassadors' },
  { label: 'Planning', href: '#planning' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Team', href: '#concept' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      {/* Logo */}
      <a className="navbar__logo" href="#home" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Tomorrow Land" className="navbar__logo-icon" />
      </a>

      {/* Nav Links */}
      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          </li>
        ))}
        <li className="navbar__links-register">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </a>
        </li>
      </ul>

      {/* Register Button */}
      <a
        className="navbar__register"
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
      >
        Register Now
      </a>

      {/* Mobile Hamburger */}
      <button
        className="navbar__hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
