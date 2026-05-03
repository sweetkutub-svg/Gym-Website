import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=60"
          alt="CTA"
        />
        <div className="cta-overlay" />
      </div>

      <div className="container cta-content">
        <div className="cta-text reveal-left">
          <span className="section-tag">Get Started Today</span>
          <h2 className="cta-title">
            Ready to<br />
            <span className="text-yellow">Transform?</span>
          </h2>
          <p className="cta-desc">
            Take the first step. Fill out the form and our team will reach out
            within 24 hours to help you start your journey.
          </p>

          <div className="cta-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Location</strong>
                <span>123 Power Street, Fitness District</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <span>+1 (555) FIT-FORGE</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <strong>Hours</strong>
                <span>Mon–Fri: 5AM–11PM | Weekends: 6AM–10PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-form-wrap reveal-right">
          {sent ? (
            <div className="form-success">
              <span className="success-icon">✓</span>
              <h3>Message Sent!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Free Consultation</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Goal</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                <span>Send Message →</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
