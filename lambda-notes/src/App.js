import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import NoteCard from './components/NoteCard';
import EditNote from './components/EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],

    };
  }
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);

      });
  }
  updateNoteList = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);

      });
  }
  addNewNote = note => {


    axios.post('https://fe-notes.herokuapp.com/note/create', note)
      .then((response) => {
        console.log(response);
        this.updateNoteList();
      })
      .catch(error => {
        console.log(error);
      });

    console.log(this.state)
  }
  updateNote = (id, note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then((response) => {
        this.updateNoteList();
      })
      .catch(error => {
        console.log(error);
      });
    }
  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then((response) => {
        this.updateNoteList();
      })
      .catch(error => {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="app">
        <div className="sidebar-links">
          <h1>Lambda<br/>Notes</h1>
          <NavLink className="link navlink" to={'/'}>View Your Notes</NavLink>
          
          <NavLink className="link navlink" to={'/note-form'}>+ Create New Note</NavLink>
          
        </div>
        <div className="content">
          <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes} />} />
          <Route path="/note-form" render={(props) => <CreateNote {...props} addnote={this.addNewNote}  />} />
          <Route path="/notes/:id" render={(props) => <NoteCard {...props} notes={this.state.notes}  />} />
          <Route path="/edit/:id" render={(props) => <EditNote {...props} updateNote={this.updateNote} updateNoteList={this.updateNoteList} notes={this.state.notes} />} />
        </div>
      </div>
    );
  }
}

export default App;
