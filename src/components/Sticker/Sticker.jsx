import React from 'react';
import './Sticker.scss';

const Sticker = ({ children, color, rot = -3, style = {}, className = '' }) => (
  <span
    className={`sticker ${className}`}
    style={{
      background: color,
      transform: `rotate(${rot}deg)`,
      ...style,
    }}
  >
    {children}
  </span>
);

export default Sticker;
