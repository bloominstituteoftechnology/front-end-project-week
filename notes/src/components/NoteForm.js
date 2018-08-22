import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, editPost, fetchPosts } from '../actions';

class NoteForm extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      textBody: '',
    }
  }

  componentDidMount(){
    if(this.props.match.params.id){
      const note = this.props.selectedPost;
      this.setState({title: note.title, textBody: note.textBody});
    }
    console.log(this.props);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.match.params.id){
      const updatedNote = {
        title: this.state.title,
        textBody: this.state.textBody
      };
      this.props.editPost(this.props.match.params.id, updatedNote);
      this.props.fetchPosts();
      this.props.history.push('/');
    } else {
      const newNote = {
        title: this.state.title,
        textBody: this.state.textBody
      };
      this.props.createPost(newNote);
      this.props.fetchPosts();
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
          id="textBody"
          placeholder="Note Content"
          onChange={this.handleChange}
          name="textBody"
          value={this.state.textBody}
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
