import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import UpdateNoteForm from './components/UpdateNoteForm';

const blankNote = {
    tags: [],
    title: "",
    textBody: "",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        tags: [],
        title: "",
        textBody: "",
      },
      editingId: null,
      activeNote: null,
      isEditing: false,
      loading: true
    }
  }

  componentDidMount(){
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({ notes: response.data, loading: false }))
    .catch(error => console.log(error));
  }

  getNoteById = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({activeNote: response.data }))
      .catch(error => console.log(error));
  }

  changeHandler = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value
      }
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = () => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log(error));
  }

  deleteNote = (_id) => {
    // ev.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };

  updateNote = (_id) => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${_id}`,
        this.state.note
      )
      .then(response => {
        this.setState({
          notes: response.data,
          editingId: null,
          isEditing: false,
          note: blankNote
        });
      })
      .catch(error => console.log(error));
  };

  setUpUpdateForm = (ev, note) => {
    ev.preventDefault();
    this.setState({
      note, 
      isEditing: true,
      editingId: note._id
    });
  };


  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className = "nav-container">
            <h1>Lambda Notes</h1>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/notes">View Your Notes</NavLink>
            <NavLink exact to="/note-form">+ Create New Note</NavLink>
          </nav>
        </header>

        <Route exact path='/' render={(props) => <Home {...props} />}/>

        <Route exact path='/note-form' render={(props) => <NoteForm {...props} 
        addNewNote = {this.addNewNote} 
        changeHandler = {this.changeHandler} 
        isEditing={this.state.isEditing}
        updateNote={this.updateNote}
        note = {this.state.note} />} />

        <Route exact path='/notes' render={(props) => <Notes {...props} 
        getNoteById={this.getNoteById}
        
        notes={this.state.notes} />} />

        <Route path='/notes/:_id' render={(props) => <Note {...props} 
        deleteNote={this.deleteNote}
        updateNote={this.updateNote}
        activeNote={this.state.activeNote}
        notes={this.state.notes} />} />

        <Route path='/notes/:_id/update' render={(props) => <UpdateNoteForm {...props}
                addNewNote = {this.addNewNote} 
                changeHandler = {this.changeHandler} 
                isEditing={this.state.isEditing}
                updateNote={this.updateNote}
                note = {this.state.note}
                notes={this.state.notes}
        />}/>

      </div>
    );
  }
}

export default App;
