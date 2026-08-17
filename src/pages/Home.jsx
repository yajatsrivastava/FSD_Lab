import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg from '../assets/hero.png';
import profileImg from '../assets/profile.jpeg';

export default function Home() {
  return (
    <div className="home-container">
      {/* Banner */}
      <div className="hero-banner-wrapper">
        <img 
          src={bannerImg} 
          alt="Minesweeper Banner" 
          className="hero-banner-img"
        />
      </div>

      {/* Profile Section */}
      <div className="profile-header-section">
        <div className="avatar-container">
          <img 
            src={profileImg} 
            alt="Yajat Srivastava" 
            className="hero-avatar"
          />
        </div>

        <div className="hero-text-details">
          <h1>Hi, I'm <span className="highlight">Yajat Srivastava</span></h1>
          <p className="sub-tagline">
            3rd Year B.Tech Student | Data Analyst | Business Analyst
          </p>
        </div>
      </div>

      {/* Bio Card */}
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