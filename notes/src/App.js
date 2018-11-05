import React, { Component } from 'react';
import "./App.css";
import axios from "axios";
import NoteForm from "./components/NoteForm"


class App extends Component {
constructor() {
  super();
  this.state= {
    notes: []
  }
}

componentDidMount() {  
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => this.setState({ notes: response.data }))
    .catch(error => console.log(error))
}



  render() {
    return (
      <div className="App">
      <h1 className='title'> Lambda Notes </h1>


      
      </div>
    );
  }
}

export default App;
