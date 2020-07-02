import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import profile from '../../data/profile';
import './ProfileSummary.scss';

class ProfileSummary extends React.Component {
  render() {
    return <Jumbotron className='profilesummary__header'>
      <Container className='profilesummary__container'>
        <h1 className='profilesummary__display_4'>{profile.title}<span role='img' aria-label='Tech'>👨🏻‍💻</span></h1>
        <p className='profilesummary__lead'>{profile.summary}</p>
      </Container>
    </Jumbotron>;
  }
}

export default ProfileSummary;
