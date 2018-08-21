import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import NewNote from "./components/newnote/NewNote";
import NoteContainer from "./components/notes/NoteContainer";
import ViewNote from "./components/viewnote/ViewNote";
import EditNote from "./components/editnote/EditNote";
import { Route } from "react-router-dom";
import axios from 'axios';
class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [{
        id: 0,
        title: "Welcome to Lambda Notes!",
        body: "Click Create New Note to start!"
      }]
    }
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deletenote = this.deletenote.bind(this);
  }
  addNote(note) {
    this.state.notes.push(note);
  }
  editNote(note){
    this.setState({notes: note})
  }
  deletenote(note){
    this.setState({notes: note})
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/api/notes`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <Route
          exact path='/'
          render={(props) => <NoteContainer {...props} notes={this.state.notes} />}
        />
        <Route
          path='/new'
          render={(props) => <NewNote {...props} addNote={this.addNote} />}
        />
        <Route
          exact path='/notes/:id'
          render={(props) => <ViewNote {...props} notes={this.state.notes} deletenote={this.deletenote}/>}
             />
        <Route
          exact path='/notes/:id/edit'
          render={(props) => <EditNote {...props} editNote={this.editNote} notes={this.state.notes} />}
              />
      </div>
    );
  }
}

export default App;
