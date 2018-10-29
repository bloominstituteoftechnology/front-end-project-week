import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NoteListContainer from './components/NoteListContainer';
import NavSideBar from './components/NavSideBar';
import AddNote from './components/AddNote';
import { Route } from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes:  [],
      addTitle: "",
      addBody: ""
    }
  }



  componentDidMount() {
    axios.get("https://killer-notes.herokuapp.com/note/get/all")
         .then(response => {
           this.setState({ notes: response.data })
         })
         .catch(error => {
           console.log("error", error)
         })
  }

  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  addNewNote = (note) => {
    const newNote = {
      addTitle: this.state.addTitle,
      addBody: this.state.addBody
    }
    axios.post("https://killer-notes.herokuapp.com/note/create", newNote)
         .then(response => {
            this.setState({ addTitle: response.data, addBody: response.data })
         })
  }


  render() {
    return (
      <div className="App">
      <div className="nav-width"></div>
      <NavSideBar />
      <Route exact path="/noteList" render={props => (
        <NoteListContainer {...props} notes={this.state.notes} />
      )} />
      <Route exact path="/addNote" render={props => (
        <AddNote 
        {...props} 
        changeHandler={this.changeHandler} 
        addNewNote={this.addNewNote} 
        addBody={this.state.addBody}
        addTitle={this.state.addTitle} />
      )} />
      </div>
    );
  }
}

export default App;
