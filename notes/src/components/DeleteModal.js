import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelDelete, deletePost, fetchPosts } from '../actions';

class DeleteModal extends React.Component{
  deleteAndRedirect(){
    this.props.deletePost(this.props.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div className="delete-message">
            Are you sure you want to delete this?
          </div>
          <div
            className="btn btn-delete"
            onClick={()=>this.deleteAndRedirect()}
          >
            Delete
          </div>
          <div
            className="btn"
            onClick={()=>this.props.cancelDelete()}
          >
            No
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.selectedPost.id
  }
}

export default withRouter(connect(mapStateToProps, { cancelDelete, deletePost, fetchPosts })(DeleteModal));
