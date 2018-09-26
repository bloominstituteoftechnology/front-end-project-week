import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import NoteContainer from './components/NoteContainer';
import Note from './components/Note';
import NotesForm from './components/NotesForm';
import Modal from './components/Modal/Modal';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesData: [],
      note: {
        title: '',
        content: ''
      },
      isUpdating: false,
      show: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/notes')
      .then(response => {
        this.setState({ notesData: response.data, isUpdating: false })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = e => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]:
        e.target.value,
      }
    });
  }

  addNewNote = event => {
    //event.preventDefault();
    console.log('adding new');
    axios.post('http://localhost:5000/notes', this.state.note)
    .then(response => this.setState({ notesData: response.data, note: { title: '', content: ''} },
    () => this.props.history.push('/notes')))
  }

  deleteNote = noteId => {
    return axios.delete(`http://localhost:5000/notes/${noteId}`)
    .then(response => this.setState({ notesData: response.data }))
  }

  openUpdateForm = (event, id) => {
    event.preventDefault();

    //open update form
    const noteToUpdate = this.state.notesData.find(note => note.id === id);
    this.setState ({ isUpdating: true, note: noteToUpdate },
      () => this.props.history.push('/note-form'));
  }

  updateNote = noteId => {
    axios.put(`http://localhost:5000/notes/${noteId}`, this.state.note)
    .then(response => {
      this.setState({
        notesData: response.data,
        isUpdating: false,
        note: { title: '', content: '' },
      });
      this.props.history.push(`/notes/${noteId}`)
    })
  }

  showModal = () => {
    this.setState ({
      ...this.state,
      show: !this.state.show
    })
  }

  cancelUpdate = (event) => {
    this.setState({ note: {title: '', content: ''}, isUpdating: false })
  }

  render() {
    return (
      <div className = 'App'>
         <ul className = 'navbar'>
          <li>
            <NavLink exact to = '/'
            activeClassName = 'activeNavButton' >
            Home
            </NavLink>
          </li>

          <li>
            <NavLink exact to = '/notes'
            activeClassName = 'activeNavButton' >
            View Your Notes
          </NavLink>
          </li>

          <li>
            <NavLink exact to = '/note-form'
            activeClassName = 'activeNavButton'
            onClick = {this.cancelUpdate} >
            + Create New Note
            </NavLink>
          </li>

         </ul>

         <Route exact path = '/' component = {Home} />
         <Route
          exact
          path = '/notes'
          render = {props => (
           <NoteContainer {...props}
           notesList = {this.state.notesData}
           />
         )}
         />
         <Route
          exact
          path = '/notes/:noteId'
          render = {props => (
            <Note
            {...props}
            notesList = {this.state.notesData}
            deleteNote = {this.deleteNote}
            openUpdateForm = {this.openUpdateForm}
            show = {this.state.show}
            showModal = {this.showModal}
            />
          )}
          />
          <Route
            exact
            path = '/note-form'
            render = {props => (
              <NotesForm
              {...props}
              note = {this.state.note}
              addNewNote = {this.addNewNote}
              handleChange = {this.handleChange}
              updateNote = {this.updateNote}
              isUpdating = {this.state.isUpdating}
            />
            )}
          />
          <Modal show = {this.state.show} />
      </div>
    );
  }
}

export default withRouter(App);
