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

  render() {
    const { menuOpen } = this.state;
    const { isSubpage } = this.props;
    return (
      <header className="zine-nav">
        <div className="zine-nav__left">
          {isSubpage ? (
            <Link to="/" className="zine-nav__brand">DAT<span className="zine-nav__brand-bang">!</span></Link>
          ) : (
            <a href="#" className="zine-nav__brand">DAT<span className="zine-nav__brand-bang">!</span></a>
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
            <a key={label} href={href} className="zine-nav__link" onClick={() => this.setState({ menuOpen: false })}>{label}</a>
          ))}
          {isSubpage && (
            <Link to="/" className="zine-nav__link">Home</Link>
          )}
        </nav>
      </header>
    );
  }
}

export default ZineNav;
