import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div>
      <h2>Contact <span className="highlight">Me</span></h2>
      
      <div className="contact-wrapper">
        <div className="info-card">
          <h3>Get in Touch</h3>
          <p style={{ marginBottom: '1rem' }}>
            Feel free to reach out for collaborations, software engineering opportunities, or general queries!
          </p>
          <p><strong>Email:</strong> yajatsrivastava@gmail.com</p>
          <p><strong>Location:</strong> NIT Warangal, Telangana, India</p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}