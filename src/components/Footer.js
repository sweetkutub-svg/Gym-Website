import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="marquee-wrapper" style={{ background: 'var(--yellow)' }}>
          <div className="marquee-track">
            {[...Array(10)].map((_, i) => (
              <span className="marquee-item" key={i}>Join FitForge Today</span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-main container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">FF</span>
            <span className="logo-text">FitForge</span>
          </div>
          <p className="footer-tagline">Build Your Best Self.</p>
          <p className="footer-desc">
            Your premier destination for elite fitness training,
            expert coaching, and a community that pushes you to be better.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {['home', 'about', 'programs', 'trainers', 'pricing', 'contact'].map((id) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Programs</h4>
          <ul>
            {['HIIT Training', 'Strength & Power', 'Boxing & MMA', 'Yoga & Mobility', 'CrossFit', 'Spin Class'].map((p) => (
              <li key={p}><button onClick={() => scrollTo('programs')}>{p}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 123 Power Street, Fitness District</p>
          <p>📞 +1 (555) FIT-FORGE</p>
          <p>📧 hello@fitforge.com</p>
          <p>⏰ Mon–Fri: 5AM–11PM</p>
          <div className="footer-social">
            <a href="#ig" className="social-btn">IG</a>
            <a href="#fb" className="social-btn">FB</a>
            <a href="#yt" className="social-btn">YT</a>
            <a href="#tw" className="social-btn">TW</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2025 FitForge Gym. All rights reserved.</p>
        <p className="footer-credit">
          Designed &amp; Developed by{' '}
          <a href="https://sweetkutub-svg.github.io/My_Portfolio/" target="_blank" rel="noopener noreferrer">
            Sk Kutubuddin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
