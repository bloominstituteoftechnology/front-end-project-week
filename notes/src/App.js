import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';

import CreateNoteForm from './components/CreateNoteForm';
import EditNoteForm from './components/EditNoteForm'
import NoteList from './components/NoteList';
import Note from './components/Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        title: '',
        textBody: ''
      },
      editingId: null,
      activeItem: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(res => {
        this.setState({
          notes: res.data
        });
      })
      .catch(err => console.log(err));
  }

  getNoteById = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => {
        console.log(id);
        console.log(res.data);
        this.setState({
          activeItem: res.data
        })
      })
      .catch(err => console.log(err));
  };


  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      note: {
        ...this.state.note,
      [event.target.name]: event.target.value}
    });
  }

  addNote = data => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', data)
      .then(res => {
        console.log(res.data);
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
          .then(res => this.setState({ notes: res.data }))
       })
      .catch(err => console.log(err))
  }

  deleteNote= id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/` + id)
      .then(res =>{
        console.log(res.data);
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
          .then(res => this.setState({ notes: res.data }))
      })
      .catch(err => console.log(err))
  }

  editNote = () => {
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.editingId}`, this.state.note)
    .then(res =>{
      axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(res => this.setState({ notes: res.data }))
      })
    .catch(err => console.log(err))
}

editForm = (ev, note) => {
  ev.preventDefault();
  console.log(ev);
  console.log(note);
  this.setState({
    note: note,
    editingId: note._id
  })
}

  render() {
    return (
      <div className="App">
        <div className='side-nav'>
          <h1>Lambda  Notes</h1>
          <NavLink to='/'><button className='nav-btn'>View Your Notes </button></NavLink>{' '}
          <NavLink to='/note-form'><button className='nav-btn'> + Create New Note </button></NavLink>
        </div>
          <div className='create-notes-form'>
          <Route
            path='/note-form'
            render={props => (
              <CreateNoteForm
                {...props}
                addNote={this.addNote}
                handleChange={this.handleChange}
                note={this.state.note}/>
            )}
          />
          <div className='note-list'>
          <Route
            exact path='/'
            render={props => (
              <NoteList
                {...props}
                key={this.state.notes._id}

                notes = {this.state.notes}

                getNoteById={this.getNoteById}
                />
              )}
          />
          <div className='note'>
          <Route
            path ='/note/:id'
            render={props =>(
              <Note
                {...props}
                note={this.state.activeItem}
                deleteNote = {this.deleteNote}
                editNote={this.editForm}/>
            )}
          />
          </div>
          <div className='edit-note-form'>
          <Route
            path='/edit-form'
            render= {props => (
              <EditNoteForm
                {...props}
                editNote={this.editNote}
                handleChange={this.handleChange}
                notes={this.state.notes}
                note={this.state.note}/>
              )}
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}



export default App;
