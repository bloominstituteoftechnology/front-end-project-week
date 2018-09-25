import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import NotesList from './components/Notes Components/NotesList';
import CreateNote from './components/Functionality/CreateNote';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [], 
      note: {
        title: '',
        textBody: ''
      }     
    }
  }

  updateNotes = notes => {
    this.setState({ notes })
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(res => {
        console.log(res);
        this.setState({ notes: res.data });
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }


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
            <NotesList notes={this.state.notes} />
          )}
        />
        <Route
          path='/create-note'
          render={props => (
            <CreateNote
              updateNotes={this.updateNotes}                    
            />
          )}
        />
      </div>
    );
  }
}

export default App;
