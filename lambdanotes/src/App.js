import React, { Component } from 'react';
import NoteContainer from './Note-Container';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { title: 'test',
      content: 'test'},
        { title: 'test2',
      content: 'test2'},
        { title: 'test3',
      content: 'test3'}
      ],
      newNote: {
        title: '',
        content: ''
      },
      visible: true
    }
    this.addNote = this.addNote.bind(this);
    this.handleNewNoteInput = this.handleNewNoteInput.bind(this);
  }

  addNote = (event) => {
    event.preventdefault();
    const note = this.state.notes;
    note.push(this.state.newNote);
    console.log(note);
    this.setState({
      newNote: {
        title: '',
        content: ''
      },
      note: note,
    })
  }

  handleNewNoteInput = (event) => {
    this.setState({newNote: event.target.value})
  }



  render() {
    return (
      <div className="App">
        <div className='Left-bar'>
          <h1>Lambda Notes</h1>
          <div>View Notes</div>  
          <div>
            <h5>Create New Note+</h5>
            <form onSubmit={this.addnote}>
              <input onChange={this.handleNewNoteInput} type='text' placeholder='Title' value={this.state.newNote.title}></input>
              <input onChange={this.handleNewNoteInput} type='text' placeholder='Content' value={this.state.newNote.content}></input>
              <button type='submit'>Save</button> 
            </form>  
          </div>  
        </div>
        <NoteContainer notes={this.state.notes} />    
      </div>
    );
  }
}

export default App;
