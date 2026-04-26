import React from 'react';
import { Link } from 'react-router-dom';
import './ZineFooter.scss';

const ZineFooter = () => (
  <footer className="zine-footer">
    <span>© Dat Tran 2016–2026</span>
    <span>Hand-set in Berlin · Printed on the web</span>
    <span>
      <Link to="/imprint" className="zine-footer__link">Imprint</Link>
      <Link to="/privacy" className="zine-footer__link">Privacy</Link>
    </span>
  </footer>
);

export default ZineFooter;
