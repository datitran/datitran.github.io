import React from 'react';
import { STATS } from '../../data/zine-data';
import './StatsBand.scss';

const COLORS = ['#ff3da7', '#1f4dff'];

const StatsBand = () => (
  <section className="stats-band">
    {STATS.map((s, i) => (
      <div key={s.label} className="stats-band__item">
        <span className="stats-band__value" style={{ color: COLORS[i % 2] }}>{s.value}</span>
        <span className="stats-band__label">{s.label}</span>
      </div>
    ))}
  </section>
);

export default StatsBand;
