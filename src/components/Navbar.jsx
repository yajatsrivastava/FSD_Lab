import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ isDark, toggleTheme }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <button 
        className="mobile-toggle"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle Navigation Menu"
      >
        ☰ Menu
      </button>

      <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
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