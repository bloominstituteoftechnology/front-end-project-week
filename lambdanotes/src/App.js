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
        <NewNote handleInput={this.handleInput} submitNote={this.submitNote} noteValue={this.state.note} detailsValue={this.state.details} />
      </div>
    );
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value});
}

submitNote = (e) => {
    e.preventDefault();
    if(this.state.note.length > 0 && this.state.details.length > 0) {
    let newObj = {
      note: this.state.note, 
      details: this.state.details,
    };
    this.setState({
      notes: [...this.state.notes, newObj],
    })
    this.setState({
        note: '',
        details: '',
    });
  }
}
}

export default App;
