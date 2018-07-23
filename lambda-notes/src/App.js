import React, { Component } from 'react';
import './App.css';
import NotesList from './Components/NotesList';
import CreateNoteForm from './Components/CreateNoteForm'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteEntries: [
        {
          title: "bleep",
          textBody: "do this and that",
          tags: ["one", "two", "three"],
          id: 1
        },

        {
          title: "bloop",
          textBody: "do that and this tomorrow",
          tags: ["four", "five", "six"], 
          id: 2
        },

        {
          title: "florn",
          textBody: "beep soon and this tomorrow",
          tags: ["seven", "eight", "nine"], 
          id: 3
        }
      ],

      noteEntry: {
        title: "", 
        textBody: "", 
        tags: []
      }
    }
  }


  addNoteEntry = (e) => {
    e.preventDefault();
    const noteEntries = this.state.noteEntries.slice();
  }


  render() {
    return (
      <div>
        Lambda Notes App!!!!!!!!!!!!
        <br />
        <br />

        <div>
          NOTES LIST:
          <NotesList
            noteEntries = {this.state.noteEntries}
          />
        </div>
        <br />
        <br />
        CREATE NOTE: 
        <CreateNoteForm /> 
      </div>
    );
  }
}

export default App;
