import React from 'react';
import { DAT } from '../../data/zine-data';
import Sticker from '../Sticker/Sticker';
import './ZineContact.scss';

const PINK = '#ff3da7';
const BLUE = '#1f4dff';
const INK = '#0e0e0e';

const ZineContact = () => (
  <section id="contact" className="zine-contact">
    <Sticker color={BLUE} rot={-5}>letters to the editor</Sticker>
    <h2 className="zine-contact__title">
      WRITE<span style={{ color: PINK }}>!</span> ME<span style={{ color: BLUE }}>!</span>
    </h2>
    <a href={`mailto:${DAT.email}`} className="zine-contact__email">{DAT.email}</a>
    <div className="zine-contact__socials">
      <a href={DAT.linkedin} target="_blank" rel="noreferrer noopener"><Sticker color={BLUE} rot={-2}>LinkedIn ↗</Sticker></a>
      <a href={DAT.github} target="_blank" rel="noreferrer noopener"><Sticker color={INK} rot={1}>GitHub ↗</Sticker></a>
      <a href={DAT.medium} target="_blank" rel="noreferrer noopener"><Sticker color={PINK} rot={-1}>Medium ↗</Sticker></a>
      <a href={DAT.twitter} target="_blank" rel="noreferrer noopener"><Sticker color={BLUE} rot={2}>Twitter ↗</Sticker></a>
    </div>
  </section>
);

export default ZineContact;
