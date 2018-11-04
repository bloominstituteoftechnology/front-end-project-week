import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Note from './Components/Note';
import EditNote from './Components/EditNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes:[],
      title:'',
      textBody:'',
      newTitle:'',
      newTextBody:'',

    }
  }

  componentDidMount() {
    axios 
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err))
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNote = () => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", {
        title: this.state.title,
        textBody: this.state.textBody
      })
      this.setState({ title:'', textBody:'' })
  }

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.newTitle,
        textBody: this.state.newTextBody
      })
      this.setState();
  }

  render() {
    return(
      <div className='App'>
        
      </div>
    )
  }
}



export default App;
