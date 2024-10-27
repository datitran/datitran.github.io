import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pdfFile from '../../static/CV.pdf';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className='sectionHeading projects__heading'>About</h2>
            <p>
              I'm a seasoned technology and business leader with extensive experience in creating, transforming and leading both large and small (technological) organizations. As the former Head of AI at <a href='https://www.axelspringer.com/en/' className='about__links' target='_blank' rel='noreferrer noopener'>Axel Springer SE</a>, I established and led their AI division, shaping the company's shift to a tech-oriented mindset through impactful open-source projects, such as <a href='https://github.com/as-ideas/TransformerTTS' className='about__links' target='_blank' rel='noreferrer noopener'>TransformerTTS</a> and <a href='https://github.com/as-ideas/ForwardTacotron' className='about__links' target='_blank' rel='noreferrer noopener'>ForwardTacotron</a>, and organizing initiatives like the Axel Springer TechCon 2019, the first installment of a
              group-wide conference within the Axel Springer group.
            </p>
            <p>
              At <a href='https://www.idealo.de/' className='about__links' target='_blank' rel='noreferrer noopener'>idealo.de</a>, I led a data team that transformed data into a strategic asset, turning the department from a cost center into a profit center by driving projects that monetized data and generated millions in additional revenue. My team’s work helped idealo’s CRM campaigns and optimized user experiences, while also contributing to idealo’s open-source portfolio and tech community presence.
            </p>
            <p>
              Through my consulting company, <a href='https://dat-tran.com/' className='about__links' target='_blank' rel='noreferrer noopener'>Dat Tran Ventures</a>, I advise global companies, such as Beiersdorf, Bertelsmann and Axel Springer, on AI, digital transformation, and tech strategy.
              With my expertise across frontend, backend, cloud, and DevOps, I help clients implement cutting-edge technology strategies and foster innovative tech cultures.
              My reach extends globally, with a LinkedIn network of over 76k+ followers, where I actively share insights on AI, tech leadership, and digital transformation.
              I also regularly contribute to the community as a keynote speaker at conferences like PyData and WeAreDevelopers, and as a mentor in machine learning and leadership.
            </p>
            <p>
              For a deeper dive into my work, please view my <a href={pdfFile} className='about__links'>CV</a>.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
