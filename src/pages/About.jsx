import React from 'react';
import { skillsData } from '../data/skills';
import { educationData } from '../data/education';

export default function About() {
  return (
    <div className="about-page">
      <h2>About <span className="highlight">Me</span></h2>
      
      <div className="content-block" style={{ marginBottom: '2.5rem' }}>
        <p>
          I am a Computer Science undergraduate at the National Institute of Technology, Warangal. 
          My primary areas of interest lie in full-stack web development, backend engineering, and big data processing.
        </p>
      </div>

      <h2>Work <span className="highlight">Experience</span></h2>
      <div className="info-card" style={{ marginBottom: '2.5rem' }}>
        <span className="badge">Internship</span>
        <h3>Data Science / BI Intern — Angel One Ltd</h3>
        <p className="metric"><strong>Impact:</strong> Architected Databricks SQL models & trained Genie LLM models for automated natural language BI queries.</p>
        <p>Built end-to-end data pipelines for user acquisition funnels and client revenue bucketization to drive business retention decisions.</p>
      </div>

      <h2>Technical <span className="highlight">Skills</span></h2>
      <div className="grid-layout" style={{ marginBottom: '2.5rem' }}>
        {skillsData.map((skillGroup) => (
          <div key={skillGroup.id} className="info-card">
            <h3>{skillGroup.category}</h3>
            <ul>
              {skillGroup.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Education <span className="highlight">Background</span></h2>
      <div className="grid-layout">
        {educationData.map((edu) => (
          <div key={edu.id} className="info-card">
            <span className="badge">{edu.period}</span>
            <h3>{edu.institution}</h3>
            <p><strong>{edu.degree}</strong></p>
            <p className="metric">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}