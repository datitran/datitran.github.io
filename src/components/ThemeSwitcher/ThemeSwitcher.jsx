import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ThemeSwitcher.scss';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dat-theme') || 'light';
  });
  const [busy, setBusy] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const mountRef = useRef(null);
  const plateRef = useRef(null);
  const flashRef = useRef(null);

  // Sync data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Auto-hide hint after 6s
  useEffect(() => {
    const timer = setTimeout(() => setHintVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = useCallback(() => {
    if (busy) return;
    setBusy(true);

    const next = theme === 'dark' ? 'light' : 'dark';

    // Plate press feedback
    if (plateRef.current) {
      plateRef.current.classList.add('active');
      setTimeout(() => plateRef.current?.classList.remove('active'), 140);
    }

    // Filament flicker
    if (mountRef.current) {
      mountRef.current.classList.remove('lighting');
      void mountRef.current.offsetWidth;
    }

    // Flash animation
    if (flashRef.current) {
      flashRef.current.classList.remove('go', 'dark');
      void flashRef.current.offsetWidth;
    }

    if (next === 'light') {
      flashRef.current?.classList.add('go');
      mountRef.current?.classList.add('lighting');
      setTimeout(() => setTheme('light'), 260);
    } else {
      flashRef.current?.classList.add('dark');
      setTimeout(() => setTheme('dark'), 220);
    }

    localStorage.setItem('dat-theme', next);
    setTimeout(() => setBusy(false), 1200);
    setHintVisible(false);
  }, [busy, theme]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  }, [toggleTheme]);

  return (
    <>
      <div className="switch-mount" ref={mountRef}>
        <div
          className="plate"
          ref={plateRef}
          role="button"
          aria-label="Toggle theme"
          tabIndex={0}
          onClick={toggleTheme}
          onKeyDown={handleKeyDown}
        >
          <div className="bulb-glyph" aria-hidden="true">
            <svg viewBox="0 0 36 44">
              <g className="rays">
                <line x1="18" y1="2" x2="18" y2="-3" />
                <line x1="4" y1="14" x2="-1" y2="11" />
                <line x1="32" y1="14" x2="37" y2="11" />
                <line x1="6" y1="4" x2="2" y2="0" />
                <line x1="30" y1="4" x2="34" y2="0" />
              </g>
              <path className="b-glass" d="M18 5 C 9 5 4 12 4 19 C 4 24 7 27 10 30 L 10 33 L 26 33 L 26 30 C 29 27 32 24 32 19 C 32 12 27 5 18 5 Z" />
              <path className="b-glass" d="M11 33 L 25 33 L 25 36 L 11 36 Z M 12 37 L 24 37 L 24 39 L 12 39 Z M 14 40 L 22 40 L 18 43 Z" />
              <path className="b-fil" d="M12 22 C 14 18 16 26 18 22 C 20 18 22 26 24 22" />
            </svg>
          </div>
          <span className="plate-label on">ON</span>
          <div className="lever-slot"></div>
          <div className="lever"></div>
          <span className="plate-label off">OFF</span>
        </div>
        <div
          className="switch-hint"
          style={{
            opacity: hintVisible ? 1 : 0,
            transform: hintVisible ? 'none' : 'translateX(-6px)',
          }}
        >
          <span className="dot"></span>Flip the switch
        </div>
      </div>
      <div className="flash" ref={flashRef}></div>
    </>
  );
};

export default ThemeSwitcher;
