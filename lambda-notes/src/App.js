import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedNoteList: [],
      noteInList: null
    };
  }

  addToSavedList = note => {
    const savedNoteList = this.state.savedNoteList;
    const findNote = savedNoteList.find(el => note.id === el.id);
    if (findNote) {
      this.setState({ noteInList: `This note already exists.` });
      setTimeout(() => this.setState({ noteInList: null }), 2000);
  } else {
    savedNoteList.push(note);
  }
  this.setState({ savedNoteList });
};

  render() {
    const { noteInList } = this.state;
    return (
      <div className="App">
        { noteInList !== null ? (
          <h3 className="note-warning">{noteInList}</h3>
        ) : null }
         <SavedNoteList list={this.state.noteList} />
         <Route exact path="/" component={NoteList} />
         <Route
          path="/notes/:id"
          render={props => (
            <Note {...props} addToSavedList={this.addToSavedList} />
          )}
          />
      </div>
    );
  }
}

export default App;
