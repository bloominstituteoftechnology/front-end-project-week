import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Router>
        <div className="App">
          <Route path='/' component={this.notes} exact/>
          <Route path='/noteform' component={this.noteForm} />
        </div>
      </Router>
    );
  }
  noteForm = () => {
    return (
      <NewNote handleInput={this.handleInput} submitNote={this.submitNote} noteValue={this.state.note} detailsValue={this.state.details} />
    )
  }
  notes = () => {
    return (
      <NoteList notes={this.state.notes} viewNote={this.handleViewNote}/>
    )
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

handleViewNote = (e) => {
  return (
    <ViewNote note={this.state.notes.note}/>
  )
}
}

export default App;
