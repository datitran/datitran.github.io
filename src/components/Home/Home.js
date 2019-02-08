import React from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import imageOne from '../../static/object_detection.jpg';
import imageTwo from '../../static/face2face.jpg';

class Home extends React.Component {
  render() {
    return <Container>
      <h2 className='sectionHeading projects__heading'>Welcome!</h2>
      <br></br>
      I'm Dat. This is my personal homepage. I work in the intersection between humans and machines.
      <br></br>
      <br></br>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <a href='https://towardsdatascience.com/building-a-real-time-object-recognition-app-with-tensorflow-and-opencv-b7a2b4ebdc32'><CardImg src={imageOne} alt='Object Detection.'/></a>
              <CardBody>
                <CardTitle>Building a Real-Time Object Recognition App with Tensorflow and OpenCV.</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <a href='https://towardsdatascience.com/face2face-a-pix2pix-demo-that-mimics-the-facial-expression-of-the-german-chancellor-b6771d65bf66'><CardImg src={imageTwo} alt='Face2face Demo.'/></a>
              <CardBody>
                <CardTitle>Face2face — A Pix2Pix demo that mimics the facial expression of the German chancellor.</CardTitle>
              </CardBody>
            </Card>
            </CardDeck>
        </Col>
      </Row>
      </Container>;
  }
}

export default Home;
