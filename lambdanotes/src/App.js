import React, { Component } from 'react';
import './App.css';
// import ListView from './components/ListView';
// import NoteView from './components/NoteView';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
// import CreateNote from './components/CreateNote';
import axios from 'axios';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [],
      currentNote: {},
    }
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(res => {this.setState({notesList: res.data})})
  }

  // Todo: add error above

  getCurrentNoteByID = (note_id) => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${note_id}`)
      .then(res => {this.setState({currentNote: res.data._id})})
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className='app-container'>
        <SideBar />
        <MainContent />
        {/* <Route path='/note/create' render={ (props) => { return(<CreateNote {...props} updateState={this.updateState} setCurrentNote={this.setCurrentNote} currentNote={this.state.currentNote} currentUser={this.state.currentUser} />)}} /> */}
      </div>
    )
  }
}

export default App;

