import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ZineNav.scss';

const NAV_LINKS = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Writing', '#writing'],
  ['Talks', '#talks'],
  ['Open Source', '#oss'],
  ['Contact', '#contact'],
];

class ZineNav extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  toggleMenu = () => {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  };

  handleAnchorClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    this.setState({ menuOpen: false }, () => {
      requestAnimationFrame(() => {
        const offset = 70;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  };

  render() {
    const { menuOpen } = this.state;
    const { isSubpage } = this.props;
    return (
      <header className="zine-nav">
        <div className="zine-nav__left">
          {isSubpage ? (
            <Link to="/" className="zine-nav__brand" onClick={() => window.scrollTo(0, 0)}>DAT<span className="zine-nav__brand-bang">!</span></Link>
          ) : (
            <a href="#" className="zine-nav__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>DAT<span className="zine-nav__brand-bang">!</span></a>
          )}
        </div>
        <button
          className={`zine-nav__burger ${menuOpen ? 'zine-nav__burger--open' : ''}`}
          onClick={this.toggleMenu}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <nav className={`zine-nav__links ${menuOpen ? 'zine-nav__links--open' : ''}`}>
          {!isSubpage && NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="zine-nav__link" onClick={(e) => this.handleAnchorClick(e, href)}>{label}</a>
          ))}
          {isSubpage && (
            <Link to="/" className="zine-nav__link" onClick={() => window.scrollTo(0, 0)}>Home</Link>
          )}
        </nav>
      </header>
    );
  }
}

export default ZineNav;
