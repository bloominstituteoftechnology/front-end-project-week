import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ListView from './Components/ListView';
import NoteForm from './Components/NoteForm';
import SideBar from './Components/SideBar';

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


  // deleteNote = () => {
  //   const deletion = axios
  //     .delete(deletion) => (`https://fe-notes.herokuapp.com/note/get/all/${id}`, {note})
  // }


  render() {
    return (
      <div className="App">
        <SideBar />
        <ListView list={this.state.list} />
        <NoteForm />
      </div>
    );
  };
};

export default App;
