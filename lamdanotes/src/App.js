import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import SidebarView from './sidebarComponent/sbView';
import NotesView from './NotesComponent/NotesView/notesView';
import AddNote from './formComponent/addNote';
import SingleNote from './NotesComponent/NotesView/singleNote/singleNote';
import EditForm from './formComponent/editNote';



import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      cNote: ""
    }
  }

  // {/* Call to API and set the response data to our state */}
  componentDidMount() {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
          .then(res => this.setState({
              notes: res.data
          }))
          .catch(err => console.log(err))
  }

  componentDidUpdate(prevState) {
    if(this.state.notes !== prevState.notes) {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
          .then(res => this.setState({
              notes: res.data
          }))
          .catch(err => console.log(err))
    }
  }

  addNote = (note) => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
          .then(res => console.log("returned from add",res))
          .catch(err => console.log(err))
  }

  deleteNote = (id) => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  } 

  editNote = (id, obj) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, obj)
        .then
  }

  setCNote = (id) => {
    this.setState({
      cNote: id
    })
  }


// {/* Declare Routes, Sidebar navigation should always show so it is the root */}
  render() {
    return (
      <div className="container">

          <Route path="/" component={SidebarView} />

          <Route 
            path="/notes"
            render={props => ( <NotesView {...props} notes={this.state.notes} /> )} 
          />

          <Route 
            path="/addnote"
            render={props=> ( <AddNote {...props} addNote={this.addNote} />)} 
          />

          <Route 
            path="/note/:id" 
            render={props => (
              <SingleNote {...props} note={this.state.notes} deleteNote={this.deleteNote} setCNote={this.setCNote} />
            )}
          />

          
          <Route 
              path="/editnote/:id"
              render={props=> ( <EditForm {...props}/>)} 
          />
          
          
      </div>
    );
  }
}

export default App;
