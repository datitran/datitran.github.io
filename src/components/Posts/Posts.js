import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import posts from '../../data/posts';
import './Posts.scss';

class Posts extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          <h2 className='sectionHeading projects__heading'>Posts</h2>
          {posts.map(function (post, i) {
            moment.locale('en');
            return (
              <Media key={i}>
                <Media left top href={post.url}>
                  <img className='posts__image' src={require('../../static/' + post.image_file)} alt={post.title}/>
                </Media>
                <Media body>
                  <Media heading>
                    <a href={post.url} target='_blank'>{post.title}</a>
                    <span className='jobTotalDuration'>{moment(post.date).format('YYYY, MMM Do')}</span>
                  </Media>
                  <i className='posts__color'>{post.description}</i>
                </Media>
              </Media>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Posts;
