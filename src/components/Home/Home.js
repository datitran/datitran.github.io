import React from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import ProgressiveImage from 'react-progressive-image';
import './Home.scss';
import imageOne from '../../static/object_detection.jpg';
import imageOneSmall from '../../static/tiny_image/object_detection_tn.jpg';
import imageTwo from '../../static/face2face.jpg';
import imageTwoSmall from '../../static/tiny_image/face2face_tn.jpg';
import imageThree from '../../static/handwritten_digit_recognition.gif';
import imageThreeSmall from '../../static/tiny_image/handwritten_digit_recognition_tn.jpg';
import imageFour from '../../static/raccoon_detector.jpg';
import imageFourSmall from '../../static/tiny_image/raccoon_detector_tn.jpg';
import imageFive from '../../static/filter_visualization_aesthetic.jpg';
import imageFiveSmall from '../../static/tiny_image/filter_visualization_aesthetic_tn.jpg';
import imageSix from '../../static/jupyter_reveal.gif';
import imageSixSmall from '../../static/tiny_image/jupyter_reveal_tn.jpg';

class Home extends React.Component {
  render() {
    return <Container>
      <h2 className='sectionHeading projects__heading'>Welcome!</h2>
      <br></br>
      This is my personal homepage. I work in the intersection between humans and machines. Feel free to contact me at <a href="mailto:hello@dat-tran.com" className='home__links'>hello@dat-tran.com</a> for work-related inquiries.
      <br></br>
      <br></br>
      <p>I offer services in:</p>
      <ul>
        <li>Tech due diligence: I check code quality, do architectural review, review your tech stack and roadmap</li>
        <li>Keynote talks: Introductory AI talks for both technical and non-technical audience, topics range from Generative AI to old boring ML</li>
        <li>Discovery and strategy workshops: I help you explore AI use cases tailored to your needs and rank them according to business value</li>
        <li>Sparring partner: Due to my wide range of experiences, I can be a sparring partner for your team for both higher level management and also working level</li>
      </ul>
      <br></br>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <a href='https://towardsdatascience.com/building-a-real-time-object-recognition-app-with-tensorflow-and-opencv-b7a2b4ebdc32'>
                <ProgressiveImage delay={150} src={imageOne} placeholder={imageOneSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Object Detection.' />
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageOne} alt='Object Detection.' />
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
              </a>
              <CardBody>
                <CardTitle>Building a Real-Time Object Recognition App with Tensorflow and OpenCV.</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <a href='https://towardsdatascience.com/face2face-a-pix2pix-demo-that-mimics-the-facial-expression-of-the-german-chancellor-b6771d65bf66'>
                <ProgressiveImage src={imageTwo} placeholder={imageTwoSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Face2face Demo.' />
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageTwo} alt='Face2face Demo.' />
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
              </a>
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
              <a href='http://engineering.pivotal.io/post/api-first-for-data-science/'>
                <ProgressiveImage src={imageThree} placeholder={imageThreeSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Handwritten Digit Recognition.' />
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageThree} alt='Handwritten Digit Recognition.' />
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
              </a>
              <CardBody>
                <CardTitle>Doing some Handwritten Digit Recognition with Keras and built a sketchpad out of it with sketch.js. Joint work with Alicia Bozyk.</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <a href='https://towardsdatascience.com/how-to-train-your-own-object-detector-with-tensorflows-object-detector-api-bec72ecfe1d9'>
                <ProgressiveImage src={imageFour} placeholder={imageFourSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Raccoon Detector.' />
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageFour} alt='Raccoon Detector.' />
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
              </a>
              <CardBody>
                <CardTitle>Using TensorFlow’s Object Detector API to create a Raccoon Detector.</CardTitle>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className='home__row'>
        <Col>
          <CardDeck>
            <Card>
              <a href='https://devblogs.nvidia.com/deep-learning-hotel-aesthetics-photos/'>
                <ProgressiveImage src={imageFive} placeholder={imageFiveSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Deep Learning for Classifying Hotel Aesthetics Photos.' />
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageFive} alt='Deep Learning for Classifying Hotel Aesthetics Photos.' />
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
              </a>
              <CardBody>
                <CardTitle>Training of two Deep Neural Networks to assess the aesthetic and technical quality of images. Joint work with Christopher Lennan.</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <a href='https://medium.freecodecamp.org/how-to-build-interactive-presentations-with-jupyter-notebook-and-reveal-js-c7e24f4bd9c5'>
                <ProgressiveImage src={imageSix} placeholder={imageSixSmall}>
                  {src => {
                    return (
                      <div>
                        <CardImg className='progressive-image' src={src} alt='Jupyter Notebook and reveal.js.' />
                        <noscript>
                          <CardImg className='progressive-image no-script' src={imageSix} alt='Jupyter Notebook and reveal.js.' />
                        </noscript>
                      </div>
                    );
                  }}
                </ProgressiveImage>
              </a>
              <CardBody>
                <CardTitle>Creating beautiful and interactive presentation slides using Jupyter Notebook and reveal.js.</CardTitle>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>;
  }
}

export default Home;