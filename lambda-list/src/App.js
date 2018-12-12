import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import NoteList from './components/NoteList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NewNote from './components/NewNote'
import {SingleNote } from './components/SingleNote'
import DeleteNote from './components/DeleteNote'


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
    this.setState({
        title: response.title,
        textBody: response.textBody
    })
//   .catch(err => console.log(err)) 
  })
}

  deleteNote = (id) => {
    
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  .then(response => {
    this.setState({
        title: response.title,
        textBody: response.textBody
    })
  //   .catch(err => console.log(err)) 
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
               <Route path="/note/:noteID" render={props => <SingleNote {...props} notes={this.state.note} deleteNote={this.deleteNote}/>}/>
               <Route path="/delete-note" render={props => <DeleteNote {...props} notes={this.state.note} />}/>
               
        </div> 
        
      </div>//app
    );
  }
}

export default App;
