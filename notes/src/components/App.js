import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { NoteContainer }from '../styles';

import { 
  getNotes, 
  addNote, 
  getNote, 
  deleteNote, 
  updateNote, 
  activeNoteHandler, 
  searchHandler, 
  setSortMode, 
  menuToggle,
  noteChecked,
  noteUnChecked,
  noteCheckedClear,
  deleteChecked
} from '../actions';

import Header from './Header';
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

  formSubmited = (title, textBody, history) => {
    if (!title.length || !textBody.length) return;
    const note = {title, textBody};
    this.props.addNote(note);
    history.push('/');
  }

  searchList = () => {
    const filterdNotes = this.props.notes.filter(note => 
      note.title.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
      ||
      note.textBody.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
      );

    if (this.props.sortMode === 'default') {
      return filterdNotes;
    }
    if (this.props.sortMode === 'alpha') {
      return filterdNotes.sort((a, b) => {
          var nameA = a.title.toLowerCase(); // ignore upper and lowercase
          var nameB = b.title.toLowerCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
    }
    if (this.props.sortMode === 'reverse-alpha') {
      return filterdNotes.sort((a, b) => {
        var nameA = a.title.toLowerCase(); // ignore upper and lowercase
        var nameB = b.title.toLowerCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }).reverse();
    }
  }

  render() {
    return (
      <div className={'app-container'}>
        <Header 
          searchHandler={this.props.searchHandler}
          refreshList={this.props.getNotes}
          sortMode={this.props.sortMode}
          setSortMode={this.props.setSortMode}
          menuToggle={this.props.menuToggle}
        />
        <ToolBar 
          notes={this.props.notes}
          showMenu={this.props.showMenu}
          menuToggle={this.props.menuToggle}
        />

        <NoteContainer showMenu={this.props.showMenu}>
          <Route 
            path='/'
            render={props => 
              <NoteForm
                {...props}
                onSubmit={this.formSubmited}
                deleteChecked={this.props.deleteChecked}
                checkedNotes={this.props.checkedNotes}
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
                noteChecked={this.props.noteChecked}
                noteUnChecked={this.props.noteUnChecked}
                fetchingNote={this.props.fetchingNote}
                fetchingNotes={this.props.fetchingNotes}
                addingNote={this.props.addingNote}
                updatingNote={this.props.updatingNote}
                deletingNote={this.props.deletingNote}
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
  const { 
    notes, 
    activeNote, 
    searchValue, 
    sortMode, 
    showMenu, 
    checkedNotes,
    fetchingNote,
    fetchingNotes,
    addingNote,
    updatingNote,
    deletingNote,
  } = state;

  return { 
    notes, 
    activeNote, 
    searchValue, 
    sortMode, 
    showMenu, 
    checkedNotes,
    fetchingNote,
    fetchingNotes,
    addingNote,
    updatingNote,
    deletingNote,
  };
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
    setSortMode,
    menuToggle,
    noteChecked,
    noteUnChecked,
    noteCheckedClear,
    deleteChecked,
  }
)(App));



