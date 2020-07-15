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
        I've worked in and managed many industry, research and open-source projects over the years. Here's a list of some of the projects that I've been working on.
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
                      <li>Used deep learning to automatically rank millions of hotel images (300+ million) at hotel.idealo.de according to their aesthetic and technical quality which helped to improve the listing for small and mid-sized hotels</li>
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
                      <li>I concepted and set up the data engineering flow with Apache Nifi to automate idealo's CRM workflow which resulted 1m EUR in the 1st year, 2m in the 2nd year and 3m in the 3rd year</li>
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
                      <li>Established and managed the Axel Springer Tech Blog and also idealo's Tech Blog</li>
                      <li>Ideated and co-organized the Axel Springer TechCon 2019 which was the first group-wide conference within the group</li>
                      <li>I was the face of the new employer branding for technology within the Axel Springer group</li>
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
                      <li>Developed a text-to-speech systen to synthesize Welt.de articles</li>
                      <li>Managed R&D directions of the team and also guided product development</li>
                      <li>The MVP went life after 5 months</li>
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
