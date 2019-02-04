import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import posts from '../../data/posts';

class Posts extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {posts.map(function (post, i) {
            moment.locale('en');
            return (
              <Media key={i}>
                <Media left top href={post.url}>
                  <img src={require('../../static/logo_' + post.logo + '.png')} alt={post.title}/>
                </Media>
                <Media body>
                  <Media heading>
                    <a href={post.url}>{post.title}</a>
                    <span className='jobTotalDuration'>{moment(post.date).format('YYYY, MMM Do')}</span>
                  </Media>
                  {post.description}
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
