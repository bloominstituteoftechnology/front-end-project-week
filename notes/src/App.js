import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import AllNotes from './components/AllNotes';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Modal from './components/Modal/Modal';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesData: [],
      // note: {
      //   title: '',
      //   content: ''
      // },
      isUpdating: false,
      show: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/notes')
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

  truncate = (content) => {
    let val = '';
    if(content.length > 200) {
        val = `${content.slice(0,197)}...`
    } else {
      val = content;
    }
    return val;
  }

  render() {
    return (
      <div className="App">
      <div className="navbar">
       <h1 className="header">
         Lambda Notes
       </h1>
       <ul className="navlinks">
        <li className="blueButton">
          <NavLink exact to="/"
          activeClassName="activeNavButton" >
          Home
          </NavLink>
        </li>
        <li className="blueButton">
          <NavLink exact to="/notes"
          activeClassName="activeNavButton" >
          View Your Notes
        </NavLink>
        </li>
        <li className="blueButton">
          <NavLink exact to="/note-form"
          activeClassName="activeNavButton"
          onClick={this.cancelUpdate} >
          + Create New Note
          </NavLink>
        </li>
       </ul>
       </div>
       <Route exact path="/" component={Home} />
       <Route 
        exact 
        path="/notes"
        render={props => (
         <AllNotes {...props}
         notesList={this.state.notesData}
         truncate={this.truncate}
         />
       )}
       />
       <Route
        exact
        path="/notes/:noteId"
        render={props => (
          <Note 
          {...props}
          notesData={this.state.notesData}
          deleteNote={this.deleteNote}
          openUpdateForm={this.openUpdateForm}
          show={this.state.show}
          showModal={this.showModal}
          />
        )}
        />
        <Route
          exact
          path="/note-form"
          render={props => (
            <NoteForm
            {...props}
            note={this.state.note}
            addNewNote={this.addNewNote}
            handleChange={this.handleChange}
            updateNote={this.updateNote}
            isUpdating={this.state.isUpdating}
          />
          )}
        />
        <Modal show={this.state.show} />
      </div>
      
    );
  }
}

export default withRouter(App);
