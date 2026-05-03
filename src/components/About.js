import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images reveal-left">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
                alt="Training"
              />
              <div className="img-badge">
                <span className="badge-num">5+</span>
                <span className="badge-label">Years of<br />Excellence</span>
              </div>
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80"
                alt="Gym"
              />
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag reveal">About FitForge</span>
            <h2 className="about-title reveal">
              Real Changes<br />
              <span className="text-yellow">In Real People</span>
            </h2>
            <p className="about-desc reveal" style={{ transitionDelay: '0.2s' }}>
              Real change comes with real effort. At FitForge, we believe every body has
              extraordinary potential waiting to be unlocked. Our state-of-the-art facility
              and expert trainers will guide you every step of the way.
            </p>
            <p className="about-desc reveal" style={{ transitionDelay: '0.3s' }}>
              Push your limits, stay consistent, and achieve the results you deserve.
              We're not just a gym — we're a community of driven individuals committed
              to becoming their best selves.
            </p>

            <div className="about-features reveal" style={{ transitionDelay: '0.4s' }}>
              {[
                { icon: '⚡', label: 'High-Intensity Training' },
                { icon: '🏆', label: 'Professional Coaches' },
                { icon: '💪', label: 'Custom Programs' },
                { icon: '🥗', label: 'Nutrition Guidance' },
              ].map((f, i) => (
                <div className="about-feature" key={i}>
                  <span className="feature-icon">{f.icon}</span>
                  <span className="feature-label">{f.label}</span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary reveal"
              style={{ transitionDelay: '0.5s' }}
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Explore Programs</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
