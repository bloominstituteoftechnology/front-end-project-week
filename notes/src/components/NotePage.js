import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MarkdownPreview } from 'react-marked-markdown';
import { connect } from 'react-redux';
import { fetchPost, confirmDelete } from '../actions';

class NotePage extends Component{
  componentWillMount(){
    this.props.fetchPost(this.props.match.params.id);
  }

  render(){
    return(
      <React.Fragment>
        { this.props.isFetching ? (
          <div>Loading...</div>
        ):(
          <div className="note-page">
            <div className="links">
              <Link to={`/note/${this.props.match.params.id}/edit`}>edit</Link>
              <div
                className="delete"
                onClick={this.props.confirmDelete}
              >
                delete
              </div>
            </div>
            <div className="title">{this.props.note.title}</div>
            <MarkdownPreview value={this.props.note.textBody} />
          </div>
        ) }
      </React.Fragment>
  )}
}

const mapStateToProps = state => {
  return {
    note: state.selectedPost,
    isFetching: state.isFetchingPost
  }
}

export default withRouter(connect(mapStateToProps, { fetchPost, confirmDelete })(NotePage));
