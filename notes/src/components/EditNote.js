import React from 'react';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../actions';
import { AddNoteWrapper, AddNoteForm }from './AddNote';

// needs refactor with axios get request that uses this.props.match.params.id inside componentDidMount
// Currently only works when clicked on from the home page -- if someone tries to navigate directly to the specific url, app crashes
class EditNote extends React.Component {
  constructor(props) {
    super(props)
    const { note } = this.props.location.state;

    this.state = {
      id: note.id,
      title: note.title,
      content: note.content,
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  deleteThisNote = () => {
    // TODO: pop up are you sure modal
    this.props.dispatch(deleteNote(this.state.id))
    this.props.history.push('/')
  }

  editThisNote = e => {
    e.preventDefault();
    let editedNote = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
    }
    this.props.dispatch(editNote(editedNote))
    alert("Note Updated");
  }

  render() {
    return (
      <AddNoteWrapper>
        <h2>EDIT NOTE</h2>
        <AddNoteForm onSubmit={this.editThisNote}>
          <input type='text' value={this.state.title} name='title' onChange={this.handleChange} required/>
          <textarea type='text' value={this.state.content} name='content' onChange={this.handleChange} required/>
          <button type='submit'>Edit note</button>
        </AddNoteForm>
      </AddNoteWrapper>
  )
  }
};

export default connect()(EditNote);