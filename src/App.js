import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';
import { BrowserRouter, Route } from 'react-router-dom';

import { gettingAllNotes, addNote } from './actions';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import SingleNote from './components/SingleNote';
import UpdateForm from './components/UpdateForm';
import SideBar from './components/SideBar';
import Loading from './components/Loading';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.gettingAllNotes();
  }

  handleDeleteNote = () => {
    const { id } = this.props.selectedNote;
    this.props.deleteNote(id);
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SplitPane split="vertical" defaultSize={250}>
            <SideBar />
            <div className="right">
              {this.props.gettingNotes ? (
                <Route exact path="/" component={Loading} />
              ) : (
                <Route exact path="/" render={(props) => <Notes notes={this.props.notes} />} />
              )}
              <Route path="/new" render={(props) => <NoteForm addNote={this.props.addNote} />} />

              <Route path="/viewnote" component={SingleNote} />
              <Route path="/update" component={UpdateForm} />
            </div>
          </SplitPane>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes,
    gotNotes: state.gotNotes,
    selectedNote: state.selectedNote,
    addingNote: state.addingNote,
    addedNote: state.addedNote,
    updatingNote: state.updatingNote,
    updatedNote: state.updatedNote,
    deletingNote: state.deletingNote,
    deletedNote: state.deletedNote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { gettingAllNotes, addNote }
)(App);
