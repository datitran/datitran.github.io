import React from 'react';
import './Marquee.scss';

const Marquee = ({ items, bg = '#0e0e0e', color = '#fbf6ee', accent = '#ff3da7' }) => {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="marquee" style={{ background: bg, color }}>
      <div className="marquee__track">
        {tripled.map((item, i) => (
          <span key={i} className="marquee__item">
            {item} <span className="marquee__star" style={{ color: accent }}>★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
