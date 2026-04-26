import React from 'react';
import { SERVICES } from '../../data/zine-data';
import SectionHeader from '../SectionHeader/SectionHeader';
import Sticker from '../Sticker/Sticker';
import './ZineServices.scss';

const PINK = '#ff3da7';
const BLUE = '#1f4dff';

const ZineServices = () => (
  <section id="services" className="zine-services">
    <SectionHeader chapter={2} chapterColor={PINK}>
      What's <span style={{ color: PINK }}>on the menu</span>:
    </SectionHeader>
    <p className="zine-services__sub">I offer services in:</p>
    <div className="zine-services__grid">
      {SERVICES.map((s, i) => (
        <div
          key={s.id}
          className={`zine-services__card ${i % 2 === 0 ? 'zine-services__card--even' : 'zine-services__card--odd'}`}
        >
          <div className="zine-services__card-top">
            <span
              className="zine-services__glyph"
              style={{ color: i % 2 === 0 ? PINK : BLUE }}
            >
              № {s.glyph}
            </span>
            <Sticker color={i % 2 === 0 ? BLUE : PINK} rot={i % 2 === 0 ? 3 : -3}>book it</Sticker>
          </div>
          <h3 className="zine-services__title">{s.title}</h3>
          <p className="zine-services__blurb">{s.blurb}</p>
          <ul className="zine-services__bullets">
            {s.bullets.map(b => <li key={b}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ZineServices;
