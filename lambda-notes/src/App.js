import React, { Component } from 'react';
import axios from 'axios';
import All from './components/ViewAll/All'
import { NavLink, Route } from 'react-router-dom'
import CreateNew from './components/nav/CreateNew'
import NoteView  from './components/NoteView/NoteView'
import EditNoteForm from './components/NoteView/EditNoteForm'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      expandedNote: {},
      value: '',
    }
  }

  //gets all the data from the api
  componentDidMount () {
    axios
    .get('http://localhost:9000/api/notes')
    .then(response => {
      console.log(response);
      this.setState({notes: response.data})
    }) 
    .catch (error => {
      console.log('Error', error);
    })
  }

  //function that sets the state to the incoming data
  addNewNote = data => {
    this.setState({notes: data})
  }


refresh () {
  window.location.reload();
}


  render() {
    return (
      <div className="App">
        <div className = 'wrapper' >
          <nav className = 'navBar'>
            <h1> Lambda Notes </h1>
            <NavLink onClick = {this.refresh} className = "links" to = '/' > View Your Notes </NavLink>
            <NavLink className = "links"
            to = '/create-new-note'> + Create New Note </NavLink>
          </nav>
          <div className = 'mainPage'>
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
                exact path='/notes/:id' 
                render=
                {props =>
                    <NoteView
                    {...props}
                    note = {this.state.notes} 
                    updateButton= {this.updateButton}
                    expandedNote={this.state.expandedNote}
                   
                     />
                }
                />

              <Route
                exact path='/notes/edit/:id'
                render=
                  {props =>     
                    (<EditNoteForm 
                      {...props} 
                      editNote={this.editNote}notes = {this.notes} 
                      expandedNote={this.state.expandedNote} />)} />
           </div>           

        </div>          
      
      </div>
    );
  }
}

export default App;
