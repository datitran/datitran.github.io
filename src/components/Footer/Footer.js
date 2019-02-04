import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <Container>
          <a href='https://www.linkedin.com/in/dat-tran-a1602320/'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://github.com/datitran'><FontAwesomeIcon icon={faGithub}  /></a>
          <a href='https://medium.com/@datitran'><FontAwesomeIcon icon={faMedium}  /></a>
          <a href='https://twitter.com/datitran'><FontAwesomeIcon icon={faTwitter}  /></a>
          <p>copyright &copy; Dat Tran 2016-{(new Date().getFullYear())}</p>
        </Container>
      </footer>
    )
  }
}

export default Footer;
