import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NotesList from '../NotesList/NotesList';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {title: 'note1 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'note2 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'note3 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    ],
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="Notes-Container">
          <h2>Your Notes: </h2>
          {this.state.notes.map((note, index) => <NotesList id={index} note={note}/>)}
        </div>
      </div>
    );
  }
}

export default App;
