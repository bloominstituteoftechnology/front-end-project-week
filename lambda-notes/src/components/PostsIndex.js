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
        <div key={post.id}>
          {post.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="notesContainer">
        <div className="notesContainerHeader">Your Notes</div>
          <div className="notesBody">
            <ul>
              {this.renderPosts()}
            </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// export default PostsIndex;
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);