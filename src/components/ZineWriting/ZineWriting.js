import React from 'react';
import { WRITING } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ZineWriting.scss';

const PINK = '#ff3da7';

const ZineWriting = () => (
  <section id="writing" className="zine-writing">
    <SectionHeader chapter={4} chapterColor={PINK}>
      BACK <span style={{ color: PINK, fontStyle: 'italic' }}>ISSUES</span>.
    </SectionHeader>
    <div className="zine-writing__table">
      {WRITING.map((w, i) => (
        <div
          key={i}
          className={`zine-writing__row ${i % 2 === 0 ? 'zine-writing__row--even' : 'zine-writing__row--odd'}`}
        >
          <span className="zine-writing__num">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="zine-writing__title">{w.title}</span>
          <span className="zine-writing__outlet">{w.outlet}</span>
          <span className="zine-writing__date">{w.date}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ZineWriting;
