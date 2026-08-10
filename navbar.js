import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ isDark, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Side Effect: Event listener with memory leak cleanup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <div className="nav-brand">Yajat Srivastava</div>
      <button 
        className="mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}