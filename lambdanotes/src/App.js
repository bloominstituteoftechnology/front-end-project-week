import React, { Component } from 'react';
import NewNote from './Components/newNote/newNote';
import SideBar from './Components/sideBar/sideBar';
import NoteList from './Components/noteList/noteList';
import { Route } from 'react-router-dom'
import noteData from './noteData'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      noteData: []
    };
  }

componentDidMount () {
  this.setState({noteData});
}


  render() {
    return (
      <div className="App">
      <SideBar />
      <Route path="/newnote" component={NewNote} />
      <Route path='/notelist' component={NoteList} />
      </div>
    );
  }
}

export default App;
