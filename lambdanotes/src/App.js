import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Home from './components/Home';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import Notes from './components/Notes';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      madeNotes: [],
      note: {
        tag: "",
        title: "",
        textBody: "",
      },
      updatingNote: false,
    };
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({ madeNotes: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange = event => {
    this.setState({
      noe: {...this.state.note, [event.target.title]: event.target.value,}
    });
  }

  // handleAddNewNote = event => {
  //   event.preventDefault();
  //   console.log("We've got a new note here!")
  //   axios.post()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <div>
          <ul className="navigation">
            <li className='navButtons'>
              <NavLink exact to="/" activeClassName="activeNavButton">
                Home
              </NavLink>
            </li>
            <li className='navButtons'>
              <NavLink exact to="/notes" activeClassName="activeNavButton">
                Notes
              </NavLink>
            </li>
            <li className='navButtons'>
              <NavLink exact to="/notes/notesform" activeClassName="activeNavButton">
                Add New Notes
              </NavLink>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" render={props => (
            <NotesList {...props} notesList={this.state.madeNotes} />
          )}
          />
          <Route path="/notes/notesform" render={props => (
            <Notes {...props}
              notesList={this.state.madeNotes}
              handleDeleteNotes={this.handleDeleteNotes}
              updateNoteForm={this.updateNoteForm} />
              )}
            />
          <Route
            path="/notesform"
            render={props => (
              <NotesForm
                {...props}
                note={this.state.note}
                handleAddNewNote={this.handleAddNewNote}
                handleChange={this.handleChange}
                handleUpdateNotes={this.handleUpdateNotes}
                updatingNote={this.state.updatingNote}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
