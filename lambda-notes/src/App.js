import React, { Component } from 'react';
import './App.css';

import SideBar from './Components/SideBar.js'
import MainContent from './Components/MainContent.js'

import axios from 'axios';

class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {

    axios     
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
      this.setState({notes: response.data}) 
      })
      .catch(err => {
        console.log(err)
      });

  }

  update() {

    axios     
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
      this.setState({notes: response.data}) 
      })
      .catch(err => {
        console.log(err)
      });

  }

  addNote = ( e, data) => {

    axios
      .post('https://fe-notes.herokuapp.com/note/create', data)
      .then( response => this.update())
      .catch(err => console.log(err))

  }

  deleteNote = (id) => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then( response => this.update())
      .catch(err => console.log(err))
  }

  editNote = (id, data) => {
    console.log('in edit note')
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
    .then( response => {
      console.log(response);
      this.update();
    })
    .catch(err => console.log(err))

  }

  render() {
    console.log(this.state)
    if(this.state.notes === 0) return <h1>loading...</h1>
    return (
      <div className="App">
        <SideBar />
        <MainContent 
          content={this.state.notes}
          addNote={this.addNote}
          deleteNote={this.deleteNote}  
          editNote={this.editNote}
        />
      </div>
    );
  }
}

export default App;
