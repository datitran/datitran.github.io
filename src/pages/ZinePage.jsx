import React from 'react';
import { COMPANIES, MARQUEE_SERVICES } from '../data/zine-data';
import ZineNav from '../components/ZineNav/ZineNav';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import StatsBand from '../components/StatsBand/StatsBand';
import ZineAbout from '../components/ZineAbout/ZineAbout';
import ZineServices from '../components/ZineServices/ZineServices';
import ZineCompanies from '../components/ZineCompanies/ZineCompanies';
import ZineProjects from '../components/ZineProjects/ZineProjects';
import PullQuote from '../components/PullQuote/PullQuote';
import ZineWriting from '../components/ZineWriting/ZineWriting';
import ZineTalks from '../components/ZineTalks/ZineTalks';
import ZineOSS from '../components/ZineOSS/ZineOSS';
import ZineContact from '../components/ZineContact/ZineContact';
import ZineFooter from '../components/ZineFooter/ZineFooter';

const ZinePage = () => (
  <div className="zine-page">
    <ZineNav />
    <div className="zine-page__body">
      <Hero />
      <Marquee items={MARQUEE_SERVICES} bg="#0e0e0e" color="#fbf6ee" accent="#ff3da7" />
      <StatsBand />
      <ZineAbout />
      <ZineServices />
      <ZineCompanies />
      <Marquee items={COMPANIES} bg="#fbf6ee" color="#0e0e0e" accent="#1f4dff" />
      <ZineProjects />
      <PullQuote />
      <ZineWriting />
      <ZineTalks />
      <ZineOSS />
      <ZineContact />
    </div>
    <ZineFooter />
  </div>
);

export default ZinePage;
