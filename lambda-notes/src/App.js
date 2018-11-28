import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import Header from "./Components/Header";
import NoteList from "./Components/NoteList";

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({notes: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
    <div className="App">
        <Header />
        <NoteList notes={this.state.notes}/>
    </div>
    );
  }
}

export default App;
