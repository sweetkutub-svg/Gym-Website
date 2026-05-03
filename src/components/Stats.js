import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const statsData = [
  { num: 1200, suffix: '+', label: 'Active Members', icon: '👥' },
  { num: 15, suffix: '+', label: 'Expert Trainers', icon: '🏆' },
  { num: 50, suffix: '+', label: 'Weekly Classes', icon: '📋' },
  { num: 98, suffix: '%', label: 'Success Rate', icon: '⚡' },
];

const Counter = ({ num, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (num / duration) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= num) {
              setCount(num);
              clearInterval(interval);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-bg-img">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=60"
          alt="Gym background"
        />
        <div className="stats-overlay" />
      </div>

      <div className="container stats-content">
        <div className="stats-text reveal-left">
          <span className="section-tag">Our Numbers</span>
          <h2 className="stats-title">
            The Results<br /><span className="text-yellow">Speak For Us</span>
          </h2>
        </div>

        <div className="stats-grid">
          {statsData.map((s, i) => (
            <div className="stat-card reveal-scale" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <span className="stat-card-icon">{s.icon}</span>
              <div className="stat-card-num">
                <Counter num={s.num} suffix={s.suffix} />
              </div>
              <div className="stat-card-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
