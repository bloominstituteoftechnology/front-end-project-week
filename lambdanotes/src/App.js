import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Home from './components/Home';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import Notes from './components/Notes';
import axios from 'axios';

const blankNoteForm = {
  title: "",
  textBody: "",
}

class App extends Component {
  constructor() {
    super(props);
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
    .catch(err => {console.log(err)});
  }

  // handleChange = event => {
  //   this.setState({
  //     noe: {...this.state.note, [event.target.title]: event.target.value,}
  //   });
  // }

  // handleAddNewNote = event => {
  //   event.preventDefault();
  //   console.log("We've got a new note here!")
  //   axios.post('https://killer-notes.herokuapp.com/note/create', this.state.note)
  //   .then(response => this.setState({ madeNotes: response.data, note: blankNoteForm }))
  // }

  // handleDeleteNotes = noteId => {
  //   return axios.delete(`https://killer-notes.herokuapp.com/note/delete/id/${noteId}`)
  //   .then(response => this.setState({ madeNotes: response.data }));
  // }

  // updateNoteForm = (event, id) => {
  //   event.preventDefault();
  //   const noteToUpdate = this.state.madeNotes.find(note => note.id === id);
  //   this.setState({ updatingNote: true, note: noteToUpdate }, () => this.props.push('/notesForm'));
  // }

  // handleUpdateNotes = noteId => {
  //   axios.put(`https://killer-notes.herokuapp.com/note/edit/${noteId}`, this.state.note)
  //   .then(response => {
  //     this.setState({
  //       madeNotes: response.data,
  //       updatingNotes: false,
  //       note: blankNoteForm
  //     });
  //     this.props.history.push(`/notes/${noteId}/info`);
  //   });
  // }


  render() {
    console.log("App render Working?", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
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
                <NavLink exact to="/notesform" activeClassName="activeNavButton">
                  Add New Notes
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/notes" render={props => (
          <NotesList {...props} notesList={this.state.madeNotes} />
        )}
        />
        <Route path="/notes/:noteId" render={props => (
          <Notes 
            {...props}
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
    );
  }
}

export default withRouter(App);
