import React, { useEffect } from 'react';
import ZineNav from '../ZineNav/ZineNav';
import ZineFooter from '../ZineFooter/ZineFooter';
import './Imprint.scss';

const Imprint = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
  <div>
    <ZineNav isSubpage />
    <div className="legal-page">
      <h1 className="legal-page__title">Imprint</h1>

      <h3>Legal Notice</h3>
      <p>Dat Tran Ventures UG</p>
      <p>Hettnerweg 30</p>
      <p>13581 Berlin</p>
      <p>Telephone Number: +49 151 2296-3660</p>
      <p>Email Address: hello@dat-tran.com</p>

      <h4>Represented by:</h4>
      <p>Dat Tran (Managing Director)</p>
      <p>Hettnerweg 30</p>
      <p>13581 Berlin</p>

      <h4>Responsible for the content (according to § 55 Abs. 2 RStV):</h4>
      <p>Dat Tran</p>
      <p>Hettnerweg 30</p>
      <p>13581 Berlin</p>

      <h4>Regulatory Authority:</h4>
      <p>Registered in the Commercial Register Berlin Charlottenburg</p>
      <p>Register Number: HRB 222686</p>

      <h4>Liability for Content & Links:</h4>
      <p>The general disclaimer of liability applies to the content of our website. Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>

      <h4>Copyright</h4>
      <p>The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.</p>

      <p className="legal-page__updated">Last Updated: 2024-03-01</p>
    </div>
    <ZineFooter />
  </div>
  );
};

export default Imprint;
