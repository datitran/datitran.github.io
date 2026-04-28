import React, { useState, useEffect } from 'react';
import { DAT, OSS_REPOS, MORE_PROJECTS } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Sticker from '../Sticker/Sticker';
import { PINK, BLUE, INK } from '../../styles/theme-vars';
import './ZineOSS.scss';

const SHADOW_COLORS = [PINK, BLUE, INK];

function formatStars(n) {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n);
}

function useGitHubStars(repos) {
  const [stars, setStars] = useState(() => {
    const m = {};
    repos.forEach((r) => { m[r.ghRepo] = r.stars; });
    return m;
  });

  useEffect(() => {
    let cancelled = false;
    Promise.allSettled(
      repos.map((r) =>
        fetch(`https://api.github.com/repos/${r.ghRepo}`)
          .then((res) => res.ok ? res.json() : null)
          .then((data) => data ? { repo: r.ghRepo, stars: data.stargazers_count } : null)
      )
    ).then((results) => {
      if (cancelled) return;
      setStars((prev) => {
        const next = { ...prev };
        results.forEach((r) => {
          if (r.status === 'fulfilled' && r.value) {
            next[r.value.repo] = r.value.stars;
          }
        });
        return next;
      });
    });
    return () => { cancelled = true; };
  }, []);

  return stars;
}

const ZineOSS = () => {
  const allRepos = [...OSS_REPOS, ...MORE_PROJECTS];
  const stars = useGitHubStars(allRepos);

  return (
    <section id="oss" className="zine-oss">
      <SectionHeader chapter={6} chapterColor={INK}>
        Free <span style={{ color: PINK }}>code</span>!
      </SectionHeader>
      <p className="zine-oss__intro">
        A handful of repositories I've shipped over the years — speech synthesis, computer vision, datasets, and the odd developer tool. All MIT, all on{' '}
        <a href={DAT.github} target="_blank" rel="noreferrer noopener" className="zine-oss__link">github.com/datitran</a>.
      </p>

      <h3 className="zine-oss__sub-label">Open-Source — featured</h3>
      <div className="zine-oss__featured">
        {OSS_REPOS.map((r, i) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer noopener"
            className="zine-oss__feat-card"
            style={{
              boxShadow: `7px 7px 0 ${SHADOW_COLORS[i % 3]}`,
              transform: i % 2 === 0 ? 'rotate(-0.4deg)' : 'rotate(0.3deg)',
              '--shadow-color': SHADOW_COLORS[i % 3],
            }}
          >
            <span className="zine-oss__feat-badge">↗</span>
            <div className="zine-oss__feat-img" style={{ backgroundImage: `url(${r.img})` }} />
            <div className="zine-oss__feat-meta">
              <span>{r.org}</span><span>{r.year}</span>
            </div>
            <div className="zine-oss__feat-name">{r.name}</div>
            <p className="zine-oss__feat-desc">{r.desc}</p>
            <div className="zine-oss__feat-stars">
              <span><span className="zine-oss__feat-stars-k">★ {formatStars(stars[r.ghRepo])}</span> stars</span>
              <span>{r.lang}</span>
            </div>
            <div className="zine-oss__feat-tag">
              <Sticker color={i % 2 === 0 ? PINK : BLUE} rot={i % 2 === 0 ? -2 : 2}>{r.tag}</Sticker>
            </div>
          </a>
        ))}
      </div>

      <h3 className="zine-oss__sub-label zine-oss__sub-label--more">More projects</h3>
      <div className="zine-oss__more-list">
        <div className="zine-oss__more-head">
          <span>repository</span>
          <span>language</span>
          <span>year</span>
          <span>stars</span>
        </div>
        {MORE_PROJECTS.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer noopener" className="zine-oss__more-row">
            <div>
              <div className="zine-oss__more-name">{p.name}</div>
              <p className="zine-oss__more-desc">{p.desc}</p>
            </div>
            <div className="zine-oss__more-lang">{p.lang}</div>
            <div className="zine-oss__more-year">{p.year}</div>
            <div className="zine-oss__more-stars-cell">
              <span className="zine-oss__more-stars">★ {formatStars(stars[p.ghRepo])}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ZineOSS;
