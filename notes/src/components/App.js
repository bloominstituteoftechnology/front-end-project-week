import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { getNotes, addNote, getNote, deleteNote, updateNote, activeNoteHandler} from '../actions';

import Header from './Header';
import ToolBar from './ToolBar';
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import NoteModule from './NoteModule'

import styled from 'styled-components';


const NoteContainer = styled.div`
  margin-left: 280px;
  display: block;
  direction: ltr;
  width: calc(100vw - 280px);
`;

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

  formSubmited = (title, textBody, history) => {
    if (!title.length || !textBody.length) return;
    const note = {title, textBody};
    this.props.addNote(note);
    history.push('/');
  }

  render() {
    return (
      <div className={'app-container'}>
        <Header />
        <ToolBar />

        <NoteContainer>
          <Route 
            path='/'
            exact
            render={props => 
              <NoteForm
                {...props}
                onSubmit={this.formSubmited}
              />
            }
          />

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
        </NoteContainer>

        <Route 
          path='/note/:id'
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
