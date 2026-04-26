import React from 'react';
import { DAT, OSS_REPOS } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ZineOSS.scss';

const PINK = '#ff3da7';
const BLUE = '#1f4dff';
const INK = '#0e0e0e';

const ZineOSS = () => (
  <section id="oss" className="zine-oss">
    <SectionHeader chapter={6} chapterColor={INK}>
      Free <span style={{ color: PINK }}>code</span>!
    </SectionHeader>
    <p className="zine-oss__intro">
      A handful of repositories I've shipped over the years — speech synthesis, computer vision, datasets, and the odd developer tool. All MIT, all on{' '}
      <a href={DAT.github} className="zine-oss__link">github.com/datitran</a>.
    </p>
    <div className="zine-oss__grid">
      {OSS_REPOS.map((r, i) => (
        <a
          key={r.name}
          href={r.url}
          target="_blank"
          rel="noreferrer noopener"
          className="zine-oss__card"
          style={{
            boxShadow: `5px 5px 0 ${i % 2 === 0 ? PINK : BLUE}`,
            '--shadow-color': i % 2 === 0 ? PINK : BLUE,
          }}
        >
          <span className="zine-oss__badge">↗</span>
          <div className="zine-oss__repo-num">// repo {String(i + 1).padStart(2, '0')}</div>
          <div className="zine-oss__repo-name">{r.name}</div>
          <p className="zine-oss__repo-desc">{r.desc} ⭐ {r.stars}</p>
        </a>
      ))}
    </div>
  </section>
);

export default ZineOSS;
