import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteCard from "./components/NoteCard";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import EditNote from './components/EditNote';



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

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' render={props => <NoteList {...props} notes={this.state.notes} />}/>
        <Route path='/note/:id' render={(props) => (
          <Note {...props}  notes={this.state.notes} />) } />
        <Route path='/notes/:id' render={(props) => (
          <EditNote {...props} notes={this.state.notes} />)} />
        <Route path='/NewNote' render={props =>
          <NewNote {...props} notes={this.state.notes} handleAddNote={this.handleAddNote}
          handleInputChange={this.handleInputChange} addTitle={this.state.addTitle}
          addBody={this.state.addBody}/>
        } />
      </div>
    );
  }
}

export default App;
