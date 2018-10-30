import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ListView from './Components/ListView';
import NoteForm from './Components/NoteForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
        list: [],
        note: {}
    }
  };

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ list: response.data }))
      .catch(error => console.log(error))
  };  //add ID specific request 

  createNewNote = (newNote) => {
    // const note = {
    //   tags: [this.state.tags],  
    //   title: this.state.title,
    //   textBody: this.state.textBody
    // };
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, newNote)
      .then(response => {
        this.setState({ list: response.data })
      }) //this.props.history.push('/')
      .catch(error => console.log(error))
      //this.setState({ tags: [], title: '', textBody: '' })
  };

  // deleteNote = () => {
  //   const deletion = axios
  //     .delete(deletion) => (`https://fe-notes.herokuapp.com/note/get/all/${id}`, {note})
  // }


  render() {
    return (
      <div className="App">
        <ListView list={this.state.list} />
        <NoteForm />
      </div>
    );
  };
};

export default App;
