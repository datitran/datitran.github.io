import React from 'react';
import { COMPANIES } from '../../data/zine-data';
import Sticker from '../Sticker/Sticker';
import { PINK, BLUE, INK, TINT_PINK } from '../../styles/theme-vars';
import './ZineCompanies.scss';

const ZineCompanies = () => (
  <section className="zine-companies">
    <div className="zine-companies__header">
      <Sticker color={INK} rot={-3}>seen at / advised</Sticker>
      <h2 className="zine-companies__title">
        In good <span className="zine-companies__accent">company</span>.
      </h2>
    </div>
    <div className="zine-companies__grid">
      {COMPANIES.map((c, i) => (
        <div
          key={c}
          className="zine-companies__cell"
          style={{
            fontStyle: i % 2 === 0 ? 'italic' : 'normal',
            color: i % 3 === 0 ? PINK : i % 3 === 1 ? BLUE : INK,
            background: i % 2 === 0 ? 'transparent' : TINT_PINK,
          }}
        >
          {c}
        </div>
      ))}
    </div>
  </section>
);

export default ZineCompanies;
