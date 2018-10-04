import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/NavBar';
import Notes from './Components/Notes';
import NoteForm from './Components/NoteForm';
import NoteView from './Components/NoteView';
import EditForm from './Components/EditForm';
// import DeleteModal from './Components/DeleteModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        id: '',
        title: '',
        textBody: ''
      }
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios 
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data});
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }


  addNote = note => {
    axios 
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => {
        this.setState(
          {notes: response.data},
          this.props.history.push('/')
        );
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }


  // deleteNote = id => {
  //   console.log('delete working?');
  //   axios
  //     .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => (
  //       console.log('Server Error', error)
  //     ));
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route 
          exact path='/' 
          render={props => (
            <Notes 
              {...props} 
              notes={this.state.notes} 
              
            />
          )}
        />
        <Route
          path='/new'
          render={props => (
            <NoteForm 
              {...props} 
              addNote={this.addNote} 
            />
          )}
        />
        <Route 
          path='/note/:id'
          render={props => (
            <NoteView 
              {...props} 
              getNote={this.getNote} 
              handleDeleteNote={this.handleDeleteNote}
              fetchNotes={this.fetchNotes}
            />
          )}
        />
        <Route
          path='/edit/:id'
          render={props => (
            <EditForm 
              {...props} 
              updateNote={this.updateNote}
              fetchNotes={this.fetchNotes}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
