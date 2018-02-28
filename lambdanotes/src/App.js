import React, { Component } from 'react';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import UpdateNote from './Components/UpdateNote';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
      this.state = {
        notes: [
            {
                note: 'Note Title',
                details: 'Get app up and working',
                id: 0,
            },
              {
                note: 'Note Title',
                details: 'Get app up and working',
                id: 1,
            },
            {
                note: 'Note Title',
                details: 'Get app up and working',
                id: 2,
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
    this.noteDelete = this.noteDelete.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="mainContainer">
          <div className="navBar">
            <ul>
              <li>
                <button>
                <NavLink to='/'>View Your Notes</NavLink>
                </button>
              </li>
              <li>
                <button>
                <NavLink to='/createNote'>+Create New Note</NavLink>
                </button>
              </li>
            </ul>
          </div>
          <div className="mainContent">
            <Route path='/' component={this.notes} exact/>
            <Route path='/createNote' component={this.noteForm} exact/>
            <Route path='/:id' component={this.viewNote} />
            <Route path='/:id/update' component={this.updateNote} />
          </div>
        </div>
      </Router>
    );
  }

 componentDidMount () {
   
}

  viewNote = (props) => {
    
    console.log(props.match.params);
    let id = props.match.params.id;
    let noteDelete = this.noteDelete;
    if(id === 'createNote') {
      return null;
    }
    let note = this.state.notes[id].note;
    let details = this.state.notes[id].details;
    return (
      <ViewNote note={note} details={details} noteDelete={noteDelete}  />
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

  updateNote = () => {
    return (
    <UpdateNote notes={this.state.notes}/>
    )
  }
  submitUpdate = (e) => {
    e.preventDefault();
    let updateObj = {
      note: this.state.note,
      details: this.state.details,
    }
  }

   noteDelete = (e) => {
    console.log(e);
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    newState.notes.event.target = null;
    this.setState({ newState })
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
}

export default App;
