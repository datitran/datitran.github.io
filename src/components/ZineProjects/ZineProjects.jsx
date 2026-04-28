import React from 'react';
import { PROJECTS, INDUSTRY_PROJECTS } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Sticker from '../Sticker/Sticker';
import { PINK, BLUE, INK } from '../../styles/theme-vars';
import './ZineProjects.scss';

const SHADOW_COLORS = [PINK, BLUE, INK];

const ZineProjects = () => (
  <section id="work" className="zine-projects">
    <SectionHeader chapter={3} chapterColor={BLUE}>
      STUFF I'VE <span style={{ color: BLUE, fontStyle: 'italic' }}>MADE</span>.
    </SectionHeader>

    <h3 className="zine-projects__sub-label">Industry</h3>
    <div className="zine-projects__industry-grid">
      {INDUSTRY_PROJECTS.map((p, i) => (
        <div
          key={p.title}
          className="zine-projects__card zine-projects__card--industry"
          style={{
            transform: i % 2 === 0 ? 'rotate(-0.4deg)' : 'rotate(0.3deg)',
            boxShadow: `6px 6px 0 ${SHADOW_COLORS[i % 3]}`,
            '--shadow-color': SHADOW_COLORS[i % 3],
          }}
        >
          <div className="zine-projects__img" style={{ backgroundImage: `url(${p.img})` }} />
          <div className="zine-projects__meta">
            <span>{p.org}</span>
          </div>
          <h4 className="zine-projects__title">{p.title}</h4>
          <ul className="zine-projects__bullets">
            {p.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h3 className="zine-projects__sub-label">Open-Source</h3>
    <div className="zine-projects__grid">
      {PROJECTS.map((p, i) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noreferrer noopener"
          className="zine-projects__card"
          data-shadow-color={SHADOW_COLORS[i % 3]}
          style={{
            transform: i % 2 === 0 ? 'rotate(-0.6deg)' : 'rotate(0.5deg)',
            boxShadow: `6px 6px 0 ${SHADOW_COLORS[i % 3]}`,
            '--shadow-color': SHADOW_COLORS[i % 3],
          }}
        >
          <span className="zine-projects__badge">↗</span>
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
