import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '5rem', color: 'var(--accent-color)' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted)' }}>
        The route you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        Return to Home Page
      </Link>
    </div>
  );
}