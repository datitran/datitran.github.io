import React from 'react';
import { Link } from 'react-router-dom';
import './ZineFooter.scss';

const ZineFooter = () => (
  <footer className="zine-footer">
    <span>© Dat Tran · {new Date().getFullYear()}</span>
    <span>Made in Berlin</span>
    <span>
      <Link to="/imprint" className="zine-footer__link">Imprint</Link>
      <Link to="/privacy" className="zine-footer__link">Privacy</Link>
    </span>
  </footer>
);

export default ZineFooter;
