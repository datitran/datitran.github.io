import React from 'react';
import { TESTIMONIALS } from '../../data/zine-data';
import './PullQuote.scss';

const PINK = '#ff3da7';
const INK = '#0e0e0e';

const PullQuote = () => (
  <section className="pull-quote">
    <div className="pull-quote__label">★ Letters from clients ★</div>
    <blockquote className="pull-quote__text">
      "Dat is the rare blend of{' '}
      <span style={{ background: INK, color: PINK, padding: '0 8px', fontStyle: 'normal' }}>deep technical chops</span>
      {' '}and senior leadership judgement."
    </blockquote>
    <div className="pull-quote__attr">
      — {TESTIMONIALS[0].name}, {TESTIMONIALS[0].role}
    </div>
  </section>
);

export default PullQuote;
