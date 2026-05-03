import React from 'react';

const items = ['Perseverance', 'Passion', 'Attitude', 'Commitment', 'Mental Strength', 'Dedication', 'Discipline', 'Power'];

const MarqueeStrip = () => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
