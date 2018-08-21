import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './App.css';
import { notesData } from './notesData';
import { NoteList } from './components/notesContainer';
import Route from 'react-router-dom/Route';
import { SingleView } from './components/noteView';
import { AddNote } from './components/addNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: '',
      title: '',
      text: ''
    }
  }

  componentDidMount(){
    this.setState({ 
      notes: notesData,
     })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = event => {
    event.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ 
      id: this.state.notes.length, 
      title: this.state.title, 
      text: this.state.text 
    });
    this.setState({ 
      notes, 
      id: '',
      title: '',
      text: '' 
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <h1 className="App-title">Lambda <br/> Notes</h1>
          <Link to="/" ><div className="nav-button" >View Your Notes</div ></Link>
          <Link to="/add" ><div className="nav-button" >+ Create New Note</div></Link>
        </div>
        <div className="display-right" >
          <Route exact path="/" render={props => (<NoteList {...props} notes={this.state.notes} />)} />
          <Route exact path="/notes/:id" render={props => (<SingleView {...props} notes={this.state.notes} /> )} />
          <Route exact path="/add" render={props => (<AddNote {...props} notes={this.state.notes} handleInputChange={this.handleInputChange} inputTitle={this.state.title} inputText={this.state.text} addNewNote={this.addNewNote} /> ) } />
        </div>
      </div>
    );
  }
}

export default App;
