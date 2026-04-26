import React from 'react';
import { DAT } from '../../data/zine-data';
import Sticker from '../Sticker/Sticker';
import { PINK, BLUE, INK, PAPER } from '../../styles/theme-vars';
import './Hero.scss';

const Hero = () => (
  <section className="hero">
    <h1 className="hero__title">
      HI<span className="hero__pink">!</span><br />
      I'M <span className="hero__blue">DAT</span>.
    </h1>
    <div className="hero__grid">
      <div>
        <p className="hero__intro">
          This is my personal homepage. I work in the{' '}
          <span style={{ background: PINK, color: '#fff', padding: '0 6px' }}>intersection</span>{' '}
          between{' '}
          <span style={{ background: BLUE, color: '#fff', padding: '0 6px' }}>humans</span>{' '}
          and{' '}
          <span style={{ background: INK, color: PAPER, padding: '0 6px' }}>machines</span>.
          Feel free to contact me at{' '}
          <a href={`mailto:${DAT.email}`} className="hero__email">{DAT.email}</a>
          {' '}for work-related inquiries.
        </p>
        <div className="hero__tags">
          <Sticker color={BLUE} rot={-2}>AI advisory</Sticker>
          <Sticker color={PINK} rot={1}>keynote speaker</Sticker>
          <Sticker color={INK} rot={-1}>open source</Sticker>
          <Sticker color={BLUE} rot={2}>ex Axel Springer</Sticker>
          <Sticker color={PINK} rot={-2}>ex idealo</Sticker>
        </div>
      </div>
      <div className="hero__photo-wrap">
        <div className="hero__photo" style={{ backgroundImage: `url(${DAT.photo})` }} />
        <Sticker rot={-8} style={{ position: 'absolute', bottom: -16, left: -10 }}>← that's me!</Sticker>
      </div>
    </div>
  </section>
);

export default Hero;
