import React from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './Home.scss';
import imageOne from '../../static/object_detection.jpg';
import imageTwo from '../../static/face2face.jpg';
import imageThree from '../../static/handwritten_digit_recognition.gif';
import imageFour from '../../static/raccoon_detector.jpg';

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
      <Row className='home__row'>
        <Col>
          <CardDeck>
            <Card>
              <a href='http://engineering.pivotal.io/post/api-first-for-data-science/'><CardImg src={imageThree} alt='Handwritten Digit Recognition.'/></a>
              <CardBody>
                <CardTitle>Handwritten Digit Recognition Demo.</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <a href='https://towardsdatascience.com/how-to-train-your-own-object-detector-with-tensorflows-object-detector-api-bec72ecfe1d9'><CardImg src={imageFour} alt='Raccoon Detector.'/></a>
              <CardBody>
                <CardTitle>Using TensorFlow’s Object Detector API to create a Raccoon Detector.</CardTitle>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      </Container>;
  }
}

export default Home;
