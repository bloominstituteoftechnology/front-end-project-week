import React, { Component } from 'react';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
 
  state = {
    notes: [
        {
            note: 'Create App',
            details: 'Get app up and working',
            id: 0,
        },
        {
          note: 'placeholder',
          details: 'placeholder',
          id: 1,
        },
    ],
    note: '',
    details: '',
}

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to='/'>Notes</NavLink>
            </li>
            <li>
              <NavLink to='/noteform'>Create new note</NavLink>
            </li>
          </ul>
          <Route path='/' component={this.notes} exact/>
          <Route path='/noteform' component={this.noteForm} />
          <Route path='/:id' component={this.viewNote} />

        </div>
      </Router>
    );
  }

 

  viewNote = (props) => {
    console.log(props);
    const id = props.match.params.id;
    console.log(id);
    return (
      <ViewNote note={this.state.notes[id].note} details={this.state.notes[id].details}  />
    )
  }
  noteForm = () => {
    return (
      <NewNote handleInput={this.handleInput} submitNote={this.submitNote} noteValue={this.state.note} detailsValue={this.state.details} />
    )
  }
  notes = () => {
    return (
      <NoteList notes={this.state.notes}  navNote={this.navToNote}/>
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

idExtractor = (event) => {
  event.preventDefault();
  return event.target.id;
}

}

export default App;
