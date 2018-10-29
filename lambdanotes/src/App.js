import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ListView from './Components/ListView';
import Note from './Components/Note';

class App extends Component {
  constructor() {
    super();
    this.state = {
        list: [],
        note: {},
    }
  };

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ list: response.data }))
      .catch(error => console.log(error))
  };  //add ID specific request 

  createNewNote = () => {
    const note = {
      //tags: [this.state.tags],  //?????? tags?  "" or no?  json you need, but here?  array?
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
      .then(newNote => console.log(newNote))
      .catch(error => console.log(error))
    this.setState({ tags: [], title: '', textBody: ''});
  };

  render() {
    return (
      <div className="App">
        NOTES
        <ListView key={note.id}/>
        <Note />
      </div>
    );
  };
};

export default App;
