import React, { Component } from 'react';
import "./App.css";
import axios from "axios";
import NoteForm from "./components/NoteForm"
import EditNote from "./components/EditNote"
import Note from "./components/Note"
import NoteList from "./components/NoteList"
import { Route, NavLink, withRouter } from "react-router-dom";

class App extends Component {
constructor() {
  super();
  this.state = {
    notes: []

  }
}

componentDidMount() {  
  axios
    .get("http://localhost:7000/api/notes")
    .then(response => this.setState({ notes: response.data }))
    .catch(error => console.log(error))
}

addNote = (event, newNote) => {
  event.preventDefault();
  axios
    .post("http://localhost:7000/api/notes", newNote)
    .then(response => {
      newNote.id = response.data.success;
      this.setState({ notes: [newNote, ...this.state.notes] })
    })
    .catch(error => console.log(error))
}


editNote = (event, id, state) => {
  event.preventDefault();
  axios
  .put(`http://localhost:7000/api/notes/${id}`, state)
  .then(response => {
    const updateArray = this.state.notes.map(note => {
      if (note.id === response.data.id) {
        return response.data;
      }
      return note;
    });
    this.setState({ notes: updateArray });
  })
  .catch(error => console.log(error));
}



  render() {
    return (
      <div className='container'>
      <div className="App">
        <div className="side-bar">
          <div className='lambda-notes'>
            <h1>Lambda</h1>
            <h1> Notes</h1>
          </div>
          <NavLink exact to='/'>
          <button className='side-button'>View Your Notes</button>
          </NavLink>
          <NavLink to='/add-note'>
          <button className='side-button'>+Create New Note</button>
          </NavLink>
        </div>
            <Route
            exact
            path="/"
            render={props => (
              
              <NoteList
                {...props}
                />
              )}
            />
            {/* </div> */}
            <Route path="/add-note" render={props => <NoteForm {...props} addNote={this.addNote} />} />
            <Route path="/note/:id" render={props => <Note {...props} deleteNote={this.deleteNote} />} />
            <Route path="/edit/:id" render={props => <EditNote {...props} editNote={this.editNote} />} />
      </div>
      </div>
    );
  }
}
                
                
               
            



export default withRouter(App);
