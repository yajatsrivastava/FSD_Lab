import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      {/* 1. Header Banner */}
      <div className="hero-banner-wrapper">
        <img 
          src="/banner.png" 
          alt="Minesweeper Banner" 
          className="hero-banner-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x250/2e7d32/ffffff?text=Minesweeper+Grid+Banner';
          }}
        />
      </div>

      {/* 2. Overlapping Circular Profile Picture */}
      <div className="profile-header-section">
        <div className="avatar-container">
          <img 
            src="/profile.jpeg" 
            alt="Yajat Srivastava" 
            className="hero-avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/160/cccccc/0f172a?text=Yajat';
            }}
          />
        </div>

        {/* 3. Main Title & Subtitle */}
        <div className="hero-text-details">
          <h1>Hi, I'm <span className="highlight">Yajat Srivastava</span></h1>
          <p className="sub-tagline">
            3rd Year B.Tech Student | Data Analyst | Business Analyst
          </p>
        </div>
      </div>

      {/* Quick Links / Content Below Header */}
      <div className="hero-bio-card info-card" style={{ marginTop: '2rem' }}>
        <h3>Welcome to my Portfolio</h3>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          Computer Science & Engineering undergraduate at NIT Warangal. Experienced in building full-stack web platforms, data pipelines, and natural language analytics dashboards.
        </p>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-primary btn-outline">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}