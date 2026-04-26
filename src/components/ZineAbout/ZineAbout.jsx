import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import cvFile from '../../static/CV.pdf';
import './ZineAbout.scss';

const PINK = '#ff3da7';
const BLUE = '#1f4dff';

const ZineAbout = () => (
  <section id="about" className="zine-about">
    <SectionHeader chapter={1} chapterColor={BLUE}>
      About <span style={{ color: PINK }}>me</span>.
    </SectionHeader>
    <div className="zine-about__grid">
      <div>
        <p>
          I'm a seasoned technology and business leader with extensive experience in creating, transforming and leading both large and small organizations. As the former{' '}
          <span style={{ background: PINK, color: '#fff', padding: '0 4px', fontWeight: 700 }}>Head of AI at Axel Springer SE</span>, I established and led their AI division — shipping open source the field still uses (TransformerTTS, ForwardTacotron) and organizing the first group-wide TechCon.
        </p>
        <p>
          At <a href="https://www.idealo.de/" className="zine-about__link zine-about__link--blue">idealo.de</a>, I led a data team that turned the department from a cost center into a profit center — driving CRM campaigns, optimizing UX, and contributing to one of Germany's most-watched OSS portfolios.
        </p>
      </div>
      <div>
        <p>
          Through my consulting company,{' '}
          <span style={{ background: BLUE, color: '#fff', padding: '0 4px', fontWeight: 700 }}>Dat Tran Ventures</span>, I advise global companies — Beiersdorf, Bertelsmann, Axel Springer — on AI, digital transformation and tech strategy. Frontend, backend, cloud, DevOps: I help clients implement strategy and foster innovative tech cultures.
        </p>
        <p>
          My reach extends globally with a LinkedIn network of over <strong>76k+ followers</strong>, where I share insights on AI, tech leadership and digital transformation. I regularly contribute as a keynote speaker at PyData, WeAreDevelopers and Øredev — and as a mentor in machine learning and leadership.
        </p>
        <p className="zine-about__cta">
          For a deeper dive into my work, please{' '}
          <a href={cvFile} target="_blank" rel="noreferrer noopener" className="zine-about__link zine-about__link--pink" style={{ fontWeight: 700 }}>view my CV →</a>
        </p>
      </div>
    </div>
  </section>
);

export default ZineAbout;
