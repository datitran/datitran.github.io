import React from 'react';
import { WRITING } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ZineWriting.scss';

const PINK = '#ff3da7';

const ZineWriting = () => (
  <section id="writing" className="zine-writing">
    <SectionHeader chapter={4} chapterColor={PINK}>
      THINGS I'VE <span style={{ color: PINK, fontStyle: 'italic' }}>WRITTEN</span>.
    </SectionHeader>
    <div className="zine-writing__table">
      {WRITING.map((w, i) => (
        <a
          key={i}
          href={w.href}
          target="_blank"
          rel="noreferrer noopener"
          className={`zine-writing__row ${i % 2 === 0 ? 'zine-writing__row--even' : 'zine-writing__row--odd'}`}
        >
          <span className="zine-writing__num">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="zine-writing__title">{w.title}</span>
          <span className="zine-writing__outlet">{w.outlet}</span>
          <span className="zine-writing__date">{w.date}</span>
          <span className="zine-writing__arrow">→</span>
        </a>
      ))}
    </div>
  </section>
);

export default ZineWriting;
