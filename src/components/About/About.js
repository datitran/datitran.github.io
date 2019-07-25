import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pdfFile from '../../static/CV.pdf'
import './About.scss';

class About extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          <h2 className='sectionHeading projects__heading'>About</h2>
          <p>I'm currently the Head of AI at <a href='https://axelspringerideas.de/' className='about__links' target='_blank' rel='noreferrer noopener'>Axel Springer Ideas Engineering</a>, the innovation unit of <a href='https://www.axelspringer.com/en/' className='about__links' target='_blank' rel='noreferrer noopener'>Axel Springer SE</a> which is the largest digital publishing house in Europe. I establish and lead <a href='https://axelspringer.ai/' className='about__links' target='_blank' rel='noreferrer noopener'>Axel Springer AI</a> where my goal is to make AI more accessible within Axel Springer and hence drive innovations within the group. The AI unit will also deliver end-to-end machine learning projects and conduct state of the art AI research. Before that I worked for <a href='https://www.idealo.de/' className='about__links' target='_blank' rel='noreferrer noopener'>idealo.de</a>, <a href='https://pivotal.io/' className='about__links' target='_blank' rel='noreferrer noopener'>Pivotal Labs</a> and <a href='https://www.accenture.com/' className='about__links' target='_blank' rel='noreferrer noopener'>Accenture</a>. My interests are diverse from traditional machine learning, deep learning, AI in general to computer vision. I have a lot of experiences from devising realistic data-driven use cases to the actual implementation into a real product; more than capable of distinguishing hype, buzzwords and wannabes from substance.</p>
          <p>I'm a big fan of agile practices, lean product development and open-source technologies. I mainly use Python and the PyData stack for anything that I do but I also know a bit about Apache Spark, TensorFlow, R, SQL and many other stuff. I also regularly blog about my work on <a href='https://medium.com/@datitran' className='about__links' target='_blank' rel='noreferrer noopener'>Medium</a> and also speak at conferences such as PyData.</p>
          <p>Have a look at my <a href={pdfFile} className='about__links'>CV</a> for more information.</p>
        </Col>
      </Row>
    </Container>
  }
}

export default About;
