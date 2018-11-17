import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import {MainDiv} from './styled'
import SideBar from './components/sideBar/SideBar';
import ListNotes from './components/listView/ListNotes';
import CreateNote from './components/newView/CreateNote';
import Note from './components/noteView/Note'
import Edit from './components/editView/Edit';


class App extends Component {

  state = {
    notes: []
  }

  componentDidMount() {
    this.getNotes()
  }

  getNotes = () => {
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then( response => {
      console.log(response)
      this.setState({notes: response.data})
    })
    .catch(err => console.log(err))
  }

  createNote = note => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then( response => {
        console.log(response)
        this.getNotes()
      })
      .catch(err => console.log(err))
  }  

  render() {
    return (
      <MainDiv className="App">
        <div>
          <SideBar />
        </div>
        <div>
          <Route exact path='/' render={ props => <ListNotes {...props} notes={this.state.notes}/>} />
          <Route path='/create-note' render={ props => <CreateNote {...props} createNote={this.createNote} />} />
          <Route path='/note/:id' render={props => <Note {...props} getNotes={this.getNotes} />} />
          <Route path='/note/:id/edit' render={props => <Edit {...props} getNotes={this.getNotes} />} />
        </div>
      </MainDiv>
    );
  }
}

export default App;
