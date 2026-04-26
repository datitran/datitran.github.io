import React from 'react';
import { TALKS } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Sticker from '../Sticker/Sticker';
import { PINK, BLUE, INK } from '../../styles/theme-vars';
import './ZineTalks.scss';

const kindColor = (kind) => kind === 'Keynote' ? PINK : kind === 'Podcast' ? BLUE : INK;

const ZineTalks = () => (
  <section id="talks" className="zine-talks">
    <SectionHeader chapter={5} chapterColor={BLUE}>
      ON <span style={{ color: BLUE, fontStyle: 'italic' }}>STAGE</span>.
    </SectionHeader>
    <div className="zine-talks__grid">
      {TALKS.map((t, i) => (
        <a
          key={i}
          href={t.href}
          target="_blank"
          rel="noreferrer noopener"
          className={`zine-talks__card ${i % 2 === 0 ? 'zine-talks__card--even' : 'zine-talks__card--odd'}`}
        >
          <div className="zine-talks__card-top">
            <Sticker color={kindColor(t.kind)} rot={i % 2 === 0 ? -2 : 2}>● {t.kind}</Sticker>
            <span className="zine-talks__year" style={{ color: i % 2 === 0 ? BLUE : PINK }}>{t.year}</span>
          </div>
          <div className="zine-talks__title">{t.title}</div>
          <div className="zine-talks__venue">{t.venue}</div>
        </a>
      ))}
    </div>
  </section>
);

export default ZineTalks;
