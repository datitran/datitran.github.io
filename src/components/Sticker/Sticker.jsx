import React from 'react';
import './Sticker.scss';

const Sticker = ({
  children,
  color,
  rot = -3,
  style = {},
  className = '',
  as: Tag = 'span',
  ...rest
}) => {
  const interactive = Tag !== 'span';
  return (
    <Tag
      className={`sticker ${interactive ? 'sticker--interactive' : ''} ${className}`}
      style={{
        background: color,
        '--sticker-rot': `${rot}deg`,
        transform: `rotate(${rot}deg)`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Sticker;
