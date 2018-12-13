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
// import Modal from './components/Modal';

// const blankNote = {
//     tags: [],
//     title: "",
//     textBody: "Hamburgers",
// };

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
      loading: true,
      show: false,
      blankNote: {
        tags: [],
        title: "",
        textBody: "Hamburgers",
    }
    }
  }

  componentDidMount(){
    axios
    .get('https://vast-retreat-70533.herokuapp.com/api/notes')
    .then(response => this.setState({ notes: response.data, loading: false }))
    .catch(error => console.log(error));
  }

  getNoteById = id => {
    axios
      .get(`https://vast-retreat-70533.herokuapp.com/api/notes/${id}`)
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
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  };





  addNewNote = () => {
    axios
      .post('https://vast-retreat-70533.herokuapp.com/api/notes', this.state.note)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log(error));
  }

  deleteNote = (id) => {
    
    axios
      .delete(`https://vast-retreat-70533.herokuapp.com/api/notes/${id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };

  updateNote = (id) => {
    
    axios
      .put(
        `https://vast-retreat-70533.herokuapp.com/api/notes/${id}`,
        this.state.note
      )
      .then(response => {
        this.setState({
          notes: response.data,
          editingId: null,
          isEditing: false,
          // note: blankNote
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
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className = "nav-container">
            <h1 className = "lambda">Lambda</h1>
            <h1 className = "notes">Notes</h1>
            <NavLink className = "NavLink" exact to="/">
                Home
            </NavLink>
            <NavLink className = "NavLink" exact to="/notes">View Your Notes</NavLink>
            <NavLink className = "NavLink" exact to="/note-form">+ Create New Note</NavLink>
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

        <Route exact path='/notes/update/:_id' render={(props) => <UpdateNoteForm {...props}
                addNewNote = {this.addNewNote} 
                changeHandler = {this.changeHandler} 
                isEditing={this.state.isEditing}
                updateNote={this.updateNote}
                note = {this.state.note}
                notes={this.state.notes}
                handleInputChange = {this.handleInputChange}
        />}
        
        />

        {/* <Route path = '/notes/update/:_id' render = {(props) => <Modal {...props}/>}/> */}

      </div>
    );
  }
}

export default App;
