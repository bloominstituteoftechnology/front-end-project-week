import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';

import CreateNoteForm from './components/CreateNoteForm';
import EditNoteForm from './components/EditNoteForm'
import NoteList from './components/NoteList';
import Note from './components/Note';

const blankNote= {
  title: '',
  textBody:''
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        title: '',
        textBody: ''
      },
      editingId: null
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
          <h1>Lambda Notes</h1>
          <button><NavLink exact to='/'>View Your Notes </NavLink></button>{' '}
          <button><NavLink to='/note-form'> + Create New Note </NavLink></button>
        </div>
        <div>
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
          <div className='notes-container'>
          <Route
            exact path='/'
            render={props => (
              <NoteList
                {...props}
                deleteNote = {this.deleteNote}
                notes = {this.state.notes}
                editNote={this.editForm}
                />
            )}
          />
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
          <Route path='/notes/:id' component={Note} />
        </div>
        </div>
      </div>
    );
  }
}



export default App;
