import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, editPost, fetchPosts } from '../actions';

class NoteForm extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      content: '',
    }
  }

  componentDidMount(){
    if(this.props.match.params.id){
      const note = this.props.selectedPost;
      this.setState({title: note.title, content: note.content});
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.match.params.id){
      const updatedNote = {
        title: this.state.title,
        content: this.state.content
      };
      this.props.editPost(this.props.match.params.id, updatedNote);
      this.props.history.push('/');
    } else {
      const newNote = {
        title: this.state.title,
        textBody: this.state.textBody
      };
      this.props.createPost(newNote);
      this.props.history.push('/');
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="note-form">
        <label htmlFor="title">Create New Note: </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Note Title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <textarea
          id="content"
          placeholder="Note Content"
          onChange={this.handleChange}
          name="content"
          value={this.state.content}
        />
        <button className="btn" type="submit">Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEditing: state.isEditing,
    selectedPost: state.selectedPost
  }
}

export default withRouter(connect(mapStateToProps, { createPost, editPost, fetchPosts })(NoteForm));
