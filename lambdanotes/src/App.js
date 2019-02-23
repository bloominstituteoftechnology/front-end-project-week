import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import {
  Route,
  NavLink,
} from 'react-router-dom';


import NoteList from './components/NoteList'
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import axios from 'axios';

import './App.css';
import EditNote from './components/EditNote';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {      
      noteList: [],
    }

    
  }

  getNotes = () =>
   {
    axios
      .get('http://localhost:5050/api/notes')
      .then(response => {
        console.log(response)
        this.setState({noteList: response.data})
      })
      .catch(err => {
        console.log("IN CATCH", err);
      })
  }

  componentDidMount() {
    this.getNotes();
    }


  render() {
    return (
      <div className="App">
        <nav className='side-bar'>
          <h1>Lambda Notes</h1>
          <NavLink className='side-barBTN' to='/'>
            View Your Notes
          </NavLink >
          <NavLink className='side-barBTN' to='/create'>
            + Create A Note
          </NavLink>
        </nav>
        
        <Route exact path='/' render={props => (
          <NoteList {...props} content={this.state.noteList} />
        )}/>
        <Route
          path='/notes/:id'
          render={props => (
            <Note {...props} content={this.state.noteList} />
          )} />
        <Route exact path='/create' component={CreateNote} getNotes = 'getNotes' />
        <Route exact path='/edit/:id' component={EditNote} />        
      </div>
    );
  }
}

export default App;
