import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { getNotes, addNote, getNote, deleteNote, updateNote, activeNoteHandler, searchHandler } from '../actions';

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

  searchList = () => {
    // if(!this.props.notes.length) return this.props.notes;
    return this.props.notes.filter(note => 
      note.title.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
      ||
      note.textBody.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
    )
  }

  render() {
    return (
      <div className={'app-container'}>
        <Header 
          searchHandler={this.props.searchHandler}
        />
        <ToolBar />

        <NoteContainer>
          <Route 
            path='/'
            render={props => 
              <NoteForm
                {...props}
                onSubmit={this.formSubmited}
              />
            }
          />

          <Route 
            path='/'
            render={props =>
              <NoteList 
                {...props}
                notes={this.searchList()} 
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
  const { notes, activeNote, searchValue } = state;
  return { notes, activeNote, searchValue };
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
    searchHandler,
  }
)(App));
