import React from 'react';
import { SERVICES, DAT } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Sticker from '../Sticker/Sticker';
import { PINK, BLUE, INK } from '../../styles/theme-vars';
import './ZineServices.scss';

const mailto = (subject) =>
  `mailto:${DAT.email}?subject=${encodeURIComponent(subject)}`;

const ZineServices = () => (
  <section id="services" className="zine-services">
    <SectionHeader chapter={2} chapterColor={PINK}>
      What's <span style={{ color: PINK }}>on the menu</span>:
    </SectionHeader>

    <div className="zine-services__chrome">
      <span className="zine-services__chrome-rule" aria-hidden="true" />
      <span className="zine-services__chrome-caption">à la carte · prix fixe on request</span>
      <span className="zine-services__chrome-rule" aria-hidden="true" />
    </div>

    <div className="zine-services__grid">
      {SERVICES.map((s, i) => {
        const accent = i % 2 === 0 ? PINK : BLUE;
        const stickerColor = i % 2 === 0 ? BLUE : PINK;
        return (
          <article
            key={s.id}
            className={`zine-services__card ${i % 2 === 0 ? 'zine-services__card--even' : 'zine-services__card--odd'}`}
          >
            <header className="zine-services__card-top">
              <div className="zine-services__heading">
                <span
                  className="zine-services__glyph"
                  style={{ color: accent }}
                >
                  № {s.glyph}
                </span>
                <span className="zine-services__course" style={{ borderColor: accent, color: accent }}>
                  {s.course}
                </span>
              </div>
              <Sticker
                as="a"
                href={mailto(s.ctaSubject)}
                aria-label={`${s.cta} — ${s.title}`}
                color={stickerColor}
                rot={i % 2 === 0 ? 3 : -3}
              >
                {s.cta} ↗
              </Sticker>
            </header>

            <h3 className="zine-services__title">{s.title}</h3>

            <dl className="zine-services__meta">
              <div className="zine-services__meta-row">
                <dt>For</dt><dd>{s.audience}</dd>
              </div>
              <div className="zine-services__meta-row">
                <dt>Format</dt><dd>{s.format}</dd>
              </div>
            </dl>

            <p className="zine-services__blurb">{s.blurb}</p>

            <ul className="zine-services__bullets">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </article>
        );
      })}
    </div>

    <p className="zine-services__footnote">
      Don't see your dish?{' '}
      <a href="#contact" className="zine-services__chef">ask the chef →</a>
    </p>
  </section>
);

export default ZineServices;
