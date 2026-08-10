import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, techStack, image }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="info-card project-card">
      <img src={image} alt={`${title} preview`} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>

      {isExpanded && (
        <div className="tech-stack">
          <strong>Tech Stack:</strong> {techStack.join(', ')}
        </div>
      )}

      <div className="card-actions">
        <button 
          className="text-link-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Hide Tech ▲' : 'Quick View Tech ▼'}
        </button>

        <Link to={`/projects/${id}`} className="btn-primary">
          Full Details
        </Link>
      </div>
    </article>
  );
}