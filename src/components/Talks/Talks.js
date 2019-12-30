import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import pdfFile from '../../static/CV.pdf'
import talks from '../../data/talks';
import './Talks.scss';

class Talks extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          <p>I regularly give talks from technical ones to keynotes on many diverse topics such as AI, technology, culture &amp; transformation. For a more detailed list of my talks, have a look at my <a href={pdfFile} className='talks__links'>CV</a>. If you want to book me write me an <a href='mailto:datitran@gmail.com' className='talks__links'>e-mail</a>.</p>
          <h2 className='sectionHeading projects__heading'>Talks</h2>
          {talks.map(function (talk, i) {
            moment.locale('en');
            return (
              <Media key={i}>
                <Media left top href={talk.url}>
                  <img className='talks__image' src={require('../../static/' + talk.image_file)} alt={talk.title}/>
                </Media>
                <Media body>
                  <Media heading>
                    <a href={talk.url} target='_blank' rel='noreferrer noopener'>{talk.title}</a>
                    <span className='jobTotalDuration'>{moment(talk.date).format('YYYY, MMM Do')}</span>
                  </Media>
                  <i className='talks__color'>{talk.description}</i>
                </Media>
              </Media>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Talks;
