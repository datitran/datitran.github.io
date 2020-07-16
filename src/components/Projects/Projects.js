import React from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import ProgressiveImage from 'react-progressive-image';
import imageOne from '../../static/idealo_hotel.jpg';
import imageOneSmall from '../../static/tiny_image/idealo_hotel_tn.jpg';
import imageTwo from '../../static/apache_nifi.jpg';
import imageTwoSmall from '../../static/tiny_image/apache_nifi_tn.jpg';
import imageThree from '../../static/employer_branding_dat_tran.jpg';
import imageThreeSmall from '../../static/tiny_image/employer_branding_dat_tran_tn.jpg';
import imageFour from '../../static/readaloud_welt.jpg';
import imageFourSmall from '../../static/tiny_image/readaloud_welt_tn.jpg';
import imageFive from '../../static/leadership_dat_tran.jpg';
import imageFiveSmall from '../../static/tiny_image/leadership_dat_tran_tn.jpg';
import imageSix from '../../static/idealo_team_photo.jpg';
import imageSixSmall from '../../static/tiny_image/idealo_team_photo_tn.jpg';

import './Projects.scss';

import ProjectTile from '../../components/ProjectTile/ProjectTile';
import ProjectService from '../../services/ProjectService';

export default (props) => {
  function renderProjectTiles() {
    let tileList = [];

    ProjectService.getProjects().forEach((project, index) => {
      tileList.push(
        <ProjectTile key={'projectTile' + index} projectData={project} />
      );
    });

    return tileList;
  }

  return (
    <Container>
        <h2 className='sectionHeading projects__heading'>Projects</h2>
        <br></br>
        Over the years, I've worked on, managed and led many industry, research and open-source projects across different domains and stages: from the strategy side, ideation to the actual implementation. I was literally in touch with every part of modern software development. Here's a list of some of the projects that I've been working on but also just stuff that I do. Feel free to reach out if you would like to work with me.
        <br></br>
        <br></br>
        <h3>Industry</h3>
        <br></br>
        <Row>
          <Col>
            <CardDeck>
              <Card className='border-0'>
                <ProgressiveImage delay={150} src={imageOne} placeholder={imageOneSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Computer Vision.'/>
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageOne} alt='Computer Vision.'/>
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
                <CardBody>
                  <CardTitle>Computer Vision.</CardTitle>
                  <CardText>
                    <ul>
                      <li>Used deep learning to automatically rank millions of hotel images (300+ million) at <a href='https://hotel.idealo.de/' className='projects__links' target='_blank' rel='noreferrer noopener'>hotel.idealo.de</a> according to their aesthetic and technical quality which helped to improve the listing for small and mid-sized hotels</li>
                      <li>Trained CNNs to automatically generate nice looing product galleries which reduced the workflow time of idealo's content team by 75%</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
              <Card className='border-0'>
                <ProgressiveImage src={imageTwo} placeholder={imageTwoSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='CRM.'/>
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageTwo} alt='CRM.'/>
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
                <CardBody>
                  <CardTitle>CRM.</CardTitle>
                  <CardText>
                    <ul>
                      <li>I concepted and set up the data engineering flow with Apache Nifi to automate idealo's CRM workflow which resulted €1m in the 1st year, €2m in the 2nd year and €3m in the 3rd year</li>
                      <li>My team built a tree-based classifier to predict non-purchases of customers which helped idealo's CRM team to target those customers three days ahead before we receive the actual sales data by the shops</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row className='home__row'>
          <Col>
            <CardDeck>
              <Card className='border-0'>
                <ProgressiveImage src={imageThree} placeholder={imageThreeSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='(Tech) Transformation.'/>
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageThree} alt='(Tech) Transformation.'/>
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
                <CardBody>
                  <CardTitle>(Tech) Transformation.</CardTitle>
                  <CardText>
                    <ul>
                      <li>Established and managed the <a href='https://medium.com/axel-springer-tech' className='projects__links' target='_blank' rel='noreferrer noopener'>Axel Springer Tech Blog</a> and also <a href='https://medium.com/idealo-tech-blog' className='projects__links' target='_blank' rel='noreferrer noopener'>idealo's Tech Blog</a></li>
                      <li>Devised and co-organized the <a href='https://youtu.be/9uYlYCUgHes' className='projects__links' target='_blank' rel='noreferrer noopener'>Axel Springer TechCon 2019</a> which was the first group-wide conference within the group</li>
                      <li>I was the face of the new employer branding for technology within the Axel Springer group</li>
                      <li>Introduced and evangelized extreme programming practices (e.g. pair programming, TDD, balanced teams etc.) and also lean product development</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
              <Card className='border-0'>
                <ProgressiveImage src={imageFour} placeholder={imageFourSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Readaloud.'/>
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageFour} alt='Readaloud.'/>
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
                <CardBody>
                  <CardTitle>Readaloud.</CardTitle>
                  <CardText>
                    <ul>
                      <li>Developed a text-to-speech (TTS) system to synthesize <a href='https://www.welt.de/' className='projects__links' target='_blank' rel='noreferrer noopener'>Welt.de</a> articles</li>
                      <li>Managed R&D directions of the team and also guided product development</li>
                      <li>We also open-sourced several TTS models:</li>
                        <ul>
                          <li><a href='https://github.com/as-ideas/TransformerTTS' className='projects__links' target='_blank' rel='noreferrer noopener'>TransformerTTS</a> - Implementation of a non-autoregressive Transformer based neural network for text to speech</li>
                          <li><a href='https://github.com/as-ideas/ForwardTacotron' className='projects__links' target='_blank' rel='noreferrer noopener'>ForwardTacotron</a> - Generating speech in a single forward pass without any attention</li>
                        </ul>
                      <li>The MVP went life after 5 months</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row className='home__row'>
          <Col>
            <CardDeck>
              <Card className='border-0'>
                <ProgressiveImage src={imageFive} placeholder={imageFiveSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Leadership.'/>
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageFive} alt='Leadership.'/>
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
                <CardBody>
                  <CardTitle>Leadership.</CardTitle>
                  <CardText>
                    <ul>
                      <li>Co-head of idealo's data team as Head of Product where I grew the unit together with the Head of Technology from 12 to 25 employees in the 1st year and personally hired 6 people within 9 months</li>
                      <li>Led the AI efforts for <a href='https://www.axelspringer.com/' className='projects__links' target='_blank' rel='noreferrer noopener'>Axel Springer SE</a> as Head of AI on a group level with the mission to turn the company into an "AI-first" company</li>
                      <li>Provided thought leadership for many topics such as AI, culture, technology and also product development</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
              <Card className='border-0'>
                <ProgressiveImage src={imageSix} placeholder={imageSixSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Mentoring.'/>
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageSix} alt='Mentoring.'/>
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
                <CardBody>
                  <CardTitle>Mentoring.</CardTitle>
                  <CardText>
                    <ul>
                      <li>Introduced individual career development plans with weekly 1:1s which helped my employees to progress much faster in their career and also more goal-oriented</li>
                      <li>Mentored several students successfully from (online) courses such as <a href='https://www.springboard.com/' className='projects__links' target='_blank' rel='noreferrer noopener'>Springboard</a></li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <br></br>
        <h3>Open-Source</h3>
        <br></br>
        <section className='projects__container' id='projects'>
          <div className='projects__tiles'>
            {renderProjectTiles()}
          </div>
        </section>
    </Container>
  );
}
