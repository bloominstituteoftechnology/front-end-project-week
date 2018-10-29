import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { getNotes, addNote, getNote, deleteNote, updateNote, activeNoteHandler} from '../actions';
import ToolBar from './ToolBar';
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import NoteModule from './NoteModule'


class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }


  noteClicked = (ev, id, history) => {
    ev.preventDefault();
    history.push(`/note/${id}`)
  }

  deleteNote = (ev, id) => {
    ev.preventDefault();

  }

  formSubmited = (title, body, history) => {
    if (!title.length || !body.length) return;
    const note = {title, body};
    this.props.addNote(note);
    history.push('/');
  }

  render() {
    return (
      <div className={'app-container'}>
        <ToolBar />

        <Route 
          path='/'
          exact
          render={props =>
            <NoteList 
              {...props}
              notes={this.props.notes} 
              noteClicked={this.noteClicked}
            />
          }
        />

        <Route 
          path='/add'
          exact
          render={props => 
            <NoteForm
              {...props}
              onSubmit={this.formSubmited}
            />
          }
        />

        <Route 
          path='/note/:id'
          exact
          render={props => 
            <NoteModule
              {...props}
              note={this.props.activeNote}
              getNote={this.props.getNote}
              deleteNote={this.props.deleteNote}
              updateNote={this.props.updateNote}
              activeNoteHandler={this.props.activeNoteHandler}
            />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notes, activeNote } = state;
  return { notes, activeNote };
}

export default withRouter(connect(
  mapStateToProps, 
  { 
    getNotes, 
    addNote, 
    getNote, 
    deleteNote,
    updateNote,
    activeNoteHandler,
  }
)(App));
