import React, { Component } from 'react';
import NotesList from '../src/Components/NotesList';
// import CreateNote from '../src/Components/CreateNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        // noteTitle: 'I am a started note',
        // noteBody: 'I am a started note',
        newNote: '',
        notes: [{
          title: 'Hello',
          body: 'World'
        }]
    };
    
  }

  // componentDidMount() {
  //   this.setState({notes})
  // }

  noteHandler = (e) => {
    console.log('this is a test');
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmitNote = () => {
    const {notes} = this.state;
    const myNote = {title: this.state.newNoteTitle, body: this.state.newNoteBody}
    notes.push(myNote);
    this.setState({notes, newNoteTitle: '', newNoteBody: ''});
  }

  createNewCard(props) {
    console.log('testing create new card.' + props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="leftbox">
              <h3 className="title">Lambda</h3>
              <h3 className="title">Notes</h3>
                <button className ="Buttons">View Your Notes</button>
                <button className ="Buttons" onClick={() => this.createNewCard(this.state)}>+ Create New Note</button>
            </div>
          </div>
          <div className="col-9">
            <div className="rightbox">
                <h3>Your Notes:</h3>
                <input type= 'text' placeholder='Add Note Title' name='newNoteTitle' value={this.state.newNoteTitle} onChange={this.noteHandler}/>
                <input type= 'text' placeholder='Add Note Body' name='newNoteBody' value={this.state.newNoteBody} onChange={this.noteHandler}/>
              <button onClick={this.handleSubmitNote}>Add Note</button>
              <NotesList notes={this.state.notes}/>
            </div>
          </div>
        </div>
      </div> // container!!!
    );
  }
}

export default App;
