import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Privacy.scss';

class Privacy extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          <h2 className='sectionHeading projects__heading'>Privacy Policy</h2>
          <p>Welcome to Dat Tran Ventures UG, located at Hettnerweg 30, 13581 Berlin. We are committed to protecting your privacy and ensuring that your personal information is protected. For the purposes of this Privacy Policy, "we", "us", and "our" refers to Dat Tran Ventures UG, and "you" refers to our users and visitors.</p>
          <h3>1. No Personal Data Collection</h3>
          <p>We are proud to announce that this website does not collect or store any personal data from our users. Our services are designed to respect your privacy and personal space, which means:</p>
          <ul>
            <li>We do not require you to provide any personal information to use our website or services.</li>
            <li>We do not use cookies or any tracking technologies to collect information about your visit to our website.</li>
            <li>We do not store any IP addresses or any other identifiers that could be used to identify you personally.</li>
          </ul>
          <h3>2. No Data Sharing</h3>
          <p>Since we do not collect any personal data, there is no data to share or disclose to third parties.</p>
          <h3>3. Data Security</h3>
          <p>Although we do not collect personal data, we are committed to ensuring the security of our website and protecting it from unauthorized access.</p>
          <h3>4. Changes to Our Privacy Policy</h3>
          <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make significant changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we do not collect, how we do not use it, and under what circumstances, if any, we do not disclose it.</p>
          <h3>5. Contact Us</h3>
          <p>If you have any questions about our Privacy Policy, do not hesitate to contact us at:</p>
          <p>Telephone Number: +49 151 2296-3660</p>
          <p>Email Address: hello@dat-tran.com</p>
          <br></br>
          <p>Last Updated: 2024-03-01</p>
        </Col>
      </Row>
    </Container>
  }
}

export default Privacy;
