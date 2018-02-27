import React, { Component } from 'react';
import './css/App.css';
import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
//import CreateNoteContainer from './components/CreateNoteContainer/CreateNoteContainer';
import Panel from './components/Panel/Panel';

class App extends Component {
  state = {
    notes: [],
    showAddWin: null
  };

  componentDidMount() {
    this.setState({
      notes: dummyData,
      showAddWin: false,
    });
  }

  render() {
    return (
      <div className="App">
      {this.state.showAddWin}
        <Panel showAddWin={this.state.showAddWin} />
        <div className="Notes">
          {this.state.notes.map((note, i) => {
            return (
              <NoteContainer key={i} noteTitle={note.noteTitle} noteContent={note.noteContent} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
