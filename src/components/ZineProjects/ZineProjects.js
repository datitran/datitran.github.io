import React from 'react';
import { PROJECTS } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Sticker from '../Sticker/Sticker';
import './ZineProjects.scss';

const PINK = '#ff3da7';
const BLUE = '#1f4dff';
const INK = '#0e0e0e';
const SHADOW_COLORS = [PINK, BLUE, INK];

const ZineProjects = () => (
  <section id="work" className="zine-projects">
    <SectionHeader chapter={3} chapterColor={BLUE}>
      STUFF I'VE <span style={{ color: BLUE, fontStyle: 'italic' }}>MADE</span>.
    </SectionHeader>
    <div className="zine-projects__grid">
      {PROJECTS.map((p, i) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noreferrer noopener"
          className="zine-projects__card"
          style={{
            transform: i % 2 === 0 ? 'rotate(-0.6deg)' : 'rotate(0.5deg)',
            boxShadow: `6px 6px 0 ${SHADOW_COLORS[i % 3]}`,
          }}
        >
          <div className="zine-projects__img" style={{ backgroundImage: `url(${p.img})` }} />
          <div className="zine-projects__meta">
            <span>{p.org}</span><span>{p.year}</span>
          </div>
          <h4 className="zine-projects__title">{p.title}</h4>
          <p className="zine-projects__blurb">{p.blurb}</p>
          <div className="zine-projects__tag">
            <Sticker color={i % 2 === 0 ? PINK : BLUE} rot={i % 2 === 0 ? -2 : 2}>{p.tag}</Sticker>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ZineProjects;
