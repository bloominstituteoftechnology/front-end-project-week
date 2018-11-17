import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import NotesContainer from './components/NotesContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText) {
    this.setState({noteText: noteText.target.value})
  }

  //Add a note
  addNote() {
    if (this.state.noteText === '') { return }
    
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });  
    }
  }

  // Delete a note
  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr}) //Update notes array
  }



  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
        deleteMethod={() => this.deleteNote(key)} />
    })

    return (
      <div className="App">
        <div>         
          <Sidebar />
          </div>
        <div className="notescontainer">
          <NotesContainer />
        {notes}        
        </div>
        </div>
    );
  }
}

export default App;
