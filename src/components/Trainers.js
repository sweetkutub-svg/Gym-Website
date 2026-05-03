import React from 'react';
import './Trainers.css';

const trainers = [
  {
    name: 'Marcus Steel',
    role: 'Head Strength Coach',
    exp: '12 Years Exp.',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    specialties: ['Powerlifting', 'Bodybuilding', 'Nutrition'],
    social: { ig: '#', fb: '#' },
  },
  {
    name: 'Priya Sharma',
    role: 'HIIT & Cardio Specialist',
    exp: '8 Years Exp.',
    img: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=400&q=80',
    specialties: ['HIIT', 'Functional', 'Yoga'],
    social: { ig: '#', fb: '#' },
  },
  {
    name: 'Jake Fury',
    role: 'Boxing & Combat Coach',
    exp: '10 Years Exp.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    specialties: ['Boxing', 'MMA', 'Conditioning'],
    social: { ig: '#', fb: '#' },
  },
  {
    name: 'Sofia Reyes',
    role: 'Yoga & Recovery Expert',
    exp: '7 Years Exp.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    specialties: ['Yoga', 'Mobility', 'Meditation'],
    social: { ig: '#', fb: '#' },
  },
];

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <div className="trainers-header">
          <div>
            <span className="section-tag reveal">Expert Team</span>
            <h2 className="trainers-title reveal">
              Train With<br /><span className="text-yellow">The Best</span>
            </h2>
          </div>
          <p className="trainers-sub reveal">
            Our certified trainers bring elite-level expertise,<br />
            passion, and personalized attention to every session.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((t, i) => (
            <div className="trainer-card reveal-scale" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="trainer-img">
                <img src={t.img} alt={t.name} loading="lazy" />
                <div className="trainer-overlay">
                  <div className="trainer-specialties">
                    {t.specialties.map((s, j) => (
                      <span key={j} className="specialty-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <div>
                  <h3 className="trainer-name">{t.name}</h3>
                  <p className="trainer-role">{t.role}</p>
                </div>
                <span className="trainer-exp">{t.exp}</span>
              </div>
              <div className="trainer-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
