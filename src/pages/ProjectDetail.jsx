import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Project Not Found</h2>
        <p>The requested project ID "{projectId}" does not exist.</p>
        <Link to="/projects" className="btn-primary" style={{ marginTop: '1rem' }}>
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Link to="/projects" className="text-link" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to All Projects
      </Link>
      
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="detail-banner" />

      <div className="info-card" style={{ marginTop: '1.5rem' }}>
        <h3>Project Overview</h3>
        <p>{project.fullDetails}</p>

        <h3 style={{ marginTop: '1.5rem' }}>Technologies Used</h3>
        <div className="tech-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className="badge" style={{ marginRight: '0.5rem' }}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Source Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}