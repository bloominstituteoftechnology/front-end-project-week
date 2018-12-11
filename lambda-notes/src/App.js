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
    // e.preventDefault();

    axios
      .post('https://fe-notes.herokuapp.com/note/create', data)
      .then( response => this.update())
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
          update={this.update} />
      </div>
    );
  }
}

export default App;
