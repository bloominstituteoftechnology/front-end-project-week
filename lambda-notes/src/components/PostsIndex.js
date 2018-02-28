import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import '../styles/PostsIndex.css';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    console.log("componentDidMount > " + this.props.fetchPosts())
  }

  renderPosts() {
    // Utilizing the Lodash Map Function to map over the object and return an array.
    return _.map(this.props.posts, post => {
      return (
        <div key={post.id}>
          {post.title}
          {post.categories}
          {post.content}
        </div>
      );
    });
  }

  render() {
    console.log("In render > " + this.props.posts)
    return (
      <div className="notesContainer">
        <div className="notesContainerHeader">Your Notes</div>
          <div className="notesBody">
            <div className="noteCard">
              
                {this.renderPosts()}

                {/* Code I'd Like To Use */}
                {/* _.map(this.props.posts, post => {
                  return (
                    <div key={post.id}>
                    console.log("HELLOOOO")
                      console.log({post.title})
                      {post.categories}
                      {post.content
                    </div>
                  );
                })} */}
              



            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);