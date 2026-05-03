import React, { useState } from 'react';
import './Programs.css';

const programs = [
  {
    id: 1,
    icon: '🔥',
    title: 'HIIT Training',
    category: 'Cardio',
    desc: 'High-intensity interval training designed to torch calories, boost metabolism, and build explosive endurance in record time.',
    duration: '45 min',
    level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
  },
  {
    id: 2,
    icon: '💪',
    title: 'Strength & Power',
    category: 'Strength',
    desc: 'Build raw, functional strength through progressive overload techniques. Sculpt muscle, increase bone density, and dominate your limits.',
    duration: '60 min',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
  },
  {
    id: 3,
    icon: '🥊',
    title: 'Boxing & MMA',
    category: 'Combat',
    desc: 'Channel your inner warrior. Boxing & MMA conditioning builds agility, coordination, and full-body power while burning serious calories.',
    duration: '60 min',
    level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=500&q=80',
  },
  {
    id: 4,
    icon: '🧘',
    title: 'Yoga & Mobility',
    category: 'Recovery',
    desc: 'Restore, rebuild, and realign. Improve flexibility, reduce injury risk, and develop mind-body awareness with elite mobility training.',
    duration: '50 min',
    level: 'Beginner',
    img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80',
  },
  {
    id: 5,
    icon: '🏋️',
    title: 'CrossFit',
    category: 'Strength',
    desc: 'Functional movements, constantly varied. CrossFit develops broad, inclusive fitness through constantly challenging WODs.',
    duration: '55 min',
    level: 'Advanced',
    img: 'https://images.unsplash.com/photo-1609899464726-209a2dedb214?w=500&q=80',
  },
  {
    id: 6,
    icon: '🚴',
    title: 'Spin Class',
    category: 'Cardio',
    desc: 'High-energy indoor cycling to the beat of pulsing music. Improve cardiovascular fitness and endurance in this electric group class.',
    duration: '45 min',
    level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
  },
];

const Programs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="programs-header">
          <span className="section-tag reveal">What We Offer</span>
          <h2 className="programs-title reveal">
            Elite Training<br />
            <span className="text-yellow">Programs</span>
          </h2>
          <p className="programs-desc reveal" style={{ transitionDelay: '0.2s' }}>
            Every program is engineered for maximum results. Choose your path to transformation.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div
              className={`program-card reveal-scale`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="program-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="program-img-overlay" />
              </div>

              <div className="program-body">
                <div className="program-top">
                  <span className="program-icon">{p.icon}</span>
                  <span className="program-cat">{p.category}</span>
                </div>
                <h3 className="program-title">{p.title}</h3>
                <p className="program-desc">{p.desc}</p>
                <div className="program-meta">
                  <span>⏱ {p.duration}</span>
                  <span>📊 {p.level}</span>
                </div>
              </div>

              <div className="program-hover-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
