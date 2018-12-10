import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { NotesContainer }from '../styles';

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
        <Header/>
        <ToolBar 
          notes={this.props.notes}
          showMenu={this.props.showMenu}
          menuToggle={this.props.menuToggle}
        />

        <NotesContainer showMenu={this.props.showMenu}>
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
          <Route path='/' render={props => <NoteList {...props}/>}/>
        </NotesContainer>

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
  } = state;

  return { 
    notes,
    activeNote, 
    searchValue, 
    sortMode, 
    showMenu,
    checkedNotes,
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
    deleteChecked,
  }
)(App));



