import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import NotesList from './components/Notes Components/NotesList';
import CreateNote from './components/Functionality/CreateNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Note Test 1',
          noteBody: 'yeet yeet. yeet yeet yeet.'
        }
      ], 
      note: {
        title: '',
        noteBody: ''
      }     
    }
  }

  addNote = e => {
    e.preventDefault();
    console.log(this.state.note);
    this.setState({
      notes: [...this.state.notes, this.state.note.title, this.state.note.noteBody],
      note: {
        title: '',
        noteBody: ''
      }
    })
  }

  handleTextInput = e => {
    e.preventDefault();
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    });
  };

  



  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <h1>Lambda <br />Notes</h1>
          <NavLink exact to='/home'>View Your Notes</NavLink>
          <NavLink to='/create-note'>+ Create New Note</NavLink>          
        </div>  
        <Route 
          exact path='/home'
          render={props => (
            <NotesList {...props} notes={this.state.notes} />
          )}
        />
        <Route
          path='/create-note'
          render={props => (
            <CreateNote
              {...props}
              addNote={this.state.addNote}
              handleTextInput={this.state.handleTextInput}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
