import React, { Component } from 'react';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import './App.css';

class App extends Component {
  state = {
    notes: [
        {
            note: 'Create App',
            details: 'Get app up and working',
        }
    ],
    note: '',
    details: '',
}
  render() {
    return (
      <div className="App">
        <NoteList notes={this.state.notes}/>
        <NewNote handleInput={this.handleInput} submitNote={this.submitNote}/>
      </div>
    );
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value});
}

submitNote = (e) => {
    e.preventDefault();
    let newNote = this.state.note;
    let newDetails = this.state.details;
    let newObj = {newNote, newDetails};
    this.setState({
      notes: this.state.notes + newObj,
    })
    this.setState({
        note: '',
        details: '',
    });
  }
}

export default App;
