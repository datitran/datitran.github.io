import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import profile from '../../data/profile';
import './ProfileSummary.scss';

class ProfileSummary extends React.Component {
  render() {
    return <Jumbotron>
      <Container className='profilesummary__container'>
        <h1 className='display-4'>{profile.title}</h1>
        <p className='lead'>{profile.summary}</p>
      </Container>
    </Jumbotron>;
  }
}

export default ProfileSummary;
