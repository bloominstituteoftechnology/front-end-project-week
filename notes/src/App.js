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
        content: '',
        tags: []
      },
      isUpdating: false,
      show: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:7000/api/notes')
    .then(response => {
      this.setState({ notesData: response.data, isUpdating: false })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.notesData) !== JSON.stringify(prevState.notesData)) {
    axios.get('http://localhost:7000/api/notes')
    .then(response => {
      console.log("componentDidUpdate response:", response.data);
      this.setState({ notesData: response.data, isUpdating: false })
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
    const newNote = {
      title: this.state.note.title,
      content: this.state.note.content,
      tags: this.state.note.tags
    }
    console.log('adding new');
    axios.post('http://killer-notes.herokuapp.com/note/create', this.state.note)
    .then(response => {
      newNote._id = response.data.success;
      this.setState({ 
        notesData: [...this.state.notesData, newNote], note: { title: '', content: '', tags: [] }, isUpdating: false 
      },
    () => this.props.history.push('/notes'))})
    .catch(err => {
      console.log(err);
    })
    
  }

  deleteNote = noteId => {
    return axios.delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => {
      console.log("delete response:", response.data);
       this.setState({ show: false })})
    .catch(err =>
      console.log(err))
  }

  openUpdateForm = (event, id) => {
    event.preventDefault();
    const noteToUpdate = this.state.notesData.find(note => note._id === id);
    this.setState ({ isUpdating: true, note: noteToUpdate },
      () => this.props.history.push('/note-form'));
  }

  updateNote = noteId => {
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${noteId}`, this.state.note)
    .then(response => {
      console.log("response.data:", response.data)
      this.setState({
        isUpdating: false,
        notesData: [...this.state.notesData, response.data]
      }, () => console.log("note:", this.state.note, "notesData:", this.state.notesData));
      this.props.history.push(`/notes/${noteId}`)
    })
    .catch(err => {
      console.log(err);
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

  truncateTitle = (title) => {
    let val = '';
    if(title.length > 30) {
        val = `${title.slice(0,27)}...`
    } else {
      val = title;
    }
    return val;
  }

  truncate = (content) => {
    let val = '';
    if(content.length > 150) {
        val = `${content.slice(0,142)}...`
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
