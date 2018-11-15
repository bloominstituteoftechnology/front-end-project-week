import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import NoteCard from './components/NoteCard';

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
  addNewNote = note => {


    axios.post('https://fe-notes.herokuapp.com/note/create', note)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.log(error);
      });

    console.log(this.state)
  }
  updateNote = (id, note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then((response) => {
        console.log(response);
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
          <NavLink className="link" to={'/'}>View Your Notes</NavLink><br/>
          
          <NavLink className="link" to={'/note-form'}>+ Create New Note</NavLink>
          
        </div>
        <div className="content">
          <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes} />} />
          <Route path="/note-form" render={(props) => <CreateNote {...props}  />} />
          <Route path="/notes/:id" render={(props) => <NoteCard {...props} notes={this.state.notes}  />} />
        </div>
      </div>
    );
  }
}

export default App;
