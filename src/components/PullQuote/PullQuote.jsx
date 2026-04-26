import React from 'react';
import { TESTIMONIALS } from '../../data/zine-data';
import './PullQuote.scss';

const PullQuote = () => (
  <section className="pull-quote">
    <div className="pull-quote__label">★ What clients say ★</div>
    <blockquote className="pull-quote__text">
      "Dat is the rare blend of{' '}
      <span className="pull-quote__highlight">deep technical chops</span>
      {' '}and senior leadership judgement."
    </blockquote>
    <div className="pull-quote__attr">
      — {TESTIMONIALS[0].name}, {TESTIMONIALS[0].role}
    </div>
  </section>
);

export default PullQuote;
