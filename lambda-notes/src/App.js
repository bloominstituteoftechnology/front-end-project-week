import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './App.css';
import { notesData } from './notesData';
import { NoteList } from './components/notesContainer';
import Route from 'react-router-dom/Route';
import { SingleView } from './components/noteView';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    this.setState({ 
      notes: notesData,
     })
  }

  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <h1 className="App-title">Lambda Notes</h1>
          <Link to="/" ><button>View Your Notes</button></Link>
          <Link to="" ><button>+ Create New Note</button></Link>
        </div>
        <div className="display-right" >
          <Route exact path="/" render={props => (<NoteList {...props} notes={this.state.notes} />)} />
          <Route exact path="/notes/:id" render={props => (<SingleView {...props} notes={this.state.notes} /> )} />
        </div>
      </div>
    );
  }
}

export default App;
