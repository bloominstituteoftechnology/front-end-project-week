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

  render() {
    return (
      <AppDiv>
        <NavigationBar />
        <Route
        exact
          path="/Home"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route path="/Home/:id" render={props => <IndividualNote {...props} notes={this.state.notes} />}/>
    <Route path="/Form" render={props => 
    <NoteForm 
      {...props}
      noteObj={this.state.noteObj}
      changeHandler={this.changeHandler}
      
    />}/>

      </AppDiv>
    );
  }
}

export default App;
