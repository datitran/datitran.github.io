import React from 'react';
import Sticker from '../Sticker/Sticker';
import './SectionHeader.scss';

const SectionHeader = ({ chapter, chapterColor, children }) => (
  <div className="section-header">
    <Sticker color={chapterColor} rot={chapter % 2 === 0 ? 2 : -3}>
      chapter {String(chapter).padStart(2, '0')}
    </Sticker>
    <h2 className="section-header__title">{children}</h2>
  </div>
);

export default SectionHeader;
