import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import '../styles/PostsShow.css';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params.id; //Provided by React-Router
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params.id;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }
 
    return (
      <div className="singleNoteContainer">
        <button
          onClick={this.onDeleteClick.bind(this)}
        >
        Delete Note
        </button>
        <div className="singleTitle">{post.title}</div>
        <div className="singleCategories">Categories: {post.categories}</div>
        <div className="singleContent">{post.content}</div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);