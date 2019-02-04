import React from 'react';
import {Jumbotron, Container} from "reactstrap";
import profile from '../data/profile';

class ProfileSummary extends React.Component {
  render() {
    return <Jumbotron>
      <Container>
        <h1 className="display-3">{profile.title}</h1>
        <p className="lead">{profile.summary}</p>
      </Container>
    </Jumbotron>;
  }
}

export default ProfileSummary;
