import React, { useState } from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Rahul Mehta',
    role: 'Member for 2 Years',
    avatar: 'RM',
    rating: 5,
    text: 'FitForge completely transformed my life. I lost 25kg in 8 months with the guidance of amazing trainers. The community here is incredibly motivating!',
  },
  {
    name: 'Ananya Singh',
    role: 'Member for 1 Year',
    avatar: 'AS',
    rating: 5,
    text: 'Best investment I ever made. The HIIT classes are intense but the results speak for themselves. The trainers really push you to your limits in the best way.',
  },
  {
    name: 'Dev Sharma',
    role: 'Member for 3 Years',
    avatar: 'DS',
    rating: 5,
    text: `I've tried 5 different gyms in this city. FitForge is on a completely different level. The equipment, the trainers, the atmosphere — absolutely unmatched.`,
  },
  {
    name: 'Priya Kapoor',
    role: 'Member for 6 Months',
    avatar: 'PK',
    rating: 5,
    text: 'Joined as a complete beginner and felt welcomed from day one. My strength has doubled and I finally feel confident in my body. Highly recommend!',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <span className="section-tag reveal" style={{ textAlign: 'center', display: 'block' }}>Testimonials</span>
        <h2 className="test-title reveal">
          What Our Members<br /><span className="text-yellow">Say About Us</span>
        </h2>

        <div className="test-cards">
          {reviews.map((r, i) => (
            <div
              className={`test-card reveal-scale ${i === active ? 'active' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActive(i)}
            >
              <div className="test-stars">{'★'.repeat(r.rating)}</div>
              <p className="test-text">"{r.text}"</p>
              <div className="test-author">
                <div className="test-avatar">{r.avatar}</div>
                <div>
                  <div className="test-name">{r.name}</div>
                  <div className="test-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
