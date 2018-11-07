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
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => this.setState({ notes: response.data }))
    .catch(error => console.log(error))
}

addNote = (event, newNote) => {
  event.preventDefault();
  axios
    .post("https://fe-notes.herokuapp.com/note/create", newNote)
    .then(response => {
      newNote._id = response.data.success;
      this.setState({ notes: [newNote, ...this.state.notes] })
    })
    .catch(error => console.log(error))
}

deleteNote = (id) => {
  axios
    .delete(`http://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log('DELETE RESPONSE: ', response)
      this.setState({ notes: response.data })
    })
    .catch(err => {console.log(err)})


}


editNote = (event, id, state) => {
  event.preventDefault();
  axios
  .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, state)
  .then(response => {
    const updateArray = this.state.notes.map(note => {
      if (note._id === response.data._id) {
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
      <div className="App">
      <h1 className='title'> Lambda Notes </h1>
      <div className="nav-button-container">
            <NavLink className="nav-buttons" to="/">
              View Your Notes
            </NavLink>
            <NavLink className="nav-buttons" to="/add-note">
              + Create New Note
            </NavLink>
            <Route
            exact
            path="/"
            render={props => (
              <NoteList
                {...props}
                // deleteNote={this.deleteNote}
                // addNote={this.addNote}
                // editNote={this.editNote}
                />
              )}
            />
            
            <Route path="/add-note" render={props => <NoteForm {...props} addNote={this.addNote} />} />
            <Route path="/note/:id" render={props => <Note {...props} deleteNote={this.deleteNote} />} />
            <Route path="/edit/:id" render={props => <EditNote {...props} editNote={this.editNote} />} />
      </div>
      </div>
    );
  }
}
                
                
               
            



export default withRouter(App);
