import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid = formData.name.trim() !== '' && isEmailValid && formData.message.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-form-container">
      {isSubmitted && (
        <div className="success-banner" role="alert">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Yajat Srivastava"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yajat@example.com"
            required
          />
          {!isEmailValid && formData.email.length > 0 && (
            <span className="error-text">Please enter a valid email address.</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I assist you?"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn-primary" 
          disabled={!isFormValid}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}