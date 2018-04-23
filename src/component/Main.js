import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote, updateNote, deleteNote } from '../actions';
import { logout } from '../actions';

import Notes from './Notes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: -1
    };
  }

  componentDidMount() {
    if (this.props.notes.length > 0) {
      const defaultNote = this.props.notes[0];
      this.setState({
        title: defaultNote.title,
        content: defaultNote.content,
        id: defaultNote._id
      });
    }
  }

  logOut = event => {
    event.preventDefault();
    this.props.logout();
  };

  addNoteToggle = () => {

    if (this.state.title.length > 0 || this.state.content.length > 0) {
      let check = window.confirm('You want to discard your changes?')
      if (check) {
        this.setState({
          title: '',
          content: '',
          id: -1
        });
      } else {
        return;
      }
    }
    this.setState({
      title: '',
      content: '',
      id: -1
    });
  };

  noteChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = event => {
    event.preventDefault();
    const editNote = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content
    };
    const note = {
      title: this.state.title,
      content: this.state.content
    };

    if (this.state.content.length === 0 || this.state.title.length === 0) {
      alert(
        'Please provide both title and content for your note'
      );
    } else if (
      this.state.content.length > 0 &&
      this.state.title.length > 0 &&
      this.state.id !== -1
    ) {
      this.props.updateNote(editNote);
    } else if (
      this.state.id === -1 &&
      this.state.content.length > 0 &&
      this.state.title.length > 0
    ) {
      this.props.addNote(note);
      this.setState({
        title: '',
        content: '',
        id: -1
      });
    }
  };

  previewNote = (title, content, id) => {
    const notetitle = title;
    const notecontent = content;
    const noteId = id;
    this.setState({ title: notetitle, content: notecontent, id: noteId });
  };

  deleteNote = event => {
    if (this.state.id === -1) {
      this.setState({
        title: '',
        content: '',
        id: -1
      });
    } else {
      event.preventDefault();
      this.props.deleteNote(this.state.id);
      this.setState({
        title: '',
        content: '',
        id: -1
      });
    }
  };

  render() {
    return (
      <div className='main'>
        <div calssNamte='notes'>
          <Notes previewNote={this.previewNote} />
        </div>
        <div className='noteform'>
          <form onSubmit={this.updateNote}>
            <input
              className='noteform-title'
              name='title'
              onChange={this.noteChangeHandler}
              value={this.state.title}
              type='text'
              placeholder='Title'
              required
            />
            <br />
            <textarea
              className='noteform-content'
              name='content'
              onChange={this.noteChangeHandler}
              value={this.state.content}
              type='text'
              placeholder='Add Content'
              required
            />
            <br />
          </form>
          <div className='note-buttons'>
            <button className='add' onClick={this.addNoteToggle}>✚</button>
            <button className='edit' onClick={this.updateNote}>✓</button>
            <button className='delete' onClick={this.deleteNote}>✖</button>
            <button className='logout' style={this.props.loggedIn ? {color: 'black'} : {display: 'none'}} onClick={this.logOut}>
            ´ ▽ ` )ﾉ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    notes: state.notes,
    id: state.id
  };
};

export default withRouter(
  connect(mapStateToProps, { addNote, updateNote, deleteNote, logout })(Main)
);
