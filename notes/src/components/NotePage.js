import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MarkdownPreview } from 'react-marked-markdown';
import { connect } from 'react-redux';
import { fetchPost, confirmDelete } from '../actions';

class NotePage extends Component{
  componentWillMount(){
    this.props.fetchPost(this.props.match.params.id);
  }

  renderPicker(){
    if(this.props.isFetching){
      return <div>Loading...</div>
    } else if(!this.props.note || this.props.note.name){
      return(
        <React.Fragment>
          <h1>NOTE NOT FOUND</h1>
          <Link to="/"><button className="btn">Return to Note List</button></Link>
        </React.Fragment>
      )
    } else{
      return(
        <React.Fragment>
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
          <MarkdownPreview value={this.props.note.content} />
        </React.Fragment>
      )
    }
  }

  render(){
    return(
      <div className="note-page">
        { this.renderPicker() }
      </div>
  )}
}

const mapStateToProps = state => {
  return {
    note: state.selectedPost,
    isFetching: state.isFetchingPost
  }
}

export default withRouter(connect(mapStateToProps, { fetchPost, confirmDelete })(NotePage));
