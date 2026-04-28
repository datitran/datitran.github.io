import React from 'react';
import { INDUSTRY_PROJECTS } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import { PINK, BLUE, INK } from '../../styles/theme-vars';
import './ZineProjects.scss';

const SHADOW_COLORS = [PINK, BLUE, INK];

const ZineProjects = () => {
  const [lead, ...rest] = INDUSTRY_PROJECTS;

  return (
    <section id="work" className="zine-projects">
      <SectionHeader chapter={3} chapterColor={BLUE}>
        STUFF I'VE <span style={{ color: BLUE, fontStyle: 'italic' }}>MADE</span>.
      </SectionHeader>

      <h3 className="zine-projects__sub-label">Industry — selected case studies</h3>

      <div className="zine-projects__lead">
        <span className="zine-projects__featured-tag">★ Lead case study</span>
        <div className="zine-projects__lead-img" style={{ backgroundImage: `url(${lead.img})` }} />
        <div>
          <div className="zine-projects__lead-meta">
            <span>{lead.org}</span><span>{lead.year}</span>
          </div>
          <h3 className="zine-projects__lead-title">{lead.title}</h3>
          <p className="zine-projects__lead-headline">"{lead.headline}"</p>
          <ul className="zine-projects__lead-bullets">
            {lead.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="zine-projects__lead-metrics">
            {lead.metrics.map((m, i) => (
              <div key={i}>
                <div className="zine-projects__metric-k">{m.k}</div>
                <div className="zine-projects__metric-v">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="zine-projects__grid">
        {rest.map((p, i) => (
          <div
            key={p.title}
            className="zine-projects__card"
            style={{
              transform: i % 2 === 0 ? 'rotate(-0.4deg)' : 'rotate(0.3deg)',
              boxShadow: `6px 6px 0 ${SHADOW_COLORS[i % 3]}`,
              '--shadow-color': SHADOW_COLORS[i % 3],
            }}
          >
            <div className="zine-projects__card-img" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="zine-projects__card-meta">
              <span>{p.org}</span><span>{p.year}</span>
            </div>
            <h4 className="zine-projects__card-title">{p.title}</h4>
            <p className="zine-projects__card-headline">{p.headline}</p>
            <div className="zine-projects__card-metrics">
              {p.metrics.map((m, j) => (
                <div key={j}>
                  <div className="zine-projects__card-mk">{m.k}</div>
                  <div className="zine-projects__card-mv">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZineProjects;
