import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import {MainDiv, Content, Side} from './styled'
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
    .get('https://alf-lambda-notes.herokuapp.com/notes')
    .then( response => {
      console.log(response)
      this.setState({notes: response.data})
    })
    .catch(err => console.log(err))
  }

  createNote = note => {
    axios
      .post('https://alf-lambda-notes.herokuapp.com/note/create', note)
      .then( response => {
        console.log(response)
        this.getNotes()
      })
      .catch(err => console.log(err))
  }  

  render() {
    return (
      <MainDiv className="App">
        <Side>
          <SideBar />
        </Side>
        <Content>
          <Route exact path='/' render={ props => <ListNotes {...props} notes={this.state.notes}/>} />
          <Route path='/create-note' render={ props => <CreateNote {...props} createNote={this.createNote} />} />
          <Route exact path='/note/:id' render={props => <Note {...props} getNotes={this.getNotes} />} />
          <Route path='/note/:id/edit' render={props => <Edit {...props} getNotes={this.getNotes} />} />
        </Content>
      </MainDiv>
    );
  }
}

export default App;
