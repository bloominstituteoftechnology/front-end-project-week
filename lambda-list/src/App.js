import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import NoteList from './components/NoteList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NewNote from './components/NewNote'
import {SingleNote } from './components/SingleNote'

import EditNote from './components/EditNote'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: []
    }
  }

  componentDidMount() {
    let index = -1;
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({
          note: response.data, index: index++
        })
      })

  }

  addNote = data => {
    axios.post('https://fe-notes.herokuapp.com/note/create', data)
  .then(response => {
    data["_id"] = response.data.success;
    this.setState({ note: [...this.state.note, data] })
          // .catch(err => console.log(err)) 
  })
}



  editNote = (id, data) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
  .then(response => {
    // data["_id"] = response.data.success;
    console.log("FUNCTON Response", response)
    this.setState({ note: [...this.state.note, response.data] })
    // .catch(err => console.log(err)) 
  })
  }

  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  .then(response => {
    this.setState({ note: [...this.state.note, response]
    })
    // .catch(err => console.log(err)) 
  })
  }

  
 


  render() {
    
    return (
      <div className="App">
        <Header />
        

        <div className="appBody">
               <Menu />
               <Route exact path="/" render={props => <NoteList {...props} notes={this.state.note} />} />
               <Route path="/new-note" render={props => <NewNote {...props} notes={this.state.note} addNote={this.addNote}/>} />
               <Route exact path="/edit-note/:_id" render={props => <EditNote {...props} notes={this.state.note} editNote={this.editNote}/>} />
               <Route path="/note/:noteID" render={props => <SingleNote {...props} notes={this.state.note} deleteNote={this.deleteNote} editNote={this.editNote}/>}/>
               
               
        </div> 
        
      </div>//app
    );
  }
}

export default App;
