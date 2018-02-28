import React, { Component } from 'react';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
      this.state = {
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
        id: '',
    }

    this.viewNote = this.viewNote.bind(this);
    this.noteForm = this.noteForm.bind(this);
    this.notes = this.notes.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitNote = this.submitNote.bind(this);
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
              <NavLink to='/createNote'>Create new note</NavLink>
            </li>
          </ul>
          <Route path='/' component={this.notes} exact/>
          <Route path='/createNote' component={this.noteForm} exact/>
          <Route path='/:id' component={this.viewNote} />

        </div>
      </Router>
    );
  }

 componentDidMount () {
   
}

  viewNote = (props) => {
    
    console.log(props.match.params);
    let id = props.match.params.id;
    if(id === 'createNote') {
      return null;
    }
    let note = this.state.notes[id].note;
    let details = this.state.notes[id].details;
    return (
      <ViewNote note={note} details={details}  />
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
        id: this.state.notes.length,
      };
      this.setState({
        notes: [...this.state.notes, newObj],
      })
      this.setState({
          note: '',
          details: '',
          id: '',
      });
    }
  }

  idExtractor = (event) => {
    event.preventDefault();
    return event.target.id;
  }

}

export default App;
