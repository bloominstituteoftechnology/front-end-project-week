import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>POSTS INDEX</div>
    );
  }
}

// export default PostsIndex;
export default connect(null, { fetchPosts })(PostsIndex);