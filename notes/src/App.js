import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import AllNotes from './components/AllNotes';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Modal from './components/Modal/Modal';
import Tagged from './components/Tagged';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesData: [],
      note: {
        title: '',
        textBody: '',
        tags: []
      },
      isUpdating: false,
      show: false
    };
  }

  componentDidMount() {
    //axios.get('http://localhost:5000/notes')
    axios.get('http://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({ notesData: response.data, isUpdating: false })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate(prevState) {
    if (this.state.notesData !== prevState.notesData) {
      axios.get('http://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({ notesData: response.data })
    })
    .catch(err => {
      console.log(err);
    })
    }
  }

  handleChange = e => {
    if (e.target.name === 'tags') {
      const tags = e.target.value.split(', ');
      this.setState({
        note: {
          ...this.state.note,
          tags: tags,
        }
      });
    } else 
    {
    this.setState({
      note: { 
        ...this.state.note,
        [e.target.name]:
        e.target.value,
      }
    });
    }
  }

  addNewNote = event => {
    //event.preventDefault();
    console.log('adding new');
    //axios.post('http://localhost:5000/notes', this.state.note)
    axios.post('http://killer-notes.herokuapp.com/note/create', this.state.note)
    .then(response => this.setState({ notesData: response.data, note: { title: '', textBody: '', tags: [] }, isUpdating: false },
    () => this.props.history.push('/notes')))
  }

  deleteNote = noteId => {
   // return axios.delete(`http://localhost:5000/notes/${noteId}`)
    return axios.delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => this.setState({ notesData: response.data, show: false }))
  }

  openUpdateForm = (event, id) => {
    event.preventDefault();
    const noteToUpdate = this.state.notesData.find(note => note._id === id);
    this.setState ({ isUpdating: true, note: noteToUpdate },
      () => this.props.history.push('/note-form'));
  }

  updateNote = noteId => {
    //axios.put(`http://localhost:5000/notes/${noteId}`, this.state.note)
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${noteId}`, this.state.note)
    .then(response => {
      console.log("response.data:", response.data)
      this.setState({
        isUpdating: false,
        note: response.data,
      }, () => console.log("note:", this.state.note, "notesData:", this.state.notesData));
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
    this.setState({ note: {title: '', textBody: ''}, isUpdating: false })
  }

  truncateTitle = (title) => {
    let val = '';
    if(title.length > 30) {
        val = `${title.slice(0,27)}...`
    } else {
      val = title;
    }
    return val;
  }
  
  truncate = (textBody) => {
    let val = '';
    if(textBody.length > 150) {
        val = `${textBody.slice(0,142)}...`
    } else {
      val = textBody;
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
         notesData={this.state.notesData}
         truncate={this.truncate}
         truncateTitle={this.truncateTitle}
         filterByTag={this.filterByTag}
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
        <Route
         exact
          path="notes/tagged/:tag"
          render={props => (
            <Tagged
            {...props}
            note={this.state.note}
            notesData={this.state.notesData}
            handleChange={this.handleChange}
            />
          )}
        />
        <Modal show={this.state.show} />
      </div>
      
    );
  }
}

export default withRouter(App);
