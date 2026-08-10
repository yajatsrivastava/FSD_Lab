import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <div className="grid-layout">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}