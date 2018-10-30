import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavBar/NavBar";
import NoteList from "./components/ListView/NoteList";
import IndividualNote from './components/ListView/IndividualNote'
import NoteForm from './components/NewNoteView/NoteForm'
import { AppDiv } from "./Styles/AppStyles";
import { Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      noteObj: {
      title: "",
      textBody: ""
    },
      
    }
    
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => alert(error));
  }

  changeHandler = (ev) => {
    this.setState({
      noteObj: {
       ...this.state.noteObj,
       [ev.target.name]: ev.target.value
      }
    })
  }

  addNote = () => {
    axios
    .post(`https://fe-notes.herokuapp.com/note/create`, this.state.noteObj)
    .then(response => { 
      this.state.noteObj._id = response.data.success 
      this.setState({notes: [...this.state.notes, this.state.noteObj]})
      })
    .catch(error => alert(error))
  }

  deleteNote = (ev, id) => {
    ev.preventDefault();
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      this.setState({notes: [...this.state.notes]})
    })
  }

  render() {
    return (
      <AppDiv>
        <NavigationBar />
        <Route
        exact
          path="/home"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route path="/home/:id" render={props => <IndividualNote {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>}/>
    <Route path="/form" render={props => 
    <NoteForm 
      {...props}
      noteObj={this.state.noteObj}
      changeHandler={this.changeHandler}
      addNote={this.addNote}
      
    />}/>

      </AppDiv>
    );
  }
}

export default App;
