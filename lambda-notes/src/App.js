import React, { Component } from 'react';
import axios from 'axios';
import All from './components/ViewAll/All'
import { NavLink, Route } from 'react-router-dom'
import CreateNew from './components/nav/CreateNew'
import NoteView  from './components/NoteView/NoteView'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  componentDidMount () {
    axios 
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response);
        this.setState({notes: response.data})
      }) 
      .catch (error => {
        console.log('Error', error);
      })
  }

  addNewNote = data => {
    this.setState({notes: data})
  }

  routeToSingleNote = noteId => {
    // this.setState({
    //   singleNoteId: noteId
    // });
    localStorage.setItem("noteID", noteId);
  };

  render() {
    return (
      <div className="App">
        <div className = 'navBar'>
          <nav>
            <h1> Lambda Notes </h1>
            <NavLink to = '/'> View Your Notes </NavLink>
            <NavLink
            to = '/create-new-note'> + Create New Note </NavLink>
          </nav>
        
          <Route 
            exact path='/' 
            render=
              {props =>
                <All
                 {...props} 
                notes = {this.state.notes}
                />
              }
           />

          <Route 
              exact path='/create-new-note' 
              render=
                {props =>
                  <CreateNew 
                    {...props}
                    addNewNote = {this.addNewNote}
                  />
                }
          />

          <Route 
                exact path='/note/:id' 
                render=
                {props =>
                    <NoteView
                    {...props}
                    note = {this.state.notes} 
                     />
                }
                />
        </div>          
      
      </div>
    );
  }
}

export default App;
