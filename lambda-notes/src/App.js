import React, { Component } from 'react';
import './App.css';
import NotesList from './Components/NotesList';
import CreateNoteForm from './Components/CreateNoteForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      noteEntries: [
        {
          title: 'bleep',
          textBody: 'do this and that',
          tags: ['one', 'two', 'three'],
          id: 1
        },

        {
          title: 'bloop',
          textBody: 'do that and this tomorrow',
          tags: ['four', 'five', 'six'],
          id: 2
        },

        {
          title: 'florn',
          textBody: 'beep soon and this tomorrow',
          tags: ['seven', 'eight', 'nine'],
          id: 3
        }
      ],

      noteEntry: {
        title: '',
        textBody: '',
        tags: [],
        id: ''
      }
    }
  }


  addNoteEntry = (e) => {
    e.preventDefault();
    const noteEntries = this.state.noteEntries.slice();
    const noteEntry = {
      title: this.state.noteEntry.title[0],  // zero here because this is registering as an array without it when I add. don't know why!
      textBody: this.state.noteEntry.textBody[0], // zero here because this is registering as an array without it when I add. don't know why!
      tags: [],
      id: Date.now()
    }

    const noteEntryBlank = {
      title: '',
      textBody: '',
      tags: [],
      id: ''
    }

    noteEntries.push(noteEntry);
    this.setState({noteEntries: noteEntries, noteEntry: noteEntryBlank})
  }

    createNoteTitleHandler = e => {
      console.log(e.target.value);

      this.setState({
        noteEntry: {
          title: [e.target.value],
          textBody: this.state.noteEntry.textBody,
          tags: this.state.noteEntry.tags
        }
      })
    }

    createNoteTextBodyHandler = e => {
      console.log(e.target.value);

      this.setState({
        noteEntry: {
          title: this.state.noteEntry.title,
          textBody: [e.target.value],
          tags: this.state.noteEntry.tags
        }
      })
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
              noteEntries={this.state.noteEntries}
            />
          </div>
          <br />
          <br />
          CREATE NOTE:
        {/* <Route path = "/createNote" component = {CreateNoteForm} /> */}
          <CreateNoteForm
            createNoteTitleHandler={this.createNoteTitleHandler}
            createNoteTextBodyHandler={this.createNoteTextBodyHandler}
            addNoteEntry = {this.addNoteEntry}
            noteEntry = {this.state.noteEntry}
          />
        </div>
      );
    }
  }

  export default App;
