import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteCard from "./components/NoteCard";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import Note from "./components/Note";




class App extends Component {
  state = {
    notes: [
        "title": '',
        "content": ''
        ],
    addTitle: '',
    addContent: ''
  }

  componentDidMount() {
    axios
    .get('http://localhost:3300/notes')
    .then(response => {
      console.log(response);
      this.setState({notes: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  handleAddNote = event => {
    event.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({id: this.state.notes.length, title: this.state.addTitle, content: this.state.addContent});
    this.setState({notes, addTitle: '', addBody: ''});
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' render={props => <NoteList {...props} notes={this.state.notes} />}/>
        <Route path='/Note/:id' render={props => <Note {...props} notes={this.state.notes} />} />
        <Route path='/NewNote' render={props =>
          <NewNote {...props} notes={this.state.notes} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} addTitle={this.state.addTitle} addBody={this.state.addBody}/>
        } />
      </div>
    );
  }
}

export default App;
