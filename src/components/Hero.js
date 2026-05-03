import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      setTimeout(() => el.classList.add('animated'), 200);
    }
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-man-working-out-with-battle-ropes-2028/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-eyebrow reveal">
          <span className="eyebrow-dot" />
          <span>Est. 2020 — Premium Fitness</span>
        </div>

        <h1 className="hero-title" ref={titleRef}>
          <span className="title-line">Build</span>
          <span className="title-line accent">Your Best</span>
          <span className="title-line">Self</span>
        </h1>

        <p className="hero-subtitle reveal" style={{ transitionDelay: '0.4s' }}>
          Unlock your full potential with the right mindset,
          <br />discipline, and elite-level training.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '0.6s' }}>
          <button className="btn-primary" onClick={() => scrollTo('programs')}>
            <span>Start Training</span>
          </button>
          <button className="btn-outline" onClick={() => scrollTo('about')}>
            <span>Discover More</span>
          </button>
        </div>

        <div className="hero-stats reveal" style={{ transitionDelay: '0.8s' }}>
          <div className="hero-stat">
            <span className="stat-num">1200<sup>+</sup></span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">15<sup>+</sup></span>
            <span className="stat-label">Expert Trainers</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">98<sup>%</sup></span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Side Text */}
      <div className="hero-side-text">
        <span>FitForge Gym — 2025</span>
      </div>
    </section>
  );
};

export default Hero;
