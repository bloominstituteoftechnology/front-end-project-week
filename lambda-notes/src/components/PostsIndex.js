import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import '../styles/PostsIndex.css';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    //Utilizing the Lodash Map Function to map over the object and return an array.
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="notesContainer">
        <h3>Your Notes</h3>
        <hr/>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// export default PostsIndex;
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);