import React from 'react';
import { projectsData } from '../data/projects';
import ProjectList from '../components/ProjectList';

export default function Projects() {
  return (
    <div>
      <h2>Featured <span className="highlight">Projects</span></h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        A selection of my technical work in full-stack web development and data engineering.
      </p>

      {/* Prop Drilling Level 1: Projects -> ProjectList */}
      <ProjectList projects={projectsData} />
    </div>
  );
}
